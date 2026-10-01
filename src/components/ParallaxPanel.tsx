"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Media panel that grows from slightly inset to full width as it scrolls into
 * view, while its content drifts a touch for depth. Used for the About hero.
 */
export default function ParallaxPanel({
  children,
  className = "",
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.92, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.45], ["2.4rem", "0.6rem"]);
  const innerY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.section
      ref={ref}
      className={className}
      aria-label={label}
      style={reduced ? undefined : { scale, borderRadius: radius }}
    >
      <motion.div className="parallax-inner" style={reduced ? undefined : { y: innerY }}>
        {children}
      </motion.div>
    </motion.section>
  );
}
