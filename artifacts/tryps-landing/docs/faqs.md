# TRYPS — FAQ Index

> Master reference for every FAQ question across the site.  
> FAQs live in two places: **visible on the page** (accordion UI) and **in the `FAQPage` JSON-LD schema** in the corresponding `-head.ts` file.  
> Both must stay in sync — if you add a question to the UI, add the same question to the schema, and vice versa.  
> For schema template and field rules, see [`blog-spec.md` §6.2](./blog-spec.md#62-faqpage).

---

## Contents

1. [Homepage FAQs](#1-homepage-faqs)
2. [Blog post — How to Plan a Group Trip](#2-blog-post--how-to-plan-a-group-trip)
3. [Blog post — 7-Day Oahu Itinerary](#3-blog-post--7-day-oahu-itinerary)
4. [Adding or editing FAQs — rules](#4-adding-or-editing-faqs--rules)
5. [FAQ questions — all locations at a glance](#5-faq-questions--all-locations-at-a-glance)

---

## 1. Homepage FAQs

**URL:** `https://jointryps.com/`  
**Section anchor:** `#faq`  
**Section heading:** "Frequently asked questions"

**Code files**

| File | What to edit |
|---|---|
| [`src/pages/home.tsx`](../src/pages/home.tsx) line 855 | Visible accordion UI — the `[{ q, a }]` array |
| [`src/pages/home-head.ts`](../src/pages/home-head.ts) | `FAQPage` JSON-LD block |

---

### Visible accordion (6 questions)

| # | Question | Answer |
|---|---|---|
| 1 | What is TRYPS? | TRYPS is a group trip planning app for friends that helps you coordinate dates, build a shared itinerary, and split expenses — all in one place. |
| 2 | How is this different from WhatsApp or Google Sheets? | WhatsApp is good for chatting and Google Sheets is flexible for manual planning, but neither is built for making group travel decisions. TRYPS gives your group one structured place to vote on dates, plan the itinerary, and track shared costs so decisions happen faster and fewer details get lost. |
| 3 | Does everyone need to download an app? | No. People can join instantly via link or iMessage without installing anything. |
| 4 | Can everyone edit the plan? | Yes. Everyone can respond to polls, contribute to the itinerary, and log expenses. |
| 5 | How does expense splitting work? | Log shared costs as they happen and TRYPS tracks balances so everyone can see what they owe at the end of the trip. |
| 6 | How do I start? | Create a trip, share the link with your group, and start planning together. |

---

### FAQPage schema (7 questions — includes 1 extra not shown in UI)

The schema in `home-head.ts` contains the same 6 questions above plus one additional entry:

| # | Question | Answer |
|---|---|---|
| 7 | How do I join the TRYPS waitlist? | Enter your mobile number on the TRYPS homepage and tap Join. We will send you an SMS invite to join the beta. No app download or email sign-up required. |

> **Note:** Question 7 is schema-only (not shown in the accordion) because it targets AI/voice search for "TRYPS waitlist" queries. The answer is visible in the hero phone capture form on the page.

---

## 2. Blog post — How to Plan a Group Trip

**URL:** `https://jointryps.com/blog/how-to-plan-a-group-trip`  
**Section anchor:** `#faq`  
**These are content-specific FAQs — not product FAQs. Do not repeat homepage product questions here.**

**Code files**

| File | What to edit |
|---|---|
| [`src/pages/blog/how-to-plan-group-trip.tsx`](../src/pages/blog/how-to-plan-group-trip.tsx) | Visible FAQ accordion in the article |
| [`src/pages/blog/how-to-plan-group-trip-head.ts`](../src/pages/blog/how-to-plan-group-trip-head.ts) | `FAQPage` JSON-LD block |

---

### Questions (5 — same in UI and schema)

| # | Question | Answer |
|---|---|---|
| 1 | How far in advance should you plan a group trip? | For shorter trips, one to three months usually works. For international or larger groups, three to six months is safer. |
| 2 | What is the easiest way to decide dates for a group trip? | Use a date poll. It is faster and more reliable than trying to coordinate availability in a group chat. |
| 3 | How do you split expenses fairly on a group trip? | Track expenses as they happen and keep balances visible. That is much clearer than trying to settle everything at the end. |
| 4 | What should a group trip itinerary include? | A group trip itinerary should include travel dates, accommodation, key activities, reservations, and important logistics the whole group needs to know. |
| 5 | What is the best app for planning group trips? | The best tools combine date coordination, itinerary planning, and expense tracking in one place so the group stays aligned. |

---

## 3. Blog post — 7-Day Oahu Itinerary

**URL:** `https://jointryps.com/blog/oahu-group-trip-itinerary`  
**Section anchor:** `#faqs`  
**These are destination-specific FAQs. Do not repeat homepage product questions here.**

**Code files**

| File | What to edit |
|---|---|
| [`src/pages/blog/oahu-group-trip-itinerary.tsx`](../src/pages/blog/oahu-group-trip-itinerary.tsx) | Visible FAQ accordion in the article |
| [`src/pages/blog/oahu-group-trip-itinerary-head.ts`](../src/pages/blog/oahu-group-trip-itinerary-head.ts) | `FAQPage` JSON-LD block |

---

### Questions (9 — same in UI and schema)

| # | Question | Answer summary |
|---|---|---|
| 1 | How much does a 7-day group trip to Oahu cost per person? | $1,050–$1,750 per person excl. flights for a group of 4–6. Flights from US mainland add $300–$600. |
| 2 | Do you need a rental car for a week in Oahu? | Only for two days: North Shore and Kailua/windward side. Rideshare covers everything else. ~$80–$120 split for those two days. |
| 3 | When is the best time to visit Oahu with a group of friends? | April–June and September–October (shoulder seasons). Lighter crowds, 15–25% cheaper accommodation. |
| 4 | How far in advance should you book Hanauma Bay? | 2–5 days (a week in peak season). Tickets open at 7am Hawaii time two days before at hawaii.gowaiver.com. $25/person. |
| 5 | Is Oahu good for large groups of 6 or more people? | Yes — book vacation rentals in Ala Moana, call ahead for restaurants, activities handle large groups fine. |
| 6 | What is the best beach in Oahu for groups? | Kailua Beach (windward side) for calm water + kayaking. Hanauma Bay for snorkeling. Kaimana Beach for surf lessons. |
| 7 | What is the best restaurant in Oahu for a group dinner? | MW Restaurant ($80–$120/pp, tasting menu option). The Pig and the Lady ($45–$70/pp, Vietnamese-inspired). Both need 1-week advance booking for groups. |
| 8 | What should you book before arriving in Oahu? | Three non-negotiables: Hanauma Bay tickets, one dinner reservation (Pig and the Lady or MW Restaurant), North Shore transport. |
| 9 | How long does the Diamond Head hike take? | 1.5–2 hours round trip. 1.6 miles, 560ft elevation. Go before 7:30am. $5/person entry. |

> Full answers (not summaries) are in the `FAQPage` JSON-LD block in `oahu-group-trip-itinerary-head.ts`.

---

## 4. Adding or editing FAQs — rules

### Where FAQs can live

| Location | When to add |
|---|---|
| Homepage accordion + schema | Product-level questions (what is TRYPS, how it works, pricing, sign-up) |
| Blog post accordion + schema | Topic-specific questions only — about the article subject, not about the product |

### Do not duplicate

Homepage product FAQs must **not** be repeated in blog post `FAQPage` schemas. Google treats duplicate FAQ schemas as a signal of thin content. Each `FAQPage` schema should contain only questions genuinely answered by that page.

### Both places must stay in sync

When you add a question to the **visible accordion** on a page, you must also add it to the **`FAQPage` JSON-LD** in the corresponding `-head.ts` file — and vice versa. A question in the schema that has no visible answer on the page is a schema violation.

### Answer rules

- Answers in the schema `text` field must be **plain text** — no HTML tags, no markdown
- Answers can be longer in the schema than in the visible UI (schema answers can include extra detail for AI/voice)
- Each `Question.name` must appear **visibly on the page** — either as a heading, accordion label, or inline text
- Minimum answer length: 1 complete sentence. Preferred: 2–4 sentences.
- TRYPS is always written in all-caps — never "Tryps" or "tryps"

### HTML structure for a FAQ accordion item

```html
<details class="tryps-faq-item">
  <summary>
    <h3>[Question text]</h3>
    <span aria-hidden="true">+</span>
  </summary>
  <div class="tryps-faq-answer">
    <p>[Answer text]</p>
  </div>
</details>
```

### JSON-LD structure for a single question

```json
{
  "@type": "Question",
  "name": "[Question text — must match what appears visibly on the page]",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "[Plain text answer — no HTML. Can be longer than the visible answer.]"
  }
}
```

### Checklist when adding a new FAQ

- [ ] Add `{ q: "...", a: "..." }` entry to the UI array in the `.tsx` file
- [ ] Add the matching `{ "@type": "Question", ... }` entry to the `FAQPage` schema in the `-head.ts` file
- [ ] Update the question count in this file under the relevant section
- [ ] Add the question and answer summary to the table in this file

---

## 5. FAQ questions — all locations at a glance

Quick-scan table of every FAQ question currently on the site.

| Question | Location | In schema |
|---|---|---|
| What is TRYPS? | Homepage | ✓ |
| How is this different from WhatsApp or Google Sheets? | Homepage | ✓ |
| Does everyone need to download an app? | Homepage | ✓ |
| Can everyone edit the plan? | Homepage | ✓ |
| How does expense splitting work? | Homepage | ✓ |
| How do I start? | Homepage | ✓ |
| How do I join the TRYPS waitlist? | Schema only (homepage) | ✓ |
| How far in advance should you plan a group trip? | Blog: how-to-plan | ✓ |
| What is the easiest way to decide dates for a group trip? | Blog: how-to-plan | ✓ |
| How do you split expenses fairly on a group trip? | Blog: how-to-plan | ✓ |
| What should a group trip itinerary include? | Blog: how-to-plan | ✓ |
| What is the best app for planning group trips? | Blog: how-to-plan | ✓ |
| How much does a 7-day group trip to Oahu cost per person? | Blog: oahu | ✓ |
| Do you need a rental car for a week in Oahu? | Blog: oahu | ✓ |
| When is the best time to visit Oahu with a group of friends? | Blog: oahu | ✓ |
| How far in advance should you book Hanauma Bay? | Blog: oahu | ✓ |
| Is Oahu good for large groups of 6 or more people? | Blog: oahu | ✓ |
| What is the best beach in Oahu for groups? | Blog: oahu | ✓ |
| What is the best restaurant in Oahu for a group dinner? | Blog: oahu | ✓ |
| What should you book before arriving in Oahu? | Blog: oahu | ✓ |
| How long does the Diamond Head hike take? | Blog: oahu | ✓ |
