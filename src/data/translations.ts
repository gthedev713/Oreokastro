import type { Lang } from "../context/LanguageContext";

export type TranslationData = {
  nav: { shop: string; why: string; reviews: string; visit: string };
  header: { directions: string; call: string };
  hero: {
    slides: { eyebrow: string; lead: string; emphasis: string; tail: string; subtitle: string }[];
    cta1: string;
    cta2: string;
  };
  marquee: { kind: string; text: string }[];
  services: {
    eyebrow: string; heading1: string; heading2: string; sub: string;
    items: { title: string; blurb: string }[];
  };
  whyus: {
    eyebrow: string; heading1: string; heading2: string; sub: string;
    stats: { value: string; label: string; caption: string }[];
  };
  reviews: {
    eyebrow: string; heading1: string; heading2: string; sub: string;
    items: { quote: string }[];
  };
  visit: { eyebrow: string; heading1: string; city: string; ourBoutique: string; openNow: string; closedNow: string; seeFullHours: string; getDirections: string; weeklyHours: string; weeklyHoursSub: string; today: string; closed: string };
  cta: { eyebrow: string; heading1: string; heading2: string; sub: string; call: string; directions: string };
  footer: { description: string; getInTouch: string; hours: string; explore: string; googleProfile: string; rights: string; tagline: string };
};

