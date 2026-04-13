# TRYPS Blog — HTML & JSON-LD Specification

> **For external blog writers.** This document defines the exact HTML structure and JSON-LD schemas required for every article published on jointryps.com. Follow it precisely so new posts are visually consistent and crawlers can index them correctly.

---

## Contents

1. [Page structure overview](#1-page-structure-overview)
2. [Required `<head>` tags — every article](#2-required-head-tags--every-article)
3. [HTML article structure](#3-html-article-structure)
   - [Breadcrumb](#31-breadcrumb)
   - [Article header](#32-article-header)
   - [Quick-answer box](#33-quick-answer-box)
   - [Body sections — plain](#34-body-sections--plain)
   - [Body sections — numbered steps (how-to articles)](#35-body-sections--numbered-steps-how-to-articles)
   - [Bullet list](#36-bullet-list)
   - [Arrow checklist](#37-arrow-checklist)
   - [Tip / callout box](#38-tip--callout-box)
   - [Data table](#39-data-table)
   - [Image + caption](#310-image--caption)
   - [Places tag list](#311-places-tag-list)
   - [Divider](#312-divider)
   - [End-of-article CTA box](#313-end-of-article-cta-box)
4. [Full article skeleton (copy-paste)](#4-full-article-skeleton-copy-paste)
5. [JSON-LD schemas — every article (required)](#5-json-ld-schemas--every-article-required)
   - [Article](#51-article)
   - [BreadcrumbList](#52-breadcrumblist)
6. [JSON-LD schemas — how-to articles](#6-json-ld-schemas--how-to-articles)
   - [HowTo](#61-howto)
   - [FAQPage](#62-faqpage)
7. [JSON-LD schemas — destination guides](#7-json-ld-schemas--destination-guides)
   - [TouristDestination](#71-touristdestination)
   - [ItemList (day-by-day itinerary)](#72-itemlist-day-by-day-itinerary)
   - [HowTo (planning steps)](#73-howto-planning-steps)
   - [FAQPage](#74-faqpage)
   - [WebPage + speakable](#75-webpage--speakable)
8. [Reference: homepage schemas (do not duplicate)](#8-reference-homepage-schemas-do-not-duplicate)
9. [Editorial rules](#9-editorial-rules)

---

## 1. Page structure overview

Every blog post is a standalone HTML document. The stylesheet link below pulls in the full TRYPS design system — include it in every `<head>`. JSON-LD goes in the `<head>`, all visible content goes in `<main>` > `<article>`.

```
<html>
  <head>
    <!-- Fonts + CSS tokens (see section 2) -->
    <!-- Title, meta, canonical, OG, Twitter (see section 2) -->
    <!-- JSON-LD blocks (see sections 5–7) -->
  </head>
  <body>
    <header>…site navigation…</header>
    <main id="main-content">
      <article class="tryps-article">
        <!-- All article content here -->
      </article>
    </main>
    <footer>…</footer>
  </body>
</html>
```

---

## 2. Required `<head>` tags — every article

Replace the `[PLACEHOLDERS]` for each article. Everything else is fixed.

```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />

<!-- Primary meta -->
<title>[ARTICLE TITLE] | TRYPS</title>
<meta name="description" content="[150–160 character description]" />
<link rel="canonical" href="https://jointryps.com/blog/[SLUG]" />
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
<meta name="theme-color" content="#FFF9F9" />

<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:site_name" content="TRYPS" />
<meta property="og:title" content="[ARTICLE TITLE]" />
<meta property="og:description" content="[OG description — can match meta description]" />
<meta property="og:url" content="https://jointryps.com/blog/[SLUG]" />
<meta property="og:image" content="https://jointryps.com/images/blog/[HERO-IMAGE].webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="[Image alt text]" />
<meta property="og:locale" content="en_US" />
<meta property="article:published_time" content="[YYYY-MM-DDT00:00:00Z]" />
<meta property="article:modified_time" content="[YYYY-MM-DDT00:00:00Z]" />
<meta property="article:author" content="https://jointryps.com/about" />
<meta property="article:section" content="[Category name]" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@trypsapp" />
<meta name="twitter:title" content="[ARTICLE TITLE]" />
<meta name="twitter:description" content="[Twitter description]" />
<meta name="twitter:image" content="https://jointryps.com/images/blog/[HERO-IMAGE].webp" />
<meta name="twitter:image:alt" content="[Image alt text]" />
```

**Image requirements:**
- Format: `.webp` preferred, `.jpg` acceptable
- Dimensions: 1200 × 630 px (16:9 for hero, used for OG + Twitter card)
- File location: `https://jointryps.com/images/blog/[filename]`

---

## 3. HTML article structure

All CSS classes are defined in the TRYPS style reference file (`tryps-blog-style-reference.html`). Include that stylesheet or copy its `<style>` block into each article.

---

### 3.1 Breadcrumb

```html
<nav class="tryps-breadcrumb" aria-label="Breadcrumb">
  <a href="/">Home</a>
  <span>/</span>
  <a href="/blog">Blog</a>
  <span>/</span>
  <span class="current">[Article short title]</span>
</nav>
```

---

### 3.2 Article header

Exact order: badge → H1 → byline → lede → hero image.

```html
<header class="tryps-article-header">

  <!-- Category badge -->
  <div class="tryps-badge">[Category name]</div>

  <!-- H1 — Playfair Display. Use <em> for the keyword/hook phrase (renders in crimson). -->
  <h1 class="tryps-h1">[Title]: <em>[Hook phrase]</em></h1>

  <!-- Byline -->
  <div class="tryps-byline">
    <span class="source">TRYPS Blog</span>
    <span class="dot"></span>
    <time datetime="[YYYY-MM-DD]">[Month D, YYYY]</time>
    <span class="dot"></span>
    <span>[X] min read</span>
  </div>

  <!-- Lede — one sentence that states the problem or hook -->
  <p class="tryps-lede">[Opening hook sentence.]</p>

  <!-- Hero image — 1200×630 px, loading="eager" on hero only -->
  <figure class="tryps-figure">
    <img
      src="/images/blog/[hero-image].webp"
      alt="[Descriptive alt text]"
      width="1200"
      height="630"
      loading="eager"
    />
    <figcaption>[Caption describing the photo]</figcaption>
  </figure>

</header>
```

---

### 3.3 Quick-answer box

**Required in every article. Place it immediately after the hero image.**  
This is the primary AI snippet and featured snippet target. Keep the body concise and directly answerable.

```html
<div class="tryps-answer-box" role="note" aria-label="Quick summary">
  <div class="tryps-answer-box__header">
    <div class="tryps-answer-box__icon">✓</div>
    <span class="tryps-answer-box__title">Quick answer</span>
  </div>
  <div class="tryps-answer-box__body">

    <!-- Option A — prose answer -->
    <p>[2–3 sentence direct answer to the article's main question.]</p>

    <!-- Option B — numbered list answer (for how-to articles) -->
    <p style="font-size:0.875rem;font-weight:500;color:#6B3030;margin-bottom:0.75rem">
      To [do X]:
    </p>
    <ol class="tryps-ol">
      <li><span class="n">1</span> [Step one]</li>
      <li><span class="n">2</span> [Step two]</li>
      <li><span class="n">3</span> [Step three]</li>
    </ol>
    <p class="footer-note">[One closing sentence that reinforces the key takeaway.]</p>

  </div>
</div>
```

---

### 3.4 Body sections — plain

Use for informational sections that are not numbered steps.

```html
<section class="tryps-section" aria-labelledby="[section-id]">
  <h2 class="tryps-h2" id="[section-id]">[Section heading as a question?]</h2>
  <p class="tryps-p">[Body paragraph.]</p>
  <p class="tryps-p">[Body paragraph.]</p>
</section>
```

Sub-section heading (H3):

```html
<h3 class="tryps-h3">[Sub-section heading]</h3>
```

---

### 3.5 Body sections — numbered steps (how-to articles)

Use only in how-to / step-by-step articles. Replaces the plain `tryps-h2`.

```html
<section class="tryps-section" aria-labelledby="step-[N]-title">

  <div class="tryps-step">
    <div class="tryps-step-num">
      <span class="step-label">Step</span>
      <span class="step-n">[N]</span>
    </div>
    <h2 class="tryps-step-title" id="step-[N]-title">[Step title]</h2>
  </div>

  <p class="tryps-p">[Body copy for this step.]</p>

</section>
```

---

### 3.6 Bullet list

```html
<ul class="tryps-ul">
  <li>[Item one]</li>
  <li>[Item two]</li>
  <li>[Item three]</li>
</ul>
```

---

### 3.7 Arrow checklist

Use inside callout boxes or pre-trip checklists. Each `<li>` should contain a `<strong>` label followed by detail text.

```html
<ul class="tryps-arrow-list">
  <li><strong>[Label]</strong> — [Detail sentence.]</li>
  <li><strong>[Label]</strong> — [Detail sentence.]</li>
</ul>
```

---

### 3.8 Tip / callout box

Use for pro tips, accommodation notes, booking warnings, cost notes. Label options: "Pro tip", "Where to stay", "Key info", "Watch out", "Cost note".

```html
<div class="tryps-tip">
  <div class="tryps-tip__label">[Label]</div>
  <p>[Tip text here. Keep to 2–3 sentences.]</p>
</div>
```

---

### 3.9 Data table

Always wrap in `tryps-table-wrap` for mobile horizontal scroll.

```html
<div class="tryps-table-wrap">
  <table class="tryps-table" aria-label="[Descriptive table label]">
    <thead>
      <tr>
        <th>[Column A]</th>
        <th>[Column B]</th>
        <th>[Column C]</th>
        <th>[Column D]</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[Value]</td>
        <td>[Value]</td>
        <td>[Value]</td>
        <td class="note">[Optional note — smaller, muted text]</td>
      </tr>
      <!-- Repeat rows; odd = white bg, even = #FFF9F9 (CSS handles this automatically) -->
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        <td>[Total A]</td>
        <td>[Total B]</td>
        <td class="note" style="font-weight:400">[Note]</td>
      </tr>
    </tfoot>
  </table>
</div>
```

---

### 3.10 Image + caption

Non-hero images use `loading="lazy"`. Preferred aspect ratio: 16:9 (1200×675 px).

```html
<figure class="tryps-figure">
  <img
    src="/images/blog/[filename].webp"
    alt="[Descriptive alt text]"
    width="1200"
    height="675"
    loading="lazy"
  />
  <figcaption>[Caption text — italic, centred, #9CA3AF]</figcaption>
</figure>
```

---

### 3.11 Places tag list

Use at the end of each day section in destination guides.

```html
<div class="tryps-places">
  <p class="tryps-places__label">Mentioned in this section</p>
  <ul class="tryps-places__list">
    <li>[Place name]</li>
    <li>[Place name]</li>
    <li>[Place name]</li>
  </ul>
</div>
```

---

### 3.12 Divider

```html
<hr class="tryps-hr" />
```

---

### 3.13 End-of-article CTA box

**Required in every article. Always the last element before `</article>`.**

```html
<div class="tryps-cta-box">
  <h2>Ready to stop planning in group chats?</h2>
  <p>
    TRYPS gives your group one place to lock dates, build a shared itinerary,
    and split expenses — no app download required.
  </p>
  <a href="https://jointryps.com" class="tryps-cta-btn">Start planning free</a>
</div>
```

---

## 4. Full article skeleton (copy-paste)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />

  <!-- Paste the full <style> block from tryps-blog-style-reference.html here -->

  <!-- Primary meta -->
  <title>[TITLE] | TRYPS</title>
  <meta name="description" content="[DESCRIPTION]" />
  <link rel="canonical" href="https://jointryps.com/blog/[SLUG]" />
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <meta name="theme-color" content="#FFF9F9" />

  <!-- OG -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="TRYPS" />
  <meta property="og:title" content="[TITLE]" />
  <meta property="og:description" content="[DESCRIPTION]" />
  <meta property="og:url" content="https://jointryps.com/blog/[SLUG]" />
  <meta property="og:image" content="https://jointryps.com/images/blog/[HERO].webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="[ALT]" />
  <meta property="og:locale" content="en_US" />
  <meta property="article:published_time" content="[YYYY-MM-DDT00:00:00Z]" />
  <meta property="article:modified_time" content="[YYYY-MM-DDT00:00:00Z]" />
  <meta property="article:author" content="https://jointryps.com/about" />
  <meta property="article:section" content="[CATEGORY]" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@trypsapp" />
  <meta name="twitter:title" content="[TITLE]" />
  <meta name="twitter:description" content="[DESCRIPTION]" />
  <meta name="twitter:image" content="https://jointryps.com/images/blog/[HERO].webp" />
  <meta name="twitter:image:alt" content="[ALT]" />

  <!-- JSON-LD: paste blocks from sections 5–7 here -->

</head>
<body>

  <main id="main-content">
    <article class="tryps-article">

      <!-- 1. Breadcrumb -->
      <nav class="tryps-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a> <span>/</span>
        <a href="/blog">Blog</a> <span>/</span>
        <span class="current">[Short title]</span>
      </nav>

      <!-- 2. Article header -->
      <header class="tryps-article-header">
        <div class="tryps-badge">[Category]</div>
        <h1 class="tryps-h1">[Title]: <em>[Hook]</em></h1>
        <div class="tryps-byline">
          <span class="source">TRYPS Blog</span>
          <span class="dot"></span>
          <time datetime="[YYYY-MM-DD]">[Month D, YYYY]</time>
          <span class="dot"></span>
          <span>[X] min read</span>
        </div>
        <p class="tryps-lede">[Hook sentence.]</p>
        <figure class="tryps-figure">
          <img src="/images/blog/[hero].webp" alt="[alt]" width="1200" height="630" loading="eager" />
          <figcaption>[Caption]</figcaption>
        </figure>
      </header>

      <!-- 3. Quick-answer box (required) -->
      <div class="tryps-answer-box" role="note" aria-label="Quick summary">
        <div class="tryps-answer-box__header">
          <div class="tryps-answer-box__icon">✓</div>
          <span class="tryps-answer-box__title">Quick answer</span>
        </div>
        <div class="tryps-answer-box__body">
          <p>[Direct answer.]</p>
        </div>
      </div>

      <!-- 4. Body sections -->
      <section class="tryps-section" aria-labelledby="section-1">
        <h2 class="tryps-h2" id="section-1">[Heading as a question?]</h2>
        <p class="tryps-p">[Body copy.]</p>
      </section>

      <hr class="tryps-hr" />

      <!-- 5. End CTA (required) -->
      <div class="tryps-cta-box">
        <h2>Ready to stop planning in group chats?</h2>
        <p>TRYPS gives your group one place to lock dates, build a shared itinerary, and split expenses.</p>
        <a href="https://jointryps.com" class="tryps-cta-btn">Start planning free</a>
      </div>

    </article>
  </main>

</body>
</html>
```

---

## 5. JSON-LD schemas — every article (required)

These two blocks go in `<head>` for **every** blog post, regardless of type.

---

### 5.1 Article

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://jointryps.com/blog/[SLUG]#article",
  "headline": "[Full article title — matches <title> tag minus ' | TRYPS']",
  "alternativeHeadline": "[Optional shorter title]",
  "description": "[Matches meta description]",
  "image": {
    "@type": "ImageObject",
    "url": "https://jointryps.com/images/blog/[HERO].webp",
    "width": 1200,
    "height": 630,
    "caption": "[Image caption]"
  },
  "datePublished": "[YYYY-MM-DDT00:00:00+00:00]",
  "dateModified": "[YYYY-MM-DDT00:00:00+00:00]",
  "author": {
    "@type": "Organization",
    "name": "TRYPS",
    "url": "https://jointryps.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://jointryps.com/favicon.svg",
      "width": 512,
      "height": 512
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "TRYPS",
    "url": "https://jointryps.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://jointryps.com/favicon.svg",
      "width": 512,
      "height": 512
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://jointryps.com/blog/[SLUG]"
  },
  "articleSection": "[Category — e.g. 'Destination Guides' or 'Group trip planning']",
  "keywords": ["[keyword 1]", "[keyword 2]", "[keyword 3]"],
  "wordCount": [NUMBER],
  "inLanguage": "en-US"
}
```

---

### 5.2 BreadcrumbList

Adjust `itemListElement` depth to match the actual URL hierarchy.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jointryps.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jointryps.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "[Article title]", "item": "https://jointryps.com/blog/[SLUG]" }
  ]
}
```

For destination guides with a category level (e.g. `/blog/hawaii/`):

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://jointryps.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog",    "item": "https://jointryps.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "[Region]","item": "https://jointryps.com/blog/[region]" },
    { "@type": "ListItem", "position": 4, "name": "[Article title]", "item": "https://jointryps.com/blog/[SLUG]" }
  ]
}
```

---

## 6. JSON-LD schemas — how-to articles

Add these **in addition** to the Article + BreadcrumbList above.

---

### 6.1 HowTo

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[How to … — matches H1 without the hook em]",
  "description": "[One sentence summary of what the guide teaches]",
  "image": "https://jointryps.com/images/blog/[HERO].webp",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[Step 1 title — matches tryps-step-title in HTML]",
      "text": "[One sentence describing what the reader does in this step]"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "[Step 2 title]",
      "text": "[Description]"
    }
  ]
}
```

> Each `step.name` must match the corresponding `<h2 class="tryps-step-title">` text in the HTML exactly.

---

### 6.2 FAQPage

Include only if the article has an FAQ section. Each `Question.name` must match a visible `<h3>` or FAQ heading in the HTML.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text — must appear visibly in the article]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Complete answer — can be longer than the visible text. Do not use HTML tags inside this string.]"
      }
    },
    {
      "@type": "Question",
      "name": "[Second question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer]"
      }
    }
  ]
}
```

---

## 7. JSON-LD schemas — destination guides

Destination guides (e.g. Oahu itinerary) get additional schemas on top of sections 5 and 6.

---

### 7.1 TouristDestination

```json
{
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "@id": "https://jointryps.com/destinations/[DESTINATION-SLUG]",
  "name": "[Destination name, e.g. Oahu, Hawaii]",
  "description": "[2–3 sentence description of the destination]",
  "url": "https://jointryps.com/destinations/[DESTINATION-SLUG]",
  "touristType": [
    { "@type": "Audience", "audienceType": "Groups of friends" },
    { "@type": "Audience", "audienceType": "Adventure travelers" }
  ],
  "hasMap": "https://maps.google.com/?q=[Destination+Name]",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [LAT],
    "longitude": [LNG]
  },
  "containedInPlace": {
    "@type": "State",
    "name": "[State]",
    "containedInPlace": { "@type": "Country", "name": "United States" }
  },
  "includesAttraction": [
    {
      "@type": "TouristAttraction",
      "name": "[Attraction name]",
      "description": "[1–2 sentence description including practical info]",
      "url": "[Official URL if available]"
    },
    {
      "@type": "Beach",
      "name": "[Beach name]",
      "description": "[Description]",
      "geo": { "@type": "GeoCoordinates", "latitude": [LAT], "longitude": [LNG] }
    }
  ]
}
```

---

### 7.2 ItemList (day-by-day itinerary)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "[X-Day [Destination] Group Trip Itinerary]",
  "description": "[One sentence summary]",
  "numberOfItems": [NUMBER OF DAYS],
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1 — [Short day title]",
      "description": "[One sentence summary of the day's activities]"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2 — [Short day title]",
      "description": "[Summary]"
    }
  ]
}
```

> `name` values in `itemListElement` must match the day section headings visible in the HTML.

---

### 7.3 HowTo (planning steps)

For destination guides, add a `HowTo` describing the planning actions (not the itinerary days). See the Oahu article for a real example — focus on bookings and logistics.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Plan a Group Trip to [Destination]",
  "description": "[What this guide teaches in one sentence]",
  "totalTime": "PT[N]D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "minValue": "[MIN]",
    "maxValue": "[MAX]"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[Booking/planning action]",
      "text": "[What to do and why]",
      "url": "https://jointryps.com/blog/[SLUG]#[section-anchor]"
    }
  ]
}
```

---

### 7.4 FAQPage

Same structure as section 6.2. Destination guides typically need 7–10 FAQ entries covering cost, best time to visit, transport, accommodation, activities, and group-specific tips.

---

### 7.5 WebPage + speakable

Add this to tell voice assistants and AI search which sections to read aloud. The `cssSelector` values must match CSS classes actually present in the HTML.

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://jointryps.com/blog/[SLUG]",
  "url": "https://jointryps.com/blog/[SLUG]",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".tryps-answer-box", ".tryps-lede", "h1"]
  }
}
```

---

## 8. Reference: homepage schemas (do not duplicate)

The homepage (`/`) already publishes the following schemas globally. Blog posts must **not** repeat them:

| Schema type | Where | Notes |
|---|---|---|
| `Organization` | Homepage | TRYPS org entity, logo, sameAs, contactPoint |
| `Person` | Homepage | Jake Stein founder entity |
| `WebSite` | Homepage | Site-level entity |
| `SoftwareApplication` | Homepage | Web app entity with featureList + AggregateRating |
| `MobileApplication` × 2 | Homepage | iOS + Android pre-order entities |
| `FAQPage` | Homepage | 7 product-level FAQs |
| `HowTo` | Homepage | 4-step TRYPS product walkthrough |
| `BreadcrumbList` | Homepage | Single-item (Home) |

Blog `FAQPage` schemas must only contain **content-specific** questions (about the article topic, not about the product). Do not repeat the product FAQs from the homepage.

---

## 9. Editorial rules

| Rule | Detail |
|---|---|
| **TRYPS is always all-caps** | Never "Tryps" or "tryps" — always "TRYPS" |
| **H1 font** | Playfair Display 700 — set `font-family: 'Playfair Display', Georgia, serif` on `.tryps-h1` |
| **H2s are questions** | "How does X work?" not "How X works" — phrased as if answering a search query |
| **One quick-answer box per article** | Placed immediately after the hero image — never skipped |
| **Body font minimum 17px** | `font-size: 17px` on `.tryps-p` — never reduce |
| **CTA box in every article** | Always the last element. Link always points to `https://jointryps.com` |
| **Hero image: 1200×630 px** | Used for OG + Twitter card. `loading="eager"` on hero only — all others `loading="lazy"` |
| **Image format: `.webp`** | Fall back to `.jpg` only if WebP is not available |
| **No inline colour values** | Use CSS custom properties from the style reference — never hardcode hex in `style=""` attributes |
| **Tables always wrapped** | `<div class="tryps-table-wrap">` around every `<table>` for mobile scroll |
| **JSON-LD is plain JSON** | No HTML tags inside `text` fields of `Answer` or `HowToStep`. No trailing commas. Valid JSON only. |
| **Schema questions match visible text** | Every `Question.name` in `FAQPage` must appear as visible text on the page |
| **Do not publish product schemas** | The homepage owns `Organization`, `SoftwareApplication`, `MobileApplication`, and product `FAQPage` — do not duplicate in blog posts |
