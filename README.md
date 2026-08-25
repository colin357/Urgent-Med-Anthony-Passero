# Urgent Med — landing page

Marketing site for **Urgent Med**, a concussion / traumatic brain injury diagnostic
and treatment practice founded by Anthony Passero. Content structure is modelled on
[radiustbi.com](https://radiustbi.com) — the service mix, patient segments and
diagnostic vocabulary — with original copy and an original design system.

Built with Next.js (App Router) + TypeScript and hand-authored CSS. No UI kit,
no runtime CSS-in-JS, no external asset requests: every graphic on the page is
inline SVG, so the site is a single self-contained deploy.

---

## Before you go live

Everything a real practice would need to change lives in **`lib/site.ts`**.
The values currently in there are **placeholders**:

| Field | Current value | Notes |
| --- | --- | --- |
| `phone`, location phones | `(954) 555-0142`, `(561) 555-0188` | Reserved 555-01xx fictional range — swap for the real lines |
| `email` | `care@urgentmed.example` | Placeholder domain |
| `locations[].street` / `.region` | `000 Placeholder …` | Real addresses were deliberately not invented |
| `social[].href` | `#` | Point at the real profiles or delete the entries |
| `siteUrl` | `https://urgent-med.vercel.app` | Override with the `NEXT_PUBLIC_SITE_URL` env var once the domain is attached |

Two more things worth a look before launch:

- **Founder portrait.** `components/Founder.tsx` renders a designed monogram plate
  (`AP`) where a photograph would go. Drop an image in `public/` and swap the
  `.founder__portrait` contents for a `next/image` when you have one.
- **Appointment form.** `app/api/appointment/route.ts` validates the payload and
  logs it. Wire it to email (Resend/Postmark), a CRM, or a scheduling system —
  the front end already handles the success state.

Medical copy is written to be conservative: the only figures quoted are the two
widely-cited public-health numbers (a brain injury every ~23 seconds; ~90% of
concussions involve no loss of consciousness). Have a clinician review the
content before publishing, and check the emergency-warning card in the
"Why Urgent Med" section against the practice's own triage language.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploying to Vercel

The repo is a stock Next.js app, so Vercel needs no configuration:

1. **Import the repository** at [vercel.com/new](https://vercel.com/new) — the
   framework preset is detected as Next.js, build command `next build`, output
   handled automatically.
2. **Set `NEXT_PUBLIC_SITE_URL`** (Project → Settings → Environment Variables) to
   the production URL, e.g. `https://urgentmed.com`. This drives `metadataBase`,
   `sitemap.xml` and `robots.txt`.
3. **Attach the domain** under Project → Settings → Domains.

Every push to `main` deploys; other branches get preview URLs.

---

## Structure

```
app/
  layout.tsx           fonts, metadata, MedicalClinic JSON-LD
  page.tsx             section composition
  globals.css          the entire design system (tokens → components)
  icon.svg             favicon
  robots.ts sitemap.ts
  api/appointment/     form endpoint
components/
  Header  Hero  NeuralArt  Marquee  Stats  Approach  Testing
  Treatment  Patients  Process  Founder  Faq  Contact  Footer
  CallBar  Reveal  Icons
lib/
  site.ts              contact details, nav — the file to edit
  content.ts           all page copy: tests, treatments, FAQs, audiences
```

## Design notes

- **Palette** — deep petrol ink `#0B1A20`, warm bone paper `#F7F4ED`, clinical teal
  `#0F6E68`, ember signal `#C9502A`. Defined as custom properties at the top of
  `globals.css`; changing four values re-skins the site.
- **Type** — Fraunces (variable serif, optical sizing) for display, Archivo for
  body, IBM Plex Mono for clinical labels and eyebrows. Loaded via `next/font`,
  self-hosted, no layout shift.
- **Motion** — scroll reveals via a single `IntersectionObserver`
  (`components/Reveal.tsx`), SVG stroke-dashoffset draw-in on the hero network,
  `offset-path` signal travel, count-up statistics, grid-template-rows accordion,
  ember wipe on buttons and cards. Everything is disabled under
  `prefers-reduced-motion: reduce`.
- **Artwork** — `components/NeuralArt.tsx` builds the hero graphic from data: node
  coordinates, edge pairs and 10–20 EEG electrode positions are computed and laid
  out in code rather than exported from a design tool.
