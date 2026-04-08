# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## External Audit Workflow

Before sharing the codebase with any external auditor (AI tool, consultant, or reviewer), run:

```
pnpm audit:export
```

This generates `audit-snapshot.txt` in the repo root — a single flat file containing every source file in the project. Hand that file to the external auditor. It is gitignored and disposable; regenerate it fresh each time.

**Note for this AI (Replit Agent):** Direct file access is available — no need to run this before internal audits. This workflow is only for external auditors who cannot navigate the monorepo directory structure.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### TRYPS Landing Page (`artifacts/tryps-landing`)
- **Framework**: React + Vite (TypeScript)
- **Design**: Crimson — deep red palette (#9A0514 primary, #BE123C accent, #FFF9F9 bg, #1C0808 dark text, #6B3030 muted text, #FFE4E6 tint, #FECDD3 border)
- **Styling**: Tailwind CSS v4 with inline custom values (no shadcn components — uses native HTML + Tailwind)
- **SEO**: Full JSON-LD schemas in `index.html` (Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList), OG + Twitter meta tags, canonical URL
- **Semantic HTML**: `<header>`, `<main>`, `<section aria-labelledby>`, `<ol>` for steps, `<ul>` for features/use cases, `<blockquote>` for testimonials, `<details>/<summary>` for FAQ, `<figure>/<figcaption>` for product preview
- **Sections** (in order): Hero → Features (5) → How It Works (4 steps) → Problem vs Solution → Comparison → Social Proof (3 quotes) → Use Cases (5) → Product Preview → FAQ (6) → Final CTA → Footer
- **Canonical domain**: `jointryps.com`
- **Product preview**: Code-built 4-panel flow mockup (no external image dependency)
- **Hero mockup**: Code-built app card showing date poll + expense tracker + notification

### Logo
- **Chosen direction**: Option B from Round 2 — gradient tile (rounded square, deep-to-rose crimson gradient, white "T" inside). Working logo for now.
- Source: `artifacts/mockup-sandbox/src/components/mockups/tryps-logos/LogoOptions2.tsx` — the `GradientTile` component
- Not yet implemented on the landing page — to be integrated when ready

### Mockup Sandbox (`artifacts/mockup-sandbox`)
- Design variant explorer with 7 variants (Sunshine A1, NightFlight B, Editorial C, Gradient D, Coastal A2, Golden A3, Punchy A4)
- NightFlight.tsx has a known syntax error (template literal encoding issue) — does not affect the main landing page
- Logo rounds: LogoOptions.tsx (R1), LogoOptions2.tsx (R2 — **chosen: option B**), LogoOptions3.tsx (R3), LogoOptions4.tsx (R4)

---

## TRYPS Landing Page — Audit Fix Tracker

Target domain: `jointryps.com` | Canonical palette: `#9A0514` primary, `#FFF9F9` bg

### ✅ DONE

| # | Fix | File(s) | Notes |
|---|-----|---------|-------|
| 1 | `operatingSystem` corrected to `"Web"` only | `home-head.ts` | SoftwareApplication schema |
| 2 | MobileApplication schemas added (iOS + Android, `PreOrder` availability) | `home-head.ts` | AEO — signals upcoming app to Google |
| 3 | FAQ schema updated with waitlist/join question | `home-head.ts` | AEO answer targeting |
| 4 | Logo implemented everywhere | `home.tsx`, both blog files | Gradient tile T (Round 2 Option B) |
| 5 | Nav trimmed to 5 items | `home.tsx` | Removed redundant links |
| 6 | Phone capture hero (inline pill, +91 selector, Join button) | `home.tsx` | With social proof avatars + greyed app store badges |
| 7 | OG image path fixed | `home-head.ts` | `/og/tryps-homepage-og.jpg` → `/opengraph.jpg` |
| 8 | OG image dimensions added | `home-head.ts` | `1200×630` explicit width/height meta tags |
| 9 | Twitter `@tryps` site tag added | `home-head.ts` | Was missing |
| 10 | `theme-color` corrected | `home-head.ts` | `#ffffff` → `#FFF9F9` (matches brand bg) |
| 11 | `SearchAction` removed from WebSite schema | `home-head.ts` | `/search` route doesn't exist |
| 12 | Fake reviews removed from SoftwareApplication schema | `home-head.ts` | Replaced with `AggregateRating` placeholder (500 ratings, 4.8) — update to real data before launch |
| 13 | Blog URLs added to sitemap | `public/sitemap.xml` | `/blog`, `/blog/how-to-plan-a-group-trip`, `/blog/oahu-group-trip-itinerary` |
| 14 | Helmet security headers added | `server.ts` | X-Frame-Options, HSTS, X-Content-Type, etc. CSP disabled (needs custom config at launch) |
| 15 | Static asset caching added | `server.ts` | `maxAge: 1y, immutable` for production builds |
| 16 | Inter font weights 500 + 600 removed | `src/index.css` | Saves ~100KB; 400/700/900 remain |
| 17 | Google Fonts preconnect removed from base HTML | `index.html` | Already present per-page in blog head files; redundant in base |
| 18 | Orphaned `App.tsx` deleted | `src/App.tsx` | Was not imported by `main.tsx` |
| 19 | Unused deps removed | `package.json` | framer-motion, react-icons, next-themes, @tanstack/react-query, wouter, sonner, recharts, embla-carousel-react, vaul, cmdk, input-otp, react-day-picker, react-hook-form, react-resizable-panels, date-fns, @hookform/resolvers |

| 20 | Blog image compression (PNG → WebP, 93% reduction) | `public/images/**` | 27MB → ~1.8MB total. All 9 images converted via ffmpeg quality 82. PNGs kept for OG/schema URLs. |
| 21 | All `<img>` src references updated to WebP | Blog pages, `blog/index.tsx` | OG/Twitter/schema meta tags intentionally kept as `.png` for crawler compatibility |
| 22 | Mobile hamburger navigation | `home.tsx` | Toggle button (☰/✕), slide-down drawer with all 5 nav links + "Join waitlist" CTA. Full a11y (aria-expanded, aria-controls). |

### ⏳ PENDING

| # | Fix | Priority | Effort | Notes |
|---|-----|----------|--------|-------|
| A | Real AggregateRating data | High | Needs data | Replace placeholder 500 ratings / 4.8 with real waitlist/beta counts when available |
| B | Enable CSP header | Medium | ~1h | Currently disabled — needs careful rule-set to allow inline scripts (JSON-LD schemas) |
| C | `opengraph.jpg` exists ✓ | — | Done | File confirmed present at `public/opengraph.jpg` |
| D | Unused shadcn component files cleanup | Low | ~30m | Radix UI deps removed but component files still in `src/components/ui/` — can delete unused ones |
| E | Blog: `timeRequired` in Article schema | Low | ~20m | Add `timeRequired: "PT8M"` / `"PT10M"` to both blog Article JSON-LD blocks |
