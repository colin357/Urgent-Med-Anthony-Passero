import { ArrowRight } from "./Icons";

/** How a masked injury typically surfaces — the argument for evaluating early. */
const ONSET = [
  {
    when: "Hour 0",
    what: "Impact. Adrenaline and shock blunt pain, and emergency imaging is looking for what is immediately life-threatening.",
  },
  {
    when: "Days 1–7",
    what: "Stiffness, headache, dizziness and numbness begin to surface as that initial response subsides.",
  },
  {
    when: "Week 2 onward",
    what: "Untreated injuries are compensated around — and an injury nobody documented becomes harder to treat and harder to explain.",
  },
];

export default function WhyEarly() {
  return (
    <section className="why section" id="why">
      <div className="shell">
        <div className="why__grid">
          <div data-reveal="left">
            <p className="eyebrow eyebrow--light">02 — Why prompt evaluation matters</p>
            <h2 className="h2 section-head__title">
              The injuries that{" "}
              <br className="br-lg" />
              wait to show up.
            </h2>

            <ol className="onset">
              {ONSET.map((o) => (
                <li className="onset__item" key={o.when}>
                  <span className="onset__when">{o.when}</span>
                  <p className="onset__what">{o.what}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="why__body" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p>
              Many accident-related injuries — particularly TBI, spinal injuries, and
              soft tissue damage — do not present obvious symptoms immediately following
              an accident. Without early evaluation, these conditions can go undiagnosed
              and worsen over time.
            </p>
            <p>
              A thorough medical evaluation immediately after an accident allows
              physicians to identify injuries early, begin appropriate treatment, and
              establish a clear clinical picture of the patient&rsquo;s condition from the
              outset.
            </p>

            <blockquote className="why__quote">
              Urgent Med First exists to make that evaluation{" "}
              <em>accessible, immediate, and comprehensive.</em>
            </blockquote>

            <a className="btn btn--on-dark" href="#contact">
              Schedule your evaluation
              <ArrowRight className="btn__arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
