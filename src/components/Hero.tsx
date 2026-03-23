"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { EASE_OUT } from "@/lib/ease";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: EASE_OUT },
  },
};

const statPill = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

const statsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.35 },
  },
};

type DotKind = "pulse" | "float" | "twinkle" | "drift";

const AMBIENT_DOTS: Array<{
  left: string;
  top: string;
  size: number;
  className: string;
  kind: DotKind;
  delay: number;
  duration: number;
}> = [
  { left: "4%", top: "14%", size: 10, className: "bg-teal-700/65 shadow-glow-sm dark:bg-accent/75", kind: "pulse", delay: 0, duration: 4.2 },
  { left: "11%", top: "28%", size: 6, className: "bg-teal-700/55 dark:bg-accent-bright/60", kind: "twinkle", delay: 0.3, duration: 2.8 },
  { left: "7%", top: "42%", size: 5, className: "bg-fg/32 dark:bg-white/40", kind: "float", delay: 0.1, duration: 5.5 },
  { left: "16%", top: "58%", size: 7, className: "bg-teal-700/50 shadow-glow-sm dark:bg-accent/55", kind: "pulse", delay: 0.8, duration: 3.6 },
  { left: "3%", top: "72%", size: 4, className: "bg-fg/28 dark:bg-white/30", kind: "twinkle", delay: 0.5, duration: 3.2 },
  { left: "88%", top: "16%", size: 8, className: "bg-teal-700/60 shadow-glow-sm dark:bg-accent/70", kind: "pulse", delay: 0.2, duration: 4.8 },
  { left: "94%", top: "32%", size: 5, className: "bg-teal-600/50 dark:bg-accent-bright/50", kind: "float", delay: 0.6, duration: 6 },
  { left: "82%", top: "44%", size: 6, className: "bg-teal-700/52 dark:bg-white/35", kind: "drift", delay: 0, duration: 7 },
  { left: "91%", top: "62%", size: 4, className: "bg-fg/30 dark:bg-white/38", kind: "twinkle", delay: 0.9, duration: 2.4 },
  { left: "76%", top: "22%", size: 5, className: "bg-teal-700/48 dark:bg-accent/45", kind: "float", delay: 0.4, duration: 5.2 },
  { left: "52%", top: "8%", size: 4, className: "bg-teal-700/45 dark:bg-accent/40", kind: "twinkle", delay: 0.15, duration: 3.4 },
  { left: "48%", top: "88%", size: 6, className: "bg-teal-700/50 shadow-glow-sm dark:bg-accent/50", kind: "pulse", delay: 0.7, duration: 4 },
  { left: "62%", top: "78%", size: 5, className: "bg-fg/26 dark:bg-white/28", kind: "drift", delay: 0.3, duration: 8 },
  { left: "72%", top: "70%", size: 4, className: "bg-teal-600/42 dark:bg-accent-bright/45", kind: "twinkle", delay: 0.55, duration: 2.9 },
];

