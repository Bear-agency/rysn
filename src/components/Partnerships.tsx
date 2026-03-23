"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT } from "@/lib/ease";

const paths = [
  {
    title: "Affiliate cooperation",
    body: "Bring audiences that fit our services and earn on performance. We offer straightforward terms, dependable tracking, and a team that treats your referrals with care.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
  },
  {
    title: "Corporate & strategic partners",
    body: "Agencies, media owners, and brands: let's explore co-marketing, referrals, or structured alliances that match both sides—professional execution and room to scale.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
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

export function Partnerships() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={ref}
      id="partners"
      initial={{ opacity: 0, y: 56 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      className="relative overflow-hidden border-t border-borderline/10 bg-gradient-to-b from-canvas to-surface/50 py-24 dark:from-canvas dark:to-surface/25 dark:border-white/[0.05] sm:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-teal-800/10 blur-[100px] dark:bg-accent/[0.06]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center sm:max-w-3xl">
          <div className="flex justify-center">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden />
              Partner with us
            </p>
          </div>
          <h2 className="heading-section mt-6 text-balance">
            Cooperate with us as an affiliate—or as a corporation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-fg-secondary dark:text-fg-secondary/58 sm:text-lg">
            We&apos;re open to serious affiliates and corporate partners who want transparent terms,
            professional delivery, and growth that lasts beyond a single campaign. Tell us how you
            work—we&apos;ll see if the fit is right.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-7 sm:mt-16 sm:grid-cols-2 sm:gap-8">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8%" }}
              whileHover={{ y: -5, transition: { duration: 0.35, ease: EASE_OUT } }}
              className="group relative overflow-hidden rounded-3xl border border-borderline/[0.09] bg-surface/75 p-7 text-left shadow-card transition-shadow duration-300 hover:border-accent/22 hover:shadow-card-hover dark:border-white/[0.07] dark:bg-surface/45 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-12 top-0 h-28 w-28 rounded-full bg-accent/[0.06] blur-2xl dark:bg-accent/10" />
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

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:mt-14 sm:flex-row sm:gap-5">
          <a href="/#contact" className="btn-primary">
            Discuss a partnership
          </a>
          <a href="mailto:info@rysndigital.com" className="btn-secondary">
            Email us directly
          </a>
        </div>
      </div>
    </motion.section>
  );
}
