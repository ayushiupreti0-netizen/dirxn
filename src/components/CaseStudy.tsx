import Reveal from "./Reveal";
import Footer from "./Footer";
import CaseHero from "./CaseHero";
import CaseGallery from "./CaseGallery";
import CaseStory from "./CaseStory";
import CaseFeatures from "./CaseFeatures";
import NextProject from "./NextProject";
import MoreWork from "./MoreWork";
import ScrollProgress from "./ScrollProgress";
import { LineReveal } from "./TextReveal";
import { fadeUp } from "@/lib/motion";
import { getNextCaseStudy, getOtherCaseStudies, type CaseStudy as CaseStudyData } from "@/data/work";

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
  const next = getNextCaseStudy(study.slug);
  const others = getOtherCaseStudies(study.slug);

  return (
    <div className="case-page">
      <ScrollProgress />
      <main>
        <CaseHero
          src={study.hero.src}
          alt={study.hero.alt}
          title={study.title}
          eyebrow={study.industry}
          position={study.hero.position}
        />

        <section className="case-intro">
          <div>
            <LineReveal as="h2" amount={0.5}>
              {study.headline.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </LineReveal>
            <Reveal as="div" variants={fadeUp} delay={0.25} className="case-body">
              <p>{study.body}</p>
            </Reveal>
          </div>
          <Reveal as="dl" variants={fadeUp} delay={0.35} className="case-meta">
            <dt>Services</dt>
            <dd>
              <Lines lines={study.services} />
            </dd>
            <dt>Industry</dt>
            <dd>{study.industryLabel}</dd>
          </Reveal>
        </section>

        {study.story && <CaseStory story={study.story} />}
        {study.features && (
          <CaseFeatures label={study.featuresLabel ?? "Inside the product"} features={study.features} accent={study.color.bar} />
        )}

        <CaseGallery slots={study.gallery} />

        <NextProject study={next} />
        <MoreWork studies={others} />
      </main>
      <Footer />
    </div>
  );
}
