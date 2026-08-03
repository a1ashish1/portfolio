export const PORTFOLIO_THEME_KEY = "ashish-portfolio-theme";

export type PortfolioTheme = "light" | "dark";

export function isPortfolioTheme(value: unknown): value is PortfolioTheme {
  return value === "light" || value === "dark";
}
