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
  "Urgent Med First is a national network of physicians specializing in post-accident medical evaluation and care. Traumatic brain injury, spinal trauma and soft tissue injury assessed promptly, with imaging and specialist referrals coordinated for you.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Urgent Med First — Medical Care for Accident Victims, Nationwide",
    template: "%s | Urgent Med First",
  },
  description,
  keywords: [
    "car accident doctor",
    "post-accident medical evaluation",
    "traumatic brain injury",
    "whiplash treatment",
    "spinal injury after car accident",
    "soft tissue injury",
    "accident injury physician network",
    "delayed injury symptoms",
  ],
  openGraph: {
    title: "Urgent Med First — Medical Care for Accident Victims",
    description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgent Med First — Medical Care for Accident Victims",
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
  "@type": "MedicalOrganization",
  name: site.name,
  description,
  slogan: site.tagline,
  medicalSpecialty: ["Emergency", "Neurologic", "PhysicalMedicine"],
  telephone: site.phone,
  email: site.email,
  url: siteUrl,
  founder: { "@type": "Person", name: site.founder },
  areaServed: { "@type": "Country", name: "United States" },
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
