"use client";

import { mausamAchievementsData } from "@/data/mausamContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  GraduationCap,
  Target,
  Globe2,
  BookOpen,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  award: Award,
  graduation: GraduationCap,
  target: Target,
  globe: Globe2,
  book: BookOpen,
  users: Users,
};

export function MausamAchievements() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="// highlights"
          title="Leadership & Achievements"
          description="Scholarships, publications, campus leadership, and plant-level impact."
          accentClassName="text-sky-400"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mausamAchievementsData.map((achievement, i) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <ScrollReveal key={i} delay={i * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative group h-full"
                >
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-400/20 via-cyan-400/10 to-sky-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                  <div
                    className={cn(
                      "relative bg-card border border-border rounded-xl p-6 h-full transition-colors duration-300 group-hover:border-sky-400/30"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-100 mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
