# trypsagent.com — Robots.txt + AI/Search Bot Crawl-Policy QA

**Date:** 2026-04-21
**Scope:** robots.txt directive correctness + per-bot access evaluation across 16 crawlers + delta check on issues flagged 2026-04-19
**Method:** curl + deterministic `check_robots_txt.py` (16-bot evaluation with RFC 9309 precedence rules)
**Prior audit:** [`trypsagent-indexation-metadata-qa-2026-04-19.md`](./trypsagent-indexation-metadata-qa-2026-04-19.md)

---

## TL;DR

**Robots.txt is functionally correct but not optimized.** All bots can access all content, Google can index everything, sitemap is declared. But the file has 2 configuration choices that are sub-optimal for AEO and one that will actively hurt you: the 1-year cache header.

**More urgent:** **zero issues from the 2026-04-19 audit have been fixed in the 2 days since.** The soft-404 catastrophe still returns HTTP 200 for every made-up URL. Schema `@id` still missing on 10 of 10 homepage entities. Oahu post meta description still 195 chars. This audit will keep repeating the same findings until those fixes land.

---

## Part 1 — Robots.txt audit

### Current robots.txt

```
User-agent: *
Allow: /

Sitemap: https://trypsagent.com/sitemap.xml
```

**File size:** 68 bytes · **HTTP status:** 200 · **Last-Modified:** 2026-04-17

### Response headers

```
HTTP/2 200
content-type: text/plain; charset=utf-8
cache-control: public, max-age=31536000, immutable   ← ⚠ ONE YEAR CACHE
content-security-policy-report-only: default-src 'self'; ...
```

### Deterministic 16-bot check results

| Check | Status | Evidence |
|---|---|---|
| `robots_reachable` | ✅ PASS | HTTP 200, 68 bytes, 1 user-agent group, 1 sitemap directive |
| `robots_declares_sitemap` | ✅ PASS | `Sitemap: https://trypsagent.com/sitemap.xml` |
| `googlebot_allowed` | ✅ PASS | Allowed for `/` via wildcard group |
| `ai_crawlers_all_allowed` | ⚠ WARN | 0 of 10 AI crawlers explicitly listed. All pass via wildcard `*` only. |
| `target_path_not_disallowed` | ✅ PASS | Target path `/` allowed for all 16 bots checked |

### Per-bot real-world access verification

Fetched homepage with each major bot's User-Agent string — confirms server serves identical content to every crawler (no cloaking):

| Bot | HTTP | Bytes served |
|---|---|---|
| Googlebot/2.1 | 200 | 70,559 |
| GPTBot/1.0 | 200 | 70,559 |
| ClaudeBot/1.0 | 200 | 70,559 |
| PerplexityBot/1.0 | 200 | 70,559 |
| anthropic-ai | 200 | 70,559 |
| Bingbot/2.0 | 200 | 70,559 |

✅ **No cloaking detected.** All bots receive the same HTML as a regular browser.

### The three issues worth naming

#### Issue 1 — 🔴 1-year cache on robots.txt (max-age=31536000, immutable)

**What it means:** The server tells bots "cache this robots.txt for 365 days and never re-check." The `immutable` directive reinforces: "this file will never change, don't ask again."

**Why it's a problem:** If TRYPS ever needs to change robots.txt — add a new Disallow rule, block a malicious crawler, allow a new AI engine explicitly — respectful bots that honor the cache header won't see the change for up to a year. Googlebot tends to ignore this and re-fetch every ~24h, but OpenAI/Anthropic crawlers that are more polite may honor it.

**Fix:** Change the cache-control header for `/robots.txt` to `public, max-age=86400` (24h) or `max-age=3600` (1h). Remove `immutable`. Usually a 2-line change in server config or CDN rule.

**Priority:** Medium. Doesn't cause active damage today, but limits ability to respond if issues emerge.

#### Issue 2 — ⚠ No explicit AI crawler entries

Currently all AI bots (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, anthropic-ai, Claude-Web, CCBot, Applebot-Extended, Bytespider) are allowed by default via the wildcard `*` rule.

