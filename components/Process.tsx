import { process } from "@/lib/content";

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="shell">
        <div className="section-head section-head--split">
          <div data-reveal>
            <p className="eyebrow">05 — What happens next</p>
            <h2 className="h2 section-head__title">
              From phone call{" "}
              <br className="br-lg" />
              to care plan.
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="lede">
              Four steps, no mystery. You will always know what the next appointment is
              for, what it costs, and what we expect to learn from it.
            </p>
          </div>
        </div>

        <div className="steps">
          {process.map((s, i) => (
            <article className="step" key={s.step} data-reveal style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}>
              <span className="step__num">Step {s.step}</span>
              <span className="step__dot" aria-hidden="true" />
              <h3 className="step__title">{s.title}</h3>
              <p className="step__body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
