import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import DirectionBand from "@/components/DirectionBand";
import BentoGrid from "@/components/BentoGrid";
import ServiceList from "@/components/ServiceList";
import { LineReveal, WordReveal } from "@/components/TextReveal";
import { servicesHero, servicesBento, serviceItems, servicesCtaLabel } from "@/data/services";
import { fadeUp } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity development, logo design, website design & development and digital marketing by DIRXN, one team from first call to launch.",
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <main>
        {/* ---- Hero: same shape as the About page ------------------------- */}
        <section className="ab-hero">
          <Reveal as="div" variants={fadeUp}>
            <p className="ab-eyebrow">{servicesHero.eyebrow}</p>
          </Reveal>
          <LineReveal as="h1" className="ab-title" amount={0.3} stagger={0.14}>
            <>{servicesHero.headline[0]}</>
            <em>{servicesHero.headline[1]}</em>
          </LineReveal>
          <WordReveal as="p" className="ab-sub" text={servicesHero.sub} delay={0.5} stagger={0.03} />
        </section>

        {/* ---- Bento: clips and stills from the work ---------------------- */}
        <BentoGrid tiles={servicesBento} />

        {/* ---- The services, one row each --------------------------------- */}
        <section className="sv-list" aria-labelledby="sv-list-title">
          <Reveal as="div" variants={fadeUp}>
            <p className="ab-eyebrow" id="sv-list-title">
              What we offer
            </p>
          </Reveal>
          <ServiceList items={serviceItems} ctaLabel={servicesCtaLabel} />
        </section>

        <DirectionBand />
        <Footer />
      </main>
    </div>
  );
}
