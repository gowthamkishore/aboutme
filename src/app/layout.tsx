import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gowthamkishore.github.io/PersonalPortfolio"),
  title: "Gowtham Kishore | Engineering Portfolio",
  description:
    "Gowtham Kishore delivers test & measurement, IIoT, and embedded systems for automotive, energy, and defense manufacturers. Founder of Gixtronix Technologies.",
  openGraph: {
    title: "Gowtham Kishore | Engineering Portfolio",
    description:
      "Engineering intelligent industrial solutions since 2016. Gowtham Kishore, Chennai.",
    type: "website",
    url: "/",
    siteName: "Gowtham Kishore",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowtham Kishore | Engineering Portfolio",
    description:
      "Engineering intelligent industrial solutions since 2016. Gowtham Kishore, Chennai.",
  },
  alternates: {
    canonical: "/",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gowtham Kishore",
  url: "https://gowthamkishore.github.io/PersonalPortfolio",
  image: "https://gowthamkishore.github.io/PersonalPortfolio/gowtham.png",
  jobTitle: "Founder & Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Gixtronix Technologies",
    url: "https://gixtronix.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/in/gowthamkishorer/"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
