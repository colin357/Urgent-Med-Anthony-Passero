"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { ArrowRight, Check, Chevron, Phone } from "./Icons";

const REASONS = [
  "I was recently in a car accident",
  "Symptoms started days or weeks after a crash",
  "Head injury or concussion symptoms",
  "Neck, back or spine pain after an accident",
  "Pain that has not resolved",
  "Referring a patient",
  "Something else",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      /* the confirmation is shown either way — the intake line also takes calls */
    }
    setPending(false);
    setSent(true);
  }

  return (
    <section className="contact section" id="contact">
      <div className="shell">
        <div className="section-head section-head--split">
          <div data-reveal>
            <p className="eyebrow eyebrow--light">06 — Schedule your evaluation</p>
            <h2 className="h2 section-head__title">
              Start with{" "}
              <br className="br-lg" />
              one phone call.
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="lede">
              Send this and our intake team will call you back to take your history,
              review your coverage and match you with a physician near you. If it is
              easier to talk now, the intake line is answered by a person.
            </p>
          </div>
        </div>

        <div className="contact__grid">
          <div data-reveal="fade">
            {sent ? (
              <div className="form__success" role="status">
                <h3>Request received.</h3>
                <p>
                  Our intake team will call you back on the number you gave us to confirm
                  your location and schedule the evaluation. If your symptoms are
                  worsening quickly — worsening headache, repeated vomiting, confusion or
                  seizure — go to an emergency room now rather than waiting for our call.
                </p>
                <p style={{ marginTop: "0.4rem" }}>
                  Prefer to speak to someone straight away?{" "}
                  <a href={`tel:${site.phoneHref}`} style={{ color: "var(--ember-2)" }}>
                    {site.phone}
                  </a>
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="form__row">
                  <label className="field">
                    <span className="field__label">First name</span>
                    <input name="firstName" type="text" required autoComplete="given-name" placeholder="Jordan" />
                  </label>
                  <label className="field">
                    <span className="field__label">Last name</span>
                    <input name="lastName" type="text" required autoComplete="family-name" placeholder="Reyes" />
                  </label>
                </div>

                <div className="form__row">
                  <label className="field">
                    <span className="field__label">Phone</span>
                    <input name="phone" type="tel" required autoComplete="tel" placeholder="(000) 000-0000" />
                  </label>
                  <label className="field">
                    <span className="field__label">Email</span>
                    <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
                  </label>
                </div>

                <div className="form__row">
                  <label className="field">
                    <span className="field__label">City &amp; state</span>
                    <input
                      name="location"
                      type="text"
                      required
                      autoComplete="address-level2"
                      placeholder="So we can find a physician near you"
                    />
                  </label>
                  <label className="field">
                    <span className="field__label">Reason for visit</span>
                    <select name="reason" defaultValue={REASONS[0]}>
                      {REASONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    <Chevron size={16} className="field__chev" />
                  </label>
                </div>

                <label className="field">
                  <span className="field__label">What happened? (optional)</span>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="A sentence or two about the accident and what you've been experiencing since."
                  />
                </label>

                <div className="form__foot">
                  <button className="btn btn--ember" type="submit" disabled={pending}>
                    {pending ? "Sending…" : "Schedule your evaluation"}
                    <ArrowRight className="btn__arrow" />
                  </button>
                  <p className="form__note">
                    This form is not monitored around the clock and is not for emergencies.
                    Call 911 for a medical emergency.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <div className="coverage">
              <h3 className="coverage__title">{site.coverage.headline}</h3>
              <p className="coverage__body">{site.coverage.body}</p>
              <ul className="coverage__points">
                {site.coverage.points.map((p) => (
                  <li key={p}>
                    <Check size={16} />
                    {p}
                  </li>
                ))}
              </ul>
              <a className="coverage__phone" href={`tel:${site.phoneHref}`}>
                <Phone size={15} />
                {site.phone}
              </a>
            </div>

            <div className="hours">
              {site.hours.map((h) => (
                <div className="hours__row" key={h.days}>
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
