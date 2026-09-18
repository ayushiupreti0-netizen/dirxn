import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { fadeUp, scaleIn } from "@/lib/motion";

export default function Footer({ topPad }: { topPad?: string }) {
  return (
    <footer className="jam" style={topPad ? { paddingTop: topPad } : undefined}>
      <Reveal className="jam-row" variants={fadeUp}>
        <h2>Let&rsquo;s Jam.</h2>
        <a className="btn-start" href="mailto:hello@dirxn.com">
          Get Started <ArrowRight className="arrow" />
        </a>
      </Reveal>

      <Reveal variants={scaleIn} delay={0.1}>
        <Image
          className="footer-logo"
          src="/img/dirxn-logo-black.png"
          alt="DIRXN"
          width={2400}
          height={658}
        />
      </Reveal>

      <Reveal as="div" className="site-footer-meta" delay={0.15}>
        <span>DIRXN</span>
        <span>Brand &middot; Web &middot; Marketing &mdash; dirxn.com</span>
      </Reveal>
    </footer>
  );
}
