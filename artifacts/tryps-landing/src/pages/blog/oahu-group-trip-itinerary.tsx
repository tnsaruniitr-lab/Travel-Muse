import { ArrowRight, Star } from "lucide-react";

function TrypsLogo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="blog2-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A0514" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#blog2-logo-grad)" />
      <rect x="8" y="10" width="16" height="3.5" rx="1.75" fill="white" />
      <rect x="13.25" y="13.5" width="5.5" height="10" rx="2.75" fill="white" />
    </svg>
  );
}

const body = "text-[17px] leading-[1.85] text-[#2D1A0A]";
const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

function ArticleImage({ src, alt, width, height, loading = "lazy" }: {
  src: string; alt: string; width: number; height: number; loading?: "eager" | "lazy";
}) {
  return (
    <figure className="my-10">
      <img src={src} alt={alt} width={width} height={height} loading={loading}
        className="w-full rounded-2xl shadow-md"
        style={{ aspectRatio: `${width}/${height}`, background: "linear-gradient(135deg,#FFE4E6,#FDE68A)" }} />
      <figcaption className="text-sm text-[#9CA3AF] mt-3 text-center italic">{alt}</figcaption>
    </figure>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-bold text-[#1C0808] mb-5 pl-5 border-l-4 border-[#9A0514] leading-snug" style={serif}>
      {children}
    </h2>
  );
}

function DaySection({ num, id, title, children }: { num: number; id: string; title: string; children: React.ReactNode }) {
  return (
    <article className="mb-14" id={id} aria-labelledby={`${id}-title`}>
      <div className="flex items-start gap-5 mb-5">
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#9A0514] flex flex-col items-center justify-center shadow-sm shadow-[#9A0514]/30">
          <span className="text-white/60 text-[9px] font-black uppercase tracking-widest leading-none">DAY</span>
          <span className="text-white text-2xl font-black leading-tight">{num}</span>
        </div>
        <h3 id={`${id}-title`} className="text-2xl md:text-3xl font-bold text-[#1C0808] leading-snug pt-2" style={serif}>{title}</h3>
      </div>
      {children}
    </article>
  );
}

function TipBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-5 bg-[#FFE4E6]/60 rounded-xl border border-[#FECDD3] px-5 py-4">
      <p className="text-[15px] text-[#6B3030] leading-relaxed">
        <span className="font-bold text-[#9A0514]">{label}: </span>{children}
      </p>
    </div>
  );
}

function Places({ items }: { items: string[] }) {
  return (
    <div className="mt-5 pt-4 border-t border-[#FECDD3]/60 flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFE4E6] border border-[#FECDD3] text-[#9A0514] text-xs font-semibold">
          {item}
        </span>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-5 list-none p-0">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-[7px] w-2 h-2 rounded-full bg-[#9A0514] shrink-0" />
          <span className="text-[17px] leading-relaxed text-[#2D1A0A]">{t}</span>
        </li>
      ))}
    </ul>
  );
}

const seasons = [
  { tag: "Best", label: "April–June & September–October", desc: "Shoulder season. Lighter crowds, prices 15–25% lower than peak, warm water, all beaches fully swimmable. North Shore is calm — great for swimming and snorkeling.", good: true },
  { tag: "Best for surf", label: "November–March", desc: "Whale season. North Shore waves reach 20–30ft at peak. Cheaper flights. Most beaches are swim-safe; Pipeline and Waimea are spectacular spectator spots.", good: true },
  { tag: "Busy", label: "July–August", desc: "Peak season. Hanauma Bay books further out. Hotels run 20–30% higher. Beaches are crowded. Still great — just plan and book earlier.", good: false },
  { tag: "Variable", label: "December–January", desc: "Holiday premium pricing. Some rain. Worth it for whale sightings off the North Shore and the unique winter energy. Book dining further out.", good: false },
];

