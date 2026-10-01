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
    desc: "We shape the look, feel, and personality of your brand so everything feels clear, consistent, and genuinely you.",
  },
  {
    num: "02",
    line1: "Logo Design",
    desc: "We create logos that are distinctive, and easy to remember giving your brand a mark you can truly own.",
  },
  {
    num: "03",
    line1: "Website Design",
    line2: "& Development",
    desc: "We design and build websites that not only look good but feel easy to use, and actually help your business connect with people.",
  },
  {
    num: "04",
    line1: "Digital Marketing",
    desc: "We create on-brand digital campaigns and content that help your brand stay visible, connect with the right audience and drive meaningful engagement.",
  },
];

/** Footer link columns (rendered above the big wordmark). */
export type FooterColumn = { heading: string; links: { label: string; href: string }[] };

export const footerColumns: FooterColumn[] = [
  {
    heading: "DIRXN",
    links: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact Us", href: contactHref },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Matchmaking", href: "/work/sama-elite-matrimony" },
      { label: "AdTech", href: "/work/ooter" },
      { label: "Fitness", href: "/work/the-trained-crew" },
      { label: "Tech", href: "/work/kodeline" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Brand Identity", href: "/services" },
      { label: "Logo Design", href: "/services" },
      { label: "Website Design", href: "/services" },
      { label: "Website Development", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
      { label: "Social Media Creatives", href: "/services" },
    ],
  },
  {
    heading: "Featured projects",
    links: caseStudies.map((c) => ({ label: c.title, href: `/work/${c.slug}` })),
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
