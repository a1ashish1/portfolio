"use client";

import { type Language } from "@/data/bioDataContent";

interface LanguageToggleProps {
  lang: Language;
  onToggle: () => void;
}

export function LanguageToggle({ lang, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 flex items-center rounded-full border border-bio-gold-light/50 bg-bio-cream/95 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden print:hidden"
      aria-label={`Switch to ${lang === "en" ? "Hindi" : "English"}`}
    >
      <span
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-full ${
          lang === "en"
            ? "bg-bio-gold text-white"
            : "text-bio-brown-light hover:text-bio-brown"
        }`}
      >
        EN
      </span>
      <span
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-full ${
          lang === "hi"
            ? "bg-bio-gold text-white"
            : "text-bio-brown-light hover:text-bio-brown"
        }`}
      >
        हिं
      </span>
    </button>
  );
}
