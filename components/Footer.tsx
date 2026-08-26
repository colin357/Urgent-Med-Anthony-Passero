import { nav, site } from "@/lib/site";
import { Logo } from "./Icons";

const columns = [
  {
    title: "Care",
    links: [
      { label: "About the network", href: "#about" },
      { label: "Conditions we evaluate", href: "#conditions" },
      { label: "Why prompt evaluation matters", href: "#why" },
      { label: "How it works", href: "#process" },
      { label: "Questions", href: "#faq" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Behind the network", href: "#founder" },
      { label: "Schedule your evaluation", href: "#contact" },
      { label: `Call ${site.phone}`, href: `tel:${site.phoneHref}` },
      { label: site.email, href: `mailto:${site.email}` },
    ],
  },
];

export default function Footer({ home = true }: { home?: boolean }) {
  const year = new Date().getFullYear();
  const to = (href: string) => (home || !href.startsWith("#") ? href : `/${href}`);

  return (
    <footer className="footer">
      <div className="shell footer__top">
        <div className="footer__brand">
          <div className="brand">
            <Logo className="brand__mark" />
            <span className="brand__text">
              <span className="brand__name">Urgent Med First</span>
              <span className="brand__sub">Post-Accident Care</span>
            </span>
          </div>
          <p className="footer__blurb">
            Urgent Med First — physician-led care for accident victims nationwide.
            A national network of licensed physicians dedicated to the evaluation and
            treatment of injuries sustained in motor vehicle accidents.
          </p>
          <p className="footer__blurb" style={{ marginTop: "1rem" }}>
            Se habla español.
          </p>
        </div>

        {columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={to(l.href)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell footer__bar">
        <p className="footer__legal">
          © {year} Urgent Med First. The information on this site is for general
          education and is not medical advice, diagnosis or treatment. If you are
          experiencing a medical emergency, call 911.
        </p>
        <nav className="footer__legal-links" aria-label="Legal">
          <a href="/terms">Terms &amp; Conditions</a>
        </nav>
        <div className="footer__social">
          {site.social.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
