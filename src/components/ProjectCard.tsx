"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowNE } from "./icons";
import { cardImage, circleBtn, arrowNudge, fadeUp } from "@/lib/motion";
import type { FeaturedProject } from "@/data/site";
import type { CSSProperties } from "react";

const MotionLink = motion.create(Link);

export default function ProjectCard({ project, delay = 0 }: { project: FeaturedProject; delay?: number }) {
  const barStyle: CSSProperties = {
    ["--bar-bg" as string]: project.barBg,
    ["--bar-fg" as string]: project.barFg,
    ["--circle-fg" as string]: project.circleFg,
    ["--pill-border" as string]: project.pillBorder,
    ["--pill-bg" as string]: project.pillBg,
    ["--pill-fg" as string]: project.pillFg,
  };

  return (
    <Reveal as="div" variants={fadeUp} delay={delay}>
      <MotionLink
        className="project"
        href={project.href}
        initial="rest"
        whileHover="hover"
        animate="rest"
        data-cursor="hover"
      >
        <div className="project-media">
          <motion.div variants={cardImage} style={{ position: "absolute", inset: 0 }}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1100px) 100vw, 90vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>

        <div className={`project-bar bar-${project.variant}`} style={barStyle}>
          <div className="labels">
            {project.labels.map((l) => (
              <span className="label" key={l}>{l}</span>
            ))}
          </div>
          <h3 className="project-title">{project.title}</h3>

          {project.variant === "a" ? (
            <motion.span className="circle-btn" variants={circleBtn} aria-hidden="true">
              <motion.span variants={arrowNudge} style={{ display: "inline-flex" }}>
                <ArrowNE className="arrow" />
              </motion.span>
            </motion.span>
          ) : (
            <span className="pill" aria-hidden="true">
              <span>
                <motion.span variants={arrowNudge} style={{ display: "inline-flex" }}>
                  <ArrowNE className="arrow" />
                </motion.span>
              </span>
            </span>
          )}
        </div>
      </MotionLink>
    </Reveal>
  );
}
