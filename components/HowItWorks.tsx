import { coordination, process } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section className="process section" id="process">
      <div className="shell">
        <div className="section-head section-head--split">
          <div data-reveal>
            <p className="eyebrow">03 — How it works</p>
            <h2 className="h2 section-head__title">
              Three steps,{" "}
              <br className="br-lg" />
              and none of them yours.
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="lede">
              You attend the appointments. We handle the scheduling, the referrals and
              the records in between.
            </p>
          </div>
        </div>

        <div className="steps steps--three">
          {process.map((s, i) => (
            <article className="step" key={s.step} data-reveal style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}>
              <span className="step__num">Step {s.step}</span>
              <span className="step__dot" aria-hidden="true" />
              <h3 className="step__title">{s.title}</h3>
              <p className="step__body">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="coord" data-reveal="fade">
          <div className="coord__head">
            <p className="eyebrow">What we coordinate</p>
            <p className="coord__note">
              Arranged on your behalf when the evaluation calls for it.
            </p>
          </div>
          <div className="coord__list">
            {coordination.map((c, i) => (
              <article className="coord__item" key={c.name}>
                <span className="coord__idx">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="coord__name">{c.name}</h3>
                <p className="coord__body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
