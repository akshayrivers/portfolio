import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://vinod-akshat.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Vinod Akshat | SDE (Backend, AI Agents) — NIT Srinagar '27",
    template: "%s | Vinod Akshat",
  },
  description:
    "Vinod Akshat — final-year CS student at NIT Srinagar (2027) and backend-heavy SDE: TypeScript/Node.js APIs, PostgreSQL, OAuth 2.0/RBAC auth, Docker/CI, plus AI agents and LLM tooling (Gemini, LangChain), with systems depth in Rust and C. Cybersecurity research intern at IIT Jammu, Zed editor contributor (3 merged PRs), Polaris Fellowship finalist, DEFCON Srinagar lead. Open to SDE and backend roles for 2027.",
  keywords: [
    "Vinod Akshat",
    "Software Engineer",
    "Backend Developer",
    "SDE",
    "TypeScript Developer",
    "Node.js Developer",
    "AI Agents",
    "LLM Tooling",
    "Gemini API",
    "LangChain",
    "PostgreSQL",
    "Fastify",
    "OAuth 2.0",
    "Rust Developer",
    "Systems Programming",
    "Cybersecurity",
    "Penetration Tester",
    "IIT Jammu",
    "Zed Editor Contributor",
    "Polaris Fellowship",
    "DEFCON Srinagar",
    "NIT Srinagar",
    "Next.js Developer",
    "Full-Stack Developer",
    "Open Source Contributor",
    "Hire Software Engineer India",
    "Backend Engineer Fresher 2027",
  ],
  authors: [{ name: "Vinod Akshat", url: BASE_URL }],
  creator: "Vinod Akshat",
  publisher: "Vinod Akshat",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Vinod Akshat | SDE (Backend, AI Agents) — NIT Srinagar '27",
    description:
      "Final-year CSE at NIT Srinagar. Backend-heavy SDE (TypeScript, Postgres, auth) + AI agents + Rust systems depth. IIT Jammu research intern, Zed contributor, Polaris finalist. Open to SDE/backend roles 2027.",
    url: BASE_URL,
    siteName: "Vinod Akshat",
    type: "website",
    locale: "en_US",
    alternateLocale: "en_US",
    images: [
      {
        url: "/assets/me.jpeg",
        width: 800,
        height: 800,
        alt: "Vinod Akshat Profile Photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinod Akshat | SDE (Backend, AI Agents) — NIT Srinagar '27",
    description:
      "Final-year CSE at NIT Srinagar. Backend-heavy SDE + AI agents + Rust systems depth. IIT Jammu intern, Zed contributor, Polaris finalist. Open to SDE/backend roles 2027.",
    creator: "@vinod_akshat",
    images: ["/assets/me.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    google: "vHJoXYV__FsbiPx4JHobGDr4SFCvxgvuGKXudvlZXNg",
  },
  category: "Developer Portfolio",
  classification: "Software Engineer Portfolio",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinod Akshat",
  url: BASE_URL,
  description:
    "Backend-heavy Software Engineer (final-year CSE, NIT Srinagar 2027): TypeScript/Node.js APIs, PostgreSQL, auth systems, AI agents and LLM tooling, with systems depth in Rust and C. Cybersecurity research intern at IIT Jammu. Seeking SDE and backend roles for 2027.",
  jobTitle: "Software Development Engineer (Backend, AI Agents)",
  worksFor: {
    "@type": "Organization",
    name: "NIT Srinagar",
    url: "https://www.nitsr.ac.in",
  },
  education: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Bachelor of Technology",
      educationalLevel: "Undergraduate",
      institution: "NIT Srinagar",
      startTime: "2023",
      endTime: "2027",
      major: "Computer Science",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "High School",
      educationalLevel: "Secondary",
      institution: "Jawahar Navodaya Vidyalaya Udhampur",
      startTime: "2016",
      endTime: "2022",
    },
  ],
  sameAs: [
    "https://github.com/akshayrivers",
    "https://linkedin.com/in/vinod-akshat",
    "https://codeforces.com/profile/Akshayforrivers",
    "https://leetcode.com/akshayrivers",
    "https://medium.com/@pumkininriver",
    "https://linktr.ee/vinodakshat",
  ],
  knowsAbout: [
    "TypeScript", "Node.js", "Fastify", "Express", "REST APIs",
    "PostgreSQL", "MongoDB", "OAuth 2.0", "JWT", "RBAC",
    "AI Agents", "Gemini API", "LangChain", "Agentic Workflows",
    "Rust", "C", "C++", "Python", "Java", "JavaScript", "SQL", "Bash",
    "Backend Development", "Authentication Systems", "Docker", "CI/CD",
    "Cybersecurity", "Penetration Testing", "Systems Programming",
    "Next.js", "React", "Linux",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Hindi" },
  ],
  hasOccupation: {
    "@type": "Developer",
    name: "Backend Software Engineer",
  },
  seeks: "SDE and backend engineering roles (2027 graduating cohort)",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Script
          id="structured-data-person"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Vinod Akshat Portfolio",
            url: BASE_URL,
            description:
              "Portfolio website of Vinod Akshat — Full-Stack Developer & Cybersecurity Enthusiast.",
            publisher: {
              "@type": "Person",
              name: "Vinod Akshat",
              url: BASE_URL,
            },
          })}
        </Script>
      </body>
    </html>
  );
}
