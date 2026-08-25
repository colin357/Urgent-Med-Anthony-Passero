import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

const description =
  "Urgent Med is a South Florida concussion and traumatic brain injury center. qEEG brain mapping, DTI imaging, neuropsychological and vestibular testing — plus the rehabilitation that follows, coordinated by one team.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Urgent Med — Concussion & TBI Testing and Care | South Florida",
    template: "%s | Urgent Med",
  },
  description,
  keywords: [
    "TBI testing",
    "concussion clinic",
    "traumatic brain injury",
    "qEEG brain mapping",
    "post-concussion syndrome",
    "neuropsychological evaluation",
    "Fort Lauderdale",
    "Boynton Beach",
  ],
  openGraph: {
    title: "Urgent Med — Concussion & TBI Testing and Care",
    description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgent Med — Concussion & TBI Testing and Care",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1A20",
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  description,
  medicalSpecialty: "Neurologic",
  telephone: site.phone,
  email: site.email,
  founder: { "@type": "Person", name: site.founder },
  address: site.locations.map((l) => ({
    "@type": "PostalAddress",
    streetAddress: l.street,
    addressLocality: l.city,
    addressRegion: "FL",
    addressCountry: "US",
  })),
  openingHours: ["Mo-Th 08:00-18:00", "Fr 08:00-16:00"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
