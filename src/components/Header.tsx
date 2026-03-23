"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { EASE_OUT } from "@/lib/ease";
import { useEffect, useState } from "react";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#services", label: "AI Automation" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/#partners", label: "Partners" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header-scrolled shadow-sm shadow-black/5 dark:shadow-black/20" : "glass-header"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-fg sm:text-xl"
          onClick={() => setOpen(false)}
        >
          <span
            className="hidden h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,238,0.5)] sm:block"
            aria-hidden
          />
          RYSN Digital
        </Link>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-fg/20 bg-elevated/88 px-1.5 py-1.5 shadow-card backdrop-blur-md md:flex dark:border-white/[0.07] dark:bg-white/[0.04]"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-fg-secondary dark:text-fg-secondary/70 transition-all hover:bg-fg/[0.06] hover:text-teal-700 dark:hover:bg-white/[0.06] dark:hover:text-accent-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />
          <a
            href="/#contact"
            className="hidden rounded-full border border-inputborder bg-gradient-to-b from-accent/10 to-accent/5 px-5 py-2.5 text-sm font-semibold text-teal-900/72 shadow-glow-sm transition-all hover:border-teal-800/50 hover:shadow-glow dark:border-accent/35 dark:from-accent/15 dark:to-accent/5 dark:text-accent-bright dark:hover:border-accent/50 dark:hover:shadow-glow-sm md:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fg/20 bg-elevated/85 text-fg shadow-sm transition-all hover:border-accent/35 hover:text-accent md:hidden dark:border-white/10 dark:bg-white/[0.04]"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-borderline/35 bg-elevated/95 px-4 py-5 backdrop-blur-2xl dark:border-white/[0.06] dark:bg-canvas/95 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-3 py-3.5 text-base font-medium text-fg dark:text-fg/80 transition-colors hover:bg-fg/[0.05] hover:text-accent dark:hover:bg-white/[0.05]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="mt-3 rounded-full border border-fg/18 bg-accent/[0.07] px-3 py-3.5 text-center text-base font-semibold text-teal-900/78 dark:border-accent/40 dark:bg-accent/10 dark:text-accent-bright"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
