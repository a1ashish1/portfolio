"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LoveBackgroundProps {
  intensity?: "calm" | "wild";
}

// Subtle repeating heart pattern as inline SVG -> data URI
const HEART_PATTERN_URI = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'>
    <g fill='rgba(255,255,255,0.07)'>
      <path d='M30 46 L13 30 a9.5 9.5 0 0 1 13.4 -13.4 L30 20 l3.6 -3.4 A9.5 9.5 0 0 1 47 30 Z'/>
    </g>
  </svg>`
)}")`;

interface Drift {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  hue: number;
}

interface Pop {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  hue: number;
}

export function LoveBackground({ intensity = "calm" }: LoveBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const driftCount = intensity === "wild" ? 36 : 16;
  const popCount = intensity === "wild" ? 22 : 14;

  const drifters = useMemo<Drift[]>(
    () =>
      Array.from({ length: driftCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 26,
        duration: 7 + Math.random() * 11,
        delay: Math.random() * 9,
        drift: (Math.random() - 0.5) * 140,
        opacity: 0.35 + Math.random() * 0.5,
        hue: 330 + Math.random() * 30,
      })),
    [driftCount]
  );

  const pops = useMemo<Pop[]>(
    () =>
      Array.from({ length: popCount }).map((_, i) => ({
        id: i,
        left: 4 + Math.random() * 92,
        top: 4 + Math.random() * 92,
        size: 18 + Math.random() * 34,
        delay: Math.random() * 5,
        duration: 2.4 + Math.random() * 1.6,
        hue: 330 + Math.random() * 30,
      })),
    [popCount]
  );

  return (
    <>
      {/* Romantic gradient base */}
      <div
        className="fixed inset-0 -z-30"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #ffd0de 0%, #ff8fb1 22%, #ff4d7e 50%, #b3134e 78%, #3a0a22 100%)",
        }}
      />

      {/* Warm sun-glow from below */}
      <div
        className="fixed inset-0 -z-30 opacity-70 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 110%, rgba(255,210,160,0.55) 0%, rgba(255,210,160,0) 70%)",
        }}
      />

      {/* Subtle repeating heart wallpaper */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20 opacity-40 pointer-events-none"
        style={{
          backgroundImage: HEART_PATTERN_URI,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(120% 90% at 50% 30%, rgba(0,0,0,0.95), rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.15))",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 30%, rgba(0,0,0,0.95), rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.15))",
        }}
      />

      {/* Two big breathing hearts as ambient glow */}
      <motion.div
        aria-hidden
        className="fixed -z-20 pointer-events-none"
        style={{
          left: "-8%",
          top: "12%",
          filter: "blur(50px)",
          color: "rgba(255, 110, 160, 0.55)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={320} fill="currentColor" strokeWidth={0} />
      </motion.div>
      <motion.div
        aria-hidden
        className="fixed -z-20 pointer-events-none"
        style={{
          right: "-6%",
          bottom: "8%",
          filter: "blur(60px)",
          color: "rgba(255, 90, 130, 0.55)",
        }}
        animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={360} fill="currentColor" strokeWidth={0} />
      </motion.div>

      {/* Sparkle / grain overlay */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {!mounted ? null : (
        <>
          {/* Floating drift hearts (bottom -> top) */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
            {drifters.map((h) => (
              <motion.div
                key={`d-${h.id}`}
                initial={{ y: "110vh", x: 0, opacity: 0, rotate: -20 }}
                animate={{
                  y: "-15vh",
                  x: h.drift,
                  opacity: [0, h.opacity, h.opacity, 0],
                  rotate: 20,
                }}
                transition={{
                  duration: h.duration,
                  delay: h.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  left: `${h.left}%`,
                  color: `hsl(${h.hue}, 85%, 72%)`,
                  filter: "drop-shadow(0 0 12px rgba(255, 105, 180, 0.45))",
                }}
              >
                <Heart fill="currentColor" strokeWidth={0} size={h.size} />
              </motion.div>
            ))}
          </div>

          {/* "Popped" hearts that appear and fade out at random spots */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
            {pops.map((p) => (
              <motion.div
                key={`p-${p.id}`}
                initial={{ scale: 0, opacity: 0, rotate: -10 }}
                animate={{
                  scale: [0, 1.1, 0.95, 0],
                  opacity: [0, 0.95, 0.85, 0],
                  rotate: [-10, 0, 6, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  repeatDelay: 2.2 + Math.random() * 2.5,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  color: `hsl(${p.hue}, 92%, 78%)`,
                  filter:
                    "drop-shadow(0 0 16px rgba(255,140,180,0.7)) drop-shadow(0 0 4px rgba(255,255,255,0.45))",
                }}
              >
                <Heart fill="currentColor" strokeWidth={0} size={p.size} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
