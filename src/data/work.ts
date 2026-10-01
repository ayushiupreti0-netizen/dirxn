/**
 * Case-study gallery tiles.
 *
 * The gallery is a 4-column grid. `span` is how many columns a tile takes:
 * 4 = full width, 2 = half (the default), 1 = quarter. Every tile in a row
 * shares the same height, so mix spans freely (e.g. 2 + 1 + 1).
 */
type SlotBase = {
  span?: 1 | 2 | 3 | 4;
  /** Width / height. Overrides the shared row height, so use it on full-width tiles. */
  ratio?: number;
};

export type ImageSlot = SlotBase & {
  kind?: "image";
  src: string;
  alt: string;
  /** CSS object-position for cropped images, e.g. "top" for tall screenshots. */
  position?: string;
};

export type VideoSlot = SlotBase & {
  kind: "video";
  src: string;
  alt: string;
  poster?: string;
  /** Panel colour shown behind letterboxed video. */
  bg?: string;
  fit?: "cover" | "contain";
};

/** A logo or mark letterboxed on a solid panel. */
export type LogoSlot = SlotBase & {
  kind: "logo";
  src: string;
  alt: string;
  bg: string;
  /** Padding around the artwork as a percentage of the tile width. */
  pad?: number;
  border?: boolean;
};

/** A plain colour swatch. */
export type ColorSlot = SlotBase & {
  kind: "color";
  color: string;
  border?: boolean;
  label?: string;
};

/** A row of arch-shaped palette swatches. */
export type ArchesSlot = SlotBase & {
  kind: "arches";
  colors: string[];
};

/** Portrait app screens floating on a gradient panel; each drifts at its own speed on scroll. */
export type ScreensSlot = SlotBase & {
  kind: "screens";
  bg: string;
  items: { src: string; alt: string }[];
};

export type GallerySlot = ImageSlot | VideoSlot | LogoSlot | ColorSlot | ArchesSlot | ScreensSlot;

/** Optional narrative band: what was broken, and what the product changes. */
export type CaseStory = {
  problemLabel: string;
  problems: string[];
  shiftLabel: string;
  lead: string;
  outcomes: string[];
  bg: string;
  accent: string;
};

export type CaseFeature = { title: string; desc: string };

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short client/industry label shown on cards. */
  industry: string;
  /** Second card label, e.g. "Brand & Website". */
  tagline: string;
  color: { bar: string; text: string };
  /** Card image for homepage and Work grid. */
  card: { src: string; alt: string };
  hero: { src: string; alt: string; position?: string };
  headline: [string, string];
  body: string;
  services: string[];
  industryLabel: string;
  gallery: GallerySlot[];
  description: string;
  /** Shown between the intro and the gallery when present. */
  story?: CaseStory;
  featuresLabel?: string;
  features?: CaseFeature[];
};

/* Brand palettes sampled from the supplied artwork. */
const SAMA = { green: "#224235", gold: "#CBA368", cream: "#F7F3EA", sand: "#D9CCB9" };
const TFC = { black: "#000000", white: "#FFFFFF", grey: "#EBEBEB" };
const KODELINE = { black: "#000000", white: "#FFFFFF", grey: "#EBEBEB" };
const OOTER = { purple: "#4C2EB3", teal: "#15BFB9", blue: "#1558D6", lavender: "#EEEBFA", ink: "#120D2E" };

