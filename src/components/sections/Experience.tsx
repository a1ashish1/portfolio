"use client";

import { experienceData } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="// experience"
          title="Where I've Worked"
          description="Building systems that scale across enterprise products and platforms."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative flex gap-6 md:gap-10">
                  <div className="hidden md:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-card border border-border z-10">
                    <Briefcase className="w-4 h-4 text-accent" />
                  </div>

                  <div className="flex-1 bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent/20 transition-colors duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-zinc-100 group-hover:text-accent-light transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-accent font-medium">
                          {item.company}
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
                          <span className="text-accent mt-1.5 flex-shrink-0">
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
                          className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20"
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
