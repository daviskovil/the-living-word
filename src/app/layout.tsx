import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://bibleistheanswer.com";
const siteName = "Bible Is The Answer";
const siteDescription =
  "Free Catholic Bible companion with daily Mass readings, liturgical calendar, Saint of the Day, mood-based verse recommendations, reading streaks, and personal reflection journal.";

export const metadata: Metadata = {
  title: {
    default: "Bible Is The Answer — Daily Catholic Bible Readings & Reflections",
    template: "%s | Bible Is The Answer",
  },
  description: siteDescription,
  keywords: [
    "Catholic Bible",
    "daily Mass readings",
    "Bible verse of the day",
    "Catholic lectionary",
    "liturgical calendar",
    "Saint of the Day",
    "Bible reading plan",
    "Catholic reflections",
    "Scripture readings",
    "Catholic daily devotion",
    "Bible companion app",
    "Catholic prayer",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Bible Is The Answer — Daily Catholic Bible Readings & Reflections",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Is The Answer — Daily Catholic Bible Readings",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "rSKu5juedoggDVAo-UUV5dyvHPOsF16C1T5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${inter.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
