/**
 * Single source of truth for anything the practice will want to change without
 * touching layout code. Swap these values once and every section updates.
 *
 * ⚠️  PLACEHOLDERS — replace before going live.
 * Phone numbers use the reserved 555-01xx fictional range and the addresses,
 * email and social links are stand-ins. Nothing here is a real Urgent Med
 * contact detail yet.
 */
export const site = {
  name: "Urgent Med",
  tagline: "Brain Injury Diagnostics & Recovery",
  founder: "Anthony Passero",
  phone: "(954) 555-0142",
  phoneHref: "+19545550142",
  email: "care@urgentmed.example",
  fax: "(954) 555-0143",
  hours: [
    { days: "Monday – Thursday", time: "8:00 AM – 6:00 PM" },
    { days: "Friday", time: "8:00 AM – 4:00 PM" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  locations: [
    {
      city: "Fort Lauderdale",
      street: "000 Placeholder Ave, Suite 000",
      region: "Fort Lauderdale, FL 00000",
      phone: "(954) 555-0142",
      phoneHref: "+19545550142",
      note: "Main diagnostic center — imaging, EEG suite, vestibular lab",
    },
    {
      city: "Boynton Beach",
      street: "000 Placeholder Blvd, Suite 000",
      region: "Boynton Beach, FL 00000",
      phone: "(561) 555-0188",
      phoneHref: "+15615550188",
      note: "Evaluation, therapy and follow-up care",
    },
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
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://urgent-med.vercel.app";

export const nav = [
  { label: "Our approach", href: "#approach" },
  { label: "Testing", href: "#testing" },
  { label: "Treatment", href: "#treatment" },
  { label: "Who we treat", href: "#patients" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
