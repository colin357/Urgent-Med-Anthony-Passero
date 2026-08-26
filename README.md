# Urgent Med First — landing page

Marketing site for **Urgent Med First**, a national network of physicians
specializing in post-accident medical evaluation and care, founded by Anthony
Passero. Copy for the hero, about, how-it-works, conditions, why-prompt-evaluation
and footer sections is supplied by the client and used verbatim; the surrounding
material (FAQ, coordination list, delayed-onset timeline, founder statement) was
written to fit and needs review.

Built with Next.js (App Router) + TypeScript and hand-authored CSS. No UI kit,
no runtime CSS-in-JS, no external asset requests: every graphic on the page is
inline SVG, so the site is a single self-contained deploy.

---

## Before you go live

Everything a real practice would need to change lives in **`lib/site.ts`**.
The values currently in there are **placeholders**:

| Field | Current value | Notes |
| --- | --- | --- |
| `phone` | `(800) 555-0142` | Reserved 555-01xx fictional range — swap for the real intake line |
| `email` | `care@urgentmedfirst.example` | Placeholder domain |
| `hours` | Mon–Fri 8–8 etc. | Invented; set the real intake hours |
| `coverage.points` | Four network claims | Check each against what the network actually offers |
| `social[].href` | `#` | Point at the real profiles or delete the entries |
| `siteUrl` | `https://urgent-med-first.vercel.app` | Override with the `NEXT_PUBLIC_SITE_URL` env var once the domain is attached |

Two more things worth a look before launch:

- **Founder portrait.** `components/Founder.tsx` renders a designed monogram plate
  (`AP`) where a photograph would go. Drop an image in `public/` and swap the
  `.founder__portrait` contents for a `next/image` when you have one.
- **Appointment form.** `app/api/appointment/route.ts` validates the payload and
  logs it. Wire it to email (Resend/Postmark), a CRM, or a scheduling system —
  the front end already handles the success state.

**Copy that was not supplied and needs sign-off.** The client-supplied sections are
used verbatim. Everything else was written to fill out the page and states no
statistics at all — but it does make claims about how the network operates, so
check it:

- `lib/content.ts` → `faqs` — six answers covering ER findings, referrals,
  timing and billing. The billing answer is deliberately non-specific; confirm it
  matches how the network actually handles coverage.
- `lib/content.ts` → `coordination` — the three referral categories under
  "What we coordinate" (MRI, neurology, pain management). These are the ones named
  in the supplied copy; nothing has been added to the list, and nothing should be
  without the practice confirming it.
- `components/WhyEarly.tsx` → `ONSET` — the Hour 0 / Days 1–7 / Week 2 timeline.
- `components/Founder.tsx` — the founder statement and pull quote are written, not
  dictated. Replace with Anthony's own words.
- `components/About.tsx` — the "When not to wait" emergency-signs card. Check it
  against the network's own triage language before publishing.

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
  Header  Hero  NeuralArt  Marquee  About  WhyEarly  HowItWorks
  Founder  Faq  Contact  Footer  CallBar  Reveal  Icons
lib/
  site.ts              contact details, coverage, nav — the file to edit
  content.ts           page copy: conditions, steps, coordination, FAQs
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
  coordinates, edge pairs and ring markers are computed and laid out in code
  rather than exported from a design tool. It reads as a distributed network of
  connected physicians.
