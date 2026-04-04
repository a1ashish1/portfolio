"use client";

import { useState } from "react";
import { bioDataContent, type Language } from "@/data/bioDataContent";
import { LanguageToggle } from "./LanguageToggle";
import { OrnamentalDivider } from "./OrnamentalDivider";
import { BioDataSection } from "./BioDataSection";
import { PhotoGallery } from "./PhotoGallery";
import { Mail, Phone } from "lucide-react";

export function BioDataPage() {
  const [lang, setLang] = useState<Language>("en");
  const content = bioDataContent[lang];

  const toggleLang = () => setLang((prev) => (prev === "en" ? "hi" : "en"));

  return (
    <div className="min-h-screen bg-bio-cream font-bio antialiased">
      <LanguageToggle lang={lang} onToggle={toggleLang} />

      <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">
        {/* Page Card */}
        <div className="bg-bio-card border border-bio-gold-muted shadow-[0_2px_24px_rgba(180,134,11,0.06)] px-5 sm:px-10 md:px-14 py-8 sm:py-12 md:py-14">
          {/* Header */}
          <header className="text-center mb-8 sm:mb-10 pt-4 sm:pt-0">
            <p className="text-bio-gold font-serif text-sm sm:text-base tracking-[0.2em] mb-3">
              {content.header.blessing}
            </p>

            <OrnamentalDivider className="my-3 sm:my-4" />

            <p className="font-serif text-lg sm:text-xl text-bio-brown-light tracking-wider mb-1">
              {content.header.title}
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-bio-maroon tracking-wide leading-tight">
              {content.header.name}
            </h1>

            <OrnamentalDivider className="my-3 sm:my-4" />
          </header>

          {/* Sections */}
          <div className="space-y-1">
            {content.sections.map((section, index) => (
              <div key={section.id}>
                <BioDataSection section={section} />
                {index < content.sections.length - 1 && <OrnamentalDivider />}
              </div>
            ))}
          </div>

          {/* Photo Gallery */}
          <OrnamentalDivider />
          <PhotoGallery title={content.gallery.title} />

          {/* Contact Section */}
          <OrnamentalDivider />
          <div className="mb-4">
            <h2 className="font-serif text-xl md:text-2xl text-bio-maroon mb-5 sm:mb-6 text-center tracking-wide">
              {content.contact.title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
              <a
                href={`tel:${content.contact.phone.value.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-bio-brown hover:text-bio-maroon transition-colors group"
              >
                <Phone className="w-4 h-4 text-bio-gold group-hover:text-bio-maroon transition-colors" />
                <span>
                  <span className="text-bio-brown-light text-xs block leading-none mb-0.5">
                    {content.contact.phone.label}
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    {content.contact.phone.value}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${content.contact.email.value}`}
                className="flex items-center gap-2.5 text-bio-brown hover:text-bio-maroon transition-colors group"
              >
                <Mail className="w-4 h-4 text-bio-gold group-hover:text-bio-maroon transition-colors" />
                <span>
                  <span className="text-bio-brown-light text-xs block leading-none mb-0.5">
                    {content.contact.email.label}
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    {content.contact.email.value}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Footer Blessing */}
          <OrnamentalDivider />
          <footer className="text-center pb-2">
            <p className="text-bio-gold font-serif text-sm sm:text-base tracking-[0.2em]">
              {content.header.closingBlessing}
            </p>
          </footer>
        </div>

        {/* Back to Portfolio */}
        <div className="text-center mt-5 sm:mt-6 print:hidden">
          <a
            href="/"
            className="text-bio-brown-light text-sm hover:text-bio-maroon transition-colors duration-300 inline-flex items-center gap-1.5"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
