"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT } from "@/lib/ease";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.035, delayChildren: 0.08 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: EASE_OUT },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.58, ease: EASE_OUT },
  }),
};

function IconMegaphone() {
  return (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10v4M4 10l12-4v12L4 14M8 14v4a2 2 0 002 2h1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconCompass() {
  return (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-5 5M12 8v2M12 14v2M8 12h2M14 12h2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  items: string[];
  idAttr?: string;
  index: number;
};

function ServiceCard({ icon, title, items, idAttr, index }: ServiceCardProps) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      id={idAttr}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE_OUT } }}
      className={`group relative overflow-hidden rounded-3xl border border-borderline/[0.09] bg-surface/80 p-7 shadow-card backdrop-blur-md transition-shadow duration-300 hover:border-accent/25 hover:shadow-card-hover dark:border-white/[0.07] dark:bg-surface/55 sm:p-8 ${
        idAttr ? "scroll-mt-28" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-80" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-accent/10" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent dark:from-accent/[0.12]" />
      </div>
      <span className="absolute right-6 top-6 font-display text-4xl font-bold tabular-nums text-fg/[0.06] transition-colors duration-300 group-hover:text-accent/20 dark:text-white/[0.04] dark:group-hover:text-accent/15">
        {num}
      </span>
      <div className="relative">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-borderline/[0.1] bg-gradient-to-br from-accent/12 to-accent/5 shadow-inner-glow transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-glow-sm dark:border-white/[0.08] dark:from-accent/20 dark:to-transparent">
            {icon}
          </div>
          <h3 className="pt-1 font-display text-lg font-bold leading-snug tracking-tight text-fg sm:text-xl">
            {title}
          </h3>
        </div>
        <motion.ul
          className="space-y-2.5 text-sm leading-relaxed text-fg/62"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
        >
          {items.map((text) => (
            <motion.li key={text} variants={rowVariants} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-cyan-400 shadow-sm"
                aria-hidden
              />
              <span>{text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={ref}
      id="services"
      initial={{ opacity: 0, y: 56 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      className="relative overflow-hidden border-t border-borderline/10 py-24 dark:border-white/[0.05] sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,720px)] -translate-x-1/2 bg-gradient-radial-fade opacity-40 dark:opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl sm:mb-20">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden />
            What we do
          </p>
          <h2 className="heading-section mt-6">Services built as systems</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fg/58 sm:text-lg">
            Full-funnel execution across acquisition, automation, and strategy —
            orchestrated for sustainable growth.
          </p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3 lg:gap-8">
          <ServiceCard
            index={0}
            icon={<IconMegaphone />}
            title="Lead Generation & Digital Marketing"
            items={[
              "Lead Generation",
              "Media Buying",
              "Google Ads",
              "Meta Campaigns",
              "TikTok Ads",
              "Affiliate Marketing",
              "Social Media Management",
              "Funnel Creation",
              "Branding",
              "Full Marketing Ops",
            ]}
          />
          <ServiceCard
            index={1}
            idAttr="ai-automation"
            icon={<IconSpark />}
            title="AI Automation"
            items={[
              "AI Sales Agents",
              "AI Marketing Campaigns",
              "AI Lead Management",
              "Website Chatbots",
              "Marketing Automation",
              "AI Content & Creatives",
              "Campaign Analysis",
              "Automated Follow-Ups",
            ]}
          />
          <ServiceCard
            index={2}
            icon={<IconCompass />}
            title="Business Development & Strategic Consulting"
            items={[
              "Biz Dev Consulting",
              "Sales Strategy",
              "Branding Strategy",
              "Online Business Dev",
              "Physical Commercial Dev",
              "Strategic Partnerships",
              "Partner Sourcing",
              "Sales & Distribution Structures",
            ]}
          />
        </div>
      </div>
    </motion.section>
  );
}
