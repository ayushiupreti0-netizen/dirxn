"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import type { GallerySlot } from "@/data/work";

export default function CaseGallery({ slots }: { slots: GallerySlot[] }) {
  return (
    <motion.section
      className="case-gallery"
      aria-label="Project gallery"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(0.08)}
    >
      {slots.map((slot, i) => {
        const cls = ["slot", slot.wide && "wide", slot.contain && "contain"].filter(Boolean).join(" ");
        return (
          <motion.figure className={cls} style={{ margin: 0 }} key={`${slot.src}-${i}`} variants={fadeUp}>
            {slot.video ? (
              <video autoPlay muted loop playsInline preload="metadata" poster={slot.poster} aria-label={slot.alt}>
                <source src={slot.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={slot.src}
                alt={slot.alt}
                fill
                sizes={slot.wide ? "(max-width: 1100px) 100vw, 85vw" : "(max-width: 1100px) 100vw, 42vw"}
                style={{
                  objectFit: slot.contain ? "contain" : "cover",
                  objectPosition: slot.position ?? "center",
                }}
              />
            )}
          </motion.figure>
        );
      })}
    </motion.section>
  );
}
