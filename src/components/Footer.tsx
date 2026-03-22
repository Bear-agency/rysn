"use client";

import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#ai-automation", label: "AI Automation" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-borderline/10 bg-canvas pt-16 dark:border-white/[0.05] sm:pt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-8">
        <div className="max-w-sm">
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight text-fg transition-colors hover:text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent opacity-80 shadow-[0_0_10px_rgba(34,211,238,0.45)] transition-opacity group-hover:opacity-100" />
            RYSN Digital
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-fg/48">
            From leads to growth — systems that scale. Lead generation, automation, and strategy in
            one partner.
          </p>
          <a
            href="mailto:info@rysndigital.com"
            className="mt-5 inline-flex text-sm font-semibold text-cyan-700 transition-colors hover:text-accent dark:text-accent dark:hover:text-accent-bright"
          >
            info@rysndigital.com
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-fg/55 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-14 max-w-6xl border-t border-borderline/10 px-4 pb-10 pt-8 dark:border-white/[0.06] sm:px-6 lg:px-8">
        <p className="text-center text-xs text-fg/38 sm:text-left">
          © 2025 RYSN Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
