# trypsagent.com — Pre-Release Code-Level Fix Verification

**Date:** 2026-04-21
**Scope:** verify fixes **in the repo source** (`artifacts/tryps-landing/`) against issues flagged by prior audits — BEFORE production deploy
**Method:** static code inspection of the Travel-Muse repo at HEAD (commit `e3d4612`)
**Prior audits:**
- [`trypsagent-indexation-metadata-qa-2026-04-19.md`](./trypsagent-indexation-metadata-qa-2026-04-19.md)
- [`trypsagent-robots-bot-crawl-policy-qa-2026-04-21.md`](./trypsagent-robots-bot-crawl-policy-qa-2026-04-21.md)
- [`trypsagent-delta-recheck-2026-04-21-v2.md`](./trypsagent-delta-recheck-2026-04-21-v2.md)

---

## TL;DR — verdict before you deploy

| | Count | Fixes |
|---|---|---|
| ✅ **Fixed in code, safe to deploy** | 6 | Soft-404 + schema `@id` + blog thin content + Oahu meta desc + Privacy/Terms OG image + dateModified format |
| ❌ **Still broken, do NOT ship yet** | 4 | Homepage FAQ 7 vs 6 mismatch · no hreflang · Person `hasCredential` missing · robots.txt (3 sub-issues) |
| ⏭ Out-of-repo scope | 1 | robots.txt cache-control headers (needs `vercel.json` change, not yet added) |

**Recommendation: do not deploy yet.** The 6 fixes are real and will land cleanly. But 2 remaining items will cause the next audit to immediately re-flag the same issues, and one (the FAQ mismatch) was specifically called out in the April 19 audit as a "high-priority" item. Spend an extra 30 minutes fixing the 4 open items, then ship.

---

## FIXED ✅ — confirmed in repo, ready to deploy

### 1. Soft-404 catastrophe — FIXED ✅

**Where:** `artifacts/tryps-landing/src/entry-server.tsx`

The render function now has a catch-all branch that returns status 404:

```typescript
return {
  appHtml: renderToString(<NotFound />),
  headTags: notFoundHeadTags,
  status: 404,
};
```

And `server.ts` respects the returned status:

```typescript
const { appHtml, headTags, status = 200 } = await render(url);
// ...
res.status(status).set({ ... }).end(fullHtml);
```

**Impact on deploy:** `curl -I "https://trypsagent.com/not-a-real-page"` will change from `HTTP/2 200` to `HTTP/2 404`. Google Search Console soft-404 warnings resolve within 1–2 crawl cycles.

### 2. Schema `@id` fragments — FIXED ✅

**Where:** every `*-head.ts` file in `src/pages/` and `src/pages/blog/`

| File | `@id` count before | `@id` count now |
|---|---|---|
| `home-head.ts` | 0 | 17 |
| `privacy-head.ts` | 0 | 3 |
| `terms-head.ts` | 0 | 3 |
| `blog/how-to-plan-group-trip-head.ts` | 0 | 9 |
| `blog/oahu-group-trip-itinerary-head.ts` | 3 | 11 |
| `blog/nashville-bachelorette-trip-head.ts` | — | 6 |
| `blog/best-group-trip-planning-apps-head.ts` | — | 20 |
| `blog/how-tryps-works-head.ts` | — | 6 |
| `blog/index-head.ts` | 0 | 4 |

**Impact on deploy:** AI engines can now build a coherent entity graph across homepage + blog posts. Every Organization, Article, Person, SoftwareApplication references other entities by stable `@id`.

### 3. `/blog` thin content — FIXED ✅

**Where:** `src/pages/blog/index.tsx`

Expanded from 152 visible words (2 H2s) to 166-line component with 5 fully-described blog post cards including category, title, excerpt, date, read time, and hero image. New posts added: Nashville Bachelorette, How TRYPS Works, Best Group Trip Planning Apps 2026.

