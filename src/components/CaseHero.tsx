"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Case-study hero. The artwork opens with a slow zoom-out and then drifts
 * upward at a slower rate than the page as the user scrolls (parallax), while
 * the title slides up out of a mask and the black fade deepens.
 */
export default function CaseHero({
  src,
  alt,
  title,
  eyebrow,
  position,
}: {
  src: string;
  alt: string;
  title: string;
  eyebrow?: string;
  position?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "160%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="case-hero">
      <motion.div
        className="case-hero-media"
        style={reduced ? undefined : { y, scale }}
        initial={{ scale: 1.18, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: position ?? "center 50%" }}
        />
      </motion.div>

      <motion.div className="case-hero-text" style={reduced ? undefined : { y: textY, opacity: fade }}>
        {eyebrow && (
          <motion.span
            className="case-hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
          >
            {eyebrow}
          </motion.span>
        )}
        <h1>
          <span className="tr-mask">
            <motion.span
              className="tr-line"
              initial={{ y: "110%", rotate: 2 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{ duration: 1, ease, delay: 0.35 }}
            >
              {title}
            </motion.span>
          </span>
        </h1>
      </motion.div>
    </section>
  );
}
