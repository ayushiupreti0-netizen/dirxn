import type { Variants, Transition } from "framer-motion";

export const ease = [0.22, 0.61, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease } },
};

export function stagger(gap = 0.12, delay = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: gap, delayChildren: delay },
    },
  };
}

/** Card hover: parent controls child variants via whileHover="hover". */
export const cardImage: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.045, transition: { duration: 0.7, ease } },
};

export const circleBtn: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.45, ease } },
};

export const arrowNudge: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 4, y: -4, transition: { duration: 0.4, ease } },
};

export const arrowNudgeX: Variants = {
  rest: { x: 0 },
  hover: { x: 6, transition: { duration: 0.4, ease } },
};

export const viewport = { once: true, amount: 0.25 as const };

export const springy: Transition = { type: "spring", stiffness: 300, damping: 22, mass: 0.6 };

/** Returns a copy of a two-state (hidden/show) variants object with `delay`
 *  merged into the "show" transition — for staggering identical Reveals. */
export function withDelay(variants: Variants, delay: number): Variants {
  const show = variants.show as Record<string, unknown> | undefined;
  const prevTransition = (show?.transition as Record<string, unknown>) ?? {};
  return {
    ...variants,
    show: { ...show, transition: { ...prevTransition, delay } },
  };
}
