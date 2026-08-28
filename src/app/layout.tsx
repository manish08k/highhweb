import type { Metadata, Viewport } from "next";

import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";

import "@/styles/globals.css";

import PHProvider from "./posthog-provider";

const SITE_URL = "https://highh.com";

const SITE_NAME = "HIGHH";

const SITE_TITLE =
  "HIGHH — Build Studio for Software Products, AI Agents & Automations";

const SITE_DESCRIPTION =
  "HIGHH is a build studio that designs and ships production-ready software products, AI agents, and business automations for teams that need to ship fast — not another prototype. Fixed-scope builds and embedded engagements, no discovery decks.";

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s — HIGHH",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "build studio",
    "software development agency",
    "AI agent development",
    "AI automation agency",
    "custom software development",
    "product development studio",
    "AI workflow automation",
    "web application development",
    "internal tools development",
    "MVP development agency",
    "LLM application development",
    "RAG applications",
    "startup software studio",
    "embedded engineering team",
    "Next.js development agency",
  ],

  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0B0E",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,

  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description: SITE_DESCRIPTION,

  slogan: "We build the software your team stops waiting on.",

  knowsAbout: [
    "Software development",
    "AI agents",
    "Business process automation",
    "Web applications",
    "Mobile applications",
    "Internal tools",
    "LLM applications",
    "RAG",
  ],

  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_URL}/#contact`,
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  inLanguage: "en-US",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",

  serviceType:
    "Software product design and development, AI agent development, business automation",

  provider: {
    "@id": `${SITE_URL}/#organization`,
  },

  areaServed: "Worldwide",

  description: SITE_DESCRIPTION,

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HIGHH build services",

    itemListElement: [
      {
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",
          name: "Web and internal application development",

          description:
            "Custom web apps, internal tools, and admin platforms built and handed off production-ready.",
        },
      },

      {
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",
          name: "AI agent development",

          description:
            "Task-specific AI agents connected to real tools and APIs, with human review checkpoints.",
        },
      },

      {
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",
          name: "Business process automation",

          description:
            "Workflow automations that remove repetitive operational work for product teams.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
      </head>

      <body>
        <PHProvider>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}