import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import VideoOrPoster from "@/components/VideoOrPoster";
import Footer from "@/components/Footer";
import { serviceBlocks, serviceSteps, contactHref } from "@/data/site";
import { fadeUp, scaleIn } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Services",
  description: "Logo design, brand identity, website design & development and digital marketing by DIRXN.",
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <main>
        <Reveal as="div" variants={fadeUp}>
          <h1 className="page-title">Services</h1>
        </Reveal>

        <Reveal as="section" className="svc-hero" variants={scaleIn} aria-label="Services showreel">
          <VideoOrPoster
            src="/video/services.mp4"
            poster="/img/showreel-poster.jpg"
            posterAlt="DIRXN services showreel"
            posterW={1200}
            posterH={1200}
          />
        </Reveal>

        <section className="svc-blocks">
          {serviceBlocks.map((block) => {
            const [line1, line2] = block.title.split("\n");
            return (
              <article className="svc-block" key={block.num}>
                <Reveal as="div" variants={fadeUp} className="svc-block-num">
                  {block.num}
                </Reveal>
                <Reveal as="div" variants={fadeUp} delay={0.05}>
                  <h2 className="svc-block-title">
                    {line1}
                    {line2 && (
                      <>
                        <br />
                        {line2}
                      </>
                    )}
                  </h2>
                </Reveal>
                <Reveal as="div" variants={fadeUp} delay={0.1} className="svc-block-lede">
                  {block.lede.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < block.lede.length - 1 && <br className="d" />}
                      {i < block.lede.length - 1 && " "}
                    </span>
                  ))}
                </Reveal>

                <Reveal as="div" variants={fadeUp} delay={0.15} className="svc-block-body">
                  <div className="svc-block-media">
                    <Image
                      src="/img/service-logo-design.jpg"
                      alt="3D green logo mark render"
                      fill
                      sizes="(max-width: 1100px) 100vw, 47vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <ul className="svc-steps">
                    {serviceSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                  <a className="btn-block" href={contactHref}>
                    Let&rsquo;s build together
                  </a>
                </Reveal>
              </article>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
