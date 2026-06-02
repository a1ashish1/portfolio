"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface RunawayNoButtonProps {
  labels: string[];
  containerRef: React.RefObject<HTMLDivElement>;
  onDodge?: (index: number) => void;
}

export function RunawayNoButton({ labels, containerRef, onDodge }: RunawayNoButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [labelIdx, setLabelIdx] = useState(0);
  const [wiggle, setWiggle] = useState(0);
  const labelIdxRef = useRef(0);

  useEffect(() => {
    labelIdxRef.current = labelIdx;
  }, [labelIdx]);

  const label = labels[Math.min(labelIdx, labels.length - 1)];

  const dodge = (clientX?: number, clientY?: number) => {
    const btn = btnRef.current;
    const container = containerRef.current;
    if (!btn || !container) return;

    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();

    const padding = 10;
    const maxLeft = Math.max(padding, cRect.width - bRect.width - padding);
    const maxTop = Math.max(padding, cRect.height - bRect.height - padding);

    const currentLeft = bRect.left - cRect.left;
    const currentTop = bRect.top - cRect.top;

    let dirX = 0;
    let dirY = 0;
    if (clientX !== undefined && clientY !== undefined) {
      const relCx = clientX - cRect.left;
      const relCy = clientY - cRect.top;
      dirX = currentLeft + bRect.width / 2 - relCx;
      dirY = currentTop + bRect.height / 2 - relCy;
      const mag = Math.hypot(dirX, dirY) || 1;
      dirX /= mag;
      dirY /= mag;
    } else {
      const angle = Math.random() * Math.PI * 2;
      dirX = Math.cos(angle);
      dirY = Math.sin(angle);
    }

    const jump = 110 + Math.random() * 80;
    let nextLeft = currentLeft + dirX * jump;
    let nextTop = currentTop + dirY * jump;

    // If we'd land out of bounds, pick a fresh random in-bounds position.
    if (
      nextLeft < padding ||
      nextLeft > maxLeft ||
      nextTop < padding ||
      nextTop > maxTop
    ) {
      nextLeft = padding + Math.random() * Math.max(1, maxLeft - padding);
      nextTop = padding + Math.random() * Math.max(1, maxTop - padding);
    }

    // Translate from the initial top:padding / left:padding anchor.
    setOffset({ x: nextLeft - padding, y: nextTop - padding });
    setScale((s) => Math.max(0.55, s - 0.06));
    setWiggle((w) => w + 1);

    const next = Math.min(labelIdxRef.current + 1, labels.length - 1);
    if (next !== labelIdxRef.current) setLabelIdx(next);
    onDodge?.(labelIdxRef.current + 1);
  };

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const triggerNear = (clientX: number, clientY: number, slack: number) => {
      const bRect = btn.getBoundingClientRect();
      const cx = bRect.left + bRect.width / 2;
      const cy = bRect.top + bRect.height / 2;
      const dist = Math.hypot(clientX - cx, clientY - cy);
      const triggerRadius = Math.max(bRect.width, bRect.height) * 0.85 + slack;
      if (dist < triggerRadius) dodge(clientX, clientY);
    };

    const handleMove = (e: MouseEvent) => triggerNear(e.clientX, e.clientY, 28);
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0] || e.changedTouches[0];
      if (!t) return;
      triggerNear(t.clientX, t.clientY, 40);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []); // listeners use refs; safe to attach once

  return (
    <motion.button
      ref={btnRef}
      type="button"
      onClick={() => dodge()}
      onFocus={() => dodge()}
      animate={{
        x: offset.x,
        y: offset.y,
        scale,
        rotate: wiggle % 2 === 0 ? -2 : 2,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="absolute left-[10px] top-[10px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-white/95 bg-white/10 border border-white/30 backdrop-blur-md shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:bg-white/15 transition-colors select-none whitespace-nowrap text-sm sm:text-base"
      style={{ touchAction: "manipulation" }}
      aria-label="No (but it runs away)"
    >
      {label}
    </motion.button>
  );
}
