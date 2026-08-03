"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  isPortfolioTheme,
  PORTFOLIO_THEME_KEY,
  type PortfolioTheme,
} from "@/lib/portfolio-theme";

interface ThemeContextValue {
  theme: PortfolioTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function PortfolioThemeProvider({ children }: { children: ReactNode }) {
  // Keep the server and first client render identical; the pre-paint script
  // already applies the saved colors before React hydrates.
  const [theme, setTheme] = useState<PortfolioTheme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const applied = document.documentElement.dataset.portfolioTheme;
    if (isPortfolioTheme(applied)) setTheme(applied);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.portfolioTheme = theme;
    try {
      localStorage.setItem(PORTFOLIO_THEME_KEY, theme);
    } catch {
      // The selected theme still works when storage is unavailable.
    }
  }, [ready, theme]);

  useEffect(
    () => () => {
      document.documentElement.removeAttribute("data-portfolio-theme");
    },
    []
  );

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className="portfolio-theme min-h-screen bg-background text-foreground">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function usePortfolioTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "usePortfolioTheme must be used inside PortfolioThemeProvider"
    );
  }
  return context;
}
