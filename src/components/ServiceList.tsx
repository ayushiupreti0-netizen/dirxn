"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import Reveal from "./Reveal";
import { LineReveal } from "./TextReveal";
import { ArrowRight } from "./icons";
import { ease, fadeUp } from "@/lib/motion";
import { contactHref } from "@/data/site";
import type { ServiceItem } from "@/data/services";

const tagList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};
const tag: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

/** Image panel: curtain-reveals from the top, then drifts gently as you scroll past. */
function ServiceMedia({ item, priority }: { item: ServiceItem; priority: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      className="sv-media"
      initial={{ clipPath: "inset(0 0 100% 0 round 1.2rem)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0 round 1.2rem)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease }}
      whileHover="hover"
    >
      <motion.div
        className="sv-media-inner"
        style={reduced ? undefined : { y }}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease }}
      >
        <motion.div
          className="sv-media-img"
          variants={{ hover: { scale: 1.05, transition: { duration: 0.7, ease } } }}
        >
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            priority={priority}
            sizes="(max-width: 1100px) 100vw, 44vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ServiceList({ items, ctaLabel }: { items: ServiceItem[]; ctaLabel: string }) {
  return (
    <div className="sv-rows">
      {items.map((item, i) => (
        <article className="sv-row" key={item.num} id={`service-${item.num}`}>
          <div className="sv-copy">
            <Reveal as="div" variants={fadeUp}>
              <span className="sv-num">{item.num}</span>
            </Reveal>
            <LineReveal as="h2" className="sv-title" amount={0.5} delay={0.1}>
              <>{item.title}</>
            </LineReveal>
            <Reveal as="div" variants={fadeUp} delay={0.2}>
              <p className="sv-desc">{item.desc}</p>
            </Reveal>
            <motion.ul
              className="sv-tags"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={tagList}
              aria-label={`What ${item.title} includes`}
            >
              {item.tags.map((t) => (
                <motion.li className="sv-tag" key={t} variants={tag}>
                  {t}
                </motion.li>
              ))}
            </motion.ul>
            <Reveal as="div" variants={fadeUp} delay={0.45}>
              <a className="sv-cta" href={contactHref} data-cursor="hover">
                <span className="sv-cta-fill" aria-hidden="true" />
                <span className="sv-cta-label">
                  {ctaLabel} <ArrowRight className="arrow" />
                </span>
              </a>
            </Reveal>
          </div>
          <ServiceMedia item={item} priority={i === 0} />
        </article>
      ))}
    </div>
  );
}
