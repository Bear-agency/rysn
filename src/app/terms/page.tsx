"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { EASE_OUT } from "@/lib/ease";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const INTRO = `These Terms & Conditions ("Terms") govern your use of this website operated by RYSN Digital Strategy Limited ("Company", "we", "us", or "our"). By accessing or using this website, you confirm that you have read, understood, and agree to comply with these Terms in full. If you do not agree with any part of these Terms, you must not use this website. These Terms apply to all visitors, users, and clients interacting with our services. We recommend reviewing this page periodically to stay informed of any updates.`;

const SCOPE_INTRO = `At RYSN Digital Strategy Limited, we provide integrated business-to-business (B2B) growth services designed to help companies scale efficiently.`;

const SCOPE_CLOSING = `All services are provided subject to separate agreements, proposals, or statements of work, which define specific deliverables, timelines, and commercial terms.`;

const SUBSECTIONS_1 = [
  {
    id: "1a",
    title: "Lead Generation & Digital Marketing",
    body: `We design and manage marketing systems that generate consistent, high-quality leads. Our services include lead generation strategies, media buying, and advertising management across platforms such as Google Ads, Meta (Facebook & Instagram), and TikTok. We also provide affiliate marketing programs, social media management, and full marketing operations support. Additionally, we develop and optimize marketing funnels to improve conversion rates. Our focus is on building systems that deliver real clients, not just traffic.`,
  },
  {
    id: "1b",
    title: "AI Automation",
    body: `We assist businesses in integrating AI into their marketing, sales, and operational processes. Our services include the development of AI sales agents, AI-powered marketing campaigns, and intelligent lead management systems. We also implement chatbots, automated workflows, and follow-up systems to improve efficiency and response times. AI is used to generate content, analyze campaign performance, and optimize decision-making. Our goal is to apply AI in a way that creates measurable business value.`,
  },
  {
    id: "1c",
    title: "Business Development & Strategic Consulting",
    body: `We provide strategic support to help businesses grow beyond marketing execution. This includes business development consulting, sales strategy creation, and brand positioning. We assist clients with online expansion, development of physical commercial activities, and entry into new markets. Our services also include partner sourcing, introductions, and the development of sales and distribution structures. We work with startups, growing businesses, and established companies seeking structured and scalable growth.`,
  },
] as const;

const SECTIONS = [
  {
    title: "Eligibility and Use",
    body: `By using this website, you confirm that you are at least 18 years old or accessing the website under the supervision of a legal entity. You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others. Unauthorized use, including attempts to gain access to restricted systems or data, is strictly prohibited. You must not misuse the website by knowingly introducing malicious software or harmful material. Any breach of these rules may result in termination of access and potential legal action.`,
  },
  {
    title: "Intellectual Property Rights",
    body: `All content on this website, including text, graphics, logos, design, and software, is owned or licensed by RYSN Digital Strategy Limited. These materials are protected by intellectual property laws and international treaties. You may not copy, reproduce, distribute, or exploit any content without prior written consent. Limited use is permitted for personal or internal business reference only. Any unauthorized use may result in legal claims and damages.`,
  },
  {
    title: "Client Responsibilities",
    body: `Clients engaging with our services are responsible for providing accurate and complete information necessary for project execution. Delays or issues caused by incomplete or incorrect information are not the responsibility of the Company. Clients must ensure that their business activities comply with all applicable laws and regulations. We reserve the right to refuse or terminate services if a client is involved in unlawful or unethical practices. Cooperation and timely communication are essential for successful service delivery.`,
  },
  {
    title: "Payments and Fees",
    body: `All fees for services are agreed upon in advance and documented in separate agreements or invoices. Payments must be made in accordance with the agreed terms and timelines. Late payments may result in suspension of services or additional charges. All fees are non-refundable unless otherwise stated in writing. The Company reserves the right to revise pricing for future services at its discretion. Currency, taxes, and transfer costs are the responsibility of the client unless agreed otherwise.`,
  },
  {
    title: "No Guarantee of Results",
    body: `Marketing outcomes depend on various external factors beyond our control, including market conditions, competition, and customer behavior. While we apply professional expertise and best practices, we do not guarantee specific results such as revenue growth, lead volume, or conversion rates. Any projections or estimates provided are for informational purposes only. Clients acknowledge that marketing performance involves inherent risks. We are not liable for unmet expectations or business outcomes.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, the Company shall not be liable for any indirect, incidental, or consequential damages. This includes loss of profits, business interruption, or reputational damage. Our total liability, if any, is limited to the amount paid for the services in question. We do not accept responsibility for issues arising from third-party platforms, tools, or services used in marketing campaigns. Use of the website and services is at your own risk.`,
  },
  {
    title: "Third-Party Services and Links",
    body: `Our website may contain links to third-party websites or services for convenience and informational purposes. We do not control or endorse the content, policies, or practices of these third parties. Any interaction with third-party services is solely between you and the respective provider. We are not responsible for any loss or damage resulting from such interactions. Users are encouraged to review third-party terms independently.`,
  },
  {
    title: "Confidentiality",
    body: `We respect the confidentiality of all client information and business data shared with us. Any confidential information will be used solely for the purpose of delivering agreed services. We implement reasonable safeguards to protect such information from unauthorized access. Clients are also expected to maintain confidentiality regarding proprietary methods or materials provided by us. Confidentiality obligations remain in effect even after termination of services.`,
  },
  {
    title: "Termination",
    body: `We reserve the right to terminate or suspend access to the website or services at any time without prior notice. This may occur in cases of breach of Terms, non-payment, or unlawful activity. Upon termination, any outstanding obligations, including payments, remain enforceable. Certain provisions of these Terms, such as liability and confidentiality, will survive termination. Clients may also terminate services according to contractual agreements.`,
  },
  {
    title: "Governing Law",
    body: `These Terms shall be governed by and interpreted in accordance with the laws of Hong Kong. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of Hong Kong courts. By using this website, you agree to submit to this jurisdiction. This ensures legal clarity and consistency in resolving disputes.`,
  },
  {
    title: "Amendments",
    body: `We reserve the right to update or modify these Terms at any time without prior notice. Changes become effective immediately upon publication on the website. Continued use of the website constitutes acceptance of the updated Terms. Users are responsible for reviewing this page periodically. If you do not agree with the revised Terms, you must discontinue use of the website.`,
  },
] as const;

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

