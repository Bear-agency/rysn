"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/ease";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

function HeroGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-radial-fade opacity-70 dark:opacity-100" />
      <div className="absolute -inset-[100%] animate-grid-drift opacity-[0.22] hero-grid hero-grid--light dark:hidden" />
      <div className="absolute -inset-[100%] hidden animate-grid-drift opacity-[0.32] hero-grid hero-grid--dark dark:block" />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/40 to-canvas dark:via-transparent" />
      <div className="hero-noise absolute inset-0 mix-blend-overlay" />
      <div className="absolute left-1/2 top-[18%] h-[min(90vw,640px)] w-[min(90vw,640px)] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px] dark:bg-accent/[0.055]" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
      <motion.div
        className="absolute left-[10%] top-[24%] h-2 w-2 rounded-full bg-cyan-500/80 shadow-glow-sm dark:bg-accent/70"
        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.25, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[14%] top-[32%] h-1.5 w-1.5 rounded-full bg-sky-500/70 dark:bg-accent-bright/55"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-[26%] left-[22%] h-1 w-1 rounded-full bg-fg/30 dark:bg-white/45"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24"
    >
      <HeroGrid />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl lg:max-w-[42rem]"
        >
          <motion.div variants={item}>
            <span className="eyebrow">
              <span className="eyebrow-dot" aria-hidden />
              RYSN Digital
            </span>
          </motion.div>
          <motion.h1
            variants={item}
            className="mt-7 font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-[3.65rem]"
          >
            <span className="block text-balance">From Leads to</span>
            <span className="mt-1 block text-balance text-gradient-hero">Growth</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg font-medium leading-snug text-cyan-800 dark:text-accent-bright/95 sm:text-xl"
          >
            We build the systems that grow your business.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base leading-relaxed text-fg/62 sm:text-lg sm:leading-relaxed"
          >
            RYSN Digital is a true one-stop shop — combining lead generation,
            digital marketing, AI automation, and strategic consulting to help
            businesses grow faster, smarter, and more efficiently.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
          >
            <motion.a
              href="#services"
              className="btn-primary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See Our Services
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <ArrowIcon className="opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </motion.a>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-borderline/10 pt-8 text-sm text-fg/45 dark:border-white/[0.06] dark:text-fg/40"
          >
            <span className="font-medium text-fg/55 dark:text-fg/50">Full-stack growth</span>
            <span className="hidden text-accent/50 sm:inline" aria-hidden>
              ·
            </span>
            <span>Lead gen & media</span>
            <span className="hidden text-accent/50 sm:inline" aria-hidden>
              ·
            </span>
            <span>AI automation</span>
            <span className="hidden text-accent/50 sm:inline" aria-hidden>
              ·
            </span>
            <span>Strategic consulting</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
