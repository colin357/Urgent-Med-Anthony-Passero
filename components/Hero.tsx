import { site } from "@/lib/site";
import { ArrowRight, Phone } from "./Icons";
import NeuralArt from "./NeuralArt";

const proof = [
  { k: "Same week", v: "Typical wait" },
  { k: "10+", v: "Specialties on staff" },
  { k: "2", v: "Florida centers" },
];

export default function Hero() {
  return (
    <section className="hero grain" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--ember" data-reveal="fade">
            Concussion &amp; Traumatic Brain Injury
          </p>

          <h1 className="display hero__title" data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            The scan came back{" "}
            <br className="br-lg" />
            clean. You <em>didn&rsquo;t.</em>
          </h1>

          <p className="lede hero__lede" data-reveal style={{ ["--reveal-delay" as string]: "180ms" }}>
            Urgent Med is a dedicated brain injury center in South Florida. We run the
            diagnostic testing that emergency imaging was never built to do — then we
            treat what we find, with one coordinated team and a plan you can hold in
            your hand.
          </p>

          <div className="hero__actions" data-reveal style={{ ["--reveal-delay" as string]: "260ms" }}>
            <a className="btn btn--ember" href="#contact">
              Request an evaluation
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
              <span className="hero__badge-k">Diagnostic suite</span>
              <span className="hero__badge-v">qEEG &middot; DTI &middot; VNG</span>
            </span>
          </div>

          <div className="hero__badge hero__badge--b">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9502A" strokeWidth="1.5" aria-hidden="true">
              <path d="M2 12h3.5l2-6 3 12 2.5-9 2 6.5 1.5-3.5H22" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
              <span className="hero__badge-k">Report turnaround</span>
              <span className="hero__badge-v">5 business days</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