function SubsectionBlock({ id, label, title, body }: { id: string; label: string; title: string; body: string }) {
  return (
    <div
      id={`subsection-${id}`}
      className="rounded-r-xl border-l-2 border-accent/50 bg-accent/[0.03] py-4 pl-5 pr-4 dark:border-accent/40 dark:bg-accent/[0.04]"
    >
      <h3 className="font-display text-sm font-bold text-fg sm:text-base">
        {label}. {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-fg-secondary dark:text-fg-secondary/70 sm:text-[0.9375rem]">{body}</p>
    </div>
  );
}

function TermsSidebar({ active }: { active: number }) {
  return (
    <nav aria-label="Terms sections" className="flex flex-col gap-0.5">
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
          <span className="leading-snug">
            {n === 1 && "Scope of Services"}
            {n === 2 && "Eligibility and Use"}
            {n === 3 && "Intellectual Property"}
            {n === 4 && "Client Responsibilities"}
            {n === 5 && "Payments and Fees"}
            {n === 6 && "No Guarantee of Results"}
            {n === 7 && "Limitation of Liability"}
            {n === 8 && "Third-Party Services"}
            {n === 9 && "Confidentiality"}
            {n === 10 && "Termination"}
            {n === 11 && "Governing Law"}
            {n === 12 && "Amendments"}
          </span>
        </a>
      ))}
    </nav>
  );
}

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    document.title = "Terms and Conditions | RYSN Digital";
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
                Terms & Conditions
              </h1>
              <p className="mt-3 text-sm text-fg-muted dark:text-fg-muted/40">Effective Date: 15 March 2026</p>
              <div className="mt-8 h-px w-full max-w-md bg-gradient-to-r from-accent/80 via-accent/40 to-transparent" />
            </motion.header>

            <motion.p
              className="mt-10 max-w-4xl text-sm leading-relaxed text-fg-secondary dark:text-fg-secondary/70 sm:text-base sm:leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
            >
              {INTRO}
            </motion.p>

            {/* Mobile: horizontal section index */}
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
              {/* Desktop sticky TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted dark:text-fg-muted/30">
                    On this page
                  </p>
                  <TermsSidebar active={activeSection} />
                </div>
              </aside>

              <div className="min-w-0 max-w-4xl">
                <AnimatedSection id="section-1" sectionNum={1} title="Scope of Services">
                  <p>{SCOPE_INTRO}</p>
                  <div className="space-y-5 pt-2">
                    {SUBSECTIONS_1.map((sub) => (
                      <SubsectionBlock
                        key={sub.id}
                        id={sub.id}
                        label={sub.id}
                        title={sub.title}
                        body={sub.body}
                      />
                    ))}
                  </div>
                  <p className="border-t border-borderline/10 pt-6 text-fg-secondary dark:text-fg-secondary/75 dark:border-white/[0.06]">
                    {SCOPE_CLOSING}
                  </p>
                </AnimatedSection>

                {SECTIONS.map((sec, idx) => (
                  <AnimatedSection
                    key={sec.title}
                    id={`section-${idx + 2}`}
                    sectionNum={idx + 2}
                    title={sec.title}
                  >
                    <p>{sec.body}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
