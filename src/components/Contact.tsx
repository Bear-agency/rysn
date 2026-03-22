"use client";

import { motion, useInView } from "framer-motion";
import { EASE_OUT } from "@/lib/ease";
import { FormEvent, useRef, useState } from "react";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent("Contact from rysndigital.com");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:info@rysndigital.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 56 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      className="relative overflow-hidden border-t border-borderline/10 bg-gradient-to-b from-canvas to-elevated/40 py-24 dark:from-canvas dark:to-surface/30 dark:border-white/[0.05] sm:py-32"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-accent/[0.06] blur-[100px] dark:bg-accent/[0.08]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden />
              Contact
            </p>
            <h2 className="heading-section mt-6 text-balance">Let&apos;s Start the Conversation</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fg/58 sm:text-lg">
              Whether you&apos;re launching a new venture, scaling a company, or
              exploring new markets — we&apos;re ready to help.
            </p>
            <a
              href="mailto:info@rysndigital.com"
              className="mt-10 inline-flex items-center gap-2 font-display text-2xl font-bold text-cyan-700 transition-colors hover:text-accent dark:text-accent-bright sm:text-3xl"
            >
              info@rysndigital.com
              <svg className="h-6 w-6 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-3xl border border-borderline/[0.1] bg-surface/85 p-7 shadow-card backdrop-blur-md dark:border-white/[0.08] dark:bg-surface/55 sm:p-9"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.55, ease: EASE_OUT }}
          >
            <div className="absolute left-0 top-10 bottom-10 w-1 rounded-full bg-gradient-to-b from-accent via-cyan-400 to-sky-500 opacity-90 dark:from-accent dark:via-cyan-300" />
            <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative pl-5 sm:pl-6">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg/75">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-borderline/12 bg-elevated/95 px-4 py-3.5 text-sm text-fg outline-none transition-[border-color,box-shadow] placeholder:text-fg/32 focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-canvas/85 dark:text-white dark:placeholder:text-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg/75">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-borderline/12 bg-elevated/95 px-4 py-3.5 text-sm text-fg outline-none transition-[border-color,box-shadow] placeholder:text-fg/32 focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-canvas/85 dark:text-white dark:placeholder:text-white/30"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg/75">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-xl border border-borderline/12 bg-elevated/95 px-4 py-3.5 text-sm text-fg outline-none transition-[border-color,box-shadow] placeholder:text-fg/32 focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-canvas/85 dark:text-white dark:placeholder:text-white/30"
                    placeholder="Tell us about your goals…"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                Submit
              </button>
              {status === "sent" && (
                <p className="mt-4 text-sm text-fg/48">
                  If your mail app didn&apos;t open, email us directly at{" "}
                  <a href="mailto:info@rysndigital.com" className="text-accent underline-offset-2 hover:underline">
                    info@rysndigital.com
                  </a>
                  .
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
