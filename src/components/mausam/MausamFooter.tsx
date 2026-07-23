"use client";

import { mausamSiteConfig } from "@/data/mausamContent";
import { Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: mausamSiteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${mausamSiteConfig.email}`,
    icon: Mail,
  },
];

export function MausamFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1 text-sm text-muted">
            <span className="font-mono">&lt;/&gt;</span>
            <span className="mx-2 text-border">·</span>
            <span>
              Built for{" "}
              <span className="text-zinc-300">{mausamSiteConfig.name}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-sky-400 hover:bg-sky-400/10 border border-transparent hover:border-sky-400/20 transition-all duration-200"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
