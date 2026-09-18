"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import VideoOrPoster from "@/components/VideoOrPoster";
import Footer from "@/components/Footer";
import { featuredProjects, services } from "@/data/site";
import { fadeUp, fadeIn, scaleIn, stagger, ease } from "@/lib/motion";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1 className="visually-hidden">DIRXN</h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
        >
          <Image className="hero-logo" src="/img/dirxn-logo-black.png" alt="DIRXN" width={2400} height={658} priority />
        </motion.div>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
        >
          We design brands and&nbsp; build websites
        </motion.p>
      </section>

      <Reveal as="section" className="showreel" variants={scaleIn} aria-label="Showreel">
        <VideoOrPoster
          src="/video/showreel.mp4"
          poster="/img/hero-laptop.jpg"
          posterAlt="DIRXN website work shown on a laptop"
          posterW={1920}
          posterH={1282}
        />
      </Reveal>

      <section className="intro" id="about">
        <Reveal as="div" variants={fadeUp}>
          <p>
            Good design should do more than look good - it
            <br className="d" /> should give clarity and direction. We combine
            <br className="d" /> strategy and creativity to shape digital experiences
            <br className="d" /> that capture attention, tell your story, and turn
            <br className="d" /> ideas into something people remember.
          </p>
        </Reveal>
      </section>

      <section className="projects" aria-label="Selected work">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} delay={Math.min(i * 0.05, 0.15)} />
        ))}
      </section>

      <section className="what-we-do" aria-labelledby="wwd">
        <Reveal as="div" variants={fadeUp}>
          <h2 className="section-heading" id="wwd">
            What We <em>Actually</em> Do
          </h2>
        </Reveal>
        <motion.ul
          className="svc-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.1)}
        >
          {services.map((s) => (
            <motion.li className="svc-row" key={s.num} variants={fadeUp}>
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
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <Reveal as="section" className="direction" variants={fadeIn}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease }}
        >
          Let&rsquo;s Give Your Brand a Direction.
        </motion.h2>
      </Reveal>

      <Footer />
    </main>
  );
}

export default Home;
