"use client";

import { siteConfig } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-15 mask-fade-y pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading
          label="// contact"
          title="Let's Connect"
          description="I'm open to discussing new opportunities, interesting backend challenges, or just talking tech."
        />

        <ScrollReveal>
          <div className="max-w-xl">
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted font-mono mb-0.5">Email</p>
                  <p className="text-zinc-200 group-hover:text-accent-light transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted font-mono mb-0.5">
                    LinkedIn
                  </p>
                  <p className="text-zinc-200 group-hover:text-accent-light transition-colors">
                    linkedin.com/in/a1ashish1
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-light transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Say Hello
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-zinc-300 font-medium rounded-lg hover:border-accent/50 hover:text-accent transition-colors duration-200"
              >
                View Resume
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
