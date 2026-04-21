const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const body = "text-[17px] leading-[1.85] text-[#2D1A0A]";

function TrypsLogo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="nash-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A0514" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#nash-logo-grad)" />
      <rect x="8" y="10" width="16" height="3.5" rx="1.75" fill="white" />
      <rect x="13.25" y="13.5" width="5.5" height="10" rx="2.75" fill="white" />
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-[#FFE4E6] border border-[#FECDD3] text-[#6B3030] px-3 py-1 rounded-full font-medium">
      {children}
    </span>
  );
}

function TipBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 bg-[#FFE4E6]/60 border border-[#FECDD3] rounded-xl p-4">
      <p className="text-xs font-bold text-[#9A0514] uppercase tracking-wider mb-2">{label}</p>
      <p className="text-sm text-[#2D1A0A] leading-relaxed">{children}</p>
    </div>
  );
}

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-[#1C0808] border-l-4 border-[#9A0514] pl-5 mb-4 leading-snug" style={serif}>
      {children}
    </h2>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 text-[#9A0514] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-4 h-4 text-[#9A0514] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DayBadge({ num }: { num: number }) {
  return (
    <div className="shrink-0 flex flex-col items-center bg-[#9A0514] text-white rounded-xl px-3 py-2 text-center leading-tight">
      <span className="text-[10px] font-bold uppercase tracking-wider">DAY</span>
      <span className="text-2xl font-black" style={serif}>{num}</span>
    </div>
  );
}

export default function NashvilleBacheloretteTrip() {
  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#1C0808] font-sans">

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#9A0514] text-white px-4 py-2 z-50 font-medium" href="#main-content">
        Skip to main content
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#FFF9F9]/90 backdrop-blur-md border-b border-[#FECDD3]/40">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2.5 font-black text-2xl tracking-tighter text-[#9A0514]" aria-label="TRYPS home">
            <TrypsLogo size={32} />
            TRYPS
          </a>
          <div className="hidden md:flex items-center gap-7 font-medium text-[#6B3030] text-sm">
            <a href="/" className="hover:text-[#9A0514] transition-colors">Home</a>
            <a href="/blog" className="text-[#9A0514] font-bold">Blog</a>
          </div>
          <a href="/start" className="bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#9A0514]/20 transition-colors">
            Start planning
          </a>
        </nav>
      </header>

      <main id="main-content">
        <article className="max-w-[740px] mx-auto px-6 py-10 pb-24">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#9CA3AF] mb-6 flex items-center gap-1.5 flex-wrap">
            <a href="/" className="hover:text-[#9A0514]">Home</a>
            <span>›</span>
            <a href="/blog" className="hover:text-[#9A0514]">Blog</a>
            <span>›</span>
            <span className="text-[#6B3030]">Nashville Bachelorette Trip</span>
          </nav>

          {/* Category */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-xs font-semibold bg-[#9A0514] text-white px-3 py-1 rounded-full">Destination Guides</span>
            <span className="text-xs text-[#9CA3AF]">·</span>
            <span className="text-xs text-[#9CA3AF]">Tennessee</span>
            <span className="text-xs text-[#9CA3AF]">·</span>
            <span className="text-xs text-[#9CA3AF]">Group travel</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-[#1C0808] mb-4" style={serif}>
            Group Bachelorette Trip to Nashville: Plan, Book &amp; Split
          </h1>

          {/* Byline */}
          <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-6">
            <span>Jake Stein</span>
            <span>·</span>
            <time dateTime="2026-04-21">April 21, 2026</time>
            <span>·</span>
            <span>11 min read</span>
          </div>

          {/* Lede */}
          <p className="text-xl text-[#6B3030] border-l-4 border-[#9A0514] pl-5 mb-3 leading-relaxed italic">
            Nashville is the most-visited bachelorette destination in the country — and the hardest part isn't finding things to do. It's getting eight people to agree on a weekend.
          </p>
          <p className={`${body} mb-8`}>
            Once that's sorted, the rest comes together fast. This guide covers what to pre-book, a day-by-day itinerary, real 2026 costs, and how to split everything without the spreadsheet.
          </p>

          {/* Hero image */}
          <figure className="my-8">
            <img
              src="https://trypsagent.com/images/blog/nashville-bachelorette-trip-hero.png"
              alt="Group of women celebrating on Lower Broadway in Nashville with cowboy boots and neon honky-tonk lights"
              width={740}
              height={420}
              loading="eager"
              className="w-full rounded-2xl shadow-md object-cover"
              style={{ aspectRatio: "740/420", background: "linear-gradient(135deg, #FFE4E6 0%, #9A0514 100%)" }}
            />
            <figcaption className="text-sm text-[#9CA3AF] mt-3 text-center italic">
              Lower Broadway at night — 32 live music venues, no cover, open until 2am
            </figcaption>
          </figure>

          {/* Quick answer */}
          <div className="quick-answer bg-[#FFE4E6]/60 border border-[#FECDD3] rounded-2xl p-6 mb-10" role="note" aria-label="Quick answer">
            <p className="text-xs font-bold text-[#9A0514] uppercase tracking-wider mb-3">Quick answer</p>
            <ul className="space-y-2 text-[15px] text-[#2D1A0A]">
              <li className="flex gap-2"><span className="text-[#9A0514] font-bold mt-0.5">→</span> <span><strong>Cost per person (excl. flights):</strong> $600–$800 budget / $900–$1,200 mid-range for 3 nights</span></li>
              <li className="flex gap-2"><span className="text-[#9A0514] font-bold mt-0.5">→</span> <span><strong>Pre-book:</strong> accommodation (8–12 weeks out), pedal tavern, Studio Goddess dance class, one group dinner</span></li>
              <li className="flex gap-2"><span className="text-[#9A0514] font-bold mt-0.5">→</span> <span><strong>Broadway honky tonks:</strong> free entry, live music noon–2am every day — no booking needed</span></li>
              <li className="flex gap-2"><span className="text-[#9A0514] font-bold mt-0.5">→</span> <span>Everything else can be sorted on arrival</span></li>
            </ul>
          </div>

          {/* Pre-arrival checklist */}
          <section id="pre-arrival" aria-labelledby="pre-arrival-heading">
            <SectionHeading id="pre-arrival-heading">What do you need to book before you arrive?</SectionHeading>
            <p className={`${body} mb-4`}>Four things, in this order. Everything else — Broadway, murals, the Shelby Bridge walk — is walk-up, free, and needs nothing.</p>
            <div className="bg-[#FFE4E6]/40 border border-[#FECDD3] rounded-2xl p-6 mb-8">
              <p className="text-xs font-bold text-[#9A0514] uppercase tracking-wider mb-4">Pre-arrival checklist</p>
              <ul className="space-y-4 text-[15px] text-[#2D1A0A]">
                <li id="step-lock-dates" className="flex gap-3">
                  <ArrowIcon />
                  <div><strong>Lock the dates first</strong> — Use a date poll before booking anything. Spring and fall weekends fill fast. Once the group agrees, everything else can be booked in order.</div>
                </li>
                <li id="step-book-accommodation" className="flex gap-3">
                  <ArrowIcon />
                  <div><strong>Accommodation</strong> — Book 8–12 weeks out for spring/summer weekends. Downtown or The Gulch so Broadway is walkable. Airbnb split among 8–10 people runs $150–$250/person for 3 nights; a hotel like <strong>Graduate Nashville</strong> or <strong>Bobby Hotel</strong> is comparable once you factor in no cleaning fees.</div>
                </li>
                <li id="step-pedal-tavern" className="flex gap-3">
                  <ArrowIcon />
                  <div><strong>Pedal tavern</strong> — <strong>Nashville Pedal Tavern</strong> private tour: $520 flat for up to 15 people (weekdays and early Fri/Sat) or $540 Friday–Saturday after 8pm. That's ~$35–$55/person split. BYOB beer and seltzer only — no wine, no liquor. Starts at 1504 Demonbreun St. For smaller groups, <strong>Music City Crawler</strong> runs shared tours at $38/person; brides ride free.</div>
                </li>
                <li id="step-studio-goddess" className="flex gap-3">
                  <ArrowIcon />
                  <div><strong>Studio Goddess dance class</strong> — Nashville's top-rated bachelorette activity. Packages start at $330 (Basic Bash) up to the So Extra Experience with cowboy hats and party favours. Book 2–3 months ahead; they cap at 5 events per day Thursday–Saturday.</div>
                </li>
                <li id="step-group-dinner" className="flex gap-3">
                  <ArrowIcon />
                  <div><strong>One group dinner reservation</strong> — <strong>Peg Leg Porker</strong>, <strong>Pinewood Social</strong>, or <strong>Pesca</strong> at Fifth + Broadway are the group-dinner picks. All require a reservation for 6+ and book up fast on Saturday nights.</div>
                </li>
                <li id="step-expense-tracking" className="flex gap-3">
                  <ArrowIcon />
                  <div><strong>Set up expense tracking</strong> — Use <strong>TRYPS</strong> to track shared costs before anyone spends a dollar. One link, no downloads required for the group. It replaces the Venmo spreadsheet at the end of the weekend.</div>
                </li>
              </ul>
            </div>
          </section>

          {/* Best time */}
          <section aria-labelledby="best-time-heading">
            <SectionHeading id="best-time-heading">When is the best time to visit Nashville for a bachelorette party?</SectionHeading>
            <p className={`${body} mb-5`}>April–May and September–October are the sweet spot. The weather is right, the rooftop bars are open, and the city's event calendar is at its fullest.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" role="list">
              <div role="listitem" className="border border-[#9A0514]/20 bg-[#FFE4E6]/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-[#9A0514] text-white px-2 py-0.5 rounded-full">Best</span>
                  <span className="font-semibold text-[#1C0808] text-sm">Spring (Apr–May)</span>
                </div>
                <p className="text-sm text-[#2D1A0A] leading-relaxed">Highs of 65–75°F, rooftop bars fully open, outdoor activities at their best. Peak demand — book accommodation 10–12 weeks out.</p>
              </div>
              <div role="listitem" className="border border-[#9A0514]/20 bg-[#FFE4E6]/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-[#9A0514] text-white px-2 py-0.5 rounded-full">Best</span>
                  <span className="font-semibold text-[#1C0808] text-sm">Fall (Sep–Oct)</span>
                </div>
                <p className="text-sm text-[#2D1A0A] leading-relaxed">Crowds thin slightly after Labor Day. Weather stays warm through October. Accommodation prices dip 10–15% from peak. Best all-round value.</p>
              </div>
              <div role="listitem" className="border border-[#FECDD3] bg-white rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-[#FECDD3] text-[#6B3030] px-2 py-0.5 rounded-full">Busy</span>
                  <span className="font-semibold text-[#1C0808] text-sm">Summer (Jun–Aug)</span>
                </div>
                <p className="text-sm text-[#2D1A0A] leading-relaxed">Hot (90°F+ in July–August) and the most crowded Broadway gets. Rooftop pool parties are a bonus. Avoid August if the group is heat-sensitive.</p>
              </div>
              <div role="listitem" className="border border-[#FECDD3] bg-white rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-[#FECDD3] text-[#6B3030] px-2 py-0.5 rounded-full">Budget pick</span>
                  <span className="font-semibold text-[#1C0808] text-sm">Winter (Nov–Feb)</span>
                </div>
                <p className="text-sm text-[#2D1A0A] leading-relaxed">Lower hotel rates, shorter bar lines, easier reservations. Broadway still runs full-steam. Best option if the budget is tight and the group is flexible on outdoor activities.</p>
              </div>
            </div>
          </section>

          {/* Cost table */}
          <section aria-labelledby="cost-heading">
            <SectionHeading id="cost-heading">How much does a Nashville bachelorette trip cost per person?</SectionHeading>
            <p className={`${body} mb-5`}>Budget groups come in at $600–$800 per person; mid-range groups spending on dinner and an extra activity land at $900–$1,200. Both are per-person, excluding flights.</p>
            <div className="overflow-x-auto mb-8">
              <table aria-label="Nashville bachelorette trip cost breakdown per person" className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#9A0514] text-white text-left">
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Budget</th>
                    <th className="px-4 py-3 font-semibold">Mid-range</th>
                    <th className="px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#FECDD3] bg-white">
                    <td className="px-4 py-3 font-medium text-[#1C0808]">Accommodation</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$100–$150</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$150–$250</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">3 nights, split among 8–10. Downtown Airbnb or boutique hotel.</td>
                  </tr>
                  <tr className="border-b border-[#FECDD3] bg-[#FFF9F9]">
                    <td className="px-4 py-3 font-medium text-[#1C0808]">Food &amp; drinks</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$150–$200</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$250–$350</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">Broadway drinks are cheap. Save 30–40% choosing brunch over dinner.</td>
                  </tr>
                  <tr className="border-b border-[#FECDD3] bg-white">
                    <td className="px-4 py-3 font-medium text-[#1C0808]">Pedal tavern</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$38 (shared)</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$35–$55 (private)</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">$520 private for up to 15 via Nashville Pedal Tavern. $38/seat on Music City Crawler shared tours.</td>
                  </tr>
                  <tr className="border-b border-[#FECDD3] bg-[#FFF9F9]">
                    <td className="px-4 py-3 font-medium text-[#1C0808]">Activities</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$0–$40</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$60–$120</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">Studio Goddess from $330/group. Murals, Shelby Bridge, Centennial Park are free.</td>
                  </tr>
                  <tr className="border-b border-[#FECDD3] bg-white">
                    <td className="px-4 py-3 font-medium text-[#1C0808]">Transport (local)</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$20–$40</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$30–$60</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">Mostly walkable from downtown. Budget Uber/Lyft for airport and occasional trips to 12 South.</td>
                  </tr>
                  <tr className="border-b border-[#FECDD3] bg-[#FFF9F9]">
                    <td className="px-4 py-3 font-medium text-[#1C0808]">Incidentals</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$30–$50</td>
                    <td className="px-4 py-3 text-[#2D1A0A]">$50–$80</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">Sashes, cowboy hats, bachelorette merch. Optional but Nashville leans into it.</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-[#FFE4E6] border-t-2 border-[#9A0514] font-bold">
                    <td className="px-4 py-3 text-[#1C0808]">Total (per person)</td>
                    <td className="px-4 py-3 text-[#9A0514]">~$600–$800</td>
                    <td className="px-4 py-3 text-[#9A0514]">~$900–$1,200</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">Excluding flights</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          <hr className="border-[#FECDD3] my-8" />

          {/* Itinerary */}
          <SectionHeading>What does a Nashville bachelorette itinerary look like, day by day?</SectionHeading>

          {/* Day 1 */}
          <article id="day-1" className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <DayBadge num={1} />
              <h3 className="text-xl font-bold text-[#1C0808] mt-1" style={serif}>Arrive, explore the neighbourhoods, hit Broadway</h3>
            </div>
            <div className={`${body} space-y-4`}>
              <p>Check in early if you can and drop the bags. The first afternoon is best spent walking rather than drinking — you'll have two more nights for that. Head to <strong>12 South</strong> for the <strong>I Believe in Nashville mural</strong> and independent boutiques, then cut across to <strong>The Gulch</strong> for the <strong>WhatLiftsYou wings mural</strong> by Kelsey Montague. Both are free, self-guided, and produce the group photos everyone actually shares.</p>
              <p>Back downtown by early evening. Grab cocktails at <strong>L.A. Jackson</strong> (rooftop, The Thompson hotel — reservations recommended) before Broadway opens up for the night. Start the honky-tonk crawl at <strong>Tootsie's Orchid Lounge</strong> — three floors, nonstop live music, no cover, open until 2am. Work through <strong>Robert's Western World</strong> (authentic old-school country, $3 Pabst, cheap fried bologna sandwiches) and <strong>Luke's 32 Bridge</strong> (six floors, rooftop views worth the crowd).</p>
              <p>Night one is about getting your Broadway legs. Don't over-plan it — the honky tonks are free and the music doesn't stop. Save the big dinner and the organised activities for Day 2.</p>
            </div>
            <TipBox label="Where to stay">
              <strong>Graduate Nashville</strong> puts you one floor below White Limozeen rooftop bar — useful for a low-effort first-night drink stop. <strong>Bobby Hotel</strong> on 2nd Ave is a short walk from Broadway. If you're in an Airbnb, prioritise anything in the 37203 or 37219 zip codes (downtown/SoBro). Paying for walkability saves more than it costs in Ubers over 3 nights.
            </TipBox>
            <div className="mt-4 flex flex-wrap gap-2">
              {["12 South", "I Believe in Nashville Mural", "The Gulch", "WhatLiftsYou Mural", "L.A. Jackson", "Tootsie's Orchid Lounge", "Robert's Western World", "Luke's 32 Bridge"].map(p => <Pill key={p}>{p}</Pill>)}
            </div>
          </article>

          {/* Day 2 */}
          <article id="day-2" className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <DayBadge num={2} />
              <h3 className="text-xl font-bold text-[#1C0808] mt-1" style={serif}>The main event: pedal tavern, group dinner, big night out</h3>
            </div>
            <div className={`${body} space-y-4`}>
              <p>Brunch first. <strong>Biscuit Love</strong> in The Gulch is the Nashville bachelorette brunch — homemade biscuits, the East Nasty (fried chicken biscuit with American cheese and sausage gravy), and a relaxed outdoor patio. Reservations are accepted and worth making for groups of 6+. If Biscuit Love is full, <strong>Pinewood Social</strong> on Demonbreun St has the same neighbourhood energy with vintage bowling lanes and a better chance of a walk-in table.</p>
              <p>Afternoon is the pedal tavern. Meet at 1504 Demonbreun St at your booked time — <strong>Nashville Pedal Tavern</strong>'s private tour runs 90 minutes and ends near Lower Broadway. Bring BYOB beer or seltzer (no wine or liquor — it's a city ordinance). The bride rides free if you're on a Music City Crawler shared tour. The tour passes the Ryman, the Country Music Hall of Fame, and Nissan Stadium across the river.</p>
              <p>Golden hour: walk the <strong>Shelby Street Pedestrian Bridge</strong> for the Nashville skyline shot — it's a 10-minute walk from Broadway and produces the best group photo of the weekend. Then dinner. <strong>Peg Leg Porker</strong> on 12th Ave S does serious Nashville BBQ in a space that fits groups; the ribs and pulled pork are the move. If you want something more upscale, <strong>Pesca</strong> at Fifth + Broadway handles large party reservations and has a skyline terrace. Expect $40–$70/person at either with drinks.</p>
              <p>Back to Broadway for the big night. <strong>Casa Rosa</strong> (Miranda Lambert's four-floor venue with rooftop) and <strong>Jason Aldean's Kitchen + Rooftop Bar</strong> are the two stops most bachelorette groups make before settling in at Tootsie's or Robert's for the rest of the night.</p>
            </div>
            <TipBox label="Booking note">
              Nashville city ordinance prohibits entertainment vehicles (pedal taverns, party buses) from stopping at any bar or venue that sells alcohol. Plan your bar visits before or after the tour — the tour itself does pass stops where the operator has agreements for drink specials. Confirm specifics with your operator when you book.
            </TipBox>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Biscuit Love", "Pinewood Social", "Nashville Pedal Tavern", "Shelby Street Pedestrian Bridge", "Peg Leg Porker", "Pesca Fifth + Broadway", "Casa Rosa", "Jason Aldean's Kitchen + Rooftop Bar"].map(p => <Pill key={p}>{p}</Pill>)}
            </div>
          </article>

          {/* Day 3 */}
          <article id="day-3" className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <DayBadge num={3} />
              <h3 className="text-xl font-bold text-[#1C0808] mt-1" style={serif}>Studio Goddess, slow morning, songwriter send-off</h3>
            </div>
            <div className={`${body} space-y-4`}>
              <p>Late start. The group needs it. If no one's flying out before noon, a slow brunch is the right call — <strong>Suzy Wong's Drag'n Brunch</strong> in Midtown runs Friday through Sunday with rotating drag queens; it's a fun, low-energy way to fill the morning after a big night. Otherwise, any coffee shop in 12 South does the job.</p>
              <p>Mid-morning to early afternoon is when <strong>Studio Goddess</strong> works best if you've booked it. The 2-hour session includes a private Britney/Beyoncé dance class, an indoor mural tour for photos, and party favours if you're on the So Extra Experience ($330+ group, depending on package). The Basic Bash focuses on the class — still the most talked-about bachelorette activity in Nashville. Bring your own drinks.</p>
              <p>If the group wants something quieter for the final evening, <strong>The Bluebird Cafe</strong> does seated songwriter rounds — the format is unique to Nashville and genuinely unlike anything you'd find elsewhere. Tickets fill up, so check the schedule at bluebirdcafe.com and book ahead. <strong>The Listening Room Cafe</strong> is the backup if The Bluebird is sold out.</p>
            </div>
            <TipBox label="Airport timing">
              Nashville International (BNA) is 20–30 minutes from downtown depending on traffic. Add 10 minutes if you're leaving on a Sunday afternoon — Broadway has a lunchtime crowd that can slow Ubers getting out of downtown. Build in a buffer for the last day.
            </TipBox>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Suzy Wong's Drag'n Brunch", "Studio Goddess", "The Bluebird Cafe", "The Listening Room Cafe", "Nashville International Airport (BNA)"].map(p => <Pill key={p}>{p}</Pill>)}
            </div>
          </article>

          {/* Summary box */}
          <section className="summary-box bg-gradient-to-br from-[#7B0310] via-[#9A0514] to-[#C0253A] rounded-3xl p-8 mb-12 text-white shadow-xl shadow-[#9A0514]/20">
            <h2 className="text-2xl font-black mb-5" style={serif}>The short version</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-2xl font-black" style={serif}>$600–$1,200</div>
                <div className="text-xs text-white/70 mt-1">per person (excl. flights)</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-2xl font-black" style={serif}>4</div>
                <div className="text-xs text-white/70 mt-1">things to pre-book</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-2xl font-black" style={serif}>$0</div>
                <div className="text-xs text-white/70 mt-1">Broadway cover charge — ever</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-2xl font-black" style={serif}>8–12 wks</div>
                <div className="text-xs text-white/70 mt-1">book accommodation ahead</div>
              </div>
            </div>
            <p className="text-white/80 mt-5 text-sm leading-relaxed">A great Nashville bachelorette weekend has three pre-booked anchors (accommodation, pedal tavern, dinner), one optional activity, and Broadway for the rest. The city does the work — you just need someone to lock the dates and collect the money.</p>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <SectionHeading id="faq-heading">Frequently asked questions</SectionHeading>
            <div className="space-y-3">
              {[
                {
                  q: "How much does a Nashville bachelorette trip cost per person?",
                  a: "A 3-night Nashville bachelorette trip costs $600–$800 per person (budget) or $900–$1,200 per person (mid-range), excluding flights. Budget groups stay in a downtown Airbnb split among 8–10, do one shared pedal tavern ($38/seat on Music City Crawler), and keep dinner casual. Mid-range adds a private pedal tavern ($520 flat for 15), a nicer dinner at Peg Leg Porker or Pesca, and a Studio Goddess class for the group."
                },
                {
                  q: "What should you pre-book for a Nashville bachelorette party?",
                  a: "Pre-book four things: accommodation (8–12 weeks out for spring/summer weekends), the pedal tavern ($520 private for up to 15 via Nashville Pedal Tavern), Studio Goddess dance class (2–3 months out; they limit to 5 events per day Thursday–Saturday), and one group dinner reservation. Everything else — Broadway honky tonks, mural tours, the Shelby Bridge walk — needs no booking."
                },
                {
                  q: "When is the best time to visit Nashville for a bachelorette party?",
                  a: "April–May and September–October are the best months: comfortable weather, full event calendars, and outdoor venues at their best. Summer (June–August) works but is hot and crowded. Winter trips (November–February) get lower hotel rates and shorter bar lines, making them the best budget option."
                },
                {
                  q: "Where should you stay for a Nashville bachelorette party?",
                  a: "Stay downtown or in The Gulch so Broadway is walkable. A downtown Airbnb split among 8–10 runs $150–$250 per person for 3 nights. Hotels like Graduate Nashville and Bobby Hotel put you on or near Broadway with no rideshare needed. Germantown and East Nashville offer a quieter base but budget extra for Ubers to Broadway each evening."
                },
                {
                  q: "Do Nashville honky tonks have a cover charge?",
                  a: "No. Lower Broadway honky tonks — Tootsie's Orchid Lounge, Robert's Western World, Luke's 32 Bridge, Casa Rosa — have no cover charge. Live music runs from around 10am until 2am every day of the week. You pay for drinks, not entry."
                },
                {
                  q: "How do you split expenses for a Nashville bachelorette trip?",
                  a: "TRYPS handles group expense splitting without anyone downloading an app. The organiser creates the trip, invites the group via one link, and logs shared costs — accommodation, pedal tavern, dinner — as they come in. Everyone sees their share in real time. It replaces the Venmo spreadsheet that never quite adds up at the end of the weekend."
                },
                {
                  q: "What is the Nashville Pedal Tavern and how much does it cost?",
                  a: "The Nashville Pedal Tavern is a BYOB 90-minute party bike tour along Honky Tonk Row for up to 15 people. A private booking starts at $520 weekdays and $540 Friday–Saturday evenings after 8pm. The tour starts at 1504 Demonbreun St and ends near Lower Broadway. On Music City Crawler's shared public tours, seats run $38/person and the bride rides free."
                },
                {
                  q: "What is Studio Goddess Nashville?",
                  a: "Studio Goddess is a Nashville bachelorette dance class studio featuring Britney and Beyoncé-style choreography, a pink indoor mural tour, and optional party favours. Group packages start at $330 (Basic Bash) up to the So Extra Experience with cowboy hats and disco ball tumblers. Book 2–3 months ahead for spring and summer weekends — they cap at 5 events per day Thursday through Saturday."
                },
                {
                  q: "What is the best app for planning a group bachelorette trip?",
                  a: "TRYPS is built for group trip coordination. It handles date polling so your group agrees on a weekend fast, a shared itinerary everyone can see and edit, and expense splitting so no one has to chase payments or build a spreadsheet. Invitees join via one link — no app download required. It replaces the WhatsApp thread, the Google Sheet, and the Splitwise account in one place."
                },
              ].map(({ q, a }) => (
                <details key={q} className="border border-[#FECDD3] rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 bg-[#FFF9F9] hover:bg-[#FFE4E6]/40 transition-colors cursor-pointer list-none">
                    <span className="font-semibold text-[#1C0808] text-sm pr-4">{q}</span>
                    <ChevronIcon />
                  </summary>
                  <div className="px-5 pb-4 pt-2 bg-white">
                    <p className="faq-a text-sm text-[#2D1A0A] leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* TRYPS CTA */}
          <div className="mt-14 bg-gradient-to-br from-[#FFE4E6] to-[#FFF9F9] border border-[#FECDD3] rounded-3xl p-8 text-center">
            <p className="text-xs font-bold text-[#9A0514] uppercase tracking-widest mb-3">Plan your Nashville bachelorette trip</p>
            <h2 className="text-2xl font-black text-[#1C0808] mb-3" style={serif}>Get your group organised in minutes</h2>
            <p className="text-[#6B3030] mb-6 max-w-md mx-auto">Lock dates with a poll, build the shared itinerary, and split every expense — all in one place. Your group joins via one link, no download required.</p>
            <a href="/start" className="inline-block bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-[#9A0514]/25 transition-colors">
              Start planning free
            </a>
          </div>

        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#FECDD3]/40 bg-[#FFF9F9] py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#9CA3AF]">
          <a href="/" className="font-black text-[#9A0514] text-lg tracking-tighter flex items-center gap-2">
            <TrypsLogo size={24} /> TRYPS
          </a>
          <div className="flex gap-6">
            <a href="/blog" className="hover:text-[#9A0514] transition-colors">Blog</a>
            <a href="/privacy" className="hover:text-[#9A0514] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#9A0514] transition-colors">Terms</a>
          </div>
          <p>© 2026 TRYPS</p>
        </div>
      </footer>

    </div>
  );
}
