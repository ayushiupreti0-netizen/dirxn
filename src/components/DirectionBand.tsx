"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Magnetic from "./Magnetic";
import { LineReveal } from "./TextReveal";
import { ArrowRight } from "./icons";
import { contactHref } from "@/data/site";
import { ease } from "@/lib/motion";

/**
 * Full-bleed black call-to-action band with a maroon glow that drifts through
 * it on scroll. Shared by the homepage and the About page.
 */
export default function DirectionBand({
  lines = ["Let’s Give", "Your Brand", "a Direction."],
  label = "Get Started",
  href = contactHref,
}: {
  lines?: readonly string[];
  label?: string;
  href?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Maroon glow drifts up through the band as you scroll past it.
  const glowY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.15, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section className="direction" ref={ref}>
      <motion.span className="direction-glow" aria-hidden="true" style={reduced ? undefined : { y: glowY, scale: glowScale }} />
      <motion.div className="direction-inner" style={reduced ? undefined : { y: textY }}>
        <LineReveal as="h2" amount={0.5} stagger={0.14}>
          {lines.map((line, i) => (
            <Fragment key={i}>{line}</Fragment>
          ))}
        </LineReveal>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
        >
          <Magnetic strength={0.3}>
            <a className="btn-start" href={href} data-cursor="hover">
              {label} <ArrowRight className="arrow" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
