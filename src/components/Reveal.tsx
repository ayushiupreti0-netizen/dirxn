"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewport, withDelay } from "@/lib/motion";

type Tag = "div" | "section" | "li" | "article" | "header" | "footer" | "dl";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  as?: Tag;
  variants?: Variants;
  delay?: number;
  children?: React.ReactNode;
};

const tagMap: Record<Tag, React.ElementType> = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  dl: motion.dl,
};

/** Fades + slides an element up into place the first time it enters view. */
export default function Reveal({
  as = "div",
  variants = fadeUp,
  delay = 0,
  children,
  ...rest
}: RevealProps) {
  const MotionTag = tagMap[as];
  const v = delay ? withDelay(variants, delay) : variants;
  return (
    <MotionTag initial="hidden" whileInView="show" viewport={viewport} variants={v} {...rest}>
      {children}
    </MotionTag>
  );
}