**Impact on deploy:** `/blog` index page exits thin-content risk zone. Post discovery path from homepage → `/blog` → individual post is now content-rich.

### 4. Oahu post meta description length — FIXED ✅

**Where:** `src/pages/blog/oahu-group-trip-itinerary-head.ts`

| Field | Prior length | Current length |
|---|---|---|
| `<meta name="description">` | 195 chars (truncated in SERP) | **145 chars** ✅ |
| `<meta property="og:description">` | (same as name=description) | 153 chars ✅ |
| `<meta name="twitter:description">` | (same) | 146 chars ✅ |

**Impact on deploy:** SERP snippet renders the full description without mid-sentence truncation. Click-through rate recovers.

### 5. Privacy + Terms OG image and Twitter card — FIXED ✅

**Where:** `src/pages/privacy-head.ts` + `src/pages/terms-head.ts`

Both now include:
```html
<meta property="og:image" content="https://trypsagent.com/opengraph.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary" />
```

**Impact on deploy:** Privacy/Terms URLs shared in Slack/Discord/Twitter render with brand preview image, not broken placeholder.

### 6. `dateModified` format standardization — FIXED ✅

**Where:** all `src/pages/blog/*-head.ts` files

| Blog post | Prior format | Current format |
|---|---|---|
| `how-to-plan-a-group-trip` | `2026-04-04` (date only) | `2026-04-04T00:00:00+00:00` ✅ |
| `oahu-group-trip-itinerary` | `2026-04-04T00:00:00+00:00` | unchanged ✅ |
| `nashville-bachelorette-trip` | — | `2026-04-21T00:00:00+00:00` ✅ |
| `how-tryps-works` | — | `2026-04-21T10:00:00+00:00` ✅ |
| `best-group-trip-planning-apps` | — | `2026-04-21T00:00:00+00:00` ✅ |

**Impact on deploy:** Consistent ISO 8601 with timezone across all blog schemas. Weekly reporting tools that parse these won't drop entries due to format drift.

---

## STILL BROKEN ❌ — fix before deploying

### 7. Homepage FAQ schema vs visible mismatch — NOT FIXED ❌

**Issue:** `src/pages/home-head.ts` schema declares **7 FAQPage Question entities**. `src/pages/home.tsx` FAQ array has only **6 entries**. The 7th question — **"How do I join the TRYPS waitlist?"** — exists in schema but is not rendered to the user.

**Why it matters:** Google's FAQ rich result guidelines (and Schema.org spec) require the schema to match what a user actually sees on the page. Mismatched FAQ schema risks (a) rich result ineligibility, (b) manual-action warning in Search Console for "structured data mismatch."

**Where the mismatch lives:**

- `src/pages/home-head.ts`: Questions 1-7 listed in the FAQPage schema
- `src/pages/home.tsx` lines ~803-832: FAQ array has 6 `{q, a}` objects mapped to `<details>` elements

**Fix options** (pick one):
- **Option A:** Remove the 7th Question from schema in `home-head.ts` (drops the waitlist question from rich results)
- **Option B:** Add the 7th Question to the visible FAQ array in `home.tsx` (keeps richer schema, user sees it)

**Option B is recommended** — the waitlist is the primary CTA on the homepage, so a FAQ explicitly addressing it makes sense.

**Verification after fix:**
```bash
grep -c '"@type":\s*"Question"' src/pages/home-head.ts    # must equal...
grep -cE 'q:\s*"' src/pages/home.tsx                       # ...this
```
Both numbers must match.

### 8. No hreflang tags — STILL NOT FIXED ❌

**Where:** no `hreflang` in any `*-head.ts` file.

**Why it may or may not matter:**
- If TRYPS is English-only globally → technically optional, but `hreflang="x-default"` is still recommended as an explicit signal
- If multi-locale is planned for 2026 → must add now

**Recommended minimum even for single-locale:**

