"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { EASE_OUT } from "@/lib/ease";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const INTRO = `We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information. By using our website, you consent to the practices described herein. We aim to comply with applicable data protection laws and best practices.`;

const SECTIONS_2_TO_11: { title: string; paragraphs: string[] }[] = [
  {
    title: "Information We Collect",
    paragraphs: [
      `We may collect personal data such as name, email address, company details, and communication records. Additionally, we collect technical data including IP address, browser type, and usage patterns. Information may be collected directly or through automated technologies like cookies. We only collect data necessary for legitimate business purposes.`,
    ],
  },
  {
    title: "Use of Data",
    paragraphs: [
      `Your information is used to provide services, respond to inquiries, and improve our offerings. We may also use data for marketing communications, subject to your preferences. Data helps us analyze website performance and user behavior. We ensure that data processing is lawful and proportionate.`,
    ],
  },
  {
    title: "Legal Basis for Processing",
    paragraphs: [
      `We process personal data based on consent, contractual necessity, legal obligations, or legitimate interests. Legitimate interests include improving services and ensuring security. Where consent is required, you may withdraw it at any time. We ensure transparency in all processing activities.`,
    ],
  },
  {
    title: "Data Sharing",
    paragraphs: [
      `We do not sell personal data to third parties. Data may be shared with trusted service providers who assist in business operations. These parties are bound by confidentiality and data protection obligations. We may also disclose data if required by law or regulatory authorities.`,
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      `We implement technical and organizational measures to protect personal data. These include secure servers, access controls, and encryption where appropriate. Despite these efforts, no system is completely secure. Users are encouraged to take precautions when sharing information online.`,
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      `We retain personal data only as long as necessary for business or legal purposes. Retention periods vary depending on the nature of the data. Once data is no longer needed, it is securely deleted or anonymized. This ensures responsible data management.`,
    ],
  },
  {
    title: "Cookies and Tracking",
    paragraphs: [
      `We use cookies to enhance user experience and analyze website performance. Cookies may store preferences and track interactions. You can control or disable cookies through browser settings. However, disabling cookies may affect website functionality.`,
    ],
  },
  {
    title: "International Transfers",
    paragraphs: [
      `As a global business, data may be transferred and processed outside your jurisdiction. We ensure appropriate safeguards are in place for such transfers. This includes contractual protections and compliance with legal standards.`,
    ],
  },
  {
    title: "User Rights",
    paragraphs: [
      `Depending on applicable data protection laws, you may have certain rights regarding your personal data. These rights may include the right to access the personal data we hold about you and to request information on how it is processed. You may request correction of inaccurate or incomplete data to ensure that your information remains up to date.`,
      `You also have the right to request the deletion of your personal data where it is no longer necessary for the purposes for which it was collected, or where processing is no longer justified. In certain circumstances, you may request restriction of processing, for example while a data accuracy request is being verified or where you object to processing.`,
      `You may have the right to object to the processing of your personal data where such processing is based on legitimate interests, including for direct marketing purposes. Where processing is based on consent, you have the right to withdraw that consent at any time without affecting the lawfulness of prior processing.`,
      `In addition, you may have the right to data portability, allowing you to request a copy of your personal data in a structured, commonly used, and machine-readable format, and to transmit that data to another service provider where technically feasible.`,
      `We may require verification of your identity before processing any requests to ensure the security of your data. Requests will be handled within a reasonable timeframe in accordance with applicable legal requirements. In some cases, we may retain certain information as required for legal, regulatory, or legitimate business purposes.`,
      `To exercise any of your rights, please contact us using the contact details provided in this Privacy Policy. We are committed to handling all requests transparently and in compliance with applicable data protection regulations.`,
    ],
  },
  {
    title: "Third-Party Tools",
    paragraphs: [
      `We may use third-party tools such as analytics and marketing platforms. These tools may collect data according to their own privacy policies. We recommend reviewing their terms separately. We ensure partners meet reasonable data protection standards.`,
    ],
  },
];

function AnimatedSection({
  id,
  sectionNum,
  title,
  children,
}: {
  id: string;
  sectionNum: number;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px -12% 0px" });
  const num = String(sectionNum).padStart(2, "0");

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className="relative scroll-mt-28 border-b border-borderline/[0.08] pb-14 pt-2 last:border-b-0 dark:border-white/[0.06]"
    >
      <div className="relative">
        <span
          className="pointer-events-none absolute -left-1 top-0 font-display text-5xl font-bold tabular-nums text-fg/[0.18] select-none sm:text-6xl sm:-left-2 dark:text-white/[0.14] [text-shadow:0_1px_0_rgb(var(--rgb-canvas))] dark:[text-shadow:0_1px_2px_rgb(0_0_0/0.5)]"
          aria-hidden
        >
          {num}
        </span>
        <h2 className="relative pl-14 font-display text-xl font-bold tracking-tight text-fg sm:pl-20 sm:text-2xl">
          {sectionNum}. {title}
        </h2>
        <div className="relative mt-6 space-y-4 pl-14 text-sm leading-relaxed text-fg-secondary dark:text-fg-secondary/70 sm:pl-20 sm:text-base sm:leading-relaxed">
          {children}
        </div>
      </div>
    </motion.section>
  );
}

