"use client";

import { skillsData } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="section-container relative">
        <SectionHeading
          label="// skills"
          title="Tech Stack"
          description="Technologies and tools I work with daily to build reliable, scalable systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((category, i) => (
            <ScrollReveal key={category.name} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-xl p-5 h-full hover:border-accent/20 transition-colors duration-300">
                <h3 className="font-mono text-accent text-sm font-medium mb-4 tracking-wide">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs text-zinc-400 bg-zinc-800/60 rounded-md border border-zinc-700/50 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
