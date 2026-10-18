/**
 * Small shared utilities. Keep this file dependency-free and server/client
 * agnostic unless a helper is explicitly marked.
 */

/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Format an integer using Indian digit grouping (lakh/crore). */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format a date string (YYYY-MM-DD) as a human-readable date. */
export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Format a date string as a machine-readable value for <time datetime>. */
export function toISODate(iso: string): string {
  return iso;
}

/** Title-case a slug for display: "web-development" -> "Web Development". */
export function titleCaseSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Build a full URL from the site origin and a path. */
export function absoluteUrl(path: string, base: string): string {
  const normalizedBase = base.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

/** Truncate text for meta descriptions, respecting word boundaries. */
export function truncate(text: string, maxLength = 155): string {
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}…`;
}
