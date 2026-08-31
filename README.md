# Urgent Med First — landing page

Marketing site for **Urgent Med First**, a national network of physicians
specializing in post-accident medical evaluation and care, founded by Anthony
Passero. Copy for the hero, about, how-it-works, conditions, why-prompt-evaluation
and footer sections is supplied by the client and used verbatim; the surrounding
material (FAQ, coordination list, delayed-onset timeline) was written to fit and
needs review.

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

- **Appointment form.** `app/api/appointment/route.ts` validates the payload and
  logs it. Wire it to email (Resend/Postmark), a CRM, or a scheduling system —
  the front end already handles the success state.
- **Terms & Conditions.** `/terms` is live and linked from the footer and the
  appointment form, but the document in `lib/legal.ts` is a **draft that no
  lawyer has read**. See the section below.

### Terms & Conditions — needs counsel

`lib/legal.ts` holds the whole document. It was written to cover the issues a
physician-network site that collects patient intake data normally has to address:
medical disclaimer, no physician-patient relationship from the website,
emergencies, independent-practitioner status, contact consent, privacy, billing,
acceptable use, IP, warranties, liability, indemnity, governing law.

It is a starting point, not finished terms. Before launch:

1. **Have healthcare counsel review it** against HIPAA and state health-privacy
   law, TCPA / state consent rules for phone-SMS-email contact, state
   medical-advertising and corporate-practice-of-medicine rules, state rules on
   PIP / letters of protection / assignment of benefits, and any accessibility
   commitments you want to make.
2. **Fill the placeholders** — `LAST_UPDATED`, `LEGAL_ENTITY`, `GOVERNING_STATE`
   at the top of the file. They render on the page as `[BRACKETED TEXT]` so
   nothing ships silently blank.
3. **Write a Privacy Policy or remove the reference.** Section 6 points at one
   and it does not exist yet. A site whose form collects health information
   normally needs one, plus a Notice of Privacy Practices.
4. **Set `DRAFT_NOTICE = false`** once reviewed. While it is `true` the page
   shows a visible "pending legal review" banner — deliberately, so unreviewed
   terms cannot go live looking authoritative.

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
  layout.tsx           fonts, metadata, MedicalOrganization JSON-LD
  page.tsx             section composition
  terms/page.tsx       Terms & Conditions
  globals.css          the entire design system (tokens → components)
  icon.svg             favicon
  robots.ts sitemap.ts
  api/appointment/     form endpoint
components/
  Header  Hero  NeuralArt  Marquee  About  WhyEarly  HowItWorks
  Faq  Contact  Footer  CallBar  Reveal  Icons
lib/
  site.ts              contact details, coverage, nav — the file to edit
  content.ts           page copy: conditions, steps, coordination, FAQs
  legal.ts             Terms & Conditions text + placeholders
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