export const caseStudies: CaseStudy[] = [
  {
    slug: "sama-elite-matrimony",
    title: "Sama Elite Matrimony",
    industry: "Matchmaking",
    tagline: "Brand & Website",
    color: { bar: SAMA.gold, text: "#0b1d15" },
    card: {
      src: "/img/cards/sama.jpg",
      alt: "Sama Elite Matrimony stationery set — green linen book, envelope with gold wax seal and business card",
    },
    hero: {
      src: "/img/sama/brand-04.jpg",
      alt: "Sama Elite Matrimony website shown on a desktop monitor and laptop",
      position: "center 40%",
    },
    headline: ["Designing for India’s Leading", "Elite Matchmaking"],
    body:
      "The goal was to create a distinctive identity for a modern matrimonial platform that felt premium and trustworthy without becoming overly traditional or generic. The brand needed to communicate exclusivity, warmth, and credibility while creating a seamless experience across digital touchpoints.",
    services: ["Logo, Branding, Website", "Design & Development"],
    industryLabel: "Matrimony Industry",
    description:
      "Logo, branding, website design & development for Sama Elite Matrimony, India’s leading elite matchmaking service.",
    gallery: [
      {
        kind: "video",
        span: 4,
        src: "/video/sama-animation.mp4",
        poster: "/img/sama/emboss-logo.jpg",
        bg: SAMA.green,
        alt: "Sama Elite Matrimony logo animation",
      },
      { kind: "logo", src: "/img/sama/logo-clearspace.png", alt: "Sama wordmark clear-space construction", bg: SAMA.cream, pad: 12 },
      { kind: "color", color: SAMA.gold, label: "Gold" },
      { kind: "arches", span: 4, colors: [SAMA.green, SAMA.gold, SAMA.cream, SAMA.sand] },
      { span: 4, src: "/img/sama/brand-04.jpg", alt: "Sama website shown on a desktop monitor and laptop" },
      { kind: "logo", src: "/img/sama/mark-green.png", alt: "Sama S monogram, gold on green", bg: "#FFFFFF", pad: 12 },
      { kind: "logo", src: "/img/sama/mark-cream.png", alt: "Sama S monogram, green on cream", bg: "#FFFFFF", pad: 12 },
      {
        kind: "video",
        span: 4,
        src: "/video/services/sama-promo.mp4",
        poster: "/img/sama/brand-04.jpg",
        bg: TFC.grey,
        alt: "Sama website promo animation",
      },
      { span: 4, src: "/img/sama/website.jpg", alt: "Sama brand guidelines spread showing logo and colour variations" },
      { src: "/img/sama/brand-03.jpg", alt: "Sama brand guidelines book" },
      { src: "/img/sama/brand-01.jpg", alt: "Sama stationery set with box, envelope and cards" },
    ],
  },
  {
    slug: "ooter",
    title: "Ooter",
    industry: "AdTech",
    tagline: "Brand & App Design",
    color: { bar: OOTER.purple, text: "#ffffff" },
    card: { src: "/img/cards/ooter-app.jpg", alt: "Ooter app login and home screens on two phones against a deep purple backdrop" },
    hero: { src: "/img/ooter/hero-phones.jpg", alt: "Ooter app login and home screens on two phones", position: "64% 50%" },
    headline: ["Bringing Structure to", "Outdoor Advertising"],
    body:
      "Digital advertising is measured to the click. Billboards still run on a different logic: visibility, recall, presence. Ooter brings that world into one app, so a brand without insider access can discover hoardings, compare prices and book a site as easily as anything else online. We shaped the identity and designed the app experience that makes a scattered industry feel simple.",
    services: ["Logo & Brand Identity,", "App UI/UX Design"],
    industryLabel: "Out-of-Home Advertising",
    description: "Brand identity and app UI/UX design for Ooter, a platform for discovering, comparing and booking outdoor advertising.",
    story: {
      problemLabel: "The problem",
      problems: [
        "Scattered inventory.",
        "Opaque pricing.",
        "Endless back-and-forth with intermediaries.",
        "Little clarity on what you’re actually booking.",
      ],
      shiftLabel: "The shift",
      lead:
        "For something that commands such high budgets, buying outdoor has been surprisingly unstructured. Ooter doesn’t just digitise it. It makes outdoor",
      outcomes: ["Discoverable.", "Comparable.", "Usable."],
      bg: OOTER.ink,
      accent: OOTER.teal,
    },
    featuresLabel: "Inside the app",
    features: [
      { title: "Browse by city", desc: "Hoardings, unipoles and billboards across Delhi, Gurgaon, Goa, Mumbai, Bangalore and nearby, all in one feed." },
      { title: "Prices up front", desc: "Every site shows its rate, rating and location before you enquire. No intermediaries, no guesswork." },
      { title: "Book in a tap", desc: "Shortlist, compare and reserve a slot for today or tomorrow straight from your phone." },
      { title: "One place for campaigns", desc: "Bookings, past ads and saved sites live together, so running outdoor feels like running digital." },
    ],
    gallery: [
      {
        kind: "screens",
        span: 4,
        ratio: 1.9,
        bg: `linear-gradient(135deg, #1C134A 0%, ${OOTER.ink} 55%, #0B091E 100%)`,
        items: [
          { src: "/img/ooter/login.png", alt: "Ooter login screen" },
          { src: "/img/ooter/app-home.png", alt: "Ooter home screen listing hoardings by city" },
        ],
      },
      { kind: "logo", src: "/img/ooter/logo-animated.gif", alt: "Ooter animated logo mark", bg: "#FFFFFF", border: true, pad: 16 },
      { kind: "color", span: 1, color: OOTER.purple, label: "Purple" },
      { kind: "color", span: 1, color: OOTER.teal, label: "Teal" },
      { kind: "arches", span: 4, colors: [OOTER.purple, OOTER.teal, OOTER.blue, OOTER.lavender] },
      { kind: "logo", src: "/img/ooter/ui-cards.png", alt: "Hoarding listings with price, rating and Book Now", bg: OOTER.lavender, pad: 9 },
      { kind: "logo", src: "/img/ooter/ui-search.png", alt: "Quick search tiles for hoarding, unipole and billboard", bg: OOTER.purple, pad: 9 },
      { kind: "logo", src: "/img/ooter/login.png", alt: "Ooter login screen on an iPhone", bg: "#E9E8EA", pad: 5 },
      { kind: "logo", src: "/img/ooter/app-home.png", alt: "Ooter home screen on an Android phone", bg: OOTER.ink, pad: 5 },
    ],
  },
  {
    slug: "the-trained-crew",
    title: "The Trained Crew",
    industry: "Fitness",
    tagline: "Brand Identity & Logo Design",
    color: { bar: "#111111", text: "#ffffff" },
    card: { src: "/img/cards/trained-crew.jpg", alt: "The Trained Crew app on two phones in a dark gym" },
    hero: { src: "/img/trained-crew/brand-02.jpg", alt: "The Trained Crew branded water bottle", position: "center 35%" },
    headline: ["Building a Bold Identity for", "a Modern Fitness Brand"],
    body:
      "We developed the complete visual identity for The Trained Crew, starting with a bold, distinctive logo and extending it into a cohesive brand system. The branding was designed to feel energetic, modern, and fitness-focused, with a strong visual presence that could work consistently across digital and marketing touchpoints.",
    services: ["Logo Design & Branding"],
    industryLabel: "Fitness",
    description: "Brand identity and logo design for The Trained Crew, a modern fitness brand.",
    gallery: [
      { kind: "logo", span: 4, src: "/img/trained-crew/logo-primary-white.png", alt: "The Trained Crew primary logo", bg: TFC.black, pad: 14 },
      { kind: "logo", src: "/img/trained-crew/logo-clearspace.png", alt: "The Trained Crew logo clear-space construction", bg: TFC.grey, pad: 8 },
      { kind: "color", span: 1, color: TFC.white, border: true, label: "White" },
      { kind: "color", span: 1, color: TFC.black, label: "Black" },
      { kind: "logo", span: 4, src: "/img/trained-crew/logo-horizontal-2-white.png", alt: "The Trained Crew horizontal logo", bg: TFC.black, pad: 12 },
      { kind: "logo", src: "/img/trained-crew/logo-horizontal-white.png", alt: "The Trained Crew stacked horizontal logo", bg: TFC.black, pad: 12 },
      { kind: "logo", src: "/img/trained-crew/logo-mark-white.png", alt: "The Trained Crew logo mark", bg: TFC.black, pad: 12 },
      { span: 4, src: "/img/trained-crew/brand-01.jpg", alt: "The Trained Crew app on two phones" },
      { src: "/img/trained-crew/brand-03.jpg", alt: "The Trained Crew logo on a reception wall" },
      { src: "/img/trained-crew/brand-02.jpg", alt: "The Trained Crew branded water bottle" },
    ],
  },
  {
    slug: "kodeline",
    title: "Kodeline",
    industry: "Tech",
    tagline: "Logo Design & Branding",
    color: { bar: KODELINE.black, text: "#ffffff" },
    card: { src: "/img/cards/kodeline.jpg", alt: "Kodeline black t-shirt, bottle and laptop with the bracket mark" },
    hero: { src: "/img/kodeline/stationery.jpg", alt: "Kodeline black and white business cards, letterhead and embossed notebook in sunlight", position: "center 55%" },
    headline: ["Building a Bold Identity for", "a Modern Tech Brand"],
    body:
      "The challenge was to create a tech brand identity using just two colours: black and white. With no palette to lean on, the system had to earn its character from form alone. A code-bracket mark built straight into the wordmark, confident spacing and a strict monochrome kit that holds up from business cards to merch.",
    services: ["Logo Design & Branding"],
    industryLabel: "Tech",
    description: "Logo design and brand identity for Kodeline, a tech brand built in black and white.",
    gallery: [
      {
        kind: "video",
        span: 4,
        src: "/video/kodeline.mp4",
        poster: "/img/kodeline/logo-primary-white.png",
        bg: KODELINE.black,
        fit: "contain",
        alt: "Kodeline logo animation",
      },
      { kind: "logo", src: "/img/kodeline/logo-primary-black.png", alt: "Kodeline primary logo, black on grey", bg: KODELINE.grey, pad: 14 },
      { kind: "color", span: 1, color: KODELINE.white, border: true, label: "White" },
      { kind: "color", span: 1, color: KODELINE.black, label: "Black" },
      { kind: "logo", span: 4, src: "/img/kodeline/logo-primary-white.png", alt: "Kodeline primary logo, white on black", bg: KODELINE.black, pad: 12 },
      { kind: "logo", src: "/img/kodeline/mark-white.png", alt: "Kodeline bracket mark, white on black", bg: KODELINE.black, pad: 24 },
      { kind: "logo", src: "/img/kodeline/mark-stroked.png", alt: "Kodeline bracket mark, outlined", bg: KODELINE.white, border: true, pad: 24 },
      { span: 4, ratio: 879 / 475, src: "/img/kodeline/notebooks.jpg", alt: "Kodeline black notebook, pen and binder clips beside a white notebook" },
      { src: "/img/kodeline/stationery.jpg", alt: "Kodeline business cards, letterhead and embossed notebook", position: "center 40%" },
      { src: "/img/kodeline/welcome-kit.jpg", alt: "Kodeline t-shirt, water bottle and laptop" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/** The study that follows `slug` in the list, wrapping around at the end. */
export function getNextCaseStudy(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
}

/** Every study except `slug`, starting from the one after it. */
export function getOtherCaseStudies(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies.filter((_, j) => j !== i).sort((a, b) => order(a) - order(b));
  function order(c: CaseStudy) {
    return (caseStudies.indexOf(c) - i + caseStudies.length) % caseStudies.length;
  }
}
