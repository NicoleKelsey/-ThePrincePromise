/* RSVP form. Client-side checks are for friendliness only - the real validation and
   spam checks happen on the server (apps-script/Code.gs).
   Flow: guest types the code from their invitation -> the form shows the people named on it
   (looked up from the private Sheet) -> they say Yes/No for each person -> send.
   A success message is shown ONLY when the server replies {"ok":true}. */
(function () {
  'use strict';
  var C = window.WEDDING_CONFIG, R = C.rsvp, root = document.getElementById('rsvp-root');
  if (!root) return;

  var live = typeof R.endpoint === 'string' && /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(R.endpoint.trim());
  var openedAt = Date.now();
  var STORE = 'wedding-rsvp-submitted';
  var invitation = null; // { code, names: [...] } once the code has been verified

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(s, r) { return (r || root).querySelector(s); }

  if (!live) console.warn('[RSVP] No valid endpoint configured in js/config.js - the RSVP form is closed. See README → "Set up RSVP".');

  root.innerHTML =
    (live ? '' : '<div class="alert alert-info" role="status">' + esc(R.closedMessage) + '</div>') +
    '<form id="rsvp-form" class="form" novalidate' + (live ? '' : ' aria-disabled="true"') + '>' +
    '<fieldset ' + (live ? '' : 'disabled') + '>' +
    '<div class="field"><label for="f-code">Invitation code <span class="req">*</span></label>' +
    '<input id="f-code" name="code" type="text" maxlength="30" autocomplete="off" autocapitalize="characters" spellcheck="false" required>' +
    '<p class="hint">You\'ll find this code on your invitation.</p><p class="err" id="e-code" hidden></p>' +
    '<button type="button" class="btn btn-ghost" id="find-inv" style="margin-top:.6rem">Find my invitation</button></div>' +

    '<div id="inv-box" hidden>' +
    '<div class="field"><p class="lead" id="inv-hello" style="margin:0 0 .2rem"></p>' +
    '<p class="hint">Please tell us who will be joining us. Our venue has limited capacity, so we can only celebrate with the guests named on your invitation.</p>' +
    '<div id="guest-list"></div><p class="err" id="e-guests" hidden></p></div>' +
    '<div id="yes-fields" hidden>' +
    '<div class="field"><label for="f-diet">Dietary requirements <span class="opt">(optional)</span></label><textarea id="f-diet" name="dietary" rows="2" maxlength="300" placeholder="e.g. vegetarian, halal (please say who)"></textarea></div>' +
    '<div class="field"><label for="f-allergy">Food allergies <span class="opt">(optional)</span></label><textarea id="f-allergy" name="allergies" rows="2" maxlength="300"></textarea></div>' +
    '</div>' +
    '<div class="field"><label for="f-msg">Message to Nicole &amp; Ryan <span class="opt">(optional)</span></label><textarea id="f-msg" name="message" rows="3" maxlength="600"></textarea></div>' +
    // Honeypot: hidden from people, irresistible to bots.
    '<div class="hp" aria-hidden="true"><label>Leave this empty <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>' +
    '<p class="err" id="e-form" role="alert" hidden></p>' +
    '<button class="btn btn-block" type="submit" id="rsvp-submit">Send RSVP</button>' +
    '<p class="fine center">Your answers are kept private and only seen by Nicole and Ryan.</p>' +
    '</div>' +
    '</fieldset></form>' +
    '<div id="rsvp-result" tabindex="-1" aria-live="polite"></div>';

  var form = $('#rsvp-form');
  var already = null; try { already = localStorage.getItem(STORE); } catch (e) {}
  if (live && already) {
    form.insertAdjacentHTML('beforebegin', '<div class="alert alert-info" role="status">You\'ve already sent an RSVP from this device. If your plans change, simply enter your code and submit again. Your latest answer replaces the earlier one.</div>');
  }

  function showErr(id, msg) { var e = $('#' + id); if (!e) return; e.textContent = msg; e.hidden = !msg; var inp = e.parentNode.querySelector('input,select,textarea'); if (inp && msg) inp.setAttribute('aria-invalid', 'true'); else if (inp) inp.removeAttribute('aria-invalid'); }
  function result(type, title, body) {
    var el = $('#rsvp-result');
    el.innerHTML = '<div class="alert alert-' + type + '" role="' + (type === 'error' ? 'alert' : 'status') + '"><h3>' + esc(title) + '</h3><p>' + body + '</p></div>';
    el.focus(); el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
  }

  /* ---------- step 1: look up the invitation ---------- */
  function resetInvitation() {
    invitation = null; $('#inv-box').hidden = true; $('#guest-list').innerHTML = '';
  }
  function showInvitation(code, names) {
    invitation = { code: code, names: names };
    $('#inv-hello').textContent = 'Hello ' + (names.length === 1 ? names[0] : names.slice(0, -1).join(', ') + ' & ' + names[names.length - 1]) + '!';
    $('#guest-list').innerHTML = names.map(function (n, i) {
      return '<div class="field guest-row"><span class="label" id="g-l' + i + '">' + esc(n) + '</span>' +
        '<div class="radios" role="radiogroup" aria-labelledby="g-l' + i + '">' +
        '<label class="radio"><input type="radio" name="g' + i + '" value="yes"> <span>Joyfully accepts</span></label>' +
        '<label class="radio"><input type="radio" name="g' + i + '" value="no"> <span>Regretfully unable to attend</span></label></div></div>';
    }).join('');
    $('#inv-box').hidden = false;
    refresh();
    var first = $('#guest-list input'); if (first) first.focus();
  }
  function findInvitation() {
    var code = $('#f-code').value.trim(), btn = $('#find-inv');
    showErr('e-code', ''); $('#rsvp-result').innerHTML = '';
    if (!code) { showErr('e-code', 'Please enter the invitation code from your invitation.'); $('#f-code').focus(); return; }
    btn.disabled = true; btn.textContent = 'Looking…';
    var ctrl = ('AbortController' in window) ? new AbortController() : null;
    var t = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
    fetch(R.endpoint.trim() + '?action=lookup&code=' + encodeURIComponent(code), { signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        clearTimeout(t); btn.disabled = false; btn.textContent = 'Find my invitation';
        if (j && j.ok === true && Array.isArray(j.names) && j.names.length) showInvitation(code, j.names);
        else { resetInvitation(); showErr('e-code', (j && j.error) ? j.error : 'We couldn\'t find that code. Please check it and try again.'); }
      })
      .catch(function () {
        clearTimeout(t); btn.disabled = false; btn.textContent = 'Find my invitation';
        showErr('e-code', 'We couldn\'t reach the RSVP service. Please check your connection and try again.');
      });
  }
  $('#find-inv').addEventListener('click', findInvitation);
  $('#f-code').addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); findInvitation(); } });
  $('#f-code').addEventListener('input', function () { if (invitation && $('#f-code').value.trim().toLowerCase() !== invitation.code.toLowerCase()) resetInvitation(); });

  /* ---------- step 2: answers ---------- */
  function answers() {
    return invitation.names.map(function (n, i) { var r = form.querySelector('input[name="g' + i + '"]:checked'); return r ? r.value : null; });
  }
  function refresh() {
    if (!invitation) return;
    $('#yes-fields').hidden = answers().indexOf('yes') === -1;
  }
  form.addEventListener('change', refresh);

  function validate() {
    showErr('e-code', ''); showErr('e-guests', ''); showErr('e-form', '');
    if (!invitation) { showErr('e-code', 'Please enter your invitation code and tap "Find my invitation".'); $('#f-code').focus(); return false; }
    if (answers().indexOf(null) !== -1) { showErr('e-guests', 'Please answer for everyone on your invitation.'); return false; }
    return true;
  }

  function collect() {
    var g = function (id) { var e = $('#' + id); return e ? e.value.trim() : ''; };
    return {
      code: invitation.code,
      attendance: answers(),
      dietary: g('f-diet'),
      allergies: g('f-allergy'),
      message: g('f-msg'),
      website: form.querySelector('input[name="website"]').value, // honeypot
      elapsedMs: Date.now() - openedAt
    };
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!live) return;
    if (!validate()) return;
    var btn = $('#rsvp-submit'), data = collect(), names = invitation.names;
    btn.disabled = true; btn.textContent = 'Sending…'; $('#rsvp-result').innerHTML = '';
    var ctrl = ('AbortController' in window) ? new AbortController() : null;
    var t = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
    // text/plain avoids a CORS preflight, which Apps Script cannot answer.
    fetch(R.endpoint.trim(), { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data), signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        clearTimeout(t);
        if (j && j.ok === true) {
          try { localStorage.setItem(STORE, new Date().toISOString()); } catch (e) {}
          var anyYes = data.attendance.indexOf('yes') !== -1;
          form.hidden = true;
          if (anyYes && window.WeddingMagic) window.WeddingMagic.celebrate();
          result('success', j.updated ? 'Your RSVP has been updated' : 'Thank you, ' + esc(names[0].split(' ')[0]) + '!',
            anyYes ? 'We\'ve received your RSVP and can\'t wait to celebrate with you on ' + esc(C.wedding.displayDate) + '.' : 'We\'ve received your reply. We\'ll miss you, and thank you for letting us know.');
        } else {
          var msg = (j && j.error) ? esc(j.error) : 'Something went wrong on our side.';
          showErr('e-form', 'We couldn\'t save your RSVP: ' + msg);
          result('error', 'Your RSVP was not saved', msg + ' Please check your answers and try again, or contact us directly.');
          btn.disabled = false; btn.textContent = 'Send RSVP';
        }
      })
      .catch(function () {
        clearTimeout(t);
        result('error', 'Your RSVP was not saved', 'We couldn\'t reach the RSVP service (please check your connection). Nothing has been recorded. Please try again in a moment, or contact us directly.');
        btn.disabled = false; btn.textContent = 'Send RSVP';
      });
  });
})();
