"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * Scroll-driven text reveal: every word starts light grey and turns black as
 * the paragraph travels up through the viewport, so the copy "fills in" while
 * the reader scrolls.
 */
export default function ScrollRevealText({
  text,
  className,
  from = "#c9c9c9",
  to = "#111111",
}: {
  text: string;
  className?: string;
  from?: string;
  to?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start filling when the paragraph is ~85% down the viewport, finish
    // once it has reached the upper third.
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]} from={from} to={to}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  from,
  to,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  from: string;
  to: string;
}) {
  const color = useTransform(progress, range, [from, to]);
  return (
    <motion.span className="reveal-word" style={{ color }}>
      {children}{" "}
    </motion.span>
  );
}
