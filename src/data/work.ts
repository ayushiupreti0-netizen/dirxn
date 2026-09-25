/** One gallery tile on a case-study page. */
export type GallerySlot = {
  src: string;
  alt: string;
  /** Spans both grid columns. */
  wide?: boolean;
  /** Render as a looping video instead of an image. */
  video?: boolean;
  /** Poster shown before/without the video. */
  poster?: string;
  /** Letterbox the image on a white panel (for logos) instead of cropping. */
  contain?: boolean;
  /** CSS object-position for cropped images, e.g. "top" for tall screenshots. */
  position?: string;
};

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
  hero: { src: string; alt: string };
  headline: [string, string];
  body: string;
  segment: string[];
  industryLabel: string;
  gallery: GallerySlot[];
  description: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sama-elite-matrimony",
    title: "Sama Elite Matrimony",
    industry: "Matchmaking",
    tagline: "Brand & Website",
    color: { bar: "#CBA268", text: "#0b1d15" },
    card: { src: "/img/sama/brand-02.jpg", alt: "Sama Elite Matrimony gold signage on a dark green wall" },
    hero: { src: "/img/sama-hero.jpg", alt: "Sama Elite Matrimony logo embossed on green textured leather" },
    headline: ["Designing for India’s Leading", "Elite Matchmaking"],
    body:
      "The goal was to create a distinctive identity for a modern matrimonial platform that felt premium and trustworthy without becoming overly traditional or generic. The brand needed to communicate exclusivity, warmth, and credibility while creating a seamless experience across digital touchpoints.",
    segment: ["Logo, Branding, Website", "Design & Development"],
    industryLabel: "Matrimony Industry",
    description:
      "Logo, branding, website design & development for Sama Elite Matrimony, India’s leading elite matchmaking service.",
    gallery: [
      {
        wide: true,
        video: true,
        src: "/video/sama-animation.mp4",
        poster: "/img/sama/emboss-logo.jpg",
        alt: "Sama Elite Matrimony logo animation",
      },
      { src: "/img/sama/brand-01.jpg", alt: "Sama stationery set with box, envelope and cards" },
      { src: "/img/sama/brand-02.jpg", alt: "Sama gold signage on a dark green wall" },
      { wide: true, src: "/img/sama/website.jpg", alt: "Sama brand guidelines spread showing logo and colour variations" },
      { wide: true, src: "/img/sama/brand-04.jpg", alt: "Sama website shown on a desktop monitor and laptop" },
      { src: "/img/sama/business-card.jpg", alt: "Sama embossed business card" },
      { src: "/img/sama/emboss-logo.jpg", alt: "Sama logo embossed on green leather" },
      { src: "/img/sama/brand-03.jpg", alt: "Sama brand guidelines book" },
      { src: "/img/sama/mugs.jpg", alt: "Sama branded mugs" },
    ],
  },
  {
    slug: "tcci",
    title: "TCCI",
    industry: "Manufacturing",
    tagline: "Brand refresh & Website",
    color: { bar: "#EE6816", text: "#ffffff" },
    card: { src: "/img/tcci/main.jpg", alt: "TCCI website shown on laptop, phone and tablet" },
    hero: { src: "/img/tcci/social.jpg", alt: "TCCI social media creatives around a phone" },
    headline: ["Refreshing a Manufacturing", "Brand’s Digital Presence"],
    body:
      "Refresh the brand’s digital presence to better reflect its innovation and technical expertise while maintaining the recognition and equity of the existing brand. The updated visual direction needed to work consistently across web, social, and marketing communications.",
    segment: ["Brand Refresh, Website Design,", "Social Media Creatives"],
    industryLabel: "Manufacturing",
    description: "Brand refresh, website design and social media creatives for TCCI, a global compressor manufacturer.",
    gallery: [
      { wide: true, src: "/img/tcci/main.jpg", alt: "TCCI website on laptop, phone and tablet" },
      { src: "/img/tcci/presentation.jpg", alt: "TCCI presentation slides" },
      { src: "/img/tcci/tcci-5.jpg", alt: "TCCI product spec sheets" },
      { wide: true, src: "/img/tcci/social.jpg", alt: "TCCI social media post designs" },
      { wide: true, src: "/img/tcci/carousel.jpg", alt: "TCCI hiring carousel for social media" },
      { src: "/img/tcci/flyers.jpg", alt: "TCCI electric compressor flyers" },
      { src: "/img/tcci/tcci-3.jpg", alt: "TCCI brochure covers" },
      { src: "/img/tcci/tcci-4.jpg", alt: "TCCI brochure interior spread" },
      { src: "/img/tcci/tcci-1.jpg", alt: "TCCI Diwali greeting cards" },
    ],
  },
  {
    slug: "kane-county-edc",
    title: "Kane County EDC",
    industry: "Economic Development",
    tagline: "Social Media Creatives & Website Design/Development",
    color: { bar: "#00524D", text: "#ffffff" },
    card: { src: "/img/kcedc/hero.jpg", alt: "Kane County EDC website shown on two laptops" },
    hero: { src: "/img/kcedc/hero.jpg", alt: "Kane County EDC website shown on two laptops" },
    headline: ["A Digital Front Door for", "Kane County’s Growth"],
    body:
      "The goal was to create a modern, informative digital presence that could clearly represent the county’s diverse communities and economic opportunities. The website needed to organize a large amount of information while remaining engaging, accessible, and easy to navigate.",
    segment: ["Website Design & Development |", "Social Media Creatives | Illustration"],
    industryLabel: "Economic Development",
    description:
      "Website design & development, social media creatives and illustration for the Kane County Economic Development Corporation.",
    gallery: [
      { wide: true, src: "/img/kcedc/hero.jpg", alt: "Kane County EDC website on two laptops" },
      { src: "/img/kcedc/socials.jpg", alt: "Kane County EDC social media posts on phones" },
      { src: "/img/kcedc/maps.jpg", alt: "Kane County map illustrations" },
      { wide: true, src: "/img/kcedc/website.jpg", alt: "Kane County EDC homepage design", position: "top" },
    ],
  },
  {
    slug: "the-trained-crew",
    title: "The Trained Crew",
    industry: "Fitness",
    tagline: "Brand Identity & Logo Design",
    color: { bar: "#111111", text: "#ffffff" },
    card: { src: "/img/trained-crew/brand-03.jpg", alt: "The Trained Crew logo on a reception wall" },
    hero: { src: "/img/trained-crew/brand-01.jpg", alt: "The Trained Crew app on two phones" },
    headline: ["Building a Bold Identity for", "a Modern Fitness Brand"],
    body:
      "We developed the complete visual identity for The Trained Crew, starting with a bold, distinctive logo and extending it into a cohesive brand system. The branding was designed to feel energetic, modern, and fitness-focused, with a strong visual presence that could work consistently across digital and marketing touchpoints.",
    segment: ["Branding and Logo Design"],
    industryLabel: "Fitness",
    description: "Brand identity and logo design for The Trained Crew, a modern fitness brand.",
    gallery: [
      { wide: true, src: "/img/trained-crew/brand-03.jpg", alt: "The Trained Crew logo on a reception wall" },
      { src: "/img/trained-crew/brand-01.jpg", alt: "The Trained Crew app on two phones" },
      { src: "/img/trained-crew/brand-02.jpg", alt: "The Trained Crew branded water bottle" },
      { src: "/img/trained-crew/logo-primary.png", alt: "The Trained Crew primary logo", contain: true },
      { src: "/img/trained-crew/logo-horizontal.png", alt: "The Trained Crew horizontal logo", contain: true },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
