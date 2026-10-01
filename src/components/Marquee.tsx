"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from "framer-motion";

/**
 * Infinite ticker whose speed and direction follow scroll velocity: it drifts
 * slowly on its own, hurries when you scroll down and runs backwards when you
 * scroll up.
 */
export default function Marquee({
  items,
  baseSpeed = 40,
  className = "",
}: {
  items: string[];
  /** Idle speed in px/s. */
  baseSpeed?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dir = useRef(1);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const boost = useTransform(smooth, [-2000, 0, 2000], [-6, 0, 6], { clamp: true });

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2; // two copies of the list are rendered
    if (!half) return;

    const b = boost.get();
    if (b < 0) dir.current = -1;
    else if (b > 0) dir.current = 1;

    let move = dir.current * baseSpeed * (delta / 1000);
    move += b * baseSpeed * (delta / 1000);

    let next = x.get() - move;
    // Wrap seamlessly within one copy's width.
    if (next <= -half) next += half;
    if (next > 0) next -= half;
    x.set(next);
  });

  const skew = useTransform(smooth, [-2000, 0, 2000], [6, 0, -6], { clamp: true });

  return (
    <div className={`marquee ${className}`.trim()} aria-hidden="true">
      <motion.div className="marquee-track" ref={trackRef} style={{ x, skewX: skew }}>
        {[0, 1].map((copy) => (
          <div className="marquee-copy" key={copy}>
            {items.map((item, i) => (
              <span className="marquee-item" key={`${copy}-${i}`}>
                {item}
                <i className="marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
