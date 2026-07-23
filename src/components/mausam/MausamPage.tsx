"use client";

import { MausamNavbar } from "@/components/mausam/MausamNavbar";
import { MausamFooter } from "@/components/mausam/MausamFooter";
import { MausamHero } from "@/components/mausam/MausamHero";
import { MausamAbout } from "@/components/mausam/MausamAbout";
import { MausamExperience } from "@/components/mausam/MausamExperience";
import { MausamEducation } from "@/components/mausam/MausamEducation";
import { MausamProjects } from "@/components/mausam/MausamProjects";
import { MausamSkills } from "@/components/mausam/MausamSkills";
import { MausamAchievements } from "@/components/mausam/MausamAchievements";
import { MausamContact } from "@/components/mausam/MausamContact";

export function MausamPage() {
  return (
    <div className="mausam-theme">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sky-400/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/[0.06] rounded-full blur-[100px]" />
      </div>
      <MausamNavbar />
      <main>
        <MausamHero />
        <MausamAbout />
        <MausamExperience />
        <MausamEducation />
        <MausamProjects />
        <MausamSkills />
        <MausamAchievements />
        <MausamContact />
      </main>
      <MausamFooter />
    </div>
  );
}
