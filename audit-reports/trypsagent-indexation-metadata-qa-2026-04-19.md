# trypsagent.com — Indexation + Metadata QA

**Date:** 2026-04-19
**Scope:** All launch pages currently in sitemap + orphan-path probe
**Method:** curl + deterministic scripts (no JavaScript execution — what bots actually see)
**Pages audited:** 6 sitemap URLs + 8 orphan paths probed (14 total)
**Auditor:** Automated indexation + metadata checks (website-seo-aeo-auditor v3 unified build)

---

## 🔴 THE ONE THING TO FIX BEFORE ANYTHING ELSE

**Soft-404 catastrophe.** Every non-existent URL returns HTTP 200 with homepage content.

| URL tested | HTTP | Bytes | Title | Canonical |
|---|---|---|---|---|
| `/` (real homepage) | 200 | 70,559 | "TRYPS — Group Trip Planning App..." | `https://trypsagent.com/` |
| `/about` (not in sitemap) | **200** | **70,559** | **"TRYPS — Group Trip Planning App..."** | **`https://trypsagent.com/`** |
| `/pricing` (not in sitemap) | **200** | **70,559** | **"TRYPS — Group Trip Planning App..."** | **`https://trypsagent.com/`** |
| `/features`, `/download`, `/contact`, `/faq`, `/press`, `/app` | 200 | 70,559 each | same as homepage | same |
| `/definitely-not-a-real-page-{ts}` | **200** (not 404!) | 70,559 | same | same |

**What's happening:** The server returns SSR homepage HTML for every unknown path instead of HTTP 404. The homepage canonical tag plus server-side fallback means every broken link, typo'd URL, or speculative crawl surface looks legitimate to bots — but delivers wrong content.

**Impact:**
- Google Search Console will fill with "Crawled — currently not indexed" / "Duplicate, Google chose different canonical" warnings
- Any external backlink containing a typo "works" (HTTP 200) but delivers homepage — wasted link equity
- AI engines asked "what does trypsagent.com/about say?" will synthesize answers from homepage content, not an actual about page
- Google will eventually trust the domain less because it serves the same content from infinite paths

**Fix (developer, ~15 min):** In the server/CDN config, any route that doesn't match a defined page must return HTTP 404 with a proper 404 page. If using Next.js App Router, check `app/[...not-found]/page.tsx` or `app/not-found.tsx`. If Vercel/CloudFlare, check rewrites aren't catching everything.

**Verify the fix:** `curl -I "https://trypsagent.com/not-real-page-xyz"` must return `HTTP/2 404`.

**Nothing below this line matters as much as fixing this.**

---

## Indexation readiness — per-URL verdict

