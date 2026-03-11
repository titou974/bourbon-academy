"use client";

import { useEffect, useRef, useState } from "react";
import statsData from "@/data/stats.json";
import type { Stat } from "@/types";

const stats = statsData as Stat[];

function useCountAnimation(
  target: number,
  duration: number,
  shouldAnimate: boolean,
) {
  const [count, setCount] = useState(shouldAnimate ? 0 : target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(target);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, shouldAnimate]);

  return count;
}

function StatItem({
  stat,
  shouldAnimate,
}: {
  stat: Stat;
  shouldAnimate: boolean;
}) {
  const count = useCountAnimation(stat.value, stat.duration, shouldAnimate);

  return (
    <div className="flex flex-col items-center gap-1 text-center bg-card p-4 justify-center border border-border rounded-xl">
      <span className="text-2xl md:text-3xl font-semibold tracking-[-1.2px] text-foreground">
        {count}
        <span className="text-secondary">{stat.suffix}</span>
      </span>
      <span className="text-xs md:text-sm text-text-muted tracking-[-0.32px] leading-tight max-w-[100px]">
        {stat.label}
      </span>
    </div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const shouldAnimate = isVisible && !prefersReducedMotion;

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 gap-4 border-t border-border px-4 py-6 md:px-10 md:py-8 mt-6"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} shouldAnimate={shouldAnimate} />
      ))}
    </div>
  );
}
