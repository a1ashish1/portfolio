"use client";

import { mausamAboutData, mausamSiteConfig } from "@/data/mausamContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin } from "lucide-react";

export function MausamAbout() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="// about"
          title="Who I Am"
          accentClassName="text-sky-400"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3 space-y-5">
            <ScrollReveal>
              <div className="mb-2">
                <p className="text-zinc-100 font-semibold text-lg">
                  {mausamSiteConfig.name}
                </p>
                <p className="text-sky-400 text-sm font-medium">
                  {mausamSiteConfig.title} · Procter & Gamble
                </p>
                <p className="flex items-center gap-1.5 text-muted text-xs font-mono mt-1">
                  <MapPin className="w-3 h-3" />
                  {mausamSiteConfig.location}
                </p>
              </div>
            </ScrollReveal>

            {mausamAboutData.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {mausamAboutData.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-5 text-center hover:border-sky-400/30 transition-colors duration-300"
                  >
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-muted text-xs md:text-sm font-mono">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
