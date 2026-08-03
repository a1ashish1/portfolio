import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--pf-background, #09090b)",
        surface: "var(--pf-surface, #111113)",
        card: "var(--pf-card, #18181b)",
        border: "var(--pf-border, #27272a)",
        "border-light": "var(--pf-border-light, #3f3f46)",
        foreground: "var(--pf-foreground, #fafafa)",
        "foreground-secondary": "var(--pf-foreground-secondary, #d4d4d8)",
        "foreground-tertiary": "var(--pf-foreground-tertiary, #a1a1aa)",
        "accent-foreground": "var(--pf-accent-foreground, #052e16)",
        accent: {
          DEFAULT:
            "rgb(var(--pf-accent-rgb, 16 185 129) / <alpha-value>)",
          light:
            "rgb(var(--pf-accent-light-rgb, 52 211 153) / <alpha-value>)",
          dark:
            "rgb(var(--pf-accent-dark-rgb, 5 150 105) / <alpha-value>)",
          glow: "rgba(16, 185, 129, 0.15)",
        },
        muted: "var(--pf-muted, #a1a1aa)",
        bio: {
          cream: "#FDF8F0",
          card: "#FFFDF7",
          gold: "#996515",
          "gold-light": "#D4AF37",
          "gold-muted": "#E8D5B7",
          maroon: "#800020",
          brown: "#3D2B1F",
          "brown-light": "#6B5B4E",
          saffron: "#FF9933",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        bio: ["Inter", "Noto Sans Devanagari", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