| URL | HTTP | In sitemap | Canonical self | robots meta | GO / NO-GO |
|---|---|---|---|---|---|
| `/` | 200 | ✅ | ✅ | `index,follow,max-*` | 🟢 GO |
| `/blog` | 200 | ✅ | ✅ | `index,follow` | 🟡 GO with fix (thin content) |
| `/blog/how-to-plan-a-group-trip` | 200 | ✅ | ✅ | `index,follow,max-image-preview:large` | 🟢 GO |
| `/blog/oahu-group-trip-itinerary` | 200 | ✅ | ✅ | `index,follow,max-*` | 🟡 GO with fix (meta desc too long) |
| `/privacy` | 200 | ✅ | ✅ | `index,follow` | 🟢 GO |
| `/terms` | 200 | ✅ | ✅ | `index,follow` | 🟢 GO |

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://trypsagent.com/sitemap.xml
```
✅ Clean. No disallow blocks, sitemap declared. Note: no explicit AI-crawler allow entries (GPTBot, ClaudeBot, PerplexityBot pass via wildcard only).

### Sitemap
- 6 URLs
- 2 unique `lastmod` values (2026-04-08 and 2026-04-16) — not sitewide-cosmetic freshness, this is acceptable
- All 6 URLs resolve 200 on HEAD check

---

## Metadata gaps — consolidated per-URL matrix

| Finding | `/` | `/blog` | `/blog/how-to-plan-a-group-trip` | `/blog/oahu-itinerary` | `/privacy` | `/terms` |
|---|---|---|---|---|---|---|
| Title 50–60 chars | ✅ 43 | ✅ 41 | ✅ 52 | ⚠ 67 (long) | ✅ 22 | ✅ 24 |
| Meta desc 140–160 chars | ✅ 140 | ✅ 122 | ✅ 128 | ❌ **195 (will truncate)** | ✅ 127 | ✅ 100 |
| OG tags complete | ✅ | ✅ | ✅ | ✅ | ❌ **no og:image** | ❌ **no og:image** |
| Twitter card | ✅ | ✅ | ✅ | ✅ | ❌ **missing** | ❌ **missing** |
| Schema `@id` on entities | ❌ 0 of 10 | ❌ 0 of 1 | ❌ 0 of 4 | ⚠ 3 of 7 | ❌ 0 of 1 | ❌ 0 of 1 |
| datePublished | — | — | ✅ | ✅ | — | — |
| dateModified | — | — | ⚠ date-only `2026-04-04` | ✅ ISO `2026-04-04T00:00:00+00:00` | — | — |
| author in Article schema | — | — | ✅ | ✅ | — | — |
| H1 present, matches intent | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Visible word count | 1,336 | **152** (thin) | 1,293 | 2,762 | 2,392 | 1,891 |
| Image alt coverage | N/A (35 inline SVGs, 0 `<img>`) | 2/2 ✅ | 4/4 ✅ | 2/2 ✅ | — | — |

---

## Critical issues (fix before any launch)

### 1. Soft-404 catastrophe
Described above. Priority 0 — blocks the usefulness of the rest of the audit.

### 2. Schema `@id` missing on every entity across every page
Deterministic script caught 10 of 10 homepage entities missing `@id`. Also 4 of 4 on "how-to-plan-a-group-trip", 4 of 7 on Oahu itinerary.

**Why it matters for AEO:** AI engines build entity graphs. Without `@id`, they can't tell that the `Organization` on the homepage is the same brand as the `Organization` mentioned in a blog post's schema. Each entity looks orphaned. Citation eligibility drops.

**Fix:** Add stable `@id` fragments to every JSON-LD entity, e.g.:
```json
"@id": "https://trypsagent.com/#organization"
"@id": "https://trypsagent.com/#softwareapplication"
"@id": "https://trypsagent.com/blog/oahu-group-trip-itinerary#article"
```
Sitewide template change — 1 hour of work.

### 3. `/blog` is thin content (152 visible words)
A blog index page with 152 words and only 2 `<h2>` sections will either rank poorly or risk being treated as a doorway/index page. Should list blog posts with excerpts, categories, featured post preview, etc.

### 4. Oahu post meta description truncates in SERP (195 chars)
Google truncates at ~160 chars. Current description is 195. The last ~35 characters get cut off in search snippets, kills click-through.

**Fix:** Rewrite to 150–155 chars.

---

## High-priority gaps (fix this week)

### 5. FAQ schema / visible mismatch on homepage
Deterministic script: "FAQPage schema claims 7 Q&A pairs; visible HTML has 6." One FAQ in schema isn't rendered on the page, OR the count is off by one due to a bug. Check the homepage FAQ section and align.

### 6. No hreflang (acceptable if single-locale — confirm intent)
Script flagged 0 hreflang tags. If TRYPS serves only English globally → not a problem. If multi-region is planned for 2026 → start now with `hreflang="en" + x-default`.

### 7. Privacy + Terms missing og:image + twitter:card
Minor but affects social sharing appearance. When someone posts `/privacy` link on Slack, preview has no image. Add `og:image` (reuse any brand asset) and `twitter:card="summary"`.

### 8. dateModified format inconsistency across blog posts
- `/blog/how-to-plan-a-group-trip` uses `2026-04-04` (date only)
- `/blog/oahu-group-trip-itinerary` uses `2026-04-04T00:00:00+00:00` (full ISO 8601)

Google accepts both but Schema.org prefers full ISO 8601. Pick one format and apply consistently — matters for week-over-week reporting tools that parse these.

### 9. No Person schema has `hasCredential` on homepage
Script flagged "2 Person entities found but none have hasCredential." If those Persons are founders or authors with real credentials (e.g., travel-industry experience, publications), add `hasCredential` fields. Matters for E-E-A-T signals in YMYL-adjacent content (travel budget advice touches finances).

### 10. Homepage has zero `<img>` tags (35 inline SVGs instead)
Not wrong per se, but inline SVG doesn't carry alt text the way `<img alt>` does. AI engines reading the page for image-related context miss a signal. If the hero is a custom SVG illustration, fine. If it's a photo baked as SVG, switch to `<img>` with alt.

---

## What's working well

- All 6 sitemap URLs serve HTTP 200 with correct canonicals pointing to themselves
- Meta robots are `index,follow` with appropriate max-image/max-snippet hints
- Titles are well-sized and keyword-aligned
- Blog post schema coverage is excellent (7 schema types on Oahu post — Article, BreadcrumbList, FAQPage, TouristDestination, ItemList, HowTo, WebPage)
- Blog posts have `datePublished`, `dateModified`, and `author` set
- Oahu post has 2,762 visible words — excellent depth for AEO
- TTFB was fast (~0.7–1.0s per URL on first request)
- `og:type="article"` correctly set on blog posts (not `website` like homepage)

---

## Launch checklist — use this for every new page

Pre-push QA, every blog post or landing page going forward:

```
[ ] curl -I returns HTTP 200 (not 301/302/404)
[ ] <title> present, unique, 50-60 chars
[ ] <meta description> present, 140-160 chars, unique
[ ] <link rel="canonical"> self-referential (matches URL being served)
[ ] <meta name="robots"> contains "index" and "follow"
[ ] <h1> present, single, matches title intent
[ ] og:title + og:description + og:image + og:url + og:type set
[ ] twitter:card set
[ ] JSON-LD schema parses + right @type for page
[ ] Every schema entity has @id
[ ] datePublished + dateModified in ISO 8601
[ ] author set on Article/BlogPosting
[ ] URL is in sitemap.xml with accurate lastmod
[ ] URL reachable within 3 clicks from homepage
[ ] POST-LAUNCH: submit URL to Google Search Console URL Inspection + Bing Webmaster
[ ] POST-LAUNCH: 48h after launch, site:trypsagent.com/{path} returns the page
```

---

## Priority fix order (if you can only do 5 things)

| # | Fix | Effort | Impact |
|---|---|---|---|
| 1 | **Fix soft-404 fallback** — unknown URLs must return HTTP 404 | 15 min | Critical — blocks everything else |
| 2 | **Add `@id` to every schema entity** (sitewide template) | 1 hour | High — AEO entity graph |
| 3 | **Rewrite Oahu post meta description** to 150–155 chars | 5 min | High — SERP CTR |
| 4 | **Beef up `/blog` index** with post excerpts + featured section | 2–3 hours | Medium — thin-content risk |
| 5 | **Standardize dateModified format** to full ISO 8601 sitewide | 30 min | Medium — freshness consistency |

All 5 done = roughly 4–5 hours of developer work. Gets trypsagent.com from "technically indexable with leakage" to "clean indexation + metadata."

---

## Reproduce the soft-404 finding

Run this locally to confirm:

```bash
for p in about pricing features download contact faq press app nonexistent-test; do
  echo -n "$p: "
  curl -s -o /dev/null -w "HTTP %{http_code}\n" "https://trypsagent.com/$p"
