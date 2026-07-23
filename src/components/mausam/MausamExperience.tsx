"use client";

import { mausamExperienceData } from "@/data/mausamContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Briefcase } from "lucide-react";

export function MausamExperience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="// experience"
          title="Where I've Worked"
          description="Driving plant performance, global pilots, and data-backed planning across supply chain and R&D."
          accentClassName="text-sky-400"
        />

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/50 via-border to-transparent hidden md:block" />

          <div className="space-y-12">
            {mausamExperienceData.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative flex gap-6 md:gap-10">
                  <div className="hidden md:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-card border border-border z-10">
                    <Briefcase className="w-4 h-4 text-sky-400" />
                  </div>

                  <div className="flex-1 bg-card border border-border rounded-xl p-6 md:p-8 hover:border-sky-400/20 transition-colors duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-zinc-100 group-hover:text-sky-300 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-sky-400 font-medium">
                          {item.company}
                        </p>
                        <p className="text-muted text-sm mt-0.5">
                          {item.location}
                        </p>
                      </div>
                      <p className="font-mono text-sm text-muted whitespace-nowrap">
                        {item.duration}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-5">
                      {item.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-zinc-400 text-sm md:text-base leading-relaxed"
                        >
                          <span className="text-sky-400 mt-1.5 flex-shrink-0">
                            ▹
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono text-sky-400 bg-sky-400/10 rounded-full border border-sky-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
