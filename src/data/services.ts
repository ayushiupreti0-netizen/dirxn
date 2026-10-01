/** Services page copy and media. Kept out of the component so the page reads as layout. */

export const servicesHero = {
  eyebrow: "What we do",
  headline: ["Services that", "we provide."] as const,
  sub: "Brand, logo, web and digital marketing, designed and built by one small team so everything you put out feels like it came from the same place.",
};

export type BentoTile =
  | {
      id: string;
      kind: "video";
      src: string;
      poster?: string;
      label: string;
      /** Column span out of 20 on desktop, and out of 2 on small screens. */
      span: number;
      spanMobile: 1 | 2;
    }
  | {
      id: string;
      kind: "brand";
      /** Square social post, cropped to a wide strip so only the wordmark shows. */
      src: string;
      /** Full-bleed pattern behind the strip. */
      bg: string;
      label: string;
      span: number;
      spanMobile: 1 | 2;
    };

/** Three rows: 8/12, 5/10/5 and 12/8 columns, all the same height. */
export const servicesBento: BentoTile[] = [
  {
    id: "branding",
    kind: "video",
    src: "/video/services/branding-text.mp4",
    label: "Branding",
    span: 8,
    spanMobile: 1,
  },
  {
    id: "logo-design",
    kind: "video",
    src: "/video/services/logo-design-text.mp4",
    label: "Logo design",
    span: 12,
    spanMobile: 1,
  },
  {
    id: "sama-promo",
    kind: "video",
    src: "/video/services/sama-promo.mp4",
    poster: "/img/cards/sama.jpg",
    label: "Sama Elite Matrimony website promo",
    span: 5,
    spanMobile: 1,
  },
  {
    id: "dirxn",
    kind: "brand",
    src: "/img/services/dirxn-social-black.jpg",
    bg: "/img/services/wavy-pattern.jpg",
    label: "DIRXN wordmark on a maroon wave pattern",
    span: 10,
    spanMobile: 2,
  },
  {
    id: "tcci-web",
    kind: "video",
    src: "/video/services/tcci-web.mp4",
    poster: "/img/cards/tcci.jpg",
    label: "TCCI website walkthrough",
    span: 5,
    spanMobile: 1,
  },
  {
    id: "digital-marketing",
    kind: "video",
    src: "/video/services/digital-marketing-text.mp4",
    label: "Digital marketing",
    span: 12,
    spanMobile: 2,
  },
  {
    id: "web-design",
    kind: "video",
    src: "/video/services/web-design-text.mp4",
    label: "Web design",
    span: 8,
    spanMobile: 2,
  },
];

export type ServiceItem = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  image: { src: string; alt: string };
};

export const serviceItems: ServiceItem[] = [
  {
    num: "01",
    title: "Brand Identity Development",
    desc: "We shape the look, feel, and personality of your brand so everything feels clear, consistent, and genuinely you.",
    tags: [
      "Brand direction & positioning",
      "Color system & typography",
      "Visual language & graphic elements",
      "Brand guidelines",
      "Real-world brand applications",
    ],
    image: { src: "/img/services/brand-identity.jpg", alt: "Brand guidelines book resting on a stone block" },
  },
  {
    num: "02",
    title: "Logo Design",
    desc: "We create logos that are distinctive, and easy to remember giving your brand a mark you can truly own.",
    tags: [
      "Logo concept & direction",
      "Primary & secondary logos",
      "Icon & symbol design",
      "Typographic logo system",
      "Color & monochrome versions",
      "Logo usage guidelines",
    ],
    image: { src: "/img/services/logo-design.jpg", alt: "The Trained Crew logo on a black steel bottle" },
  },
  {
    num: "03",
    title: "Website Design & Development",
    desc: "We design and build websites that not only look good but feel easy to use, and actually help your business connect with people.",
    tags: [
      "Website structure & user flow",
      "UI/UX design",
      "Responsive web design",
      "Interactive & motion elements",
      "WordPress / CMS development",
      "Website launch & optimization",
    ],
    image: { src: "/img/services/web-design.jpg", alt: "Sama Elite Matrimony website on a desktop monitor and laptop" },
  },
  {
    num: "04",
    title: "Digital Marketing",
    desc: "We create on-brand digital campaigns and content that help your brand stay visible, connect with the right audience and drive meaningful engagement.",
    tags: [
      "Social media design",
      "Content & creative direction",
      "Campaign & ad design",
      "Content strategy",
      "Social media management",
      "Performance & analytics",
    ],
    image: { src: "/img/services/digital-marketing.jpg", alt: "TCCI social media posts around a phone showing the Instagram feed" },
  },
];

export const servicesCtaLabel = "Let’s get started";
