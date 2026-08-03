"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioTheme } from "@/components/theme/PortfolioThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = usePortfolioTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/70 text-muted transition-colors duration-200 hover:border-accent/35 hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.18 }}
      >
        {isDark ? (
          <Sun className="h-4 w-4" aria-hidden />
        ) : (
          <Moon className="h-4 w-4" aria-hidden />
        )}
      </motion.span>
    </motion.button>
  );
}
