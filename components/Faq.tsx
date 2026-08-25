"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";
import { Phone } from "./Icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq section" id="faq">
      <div className="shell">
        <div className="faq__grid">
          <div data-reveal="left">
            <p className="eyebrow">07 — Common questions</p>
            <h2 className="h2 section-head__title">
              The things people{" "}
              <br className="br-lg" />
              ask first.
            </h2>
            <p style={{ marginTop: "1.4rem", color: "var(--slate)", fontSize: "0.969rem", lineHeight: 1.68, maxWidth: "28em" }}>
              If yours isn&rsquo;t here, call us. You will reach a clinical coordinator,
              not a phone tree.
            </p>
            <a className="link-arrow" href={`tel:${site.phoneHref}`} style={{ marginTop: "1.25rem" }}>
              <Phone size={15} />
              {site.phone}
            </a>
          </div>

          <div className="faq__list" data-reveal="fade">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div className="qa" key={item.q} data-open={isOpen}>
                  <h3>
                    <button
                      type="button"
                      className="qa__btn"
                      aria-expanded={isOpen}
                      aria-controls={`qa-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      {item.q}
                      <span className="qa__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="qa__panel" id={`qa-panel-${i}`} role="region">
                    <div className="qa__inner">
                      <p className="qa__text">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
