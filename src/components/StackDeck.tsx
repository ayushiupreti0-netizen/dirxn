"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import type { FeaturedProject } from "@/data/site";
import { ArrowNE, ArrowRight } from "./icons";

/**
 * Featured work "deck": the whole section pins to the viewport while the user
 * scrolls through a track several screens tall. Each card rises from below,
 * settles onto the pile, and then eases back (shrinks, lifts, dims) as the
 * next card lands over it — one card per screen of scroll.
 *
 * The final card is a dark "view all work" call to action so the deck ends on
 * a beat instead of a cut. On small screens the deck falls back to a plain
 * column of cards with entrance reveals.
 */
export default function StackDeck({ projects, allWorkHref }: { projects: FeaturedProject[]; allWorkHref: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const stacked = useStacked();

  // 4 project cards + 1 closing card.
  const total = projects.length + 1;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // Slightly softened so fast wheel flicks still read as motion, not a cut.
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4, restDelta: 0.0005 });

  const active = stacked && !reduced;

  if (!active) {
    return (
      <section className="deck deck-flat" aria-label="Selected work">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <ProjectFace project={p} index={i} total={total} priority={i === 0} />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <ClosingFace href={allWorkHref} index={total - 1} total={total} />
        </motion.div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="deck"
      aria-label="Selected work"
      style={{ height: `calc(${total} * 100vh + 40vh)` }}
    >
      <div className="deck-stage">
        <Counter progress={progress} total={total} />
        <div className="deck-pile">
          {projects.map((p, i) => (
            <DeckCard key={p.slug} index={i} total={total} progress={progress}>
              <ProjectFace project={p} index={i} total={total} priority={i === 0} />
            </DeckCard>
          ))}
          <DeckCard index={total - 1} total={total} progress={progress}>
            <ClosingFace href={allWorkHref} index={total - 1} total={total} />
          </DeckCard>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

function DeckCard({
  index,
  total,
  progress,
  children,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}) {
  // Each card owns one "step" of the track. The last card gets the same step
  // plus a resting tail (the +40vh in the track height) so it stays fully
  // landed for a beat before the section releases.
  const step = 1 / total;
  const enterStart = index * step;
  const enterEnd = enterStart + step * 0.78;
  const settle = Math.min((index + 1) * step, 1);
  const buried = Math.min((index + 2) * step, 1);

  // Entrance: rise from below the fold, un-tilt and un-zoom into place.
  const enterY = useTransform(progress, [enterStart, enterEnd], index === 0 ? ["0vh", "0vh"] : ["110vh", "0vh"]);
  const enterRot = useTransform(progress, [enterStart, enterEnd], index === 0 ? [0, 0] : [4, 0]);
  const enterScale = useTransform(progress, [enterStart, enterEnd], index === 0 ? [1, 1] : [1.04, 1]);

  // Exit (being covered): shrink, lift slightly, dim. The last card never exits.
  const isLast = index === total - 1;
  const coverScale = useTransform(progress, [settle, buried], [1, isLast ? 1 : 0.9]);
  const coverY = useTransform(progress, [settle, buried], ["0rem", isLast ? "0rem" : "-4.5rem"]);
  const coverDim = useTransform(progress, [settle, buried], [1, isLast ? 1 : 0.45]);

  const scale = useTransform(() => enterScale.get() * coverScale.get());
  const filter = useMotionTemplate`brightness(${coverDim})`;

  // Image inside the card gets a subtle parallax push while the card is live.
  const imgY = useTransform(progress, [enterStart, buried], ["-6%", "6%"]);

  return (
    <motion.div
      className="deck-card"
      style={{
        zIndex: index + 1,
        y: enterY,
        rotate: enterRot,
        scale,
        filter,
      }}
    >
      <motion.div className="deck-card-inner" style={{ y: coverY, ["--img-y" as string]: imgY }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------------ */

function ProjectFace({
  project,
  index,
  total,
  priority,
}: {
  project: FeaturedProject;
  index: number;
  total: number;
  priority: boolean;
}) {
  return (
    <Link className="deck-face" href={project.href} data-cursor="hover" aria-label={`${project.title} case study`}>
      <span className="deck-media">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1100px) 100vw, 90vw"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </span>
      <span className="deck-shade" aria-hidden="true" />

      <span className="deck-index" aria-hidden="true">
        {pad(index + 1)} <i>/</i> {pad(total)}
      </span>

      <span className="deck-tag">{project.title}</span>

      <span className="deck-foot">
        <span className="deck-title">{project.title}</span>
        <span className="deck-meta">
          {project.labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </span>
      </span>

      <span className="deck-open" aria-hidden="true">
        <ArrowNE className="arrow" />
      </span>
    </Link>
  );
}

function ClosingFace({ href, index, total }: { href: string; index: number; total: number }) {
  return (
    <Link className="deck-face deck-face-cta" href={href} data-cursor="hover">
      <span className="deck-index" aria-hidden="true">
        {pad(index + 1)} <i>/</i> {pad(total)}
      </span>
      <span className="deck-cta-eyebrow">And there&rsquo;s more</span>
      <span className="deck-cta-title">
        See all
        <br />
        <em>our work</em>
      </span>
      <span className="deck-cta-btn">
        View work <ArrowRight className="arrow" />
      </span>
      <span className="deck-cta-ring" aria-hidden="true" />
      <span className="deck-cta-ring deck-cta-ring-2" aria-hidden="true" />
    </Link>
  );
}

/* ------------------------------------------------------------------------ */

/** Side counter: a strip of numbers that slides as the deck advances. */
function Counter({ progress, total }: { progress: MotionValue<number>; total: number }) {
  // Advance once the incoming card is about halfway through its entrance.
  const idx = useTransform(progress, (p) => Math.min(total - 1, Math.max(0, Math.floor(p * total - 0.45))));
  const smooth = useSpring(idx, { stiffness: 180, damping: 26, mass: 0.5 });
  // The strip holds `total` rows, so one row is 100/total percent of its height.
  const y = useTransform(smooth, (i) => `${(-i * 100) / total}%`);
  const bar = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="deck-counter" aria-hidden="true">
      <div className="deck-counter-num">
        <motion.div className="deck-counter-strip" style={{ y }}>
          {Array.from({ length: total }, (_, i) => (
            <span key={i}>{pad(i + 1)}</span>
          ))}
        </motion.div>
      </div>
      <div className="deck-counter-track">
        <motion.span className="deck-counter-fill" style={{ height: bar }} />
      </div>
      <span className="deck-counter-total">{pad(total)}</span>
    </div>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** The deck only stacks on desktop; on small screens cards flow normally. */
function useStacked() {
  const [stacked, setStacked] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1101px)");
    const update = () => setStacked(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return stacked;
}
