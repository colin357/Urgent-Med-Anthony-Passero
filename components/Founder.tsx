import { site } from "@/lib/site";
import { ArrowRight } from "./Icons";

export default function Founder() {
  return (
    <section className="founder section" id="founder">
      <div className="shell">
        <div className="founder__grid">
          <div className="founder__card" data-reveal="left">
            <div className="founder__portrait">
              <span className="founder__initials">AP</span>
              <span className="founder__scan" aria-hidden="true" />
              <span className="founder__sweep" aria-hidden="true" />
            </div>
            <div className="founder__meta">
              <p className="founder__name">{site.founder}</p>
              <span className="founder__role">Founder</span>
            </div>
          </div>

          <div data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            <p className="eyebrow">04 — Behind the network</p>
            <blockquote className="founder__quote">
              &ldquo;The care exists. What people lose after an accident is the{" "}
              <em>time</em> spent trying to find it.&rdquo;
            </blockquote>
            <div className="founder__text">
              <p>
                After a motor vehicle accident, the medicine is rarely the hard part.
                Finding a physician who evaluates for accident-related injury
                specifically, getting imaging authorized, reaching a specialist, and
                keeping every result in one place — that is where recovery stalls, and it
                stalls at exactly the point when early treatment matters most.
              </p>
              <p>
                Urgent Med First was built as a network rather than a clinic so that
                patients are matched with a licensed physician in their own area instead
                of waiting on whichever specialty center happens to be nearest. Referrals
                are made for them. Records follow them. Follow-up is tracked rather than
                assumed.
              </p>
              <p>
                It is a deliberately unglamorous model. It is also the difference between
                an injury caught in the first week and one found a year later.
              </p>
            </div>
            <div className="founder__sig">
              <a className="btn" href="#contact">
                Schedule your evaluation
                <ArrowRight className="btn__arrow" />
              </a>
              <span style={{ fontSize: "0.813rem", color: "var(--slate-2)" }}>
                Nationwide — tell us where you are
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