export const t: Record<Lang, TranslationData> = {
  en: {
    nav: { shop: "Shop", why: "Why Stella", reviews: "Loved by", visit: "Visit" },
    header: { directions: "Directions", call: "Call us" },
    hero: {
      slides: [
        { eyebrow: "Oreokastro · Women-owned boutique", lead: "Get dressed for", emphasis: "the moments", tail: "that matter", subtitle: "A hand-picked edit of dresses and separates, styled by women who actually want you to feel like yourself." },
        { eyebrow: "Occasion dressing made easy", lead: "The dress you'll", emphasis: "remember", tail: "wearing", subtitle: "Weddings, dinners, the day you just felt good — come in and we'll find the one together." },
        { eyebrow: "New arrivals every week", lead: "Quietly confident", emphasis: "everyday", tail: "style", subtitle: "Considered pieces in warm, wearable tones — the kind you reach for again and again." },
      ],
      cta1: "Plan your visit",
      cta2: "Get directions",
    },
    marquee: [
      { kind: "stat", text: "5.0★ on Google" },
      { kind: "quote", text: "Beautiful clothes and lovely service — Sakis M." },
      { kind: "stat", text: "Women-owned in Oreokastro" },
      { kind: "quote", text: "Exactly what I was looking for — Alexandra T." },
      { kind: "stat", text: "New arrivals every week" },
      { kind: "quote", text: "A little boutique with real taste — Christina N." },
      { kind: "stat", text: "Delivery across Greece" },
      { kind: "quote", text: "Found my dress in ten minutes — Dimitra K." },
    ],
    services: {
      eyebrow: "What you'll find inside",
      heading1: "More than a rack of clothes —",
      heading2: "a proper styling experience",
      sub: "Everything here is chosen by hand and styled with intention. Come for a dress, leave with a look that actually feels like you.",
      items: [
        { title: "Curated Womenswear", blurb: "A tight, season-led edit of dresses, blouses and separates — chosen piece by piece so every rack earns its place." },
        { title: "Personal Styling", blurb: "Tell us the occasion; we'll pull the looks. One-on-one styling that flatters your shape, not a trend you'll regret." },
        { title: "Occasion Dressing", blurb: "Weddings, christenings, a night that matters — find the dress that turns heads for the right reasons." },
        { title: "New Arrivals Weekly", blurb: "Fresh pieces land on the floor every week, so there's always a reason to step back in." },
        { title: "Delivery Across Greece", blurb: "Found it but can't make it in? We'll wrap it and send it to your door." },
        { title: "Gift-Ready Wrapping", blurb: "Every purchase leaves beautifully wrapped — gifting made effortless." },
      ],
    },
    whyus: {
      eyebrow: "Why women keep coming back",
      heading1: "Small shop, big on",
      heading2: "the details",
      sub: "No pushy sales, no overwhelming racks. Just a warm room, a sharp eye, and pieces worth the trip.",
      stats: [
        { value: "5.0", label: "Star rating", caption: "Every review, five stars" },
        { value: "100%", label: "Recommend us", caption: "Shoppers who come back" },
        { value: "Weekly", label: "New arrivals", caption: "Fresh edits on the floor" },
        { value: "Women", label: "Owned & run", caption: "Styled by women, for women" },
      ],
    },
    reviews: {
      eyebrow: "Loved in Oreokastro",
      heading1: "Eight reviews.",
      heading2: "Every one of them five stars.",
      sub: "We're a small boutique, so every visit counts — and our shoppers keep telling the same story.",
      items: [
        { quote: "Beautiful clothes and, above all, a lovely place to shop. Well done to the whole team!" },
        { quote: "Gorgeous pieces and genuinely excellent service. I left with exactly what I was looking for." },
        { quote: "A little boutique with real taste. The styling help made all the difference — I'll be back." },
        { quote: "Warm welcome, beautiful selection, and they actually listen to what suits you. Highly recommend." },
        { quote: "Found the dress for my event in ten minutes. Lovely owner, lovely shop." },
      ],
    },
    visit: {
      eyebrow: "Come say hello",
      heading1: "Find us in the heart of",
      city: "Oreokastro",
      ourBoutique: "Our boutique",
      openNow: "Open now",
      closedNow: "Closed now",
      seeFullHours: "See full hours",
      getDirections: "Get directions",
      weeklyHours: "Weekly hours",
      weeklyHoursSub: "Tap any day to expand. Today is highlighted for you.",
      today: "Today",
      closed: "Closed",
    },
    cta: {
      eyebrow: "Your next favourite outfit is waiting",
      heading1: "Stop scrolling.",
      heading2: "Come get styled.",
      sub: "Pop in this week, give us a call, or get directions — we'll have the rack ready and the kettle on.",
      call: "Call us",
      directions: "Get directions",
    },
    footer: {
      description: "A women-owned boutique in Oreokastro, Thessaloniki. Hand-picked womenswear, honest styling, and a warm welcome every time.",
      getInTouch: "Get in touch",
      hours: "Mon–Sat · See weekly hours",
      explore: "Explore",
      googleProfile: "Google profile",
      rights: "All rights reserved.",
      tagline: "Boutique womenswear",
    },
  },
  gr: {
    nav: { shop: "Συλλογή", why: "Γιατί Stella", reviews: "Αγαπημένο", visit: "Επίσκεψη" },
    header: { directions: "Οδηγίες", call: "Καλέστε μας" },
    hero: {
      slides: [
        { eyebrow: "Ωραιόκαστρο · Γυναικεία μπουτίκ", lead: "Ντυθείτε για", emphasis: "τις στιγμές", tail: "που μετράνε", subtitle: "Μια επιλεγμένη συλλογή φορεμάτων και separates, στυλαρισμένη από γυναίκες που θέλουν να νιώθετε τον εαυτό σας." },
        { eyebrow: "Ντύσιμο για κάθε περίσταση", lead: "Το φόρεμα που θα", emphasis: "θυμάστε", tail: "για πάντα", subtitle: "Γάμοι, βραδινές εξόδους, η μέρα που απλά νιώσατε υπέροχα — ελάτε και θα το βρούμε μαζί." },
        { eyebrow: "Νέες αφίξεις κάθε εβδομάδα", lead: "Ήσυχη", emphasis: "καθημερινή", tail: "κομψότητα", subtitle: "Σκεφτικά κομμάτια σε ζεστές, φορέσιμες αποχρώσεις — αυτά που επιλέγετε ξανά και ξανά." },
      ],
      cta1: "Σχεδιάστε την επίσκεψή σας",
      cta2: "Οδηγίες",
    },
    marquee: [
      { kind: "stat", text: "5.0★ στο Google" },
      { kind: "quote", text: "Όμορφα ρούχα και υπέροχη εξυπηρέτηση — Σάκης Μ." },
      { kind: "stat", text: "Γυναικεία μπουτίκ στο Ωραιόκαστρο" },
      { kind: "quote", text: "Ακριβώς αυτό που έψαχνα — Αλεξάνδρα Τ." },
      { kind: "stat", text: "Νέες αφίξεις κάθε εβδομάδα" },
      { kind: "quote", text: "Μια μπουτίκ με πραγματικό γούστο — Χριστίνα Ν." },
      { kind: "stat", text: "Αποστολή σε όλη την Ελλάδα" },
      { kind: "quote", text: "Βρήκα το φόρεμά μου σε δέκα λεπτά — Δήμητρα Κ." },
    ],
    services: {
      eyebrow: "Τι θα βρείτε μέσα",
      heading1: "Κάτι παραπάνω από ρούχα —",
      heading2: "μια πραγματική εμπειρία στυλ",
      sub: "Κάθε κομμάτι επιλέγεται χειροκίνητα με πρόθεση. Ελάτε για ένα φόρεμα, φύγετε με ένα look που σας εκφράζει.",
      items: [
        { title: "Επιλεγμένη Γυναικεία Μόδα", blurb: "Μια σχολαστική, εποχιακή επιλογή φορεμάτων, μπλουζών και separates — κάθε κομμάτι διαλεγμένο με γνώμονα το στυλ." },
        { title: "Προσωπικό Στυλ", blurb: "Πείτε μας την περίσταση και εμείς θα βρούμε τα looks. Προσωπική καθοδήγηση που κολακεύει τη σιλουέτα σας." },
        { title: "Ντύσιμο για Περιστάσεις", blurb: "Γάμοι, βαπτίσεις, μια βραδιά που μετράει — βρείτε το φόρεμα που θα κάνει εντύπωση για τους σωστούς λόγους." },
        { title: "Νέες Αφίξεις Κάθε Εβδομάδα", blurb: "Φρέσκα κομμάτια κάθε εβδομάδα, για να έχετε πάντα έναν λόγο να ξαναπεράσετε." },
        { title: "Αποστολή σε Όλη την Ελλάδα", blurb: "Βρήκατε κάτι αλλά δεν μπορείτε να έρθετε; Θα το στείλουμε στην πόρτα σας." },
        { title: "Έτοιμο για Δώρο", blurb: "Κάθε αγορά φεύγει όμορφα τυλιγμένη — η τέλεια επιλογή για δώρο." },
      ],
    },
    whyus: {
      eyebrow: "Γιατί οι γυναίκες επιστρέφουν",
      heading1: "Μικρό κατάστημα, μεγάλη",
      heading2: "προσοχή στη λεπτομέρεια",
      sub: "Χωρίς πίεση πωλήσεων, χωρίς υπερβολή. Μόνο ζεστό περιβάλλον, οξυδερκές μάτι και κομμάτια που αξίζουν την επίσκεψη.",
      stats: [
        { value: "5.0", label: "Αξιολόγηση", caption: "Κάθε κριτική, πέντε αστέρια" },
        { value: "100%", label: "Μας συστήνουν", caption: "Πελάτισσες που επιστρέφουν" },
        { value: "Εβδομαδιαίως", label: "Νέες αφίξεις", caption: "Φρέσκα κομμάτια συνεχώς" },
        { value: "Γυναίκες", label: "Ιδιοκτησία", caption: "Από γυναίκες, για γυναίκες" },
      ],
    },
    reviews: {
      eyebrow: "Αγαπημένο στο Ωραιόκαστρο",
      heading1: "Οκτώ κριτικές.",
      heading2: "Όλες με πέντε αστέρια.",
      sub: "Είμαστε μια μικρή μπουτίκ, οπότε κάθε επίσκεψη μετράει — και οι πελάτισσές μας λένε πάντα την ίδια ιστορία.",
      items: [
        { quote: "Όμορφα ρούχα και, πάνω απ' όλα, ένα υπέροχο μέρος για ψώνια. Μπράβο σε όλη την ομάδα!" },
        { quote: "Υπέροχα κομμάτια και εξαιρετική εξυπηρέτηση. Έφυγα με ακριβώς αυτό που έψαχνα." },
        { quote: "Μια μικρή μπουτίκ με πραγματικό γούστο. Η βοήθεια στο στυλ έκανε τη διαφορά — θα επιστρέψω." },
        { quote: "Ζεστή υποδοχή, όμορφη συλλογή και σε ακούνε πραγματικά. Το συστήνω ανεπιφύλακτα." },
        { quote: "Βρήκα το φόρεμα για την εκδήλωσή μου σε δέκα λεπτά. Υπέροχη ιδιοκτήτρια, υπέροχο κατάστημα." },
      ],
    },
    visit: {
      eyebrow: "Πείτε μας γεια",
      heading1: "Βρείτε μας στην καρδιά του",
      city: "Ωραιοκάστρου",
      ourBoutique: "Η μπουτίκ μας",
      openNow: "Ανοιχτά τώρα",
      closedNow: "Κλειστά τώρα",
      seeFullHours: "Δείτε πλήρες ωράριο",
      getDirections: "Οδηγίες",
      weeklyHours: "Εβδομαδιαίο ωράριο",
      weeklyHoursSub: "Πατήστε οποιαδήποτε μέρα για λεπτομέρειες. Η σημερινή είναι επισημασμένη.",
      today: "Σήμερα",
      closed: "Κλειστό",
    },
    cta: {
      eyebrow: "Το επόμενο αγαπημένο σας σύνολο σας περιμένει",
      heading1: "Σταματήστε να σκρολάρετε.",
      heading2: "Ελάτε να στυλαριστείτε.",
      sub: "Περάστε αυτή την εβδομάδα, τηλεφωνήστε μας ή πάρτε οδηγίες — θα έχουμε τη ράγα έτοιμη.",
      call: "Καλέστε μας",
      directions: "Οδηγίες",
    },
    footer: {
      description: "Γυναικεία μπουτίκ στο Ωραιόκαστρο Θεσσαλονίκης. Επιλεγμένα γυναικεία ρούχα, ειλικρινές στυλ και ζεστή υποδοχή κάθε φορά.",
      getInTouch: "Επικοινωνία",
      hours: "Δευτ–Σαβ · Δείτε εβδομαδιαίο ωράριο",
      explore: "Εξερευνήστε",
      googleProfile: "Προφίλ Google",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      tagline: "Γυναικεία μπουτίκ",
    },
  },
};