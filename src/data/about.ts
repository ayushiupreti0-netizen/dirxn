import { caseStudies } from "./work";

/** About page copy. Kept out of the component so the page reads as layout. */

export const aboutHero = {
  eyebrow: "About DIRXN",
  headline: ["Small Team,", "Big Impact."] as const,
  sub: "No account layers. No handoffs. The people you meet on day one are the people who design, build and ship your brand.",
};

export const aboutStatement =
  "DIRXN is a design and digital studio helping businesses build a stronger presence from the ground up - from defining how a brand looks and feels to creating the digital experiences people interact with every day. We bring brand identity, visual design, web design & development and digital support under one roof, so the work stays thoughtful, functional and built to make an impact.";

export const aboutQuote = {
  text: "Good design gets attention. Great design gives people a reason to stay.",
  by: "The DIRXN way",
};

/** Structural facts about how the studio is set up (not marketing stats). */
export const aboutFacts = [
  { value: "4", label: "Disciplines", note: "Brand, logo, web and digital marketing, in-house." },
  { value: "1", label: "Point of contact", note: "One conversation from first call to launch." },
  { value: "0", label: "Handoffs", note: "The team that plans the work is the team that makes it." },
] as const;

export const aboutPrinciplesIntro = {
  heading: ["Small", "by design."] as const,
  copy: "We kept the studio deliberately small so every project gets senior hands, honest opinions and a direct line to the people doing the work.",
};

export const aboutPrinciples = [
  {
    num: "01",
    title: "Senior hands on every file",
    desc: "The people who pitch the work are the people who make it. Nothing is passed down the line.",
  },
  {
    num: "02",
    title: "Strategy before pixels",
    desc: "Every visual decision traces back to a direction we agreed on together, not to a trend.",
  },
  {
    num: "03",
    title: "Brand and web, one conversation",
    desc: "Identity and website are designed by the same team, so nothing gets lost in translation.",
  },
  {
    num: "04",
    title: "We stay past launch",
    desc: "Digital support and marketing keep the brand moving long after day one.",
  },
] as const;

export const aboutEmbed = {
  heading: ["We work like", "your in-house team."] as const,
  sub: "Plug-and-play. You get a design department without hiring one.",
  items: [
    { title: "Your tools", desc: "We slot into whatever you already use to share files, feedback and updates." },
    { title: "Your pace", desc: "Weekly check-ins and quick async updates, so you always know where things stand." },
    { title: "Your voice", desc: "We learn how you talk and design so the brand sounds like you, not like us." },
    { title: "One contact", desc: "A single person owns your project from the first brief to the final file." },
  ],
};

/** Ticker of the brands we have worked with, pulled straight from the case studies. */
export const aboutClients = caseStudies.map((c) => c.title);

export const aboutManifesto = {
  heading: ["Direction first.", "Everything else follows."] as const,
  items: [
    {
      numeral: "I",
      title: "Clarity beats cleverness",
      body: "If people have to work to understand a brand, they won't. We choose the clear idea over the clever one, every time.",
    },
    {
      numeral: "II",
      title: "A brand is a system, not a logo",
      body: "The mark matters, but so do the type, the colour, the tone and the way it all behaves on a screen. We design the whole thing to hold together.",
    },
    {
      numeral: "III",
      title: "Design is only done when it's live",
      body: "A beautiful file that never ships is a sketch. We design with the build in mind and stay until it's in the world.",
    },
    {
      numeral: "IV",
      title: "Consistency builds trust",
      body: "People trust what they recognise. Every touchpoint should feel like it came from the same place, because it did.",
    },
    {
      numeral: "V",
      title: "Simple is hard, and worth it",
      body: "Stripping a brand back to what matters takes more work than adding to it. That work is the job.",
    },
  ],
};

export const aboutCta = {
  lines: ["Let's Build", "Something", "Together."] as const,
  label: "Start a project",
};
