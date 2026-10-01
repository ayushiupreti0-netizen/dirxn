"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import VideoOrPoster from "./VideoOrPoster";

/**
 * Full-bleed showreel that pins to the viewport and shrinks into a framed,
 * rounded card as the user scrolls past it (the "full screen → reduces its
 * size" effect). The outer section is taller than the viewport so the sticky
 * inner frame has room to travel while the scale animation plays.
 */
export default function ShowreelScale({
  src,
  poster,
  posterAlt,
}: {
  src: string;
  poster: string;
  posterAlt: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // The frame starts edge-to-edge and settles at ~80% width with soft corners.
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.8]);
  const radius = useTransform(scrollYProgress, [0, 0.75], ["0rem", "2.4rem"]);

  return (
    <section ref={ref} className="showreel-track" aria-label="Showreel">
      <div className="showreel-sticky">
        <motion.div
          className="showreel-frame"
          style={reduced ? undefined : { scale, borderRadius: radius }}
        >
          <VideoOrPoster src={src} poster={poster} posterAlt={posterAlt} posterW={1200} posterH={1200} />
        </motion.div>
      </div>
    </section>
  );
}
