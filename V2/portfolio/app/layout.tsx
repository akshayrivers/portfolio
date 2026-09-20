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
    default: "Vinod Akshat | Full-Stack Developer & Cybersecurity Enthusiast",
    template: "%s | Vinod Akshat",
  },
  description:
    "Portfolio of Vinod Akshat — CS student at NIT Srinagar, specializing in Rust, systems programming, cybersecurity, and full-stack development. Explore projects, writings, and contact info.",
  keywords: [
    "Vinod Akshat",
    "Full-Stack Developer",
    "Rust Developer",
    "Cybersecurity",
    "Penetration Tester",
    "Next.js Developer",
    "Software Engineer",
    "NIT Srinagar",
    "Systems Programming",
    "Developer Portfolio",
    "Open Source Contributor",
  ],
  authors: [{ name: "Vinod Akshat", url: BASE_URL }],
  creator: "Vinod Akshat",
  publisher: "Vinod Akshat",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Vinod Akshat | Full-Stack Developer & Cybersecurity Enthusiast",
    description:
      "CS student at NIT Srinagar. Building things with Rust, Next.js, and cybersecurity. Explore projects, writings, and more.",
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
    title: "Vinod Akshat | Full-Stack Developer & Cybersecurity Enthusiast",
    description:
      "CS student at NIT Srinagar. Building things with Rust, Next.js, and cybersecurity.",
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
    "Full-Stack Developer & Cybersecurity Enthusiast at NIT Srinagar. Specializing in Rust, systems programming, and full-stack web development.",
  jobTitle: "Computer Science Student & Developer",
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
  ],
  knowsAbout: [
    "Rust", "C++", "JavaScript", "Next.js", "React",
    "Cybersecurity", "Penetration Testing", "Systems Programming",
    "Docker", "Linux",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Hindi" },
  ],
  hasOccupation: {
    "@type": "Developer",
    name: "Full-Stack Developer",
  },
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
