import { nav, site } from "@/lib/site";
import { Logo } from "./Icons";

const columns = [
  {
    title: "Care",
    links: [
      { label: "Diagnostic testing", href: "#testing" },
      { label: "Treatment programs", href: "#treatment" },
      { label: "Who we treat", href: "#patients" },
      { label: "How it works", href: "#process" },
      { label: "Questions", href: "#faq" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Why Urgent Med", href: "#approach" },
      { label: "Behind the practice", href: "#founder" },
      { label: "Request an appointment", href: "#contact" },
      { label: `Call ${site.phone}`, href: `tel:${site.phoneHref}` },
      { label: site.email, href: `mailto:${site.email}` },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell footer__top">
        <div className="footer__brand">
          <div className="brand">
            <Logo className="brand__mark" />
            <span className="brand__text">
              <span className="brand__name">Urgent Med</span>
              <span className="brand__sub">TBI Diagnostics</span>
            </span>
          </div>
          <p className="footer__blurb">
            A dedicated concussion and traumatic brain injury center serving Broward and
            Palm Beach counties — diagnostic testing, rehabilitation and long-term care
            coordinated by one team.
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
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell footer__bar">
        <p className="footer__legal">
          © {year} Urgent Med. The information on this site is for general education and
          is not medical advice, diagnosis or treatment. If you are experiencing a medical
          emergency, call 911.
        </p>
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
