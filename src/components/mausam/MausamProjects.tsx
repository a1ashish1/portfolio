"use client";

import { mausamProjectsData } from "@/data/mausamContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FlaskConical } from "lucide-react";

export function MausamProjects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="// projects"
          title="Research & Projects"
          description="Thesis work and computational projects spanning electrochemistry, CFD, and process simulation."
          accentClassName="text-sky-400"
        />

        <div className="grid md:grid-cols-2 gap-5">
          {mausamProjectsData.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-sky-400/20 transition-colors duration-300 group flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-zinc-100 group-hover:text-sky-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sky-400 text-sm mt-1">{project.org}</p>
                    <p className="font-mono text-xs text-muted mt-0.5">
                      {project.duration}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-zinc-400 text-sm leading-relaxed"
                    >
                      <span className="text-sky-400 mt-1 flex-shrink-0">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-sky-400 bg-sky-400/10 rounded-md border border-sky-400/20"
                    >
                      {tech}
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