function PrivacySidebar({ active }: { active: number }) {
  const labels: Record<number, string> = {
    1: "Introduction",
    2: "Information We Collect",
    3: "Use of Data",
    4: "Legal Basis for Processing",
    5: "Data Sharing",
    6: "Data Security",
    7: "Data Retention",
    8: "Cookies and Tracking",
    9: "International Transfers",
    10: "User Rights",
    11: "Third-Party Tools",
    12: "Contact Information",
  };

  return (
    <nav aria-label="Privacy Policy sections" className="flex flex-col gap-0.5">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
        <a
          key={n}
          href={`#section-${n}`}
          className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
            active === n
              ? "bg-accent/10 font-semibold text-accent dark:bg-accent/15 dark:text-accent-bright"
              : "text-fg-muted dark:text-fg-muted/45 hover:bg-fg/[0.04] hover:text-fg dark:hover:bg-white/[0.04]"
          }`}
        >
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-xs font-bold tabular-nums transition-colors ${
              active === n
                ? "border-accent/40 bg-accent/15 text-accent dark:text-accent-bright"
                : "border-borderline/15 text-fg-muted dark:text-fg-muted/40 dark:border-white/10"
            }`}
          >
            {String(n).padStart(2, "0")}
          </span>
          <span className="leading-snug">{labels[n]}</span>
        </a>
      ))}
    </nav>
  );
}

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    document.title = "Privacy Policy | RYSN Digital";
  }, []);

  useEffect(() => {
    const HEADER_OFFSET = 140;

    const updateActive = () => {
      const { scrollY, innerHeight } = window;
      const doc = document.documentElement;
      if (innerHeight + scrollY >= doc.scrollHeight - 100) {
        setActiveSection(12);
        return;
      }
      let current = 1;
      for (let i = 1; i <= 12; i++) {
        const el = document.getElementById(`section-${i}`);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= scrollY + HEADER_OFFSET) {
          current = i;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-canvas">
        <main className="border-t border-borderline/10 px-4 pb-20 pt-8 dark:border-white/[0.05] sm:px-6 sm:pt-10 lg:pb-28">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted dark:text-fg-muted/55 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <span aria-hidden>←</span>
              Back to Home
            </Link>

            <motion.header
              className="mt-8 max-w-4xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-fg-muted dark:text-fg-muted/40">Effective Date: 15 March 2026</p>
              <div className="mt-8 h-px w-full max-w-md bg-gradient-to-r from-accent/80 via-accent/40 to-transparent" />
            </motion.header>

            <div className="sticky top-[4.5rem] z-30 mt-10 -mx-4 border-y border-borderline/10 bg-canvas/90 px-4 py-3 backdrop-blur-xl dark:border-white/[0.06] dark:bg-canvas/85 lg:hidden">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-muted dark:text-fg-muted/35">Sections</p>
              <div className="flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <a
                    key={n}
                    href={`#section-${n}`}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold tabular-nums transition-colors ${
                      activeSection === n
                        ? "border-accent/50 bg-accent/15 text-accent dark:text-accent-bright"
                        : "border-borderline/15 text-fg-muted dark:text-fg-muted/50 hover:border-accent/30 hover:text-accent dark:border-white/10"
                    }`}
                  >
                    {n}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-14 lg:mt-14 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-16">
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted dark:text-fg-muted/30">
                    On this page
                  </p>
                  <PrivacySidebar active={activeSection} />
                </div>
              </aside>

              <div className="min-w-0 max-w-4xl">
                <AnimatedSection id="section-1" sectionNum={1} title="Introduction">
                  <p>{INTRO}</p>
                </AnimatedSection>

                {SECTIONS_2_TO_11.map((sec, idx) => (
                  <AnimatedSection
                    key={sec.title}
                    id={`section-${idx + 2}`}
                    sectionNum={idx + 2}
                    title={sec.title}
                  >
                    {sec.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </AnimatedSection>
                ))}

                <AnimatedSection id="section-12" sectionNum={12} title="Contact Information">
                  <p>For any questions or requests regarding this Privacy Policy, please contact:</p>
                  <address className="not-italic rounded-r-xl border-y border-r border-borderline/[0.1] border-l-2 border-l-accent/60 bg-accent/[0.03] py-5 pl-5 pr-5 text-sm leading-relaxed text-fg-secondary dark:text-fg-secondary/75 dark:border-r-white/[0.08] dark:border-y-white/[0.08] dark:border-l-accent/50 dark:bg-accent/[0.04] sm:text-base">
                    <span className="font-display font-bold text-fg">RYSN Digital Strategy Limited</span>
                    <br />
                    <span className="mt-3 block text-fg-secondary dark:text-fg-secondary/70">
                      Unit 1202, 12/F, 299QRC
                      <br />
                      287–299 Queen&apos;s Road Central
                      <br />
                      Sheung Wan, Hong Kong
                    </span>
                  </address>
                  <p className="pt-2">
                    By using this website, you acknowledge that you have read and agree to these Terms &amp;
                    Conditions and Privacy Policy.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
