"use client";

import { motion, useInView } from "framer-motion";
import { EASE_OUT } from "@/lib/ease";
import { FormEvent, useRef, useState } from "react";

const formFieldClassName =
  "w-full rounded-xl border-[0.5px] border-inputborder bg-surface px-4 py-3.5 text-sm text-fg outline-none transition-[border-color,box-shadow] placeholder:text-fg-muted/85 focus:border-teal-700/30 focus:shadow-[0_0_0_2px_rgb(50_128_138/0.08)] dark:border-inputborder/10 dark:bg-canvas/85 dark:text-white dark:placeholder:text-white/30 dark:focus:border-accent/40 dark:focus:shadow-[0_0_0_2px_rgba(34,211,238,0.08)]";

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
    const subject = encodeURIComponent(`New website inquiry from ${name || "Unknown"}`);
    const body = encodeURIComponent(
      `Name: ${name}\r\nEmail: ${email}\r\n\r\nMessage:\r\n${message}`
    );
    const mailtoUrl = `mailto:info@rysndigital.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
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
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-teal-800/10 blur-[100px] dark:bg-accent/[0.08]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start xl:gap-14">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden />
              Contact
            </p>
            <h2 className="heading-section mt-6 text-balance">Let&apos;s Start the Conversation</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fg-secondary dark:text-fg-secondary/58 sm:text-lg">
              Whether you&apos;re launching a new venture, scaling a company, or
              exploring new markets — we&apos;re ready to help.
            </p>
            <a
              href="mailto:info@rysndigital.com"
              className="mt-10 inline-flex items-center gap-2 font-display text-2xl font-bold text-teal-900/72 transition-colors hover:text-teal-800 dark:text-accent-bright sm:text-3xl"
            >
              info@rysndigital.com
              <svg className="h-6 w-6 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-3xl border border-borderline/[0.1] bg-surface/85 p-6 shadow-card backdrop-blur-md dark:border-white/[0.08] dark:bg-surface/55 sm:p-7"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.55, ease: EASE_OUT }}
          >
            <div className="absolute left-0 top-10 bottom-10 w-1 rounded-full bg-gradient-to-b from-teal-600 via-teal-500 to-teal-600 opacity-75 dark:from-accent dark:via-cyan-300 dark:to-sky-500 dark:opacity-85" />
            <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-teal-800/10 blur-3xl dark:bg-accent/10" />
            <div className="relative pl-4 sm:pl-5">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-fg-secondary dark:text-fg-secondary/75">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className={formFieldClassName}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-fg-secondary dark:text-fg-secondary/75">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={formFieldClassName}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-fg-secondary dark:text-fg-secondary/75">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${formFieldClassName} resize-y`}
                    placeholder="Tell us about your goals…"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Submit
              </button>
              {status === "sent" && (
                <p className="mt-4 text-sm text-fg-muted dark:text-fg-muted/48">
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
