"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav, contactHref } from "@/data/site";
import { ArrowRight } from "./icons";
import { ease } from "@/lib/motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="DIRXN home">
          <Image src="/img/dirxn-logo-black-sm.png" alt="DIRXN" width={480} height={132} priority />
        </Link>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="btn-connect" href={contactHref}>
          Connect with Us <ArrowRight className="arrow" />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-panel"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.05 * i, ease }}
              >
                <Link className="mobile-link" href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.05 * nav.length, ease }}
            >
              <Link className="btn-connect-mobile" href={contactHref} onClick={() => setOpen(false)}>
                Connect with Us <ArrowRight className="arrow" />
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
