"use client";

import { motion, type Variants } from "framer-motion";
import { ease } from "@/lib/motion";
import type { CaseStory as CaseStoryData } from "@/data/work";

/*
 * Narrative band for product case studies. On the left, the industry's
 * problems slide in one by one and are struck through; on the right, a short
 * lead sets up three outcome words that rise out of a mask in the accent
 * colour. The whole band uses the client's palette.
 */

const line: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
/* The strike is a background gradient on the text span. With
   box-decoration-break: clone every wrapped line gets its own rule, so long
   problems are crossed out line by line instead of once through the middle. */
const strike: Variants = {
  hidden: { backgroundSize: "0% 0.08em" },
  show: { backgroundSize: "100% 0.08em", transition: { duration: 0.7, ease, delay: 0.45 } },
};
const rise: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 1, ease } },
};
const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function CaseStory({ story }: { story: CaseStoryData }) {
  return (
    <section
      className="case-story"
      style={{ ["--story-bg" as string]: story.bg, ["--story-accent" as string]: story.accent }}
      aria-label="Problem and approach"
    >
      <motion.div
        className="story-col"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.22 }}
      >
        <motion.span className="story-eyebrow" variants={fade}>
          {story.problemLabel}
        </motion.span>
        <ul className="story-problems">
          {story.problems.map((p) => (
            <motion.li key={p} variants={line}>
              <motion.span className="story-text" variants={strike}>
                {p}
              </motion.span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="story-col"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.18, delayChildren: 0.3 }}
      >
        <motion.span className="story-eyebrow" variants={fade}>
          {story.shiftLabel}
        </motion.span>
        <motion.p className="story-lead" variants={fade}>
          {story.lead}
        </motion.p>
        <ul className="story-outcomes">
          {story.outcomes.map((o) => (
            <li key={o}>
              <span className="tr-mask">
                <motion.span className="tr-line" variants={rise}>
                  {o}
                </motion.span>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
