import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Phone } from "@/components/Icons";
import { DRAFT_NOTICE, LAST_UPDATED, termsSections } from "@/lib/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern use of the Urgent Med First website, appointment requests submitted through it, and the information published on it.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header home={false} />
      <main className="legal">
        <div className="shell">
          <header className="legal__head">
            <p className="eyebrow">Legal</p>
            <h1 className="h2 legal__title">Terms &amp; Conditions</h1>
            <p className="legal__updated">Last updated — {LAST_UPDATED}</p>
            <p className="legal__standfirst">
              These terms cover your use of this website, the appointment requests you
              send through it, and the information published on it. Please read them
              alongside the medical disclaimer in section two — it is the part most people
              need.
            </p>
          </header>

          {DRAFT_NOTICE ? (
            <aside className="legal__draft" role="note">
              <p className="legal__draft-label">Draft — pending legal review</p>
              <p>
                This document is a working draft and has not yet been reviewed by counsel
                or finalised for the states in which the network operates. Bracketed text
                marks details still to be supplied. Do not rely on it as the published
                terms.
              </p>
            </aside>
          ) : null}

          <div className="legal__body">
            <nav className="legal__toc" aria-label="On this page">
              <p className="legal__toc-label">On this page</p>
              <ol>
                {termsSections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className="legal__toc-num">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="legal__prose">
              {termsSections.map((section, i) => (
                <section className="legal__section" id={section.id} key={section.id}>
                  <h2 className="legal__section-title">
                    <span className="legal__section-num">{String(i + 1).padStart(2, "0")}</span>
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p, j) =>
                    typeof p === "string" ? (
                      <p key={j}>{p}</p>
                    ) : (
                      <ul key={j}>
                        {p.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  )}

                  {section.id === "contact" ? (
                    <div className="legal__contact">
                      <a className="legal__contact-line" href={`tel:${site.phoneHref}`}>
                        <Phone size={15} />
                        {site.phone}
                      </a>
                      <a className="legal__contact-line" href={`mailto:${site.email}`}>
                        {site.email}
                      </a>
                    </div>
                  ) : null}
                </section>
              ))}

              <div className="legal__foot">
                <p>
                  Ready to be seen? An evaluation starts with one phone call, and the
                  intake team handles everything after it.
                </p>
                <a className="btn btn--ember" href="/#contact">
                  Schedule your evaluation
                  <ArrowRight className="btn__arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer home={false} />
    </>
  );
}