**Why explicit allow matters for AEO:** Many sites block AI crawlers by default (either paranoia or licensing concerns). An explicit `Allow: /` for GPTBot/ClaudeBot/etc. signals actively welcomed, which some search systems use as a trust/crawl-priority signal.

**Recommended robots.txt:**

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

**Priority:** Low-Medium. Directional signal. Deterministic auditor marked it as a WARN, not a FAIL.

#### Issue 3 — ⚠ Single wildcard group means no future flexibility

The current file has one group (`User-agent: *`). If you ever want to allow-everything-except-one-bot (e.g., block a scraper), you'd need to restructure. Adding the explicit bot entries above pre-solves this.

Not really a current issue — an artifact of Issue 2. Both fix together.

---

## Part 2 — Delta check: are the 2026-04-19 issues fixed?

**Short answer: no. Zero issues fixed.**

Comparing byte-for-byte against the 2026-04-19 audit, every page returns identical size with identical content. 2 days have passed, site hasn't been touched. This isn't a delta report, it's a "site is frozen" report.

### Per-issue status

| # | Issue from 2026-04-19 audit | Status 2026-04-21 |
|---|---|---|
| 1 | **Soft-404 catastrophe** — every unknown URL returns HTTP 200 homepage content | 🔴 **NOT FIXED** — `/about`, `/pricing`, `/features`, `/download`, `/contact`, `/faq`, `/press`, `/app` all still return HTTP 200 with homepage title/canonical/content. `/nonexistent-{timestamp}` also still HTTP 200. |
| 2 | Schema `@id` missing on every entity | 🔴 **NOT FIXED** — homepage 0/10, `/blog` 0/1, `/blog/how-to-plan-a-group-trip` 0/4, `/privacy` 0/1, `/terms` 0/1. Oahu post still 3/7. |
| 3 | `/blog` thin content (152 visible words) | 🔴 **NOT FIXED** — still 152 words, 2 H2s |
| 4 | Oahu meta description 195 chars (truncates) | 🔴 **NOT FIXED** — still 195 chars |
| 5 | FAQ schema (7) vs visible (6) mismatch on homepage | 🔴 **NOT FIXED** — same 9 schema blocks, same content |
| 6 | No hreflang tags sitewide | 🔴 **NOT FIXED** — 0 hreflang across all 6 URLs |
| 7 | Privacy + Terms missing og:image + twitter:card | 🔴 **NOT FIXED** — both still missing |
| 8 | dateModified format inconsistency across blog posts | 🔴 **NOT FIXED** — `/blog/how-to-plan-a-group-trip` still `2026-04-04` (date only), `/blog/oahu-group-trip-itinerary` still `2026-04-04T00:00:00+00:00` |
| 9 | Person schema missing `hasCredential` (homepage) | 🔴 **NOT FIXED** — no change to schema |
| 10 | Homepage has zero `<img>` tags (35 inline SVGs) | 🔴 **NOT FIXED** — same structure |

### Byte-for-byte comparison

| URL | Size 2026-04-19 | Size 2026-04-21 | Changed? |
|---|---|---|---|
| `/` | 70,559 | 70,559 | No |
| `/blog` | 11,032 | 11,032 | No |
| `/blog/how-to-plan-a-group-trip` | 45,789 | 45,789 | No |
| `/blog/oahu-group-trip-itinerary` | 72,730 | 72,730 | No |
| `/privacy` | 39,966 | 39,966 | No |
| `/terms` | 26,508 | 26,508 | No |

Sitemap: still 6 URLs · still 2 unique `lastmod` values (`2026-04-08`, `2026-04-16`). No new content published. No existing content edited.

---

## Part 3 — Combined priority list (fresh + carried forward)

