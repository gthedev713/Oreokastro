export type DaySchedule = {
  day: string;
  short: string;
  hours: string[];
  closed?: boolean;
};

export type Review = {
  name: string;
  initial: string;
  meta: string;
  quote: string;
  rating: number;
};

export type Service = {
  title: string;
  blurb: string;
  icon: string;
  span: string;
  tint: string;
};

export type Stat = {
  value: string;
  label: string;
  caption: string;
  icon: string;
};

export const business = {
  name: "Stella Attiva",
  tagline: "Boutique de mode",
  shortName: "Stella",
  city: "Oreokastro",
  region: "Thessaloniki",
  address: "Aristotelous 2, Oreokastro 570 13, Greece",
  // No public phone is listed on Google Maps — replace with the real number.
  phoneDisplay: "+30 2310 000 000",
  phoneHref: "+302310000000",
  website: "https://stellaattiva.myshopify.com",
  mapsUrl: "https://maps.app.goo.gl/DpL5HsAMF2tqT4HYA",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Stella+attiva+Aristotelous+2+Oreokastro+570+13",
  rating: 5.0,
  reviewCount: 8,
  plusCode: "PWH8+89 Oraiokastro",
};

export const schedule: DaySchedule[] = [
  { day: "Monday", short: "Mon", hours: ["10:00 – 14:00", "17:00 – 21:00"] },
  { day: "Tuesday", short: "Tue", hours: ["10:00 – 14:00", "17:00 – 21:00"] },
  { day: "Wednesday", short: "Wed", hours: ["10:00 – 14:30"] },
  { day: "Thursday", short: "Thu", hours: ["10:00 – 14:00", "17:00 – 21:00"] },
  { day: "Friday", short: "Fri", hours: ["10:00 – 14:00", "17:00 – 21:00"] },
  { day: "Saturday", short: "Sat", hours: ["10:00 – 15:00"] },
  { day: "Sunday", short: "Sun", hours: ["Closed"], closed: true },
];

export const services: Service[] = [
  {
    title: "Curated Womenswear",
    blurb:
      "A tight, season-led edit of dresses, blouses and separates — chosen piece by piece so every rack earns its place.",
    icon: "hanger",
    span: "lg:col-span-3 lg:row-span-2",
    tint: "terracotta",
  },
  {
    title: "Personal Styling",
    blurb:
      "Tell us the occasion; we'll pull the looks. One-on-one styling that flatters your shape, not a trend you'll regret.",
    icon: "sparkle",
    span: "lg:col-span-3",
    tint: "rosewood",
  },
  {
    title: "Occasion Dressing",
    blurb:
      "Weddings, christenings, a night that matters — find the dress that turns heads for the right reasons.",
    icon: "dress",
    span: "lg:col-span-3",
    tint: "plum",
  },
  {
    title: "New Arrivals Weekly",
    blurb:
      "Fresh pieces land on the floor every week, so there's always a reason to step back in.",
    icon: "bag",
    span: "lg:col-span-2",
    tint: "gold",
  },
  {
    title: "Delivery Across Greece",
    blurb:
      "Found it but can't make it in? We'll wrap it and send it to your door.",
    icon: "truck",
    span: "lg:col-span-2",
    tint: "olive",
  },
  {
    title: "Gift-Ready Wrapping",
    blurb:
      "Every purchase leaves beautifully wrapped — gifting made effortless.",
    icon: "gift",
    span: "lg:col-span-2",
    tint: "terracotta",
  },
];

export const stats: Stat[] = [
  {
    value: "5.0",
    label: "Star rating",
    caption: "Every review, five stars",
    icon: "star",
  },
  {
    value: "100%",
    label: "Recommend us",
    caption: "Shoppers who come back",
    icon: "heart",
  },
  {
    value: "Weekly",
    label: "New arrivals",
    caption: "Fresh edits on the floor",
    icon: "spark",
  },
  {
    value: "Women",
    label: "Owned & run",
    caption: "Styled by women, for women",
    icon: "crown",
  },
];

export const reviews: Review[] = [
  {
    name: "Sakis M.",
    initial: "S",
    meta: "Local Guide · Google",
    quote:
      "Beautiful clothes and, above all, a lovely place to shop. Well done to the whole team!",
    rating: 5,
  },
  {
    name: "Alexandra T.",
    initial: "A",
    meta: "Verified shopper · Google",
    quote:
      "Gorgeous pieces and genuinely excellent service. I left with exactly what I was looking for.",
    rating: 5,
  },
  {
    name: "Christina N.",
    initial: "C",
    meta: "Local Guide · Google",
    quote:
      "A little boutique with real taste. The styling help made all the difference — I'll be back.",
    rating: 5,
  },
  {
    name: "Georgia N.",
    initial: "G",
    meta: "Verified shopper · Google",
    quote:
      "Warm welcome, beautiful selection, and they actually listen to what suits you. Highly recommend.",
    rating: 5,
  },
  {
    name: "Dimitra K.",
    initial: "D",
    meta: "Local Guide · Google",
    quote:
      "Found the dress for my event in ten minutes. Lovely owner, lovely shop.",
    rating: 5,
  },
];

export const navLinks = [
  { label: "Shop", href: "#services" },
  { label: "Why Stella", href: "#why" },
  { label: "Loved by", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];
