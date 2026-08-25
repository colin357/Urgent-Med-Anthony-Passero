import { conditions } from "@/lib/content";
import { ArrowRight } from "./Icons";

export default function About() {
  return (
    <section className="approach section" id="about">
      <div className="shell">
        <div className="section-head section-head--split">
          <div data-reveal>
            <p className="eyebrow">01 — About</p>
            <h2 className="h2 section-head__title">
              Specialized care for{" "}
              <br className="br-lg" />
              <span className="serif-em">accident-related</span> injuries.
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="lede">
              Urgent Med First is a national network of licensed physicians dedicated to
              the evaluation and treatment of injuries sustained in motor vehicle
              accidents.
            </p>
            <div className="callout">
              <p>
                We understand that accident-related injuries — including traumatic brain
                injuries, spinal trauma, and soft tissue damage — require prompt,
                thorough medical attention.
              </p>
              <cite>Why the network exists</cite>
            </div>
          </div>
        </div>

        <div className="approach__body" id="conditions">
          <div data-reveal="left">
            <h3 className="h3">Conditions we evaluate</h3>
            <p style={{ marginTop: "1.1rem", color: "var(--slate)", fontSize: "1rem", lineHeight: 1.68 }}>
              Our physicians are experienced in identifying and treating these
              conditions, and in coordinating the full spectrum of care patients need to
              recover. An evaluation covers all of them, not just the injury that sent
              you looking.
            </p>
            <a className="link-arrow" href="#process" style={{ marginTop: "1.6rem" }}>
              See how an evaluation works
              <ArrowRight size={15} />
            </a>

            <div className="redflag">
              <p className="redflag__label">When not to wait</p>
              <p className="redflag__body">
                A headache that keeps getting worse, repeated vomiting, one pupil larger
                than the other, slurred speech, seizure, or someone who cannot be woken:
                these are emergency signs. Go to an emergency room or call 911 — do not
                book an evaluation.
              </p>
            </div>
          </div>

          <ol className="conditions" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            {conditions.map((c, i) => (
              <li className="condition" key={c.name}>
                <span className="condition__idx">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="condition__name">{c.name}</h4>
                  <p className="condition__body">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
