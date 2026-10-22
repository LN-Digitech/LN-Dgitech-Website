# LN Digitech — Website

Production website for **LN Digitech**, an early-stage technology startup building practical software products. Tagline: *Building practical technology products.*

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

The contact form submits directly from the browser to [Web3Forms](https://web3forms.com) (https://api.web3forms.com/submit), which forwards enquiries to the team inbox by email. Server-side API calls to Web3Forms require a paid plan with IP whitelisting, so no custom server endpoint is used.

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
  sitemap.ts            Static sitemap
  robots.ts             robots.txt
  about/  products/  contact/
  privacy-policy/  terms/

components/
  layout/    Header (mobile nav), Footer, AnnouncementBar
  home/      Hero, MissionVision, ProductsSection, FinalCTA
  ui/        Button, Container, SectionHeading, PageHero,
             Breadcrumbs
  forms/     ContactForm
  founders/  FoundersSection

data/
  site.ts       Brand config, contact details, social links, announcement bar
  founders.ts   Co-founder bios and responsibilities
  products.ts   Announced products (empty until products are finalised)

lib/
  validation.ts  Contact form Zod schema (client-side validation)
  seo.tsx        Metadata builders + JSON-LD helpers
  utils.ts       URL helpers, truncate

types/index.ts  All shared TypeScript types
public/images/logo/  Brand logo assets (header, footer light variant, mark)
public/images/og/     Default social share card
```

## How to add a product

1. Add an object to `products` in `data/products.ts` with a unique `slug`.
2. Fill in `name`, `tagline`, `description`, `status` and `url` (`null` until the product is publicly accessible). Only factual fields — no dates, pricing or features that are not final.
3. The homepage products section and the `/products` page pick the list up automatically; run `npm run build` to confirm.

While `products` is empty, both pages render an honest "no products announced yet" state instead of fictional cards.

---

## Contact form security

- **Client-side Zod validation** before any request leaves the page (there is no custom server endpoint; Web3Forms receives only what passed validation).
- **Honeypot field** (`botcheck`) — bots that fill it get a fake success and nothing is delivered. Web3Forms also discards honeypot hits server-side.
- **Rate limiting** — Web3Forms returns HTTP 429 when exceeded; the form surfaces that to the visitor.
- **No success without delivery.** A confirmed `success: true` response from Web3Forms is required before the form thanks the visitor; failures preserve entered data.

## What is intentionally absent

- **No product screenshots, feature lists, pricing or launch dates** — none are final. They will be published on `/products` when they are.
- **No testimonials, client logos, case studies or statistics** — none exist.
- **No social links** until real profile URLs are added to `data/site.ts`.
- **No phone number or address** until genuine values are supplied.

## Checks performed

```powershell
npm run lint       # 0 errors (1 pre-existing warning: no-img-element in FoundersSection)
npx tsc --noEmit   # 0 errors
npm run build      # 11 routes: /, /products, /about, /contact, privacy, terms, sitemap, robots, 404
```

Smoke-tested against the production server: all 8 public routes return 200, and unknown or removed routes (/services, /packages, /portfolio, /blog, anything else) return 404.
