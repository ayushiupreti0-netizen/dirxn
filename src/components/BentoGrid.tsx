"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ease } from "@/lib/motion";
import type { BentoTile } from "@/data/services";

/* Tiles rise and settle one after another; media inside eases up to full size
   so the grid feels like it is being laid rather than faded in. */
const tileVariants: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease } },
};
const mediaVariants: Variants = {
  hidden: { scale: 1.12 },
  show: { scale: 1, transition: { duration: 1.4, ease } },
};

/** Plays only while on screen so six clips do not all stream at once. */
function InViewVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video ref={ref} muted loop playsInline preload="metadata" poster={poster} aria-label={label}>
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function BentoGrid({ tiles }: { tiles: BentoTile[] }) {
  return (
    <motion.section
      className="sv-bento"
      aria-label="A look at what we make"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ staggerChildren: 0.09 }}
    >
      {tiles.map((tile) => {
        const style = { "--span": tile.span, "--span-m": tile.spanMobile } as CSSProperties;
        return (
          <motion.article
            key={tile.id}
            className={`sv-tile sv-tile-${tile.kind}`}
            style={style}
            variants={tileVariants}
            data-tile={tile.id}
            data-cursor="hover"
          >
            {tile.kind === "video" ? (
              <motion.div className="sv-tile-media" variants={mediaVariants}>
                <InViewVideo src={tile.src} poster={tile.poster} label={tile.label} />
              </motion.div>
            ) : (
              <>
                <motion.div className="sv-tile-media sv-tile-bg" variants={mediaVariants} aria-hidden="true">
                  <Image src={tile.bg} alt="" fill sizes="(max-width: 1100px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </motion.div>
                <motion.div
                  className="sv-brand-strip"
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.9 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease, delay: 0.25 } },
                  }}
                >
                  <Image src={tile.src} alt={tile.label} fill sizes="(max-width: 1100px) 90vw, 42vw" style={{ objectFit: "cover" }} />
                </motion.div>
              </>
            )}
          </motion.article>
        );
      })}
    </motion.section>
  );
}
