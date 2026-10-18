import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { absoluteUrl, truncate } from "@/lib/utils";

/**
 * SEO helpers built on the Next.js Metadata API.
 *
 * All canonical and Open Graph URLs derive from NEXT_PUBLIC_SITE_URL so the
 * project never hardcodes a development URL.
 */

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  /** Override the canonical path when it differs from the page path. */
  canonicalPath?: string;
  /** Prevent indexing for staging/private pages. */
  noIndex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  canonicalPath,
  noIndex = false,
  ogImage = "/images/logo/mark.svg",
  type = "website",
  publishedTime,
  modifiedTime,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path, siteConfig.url);
  const canonical = absoluteUrl(canonicalPath ?? path, siteConfig.url);

  return {
    title,
    description,
    alternates: {
      canonical: canonical,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: absoluteUrl(ogImage, siteConfig.url),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: truncate(description, 200),
      images: [absoluteUrl(ogImage, siteConfig.url)],
    },
  };
}

/* -------------------------------------------------------------------------- */
/* JSON-LD structured data                                                    */
/* -------------------------------------------------------------------------- */

/** Base organisation entity — used sitewide with consistent information. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo.mark, siteConfig.url),
    slogan: siteConfig.tagline,
    email: siteConfig.contact.email,
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    ...(siteConfig.contact.address ? { address: siteConfig.contact.address } : {}),
    areaServed: ["IN", "Worldwide"],
    knowsAbout: [
      "Search Engine Optimization",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Assistive Agent Optimization",
      "Brand Identity Design",
      "Web Development",
      "Mobile App Development",
      "Custom Software Development",
      "E-commerce Development",
      "Social Media Marketing",
      "Content Strategy",
      "AI-assisted Media Production",
      "Technology Consulting",
    ],
    ...(siteConfig.social.length > 0
      ? { sameAs: siteConfig.social.map((item) => item.url) }
      : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, siteConfig.url),
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(`/services/${input.slug}`, siteConfig.url),
    provider: {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: ["IN", "Worldwide"],
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(`/blog/${input.slug}`, siteConfig.url),
    datePublished: input.publishedAt,
    ...(input.updatedAt ? { dateModified: input.updatedAt } : {}),
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo.mark, siteConfig.url),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${input.slug}`, siteConfig.url),
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
