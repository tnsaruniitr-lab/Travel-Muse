# TRYPS Blog — Post Index

> Master reference for all published and in-progress blog posts.  
> For HTML component classes and JSON-LD schema templates, see [`blog-spec.md`](./blog-spec.md).  
> For visual design tokens and component examples, see [`/public/tryps-blog-style-reference.html`](../public/tryps-blog-style-reference.html).

---

## Published posts

---

### Post 1 — How to Plan a Group Trip

| Field | Value |
|---|---|
| **Title** | How to Plan a Group Trip: Step-by-Step Guide |
| **Slug / URL** | `/blog/how-to-plan-a-group-trip` |
| **Category** | Group trip planning |
| **Published** | April 4, 2026 |
| **Read time** | 8 min |
| **Word count** | ~2,400 |
| **Hero image** | `/images/blog/how-to-plan-group-trip-hero.webp` (1200 × 630) |

**Meta description**  
Learn how to plan a group trip without chaos. Lock dates, align on budget, build a shared itinerary, and split expenses clearly.

**Excerpt (used on blog index card)**  
Planning a group trip sounds fun until someone says "I'm flexible" and disappears for three days. Here's a clear system that actually works.

**Lede (opening pull quote)**  
Planning a group trip sounds fun until someone says "I'm flexible" and disappears for three days.

**Article structure**

| # | Section ID | Heading | Type |
|---|---|---|---|
| — | — | Quick answer | Answer box |
| — | `why-chaotic` | Why group trips become chaotic | Plain section |
| 1 | `step-1` | Confirm who is actually going | Numbered step |
| 2 | `step-2` | Shortlist destination options | Numbered step |
| 3 | `step-3` | Lock dates with a group poll | Numbered step |
| 4 | `step-4` | Set the budget early | Numbered step |
| 5 | `step-5` | Build a shared itinerary | Numbered step |
| 6 | `step-6` | Assign responsibilities | Numbered step |
| 7 | `step-7` | Track and split expenses clearly | Numbered step |
| 8 | `step-8` | Finalize bookings and move | Numbered step |
| — | `faq` | FAQ | Plain section |
| — | — | CTA box | CTA |

**Inline images**

| File | Alt text |
|---|---|
| `how-to-plan-group-trip-hero.webp` | Friends planning a group trip together on their phones |
| `group-trip-date-poll.webp` | Group trip date poll showing friends voting on travel dates |
| `shared-group-trip-itinerary.webp` | Shared itinerary for a group trip planned with friends |
| `group-trip-expense-tracker.webp` | Group trip expense tracker showing shared costs and balances |

**FAQ questions (visible in article + FAQPage schema)**

1. How far in advance should you plan a group trip?
2. What is the easiest way to decide dates for a group trip?
3. How do you split expenses fairly on a group trip?
4. What should a group trip itinerary include?
5. What is the best app for planning group trips?

**JSON-LD schemas used**

| Schema type | Purpose |
|---|---|
| `Article` | Core article entity |
| `HowTo` | 8-step group trip planning process |
| `FAQPage` | 5 topic-specific FAQs |
| `BreadcrumbList` | Home → Blog → Article (2 levels) |

**Code files**

| File | Contents |
|---|---|
| [`src/pages/blog/how-to-plan-group-trip.tsx`](../src/pages/blog/how-to-plan-group-trip.tsx) | Full article HTML (React/TSX) |
| [`src/pages/blog/how-to-plan-group-trip-head.ts`](../src/pages/blog/how-to-plan-group-trip-head.ts) | All `<head>` tags + all JSON-LD blocks |

