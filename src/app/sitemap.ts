import type { MetadataRoute } from "next";

const SITE_URL = "https://highh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/#work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/#process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/#stack`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/#faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];
}
