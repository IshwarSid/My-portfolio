import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medabalimi Eswar Prasad — AI & Data Science Student",
  description:
    "Portfolio of Medabalimi Eswar Prasad — AI & Data Science student exploring AI Automations, Open Source, and Modern Web Technologies. Building intelligent systems with AI.",
  keywords: [
    "Medabalimi Eswar Prasad",
    "AI",
    "Data Science",
    "Portfolio",
    "Open Source",
    "AI Agents",
    "MCP",
    "n8n",
    "React",
    "Next.js",
    "Web Developer",
    "Student",
    "Smart India Hackathon",
  ],
  authors: [{ name: "Medabalimi Eswar Prasad" }],
  creator: "Medabalimi Eswar Prasad",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eswarprasad.dev",
    title: "Medabalimi Eswar Prasad — AI & Data Science Student",
    description:
      "AI & Data Science student exploring AI Automations, Open Source, and Modern Web Technologies.",
    siteName: "Eswar Prasad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medabalimi Eswar Prasad — AI & Data Science Student",
    description:
      "AI & Data Science student exploring AI Automations, Open Source, and Modern Web Technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="font-sans">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Medabalimi Eswar Prasad",
              jobTitle: "AI & Data Science Student",
              email: "medabalimieswarprasad@gmail.com",
              url: "https://eswarprasad.dev",
              sameAs: [
                "https://linkedin.com/in/eswarprasad",
                "https://github.com/eswarprasad",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Seshadri Gudlavalleru Engineering College",
              },
            }),
          }}
        />
      </head>
      <body>
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
        {/* Noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
