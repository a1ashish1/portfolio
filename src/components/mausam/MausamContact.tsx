"use client";

import { mausamSiteConfig } from "@/data/mausamContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Linkedin, ExternalLink, Phone, MapPin } from "lucide-react";

export function MausamContact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-15 mask-fade-y pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading
          label="// contact"
          title="Let's Connect"
          description="Open to Supply Chain Management, Technical Program Management, and Production/Demand Planning roles."
          accentClassName="text-sky-400"
        />

        <ScrollReveal>
          <div className="max-w-xl space-y-4 mb-8">
            <a
              href={`mailto:${mausamSiteConfig.email}`}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-sky-400/30 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center group-hover:bg-sky-400/20 transition-colors">
                <Mail className="w-5 h-5 text-sky-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted font-mono mb-0.5">Email</p>
                <p className="text-zinc-200 group-hover:text-sky-300 transition-colors truncate">
                  {mausamSiteConfig.email}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-sky-400 transition-colors flex-shrink-0" />
            </a>

            <a
              href={`tel:${mausamSiteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-sky-400/30 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center group-hover:bg-sky-400/20 transition-colors">
                <Phone className="w-5 h-5 text-sky-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted font-mono mb-0.5">Phone</p>
                <p className="text-zinc-200 group-hover:text-sky-300 transition-colors">
                  {mausamSiteConfig.phone}
                </p>
              </div>
            </a>

            <a
              href={mausamSiteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-sky-400/30 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center group-hover:bg-sky-400/20 transition-colors">
                <Linkedin className="w-5 h-5 text-sky-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted font-mono mb-0.5">LinkedIn</p>
                <p className="text-zinc-200 group-hover:text-sky-300 transition-colors truncate">
                  linkedin.com/in/mausam-sinha-iitkgp
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-sky-400 transition-colors flex-shrink-0" />
            </a>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted font-mono mb-0.5">Location</p>
                <p className="text-zinc-200">{mausamSiteConfig.location}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${mausamSiteConfig.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-400 text-background font-medium rounded-lg hover:bg-sky-300 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </a>
            <a
              href={mausamSiteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-zinc-300 font-medium rounded-lg hover:border-sky-400/50 hover:text-sky-400 transition-colors duration-200"
            >
              View LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
