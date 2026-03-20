"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const BASE_COUNT = 458;
const NAMESPACE = "a1ashish1-portfolio";
const KEY = "visits";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const incrementCounter = async () => {
      try {
        const res = await fetch(
          `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`
        );
        if (res.ok) {
          const data = await res.json();
          setCount(BASE_COUNT + (data.count ?? 0));
        } else {
          setCount(BASE_COUNT);
        }
      } catch {
        setCount(BASE_COUNT);
      }
    };

    incrementCounter();
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-xs font-mono text-muted tabular-nums">
      <Eye className="w-3.5 h-3.5 text-accent/70" />
      <span
        className={count === null ? "opacity-0" : "opacity-100 transition-opacity duration-500"}
      >
        {count !== null ? count.toLocaleString() : "---"}
      </span>
    </div>
  );
}
