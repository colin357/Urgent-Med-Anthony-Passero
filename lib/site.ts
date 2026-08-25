/**
 * Single source of truth for anything the practice will want to change without
 * touching layout code. Swap these values once and every section updates.
 *
 * ⚠️  PLACEHOLDERS — replace before going live.
 * The phone number uses the reserved 555-01xx fictional range; the email and
 * social links are stand-ins. Nothing here is a real Urgent Med First contact
 * detail yet.
 */
export const site = {
  name: "Urgent Med First",
  tagline: "Physician-Led Care for Accident Victims Nationwide",
  founder: "Anthony Passero",
  phone: "(800) 555-0142",
  phoneHref: "+18005550142",
  email: "care@urgentmedfirst.example",
  coverage: {
    headline: "A national network",
    body:
      "Urgent Med First is not a single clinic. We match patients with licensed physicians in their own area, which means an evaluation close to home rather than a wait for the nearest specialty center.",
    points: [
      "Physicians across the United States",
      "Evaluation scheduled without delay",
      "Referrals and records coordinated for you",
      "One point of contact from first visit onward",
    ],
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Intake line only" },
    { days: "After an accident", time: "Call any time" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

/**
 * Canonical origin used for metadata, sitemap and robots.
 * Set NEXT_PUBLIC_SITE_URL in Vercel once the real domain is attached.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://urgent-med-first.vercel.app";

export const nav = [
  { label: "About", href: "#about" },
  { label: "Conditions", href: "#conditions" },
  { label: "Why act early", href: "#why" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
