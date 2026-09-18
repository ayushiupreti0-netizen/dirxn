export const nav = [
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
] as const;

export type FeaturedProject = {
  slug: string;
  href: string;
  image: string;
  imageAlt: string;
  imageW: number;
  imageH: number;
  variant: "a" | "b";
  barBg: string;
  barFg: string;
  circleFg?: string;
  pillBorder?: string;
  pillBg?: string;
  pillFg?: string;
  labels: string[];
  title: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "sama-elite-matrimony-1",
    href: "/sama-elite-matrimony",
    image: "/img/work-prink.jpg",
    imageAlt: "Prink pink guava cans",
    imageW: 1920,
    imageH: 1063,
    variant: "a",
    barBg: "#112638",
    barFg: "#fff",
    circleFg: "#112638",
    labels: ["Matchmaking", "Brand & Website"],
    title: "Sama Elite Matrimony",
  },
  {
    slug: "sama-elite-matrimony-2",
    href: "/sama-elite-matrimony",
    image: "/img/work-carsdaily.jpg",
    imageAlt: "CarsDaily branded van",
    imageW: 1920,
    imageH: 1080,
    variant: "a",
    barBg: "#fdf6e2",
    barFg: "#000",
    circleFg: "#000",
    labels: ["Matchmaking", "Brand & Website"],
    title: "Sama Elite Matrimony",
  },
  {
    slug: "sama-elite-matrimony-3",
    href: "/sama-elite-matrimony",
    image: "/img/work-unfltrd.jpg",
    imageAlt: "un:fltrd branded pebbles",
    imageW: 916,
    imageH: 571,
    variant: "a",
    barBg: "#560a1f",
    barFg: "#fff",
    circleFg: "#560a1f",
    labels: ["Matchmaking", "Brand & Website"],
    title: "Sama Elite Matrimony",
  },
  {
    slug: "the-balance-story",
    href: "/sama-elite-matrimony",
    image: "/img/work-balance-story.jpg",
    imageAlt: "The Balance Story chocolate packaging",
    imageW: 918,
    imageH: 571,
    variant: "b",
    barBg: "#fffbf2",
    barFg: "#f87c46",
    pillBorder: "#d2cec7",
    pillBg: "#f87c46",
    pillFg: "#fff",
    labels: ["2025", "Health and Wellness", "Branding"],
    title: "The Balance Story",
  },
  {
    slug: "athlete-world",
    href: "/sama-elite-matrimony",
    image: "/img/work-athlete-world.jpg",
    imageAlt: "Athlete World brand campaign",
    imageW: 917,
    imageH: 570,
    variant: "b",
    barBg: "#111111",
    barFg: "#fff",
    pillBg: "#fff",
    pillFg: "#111",
    labels: ["2025", "Sports", "Branding"],
    title: "Athlete  World",
  },
];

export type Service = { num: string; line1: string; line2?: string; desc: string };

export const services: Service[] = [
  {
    num: "01",
    line1: "Brand Identity",
    line2: "Development",
    desc: "A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between.",
  },
  {
    num: "02",
    line1: "Logo Design",
    desc: "We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.",
  },
  {
    num: "03",
    line1: "Website Design",
    line2: "& Development",
    desc: "Your website should work hard and look good. We design sites that are easy to use and built to grow with you.",
  },
  {
    num: "04",
    line1: "Digital Marketing",
    desc: "Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.",
  },
];

export const workCards = Array.from({ length: 8 }).map((_, i) => ({
  key: `sama-${i}`,
  href: "/sama-elite-matrimony",
  image: "/img/work-prink.jpg",
  imageAlt: "Prink pink guava cans",
  title: "Sama Elite Matrimony",
  label: "Matchmaking",
}));

export const galleryStepText =
  "No matter the size of your brand, we design logos";

export const serviceBlocks = [
  { num: "01", title: "Logo\nDesign" },
  { num: "02", title: "Brand\nIdentity" },
  { num: "03", title: "Website\nDesign" },
  { num: "04", title: "Digital\nMarketing" },
];

export const serviceSteps = [
  "Discover and brand alignment",
  "Moodboard and creative direction",
  "Typography and symbol design",
  "Icon and wordmark variants",
  "Usage guidelines and file export",
  "Logo animation (optional)",
];

export const samaGallerySlots: { wide?: boolean; label: string; x: string; y: string }[] = [
  { wide: true, label: "Logo Video\nAnimation", x: "57.7rem", y: "15.7rem" },
  { label: "Logo\nVariations", x: "13.8rem", y: "17.8rem" },
  { label: "Logo\nVariations", x: "13.8rem", y: "17.8rem" },
  { wide: true, label: "Website\nPhotos", x: "61.8rem", y: "15.2rem" },
  { wide: true, label: "Website Video Animation", x: "28.3rem", y: "21.3rem" },
  { label: "Branding\nitems", x: "14rem", y: "17.3rem" },
  { label: "Branding\nitems", x: "14rem", y: "17.3rem" },
  { wide: true, label: "Words from the founder", x: "28.3rem", y: "21.5rem" },
];
