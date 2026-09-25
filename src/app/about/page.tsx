import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { fadeUp, scaleIn } from "@/lib/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "DIRXN is a design and digital studio helping businesses build a stronger presence — brand identity, visual design, web design & development, and digital support.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <main>
        <Reveal as="div" variants={fadeUp}>
          <h1 className="page-title">About DIRXN</h1>
        </Reveal>

        {/* Header image — drop an <Image fill> in here when the photo is ready. */}
        <Reveal as="section" className="about-hero" variants={scaleIn} aria-hidden="true" />

        <section className="about-body">
          <Reveal as="div" variants={fadeUp}>
            <p className="about-lede">
              We turn ideas into brands, experiences, and digital products people remember.
            </p>
          </Reveal>
          <Reveal as="div" variants={fadeUp} delay={0.05} className="about-copy">
            <p>
              DIRXN is a design and digital studio helping businesses build a stronger presence from the ground
              up &mdash; from defining how a brand looks and feels to creating the digital experiences people
              interact with every day.
            </p>
            <p>
              We bring together <strong>brand identity, visual design, web design &amp; development, and digital
              support</strong> to create work that is thoughtful, functional, and built to make an impact.
            </p>
            <p>
              Whether you&rsquo;re starting something new, evolving an existing brand, or simply need a team to
              bring an idea to life, we work closely with you to understand the direction, simplify the process,
              and create something that feels distinctly yours.
            </p>
          </Reveal>
          <Reveal as="div" variants={fadeUp} delay={0.1}>
            <p className="about-close">Good design gets attention. Great design gives people a reason to stay.</p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
