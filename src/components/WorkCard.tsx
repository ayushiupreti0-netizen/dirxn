"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowNE } from "./icons";
import { cardImage, circleBtn, arrowNudge, fadeUp } from "@/lib/motion";
import type { CSSProperties } from "react";

const MotionLink = motion.create(Link);

export default function WorkCard({
  href,
  image,
  imageAlt,
  title,
  label,
  barBg = "#112638",
  barFg = "#ffffff",
  delay = 0,
}: {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  label: string;
  barBg?: string;
  barFg?: string;
  delay?: number;
}) {
  const barStyle: CSSProperties = {
    ["--bar-bg" as string]: barBg,
    ["--bar-fg" as string]: barFg,
    ["--circle-fg" as string]: barBg,
  };

  return (
    <Reveal as="div" variants={fadeUp} delay={delay}>
      <MotionLink
        className="work-card"
        href={href}
        initial="rest"
        whileHover="hover"
        animate="rest"
        data-cursor="hover"
      >
        <div className="project-media">
          <motion.div variants={cardImage} style={{ position: "absolute", inset: 0 }}>
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1100px) 100vw, 42vw" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
        <div className="work-bar" style={barStyle}>
          <h2 className="work-title">{title}</h2>
          <span className="work-label">{label}</span>
          <motion.span className="circle-btn" variants={circleBtn} aria-hidden="true">
            <motion.span variants={arrowNudge} style={{ display: "inline-flex" }}>
              <ArrowNE className="arrow" />
            </motion.span>
          </motion.span>
        </div>
      </MotionLink>
    </Reveal>
  );
}
