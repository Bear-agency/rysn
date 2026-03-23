"use client";

import { SmoothAnchorScroll } from "@/components/SmoothAnchorScroll";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SmoothAnchorScroll />
      {children}
    </ThemeProvider>
  );
}
