"use client";

import { useState } from "react";
import { audiences } from "@/lib/content";
import { Check } from "./Icons";

export default function Patients() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  return (
    <section className="patients section" id="patients">
      <div className="shell">
        <div className="section-head section-head--split">
          <div data-reveal>
            <p className="eyebrow">04 — Who we treat</p>
            <h2 className="h2 section-head__title">
              Same injury.{" "}
              <br className="br-lg" />
              Very different stakes.
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="lede">
              A linebacker, a warehouse worker and a fourteen-year-old need the same
              diagnostic rigour and completely different paperwork, timelines and
              conversations. Pick the situation that fits.
            </p>
          </div>
        </div>

        <div data-reveal="fade">
          <div className="tabs__bar" role="tablist" aria-label="Patient types">
            {audiences.map((a, i) => (
              <button
                key={a.key}
                type="button"
                role="tab"
                className="tab"
                id={`tab-${a.key}`}
                aria-selected={i === active}
                aria-controls={`panel-${a.key}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") setActive((v) => (v + 1) % audiences.length);
                  if (e.key === "ArrowLeft") setActive((v) => (v - 1 + audiences.length) % audiences.length);
                }}
              >
                {a.label}
              </button>
            ))}
          </div>

          <div
            className="tabpanel"
            key={current.key}
            role="tabpanel"
            id={`panel-${current.key}`}
            aria-labelledby={`tab-${current.key}`}
          >
            <div>
              <h3 className="h2 tabpanel__title" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                {current.heading}
              </h3>
              <p className="tabpanel__body">{current.body}</p>
            </div>
            <ul className="tabpanel__points">
              {current.points.map((p) => (
                <li key={p}>
                  <Check size={16} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
