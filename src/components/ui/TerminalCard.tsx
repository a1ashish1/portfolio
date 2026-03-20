"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TerminalCardProps {
  command: string;
  output: string;
}

export function TerminalCard({ command, output }: TerminalCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < command.length) {
          setDisplayedCommand(command.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowOutput(true), 300);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInView, command, started]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-md"
    >
      <div className="rounded-lg border border-border bg-[#0c0c0e] overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#111113] border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted font-mono">terminal</span>
        </div>
        <div className="p-4 font-mono text-sm leading-relaxed">
          <div className="flex items-center gap-2">
            <span className="text-accent">~</span>
            <span className="text-muted">$</span>
            <span className="text-zinc-300">{displayedCommand}</span>
            {!showOutput && (
              <span className="w-2 h-4 bg-accent animate-blink inline-block" />
            )}
          </div>
          {showOutput && (
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-3 text-zinc-400 whitespace-pre text-xs sm:text-sm overflow-x-auto"
            >
              {output}
            </motion.pre>
          )}
        </div>
      </div>
    </motion.div>
  );
}
