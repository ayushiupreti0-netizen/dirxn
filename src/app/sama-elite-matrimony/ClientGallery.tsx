"use client";

import { motion } from "framer-motion";
import { samaGallerySlots } from "@/data/site";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import type { CSSProperties } from "react";

export default function ClientGallery() {
  return (
    <motion.section
      className="case-gallery"
      aria-label="Project gallery"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(0.08)}
    >
      {samaGallerySlots.map((slot, i) => {
        const style: CSSProperties = { ["--x" as string]: slot.x, ["--y" as string]: slot.y };
        const lines = slot.label.split("\n");
        return (
          <motion.figure
            className={`slot${slot.wide ? " wide" : ""}`}
            style={{ margin: 0 }}
            key={i}
            variants={fadeUp}
          >
            {/* Replace with an <img> or <video> of this project when ready */}
            <figcaption className="slot-label" style={style}>
              {lines.map((line, j) => (
                <span key={j}>
                  {line}
                  {j < lines.length - 1 && <br />}
                </span>
              ))}
            </figcaption>
          </motion.figure>
        );
      })}
    </motion.section>
  );
}
