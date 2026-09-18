import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ClientGallery from "./ClientGallery";
import { fadeUp, scaleIn } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Sama Elite Matrimony",
  description:
    "Logo, branding, website design & development for Sama Elite Matrimony, India’s leading elite matchmaking service.",
};

const body =
  "A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between.";

export default function SamaCaseStudy() {
  return (
    <div className="case-page">
      <main>
        <Reveal as="section" className="case-hero" variants={scaleIn}>
          <Image
            src="/img/sama-hero.jpg"
            alt="Sama Elite Matrimony logo embossed on green textured leather"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <h1>Sama Elite Matrimony</h1>
        </Reveal>

        <section className="case-intro">
          <div>
            <Reveal as="div" variants={fadeUp}>
              <h2>
                Designing for India&rsquo;s Leading
                <br className="d" /> Elite Matchmaking
              </h2>
            </Reveal>
            <Reveal as="div" variants={fadeUp} delay={0.1} className="case-body">
              <p>{body}</p>
              <p>
                {body} {body} {body}
              </p>
            </Reveal>
          </div>
          <Reveal as="dl" variants={fadeUp} delay={0.15} className="case-meta">
            <dt>Segment</dt>
            <dd>
              Logo, Branding, Website
              <br className="d" /> Design &amp; Development
            </dd>
            <dt>Industry</dt>
            <dd>Matrimony Industry</dd>
          </Reveal>
        </section>

        <ClientGallery />
      </main>
      <Footer />
    </div>
  );
}
