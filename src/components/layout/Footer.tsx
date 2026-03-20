"use client";

import { siteConfig } from "@/data/content";
import { Github, Linkedin, Code2, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
  },
  {
    label: "LeetCode",
    href: siteConfig.social.leetcode,
    icon: Code2,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1 text-sm text-muted">
            <span className="font-mono">
              &lt;/&gt;
            </span>
            <span className="mx-2 text-border">·</span>
            <span>
              Built by{" "}
              <span className="text-zinc-300">{siteConfig.name}</span>
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
                className="w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/20 transition-all duration-200"
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
