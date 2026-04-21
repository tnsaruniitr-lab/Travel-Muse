# TRYPS SEO/AEO Maintenance Rules

## Where everything lives

Every page's metadata is in a dedicated `*-head.ts` file in `src/pages/`. Never put meta tags or JSON-LD inside React components — they won't be picked up by crawlers. The only files to edit are:

| Page | File |
|---|---|
| Homepage | `src/pages/home-head.ts` |
| Blog index | `src/pages/blog/index-head.ts` |
| Each blog post | `src/pages/blog/[slug]-head.ts` |
| Privacy / Terms | `src/pages/privacy-head.ts`, `terms-head.ts` |

---

## Rules for every page

**Title** — Max 60 characters. Must include the primary keyword and end with `| TRYPS` for non-homepage pages.

**Description** — 140–160 characters. Must be a complete standalone sentence that answers what the page is about. No truncation.

**Canonical** — Must exactly match `https://trypsagent.com/[path]`. Never relative URLs, never trailing slash inconsistency.

**Robots** — Always `index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1`. Never change this unless intentionally blocking a page.

**OG image** — Must be `1200×630px`, hosted at `trypsagent.com`, referenced with full absolute URL including width/height meta tags.

---

## JSON-LD schemas — required per page type

### Homepage must always have all of these

- `Organization` — company info, sameAs social links
- `WebSite`
- `SoftwareApplication` — with `featureList`, `aggregateRating`, `offers`
- `HowTo` — the 4-step how it works flow
- `FAQPage` — all 7 questions and full answers
- `BreadcrumbList`
- `WebPage` with `speakable` pointing to `.quick-answer`, `h1`, `#faq-title`

### Each blog post must always have

- `Article` — with `datePublished`, `dateModified`, `author`, `publisher.logo`
- `HowTo` or `FAQPage` (whichever matches the content — both if applicable)
- `BreadcrumbList` — two levels: Blog → Article

---

## AEO-specific rules (ChatGPT, Perplexity, Google AI Mode)

1. **The `.quick-answer` CSS class** — there must be one block per page with this class containing a 2–3 sentence direct answer to the page's primary question. This is what the `speakable` schema points to — removing it kills AEO citations.

2. **FAQ questions must be phrased exactly as a user would ask** — not as headings, not as statements. The `acceptedAnswer` must be a complete, self-contained answer (assume the reader has no context).

3. **Never shorten FAQ answers** — answer engines quote them verbatim. Every answer should make sense on its own outside the page.

4. **HowTo steps** — each step's `text` field must be one clear action sentence. Never vague like "get started" — be specific.

5. **`dateModified` in Article schema** — update this every time a blog post is meaningfully edited. Stale dates reduce crawl priority.

---

## Adding a new blog post — checklist

- [ ] Create `src/pages/blog/[slug]-head.ts` — copy an existing one as template
- [ ] Update `title`, `description`, `canonical`, `og:url`, `og:image` for the new post
- [ ] Add `Article` schema with correct `datePublished` and `dateModified`
- [ ] Add `HowTo` or `FAQPage` schema matching the content
- [ ] Add `BreadcrumbList` with correct slug
- [ ] Add the post to `src/pages/blog/index-head.ts` if the index page lists posts
- [ ] Add one `.quick-answer` div in the React component
- [ ] Update `public/sitemap.xml` with the new URL and today's `<lastmod>` date

---

## What must never be changed

- The `canonical` URL format — any change here splits link equity across URLs
- The `speakable` CSS selectors (`.quick-answer`, `h1`, `#faq-title`) — changing class names breaks AEO without any visible warning
- The `Organization` schema `sameAs` array — social links here are used by knowledge panels
- The `robots` meta content — accidental `noindex` kills the page silently
- `public/sitemap.xml` and `public/robots.txt` — these are static files, do not let a framework overwrite them

---

## Verification after any change

1. Paste the live URL into [search.google.com/test/rich-results](https://search.google.com/test/rich-results) — every schema type should show as valid
2. Check [validator.schema.org](https://validator.schema.org) for JSON-LD errors
3. View page source (not DevTools) and confirm meta tags and JSON-LD are in the raw HTML — if they only appear in DevTools it means SSR broke and crawlers won't see them
