import { treatments } from "@/lib/content";
import { ArrowRight } from "./Icons";

export default function Treatment() {
  return (
    <section className="treatment section" id="treatment">
      <div className="shell">
        <div className="section-head section-head--split">
          <div data-reveal>
            <p className="eyebrow eyebrow--light">03 — Treatment</p>
            <h2 className="h2 section-head__title">
              Diagnosis is half{" "}
              <br className="br-lg" />
              the work.
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="lede">
              Testing that ends in a PDF helps nobody. Every finding maps to a therapy
              delivered by our own clinicians, in our own centers, coordinated on one
              plan. Your neurologist, your therapist and your counsellor are looking at
              the same file — which is rarer than it should be.
            </p>
            <a className="btn btn--on-dark" href="#contact" style={{ marginTop: "1.75rem" }}>
              Talk through a care plan
              <ArrowRight className="btn__arrow" />
            </a>
          </div>
        </div>

        <div className="tx-list">
          {treatments.map((t, i) => (
            <article className="tx" key={t.name} data-reveal="fade" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
              <span className="tx__idx">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="tx__name">{t.name}</h3>
              <p className="tx__body">{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
