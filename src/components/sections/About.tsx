"use client";

import { aboutData } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading label="// about" title="Who I Am" />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3 space-y-5">
            {aboutData.paragraphs.map((paragraph, i) => (
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
                {aboutData.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent/30 transition-colors duration-300"
                  >
                    <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">
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
