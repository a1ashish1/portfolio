"use client";

import { achievementsData } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import {
  Trophy,
  Code2,
  Award,
  Medal,
  GraduationCap,
  Target,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  code: Code2,
  award: Award,
  medal: Medal,
  graduation: GraduationCap,
  target: Target,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="// achievements"
          title="Highlights"
          description="Milestones from competitive programming, academics, and beyond."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementsData.map((achievement, i) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <ScrollReveal key={i} delay={i * 0.08} className="h-full">
                <GlowCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
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
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