function HeroAmbientDots({ reduced }: { reduced: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {AMBIENT_DOTS.map((d, i) => {
        const transition = { duration: d.duration, repeat: Infinity, ease: "easeInOut" as const, delay: d.delay };
        let animate: TargetAndTransition;
        switch (d.kind) {
          case "pulse":
            animate = { opacity: [0.35, 1, 0.35], scale: [1, 1.2, 1] };
            break;
          case "float":
            animate = { y: [0, -12, 0] };
            break;
          case "twinkle":
            animate = { opacity: [0.25, 0.95, 0.25], scale: [1, 1.15, 1] };
            break;
          case "drift":
            animate = { x: [0, 6, 0], y: [0, -8, 0] };
            break;
          default:
            animate = { opacity: 0.5 };
        }

        return (
          <div
            key={i}
            className="absolute"
            style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          >
            {!reduced ? (
              <motion.div
                className={`h-full w-full rounded-full ${d.className}`}
                style={{ willChange: "transform, opacity" }}
                initial={{ opacity: 0.45 }}
                animate={animate}
                transition={transition}
              />
            ) : (
              <div className={`h-full w-full rounded-full opacity-40 ${d.className}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function HeroGrid({ reduced }: { reduced: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0 bg-gradient-radial-fade opacity-[0.9] dark:opacity-100"
        animate={reduced ? undefined : { opacity: [0.76, 0.98, 0.76] }}
        transition={reduced ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute -inset-[100%] animate-grid-drift opacity-[0.46] hero-grid hero-grid--light dark:hidden" />
      <div className="absolute -inset-[100%] hidden animate-grid-drift opacity-[0.32] hero-grid hero-grid--dark dark:block" />
      {/* Light: solid canvas here hid grid + radial; use transparent mid-band like dark so motion reads */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/88 from-0% via-transparent via-38% to-canvas/84 to-100% dark:from-canvas dark:via-transparent dark:to-canvas" />
      <div className="hero-noise hero-noise--light absolute inset-0 dark:hidden" />
      <div className="hero-noise hero-noise--dark absolute inset-0 hidden dark:block" />
      <HeroAmbientDots reduced={reduced} />
      <motion.div
        className="absolute left-1/2 top-[18%] h-[min(90vw,640px)] w-[min(90vw,640px)] -translate-x-1/2 rounded-full bg-accent/[0.14] blur-[120px] dark:bg-accent/[0.055]"
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={reduced ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
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

function ScrollCue({ reduced }: { reduced: boolean }) {
  return (
    <motion.a
      href="/#services"
      className="group absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.15, duration: 0.6, ease: EASE_OUT }}
      whileHover={reduced ? undefined : { y: 2 }}
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted dark:text-fg-muted/35 transition-colors group-hover:text-accent dark:group-hover:text-accent-bright">
        Explore
      </span>
      <span className="flex items-end gap-1.5 pb-0.5" aria-hidden>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block h-1.5 w-1.5 rounded-full bg-teal-600/55 dark:bg-accent/70"
            animate={
              reduced
                ? undefined
                : { y: [0, -5, 0], opacity: [0.35, 1, 0.35] }
            }
            transition={
              reduced
                ? undefined
                : { duration: 1.35, repeat: Infinity, ease: "easeInOut", delay: i * 0.18 }
            }
          />
        ))}
      </span>
    </motion.a>
  );
}

const statItems = ["Full-stack growth", "Lead gen & media", "AI automation", "Strategic consulting"] as const;

export function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24"
    >
      <HeroGrid reduced={reduced} />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl lg:max-w-[42rem]"
        >
          <motion.div variants={item}>
            <span className="eyebrow">
              <motion.span
                className="eyebrow-dot"
                aria-hidden
                animate={reduced ? undefined : { scale: [1, 1.12, 1] }}
                transition={reduced ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              RYSN Digital
            </span>
          </motion.div>
          <motion.h1
            variants={item}
            className="mt-7 font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-[3.65rem]"
          >
            <span className="block text-balance">From Leads to</span>
            <motion.span
              className="mt-1 block text-balance text-gradient-hero"
              animate={reduced ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={reduced ? undefined : { duration: 12, repeat: Infinity, ease: "linear" }}
              style={
                reduced
                  ? undefined
                  : {
                      backgroundSize: "200% 200%",
                    }
              }
            >
              Growth
            </motion.span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg font-medium leading-snug text-teal-900/68 dark:text-accent-bright/95 sm:text-xl"
          >
            We build the systems that grow your business.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base leading-relaxed text-fg-secondary dark:text-fg-secondary/62 sm:text-lg sm:leading-relaxed"
          >
            RYSN Digital is a true one-stop shop — combining lead generation,
            digital marketing, AI automation, and strategic consulting to help
            businesses grow faster, smarter, and more efficiently.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
          >
            <span className="relative inline-flex">
              {!reduced && (
                <motion.span
                  aria-hidden
                  className="absolute -inset-[3px] rounded-full border border-teal-600/25 dark:border-accent/35"
                  animate={{ scale: [1, 1.06, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <motion.a
                href="/#services"
                className="btn-primary group relative"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                See Our Services
                <motion.span className="inline-flex" aria-hidden>
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.span>
              </motion.a>
            </span>
            <motion.a
              href="/#contact"
              className="btn-secondary group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
              <ArrowIcon className="opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
            </motion.a>
          </motion.div>
          <motion.div
            variants={statsContainer}
            initial="hidden"
            animate="visible"
            className="mt-14 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-borderline/10 pt-8 sm:gap-x-3 dark:border-white/[0.06]"
          >
            {statItems.map((label, i) => (
              <motion.span key={label} variants={statPill} className="flex items-center gap-x-2 sm:gap-x-3">
                {i > 0 && (
                  <span className="flex items-center gap-0.5 px-0.5 opacity-50" aria-hidden>
                    {[0, 1, 2].map((j) => (
                      <motion.span
                        key={j}
                        className="h-1 w-1 rounded-full bg-teal-600/50 dark:bg-accent/55"
                        animate={reduced ? undefined : { opacity: [0.2, 0.85, 0.2] }}
                        transition={
                          reduced
                            ? undefined
                            : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: j * 0.2 + i * 0.15 }
                        }
                      />
                    ))}
                  </span>
                )}
                <span
                  className={`text-sm ${i === 0 ? "font-medium text-fg-secondary dark:text-fg-secondary/50" : "text-fg-muted dark:text-fg-muted/40"}`}
                >
                  {label}
                </span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <ScrollCue reduced={reduced} />
    </section>
  );
}
