"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
}

export function GlowCard({ children, className, glowClassName }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative group h-full"
    >
      <div
        className={cn(
          "absolute -inset-[1px] rounded-xl bg-gradient-to-r from-accent/20 via-emerald-400/10 to-accent/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500",
          glowClassName
        )}
      />
      <div
        className={cn(
          "relative bg-card border border-border rounded-xl p-6 transition-colors duration-300 group-hover:border-accent/30",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
