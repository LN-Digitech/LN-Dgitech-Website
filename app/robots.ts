import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * robots.txt.
 *
 * Allows crawling of all public pages and points crawlers at the sitemap.
 * API routes and private paths are disallowed.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
