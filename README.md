# LN Digitech — Website

Production website for **LN Digitech**, a full-service digital marketing, creative design, software development and AI solutions agency. Tagline: *Ideas That Build Brands.*

Built with Next.js 16 (App Router), React 19, TypeScript (strict mode) and CSS Modules. No component library, no Tailwind — styling is design tokens in `globals.css` plus per-component CSS Modules.

---

## Prerequisites

- Node.js 20.9+ (developed and tested on Node 24)
- npm 10+

## Installation

```powershell
npm install
```

## Environment variables

Copy the example file and fill in real values:

```powershell
Copy-Item .env.example .env.local
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Canonical origin for canonical URLs, sitemap, robots and Open Graph. No trailing slash. |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Yes (for the contact form) | Web3Forms Access Key (browser-side; see below). |

### Contact form delivery (Web3Forms)

The contact form submits directly from the browser to [Web3Forms](https://web3forms.com) (https://api.web3forms.com/submit), which forwards inquiries to the team inbox by email. Server-side API calls to Web3Forms require a paid plan with IP whitelisting, so no custom server endpoint is used.

1. Create a free account at [web3forms.com](https://web3forms.com).
2. Copy the Access Key from the dashboard → set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
3. Set the recipient inbox under **Settings → Email** in the Web3Forms dashboard (the visitor's address is used as the reply-to, so replies reach the inquirer).
4. If the key is missing, the form validates but reports an honest configuration error — **it never claims success when delivery is not configured.**

The access key is designed for client-side use and is not a secret server credential, but it must still never be hardcoded into source control. Spam is mitigated with the Web3Forms `botcheck` honeypot field; hCaptcha / Turnstile can be added later from the Web3Forms dashboard if spam becomes a problem.

## Development

```powershell
npm run dev        # http://localhost:3000
npm run lint       # ESLint (flat config)
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm start          # serve the production build
```

## Production build & deploy

```powershell
npm run build
npm start
```

Deploys cleanly to Vercel, Netlify or any Node host. Netlify builds are configured by `netlify.toml` (Node 24). Set every environment variable above in the host's dashboard. After the first production domain is live, update `NEXT_PUBLIC_SITE_URL` — canonical URLs, the sitemap and structured data all derive from it.

---

## Brand assets

| File | Used for |
| --- | --- |
| `public/images/logo/logo.png` | Header (760×218, white background baked in) |
| `public/images/logo/logo-light.png` | Footer on dark navy (generated: transparent bg, white text, blue accent kept) |
| `public/images/logo/mark.jpg` | JSON-LD structured data |
| `app/icon.jpg` | Browser favicon (Next.js App Router auto-serves `app/icon.*`) |
| `public/images/og/default.png` | Default Open Graph / social share card (1200×630, generated from the logo) |

Intrinsic dimensions and alt text live in `data/site.ts` → `logo`. If the official logo is ever re-exported, replace `logo.png` and regenerate `logo-light.png` + `og/default.png`.

Known gap: `mark.jpg` is only 64×64 — fine as a favicon, too small for an `apple-touch-icon` (needs 180×180). Drop a larger export in `app/apple-icon.jpg` when available.

---

## Project structure

```text
app/
  layout.tsx            Root layout: fonts, header, footer, global JSON-LD
  page.tsx              Homepage
  globals.css           Design tokens, reset, typography, utilities
  not-found.tsx         Custom 404
  sitemap.ts            Dynamic sitemap (generated from data files)
  robots.ts             robots.txt
  about/  blog/[slug]/  contact/  packages/  portfolio/
  privacy-policy/  terms/
  services/  services/[slug]/

components/
  layout/    Header (dropdown + mobile nav), Footer, AnnouncementBar
  home/      Hero, ServicesOverview, WhyUs, ProcessSection,
             PortfolioPreview, PricingPreview, FinalCTA
  ui/        Button, Container, SectionHeading, Badge, PageHero,
             Breadcrumbs, FAQAccordion
  forms/     ContactForm
  portfolio/ PortfolioGrid
  blog/      ArticleBody

data/
  site.ts       Brand config, contact details, social links, announcement bar
  services.ts   All 13 services (slugs, copy, FAQs, deliverables)
  packages.ts   Pricing packages + comparison table rows
  projects.ts   Portfolio entries (concept vs client work)
  blog.ts       Articles (typed content blocks, no raw HTML)
  process.ts    Process steps + differentiators

lib/
  validation.ts  Contact form Zod schema (client-side validation)
  seo.tsx        Metadata builders + JSON-LD helpers
  utils.ts       INR/date formatting, URL helpers

types/index.ts  All shared TypeScript types
public/images/logo/  Brand logo assets (header, footer light variant, mark)
public/images/og/     Default social share card
```

## How to add a service

1. Add an object to `services` in `data/services.ts` with a unique `slug`.
2. Fill in `summary`, `description`, `problems`, `deliverables`, `process`, `suitableFor`, `limitations` and `faqs` — each written specifically for that service.
3. Pick an `icon` from `lucide-react` and an `accent` colour.
4. Set `featured: true` to show it on the homepage overview.
5. The detail page, navigation dropdown, sitemap entry and footer link generate automatically. Run `npm run build` to confirm.

## How to update packages and prices

Edit `data/packages.ts` only:

- `packages` — name, `priceLabel` (display string), `priceFrom` (number), features, exclusions, CTA.
- `packageComparison` — rows for the comparison table; use `null` for "not included" (renders as "—").
- `packageDisclaimer` — the legal note shown under pricing.

No component hardcodes a price. Homepage cards, the packages page and the contact-form package selector all read from this file.

## How to add a portfolio project

Edit `data/projects.ts`:

- Set `isConcept: true` for internal/concept work. **The UI labels these visibly — never present concept work as client work.**
- Only populate `results` with genuinely measured, client-approved figures. Use `null` otherwise; the results section is omitted entirely.

## How to add a blog post

Edit `data/blog.ts`. Content is typed blocks (`p`, `h2`, `h3`, `ul`, `ol`, `quote`, `note`) — there is no raw-HTML injection surface. Set `author: null` unless a genuine author exists. Posts render statically and appear in the sitemap automatically.

---

## Contact form security

- **Server-side Zod validation** (authoritative; client validation is UX only).
- **Honeypot field** — bots that fill it get a fake success but nothing is delivered.
- **Rate limiting** — 5 requests per 10 minutes per IP (in-memory; swap for Redis/Upstash if you deploy multiple instances).
- **32 KB body limit** before parsing.
- **Secrets stay server-side.** The email provider key never reaches the client.
- Provider failures return HTTP 502 — success is never reported for undelivered inquiries.

## What is intentionally absent

- **No testimonials section** — none exist yet. Add verified ones to the homepage when available.
- **No fabricated statistics, awards or client counts** anywhere.
- **No social links** until real profile URLs are added to `data/site.ts`.
- **No phone number or address** until genuine values are supplied.

## Checks performed

```powershell
npm run lint       # ✅ clean (0 errors, 0 warnings)
npx tsc --noEmit   # ✅ clean
npm run build      # ✅ 31 routes generated
```

Smoke-tested against the production server: all 15 routes return 200, unknown routes return 404, and the contact API returns 422 (invalid input), 200 (honeypot discard), 429 (rate limit) and 502 (email unconfigured) as designed.
