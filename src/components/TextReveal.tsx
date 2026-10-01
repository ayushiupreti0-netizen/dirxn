"use client";

import { Children, Fragment, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { ease } from "@/lib/motion";

/* Shared curtain-style text reveals. Each unit (line or word) sits inside an
   overflow-hidden mask and slides up out of it when the block scrolls into
   view, so headings feel like they are being set rather than faded in. */

const lineVariants: Variants = {
  hidden: { y: "110%", rotate: 3 },
  show: { y: "0%", rotate: 0, transition: { duration: 1, ease } },
};

const wordVariants: Variants = {
  hidden: { y: "120%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease } },
};

type Tag = "h1" | "h2" | "h3" | "p" | "div" | "span";

const tags: Record<Tag, React.ElementType> = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  div: motion.div,
  span: motion.span,
};

/**
 * Reveals a heading one line at a time. Pass each visual line as a separate
 * child; a `<br />` is inserted between them on desktop (`br.d` collapses on
 * small screens so lines re-flow naturally there).
 */
export function LineReveal({
  as = "h2",
  className,
  id,
  children,
  delay = 0,
  stagger = 0.11,
  once = true,
  amount = 0.4,
  breaks = true,
}: {
  as?: Tag;
  className?: string;
  id?: string;
  children: ReactNode;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
  breaks?: boolean;
}) {
  const Tag = tags[as];
  const lines = Children.toArray(children);
  return (
    <Tag
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <Fragment key={i}>
          <span className="tr-mask">
            <motion.span className="tr-line" variants={lineVariants}>
              {line}
            </motion.span>
          </span>
          {/* The trailing space is swallowed after the <br> on desktop and keeps
              the lines from running together when br.d collapses on mobile. */}
          {breaks && i < lines.length - 1 && (
            <>
              <br className="d" />{" "}
            </>
          )}
        </Fragment>
      ))}
    </Tag>
  );
}

/** Reveals a sentence word by word (used for the hero tagline). */
export function WordReveal({
  as = "p",
  className,
  text,
  delay = 0,
  stagger = 0.06,
  animateOnMount = false,
}: {
  as?: Tag;
  className?: string;
  text: string;
  delay?: number;
  stagger?: number;
  /** Animate immediately on mount instead of when scrolled into view. */
  animateOnMount?: boolean;
}) {
  const Tag = tags[as];
  const words = text.split(" ");
  const viewProps = animateOnMount
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, amount: 0.5 } };
  return (
    <Tag
      className={className}
      initial="hidden"
      {...viewProps}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span className="tr-mask tr-word" key={`${w}-${i}`} aria-hidden="true">
          <motion.span className="tr-line" variants={wordVariants}>
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
