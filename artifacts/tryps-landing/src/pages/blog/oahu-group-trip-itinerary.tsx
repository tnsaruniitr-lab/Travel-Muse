import { ArrowRight, Star } from "lucide-react";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-bold text-[#1C1208] mb-5 pl-5 border-l-4 border-[#D97706] leading-snug"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      {children}
    </h2>
  );
}

function DaySection({ num, id, title, children }: {
  num: number; id: string; title: string; children: React.ReactNode;
}) {
  return (
    <section className="mb-14" aria-labelledby={id}>
      <div className="flex items-start gap-5 mb-5">
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#D97706] flex flex-col items-center justify-center shadow-sm shadow-[#D97706]/30">
          <span className="text-white/60 text-[9px] font-black uppercase tracking-widest leading-none">DAY</span>
          <span className="text-white text-2xl font-black leading-tight">{num}</span>
        </div>
        <h2
          id={id}
          className="text-2xl md:text-3xl font-bold text-[#1C1208] leading-snug pt-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Places({ items }: { items: string[] }) {
  return (
    <div className="mt-5 pt-4 border-t border-[#F5D78E]/60">
      <span className="text-[11px] font-black uppercase tracking-widest text-[#D97706] mr-3">Places</span>
      <span className="text-[#6B5230] text-sm">{items.join(" · ")}</span>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-5 list-none p-0">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-3 text-[#2D1A0A]">
          <span className="mt-[7px] w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
          <span className="text-[17px] leading-relaxed">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function ArticleImage({ src, alt, width, height, loading = "lazy" }: {
  src: string; alt: string; width: number; height: number; loading?: "eager" | "lazy";
}) {
  return (
    <figure className="my-10">
      <img
        src={src} alt={alt} width={width} height={height} loading={loading}
        className="w-full rounded-2xl shadow-md"
        style={{ aspectRatio: `${width}/${height}`, background: "linear-gradient(135deg,#FEF3C7,#FDE68A,#FEF3C7)" }}
      />
      <figcaption className="text-sm text-[#9CA3AF] mt-3 text-center italic">{alt}</figcaption>
    </figure>
  );
}

const body = "text-[17px] leading-[1.85] text-[#2D1A0A]";

export default function OahuGroupTripItinerary() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#1C1208] font-sans">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#FFFBF0]/90 backdrop-blur-md border-b border-[#F5D78E]/40">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter text-[#D97706]" aria-label="TRYPS home">
            <Star className="h-7 w-7 fill-[#D97706] text-[#D97706]" />
            TRYPS
          </a>
          <div className="hidden md:flex items-center gap-7 font-medium text-[#6B5230] text-sm">
            <a href="/" className="hover:text-[#D97706] transition-colors">Home</a>
            <a href="/blog" className="text-[#D97706] font-bold">Blog</a>
            <a href="/group-trip-planning-guide" className="hover:text-[#D97706] transition-colors">Guide</a>
          </div>
          <a href="/start" className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#D97706]/20 transition-colors">
            Start planning
          </a>
        </nav>
      </header>

      <main id="main-content">
        <article className="max-w-[720px] mx-auto px-6 py-10 pb-24">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-[#9CA3AF] mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-[#D97706] transition-colors">Home</a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#D97706] transition-colors">Blog</a>
            <span>/</span>
            <span className="text-[#6B5230]">Oahu Group Trip Itinerary</span>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F5D78E] text-[#D97706] text-xs font-bold uppercase tracking-widest mb-5">
              Destination guides
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-[#1C1208] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              7 Days in Oahu With Friends:{" "}
              <em className="text-[#D97706] not-italic">An Itinerary That Actually Works</em>
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#9CA3AF] mb-7">
              <span className="font-medium text-[#6B5230]">TRYPS Blog</span>
              <span className="w-1 h-1 rounded-full bg-[#D5C4A8]" />
              <time dateTime="2026-04-04">April 4, 2026</time>
              <span className="w-1 h-1 rounded-full bg-[#D5C4A8]" />
              <span>Updated with current recommendations</span>
            </div>

            <p className="text-xl md:text-2xl text-[#1C1208] font-semibold leading-snug mb-5 border-l-4 border-[#D97706] pl-5">
              One person wants beach days. Someone wants to eat every two hours. Nobody has booked anything.
            </p>

            <p className={`${body} mb-8`}>
              Here's a day-by-day Oahu plan with real places, real food, and enough structure that the group chat can finally go quiet.
            </p>

            <ArticleImage
              src="/images/blog/oahu-group-trip-hero.png"
              alt="Friends watching fireworks from a Waikiki balcony overlooking Diamond Head at sunset"
              width={1200}
              height={675}
              loading="eager"
            />
          </header>

          {/* Before you arrive */}
          <section className="mb-14 rounded-3xl overflow-hidden border border-[#F5D78E] shadow-sm" aria-labelledby="before-arrive">
            <div className="bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-6 py-4 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-black">!</div>
              <h2
                id="before-arrive"
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Before you arrive: the three things to lock in
              </h2>
            </div>
            <div className="bg-white px-6 py-5 space-y-3">
              {[
                "Book Hanauma Bay snorkeling in advance — it sells out days ahead and you can't walk in",
                "Reserve at least one dinner early (Mahina & Sun's, The Pig and the Lady, or MW Restaurant fill up fast)",
                "Sort transport on day one — either rent a car for North Shore day or book a shuttle through Roberts Hawaii",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-[#D97706] mt-1 shrink-0" />
                  <p className="text-[#1C1208] text-[15px] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Day 1 */}
          <DaySection num={1} id="day-1" title="Arrive, eat, decompress">
            <p className={`${body} mb-4`}>Most flights into Honolulu land mid-afternoon. By the time the group clears baggage and gets to Waikiki, it's early evening and everyone is tired and slightly annoyed. Don't fight this.</p>
            <p className={`${body} mb-4`}>Check into your place, change, and walk down Kalakaua Avenue to Duke's Waikiki for the first group meal. It's touristy, yes — but it's open-air, reliably good for fish tacos and mai tais, and right on the beach. It's a good first-night vibe, not a special occasion restaurant.</p>
            <p className={body}>After dinner, walk down to the beach. The water at night is warm and the lights of Waikiki behind you look great. No agenda. That's it for day one.</p>
            <div className="mt-6 bg-[#FFFBF0] rounded-2xl border border-[#F5D78E]/60 px-5 py-4">
              <p className="text-sm font-semibold text-[#1C1208] mb-1">Where to stay</p>
              <p className="text-sm text-[#6B5230] leading-relaxed">For most groups, the Outrigger Waikiki or Alohilani Resort hits the right balance of location and price. If you want shared space, look for vacation rentals in the Ala Moana area — bigger living rooms, easier for groups of 6+.</p>
            </div>
            <Places items={["Duke's Waikiki", "Waikiki Beach (evening walk)", "Kalakaua Ave stroll"]} />
          </DaySection>

          {/* Day 2 */}
          <DaySection num={2} id="day-2" title="The first real beach day">
            <p className={`${body} mb-4`}>Start at Leonard's Bakery on Kapahulu Avenue for malasadas before 9am. Get the original sugar and the haupia cream-filled. This becomes the group's first shared memory and a recurring debate for the rest of the trip.</p>
            <p className={`${body} mb-4`}>From there, head to Kaimana Beach (also called Sans Souci) at the quiet end of Waikiki, past the Natatorium. It's less crowded than central Waikiki, the water is calmer, and there's good snorkeling near the rock wall. Grab a mat from ABC Store on the way.</p>
            <p className={`${body} mb-4`}>Lunch at Marukame Udon — the line looks long but moves fast. Under $10 a person, great udon, totally chaotic in the best way. Perfect for a hungry group.</p>
            <p className={`${body} mb-4`}>Afternoon: surf lessons. The Waikiki Beach Boys operate right off the beach and get most beginners standing on their first wave. Book ahead for groups. Even people who are sure they'll hate it usually love it.</p>
            <p className={body}>Dinner: walk to Ono Seafood on Kapahulu for the best poke on the island. Get there before 5pm or expect to wait. Eat it on the beach.</p>
            <Places items={["Leonard's Bakery", "Kaimana Beach", "Marukame Udon", "Waikiki Beach Boys surf lessons", "Ono Seafood"]} />
          </DaySection>

          {/* Day 3 */}
          <DaySection num={3} id="day-3" title="Diamond Head + Chinatown night">
            <p className={`${body} mb-4`}>Leave by 7am for Diamond Head Crater. It takes about 45 minutes each way, it's not technical, and the view from the top is one of the best in Hawaii. Go early because by 9am it gets crowded and hot. Parking is limited — Uber or drive and arrive early.</p>
            <p className={`${body} mb-4`}>After the hike, shower and get acai bowls at Banan in Waikiki. They're made from frozen bananas and local fruit — lighter and fresher than most acai shops and exactly what you want after a morning hike.</p>
            <p className={`${body} mb-4`}>Afternoon is free. Some people will nap. Some will go back to the beach. Let it happen.</p>
            <p className={`${body} mb-4`}>For dinner, go to The Pig and the Lady in Chinatown. It's Vietnamese-inspired, locally sourced, and genuinely one of the best restaurants in the state. Book at least a week ahead for groups. The bone broth pho and the lamb tartare are the moves.</p>
            <p className={body}>After dinner, stay in Chinatown. Bar 35 is a good casual next stop — great beer list, outdoor seating. Then walk to Tchin Tchin for cocktails and dancing if the group has legs. Chinatown is Honolulu's actual nightlife neighborhood — it's more interesting and less manufactured than anything in Waikiki.</p>
            <div className="mt-5 bg-[#FEF3C7]/60 rounded-xl border border-[#F5D78E] px-4 py-3">
              <p className="text-sm text-[#6B5230] leading-relaxed"><span className="font-bold text-[#D97706]">Booking note:</span> The Pig and the Lady doesn't take same-day reservations. If you didn't book ahead, go to Livestock Tavern instead — same Chinatown block, equally good, slightly easier to walk into.</p>
            </div>
            <Places items={["Diamond Head hike", "Banan acai", "The Pig and the Lady", "Bar 35", "Tchin Tchin"]} />
          </DaySection>

          {/* Day 4 */}
          <DaySection num={4} id="day-4" title="North Shore day">
            <p className={`${body} mb-4`}>This is the day the trip turns. Leave by 8am. Take H-2 north through the pineapple fields and come down through Haleiwa. The drive itself is part of it.</p>
            <p className={`${body} mb-4`}>First stop: Waimea Bay. In summer the water is flat and you can swim and jump from the rock. In winter (October–April) the waves are enormous and you watch from the shore. Either version is worth stopping for.</p>
            <p className={`${body} mb-4`}>Keep going to Sunset Beach and Pipeline (Ehukai Beach Park). Even if the surf is flat, standing on Pipeline and knowing what happens there in winter is its own thing.</p>
            <p className={`${body} mb-4`}>Lunch is at Giovanni's Shrimp Truck in Haleiwa. There will be a line. Get the scampi — the garlic butter soaks into the rice in a way that nothing else quite replicates. Eat at the picnic tables under the trees.</p>
            <p className={`${body} mb-4`}>Mandatory stop: Matsumoto's Shave Ice in Haleiwa town. Get it with ice cream at the bottom. Walk around Haleiwa for 20 minutes — it has good surf shops and a slower pace that feels different from Waikiki.</p>
            <p className={`${body} mb-4`}>On the way back, if anyone spots turtles on the beach near Laniakea, stop. They're often right there on the sand. Keep distance and don't touch them.</p>
            <p className={body}>Dinner back in town: Rainbow Drive-In on Kapahulu for a plate lunch. It's a Honolulu institution — open since 1961, cash only, cheap, perfect for a late return from a long day.</p>
            <ArticleImage
              src="/images/blog/oahu-north-shore-day.png"
              alt="Friends on scooters along Kamehameha Highway toward North Shore and Turtle Bay"
              width={1200}
              height={675}
            />
            <Places items={["Waimea Bay", "Pipeline", "Sunset Beach", "Giovanni's Shrimp Truck", "Matsumoto's Shave Ice", "Laniakea turtle beach", "Rainbow Drive-In"]} />
          </DaySection>

          {/* Day 5 */}
          <DaySection num={5} id="day-5" title="Kailua side + Hanauma Bay split">
            <p className={`${body} mb-4`}>This is a good day to split by energy level. Half the group can go to Hanauma Bay for snorkeling (book online in advance — non-negotiable). The water clarity is exceptional and the reef is full. Go first thing; by midday it's crowded and the parking situation gets difficult.</p>
            <p className={`${body} mb-4`}>The other half can drive 30 minutes to the windward side to Kailua Beach — consistently rated one of the best beaches in the US, calm turquoise water, almost no current, and far fewer people than Waikiki. Rent kayaks from Kailua Beach Adventures and paddle out to the Mokulua Islands. It takes about 20 minutes each way and you can land on the beach there.</p>
            <p className={`${body} mb-4`}>Both groups converge at lunch in Kailua town. Cinnamon's Restaurant does a famous guava chiffon pancake that's worth ordering even if you've already eaten. Then browse the shops on Kailua Road.</p>
            <p className={body}>Evening: sunset at Puu Ualakaa State Park (Tantalus Lookout). It's a short drive up into the hills above Honolulu and the view of the city and Diamond Head at dusk is one of the most underrated spots on the island. Get there 30 minutes before sunset.</p>
            <Places items={["Hanauma Bay snorkeling", "Kailua Beach", "Mokulua Islands kayak", "Cinnamon's Restaurant", "Tantalus Lookout sunset"]} />
          </DaySection>

          {/* Day 6 */}
          <DaySection num={6} id="day-6" title="Slow morning, the best dinner of the trip">
            <p className={`${body} mb-4`}>Sleep late. Go to Eggs 'n Things on Saratoga Road for a proper breakfast — the macadamia nut pancakes and the guava syrup are the reasons people queue here. Don't rush.</p>
            <p className={`${body} mb-4`}>Ala Moana Beach Park in the late morning if anyone wants one last calm swim. It's bigger and quieter than Waikiki and there's a reef that keeps the water flat.</p>
            <p className={`${body} mb-4`}>If the group wants to do one cultural stop, the Bishop Museum is the best natural history and Hawaiian culture museum in the state. Two hours there is enough.</p>
            <p className={`${body} mb-4`}>Tonight is the dinner you've been saving. MW Restaurant on Beretania Street is chef Michelle Karr-Ueoka and Wade Ueoka's flagship — refined local cuisine, exceptional execution, and the desserts alone justify the reservation. If you made one booking before the trip, make it this one. Get the tasting menu if the group is up for it.</p>
            <p className={body}>After dinner: one last walk along Waikiki at night. The beach is different at night — fewer people, warmer air, and by now you know it well enough to feel like it's yours.</p>
            <div className="mt-5 bg-[#FEF3C7]/60 rounded-xl border border-[#F5D78E] px-4 py-3">
              <p className="text-sm text-[#6B5230] leading-relaxed"><span className="font-bold text-[#D97706]">Backup dinner:</span> Mahina &amp; Sun's at the Surfjack Hotel is nearly as good, more relaxed in vibe, and takes reservations further in advance. Either works as your group's best meal.</p>
            </div>
            <Places items={["Eggs 'n Things", "Ala Moana Beach Park", "Bishop Museum", "MW Restaurant"]} />
          </DaySection>

          {/* Day 7 */}
          <DaySection num={7} id="day-7" title="Last beach, last meal, clean exit">
            <p className={`${body} mb-4`}>Keep it simple. One last Leonard's malasada run if the energy is there. An hour at whatever beach the group has liked best all week. Take the photos you forgot to take earlier.</p>
            <p className={`${body} mb-4`}>For the last meal before the airport: Side Street Inn on Hopaka Street does the best fried rice on the island. It's where Honolulu's chefs go after their own services close. The pork chops and the garlic chicken are the orders.</p>
            <p className={body}>Build in real buffer for the airport. Honolulu airport security on a Sunday afternoon can take 45 minutes and nobody wants to end the trip in a sprint.</p>
            <Places items={["Leonard's Bakery", "Side Street Inn", "One last beach hour"]} />
          </DaySection>

          {/* Short version summary */}
          <section className="mb-14" aria-labelledby="short-version">
            <SectionHeading id="short-version">The short version</SectionHeading>
            <div className="bg-white rounded-3xl border border-[#F5D78E]/60 divide-y divide-[#F5D78E]/60 overflow-hidden">
              {[
                { label: "3 big shared days", value: "North Shore, Kailua split, Chinatown night" },
                { label: "2 dinners to book ahead", value: "The Pig and the Lady or MW Restaurant" },
                { label: "1 thing to pre-book online", value: "Hanauma Bay — days in advance, non-negotiable" },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-4 px-5 py-4">
                  <span className="w-7 h-7 rounded-full bg-[#D97706] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm shadow-[#D97706]/30 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="font-bold text-[#1C1208] text-base">{row.label}</p>
                    <p className="text-[#6B5230] text-sm">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14" aria-labelledby="faqs">
            <SectionHeading id="faqs">Frequently asked questions</SectionHeading>
            <div className="space-y-3">
              {[
                { q: "Is Oahu good for a group trip with friends?", a: "Yes. Oahu works especially well for friend groups because it combines beaches, food, nightlife, and day trips without making logistics overly complicated." },
                { q: "Where should a group stay in Oahu?", a: "For most friend trips, Waikiki is the easiest base because it is walkable, active, and much easier for group coordination. The Outrigger Waikiki or Alohilani Resort are solid choices; vacation rentals in Ala Moana work well for larger groups." },
                { q: "How many days do you need in Oahu with friends?", a: "Seven days is a strong trip length for a group. It gives you enough time for relaxed Waikiki days, a proper North Shore day, a windward side excursion, and one or two great dinner nights without rushing." },
                { q: "What should you plan in advance for a group trip to Oahu?", a: "Lock Hanauma Bay (sells out days ahead), at least one dinner reservation (The Pig and the Lady or MW Restaurant), and your transport approach for the North Shore before the trip begins." },
                { q: "What is the best way to organize an Oahu group trip?", a: "Use one shared system for the itinerary, dates, and costs so everyone knows what is happening and nobody is managing the plan solo through the group chat." },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-[#F5D78E]/50 px-5 overflow-hidden open:border-[#D97706] open:shadow-sm transition-all">
                  <summary className="flex justify-between items-center py-4 cursor-pointer list-none select-none gap-4">
                    <h3 className="font-semibold text-base text-[#1C1208] m-0" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{faq.q}</h3>
                    <span className="text-[#D97706] text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="pb-5 pt-1 border-t border-[#F5D78E]/60">
                    <p className="text-[#6B5230] text-[15px] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA banner */}
          <section className="bg-gradient-to-br from-[#B45309] via-[#D97706] to-[#F59E0B] rounded-3xl p-10 mb-12 text-white text-center shadow-xl shadow-[#D97706]/20">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Plan your Oahu trip without the usual chaos
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 text-base max-w-lg mx-auto">Keep dates, itinerary, and shared costs in one place so the whole group stays aligned — before and during the trip.</p>
            <a href="/start" className="inline-flex items-center gap-2 bg-white text-[#D97706] font-black px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform text-sm">
              Start planning with TRYPS
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          {/* Related articles */}
          <section className="border-t border-[#F5D78E]/60 pt-10">
            <h2
              className="text-lg font-bold text-[#1C1208] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Related articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/blog/how-to-plan-a-group-trip", label: "How to plan a group trip: step-by-step guide", desc: "A full coordination system for any friend group trip, from locking dates to splitting expenses." },
                { href: "/blog/how-to-split-expenses-group-trip", label: "How to split expenses on a group trip", desc: "Track shared costs fairly and avoid the awkward money conversations at the end." },
              ].map((r, i) => (
                <a key={i} href={r.href} className="block bg-white rounded-2xl border border-[#F5D78E]/50 p-5 hover:border-[#D97706] hover:shadow-sm transition-all group">
                  <p className="font-bold text-[#1C1208] text-base mb-1 group-hover:text-[#D97706] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{r.label}</p>
                  <p className="text-[#6B5230] text-sm leading-relaxed">{r.desc}</p>
                </a>
              ))}
            </div>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F5D78E]/40 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF]">
          <a href="/" className="flex items-center gap-2 font-black text-base text-[#D97706]">
            <Star className="h-5 w-5 fill-[#D97706] text-[#D97706]" />
            TRYPS
          </a>
          <nav aria-label="Blog footer navigation" className="flex flex-wrap gap-5 text-xs">
            <a href="/" className="hover:text-[#D97706] transition-colors">Home</a>
            <a href="/blog" className="hover:text-[#D97706] transition-colors">Blog</a>
            <a href="/about" className="hover:text-[#D97706] transition-colors">About</a>
            <a href="/privacy" className="hover:text-[#D97706] transition-colors">Privacy</a>
          </nav>
          <p className="text-xs">© 2026 TRYPS</p>
        </div>
      </footer>

    </div>
  );
}
