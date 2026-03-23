"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT } from "@/lib/ease";

const pillars = [
  {
    title: "Long-term partnerships",
    body: "We build relationships that last.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Smart systems over short-term campaigns",
    body: "Sustainable growth engines.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h10M4 18h7" strokeLinecap="round" />
        <circle cx="18" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Personal and professional collaboration",
    body: "Understanding the business behind the brand.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.09 * i, duration: 0.55, ease: EASE_OUT },
  }),
};

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 56 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      className="relative overflow-hidden border-t border-borderline/10 bg-gradient-to-b from-canvas via-elevated/30 to-canvas py-24 dark:from-canvas dark:via-surface/40 dark:to-canvas dark:border-white/[0.05] sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_80%_20%,rgb(var(--rgb-accent-glow)_/_0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl sm:mb-20">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden />
            Why RYSN
          </p>
          <h2 className="heading-section mt-6">Philosophy</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-secondary dark:text-fg-secondary/58 sm:text-lg">
            A European-minded approach: precise, accountable, and built for the
            long arc — not vanity metrics.
          </p>
        </div>
        <div className="grid gap-7 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8%" }}
              whileHover={{ y: -5, transition: { duration: 0.35, ease: EASE_OUT } }}
              className="group relative overflow-hidden rounded-3xl border border-borderline/[0.09] bg-surface/75 p-7 shadow-card transition-shadow duration-300 hover:border-accent/22 hover:shadow-card-hover dark:border-white/[0.07] dark:bg-surface/45 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-16 top-0 h-32 w-32 rounded-full bg-accent/[0.07] blur-2xl dark:bg-accent/10" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-borderline/[0.1] bg-gradient-to-br from-accent/10 to-transparent text-accent shadow-inner-glow transition-all duration-300 group-hover:border-accent/35 dark:border-white/[0.08] dark:from-accent/18">
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold leading-snug text-fg sm:text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary dark:text-fg-secondary/58 sm:text-base">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
