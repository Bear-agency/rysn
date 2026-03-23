"use client";

import Link from "next/link";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#services", label: "AI Automation" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/#partners", label: "Partners" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="border-t border-borderline/10 bg-canvas pt-16 dark:border-white/[0.05] sm:pt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top: logo + tagline */}
        <div className="pb-2">
          <Link
            href="/"
            className="group inline-flex flex-col gap-2 transition-colors"
          >
            <span className="inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight text-fg group-hover:text-accent sm:text-2xl">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-accent opacity-80 shadow-[0_0_10px_rgba(34,211,238,0.45)] transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              RYSN Digital Strategy Limited
            </span>
            <span className="pl-4 text-sm font-medium text-fg-muted dark:text-fg-muted/40 sm:pl-6">
              From Leads to Growth
            </span>
          </Link>
        </div>

        {/* Middle: nav + company details */}
        <div className="grid gap-10 pb-10 pt-6 sm:gap-12 md:grid-cols-2 md:items-start md:gap-16 md:pb-12 md:pt-8 lg:gap-24">
          <nav className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3" aria-label="Footer">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-fg-muted dark:text-fg-muted/55 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex w-full flex-col gap-3 text-sm leading-relaxed text-fg-muted dark:text-fg-muted/40 md:ml-auto md:w-fit md:items-end md:text-right">
            <p>Hong Kong • Business Registration No. 79909170</p>
            <p>
              Unit 1202, 299QRC, Queen&apos;s Road Central
            </p>
            <p className="flex pt-1 md:justify-end">
              <a
                href="mailto:info@rysndigital.com"
                className="inline-flex items-center gap-2 font-medium text-fg-muted dark:text-fg-muted/50 underline-offset-4 transition-all hover:text-accent hover:underline hover:decoration-accent/70 hover:[text-shadow:0_0_20px_rgba(6,182,212,0.35)] dark:hover:text-accent dark:hover:[text-shadow:0_0_24px_rgba(34,211,238,0.35)]"
              >
                <span aria-hidden className="select-none">
                  📩
                </span>
                info@rysndigital.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom: divider + copyright */}
      <div className="border-t border-borderline/10 dark:border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <nav
            className="flex flex-col items-center gap-2 text-center text-xs text-fg-muted dark:text-fg-muted/38 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-2 sm:gap-y-1 sm:text-left"
            aria-label="Copyright and legal"
          >
            <span className="max-w-full shrink-0">
              © 2026 RYSN Digital Strategy Limited
            </span>
            <span className="hidden shrink-0 text-fg-muted dark:text-fg-muted/30 sm:inline" aria-hidden>
              ·
            </span>
            <span className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
              <Link
                href="/terms"
                className="shrink-0 underline-offset-2 transition-colors hover:text-accent hover:underline"
              >
                Terms and Conditions
              </Link>
              <span className="shrink-0 text-fg-muted dark:text-fg-muted/30" aria-hidden>
                ·
              </span>
              <Link
                href="/privacy"
                className="shrink-0 underline-offset-2 transition-colors hover:text-accent hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