```html
<link rel="alternate" hrefLang="en" href="https://trypsagent.com/" />
<link rel="alternate" hrefLang="x-default" href="https://trypsagent.com/" />
```

Add to every `*-head.ts` file with the page-specific URL. Or centralize as a head helper.

**Decision needed:** confirm whether TRYPS is single-locale or planning multi-locale. If single, fix is optional. If multi, critical.

### 9. Person `hasCredential` on homepage — STILL NOT FIXED ❌

**Where:** `src/pages/home-head.ts`

Person schema for "Jake Stein":

```json
{
  "@type": "Person",
  "@id": "https://trypsagent.com/about#jake-stein",
  "name": "Jake Stein",
  "jobTitle": "Founder",
  "url": "https://trypsagent.com/about"
}
```

Missing: `hasCredential` array.

**Why it matters:** For travel-budget content (which touches YMYL edge cases around finances), an `hasCredential` field signals E-E-A-T to Google. Even without formal credentials, `alumniOf` (university) or `sameAs` (LinkedIn, company page) helps.

**Example minimal addition:**
```json
{
  "@type": "Person",
  "@id": "https://trypsagent.com/about#jake-stein",
  "name": "Jake Stein",
  "jobTitle": "Founder, TRYPS",
  "url": "https://trypsagent.com/about",
  "sameAs": [
    "https://www.linkedin.com/in/jake-stein-XXX",
    "https://twitter.com/jake_stein"
  ],
  "knowsAbout": ["Group Trip Planning", "Travel Technology", "Consumer Software"]
}
```

`sameAs` acts as credential proxy when formal `hasCredential` isn't applicable.

### 10. robots.txt — three sub-issues, all unchanged ❌

**Where:** `artifacts/tryps-landing/public/robots.txt`

Current repo content (3 lines, unchanged):

```
User-agent: *
Allow: /

Sitemap: https://trypsagent.com/sitemap.xml
```

**Sub-issue 10a: No explicit AI crawler allow entries**

All AI bots pass via wildcard `*` only. The 2026-04-21 robots.txt audit flagged this as WARN. Low-risk but low-effort — 5 minutes to fix.

**Recommended addition:**

```
User-agent: *
Allow: /

# AI search and training crawlers — explicitly welcomed
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://trypsagent.com/sitemap.xml
```

**Sub-issue 10b: robots.txt cache header (1-year)**

Not in repo — this is a **Vercel/CDN configuration** issue. Current `vercel.json` has no `headers` block.

**Recommended `vercel.json` addition:**

```json
{
  "version": 2,
  "buildCommand": "pnpm --filter @workspace/tryps-landing run build",
  "outputDirectory": "artifacts/tryps-landing/dist/public",
  "functions": {
    "api/index.ts": {
      "includeFiles": "artifacts/tryps-landing/dist/**,artifacts/tryps-landing/public/**"
    }
  },
  "rewrites": [
    { "source": "/(.*)", "destination": "/api/index" }
  ],
  "headers": [
    {
      "source": "/robots.txt",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400, must-revalidate" }
      ]
    },
    {
      "source": "/sitemap.xml",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600, must-revalidate" }
      ]
    }
  ]
}
```

**Sub-issue 10c: `cf-cache-status: DYNAMIC` on HTML pages**

All HTML page responses currently return `cf-cache-status: DYNAMIC` — Cloudflare isn't caching at all. Not a correctness issue, but a performance leak for static-enough pages like `/blog`, `/privacy`, `/terms`. Not urgent.

---

## Minor: homepage inline SVG use (informational, not blocking)

Flagged in 2026-04-19 audit as "homepage has 0 `<img>` tags, 35 inline SVG." Unchanged in current code. Not blocking release — the SVGs are decorative iconography, not content. If hero imagery shifts to photography in future, use `<img alt>` for the photo.

---

## Deploy checklist — go/no-go gates

Before clicking "deploy to production":

