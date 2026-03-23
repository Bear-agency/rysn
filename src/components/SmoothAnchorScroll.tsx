"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const STORAGE_KEY = "rysn-scroll-to-section";

function hashFromHref(href: string): string | null {
  if (href.startsWith("/#")) {
    const rest = href.slice(2).split("?")[0];
    return rest || null;
  }
  if (href.startsWith("#")) {
    return href.slice(1).split("?")[0] || null;
  }
  return null;
}

export function SmoothAnchorScroll() {
  const pathname = usePathname();
  const router = useRouter();
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduced ? "auto" : "smooth";

    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior, block: "start" });
      return true;
    };

    const onClickCapture = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as Element | null)?.closest("a");
      if (!anchor) return;

      const hrefAttr = anchor.getAttribute("href");
      if (!hrefAttr) return;
      if (anchor.getAttribute("target") === "_blank") return;
      if (hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) return;

      const id = hashFromHref(hrefAttr);
      if (!id) return;

      if (hrefAttr.startsWith("/#")) {
        if (pathnameRef.current === "/") {
          e.preventDefault();
          if (scrollToId(id)) {
            window.history.pushState(null, "", `/#${id}`);
          }
          return;
        }
        e.preventDefault();
        try {
          sessionStorage.setItem(STORAGE_KEY, id);
        } catch {
          /* private mode */
        }
        router.push("/");
        return;
      }

      if (hrefAttr.startsWith("#") && pathnameRef.current === "/") {
        e.preventDefault();
        if (scrollToId(id)) {
          window.history.pushState(null, "", `/#${id}`);
        }
      }
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, [router]);

  useEffect(() => {
    if (pathname !== "/") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduced ? "auto" : "smooth";

    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior, block: "start" });
      return true;
    };

    let stored: string | null = null;
    try {
      stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }

    const run = (id: string) => {
      const attempt = () => scrollToId(id);
      if (!attempt()) {
        requestAnimationFrame(() => {
          if (!attempt()) {
            window.setTimeout(attempt, 120);
          }
        });
      }
      window.history.replaceState(null, "", `/#${id}`);
    };

    if (stored) {
      const t = window.setTimeout(() => run(stored!), 80);
      return () => window.clearTimeout(t);
    }

    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (hash) {
      const t = window.setTimeout(() => {
        if (!scrollToId(hash)) {
          requestAnimationFrame(() => scrollToId(hash));
        }
      }, 80);
      return () => window.clearTimeout(t);
    }
  }, [pathname]);

  return null;
}
