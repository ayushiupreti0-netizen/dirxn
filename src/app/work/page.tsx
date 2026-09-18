import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import Footer from "@/components/Footer";
import { workCards } from "@/data/site";
import { fadeUp } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected brand, logo and website projects by DIRXN.",
};

export default function WorkPage() {
  return (
    <div className="work-page">
      <main>
        <Reveal as="div" variants={fadeUp}>
          <h1 className="page-title">Our Work</h1>
        </Reveal>

        <section className="work-grid" aria-label="Projects">
          {workCards.map((card, i) => (
            <WorkCard
              key={card.key}
              href={card.href}
              image={card.image}
              imageAlt={card.imageAlt}
              title={card.title}
              label={card.label}
              delay={Math.min((i % 2) * 0.08, 0.16)}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