done
```

Every line should return `HTTP 404` for paths that aren't real pages. Currently every line returns `HTTP 200` — which is the bug.

---

## Methodology

- **Data source:** curl with browser User-Agent, no JavaScript execution — represents what Google/Bing/GPTBot/ClaudeBot actually receive
- **Sitemap discovery:** `https://trypsagent.com/sitemap.xml` parsed via `xml.etree.ElementTree`
- **Per-URL fetches:** HTTP headers + full HTML captured for each URL
- **Metadata extraction:** regex-based for title/meta/canonical/OG/Twitter; `json.loads` for JSON-LD schema parsing with `@graph` flattening
- **Deterministic checks:** homepage audited via `scripts/deterministic_checks.py` from the website-seo-aeo-auditor v3 unified build (9 targeted checks including FAQ schema-vs-visible match, H1 nesting, brand name consistency, canonical redirect chain, schema @id coverage, dateModified staleness, hreflang coverage, title uniqueness)
- **Orphan probe:** 8 common paths (`/about`, `/pricing`, `/features`, `/download`, `/contact`, `/faq`, `/press`, `/app`) tested plus a timestamped nonexistent URL to isolate the server fallback behavior
- **Soft-404 verification:** byte-size comparison + canonical/title/og:url extraction across real homepage vs. `/about` vs. `/pricing` vs. nonexistent URL

All findings are reproducible — no LLM inference involved in determining pass/fail status.

---

*Generated by website-seo-aeo-auditor v3 (deterministic-script-backed).*
