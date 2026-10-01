import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { fadeUp, scaleIn } from "@/lib/motion";
import { footerColumns, contactEmail } from "@/data/site";

export default function Footer({ topPad }: { topPad?: string }) {
  return (
    <footer className="site-footer" style={topPad ? { paddingTop: topPad } : undefined}>
      <div className="footer-cols">
        {footerColumns.map((col, i) => (
          <Reveal as="div" className="footer-col" key={col.heading} variants={fadeUp} delay={i * 0.07}>
            <h2 className="footer-col-heading">{col.heading}</h2>
            <ul>
              {col.links.map((link) => (
                <li key={`${col.heading}-${link.label}`}>
                  {link.href.startsWith("mailto:") ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal variants={scaleIn} delay={0.1}>
        <Image
          className="footer-logo"
          src="/img/dirxn-logo-white.png"
          alt="DIRXN"
          width={2400}
          height={658}
        />
      </Reveal>

      <Reveal as="div" className="site-footer-meta" delay={0.15}>
        <span>&copy; {new Date().getFullYear()} DIRXN &middot; Design &amp; Development Studio</span>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </Reveal>
    </footer>
  );
}
