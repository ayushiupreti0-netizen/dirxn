"use client";

import { motion, type Variants } from "framer-motion";
import { LineReveal } from "./TextReveal";
import { ease } from "@/lib/motion";
import type { CaseFeature } from "@/data/work";

/* Numbered feature cards that rise in sequence; the accent rule along the top
   of each card draws itself in and the card lifts on hover. */

const card: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};
const rule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease, delay: 0.2 } },
};

export default function CaseFeatures({ label, features, accent }: { label: string; features: CaseFeature[]; accent: string }) {
  return (
    <section className="case-features" style={{ ["--feat-accent" as string]: accent }} aria-label={label}>
      <LineReveal as="h3" className="feat-title" amount={0.6} breaks={false}>
        <>{label}</>
      </LineReveal>
      <motion.ol
        className="feat-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {features.map((f, i) => (
          <motion.li key={f.title} className="feat-card" variants={card} whileHover={{ y: -8 }} data-cursor="hover">
            <motion.i className="feat-rule" variants={rule} aria-hidden="true" />
            <span className="feat-num">{String(i + 1).padStart(2, "0")}</span>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
