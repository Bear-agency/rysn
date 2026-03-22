import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://rysndigital.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RYSN Digital | From Leads to Growth",
    template: "%s | RYSN Digital",
  },
  description:
    "RYSN Digital combines lead generation, digital marketing, AI automation, and strategic consulting — a one-stop shop to help your business grow faster, smarter, and more efficiently.",
  keywords: [
    "digital marketing agency",
    "lead generation",
    "AI automation",
    "media buying",
    "Google Ads",
    "Meta ads",
    "marketing consulting",
    "RYSN Digital",
  ],
  authors: [{ name: "RYSN Digital" }],
  creator: "RYSN Digital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "RYSN Digital",
    title: "RYSN Digital | From Leads to Growth",
    description:
      "Lead generation, digital marketing, AI automation, and strategic consulting — built as systems that scale your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RYSN Digital | From Leads to Growth",
    description:
      "Lead generation, digital marketing, AI automation, and strategic consulting for ambitious brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} min-h-screen font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