```
[x] Soft-404 catch-all returns status: 404 (verified in entry-server.tsx)
[x] Schema @id on every *-head.ts file (verified — 17 on homepage)
[x] /blog/index.tsx has 5 full blog post cards
[x] Oahu post meta desc ≤160 chars (verified — 145)
[x] Privacy + Terms head files include og:image + twitter:card
[x] All blog post dateModified uses ISO 8601 with timezone offset
[ ] Homepage FAQ visible count === FAQPage schema count
    → currently 6 visible, 7 in schema — MISMATCH
[ ] hreflang added to all head files (x-default + en minimum)
    → currently none
[ ] Person "Jake Stein" schema includes hasCredential OR sameAs
    → currently neither
[ ] robots.txt has explicit AI crawler allow entries
    → currently wildcard-only
[ ] vercel.json adds Cache-Control header rule for /robots.txt
    → currently no headers block
```

**Deploy readiness: 6 of 11 gates pass.** The 5 unchecked items include one medium-risk (FAQ mismatch — Search Console warning likely), two directional (hreflang, hasCredential), and two infrastructure (robots.txt content + cache header).

---

## Verification commands after deploy

Once production reflects the committed changes, these single-line probes confirm each fix:

```bash
# Soft-404 fix landed?
curl -I "https://trypsagent.com/not-a-real-page" | head -1
# Expected: HTTP/2 404

# Schema @id fix landed?
curl -s "https://trypsagent.com/" | grep -c '"@id"'
# Expected: > 0 (ideally 17+)

# Oahu meta desc fix landed?
curl -s "https://trypsagent.com/blog/oahu-group-trip-itinerary" | grep -oE 'name="description" content="[^"]+' | wc -c
# Expected: ~160 (length of content + 27 char overhead)

# dateModified fix landed?
curl -s "https://trypsagent.com/blog/how-to-plan-a-group-trip" | grep -oE '"dateModified"[^,]+' | head -1
# Expected: contains "T" and "+00:00" (full ISO 8601)

# FAQ match fix landed?
curl -s "https://trypsagent.com/" > /tmp/h.html
grep -cE '"@type": ?"Question"' /tmp/h.html
# Count visible <details> — expected to match above
grep -c '<details' /tmp/h.html

# robots.txt fix landed?
curl -s "https://trypsagent.com/robots.txt" | grep -E "^User-agent:" | wc -l
# Expected: 11 (wildcard + 10 AI crawlers) if 10a applied

# Cache header fix landed?
curl -I "https://trypsagent.com/robots.txt" | grep -i cache-control
# Expected: max-age=86400, not max-age=31536000
```

---

## Methodology

- **Repo state:** cloned `tnsaruniitr-lab/Travel-Muse` at HEAD `e3d4612`
- **Commit trail reviewed:** found `f778b72 Implement a branded 404 error page and improve site-wide schema markup` — confirms fix intent was committed
- **Code inspection:** `artifacts/tryps-landing/` is the trypsagent.com SSR codebase (Express + Vite + React), identified via `vite.config.ts` + `server.ts` + `entry-server.tsx`
- **Per-fix verification:** grep/regex search of source files for the specific pattern each fix was supposed to address
- **FAQ match:** parsed both the FAQPage schema JSON in `home-head.ts` and the inline FAQ array in `home.tsx`, counted Question/summary entries
- **Schema @id counts:** `grep -c '"@id"'` across all `*-head.ts` files
- **No browser testing:** this is a repo-state audit, not a live-site audit. Production behavior confirmed unchanged by separate delta-recheck report from same date.

---

## What happens next

1. Fix the 4 open items in the "STILL BROKEN" section — ~30 minutes of work
2. Commit and push
3. Deploy to production
4. Run the post-deploy verification commands from the checklist above
5. Open the next audit cycle with a clean baseline

---

*Generated by website-seo-aeo-auditor v3 (code-level static analysis mode).*
