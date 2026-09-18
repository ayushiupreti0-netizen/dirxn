"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowNE } from "./icons";
import { cardImage, circleBtn, arrowNudge, fadeUp } from "@/lib/motion";

const MotionLink = motion.create(Link);

export default function WorkCard({
  href,
  image,
  imageAlt,
  title,
  label,
  delay = 0,
}: {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  label: string;
  delay?: number;
}) {
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
        <div className="work-bar">
          <h2 className="work-title">{title}</h2>
          <span className="work-label">{label}</span>
          <motion.span className="circle-btn" variants={circleBtn} style={{ ["--circle-fg" as string]: "#112638" }} aria-hidden="true">
            <motion.span variants={arrowNudge} style={{ display: "inline-flex" }}>
              <ArrowNE className="arrow" />
            </motion.span>
          </motion.span>
        </div>
      </MotionLink>
    </Reveal>
  );
}
