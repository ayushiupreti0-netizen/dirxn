import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import VideoOrPoster from "@/components/VideoOrPoster";
import ParallaxPanel from "@/components/ParallaxPanel";
import ScrollRevealText from "@/components/ScrollRevealText";
import DirectionBand from "@/components/DirectionBand";
import { LineReveal, WordReveal } from "@/components/TextReveal";
import { ArrowNE } from "@/components/icons";
import { caseStudies } from "@/data/work";
import {
  aboutHero,
  aboutStatement,
  aboutQuote,
  aboutFacts,
  aboutPrinciplesIntro,
  aboutPrinciples,
  aboutEmbed,
  aboutClients,
  aboutManifesto,
  aboutCta,
} from "@/data/about";
import { fadeUp } from "@/lib/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "DIRXN is a small design and digital studio. Brand identity, logo design, web design & development and digital marketing, handled by one team from first call to launch.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <main>
        {/* ---- Hero: headline, then the showreel panel ------------------- */}
        <section className="ab-hero">
          <Reveal as="div" variants={fadeUp}>
            <p className="ab-eyebrow">{aboutHero.eyebrow}</p>
          </Reveal>
          <LineReveal as="h1" className="ab-title" amount={0.3} stagger={0.14}>
            <>{aboutHero.headline[0]}</>
            <em>{aboutHero.headline[1]}</em>
          </LineReveal>
          <WordReveal as="p" className="ab-sub" text={aboutHero.sub} delay={0.5} stagger={0.03} />
        </section>

        <ParallaxPanel className="ab-media" label="DIRXN showreel">
          <VideoOrPoster
            src="/video/showreel.mp4"
            poster="/img/showreel-poster.jpg"
            posterAlt="DIRXN showreel"
            posterW={1200}
            posterH={1200}
          />
        </ParallaxPanel>

        {/* ---- Statement: scroll-filled paragraph + pull quote ------------ */}
        <section className="ab-statement">
          <Reveal as="div" variants={fadeUp}>
            <p className="ab-eyebrow">Who we are</p>
          </Reveal>
          <ScrollRevealText text={aboutStatement} className="ab-statement-copy" />
          <Reveal as="div" variants={fadeUp} className="ab-quote">
            <blockquote>
              <p>{aboutQuote.text}</p>
              <cite>{aboutQuote.by}</cite>
            </blockquote>
          </Reveal>
        </section>

        {/* ---- Facts: how the studio is built --------------------------- */}
        <section className="ab-facts" aria-label="How the studio is set up">
          {aboutFacts.map((f, i) => (
            <Reveal as="div" className="ab-fact" key={f.label} variants={fadeUp} delay={i * 0.1}>
              <span className="ab-fact-value">{f.value}</span>
              <span className="ab-fact-label">{f.label}</span>
              <span className="ab-fact-note">{f.note}</span>
            </Reveal>
          ))}
        </section>

        {/* ---- Small by design: principles list -------------------------- */}
        <section className="ab-small" aria-labelledby="ab-small-title">
          <div className="ab-small-head">
            <LineReveal as="h2" className="ab-h2" id="ab-small-title" amount={0.5}>
              <>{aboutPrinciplesIntro.heading[0]}</>
              <em>{aboutPrinciplesIntro.heading[1]}</em>
            </LineReveal>
            <Reveal as="div" variants={fadeUp} delay={0.2}>
              <p className="ab-lead">{aboutPrinciplesIntro.copy}</p>
            </Reveal>
          </div>
          <div className="ab-rows">
            {aboutPrinciples.map((p, i) => (
              <Reveal as="article" className="ab-row" key={p.num} variants={fadeUp} delay={i * 0.06} data-cursor="hover">
                <span className="ab-row-num">{p.num}</span>
                <h3 className="ab-row-title">{p.title}</h3>
                <p className="ab-row-desc">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---- Clients ticker ------------------------------------------- */}
        <section className="ab-clients" aria-label="Brands we have worked with">
          <Reveal as="div" variants={fadeUp}>
            <p className="ab-eyebrow ab-eyebrow-center">Brands we&rsquo;ve given a direction</p>
          </Reveal>
          <Marquee items={aboutClients} className="ab-ticker" baseSpeed={30} />
        </section>

        {/* ---- We embed: four ways of working ---------------------------- */}
        <section className="ab-embed" aria-labelledby="ab-embed-title">
          <LineReveal as="h2" className="ab-h2 ab-h2-center" id="ab-embed-title" amount={0.5}>
            <>{aboutEmbed.heading[0]}</>
            <em>{aboutEmbed.heading[1]}</em>
          </LineReveal>
          <Reveal as="div" variants={fadeUp} delay={0.2}>
            <p className="ab-lead ab-lead-center">{aboutEmbed.sub}</p>
          </Reveal>
          <div className="ab-embed-grid">
            {aboutEmbed.items.map((item, i) => (
              <Reveal as="div" className="ab-embed-item" key={item.title} variants={fadeUp} delay={i * 0.08}>
                <span className="ab-embed-idx">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---- Manifesto: numbered I–V ----------------------------------- */}
        <section className="ab-manifesto" aria-labelledby="ab-manifesto-title">
          <div className="ab-manifesto-head">
            <LineReveal as="h2" className="ab-h2" id="ab-manifesto-title" amount={0.5}>
              <>{aboutManifesto.heading[0]}</>
              <em>{aboutManifesto.heading[1]}</em>
            </LineReveal>
          </div>
          <ol className="ab-manifesto-list">
            {aboutManifesto.items.map((item, i) => (
              <Reveal as="li" className="ab-manifesto-item" key={item.numeral} variants={fadeUp} delay={0.04 * i}>
                <span className="ab-numeral">{item.numeral}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ---- Proof: the work, as a compact index ----------------------- */}
        <section className="ab-work" aria-labelledby="ab-work-title">
          <div className="ab-work-head">
            <Reveal as="div" variants={fadeUp}>
              <p className="ab-eyebrow">Proof, not promises</p>
            </Reveal>
            <LineReveal as="h2" className="ab-h2" id="ab-work-title" amount={0.5}>
              <>Recent work.</>
            </LineReveal>
          </div>
          <div className="ab-work-list">
            {caseStudies.map((c, i) => (
              <Reveal as="div" key={c.slug} variants={fadeUp} delay={i * 0.06}>
                <Link className="ab-work-row" href={`/work/${c.slug}`} data-cursor="hover">
                  <span className="ab-work-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ab-work-title">{c.title}</span>
                  <span className="ab-work-meta">
                    <span>{c.industry}</span>
                    <span>{c.tagline}</span>
                  </span>
                  <span className="ab-work-arrow" aria-hidden="true">
                    <ArrowNE className="arrow" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <DirectionBand lines={aboutCta.lines} label={aboutCta.label} />
      </main>
      <Footer />
    </div>
  );
}
