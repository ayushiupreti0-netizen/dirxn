import type { Metadata } from "next";
import WorkCard from "@/components/WorkCard";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { LineReveal } from "@/components/TextReveal";
import { workCards } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected brand, logo and website projects by DIRXN.",
};

export default function WorkPage() {
  return (
    <div className="work-page">
      <ScrollProgress />
      <main>
        <LineReveal as="h1" className="page-title" amount={0.6} breaks={false}>
          <>Our Work</>
        </LineReveal>

        <section className="work-grid" aria-label="Projects">
          {workCards.map((card, i) => (
            <WorkCard
              key={card.key}
              href={card.href}
              image={card.image}
              imageAlt={card.imageAlt}
              title={card.title}
              label={card.label}
              barBg={card.barBg}
              barFg={card.barFg}
              delay={Math.min((i % 2) * 0.08, 0.16)}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
