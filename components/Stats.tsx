"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const duration = 1400;
    let raf = 0;
    let start: number | null = null;

    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutExpo — fast arrival, soft landing
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);

  return value;
}

function Stat({ item, active }: { item: (typeof stats)[number]; active: boolean }) {
  const value = useCountUp(item.value, active);
  return (
    <div className="stat">
      <span className="stat__num">
        {value}
        <sup>{item.suffix}</sup>
      </span>
      <span className="stat__label">{item.label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stats section section--tight" aria-label="Key figures">
      <div className="shell">
        <div className="stats__grid" ref={ref}>
          {stats.map((s) => (
            <Stat key={s.label} item={s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
