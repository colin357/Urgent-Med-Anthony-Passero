import { symptomGroups } from "@/lib/content";
import { symptomIcon } from "./Icons";

export default function Approach() {
  return (
    <section className="approach section" id="approach">
      <div className="shell">
        <div className="section-head section-head--split">
          <div data-reveal>
            <p className="eyebrow">01 — Why Urgent Med</p>
            <h2 className="h2 section-head__title">
              A concussion is an injury you{" "}
              <br className="br-lg" />
              can <span className="serif-em">measure.</span>
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="lede">
              Emergency imaging exists to rule out bleeding and fracture. It does its
              job, then sends people home with a leaflet. What it cannot see is the
              microscopic damage to the connections between brain regions — the injury
              that actually produces the headaches, the fog, the short fuse and the
              months of feeling not-quite-yourself.
            </p>
            <div className="callout">
              <p>
                &ldquo;Nothing showed up on the scan&rdquo; is not a diagnosis. It is the
                point where a proper workup should begin.
              </p>
              <cite>The premise Urgent Med was built on</cite>
            </div>
          </div>
        </div>

        <div className="approach__body">
          <div data-reveal="left">
            <h3 className="h3">Symptoms that outlive the paperwork</h3>
            <p style={{ marginTop: "1.1rem", color: "var(--slate)", fontSize: "1rem", lineHeight: 1.68 }}>
              Brain injury rarely announces itself in one clean symptom. It shows up as a
              cluster — spread across systems that are usually treated by four different
              specialists who never speak to each other. If several of these have followed
              you for more than a couple of weeks, you deserve objective testing rather
              than reassurance.
            </p>
            <p style={{ marginTop: "1.1rem", color: "var(--slate)", fontSize: "1rem", lineHeight: 1.68 }}>
              Loss of consciousness is not required. Most concussions happen without it,
              which is exactly why so many go unrecorded and untreated.
            </p>
            <a className="link-arrow" href="#testing" style={{ marginTop: "1.6rem" }}>
              See how we test for it
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M5 12h13M12 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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

          <div className="symptoms" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            {symptomGroups.map((group) => {
              const Icon = symptomIcon[group.system];
              return (
                <div className="symptom" key={group.system}>
                  <div className="symptom__head">
                    {Icon ? <Icon size={17} className="symptom__icon" /> : null}
                    <span className="symptom__title">{group.system}</span>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