**Schema field reference** → [`blog-spec.md` §5–6](./blog-spec.md#5-json-ld-schemas--every-article-required)

---

### Post 2 — 7-Day Oahu Group Trip Itinerary

| Field | Value |
|---|---|
| **Title** | 7-Day Oahu Group Trip Itinerary (2026): What Actually Works |
| **Slug / URL** | `/blog/oahu-group-trip-itinerary` |
| **Category** | Destination guides |
| **Published** | April 4, 2026 |
| **Read time** | 10 min |
| **Word count** | ~2,800 |
| **Hero image** | `/images/blog/oahu-group-trip-hero.webp` (1200 × 630) |

**Meta description**  
The complete 7-day Oahu itinerary for friend groups in 2026. Day-by-day plan with real restaurants, beaches, honest costs, and what to book before you land — from Diamond Head to the North Shore.

**Excerpt (used on blog index card)**  
One person wants beach days. Someone wants to eat every two hours. Nobody has booked anything. Here's a day-by-day plan with real places, real food, and enough structure to keep the group chat quiet.

**Lede (opening pull quote)**  
One person wants beach days. Someone wants to eat every two hours. Nobody has booked anything.

**Article structure**

| # | Section ID | Heading | Type |
|---|---|---|---|
| — | — | Quick answer (cost + 3 pre-bookings) | Answer box |
| — | `pre-arrival-heading` | Book these before you leave home | Callout box |
| — | `best-time-heading` | When is the best time to visit Oahu with friends? | Plain section |
| — | `cost-heading` | How much does a week in Oahu cost per person? | Plain section + table |
| — | `itinerary-heading` | The 7-day Oahu itinerary, day by day | Section heading |
| 1 | `day-1` | Day 1 — Arrive, eat, decompress | Day section |
| 2 | `day-2` | Day 2 — First beach day: surf lessons and the best poke on the island | Day section |
| 3 | `day-3` | Day 3 — Diamond Head hike and Chinatown nightlife | Day section |
| 4 | `day-4` | Day 4 — North Shore day trip: Pipeline, shrimp trucks, and shave ice | Day section |
| 5 | `day-5` | Day 5 — Split day: Hanauma Bay snorkeling vs Kailua Beach kayaking | Day section |
| 6 | `day-6` | Day 6 — Slow morning, best dinner of the trip | Day section |
| 7 | `day-7` | Day 7 — Last beach hour, best fried rice on the island, clean exit | Day section |
| — | `faqs` | FAQs | Plain section |
| — | — | CTA box | CTA |

**Cost table** (per-person, 7 days, group of 4–6)

| Category | Budget | Mid-range |
|---|---|---|
| Accommodation (7 nights) | $280 | $560 |
| Food & drink | $280 | $420 |
| Activities | $140 | $280 |
| Transport (local) | $110 | $160 |
| **Total excl. flights** | **$810** | **$1,420** |

**Season guide** (4 cards in article)

| Tag | Label | Notes |
|---|---|---|
| Best | April–June | Shoulder season, lighter crowds, 15–25% cheaper |
| Best | September–October | Same shoulder benefits, ocean still warm |
| Peak | July–August | Crowded + expensive, still great |
| Spectator | November–March | Whale season + big North Shore swell; some beaches spectator-only |

**Inline images**

| File | Alt text |
|---|---|
| `oahu-group-trip-hero.webp` | Friends watching fireworks from a Waikiki balcony overlooking Diamond Head at sunset |

**FAQ questions (visible in article + FAQPage schema)**

1. How much does a 7-day group trip to Oahu cost per person?
2. Do you need a rental car for a week in Oahu?
3. When is the best time to visit Oahu with a group of friends?
4. How far in advance should you book Hanauma Bay?
5. Is Oahu good for large groups of 6 or more people?
6. What is the best beach in Oahu for groups?
7. What is the best restaurant in Oahu for a group dinner?
8. What should you book before arriving in Oahu?
9. How long does the Diamond Head hike take?

**JSON-LD schemas used**

| Schema type | Purpose |
|---|---|
| `Article` | Core article entity with `mentions` (restaurants + attractions) |
| `BreadcrumbList` | Home → Blog → Hawaii → Article (3 levels) |
| `FAQPage` | 9 destination-specific FAQs |
| `TouristDestination` | Oahu entity with 6 `includesAttraction` items |
| `ItemList` | 7-day itinerary list (one entry per day) |
| `HowTo` | 4-step Oahu pre-trip booking process |
| `WebPage` + speakable | Speakable spec targeting `.quick-answer`, `.summary-box`, `.faq-a` |

**Code files**

| File | Contents |
|---|---|
| [`src/pages/blog/oahu-group-trip-itinerary.tsx`](../src/pages/blog/oahu-group-trip-itinerary.tsx) | Full article HTML (React/TSX) |
| [`src/pages/blog/oahu-group-trip-itinerary-head.ts`](../src/pages/blog/oahu-group-trip-itinerary-head.ts) | All `<head>` tags + all JSON-LD blocks |

**Schema field reference** → [`blog-spec.md` §5, §7](./blog-spec.md#7-json-ld-schemas--destination-guides)

---

## Blog index page

| Field | Value |
|---|---|
| **URL** | `/blog` |
| **Title tag** | Blog — Group Trip Planning Guides \| TRYPS |
| **Description** | Practical guides on planning group trips with friends. Date coordination, shared itineraries, expense splitting, and more. |
| **OG image** | `/images/blog/how-to-plan-group-trip-hero.webp` |

**JSON-LD schema used:** `Blog` (publisher: TRYPS, url: `https://trypsagent.com/blog`)

**Code files**

| File | Contents |
|---|---|
| [`src/pages/blog/index.tsx`](../src/pages/blog/index.tsx) | Blog index listing (React/TSX) |
| [`src/pages/blog/index-head.ts`](../src/pages/blog/index-head.ts) | `<head>` tags + Blog schema |

---

## Adding a new post — checklist

When a new article is ready, complete the following steps:

- [ ] Create `src/pages/blog/[slug].tsx` — article HTML following the component guide in [`blog-spec.md` §3](./blog-spec.md#3-html-article-structure)
- [ ] Create `src/pages/blog/[slug]-head.ts` — `<head>` tags + JSON-LD blocks following [`blog-spec.md` §2 and §5–7](./blog-spec.md#2-required-head-tags--every-article)
- [ ] Register the route in `server.ts` — add `case "/blog/[slug]":` to the SSR switch
- [ ] Add the post card to `src/pages/blog/index.tsx` — append an entry to the `posts` array
- [ ] Add the post to the `posts` object in `src/pages/blog/index-head.ts` if a `BlogPosting` is referenced
- [ ] Add a `<url>` entry to `public/sitemap.xml`
- [ ] Add an entry to this file (`blogs.md`) under [Published posts](#published-posts)
- [ ] Upload hero image to `/images/blog/` as `.webp` at 1200 × 630 px

---

## Content categories

| Category slug | Display name | Posts |
|---|---|---|
| `group-trip-planning` | Group trip planning | Post 1 |
| `destination-guides` | Destination guides | Post 2 |

---

## Image inventory

All blog images live at `/images/blog/` on the server.

| File | Used in | Dimensions | Alt text |
|---|---|---|---|
| `how-to-plan-group-trip-hero.webp` | Post 1 hero, Blog index OG | 1200 × 630 | Friends planning a group trip together on their phones |
| `group-trip-date-poll.webp` | Post 1 inline | 1200 × 750 | Group trip date poll showing friends voting on travel dates |
| `shared-group-trip-itinerary.webp` | Post 1 inline | 1200 × 750 | Shared itinerary for a group trip planned with friends |
| `group-trip-expense-tracker.webp` | Post 1 inline | 1200 × 750 | Group trip expense tracker showing shared costs and balances |
| `oahu-group-trip-hero.webp` | Post 2 hero + OG | 1200 × 630 | Friends watching fireworks from a Waikiki balcony overlooking Diamond Head at sunset |