const costRows = [
  { cat: "Accommodation (7 nights)", budget: "$280", mid: "$490", note: "Vacation rental split 4–6 ways vs. hotel. Ala Moana rentals run $200–$400/night total." },
  { cat: "Food & drink", budget: "$280", mid: "$490", note: "$40–$70/day per person. Mix of food trucks, udon, plate lunch, and one or two nice dinners." },
  { cat: "Activities", budget: "$120", mid: "$220", note: "Surf lesson ($80), Hanauma Bay ($26), kayak rental ($65), Diamond Head ($5)." },
  { cat: "Transport (on-island)", budget: "$70", mid: "$120", note: "Uber/Lyft most days + 2-day car rental for North Shore and Kailua." },
  { cat: "Incidentals", budget: "$60", mid: "$100", note: "Sunscreen, beach gear, tips, snacks, ABC Store runs." },
];

export default function OahuGroupTripItinerary() {
  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#1C0808] font-sans">

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#9A0514] text-white px-4 py-2 z-50" href="#main-content">
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
            <a href="/group-trip-planning-guide" className="hover:text-[#9A0514] transition-colors">Guide</a>
          </div>
          <a href="/start" className="bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#9A0514]/20 transition-colors">
            Start planning
          </a>
        </nav>
      </header>

      <main id="main-content">
        <article className="max-w-[740px] mx-auto px-6 py-10 pb-24">

          {/* Breadcrumb — 4 levels */}
          <nav aria-label="Breadcrumb" className="text-sm text-[#9CA3AF] mb-8 flex flex-wrap items-center gap-2">
            <a href="/" className="hover:text-[#9A0514] transition-colors">Home</a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#9A0514] transition-colors">Blog</a>
            <span>/</span>
            <a href="/blog/hawaii" className="hover:text-[#9A0514] transition-colors">Hawaii</a>
            <span>/</span>
            <span className="text-[#6B3030]">Oahu Group Trip Itinerary</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE4E6] border border-[#FECDD3] text-[#9A0514] text-xs font-bold uppercase tracking-widest mb-5">
              Destination guides · Hawaii · Group travel
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-[#1C0808] mb-5" style={serif}>
              7-Day Oahu Group Trip Itinerary (2026):{" "}
              <em className="text-[#9A0514] not-italic">What Actually Works</em>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#9CA3AF] mb-7">
              <span className="font-medium text-[#6B3030]">TRYPS Blog</span>
              <span className="w-1 h-1 rounded-full bg-[#D5C4A8]" />
              <time dateTime="2026-04-04">Updated April 2026</time>
              <span className="w-1 h-1 rounded-full bg-[#D5C4A8]" />
              <span>8 min read</span>
            </div>
            <p className="text-xl md:text-2xl text-[#1C0808] font-semibold leading-snug mb-5 border-l-4 border-[#9A0514] pl-5">
              One person wants beach days. Someone wants to eat every two hours. Nobody has booked anything.
            </p>
            <p className={`${body} mb-8`}>Here's a day-by-day Oahu plan with real places, real food, and enough structure that the group chat can finally go quiet.</p>
            <ArticleImage
              src="/images/blog/oahu-group-trip-hero.png"
              alt="Friends watching fireworks from a Waikiki balcony overlooking Diamond Head at sunset"
              width={1200} height={675} loading="eager"
            />
          </header>

          {/* Quick Answer */}
          <div className="quick-answer mb-14 rounded-3xl overflow-hidden border border-[#FECDD3] shadow-sm" role="note" aria-label="Quick summary">
            <div className="bg-gradient-to-r from-[#9A0514] to-[#BE123C] px-6 py-4 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-black">✓</div>
              <h2 className="text-lg font-bold text-white" style={serif}>The short answer</h2>
            </div>
            <div className="bg-white px-6 py-5">
              <p className="text-[#6B3030] text-[15px] leading-relaxed mb-4">
                A 7-day Oahu trip for a friend group costs roughly <strong className="text-[#1C0808]">$1,050–$1,750 per person</strong> excluding flights. Pre-book three things before you land: <strong className="text-[#1C0808]">Hanauma Bay tickets</strong> (sell out days ahead), <strong className="text-[#1C0808]">one dinner reservation</strong> at The Pig and the Lady or MW Restaurant, and <strong className="text-[#1C0808]">transport for the North Shore day</strong>. Everything else can be sorted as you go.
              </p>
            </div>
          </div>

          {/* Pre-arrival checklist */}
          <section className="mb-14 rounded-3xl overflow-hidden border border-[#FECDD3] shadow-sm" aria-labelledby="pre-arrival-heading">
            <div className="bg-gradient-to-r from-[#9A0514] to-[#BE123C] px-6 py-4 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-black">!</div>
              <h2 id="pre-arrival-heading" className="text-lg font-bold text-white" style={serif}>Book these before you leave home</h2>
            </div>
            <div className="bg-white px-6 py-5 space-y-4">
              {[
                { bold: "Hanauma Bay snorkeling tickets", rest: " — non-negotiable. Tickets open at 7am Hawaii time two days before your visit at hawaii.gowaiver.com. They sell out 2–5 days ahead in peak season. $25/person for non-residents." },
                { bold: "One restaurant reservation", rest: " — The Pig and the Lady or MW Restaurant. Both fill up a week or more out for groups. If you miss both, Livestock Tavern on the same Chinatown block is an excellent backup." },
                { bold: "North Shore transport", rest: " — rent a car for the day ($50–$80 split between the group) or book a shuttle through Roberts Hawaii. Don't rely on rideshare for this route." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-[#9A0514] mt-1 shrink-0" />
                  <p className="text-[15px] text-[#1C0808] leading-relaxed">
                    <strong>{item.bold}</strong>{item.rest}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Best time to visit */}
          <section className="mb-14" aria-labelledby="best-time-heading">
            <SectionHeading id="best-time-heading">When is the best time to visit Oahu with friends?</SectionHeading>
            <p className={`${body} mb-6`}>The best months for a group trip to Oahu are <strong>April–June</strong> and <strong>September–October</strong>. Shoulder season means lighter crowds, accommodation prices 15–25% lower than peak summer, and consistently sunny weather with water temperatures around 78°F.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2" role="list" aria-label="Oahu seasons overview">
              {seasons.map((s, i) => (
                <div key={i} role="listitem" className={`rounded-2xl border p-5 ${s.good ? "border-[#9A0514]/30 bg-[#FFE4E6]/40" : "border-[#FECDD3]/60 bg-white"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${s.good ? "bg-[#9A0514] text-white" : "bg-[#FECDD3] text-[#6B3030]"}`}>{s.tag}</span>
                    <span className="font-bold text-[#1C0808] text-sm" style={serif}>{s.label}</span>
                  </div>
                  <p className="text-[13px] text-[#6B3030] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cost breakdown */}
          <section className="mb-14" aria-labelledby="cost-heading">
            <SectionHeading id="cost-heading">How much does a week in Oahu cost per person?</SectionHeading>
            <p className={`${body} mb-5`}>Here is a realistic per-person budget for a group of 4–6 sharing accommodation, based on 2026 prices.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#FECDD3]/60 shadow-sm">
              <table className="w-full text-sm border-collapse" aria-label="Oahu trip cost breakdown per person for 7 days">
                <thead>
                  <tr className="bg-[#9A0514] text-white">
                    <th className="text-left px-4 py-3 font-bold rounded-tl-2xl">Category</th>
                    <th className="text-left px-4 py-3 font-bold">Budget</th>
                    <th className="text-left px-4 py-3 font-bold">Mid-range</th>
                    <th className="text-left px-4 py-3 font-bold rounded-tr-2xl hidden md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FFF9F9]"}>
                      <td className="px-4 py-3 text-[#1C0808] font-medium">{r.cat}</td>
                      <td className="px-4 py-3 text-[#1C0808]">{r.budget}</td>
                      <td className="px-4 py-3 text-[#1C0808]">{r.mid}</td>
                      <td className="px-4 py-3 text-[#6B3030] text-xs leading-relaxed hidden md:table-cell">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#FFE4E6] border-t-2 border-[#9A0514]">
                    <td className="px-4 py-3 font-black text-[#1C0808]">Total (excl. flights)</td>
                    <td className="px-4 py-3 font-black text-[#1C0808]">$810</td>
                    <td className="px-4 py-3 font-black text-[#1C0808]">$1,420</td>
                    <td className="px-4 py-3 text-[#6B3030] text-xs hidden md:table-cell">Flights from US mainland typically add $300–$600 per person.</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          <hr className="border-[#FECDD3]/60 mb-14" />

          {/* Itinerary heading */}
          <section aria-labelledby="itinerary-heading" className="mb-4">
            <SectionHeading id="itinerary-heading">The 7-day Oahu itinerary, day by day</SectionHeading>
          </section>

          {/* Day 1 */}
          <DaySection num={1} id="day-1" title="Arrive, eat, decompress">
            <p className={`${body} mb-4`}>Most flights into Honolulu land mid-afternoon. By the time the group clears baggage and gets to Waikiki, it's early evening and everyone is tired and slightly annoyed. Don't fight this.</p>
            <p className={`${body} mb-4`}>Check into your place, change, and walk down Kalakaua Avenue to <strong>Duke's Waikiki</strong> for the first group meal. It's touristy, yes — but it's open-air, reliably good for fish tacos and mai tais, and right on the beach. Good first-night vibe, not a special occasion restaurant.</p>
            <p className={`${body} mb-4`}>After dinner, walk to the beach. The water at night is warm and the lights of Waikiki behind you look great. No agenda. That's it for day one.</p>
            <TipBox label="Where to stay">The Outrigger Waikiki or Alohilani Resort hits the right balance of location and price for hotels. For groups of 6+, vacation rentals in the Ala Moana area give you shared living space and a kitchen — significantly easier for group coordination.</TipBox>
            <Places items={["Duke's Waikiki", "Kalakaua Avenue", "Waikiki Beach (evening)"]} />
          </DaySection>

          {/* Day 2 */}
          <DaySection num={2} id="day-2" title="First beach day: surf lessons and the best poke on the island">
            <p className={`${body} mb-4`}>Start at <strong>Leonard's Bakery</strong> on Kapahulu Avenue before 9am. Get the original sugar malasadas and the haupia cream-filled. This becomes the group's first shared memory and a recurring debate for the rest of the trip.</p>
            <p className={`${body} mb-4`}>Head to <strong>Kaimana Beach</strong> (also called Sans Souci) at the quiet end of Waikiki, past the Natatorium. Less crowded than central Waikiki, calmer water, and good snorkeling near the rock wall. Grab a mat from ABC Store on the way.</p>
            <p className={`${body} mb-4`}>Lunch at <strong>Marukame Udon</strong> — the line looks long but moves fast. Under $10 a person, great udon, totally chaotic in the best way. Perfect for a hungry group.</p>
            <p className={`${body} mb-4`}>Afternoon: surf lessons with the <strong>Waikiki Beach Boys</strong> who operate right off the beach. Book ahead for groups. Even people who are sure they'll hate it usually love it — most beginners are standing by wave three.</p>
            <p className={`${body} mb-2`}>Dinner: walk to <strong>Ono Seafood</strong> on Kapahulu for the best poke on the island. Get there before 5pm or expect a wait. Eat it on the beach.</p>
            <Places items={["Leonard's Bakery", "Kaimana Beach", "Marukame Udon", "Waikiki Beach Boys", "Ono Seafood"]} />
          </DaySection>

          {/* Day 3 */}
          <DaySection num={3} id="day-3" title="Diamond Head hike + Chinatown nightlife">
            <p className={`${body} mb-4`}>Leave by 7am for <strong>Diamond Head Crater</strong>. It takes about 45 minutes each way, involves some stairs and a tunnel section, and the view from the top is one of the best in Hawaii. Go early — by 9am it's crowded and hot. Parking is limited; Uber or drive and arrive before 7:30am. Entry is <strong>$5 per person</strong>.</p>
            <p className={`${body} mb-4`}>After the hike, shower and get acai bowls at <strong>Banan</strong> in Waikiki. Made from frozen bananas and local fruit — lighter and fresher than most acai shops and exactly what you want post-hike.</p>
            <p className={`${body} mb-4`}>Afternoon is free. Some people will nap. Some will go back to the beach. Let it happen.</p>
            <p className={`${body} mb-4`}>For dinner, <strong>The Pig and the Lady</strong> in Chinatown is Vietnamese-inspired, locally sourced, and one of the best restaurants in the state. Book at least a week ahead for groups. The bone broth pho and the lamb tartare are the moves. If you didn't book ahead, go to <strong>Livestock Tavern</strong> — same Chinatown block, equally good, slightly easier to walk into.</p>
            <p className={`${body} mb-4`}>After dinner, stay in Chinatown. <strong>Bar 35</strong> for craft beer and outdoor seating, then <strong>Tchin Tchin</strong> for cocktails and dancing. Chinatown is Honolulu's real nightlife neighborhood — more interesting and less manufactured than anything in Waikiki.</p>
            <TipBox label="Booking note">The Pig and the Lady does not take same-day reservations. If you're reading this the day before — go directly to Livestock Tavern.</TipBox>
            <Places items={["Diamond Head ($5)", "Banan", "The Pig and the Lady", "Livestock Tavern", "Bar 35", "Tchin Tchin"]} />
          </DaySection>

          {/* Day 4 */}
          <DaySection num={4} id="day-4" title="North Shore day trip: Pipeline, shrimp trucks, and shave ice">
            <p className={`${body} mb-4`}>This is the day the trip turns. Leave by 8am. Take H-2 north through the pineapple fields and come down through Haleiwa. The drive itself is part of it.</p>
            <p className={`${body} mb-4`}>First stop: <strong>Waimea Bay</strong>. In summer (May–September) the water is flat and you can swim and jump from the rock. In winter (October–April) the waves are enormous — 20–30 feet at peak — and you watch from shore. Either version is worth stopping for.</p>
            <p className={`${body} mb-4`}>Continue to <strong>Sunset Beach</strong> and <strong>Pipeline</strong> (Ehukai Beach Park). Even if the surf is flat, standing at Pipeline knowing what happens there in winter is its own thing.</p>
            <p className={`${body} mb-4`}>Lunch at <strong>Giovanni's Shrimp Truck</strong> in Haleiwa. Get the garlic butter scampi — it soaks into the rice in a way nothing else quite replicates. Eat at the picnic tables under the trees.</p>
            <p className={`${body} mb-4`}>Mandatory stop: <strong>Matsumoto's Shave Ice</strong> in Haleiwa town. Get it with ice cream at the bottom. Walk around Haleiwa for 20 minutes — good surf shops and a slower pace that feels different from Waikiki.</p>
            <p className={`${body} mb-4`}>On the way back, check <strong>Laniakea Beach</strong> for sea turtles. They're often right on the sand. Keep your distance and don't touch them.</p>
            <p className={`${body} mb-4`}>Dinner back in town: <strong>Rainbow Drive-In</strong> on Kapahulu. Open since 1961, cash only, cheap, perfect for a long day. The mixed plate is the move.</p>
            <TipBox label="Transport">Rent a car for this day. Uber surges badly on the North Shore and you want the flexibility to stop when you see turtles. Budget $50–$80 for a day rental split between the group.</TipBox>
            <ArticleImage
              src="/images/blog/oahu-north-shore-day.png"
              alt="Friends on scooters along Kamehameha Highway toward North Shore and Turtle Bay"
              width={1200} height={675}
            />
            <Places items={["Waimea Bay", "Pipeline", "Sunset Beach", "Giovanni's Shrimp Truck", "Matsumoto's Shave Ice", "Laniakea turtles", "Rainbow Drive-In"]} />
          </DaySection>

          {/* Day 5 */}
          <DaySection num={5} id="day-5" title="Split day: Hanauma Bay snorkeling vs Kailua Beach kayaking">
            <p className={`${body} mb-4`}>This is a good day to split by energy level. Both options are excellent.</p>
            <p className={`${body} mb-2`}><strong>Option A — Hanauma Bay snorkeling:</strong> The best snorkeling on Oahu, full stop. Water clarity is exceptional and the reef is dense with marine life. Pre-booking online is mandatory — <strong>$25/person</strong>, tickets at hawaii.gowaiver.com. Go first thing; by midday it's crowded and parking is a disaster.</p>
            <p className={`${body} mb-4`}><strong>Option B — Kailua Beach:</strong> Consistently rated one of the best beaches in the United States. Calm turquoise water, almost no current, and far fewer people than Waikiki. Rent kayaks from <strong>Kailua Beach Adventures</strong> and paddle 20 minutes out to the Mokulua Islands — you can land on the beach there and have it nearly to yourself.</p>
            <p className={`${body} mb-4`}>Both groups meet for lunch at <strong>Cinnamon's Restaurant</strong> in Kailua town. The guava chiffon pancake is worth ordering even if you've already eaten. Browse the shops on Kailua Road afterward.</p>
            <p className={`${body} mb-4`}>Evening: drive up to <strong>Tantalus Lookout</strong> (Puu Ualakaa State Park) for sunset. Short drive into the hills above Honolulu, panoramic view of the city and Diamond Head at dusk — the most underrated spot on the island. Get there 30 minutes before sunset.</p>
            <Places items={["Hanauma Bay ($25)", "Kailua Beach", "Mokulua Islands", "Kailua Beach Adventures", "Cinnamon's Restaurant", "Tantalus Lookout"]} />
          </DaySection>

          {/* Day 6 */}
          <DaySection num={6} id="day-6" title="Slow morning, best dinner of the trip">
            <p className={`${body} mb-4`}>Sleep late. Go to <strong>Eggs 'n Things</strong> on Saratoga Road for a proper breakfast — the macadamia nut pancakes and the guava syrup are the reasons people queue here. Don't rush.</p>
            <p className={`${body} mb-4`}><strong>Ala Moana Beach Park</strong> in the late morning for anyone who wants one more calm swim. It's bigger and quieter than Waikiki, with a reef that keeps the water flat.</p>
            <p className={`${body} mb-4`}>Optional cultural stop: the <strong>Bishop Museum</strong> is the best Hawaiian culture and natural history museum in the state. Two hours is enough. Entry is <strong>$29.95/person</strong>.</p>
            <p className={`${body} mb-4`}>Tonight is the dinner you've been saving. <strong>MW Restaurant</strong> on Beretania Street — chef Michelle Karr-Ueoka and Wade Ueoka's flagship. Refined local cuisine, exceptional execution, and the desserts alone justify the reservation. Get the tasting menu if the group is up for it. Budget <strong>$80–$120 per person</strong>. If you made one booking before the trip, make it this one.</p>
            <p className={`${body} mb-4`}>After dinner: one last walk along Waikiki at night. By now you know it well enough to feel like it's yours.</p>
            <TipBox label="Backup dinner">Mahina &amp; Sun's at the Surfjack Hotel is nearly as good, more relaxed in vibe, and slightly easier to book in advance. Either is the best meal of the trip.</TipBox>
            <Places items={["Eggs 'n Things", "Ala Moana Beach Park", "Bishop Museum ($29.95)", "MW Restaurant ($80–120/person)", "Mahina & Sun's"]} />
          </DaySection>

          {/* Day 7 */}
          <DaySection num={7} id="day-7" title="Last beach hour, best fried rice on the island, clean exit">
            <p className={`${body} mb-4`}>Keep it simple. One last Leonard's malasada run if the energy is there. An hour at whatever beach the group liked best all week. Take the photos you forgot to take earlier.</p>
            <p className={`${body} mb-4`}>Last meal before the airport: <strong>Side Street Inn</strong> on Hopaka Street. The best fried rice on the island. It's where Honolulu's chefs go after their own services close. The pork chops and the garlic chicken are the orders.</p>
            <TipBox label="Airport timing">Honolulu airport security on a Sunday afternoon can take 45 minutes. Build in real buffer — nobody wants to end the trip in a sprint through HNL.</TipBox>
            <Places items={["Leonard's Bakery", "Side Street Inn", "One last beach hour"]} />
          </DaySection>

          {/* Short version / summary */}
          <section className="mb-14">
            <SectionHeading id="short-version">The short version</SectionHeading>
            <div className="summary-box bg-gradient-to-br from-[#7B0310] via-[#9A0514] to-[#BE123C] rounded-3xl p-8 text-white shadow-xl shadow-[#9A0514]/20">
              <div className="space-y-4">
                {[
                  { n: "3", label: "Big shared days", val: "North Shore, Kailua split, Chinatown night" },
                  { n: "2", label: "Dinners to book ahead", val: "The Pig and the Lady or MW Restaurant" },
                  { n: "1", label: "Thing to pre-book online", val: "Hanauma Bay — days in advance, non-negotiable" },
                  { n: "$", label: "Rough budget per person", val: "$1,050–$1,750 all-in excluding flights" },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-white/20 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">{row.n}</span>
                    <div>
                      <span className="font-bold text-white">{row.label}: </span>
                      <span className="text-white/80">{row.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ — 9 questions */}
          <section className="mb-14" aria-labelledby="faqs">
            <SectionHeading id="faqs">Frequently asked questions</SectionHeading>
            <div className="space-y-3">
              {[
                { q: "How much does a 7-day group trip to Oahu cost per person?", a: "Budget $150–$250 per person per day all-in for a comfortable group trip. A 7-day trip typically runs $1,050–$1,750 per person excluding flights. Flights from the US mainland add $300–$600 depending on origin and timing. The biggest savings come from splitting vacation rentals rather than booking individual hotel rooms." },
                { q: "Do you need a rental car for a week in Oahu?", a: "You only need a rental car for two days: the North Shore day trip and the Kailua/windward side day. For everything else in Waikiki and Honolulu, rideshare (Uber/Lyft) and walking work fine. Renting just for those two days costs roughly $80–$120 total split between the group." },
                { q: "When is the best time to visit Oahu with a group of friends?", a: "April–June and September–October are the best times to visit Oahu with a group. These shoulder seasons offer lighter crowds, accommodation prices 15–25% lower than peak, and consistently sunny weather with water temperatures around 78°F. Summer (July–August) is peak season — still great but book further ahead and expect higher prices." },
                { q: "How far in advance should you book Hanauma Bay?", a: "Book Hanauma Bay 2–5 days in advance, ideally a week out during peak summer season. Tickets go on sale at 7am Hawaii time exactly two days before each date at hawaii.gowaiver.com. Walk-ins are not permitted. The entry fee is $25 per person for non-residents." },
                { q: "Is Oahu good for large groups of 6 or more people?", a: "Yes, Oahu works very well for large groups of 6 or more, but advance planning matters. Book vacation rentals in the Ala Moana area instead of hotel rooms — shared living space and a kitchen make coordination much easier and cut costs significantly. For restaurants, always call ahead for groups of 6+." },
                { q: "What is the best beach in Oahu for groups?", a: "Kailua Beach on the windward side is consistently rated the best beach on Oahu for groups — calm turquoise water, almost no current, and easy kayak access to the Mokulua Islands. For snorkeling with a group, Hanauma Bay is the top choice (book ahead). For surf lessons and central location, Kaimana Beach (Sans Souci) at the quiet end of Waikiki offers calmer water and fewer crowds than the main Waikiki strip." },
                { q: "What is the best restaurant in Oahu for a group dinner?", a: "MW Restaurant on Beretania Street is the top pick for a special group dinner — refined local Hawaiian cuisine, an optional tasting menu, and exceptional desserts. Budget $80–$120 per person. For a more casual but equally celebrated option, The Pig and the Lady in Chinatown serves Vietnamese-inspired local food and runs $45–$70 per person. Both require reservations at least a week out for groups." },
                { q: "What should you book before arriving in Oahu?", a: "Three things are non-negotiable: (1) Hanauma Bay snorkeling tickets at hawaii.gowaiver.com — they sell out 2–5 days ahead and walk-ins are not allowed; (2) at least one dinner reservation at The Pig and the Lady or MW Restaurant — both fill up a week or more out for groups; (3) transport for the North Shore day trip — either a rental car ($50–$80/day) or a shuttle through Roberts Hawaii." },
                { q: "How long does the Diamond Head hike take?", a: "The Diamond Head hike takes approximately 1.5 to 2 hours round trip for most groups. The trail is 1.6 miles round trip with an elevation gain of about 560 feet. It is not technically difficult but does involve some stairs and a tunnel section. Go before 7:30am to beat the heat and the crowds. Entry is $5 per person." },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-[#FECDD3]/50 px-5 overflow-hidden open:border-[#9A0514] open:shadow-sm transition-all">
                  <summary className="flex justify-between items-center py-4 cursor-pointer list-none select-none gap-4">
                    <h3 className="font-semibold text-base text-[#1C0808] m-0" style={serif}>{faq.q}</h3>
                    <span className="text-[#9A0514] text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="pb-5 pt-1 border-t border-[#FECDD3]/60">
                    <p className="faq-a text-[#6B3030] text-[15px] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA banner */}
          <section className="bg-gradient-to-br from-[#7B0310] via-[#9A0514] to-[#BE123C] rounded-3xl p-10 mb-12 text-white text-center shadow-xl shadow-[#9A0514]/20">
            <h2 className="text-3xl font-bold mb-3" style={serif}>Plan your Oahu trip without the usual chaos</h2>
            <p className="text-white/80 leading-relaxed mb-6 text-base max-w-lg mx-auto">Keep dates, itinerary, and shared costs in one place so the whole group stays aligned — before and during the trip.</p>
            <a href="/start" className="inline-flex items-center gap-2 bg-white text-[#9A0514] font-black px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform text-sm">
              Start planning with TRYPS
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          {/* Related */}
          <section className="border-t border-[#FECDD3]/60 pt-10">
            <h2 className="text-lg font-bold text-[#1C0808] mb-6" style={serif}>Related articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/blog/how-to-plan-a-group-trip", label: "How to plan a group trip: step-by-step guide", desc: "A full coordination system for any friend group trip, from locking dates to splitting expenses." },
                { href: "/blog/how-to-split-expenses-group-trip", label: "How to split expenses on a group trip", desc: "Track shared costs fairly and avoid the awkward money conversations at the end." },
              ].map((r, i) => (
                <a key={i} href={r.href} className="block bg-white rounded-2xl border border-[#FECDD3]/50 p-5 hover:border-[#9A0514] hover:shadow-sm transition-all group">
                  <p className="font-bold text-[#1C0808] text-base mb-1 group-hover:text-[#9A0514] transition-colors" style={serif}>{r.label}</p>
                  <p className="text-[#6B3030] text-sm leading-relaxed">{r.desc}</p>
                </a>
              ))}
            </div>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#FECDD3]/40 bg-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF]">
          <a href="/" className="flex items-center gap-2 font-black text-base text-[#9A0514]">
            <TrypsLogo size={22} />
            TRYPS
          </a>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5 text-xs">
            <a href="/" className="hover:text-[#9A0514] transition-colors">Home</a>
            <a href="/blog" className="hover:text-[#9A0514] transition-colors">Blog</a>
            <a href="/about" className="hover:text-[#9A0514] transition-colors">About</a>
            <a href="/privacy" className="hover:text-[#9A0514] transition-colors">Privacy</a>
          </nav>
          <p className="text-xs">© 2026 TRYPS</p>
        </div>
      </footer>

    </div>
  );
}