| # | Fix | Source | Effort | Impact |
|---|---|---|---|---|
| 1 | **Fix soft-404 fallback** — unknown URLs must return HTTP 404 | 2026-04-19 | 15 min | Critical |
| 2 | **Fix robots.txt cache header** — change max-age from 1 year to 24 hours, remove `immutable` | 2026-04-21 | 5 min | Medium |
| 3 | **Add `@id` to every schema entity** (sitewide template) | 2026-04-19 | 1 hour | High |
| 4 | **Add explicit AI crawler allow entries** to robots.txt | 2026-04-21 | 5 min | Low-Medium |
| 5 | **Rewrite Oahu post meta description** to 150–155 chars | 2026-04-19 | 5 min | High |
| 6 | **Beef up `/blog` index** with post excerpts + featured section | 2026-04-19 | 2–3 hours | Medium |
| 7 | **Standardize dateModified** to full ISO 8601 sitewide | 2026-04-19 | 30 min | Medium |
| 8 | Privacy + Terms og:image + twitter:card | 2026-04-19 | 10 min | Low |
| 9 | Fix FAQ schema-vs-visible mismatch (7 vs 6) on homepage | 2026-04-19 | 15 min | Low |

**Total time to close everything:** ~5 hours of dev work.

**Total impact if closed:** trypsagent.com goes from "technically indexable but leaky, signals not optimized for AEO" to "clean indexation + AI-welcomed + consistent signals." Expected citation-rate lift is genuine but unpredictable (no calibration data yet for TRYPS specifically).

---

## Part 4 — Verification commands for each fix

### Verify soft-404 fix
```bash
for p in about pricing features download contact faq press app not-real-xyz; do
  echo -n "$p: "
  curl -s -o /dev/null -w "HTTP %{http_code}\n" "https://trypsagent.com/$p"
done
```
**Expected after fix:** every line returns `HTTP 404`.
**Current:** every line returns `HTTP 200`.

### Verify robots.txt cache fix
```bash
curl -I "https://trypsagent.com/robots.txt" | grep -i cache-control
```
**Expected after fix:** `cache-control: public, max-age=86400` (or shorter).
**Current:** `cache-control: public, max-age=31536000, immutable`.

### Verify schema @id fix
```bash
curl -s "https://trypsagent.com/" | grep -o '"@id"[^,]*' | head
```
**Expected after fix:** multiple lines showing `"@id":"https://trypsagent.com/#organization"` and similar.
**Current:** zero lines (grep returns nothing).

### Verify AI crawler allow fix
```bash
curl -s "https://trypsagent.com/robots.txt"
```
**Expected after fix:** file contains blocks like `User-agent: GPTBot\nAllow: /`.
**Current:** only `User-agent: *`.

### Verify dateModified standardization
```bash
curl -s "https://trypsagent.com/blog/how-to-plan-a-group-trip" | grep -o '"dateModified"[^"]*"[^"]*"'
```
**Expected after fix:** returns ISO 8601 with time component, e.g. `2026-04-04T00:00:00+00:00`.
**Current:** returns date-only `2026-04-04`.

---

## Methodology

- **robots.txt parsing:** `scripts/check_robots_txt.py` from the website-seo-aeo-auditor v3 unified build, evaluating 16 bots against RFC 9309 precedence rules (specific UA match > wildcard, longest-path match wins, Allow breaks ties)
- **Per-bot UA check:** `curl -A "<bot-ua-string>"` against homepage to confirm server returns identical bytes to every crawler (cloaking detection)
- **X-Robots-Tag header check:** `curl -I` against 4 representative URLs (homepage, blog index, blog post, privacy)
- **Soft-404 verification:** 8 common orphan paths + one timestamped nonexistent path, comparing HTTP status, byte size, title, canonical against homepage
- **Metadata delta:** re-fetched all 6 sitemap URLs, extracted same fields as 2026-04-19 audit, compared byte-for-byte
- **Sitemap re-check:** parsed `sitemap.xml` via `xml.etree.ElementTree`, counted URLs and unique `lastmod` values

All checks are reproducible — no LLM inference in pass/fail determination.

---

## What changed between audits

**Site-side:** nothing. Byte-identical content on every audited page. No new URLs in sitemap. Same `lastmod` values.

**Audit-side:** expanded scope to cover robots.txt + per-bot crawl policy (primary ask for this run). Added cache-header check on robots.txt itself. Added per-bot UA cloaking verification.

---

*Generated by website-seo-aeo-auditor v3 (deterministic-script-backed).*
