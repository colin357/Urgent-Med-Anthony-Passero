import { site } from "@/lib/site";
import { ArrowRight, Phone } from "./Icons";
import NeuralArt from "./NeuralArt";

const proof = [
  { k: "Nationwide", v: "Physician network" },
  { k: "No delay", v: "Evaluation scheduling" },
  { k: "End to end", v: "Care coordination" },
];

export default function Hero() {
  return (
    <section className="hero grain" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--ember" data-reveal="fade">
            Post-Accident Medical Evaluation &amp; Care
          </p>

          <h1 className="display hero__title" data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            Medical care for accident victims.{" "}
            <em>When you need it most.</em>
          </h1>

          <p className="lede hero__lede" data-reveal style={{ ["--reveal-delay" as string]: "180ms" }}>
            Being involved in a car accident can leave you with injuries that aren&rsquo;t
            always immediately apparent. Urgent Med First is a national network of
            physicians specializing in post-accident medical evaluation and care —
            ensuring patients receive a thorough assessment and the right follow-up care
            without delay.
          </p>

          <div className="hero__actions" data-reveal style={{ ["--reveal-delay" as string]: "260ms" }}>
            <a className="btn btn--ember" href="#contact">
              Schedule your evaluation
              <ArrowRight className="btn__arrow" />
            </a>
            <a className="btn btn--ghost" href={`tel:${site.phoneHref}`}>
              <Phone size={15} />
              {site.phone}
            </a>
          </div>

          <ul className="hero__proof" data-reveal="fade" style={{ ["--reveal-delay" as string]: "340ms" }}>
            {proof.map((p) => (
              <li key={p.v}>
                <span className="hero__proof-k">{p.k}</span>
                <span className="hero__proof-v">{p.v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__art" data-reveal="fade" style={{ ["--reveal-delay" as string]: "200ms" }}>
          <div className="hero__art-frame">
            <NeuralArt />
          </div>

          <div className="hero__badge hero__badge--a">
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
              <circle cx="13" cy="13" r="12" fill="none" stroke="#D6E7E4" strokeWidth="2" />
              <circle
                cx="13"
                cy="13"
                r="12"
                fill="none"
                stroke="#0F6E68"
                strokeWidth="2"
                strokeDasharray="75.4"
                strokeDashoffset="21"
                strokeLinecap="round"
                transform="rotate(-90 13 13)"
              />
            </svg>
            <span>
              <span className="hero__badge-k">Network reach</span>
              <span className="hero__badge-v">Physicians nationwide</span>
            </span>
          </div>

          <div className="hero__badge hero__badge--b">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9502A" strokeWidth="1.5" aria-hidden="true">
              <path d="M2 12h3.5l2-6 3 12 2.5-9 2 6.5 1.5-3.5H22" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
              <span className="hero__badge-k">Referrals</span>
              <span className="hero__badge-v">Coordinated for you</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
