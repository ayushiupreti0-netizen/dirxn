"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import StackDeck from "@/components/StackDeck";
import ShowreelScale from "@/components/ShowreelScale";
import ScrollRevealText from "@/components/ScrollRevealText";
import ScrollProgress from "@/components/ScrollProgress";
import Marquee from "@/components/Marquee";
import DirectionBand from "@/components/DirectionBand";
import { LineReveal, WordReveal } from "@/components/TextReveal";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/icons";
import { featuredProjects, services } from "@/data/site";
import { fadeUp, stagger, ease } from "@/lib/motion";

const INTRO =
  "Good design should do more than look good - it should give clarity and direction. We combine strategy and creativity to shape digital experiences that capture attention, tell your story, and turn ideas into something people remember.";

const TICKER = ["Brand Identity", "Logo Design", "Website Design", "Development", "Digital Marketing", "Social Creatives"];

function Home() {
  return (
    <main>
      <ScrollProgress />

      <Hero />

      <ShowreelScale src="/video/showreel.mp4" poster="/img/showreel-poster.jpg" posterAlt="DIRXN showreel" />

      <section className="intro" id="about">
        <ScrollRevealText text={INTRO} className="intro-copy" />
      </section>

      <Marquee items={TICKER} className="ticker" />

      <section className="work-intro" aria-labelledby="featured-work">
        <LineReveal as="h2" className="work-intro-title" id="featured-work" amount={0.6}>
          <>Featured</>
          <span className="work-intro-muted">work</span>
        </LineReveal>
        <motion.span
          className="work-intro-arrow"
          aria-hidden="true"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
        >
          <motion.span
            className="work-intro-arrow-bob"
            animate={{ y: ["0%", "35%", "0%"] }}
            transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.4 }}
          >
            <ArrowRight className="arrow" />
          </motion.span>
        </motion.span>
        <Reveal as="div" variants={fadeUp} delay={0.2}>
          <p className="work-intro-copy">
            We design brands and build websites that capture attention,
            <br className="d" /> tell your story and deliver results people remember.
          </p>
        </Reveal>
      </section>

      <StackDeck projects={featuredProjects} allWorkHref="/work" />

      <section className="what-we-do" aria-labelledby="wwd">
        <LineReveal as="h2" className="section-heading" id="wwd" breaks={false}>
          <>
            What We <em>Actually</em> Do
          </>
        </LineReveal>
        <motion.ul
          className="svc-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger(0.12)}
        >
          {services.map((s) => (
            <motion.li className="svc-row" key={s.num} variants={svcRow} data-cursor="hover">
              <span className="svc-num">{s.num}</span>
              <h3 className="svc-title">
                {s.line1}
                {s.line2 && (
                  <>
                    <br className="d" /> {s.line2}
                  </>
                )}
              </h3>
              <p className="svc-desc">{s.desc}</p>
              <span className="svc-arrow" aria-hidden="true">
                <ArrowRight className="arrow" />
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <DirectionBand />

      <Footer />
    </main>
  );
}

/* Rows wipe in from the left edge and rise a touch. */
const svcRow = {
  hidden: { opacity: 0, y: 36, clipPath: "inset(0 100% 0 0)" },
  show: { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)", transition: { duration: 1, ease } },
};

/* ------------------------------------------------------------------------ */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Drift up and fade as the showreel arrives, so the wordmark hands off to the video.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section className="hero" ref={ref}>
      <h1 className="visually-hidden">DIRXN</h1>
      <motion.div className="hero-inner" style={reduced ? undefined : { y, opacity, scale }}>
        <motion.div
          className="hero-logo-wrap"
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.15 }}
        >
          <motion.div
            initial={{ scale: 1.06, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1.6, ease, delay: 0.15 }}
          >
            <Image className="hero-logo" src="/img/dirxn-logo-black.png" alt="DIRXN" width={2400} height={658} priority />
          </motion.div>
        </motion.div>

        <WordReveal
          as="p"
          className="hero-tagline"
          text="We design brands and build websites"
          animateOnMount
          delay={0.9}
          stagger={0.07}
        />

        <motion.div
          className="hero-cue"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span>Scroll</span>
          <span className="hero-cue-line">
            <motion.i
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
            />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
