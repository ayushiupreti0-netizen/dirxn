import Image from "next/image";
import Reveal from "./Reveal";
import Footer from "./Footer";
import CaseGallery from "./CaseGallery";
import { fadeUp, scaleIn } from "@/lib/motion";
import type { CaseStudy as CaseStudyData } from "@/data/work";

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br className="d" />}
          {i < lines.length - 1 && " "}
        </span>
      ))}
    </>
  );
}

export default function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <div className="case-page">
      <main>
        <Reveal as="section" className="case-hero" variants={scaleIn}>
          <Image
            src={study.hero.src}
            alt={study.hero.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <h1>{study.title}</h1>
        </Reveal>

        <section className="case-intro">
          <div>
            <Reveal as="div" variants={fadeUp}>
              <h2>
                <Lines lines={study.headline} />
              </h2>
            </Reveal>
            <Reveal as="div" variants={fadeUp} delay={0.1} className="case-body">
              <p>{study.body}</p>
            </Reveal>
          </div>
          <Reveal as="dl" variants={fadeUp} delay={0.15} className="case-meta">
            <dt>Segment</dt>
            <dd>
              <Lines lines={study.segment} />
            </dd>
            <dt>Industry</dt>
            <dd>{study.industryLabel}</dd>
          </Reveal>
        </section>

        <CaseGallery slots={study.gallery} />
      </main>
      <Footer />
    </div>
  );
}
