import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "@/components/providers/lenis-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chandankumar.dev"),
  title: "Chandan Kumar | Portfolio",
  description:
    "Portfolio of Chandan Kumar, First Year CSE-IoT student at Techno Main Salt Lake, Kolkata. Passionate about web development, AI, and building modern digital experiences.",
  keywords: [
    "Chandan Kumar",
    "Portfolio",
    "Web Developer",
    "CSE-IoT",
    "Techno Main Salt Lake",
    "Next.js",
    "React",
    "Full Stack Developer",
  ],
  authors: [{ name: "Chandan Kumar" }],
  creator: "Chandan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chandankumar.dev",
    siteName: "Chandan Kumar | Portfolio",
    title: "Chandan Kumar | Portfolio",
    description:
      "Portfolio of Chandan Kumar, First Year CSE-IoT student at Techno Main Salt Lake, Kolkata. Passionate about web development, AI, and building modern digital experiences.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chandan Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan Kumar | Portfolio",
    description:
      "Portfolio of Chandan Kumar, First Year CSE-IoT student at Techno Main Salt Lake, Kolkata.",
    images: ["/opengraph-image"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chandan Kumar",
              url: "https://chandankumar.dev",
              jobTitle: "B.Tech CSE-IoT Student",
              worksFor: {
                "@type": "Organization",
                name: "Techno Main Salt Lake",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Techno Main Salt Lake",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Darbhanga",
                addressRegion: "Bihar",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/chandankumar",
                "https://linkedin.com/in/chandankumar",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg noise-overlay">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
