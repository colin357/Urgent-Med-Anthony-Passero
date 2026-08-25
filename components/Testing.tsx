import { tests } from "@/lib/content";

export default function Testing() {
  return (
    <section className="testing section" id="testing">
      <div className="shell">
        <div className="section-head section-head--split">
          <div data-reveal>
            <p className="eyebrow">02 — Diagnostic testing</p>
            <h2 className="h2 section-head__title">
              Six ways of looking at{" "}
              <br className="br-lg" />
              the same injury.
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="lede">
              No single test diagnoses a brain injury. We build a picture from several
              angles — electrical, structural, cognitive, vestibular and visual — and
              the overlap between them is where the answer lives. You only receive the
              tests your presentation warrants, and we tell you why before you sit down
              for any of them.
            </p>
          </div>
        </div>

        <div className="tests">
          {tests.map((t, i) => (
            <article
              className="test"
              key={t.abbr}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
            >
              <div className="test__top">
                <span className="test__abbr">{t.abbr}</span>
                <span className="test__meta">{t.duration}</span>
              </div>
              <h3 className="test__name">{t.name}</h3>
              <p className="test__body">{t.body}</p>
              <div className="test__tags">
                {t.measures.map((m) => (
                  <span className="test__tag" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
