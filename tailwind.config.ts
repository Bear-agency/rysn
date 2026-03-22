import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--rgb-canvas) / <alpha-value>)",
        surface: "rgb(var(--rgb-surface) / <alpha-value>)",
        elevated: "rgb(var(--rgb-elevated) / <alpha-value>)",
        fg: "rgb(var(--rgb-fg) / <alpha-value>)",
        borderline: "rgb(var(--rgb-borderline) / <alpha-value>)",
        accent: "#22D3EE",
        "accent-bright": "#E8F4FF",
        "on-accent": "#0A0A0F",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(34, 211, 238, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.06) 1px, transparent 1px)",
        "gradient-radial-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgb(var(--rgb-accent-glow) / 0.45), transparent 65%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        "glow-sm": "var(--shadow-glow-sm)",
        "inner-glow": "var(--shadow-inner)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        ring: "var(--shadow-ring)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "grid-drift": "grid-drift 24s linear infinite",
      },
      keyframes: {
        "grid-drift": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(48px, 48px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
