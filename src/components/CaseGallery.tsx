"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { ease } from "@/lib/motion";
import type { GallerySlot, ArchesSlot, ColorSlot, ImageSlot, LogoSlot, VideoSlot, ScreensSlot } from "@/data/work";

/*
 * Case-study gallery. Every tile is revealed with a curtain wipe (clip-path
 * inset from the bottom) while the artwork inside settles from a slight zoom,
 * so the grid feels like it is being unveiled rather than faded in. Logos
 * float up onto their panel a beat after the panel lands; colour swatches
 * sweep in; palette arches rise one after another on a spring. App screens
 * drift at different speeds while the page scrolls past them.
 */

const wipe: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", y: 40 },
  show: { clipPath: "inset(0% 0 0 0)", y: 0, transition: { duration: 1.1, ease } },
};

const settle: Variants = {
  hidden: { scale: 1.14 },
  show: { scale: 1, transition: { duration: 1.4, ease } },
  hover: { scale: 1.04, transition: { duration: 0.9, ease } },
};

const floatIn: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease, delay: 0.25 } },
};

const sweep: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1, ease } },
};

const arch: Variants = {
  hidden: { y: "60%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.9 } },
};

const view = { once: true, amount: 0.3 as const, margin: "0px 0px -8% 0px" };

const sizesFor = (span: number) =>
  span >= 4 ? "(max-width: 1100px) 100vw, 85vw" : span === 3 ? "(max-width: 1100px) 100vw, 64vw" : span === 2 ? "(max-width: 1100px) 100vw, 42vw" : "(max-width: 1100px) 50vw, 21vw";

export default function CaseGallery({ slots }: { slots: GallerySlot[] }) {
  return (
    <section className="case-gallery" aria-label="Project gallery">
      {slots.map((slot, i) => (
        <Tile key={i} slot={slot} />
      ))}
    </section>
  );
}

function Tile({ slot }: { slot: GallerySlot }) {
  const span = slot.span ?? 2;
  const kind = slot.kind ?? "image";
  const cls = `slot slot-${kind} span-${span}`;
  const style: CSSProperties | undefined = slot.ratio ? { height: "auto", aspectRatio: String(slot.ratio) } : undefined;

  if (kind === "arches") return <Arches slot={slot as ArchesSlot} className={cls} />;
  if (kind === "color") return <Swatch slot={slot as ColorSlot} className={cls} />;
  if (kind === "screens") return <Screens slot={slot as ScreensSlot} className={cls} style={style} />;

  return (
    <motion.figure
      className={cls}
      style={style}
      data-cursor="hover"
      initial="hidden"
      whileInView="show"
      viewport={view}
      variants={wipe}
      whileHover="hover"
    >
      {kind === "image" && <Picture slot={slot as ImageSlot} span={span} />}
      {kind === "video" && <Clip slot={slot as VideoSlot} />}
      {kind === "logo" && <Logo slot={slot as LogoSlot} span={span} />}
    </motion.figure>
  );
}

function Picture({ slot, span }: { slot: ImageSlot; span: number }) {
  return (
    <motion.div className="slot-media" variants={settle}>
      <Image
        src={slot.src}
        alt={slot.alt}
        fill
        sizes={sizesFor(span)}
        style={{ objectFit: "cover", objectPosition: slot.position ?? "center" }}
      />
    </motion.div>
  );
}

/** Autoplays only while on screen so several looping clips do not fight for bandwidth. */
function Clip({ slot }: { slot: VideoSlot }) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (inView && !reduced) v.play().catch(() => {});
    else v.pause();
  }, [inView, reduced]);

  return (
    <motion.div className="slot-media" variants={settle} style={{ background: slot.bg ?? "#000" }}>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        poster={slot.poster}
        aria-label={slot.alt}
        style={{ objectFit: slot.fit ?? "cover" }}
      >
        <source src={slot.src} type="video/mp4" />
      </video>
    </motion.div>
  );
}

function Logo({ slot, span }: { slot: LogoSlot; span: number }) {
  const style: CSSProperties = {
    background: slot.bg,
    ["--pad" as string]: `${slot.pad ?? 10}%`,
  };
  return (
    <div className={`slot-panel${slot.border ? " bordered" : ""}`} style={style}>
      <motion.div className="slot-art" variants={floatIn}>
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizesFor(span)}
          // Animated GIFs must bypass the optimiser or they lose their frames.
          unoptimized={slot.src.endsWith(".gif")}
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </div>
  );
}

/**
 * Phones on a gradient panel. Each screen is parallaxed against the scroll
 * position at a different rate (the further right, the faster), and the whole
 * group lifts slightly on hover so the panel reads as a single object.
 */
function Screens({ slot, className, style }: { slot: ScreensSlot; className: string; style?: CSSProperties }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <motion.figure
      ref={ref}
      className={className}
      style={{ ...style, background: slot.bg }}
      data-cursor="hover"
      initial="hidden"
      whileInView="show"
      viewport={view}
      variants={wipe}
      whileHover="hover"
      aria-label={slot.items.map((i) => i.alt).join("; ")}
    >
      <span className="screens-glow" aria-hidden="true" />
      <motion.div
        className="screens-row"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } } }}
      >
        {slot.items.map((item, i) => (
          <Screen key={item.src} item={item} index={i} progress={scrollYProgress} reduced={!!reduced} />
        ))}
      </motion.div>
    </motion.figure>
  );
}

function Screen({
  item,
  index,
  progress,
  reduced,
}: {
  item: { src: string; alt: string };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  const drift = 6 + index * 7; // percent of own height
  const y = useTransform(progress, [0, 1], [`${drift}%`, `${-drift}%`]);
  return (
    <motion.div
      className={`screen screen-${index}`}
      style={reduced ? undefined : { y }}
      variants={{
        hidden: { opacity: 0, y: 80, rotate: index % 2 ? 3 : -3 },
        show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1.2, ease } },
        hover: { y: -12, transition: { duration: 0.9, ease, delay: index * 0.05 } },
      }}
    >
      <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1100px) 45vw, 30vw" style={{ objectFit: "contain" }} />
    </motion.div>
  );
}

function Swatch({ slot, className }: { slot: ColorSlot; className: string }) {
  return (
    <motion.div
      className={`${className}${slot.border ? " bordered" : ""}`}
      initial="hidden"
      whileInView="show"
      viewport={view}
      variants={sweep}
      style={{ background: slot.color, transformOrigin: "left center" }}
      aria-label={slot.label ? `${slot.label} ${slot.color}` : slot.color}
      role="img"
    >
      {slot.label && (
        <span className="swatch-label" style={{ color: contrast(slot.color) }}>
          <span>{slot.label}</span>
          <span>{slot.color.toUpperCase()}</span>
        </span>
      )}
    </motion.div>
  );
}

function Arches({ slot, className }: { slot: ArchesSlot; className: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={view}
      transition={{ staggerChildren: 0.12 }}
      role="img"
      aria-label={`Colour palette: ${slot.colors.join(", ")}`}
    >
      {slot.colors.map((c, i) => (
        <motion.span key={`${c}-${i}`} className="arch" variants={arch} style={{ background: c }} data-cursor="hover">
          <span className="arch-hex" style={{ color: contrast(c) }}>
            {c.toUpperCase()}
          </span>
        </motion.span>
      ))}
    </motion.div>
  );
}

/** Black or white text depending on the luminance of a hex colour. */
function contrast(hex: string) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum > 0.6 ? "rgba(17,17,17,.7)" : "rgba(255,255,255,.75)";
}
