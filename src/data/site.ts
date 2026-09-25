import { caseStudies } from "./work";

export const contactEmail = "dirxndesignstudio@gmail.com";
export const contactHref = `mailto:${contactEmail}`;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
] as const;

export type FeaturedProject = {
  slug: string;
  href: string;
  image: string;
  imageAlt: string;
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

/** Homepage "Selected work" — one card per case study, in order. */
export const featuredProjects: FeaturedProject[] = caseStudies.map((c) => ({
  slug: c.slug,
  href: `/work/${c.slug}`,
  image: c.card.src,
  imageAlt: c.card.alt,
  variant: "a",
  barBg: c.color.bar,
  barFg: c.color.text,
  circleFg: c.color.bar,
  labels: [c.industry, c.tagline],
  title: c.title,
}));

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
    desc: "We create on-brand digital campaigns and content that help your brand stay visible, connect with the right audience and drive meaningful engagement.",
  },
];

/** Work page grid — same four studies as the homepage. */
export const workCards = caseStudies.map((c) => ({
  key: c.slug,
  href: `/work/${c.slug}`,
  image: c.card.src,
  imageAlt: c.card.alt,
  title: c.title,
  label: c.industry,
  barBg: c.color.bar,
  barFg: c.color.text,
}));

/** Services page blocks. `lede` lines are rendered with line breaks on desktop. */
export const serviceBlocks: { num: string; title: string; lede: string[] }[] = [
  {
    num: "01",
    title: "Logo\nDesign",
    lede: [
      "No matter the size of your brand, we design logos",
      "that are clear, unique and built to last. We make sure",
      "it works across everything - your website, packaging,",
      "social media and more.",
    ],
  },
  {
    num: "02",
    title: "Brand\nIdentity",
    lede: [
      "We create visual systems that bring your brand to life",
      "and make it easy to recognise anywhere. We make",
      "sure your brand feels consistent, confident & true to",
      "who you are.",
    ],
  },
  {
    num: "03",
    title: "Website\nDesign",
    lede: [
      "We build websites that not only look great but also",
      "work smoothly and load fast. Every site is designed",
      "to reflect your brand, feel good to use and help you",
      "reach your goals.",
    ],
  },
  {
    num: "04",
    title: "Digital\nMarketing",
    lede: [
      "We create on-brand digital campaigns and content",
      "that help your brand stay visible, connect with the",
      "right audience and drive meaningful engagement.",
    ],
  },
];

export const serviceSteps = [
  "Discover and brand alignment",
  "Moodboard and creative direction",
  "Typography and symbol design",
  "Icon and wordmark variants",
  "Usage guidelines and file export",
  "Logo animation (optional)",
];
