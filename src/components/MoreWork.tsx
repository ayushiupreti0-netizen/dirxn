import WorkCard from "./WorkCard";
import { LineReveal } from "./TextReveal";
import type { CaseStudy } from "@/data/work";

/** Every other case study, so a reader can hop straight to the next one. */
export default function MoreWork({ studies }: { studies: CaseStudy[] }) {
  return (
    <section className="more-work" aria-label="More work">
      <LineReveal as="h2" className="more-work-title" amount={0.6} breaks={false}>
        <>More work</>
      </LineReveal>
      <div className="more-work-grid">
        {studies.map((c, i) => (
          <WorkCard
            key={c.slug}
            href={`/work/${c.slug}`}
            image={c.card.src}
            imageAlt={c.card.alt}
            title={c.title}
            label={c.industry}
            barBg={c.color.bar}
            barFg={c.color.text}
            delay={Math.min(i * 0.08, 0.24)}
          />
        ))}
      </div>
    </section>
  );
}
