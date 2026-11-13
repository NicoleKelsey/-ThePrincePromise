/* ==========================================================================
   NICOLE & RYAN - WEDDING WEBSITE CONFIGURATION
   --------------------------------------------------------------------------
   This is the ONLY file you normally need to edit.

   Rules of thumb
   • Anything set to null or "" is treated as "not confirmed yet" and the site
     shows a gentle placeholder ("To be confirmed") instead of an empty gap.
   • Never invent details here. Leave null until it is real.
   • Never put passwords, bank details or secret keys in this file - it is
     public once the site is published.
   • Image paths are relative to index.html, e.g. "assets/images/hero.jpg".
   ========================================================================== */

window.WEDDING_CONFIG = {

  /* ---------- Site / search / social sharing ---------- */
  site: {
    title: "Nicole & Ryan | 18 September 2027",
    description: "Join Nicole & Ryan as they celebrate their wedding at Annerkant Venue, Kirkwood, Eastern Cape on Saturday, 18 September 2027.",
    // After publishing, put your full address here, e.g.
    // "https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/". (Share-preview tags are fixed in index.html; change them there if your address changes.)
    publicUrl: null,
    // Optional share-preview picture (1200x630 jpg). Needs publicUrl set.
    shareImage: null,
  },

  /* ---------- Couple & date (CONFIRMED) ---------- */
  couple: {
    name1: "Nicole",
    name2: "Ryan",
    monogram: "N&R",
    hashtag: "#ThePrincePromise",   // shown in the hero, envelope, gallery and footer. Set to null to hide.
  },
  wedding: {
    // The countdown runs to the START of this day in South Africa (UTC+2).
    startsAtIso: "2027-09-18T00:00:00+02:00",
    displayDate: "Saturday, 18 September 2027",
    shortDate: "18 September 2027",
    timeZoneLabel: "South African Standard Time (SAST, UTC+2)",
    town: "Kirkwood, Eastern Cape",
    country: "South Africa",
  },

  /* ---------- Images (set to null to use the elegant placeholder) ---------- */
  images: {
    hero: "assets/images/hero.webp",   // landscape background photo
    story: "assets/images/story.webp", // portrait photo beside the "Our Story" intro
    storyPhotoAlt: "Nicole and Ryan embracing on the beach at sunset",
    photoCredit: "Engagement photography: Kaalvoet Foto's",   // shown in the footer; set null to hide
  },

  /* ---------- Navigation (labels are editable; ids must match the sections) ---------- */
  nav: [
    { label: "Home", id: "home" },
    { label: "Our Story", id: "story" },
    { label: "Wedding Details", id: "details" },
    { label: "Schedule", id: "schedule" },
    { label: "Accommodation", id: "accommodation" },
    { label: "FAQ", id: "faq" },
    { label: "Gallery", id: "gallery" },
    { label: "Gifts", id: "gifts" },
  ],
  rsvpButtonLabel: "RSVP",

  /* ---------- Messages ---------- */
  messages: {
    heroWelcome: "We are so happy you are here. Together with our families, we can't wait to celebrate the beginning of our forever with you.",
    welcomeTitle: "Welcome, dear family and friends",
    welcomeBody: "Thank you for being part of our story. This website will hold everything you need to know about our day, from where to stay to what to wear. We'll keep it updated as our plans come together.",
    countdownDone: "Today is the day, we're getting married!",
    countdownAfter: "We're married! Thank you for celebrating with us.",
    tbc: "To be confirmed",
  },

  /* ---------- Our Story (PLACEHOLDER TEXT - replace with yours) ---------- */
  story: {
    intro: "Every love story is beautiful, but ours is our favourite. ❤️",
    // One continuous story (no sub-headings). Add more items only if you want separate headed sections.
    timeline: [
      { title: "", when: null, text: [
        "Our story began back in primary and high school, where we knew each other as friends, never imagining we'd end up here. On 25 June 2022, at the Kirkwood Wildsfees, Nicole made the first move, and Ryan fell right into her little trap! A few months later, on 10 October 2022, Ryan officially asked Nicole to be his girlfriend during a picnic at Schoemanskroon Farm.",
        "Our first date was a simple trip to Burger King in Uitenhage, followed by Galaxy Casino, where Nicole managed to lose Ryan's money trying her luck at the slots! She may not have won at the casino, but luckily, she won his heart.",
        "Since then, we've built a life together, from saving for our first home to finally moving into it in 2025. Along the way, we welcomed our two fur babies, Lexi and Leo, and built a little family filled with love, laughter and plenty of chaos.",
        "On our fourth anniversary, Ryan surprised Nicole with a romantic beach proposal, complete with a secret photographer and the most important question of all. Of course, she said YES! We celebrated with a romantic night at The Boardwalk Hotel and ended the evening at the casino, where Nicole finally won back the money she lost on our first date!",
        "And now, we're ready for our biggest adventure yet – becoming husband and wife! We can't wait to celebrate with everyone we love.",
      ] },
    ],
    messageTitle: "The best is yet to come!",
    messageToGuests: [
      "**Love, Nicole & Ryan 🤍**",
    ],
    placeholderText: "Our story is coming soon. We'll share it here.",
  },

  /* ---------- Wedding details ----------
     Fill in as things are confirmed. null = shows "To be confirmed". */
  details: {
    venueName: "Annerkant Venue",
    venueAddress: "H9RW+F3, Nqweba",   // Google Maps plus code
    ceremonyLocation: null,
    receptionLocation: null,       // leave null if the same as the ceremony venue
    guestArrivalTime: "13:30",
    ceremonyTime: "14:00",
    receptionTime: "17:00",
    finishTime: "00:00",
    dressCode: "Semi-formal",
    parking: "Free parking is available at the venue.",
    accessibility: null,
    weatherPlan: "Our venue can host both indoor and outdoor weddings, so we're ready whatever the weather.",
    guestInstructions: null,
    // Optional: paste a Google Maps share link. If null but venueAddress is set,
    // a directions link is built automatically from the address.
    mapsQuery: "Annerkant Venue, H9RW+F3, Nqweba",   // used for the directions button AND the embedded map
    mapsUrl: null,
  },

  /* ---------- Travel ---------- */
  travel: {
    general: null,           // e.g. advice for guests travelling from outside Kirkwood
    parking: "Free parking is available at the venue.",
    transport: null,         // optional shuttle / lift-club arrangements
    accommodationToVenue: null,
    overnightReminder: "Kirkwood is a small town, so we recommend arranging overnight accommodation well in advance.",
  },

  /* ---------- Schedule ----------
     SUGGESTED running order only. Set confirmed:true once the real timings are agreed
     (the "to be confirmed" notice disappears automatically). */
  schedule: {
    confirmed: false,
    notice: "Arrival, ceremony, reception and finish times are confirmed. The other times will be confirmed closer to the day.",
    items: [
      { time: "13:30", title: "Guest arrival", note: null },
      { time: "14:00", title: "Ceremony", note: null },
      { time: null, title: "Congratulations & photographs", note: null },
      { time: null, title: "Canapés & refreshments", note: null },
      { time: "17:00", title: "Reception begins", note: null },
      { time: null, title: "Dinner", note: null },
      { time: null, title: "Speeches", note: null },
      { time: null, title: "Cake cutting", note: null },
      { time: null, title: "First dance", note: null },
      { time: null, title: "Dancing & celebrations", note: null },
      { time: "00:00", title: "Finish", note: null },
    ],
  },

  /* ---------- Accommodation ----------
     Real options are listed below. Add website/bookingLink where you have the links. Every field except 'name' is optional;
     blank fields simply don't appear. Remove a card by deleting its { ... } block. */
  accommodation: {
    bookEarlyMessage: "Please book early! Kirkwood has limited accommodation and our wedding falls on 18 September 2027. Confirm availability and pricing directly with each provider.",
    disclaimer: "Capacities are as listed by the providers or booking sites and may differ. Availability and prices are not confirmed. Always check directly with the provider.",
    items: [
      {
        type: "Guesthouse",
        name: "Upper Room Guesthouse",
        location: "36 Middle Street, Kirkwood",
        capacity: "Up to 30 guests",
        notes: "One of the larger options in Kirkwood. TravelGround lists up to 30 guests, but the LekkeSlaap listing says it sleeps 12, so please confirm the total directly.",
        bookingLink: "https://www.lekkeslaap.co.za/accommodation/upper-room-guest-house",
        image: "assets/images/stay-upper-room.webp",
        imageAlt: "Upper Room Guesthouse, Kirkwood",
      },
      {
        type: "Guesthouse · family rooms · self-catering",
        name: "Nadora's Rest Guesthouse",
        location: "8 Isabel Street, Kirkwood",
        capacity: "Up to 36 guests (LekkeSlaap)",
        notes: "Guest rooms, family rooms and self-catering accommodation. LekkeSlaap lists 36 guests but another booking site lists 20, so please confirm the total with the property.",
        familyFriendly: "Family rooms available",
        website: "https://nadorasrest.co.za/",
        bookingLink: "https://www.lekkeslaap.co.za/accommodation/nadoras-rest",
        image: "assets/images/stay-nadoras-rest.webp",
        imageAlt: "Nadora's Rest Guesthouse, Kirkwood",
      },
      {
        type: "Guesthouse",
        name: "Kirkwood Guest House",
        location: "26 Mark Street, Kirkwood",
        capacity: "Total capacity not confirmed",
        notes: "A traditional guesthouse. Room types: Standard (1–2 guests), Twin (2) and Deluxe Double (2); extra person or child R150 per night by arrangement (per their website). Please ask how many rooms are available.",
        phone: "064 658 9917",
        email: "info@kirkwoodguesthouse.co.za",
        website: "https://kirkwoodguesthouse.co.za/",
        image: "assets/images/stay-kirkwood-guest-house.webp",
        imageAlt: "Entrance of Kirkwood Guest House, 26 Mark Street",
      },
      {
        type: "Guesthouse & restaurant",
        name: "Kronenhoff Guest House & Restaurant",
        capacity: "18 double suites (per their website)",
        notes: "Guesthouse and restaurant near Addo Elephant National Park. Contact the property to confirm room availability and group rates.",
        website: "https://kronenhoff.co.za/",
        image: "assets/images/stay-kronenhoff.webp",
        imageAlt: "Kronenhoff Guest House & Restaurant, Kirkwood",
      },
      {
        type: "Self-catering house",
        name: "Rest @ Mimosa",
        capacity: "4 guests (maximum, per the property's website)",
        bedrooms: "2 bedrooms, 2 bathrooms",
        familyFriendly: "Suitable for a family or small group of friends",
        notes: "Self-catering house.",
        website: "https://restatmimosa.co.za/",
        image: "assets/images/stay-rest-at-mimosa.webp",
        imageAlt: "Rest @ Mimosa self-catering house, Kirkwood",
      },
      {
        type: "Self-catering cabins & campsites",
        name: "Sitrusoewer River Camp",
        location: "Beside the Sundays River",
        distance: "Approximately 8 km from Kirkwood",
        capacity: "About 17 guests in the cabins, plus additional guests at the campsites",
        bedrooms: "4 cabins: three sleep up to 4 each, the Fish Eagle cabin sleeps up to 5",
        notes: "Ideal for guests who enjoy camping, caravans or a relaxed self-catering stay by the river.",
        phone: "042 232 0503",
        email: "anneke@sitrusoewer.co.za",
        website: "https://www.sitrusoewer.co.za/",
        bookingLink: "https://www.sitrusoewer.co.za/cabins-campsites",
        image: "assets/images/stay-sitrusoewer.webp",
        imageAlt: "Sitrusoewer River Camp beside the Sundays River",
      },
      {
        type: "Self-catering farm, venue & campsites",
        name: "Nieshoutkloof Camping",
        location: "Kirkwood, Eastern Cape",
        capacity: "Sleeps 8 (the farm listing also includes campsites and Aragon's Villa)",
        bedrooms: "4 bedrooms",
        priceRange: "From R3 000 per night for the 8-sleeper (per LekkeSlaap)",
        notes: "Please check the listing for the other rooms and campsite options.",
        bookingLink: "https://www.lekkeslaap.co.za/accommodation/nieshoutkloof-camping",
        image: "assets/images/stay-nieshoutkloof.webp",
        imageAlt: "Nieshoutkloof Camping, Kirkwood",
      },
      {
        type: "Self-catering",
        name: "The Bird's Nest in the Valley",
        location: "Kirkwood, Eastern Cape",
        capacity: "Sleeps 4 (the description also says the room takes up to 2 guests at a time, so please confirm)",
        bedrooms: "2 bedrooms (one unit)",
        priceRange: "From R1 095 per night for 4 people (per LekkeSlaap)",
        notes: "Overnight room with a private entrance.",
        bookingLink: "https://www.lekkeslaap.co.za/accommodation/the-birds-nest-in-the-valley",
        image: "assets/images/stay-birds-nest.webp",
        imageAlt: "The Bird's Nest in the Valley, Kirkwood",
      },
      {
        type: "Self-catering",
        name: "Stay @ Searle",
        location: "2 Searle Street, Nqweba, Kirkwood",
        capacity: "Sleeps 2",
        bedrooms: "1 bedroom, 1 bathroom",
        priceRange: "From R1 100 per night for 2 people (per LekkeSlaap)",
        notes: "A cosy, charming unit.",
        bookingLink: "https://www.lekkeslaap.co.za/accommodation/stay--searle",
        image: "assets/images/stay-searle.webp",
        imageAlt: "Stay @ Searle, Kirkwood",
      },
      {
        type: "Self-catering",
        name: "Clivedon Cottage",
        location: "Kirkwood, Eastern Cape",
        capacity: "Sleeps 4 across 2 units",
        bedrooms: "2 units (Clivedon Cottage and the Astor Room suite), 1 bedroom each",
        priceRange: "From R1 500 per night for 2 guests (per LekkeSlaap)",
        bookingLink: "https://www.lekkeslaap.co.za/accommodation/clivedon-cottage",
        image: "assets/images/stay-clivedon-cottage.webp",
        imageAlt: "Clivedon Cottage, Kirkwood",
      },
    ],
    /* Example of a complete (real) entry - copy, un-comment and fill in:
    {
      type: "Guesthouse",
      name: "Property name",
      image: "assets/images/stay-1.jpg",
      imageAlt: "Front of the guesthouse",
      location: "Street / area",
      distance: "x km from the venue",
      capacity: "Sleeps 10",
      bedrooms: "5",
      priceRange: "R900 – R1 400 per room per night",
      phone: "+27 00 000 0000",
      website: "https://example.com",
      bookingLink: "https://example.com/book",
      parking: "Secure on-site parking",
      familyFriendly: "Yes",
      notes: "Anything else guests should know",
    },
    */
  },

  /* ---------- FAQ (questions and answers are fully editable) ---------- */
  faq: [
    { q: "When and where is the wedding?", a: "We're getting married on Saturday, 18 September 2027 at Annerkant Venue (Nqweba), Eastern Cape. Use the directions button in Wedding Details to find us on Google Maps." },
    { q: "What time should we arrive?", a: "Guests are welcome from 13:30. The ceremony starts at 14:00, and the reception begins at 17:00." },
    { q: "What should we wear?", a: "The dress code is semi-formal." },
    { q: "Are children invited?", a: "Your invitation will state exactly who is invited." },
    { q: "Can I bring a plus-one?", a: "Your invitation will state how many guests are included. Unfortunately, we are unable to offer plus-ones, as our venue has a limited capacity. Thank you for understanding, and please only RSVP for the guests named on your invitation." },
    { q: "How do I RSVP?", a: "Use the RSVP form on this website once it opens. If you'd rather reply another way, please contact us (details in the Contact section)." },
    { q: "When is the RSVP deadline?", a: "Please RSVP by 1 July 2027." },
    { q: "What should I do if my plans change?", a: "Please let us know as soon as possible by contacting us, or by submitting the RSVP form again with the same name. Your latest response replaces the earlier one." },
    { q: "Are there vegetarian or other dietary options?", a: "Catering details are to be confirmed. Please tell us about any dietary requirements in your RSVP so we can plan." },
    { q: "What if I have a food allergy?", a: "Please list any allergies in your RSVP so we can pass them to the caterers." },
    { q: "Is parking available?", a: "Yes, there is free parking available at the venue." },
    { q: "Can we take photographs during the ceremony?", a: "Yes, you are more than welcome to take photographs during the ceremony. We'd love for you to capture the moment with us." },
    { q: "Will drinks be provided, or should guests bring their own?", a: "Yes! Drinks will be provided during cocktail hour, and a card/cash bar will be available during the reception." },
    { q: "What happens if it rains?", a: "No need to worry! Our venue can accommodate both indoor and outdoor weddings, so we'll be all set whatever the weather brings." },
    { q: "Where can I stay nearby?", a: "See the Accommodation section. Please book early and confirm availability directly with the provider." },
    { q: "Who should I contact with questions?", a: "See the Contact section at the bottom of the page." },
  ],

  /* ---------- Gallery ----------
     Drop image files into assets/images/ and list them here.
     src: null (or a missing file) shows an elegant placeholder tile.
     category is a free-text label (e.g. Engagement, Memories, Pre-wedding, Wedding). */
  gallery: {
    intro: "A few moments from the day Ryan asked, with more to come.",
    items: [
      { src: "assets/images/gallery-1.webp", alt: "Ryan kneeling on the beach holding out a ring box while Nicole claps with joy", caption: "The proposal", category: "Engagement" },
      { src: "assets/images/gallery-2.webp", alt: "Nicole and Ryan kissing on the beach after the proposal", caption: "She said yes", category: "Engagement" },
      { src: "assets/images/gallery-3.webp", alt: "Nicole's engagement ring on her hand, holding a phone showing a photo of the couple", caption: "Our first photo as an engaged couple", category: "Engagement" },
      { src: "assets/images/gallery-4.webp", alt: "Nicole's hand with her engagement ring resting over Ryan's hand on his chest", caption: "Hand in hand", category: "Engagement" },
      { src: "assets/images/gallery-5.webp", alt: "Ryan kissing Nicole's hand while she smiles at him in the golden light", caption: "Golden hour", category: "Engagement" },
      { src: "assets/images/gallery-6.webp", alt: "Nicole laughing on the beach at sunset, holding Ryan's hand", caption: "Pure joy", category: "Engagement" },
    ],
  },

  /* ---------- Gifts ---------- */
  gifts: {
    personalMessage: "Your presence at our wedding is the greatest gift. If you'd like to give something as well, we are so grateful, but please never feel any obligation.",
    // Add real links only. Example: { label: "Our registry", url: "https://..." }
    registryLinks: [],
    suggestions: null,          // e.g. text describing gift ideas
    honeymoonNote: null,        // e.g. text about honeymoon contributions
    contributionLinks: [],      // e.g. { label: "Honeymoon fund", url: "https://..." }
    moreDetailsMessage: "More details to follow.",
  },

  /* ---------- Announcements ----------
     Newest first is typical. Add / remove / reorder freely.
     date: "YYYY-MM-DD" or null. Empty list shows a friendly message. */
  announcements: [
    { date: null, title: "Save the date", text: "We're getting married on Saturday, 18 September 2027 at Annerkant Venue, Nqweba, Eastern Cape. Further details to follow." },
  ],

  /* ---------- Contact ----------
     Only valid values create links. Nothing here is invented. */
  contact: {
    name: null,                  // e.g. "Nicole"
    email: null,                 // e.g. "name@example.com"
    whatsappNumber: null,        // display, e.g. "+27 82 000 0000"
    whatsappLink: null,          // e.g. "https://wa.me/27820000000"
    message: "Questions? We'd love to hear from you.",
  },

  /* ---------- RSVP ----------
     See README.md → "Set up RSVP". Until `endpoint` is set the form is
     visibly closed and can never claim a response was saved. */
  rsvp: {
    endpoint: null,              // Google Apps Script web-app URL (ends in /exec)
    deadline: "1 July 2027",    // e.g. "30 June 2027" - null shows "To be confirmed"
    maxGuestsPerInvitation: 2,   // total people on one invitation, including the guest.
                                 // ALSO enforced on the server (apps-script/Code.gs).
    childrenInvited: false,      // true shows children questions
    requireInvitationCode: true, // true = guests must type the code printed on their invitation
    closedMessage: "RSVPs are not open yet. We'll announce here as soon as they are.",
  },

  /* ---------- Song requests ----------
     Uses the same RSVP backend. Songs are saved privately in your Sheet (tab "Songs"). */
  songs: {
    enabled: true,
    title: "Request a song",
    intro: "Help us build the dance-floor playlist! Tell us the song that will get you out of your seat.",
    maxPerGuest: 3,        // also enforced on the server (Script Property MAX_SONGS_PER_GUEST)
  },

  /* ---------- Opening envelope ----------
     replay: "always"  = the envelope shows every time the page loads or is refreshed
             "session" = once per visit (a refresh in the same tab skips it)
     enabled: false hides the envelope completely. */
  intro: {
    enabled: true,
    replay: "always",
  },

  /* ---------- Atmosphere ---------- */
  effects: {
    petals: false,          // gently falling petals (automatically off for visitors who prefer reduced motion)
    tapBurst: true,         // confetti of hearts & petals when guests tap the page, and when the invitation opens
  },
};
