"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowNE } from "./icons";
import { ease } from "@/lib/motion";
import type { CaseStudy } from "@/data/work";

/**
 * Closing beat of a case study: a full-width link to the next project. The
 * artwork sits behind a dark veil and zooms in on hover; the title slides up
 * out of a mask when the block scrolls into view.
 */
export default function NextProject({ study }: { study: CaseStudy }) {
  return (
    <motion.section
      className="next-project"
      initial="rest"
      whileHover="hover"
      animate="rest"
      aria-label="Next project"
      style={{ ["--np-accent" as string]: study.color.bar }}
    >
      <Link href={`/work/${study.slug}`} className="next-project-link" data-cursor="hover">
        <motion.div
          className="next-project-media"
          variants={{ rest: { scale: 1.02, opacity: 0.55 }, hover: { scale: 1.08, opacity: 0.8 } }}
          transition={{ duration: 1.1, ease }}
        >
          <Image src={study.card.src} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </motion.div>

        <motion.div
          className="next-project-copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.span
            className="next-project-eyebrow"
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
          >
            Next project
          </motion.span>
          <span className="tr-mask">
            <motion.span
              className="tr-line next-project-title"
              variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 1, ease } } }}
            >
              {study.title}
            </motion.span>
          </span>
          <motion.span
            className="next-project-meta"
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
          >
            {study.industry} · {study.tagline}
          </motion.span>
        </motion.div>

        <motion.span
          className="next-project-arrow"
          aria-hidden="true"
          variants={{ rest: { x: 0, y: 0, scale: 1 }, hover: { x: 8, y: -8, scale: 1.08 } }}
          transition={{ duration: 0.5, ease }}
        >
          <ArrowNE className="arrow" />
        </motion.span>
      </Link>
    </motion.section>
  );
}
