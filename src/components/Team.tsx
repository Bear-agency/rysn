"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT } from "@/lib/ease";
import Image from "next/image";

type TeamMember = {
  name: string;
  title: string;
  description: string;
  initials: string;
  gradient: string;
  image?: string;
};

const team: TeamMember[] = [
  {
    name: "Denis",
    title: "Director & CEO",
    description:
      "Responsible for the day-to-day management of the company, leading strategy, partnerships, and growth. Focused on delivering professional execution and premium results for our valued clients. 🚀",
    initials: "D",
    gradient:
      "from-teal-400/18 via-teal-500/10 to-elevated dark:from-cyan-500/25 dark:via-sky-400/10 dark:to-transparent",
    image: "/team/denis.png",
  },
  {
    name: "Oksana",
    title: "Legal Strategy & Digital Compliance Specialist",
    description:
      "Expert in digital law, privacy, and copyright. Helps clients identify legal pathways and strategic opportunities within the law to operate effectively with platforms such as Google and Meta. ⚖️",
    initials: "O",
    gradient:
      "from-elevated/75 via-teal-600/10 to-elevated dark:from-slate-200/20 dark:via-accent/15 dark:to-transparent",
    image: "/team/oksana.png",
  },
  {
    name: "Elvatina",
    title: "Brand Style, BizDev & Affiliate Manager",
    description:
      "Specializing in brand positioning, business development, and affiliate growth. Elvatina focuses on bringing high-quality traffic and strategic partnerships that help clients scale, promote themselves, and grow their presence. 🚀",
    initials: "E",
    gradient:
      "from-teal-300/22 via-teal-500/10 to-elevated dark:from-teal-400/20 dark:via-cyan-500/10 dark:to-transparent",
    image: "/team/elvatina.png",
  },
  {
    name: "Hanna",
    title: "Founder",
    description:
      "With years of experience in marketing, social media, and fashion, and a strong network of industry connections, Hanna founded the company to provide holistic marketing, technology, and branding solutions. Her vision is to connect clients with the right opportunities and partnerships, maximizing growth and long-term success. 🚀",
    initials: "H",
    gradient:
      "from-elevated/65 via-teal-600/10 to-elevated dark:from-white/15 dark:via-accent/12 dark:to-transparent",
    image: "/team/hanna.png",
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 44 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.09 * i, duration: 0.55, ease: EASE_OUT },
  }),
};

export function Team() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={ref}
      id="team"
      initial={{ opacity: 0, y: 56 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      className="relative overflow-hidden border-t border-borderline/10 py-24 dark:border-white/[0.05] sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-teal-800/10 blur-[100px] dark:bg-accent/[0.06]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl sm:mb-20">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden />
            People
          </p>
          <h2 className="heading-section mt-6">Team</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-secondary dark:text-fg-secondary/58 sm:text-lg">
            Senior operators across strategy, compliance, growth, and brand.
          </p>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              custom={i}
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8%" }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE_OUT } }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-borderline/[0.09] bg-surface/75 shadow-card transition-all duration-300 hover:border-accent/25 hover:shadow-card-hover dark:border-white/[0.07] dark:bg-surface/50"
            >
              <div
                className={`relative flex aspect-[3/4] items-center justify-center bg-gradient-to-br ${member.gradient} from-20%`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface/20 to-transparent dark:from-surface/30" />
                <div className="team-grid-overlay absolute inset-0 opacity-45" />
                <div className="absolute inset-6 rounded-2xl border border-borderline/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-white/15" />
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    className="relative h-full w-full object-cover object-center"
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 100vw"
                  />
                ) : (
                  <span className="font-display relative text-5xl font-bold tracking-tighter text-fg drop-shadow-sm transition-all duration-300 group-hover:scale-105 dark:text-white/95">
                    {member.initials}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold text-fg">{member.name}</h3>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-900/62 dark:text-accent/90">
                  {member.title}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-secondary dark:text-fg-secondary/58">{member.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
