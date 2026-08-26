"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ArrowRight, Logo, Phone } from "./Icons";

/**
 * `home` controls how in-page anchors are written. On the landing page they stay
 * bare hashes so the browser scrolls smoothly; anywhere else they are prefixed
 * so they navigate home first.
 */
export default function Header({ home = true }: { home?: boolean }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const to = (hash: string) => (home ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="alertbar">
        <div className="shell alertbar__inner">
          <p className="alertbar__msg">
            <span className="pulse-dot" aria-hidden="true" />
            <span>A national network of physicians for accident-related injury — evaluations scheduled without delay.</span>
          </p>
          <div className="alertbar__links">
            <a href={to("#why")}>Why act early</a>
            <a href={to("#process")}>How it works</a>
          </div>
        </div>
      </div>

      <header className={`header${stuck ? " is-stuck" : ""}${open ? " is-menu-open" : ""}`}>
        <div className="shell header__inner">
          <a href={home ? "#top" : "/"} className="brand" aria-label={`${site.name} — home`}>
            <Logo className="brand__mark" />
            <span className="brand__text">
              <span className="brand__name">Urgent Med First</span>
              <span className="brand__sub">Post-Accident Care</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={to(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
            <a className="header__phone" href={`tel:${site.phoneHref}`}>
              <Phone size={15} />
              {site.phone}
            </a>
            <a className="btn btn--ember" href={to("#contact")}>
              Schedule evaluation
              <ArrowRight className="btn__arrow" />
            </a>
          </div>

          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={to(item.href)}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a className="mobile-menu__phone" href={`tel:${site.phoneHref}`}>
            {site.phone}
          </a>
          <a className="btn btn--ember" href={to("#contact")} onClick={() => setOpen(false)}>
            Schedule your evaluation
            <ArrowRight className="btn__arrow" />
          </a>
        </div>
      </div>
    </>
  );
}
