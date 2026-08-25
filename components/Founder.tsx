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
              <span className="founder__role">Founder &amp; Managing Director</span>
            </div>
          </div>

          <div data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            <p className="eyebrow">06 — Behind the practice</p>
            <blockquote className="founder__quote">
              &ldquo;People don&rsquo;t arrive here confused about their symptoms. They
              arrive <em>exhausted</em> from being told those symptoms aren&rsquo;t
              real.&rdquo;
            </blockquote>
            <div className="founder__text">
              <p>
                Urgent Med was founded to close a gap that South Florida patients kept
                falling through: emergency care handles the first six hours of a head
                injury extremely well, and then the system largely stops. What follows is
                usually a referral loop — neurology, then ophthalmology, then physical
                therapy, then psychology — with each specialist holding one piece and
                nobody holding the whole.
              </p>
              <p>
                We built the practice the other way around. One intake, one coordinated
                diagnostic workup, one team reading the results together, and one plan
                with dates on it. Patients are re-tested against their own baseline so
                progress is a measurement rather than an opinion.
              </p>
              <p>
                It is a deliberately unglamorous model. It is also the reason people
                finally get an explanation for a year of headaches.
              </p>
            </div>
            <div className="founder__sig">
              <a className="btn" href="#contact">
                Start with an evaluation
                <ArrowRight className="btn__arrow" />
              </a>
              <span style={{ fontSize: "0.813rem", color: "var(--slate-2)" }}>
                Most patients seen within one week
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
