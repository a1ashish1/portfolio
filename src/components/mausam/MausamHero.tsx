"use client";

import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { mausamHeroData } from "@/data/mausamContent";
import { TerminalCard } from "@/components/ui/TerminalCard";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function MausamHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 mask-fade-b pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container w-full py-20 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-sky-400 text-sm md:text-base mb-4 tracking-wide"
            >
              {mausamHeroData.greeting}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-50 mb-4 tracking-tight"
            >
              {mausamHeroData.name}
              <span className="text-sky-400">.</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-400 mb-2"
            >
              {mausamHeroData.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-mono text-xs sm:text-sm text-sky-400/80 mb-6 tracking-wide"
            >
              {mausamHeroData.subtitle}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-8"
            >
              {mausamHeroData.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href={mausamHeroData.cta.primary.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-400 text-background font-medium rounded-lg hover:bg-sky-300 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                {mausamHeroData.cta.primary.label}
              </a>
              <a
                href={mausamHeroData.cta.secondary.href}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-zinc-300 font-medium rounded-lg hover:border-sky-400/50 hover:text-sky-400 transition-colors duration-200"
              >
                <Briefcase className="w-4 h-4" />
                {mausamHeroData.cta.secondary.label}
              </a>
            </motion.div>
          </motion.div>

          <div className="flex-shrink-0 hidden lg:block">
            <TerminalCard
              command={mausamHeroData.terminal.command}
              output={mausamHeroData.terminal.output}
              accentClassName="text-sky-400"
              cursorClassName="bg-sky-400"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted hover:text-sky-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
