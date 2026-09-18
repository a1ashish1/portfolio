"use client";

import { motion } from "framer-motion";

/**
 * Soap foam, because Fabric Care.
 * Integer-only PRNG (no Math.sin) so server and client produce bit-identical
 * values — float math drifts between engines and trips hydration.
 */
function pseudo(seed: number, salt: number) {
  let t = (seed * 2654435761 + salt * 40503 + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const round = (n: number) => Math.round(n * 100) / 100;

const BUBBLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  size: round(14 + pseudo(i, 1) * 66),
  left: round(pseudo(i, 2) * 100),
  delay: round(pseudo(i, 3) * 12),
  duration: round(13 + pseudo(i, 4) * 14),
  drift: round((pseudo(i, 5) - 0.5) * 120),
  opacity: round(0.12 + pseudo(i, 6) * 0.3),
}));

export function BubbleField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {BUBBLES.map((b) => (
        <motion.span
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            background:
              "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95), rgba(186,230,253,0.45) 42%, rgba(56,189,248,0.12) 70%, transparent 72%)",
            boxShadow: "inset 0 0 12px rgba(255,255,255,0.5)",
            opacity: b.opacity,
          }}
          initial={{ y: "110vh", x: 0 }}
          animate={{ y: "-20vh", x: b.drift }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
