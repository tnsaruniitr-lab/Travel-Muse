import { ArrowRight, Star } from "lucide-react";

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
              Group trip planning
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-[#1C1208] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              7 Days in Oahu With Friends:{" "}
              <em className="text-[#D97706] not-italic">The Itinerary That Actually Works</em>
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#9CA3AF] mb-7">
              <span className="font-medium text-[#6B5230]">TRYPS Blog</span>
              <span className="w-1 h-1 rounded-full bg-[#D5C4A8]" />
              <time dateTime="2026-04-04">April 4, 2026</time>
              <span className="w-1 h-1 rounded-full bg-[#D5C4A8]" />
              <span>10 min read</span>
            </div>

            <p className="text-xl md:text-2xl text-[#1C1208] font-semibold leading-snug mb-5 border-l-4 border-[#D97706] pl-5">
              Planning an Oahu trip with friends sounds easy until the group chat starts doing what group chats do.
            </p>

            <p className={`${body} mb-4`}>
              One person wants beach days, someone wants nightlife, someone wants food stops every two hours, and nobody has locked the plan.
            </p>
            <p className={`${body} mb-8`}>
              This 7-day Oahu itinerary is built for friend groups who want the trip to feel fun, flexible, and actually organized.
            </p>

            <ArticleImage
              src="/images/blog/oahu-group-trip-hero.png"
              alt="Friends on a Hawaiian beach at golden hour, planning their Oahu group trip"
              width={1200}
              height={675}
              loading="eager"
            />
          </header>

          {/* Quick Answer */}
          <section className="mb-14 rounded-3xl overflow-hidden border border-[#F5D78E] shadow-sm" aria-labelledby="quick-answer">
            <div className="bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-6 py-4 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-black">✓</div>
              <h2
                id="quick-answer"
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Quick answer: what is the best way to plan an Oahu group trip?
              </h2>
            </div>
            <div className="bg-white px-6 py-5">
              <p className="text-[#6B5230] mb-4 text-sm font-medium">
                The easiest way to plan an Oahu trip with friends is to stay in Waikiki, keep the first day light, build around 2–3 anchor group days, do one proper North Shore day, leave room for split plans, and keep the itinerary and shared costs visible to everyone in one place.
              </p>
              <ul className="space-y-3 list-none p-0">
                {[
                  "Stay in Waikiki as your base",
                  "Keep day one easy",
                  "Plan 2–3 full-group anchor days",
                  "Leave room for downtime and split plans",
                  "Do a proper North Shore day",
                  "Lock transport and expense tracking early",
                  "Keep the plan visible to the whole group",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-7 h-7 rounded-full bg-[#D97706] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm shadow-[#D97706]/30">{i + 1}</span>
                    <span className="text-[#1C1208] text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Why Oahu works */}
          <section className="mb-14" aria-labelledby="why-oahu-works">
            <SectionHeading id="why-oahu-works">Why Oahu works so well for group trips</SectionHeading>
            <p className={`${body} mb-4`}>
              Oahu works especially well for friend groups because it gives you different kinds of days without forcing complicated logistics. You can do Waikiki beach mornings, easy lunches, sunset plans, late-night food runs, and then switch into a proper island day with a North Shore drive and beach stops.
            </p>
            <p className={body}>
              That flexibility matters. The best group trips are not packed every hour. They have rhythm.
            </p>
          </section>

          {/* Where to stay */}
          <section className="mb-14" aria-labelledby="where-to-stay">
            <SectionHeading id="where-to-stay">Where to stay in Oahu for a group trip</SectionHeading>
            <p className={`${body} mb-4`}>
              For most friend groups, Waikiki is the easiest base. It is not the quietest part of Oahu, but it solves the biggest group problems: food options, walkability, beach access, nightlife, and simpler coordination.
            </p>
            <BulletList items={[
              "Easy breakfast, lunch, and dinner options",
              "Walkable meeting points",
              "Fast access to the beach",
              "Good for groups moving at different speeds",
              "Better for casual nights and last-minute plans",
            ]} />
            <p className={body}>
              If possible, book a place with shared common space. A balcony, living room, or hangout area matters more on a group trip than people expect.
            </p>
          </section>

          {/* Day 1 */}
          <DaySection num={1} id="day-1" title="Arrive, settle in, and keep it light">
            <p className={`${body} mb-4`}>Most groups make the same mistake on arrival day: they land and try to do too much. Do not do that.</p>
            <p className={body}>
              Use day one to check in, drop bags, walk Waikiki, grab food, and let the group settle into vacation mode. A beach walk, coffee stop, or casual dinner is enough.
            </p>
          </DaySection>

          {/* Day 2 */}
          <DaySection num={2} id="day-2" title="Beach day, coffee, and easy momentum">
            <p className={`${body} mb-4`}>
              This is your first real everyone-is-here day. Keep it simple with coffee, beach time, an easy food plan, and no over-engineered schedule.
            </p>
            <p className={body}>The goal is not maximum productivity. The goal is getting the group fully into the trip.</p>
          </DaySection>

          {/* Day 3 */}
          <DaySection num={3} id="day-3" title="Build your first real full-group day">
            <p className={`${body} mb-4`}>
              By day three, the group usually wants something more memorable. This is a good day for a beach block, one shared activity, a proper dinner reservation, and something fun at night.
            </p>
            <p className={body}>
              Longer trips only feel like true group trips when you deliberately create moments where everyone is actually together.
            </p>
          </DaySection>

          {/* Day 4 */}
          <DaySection num={4} id="day-4" title="North Shore day">
            <p className={`${body} mb-4`}>
              If you do Oahu with friends and skip the North Shore, the trip usually feels incomplete.
            </p>
            <p className={`${body} mb-4`}>
              Start early enough, keep the route loose, and leave room for stops instead of forcing every location into a rigid schedule.
            </p>
            <BulletList items={[
              "One or two beach stops",
              "Surf checks at Pipeline or Sunset Beach",
              "Casual food",
              "Turtle spotting if you get lucky",
              "Unplanned pauses that make the day better",
            ]} />
            <ArticleImage
              src="/images/blog/oahu-north-shore-day.png"
              alt="Friends driving along the scenic North Shore coastline of Oahu, Hawaii"
              width={1200}
              height={675}
            />
          </DaySection>

          {/* Day 5 */}
          <DaySection num={5} id="day-5" title="Roaming day or island movement day">
            <p className={`${body} mb-4`}>
              For the right group, this becomes the most fun day. Not because it is the most impressive activity, but because movement and spontaneity create shared moments naturally.
            </p>
            <p className={body}>
              Pick a rough route, keep a few loose stops in mind, and leave room for beach pauses, food, and random detours.
            </p>
          </DaySection>

          {/* Day 6 */}
          <DaySection num={6} id="day-6" title="Slower day, better food, and one last good night">
            <p className={`${body} mb-4`}>
              Every group trip needs one intentionally lighter day. Sleep more, do smoothies or acai, keep the beach casual, and save your energy for one dinner everyone commits to.
            </p>
          </DaySection>

          {/* Day 7 */}
          <DaySection num={7} id="day-7" title="Final beach, last meal, clean exit">
            <p className={`${body} mb-4`}>
              The final day should not be overpacked. If timing allows, do one last beach stop or one memorable meal, then keep checkout and departure smooth.
            </p>
            <p className={body}>Final-day logistics are boring, but they decide how the trip ends.</p>
          </DaySection>

          {/* Food strategy */}
          <section className="mb-14" aria-labelledby="food">
            <SectionHeading id="food">Food strategy for Oahu group trips</SectionHeading>
            <p className={`${body} mb-4`}>You do not need every meal booked. You just need a few reliable anchors.</p>
            <BulletList items={[
              "One good casual group dinner",
              "One repeatable breakfast or smoothie stop",
              "One easy late-night fallback",
            ]} />
            <p className={body}>That rhythm works better than trying to make every meal feel like an event.</p>
          </section>

          {/* What to lock in */}
          <section className="mb-14" aria-labelledby="plan-ahead">
            <SectionHeading id="plan-ahead">What to lock in before the trip</SectionHeading>
            <p className={`${body} mb-4`}>
              Before the trip starts, lock the accommodation, rough day structure, confirmed headcount, major transport decisions, one or two dinner anchors, and how shared costs will be tracked.
            </p>
            <p className={body}>
              You do not need a military schedule. You do need enough structure that the whole group is not asking the same question every morning.
            </p>
          </section>

          {/* What makes it work */}
          <section className="mb-14" aria-labelledby="why-coordination-matters">
            <SectionHeading id="why-coordination-matters">What makes an Oahu group trip actually work</SectionHeading>
            <p className={`${body} mb-4`}>
              The trip usually does not fail because of the destination. It fails because of coordination, unclear expectations, and scattered planning across chat threads.
            </p>
            <p className={`${body} mb-5`}>The best Oahu group trips usually have:</p>
            <BulletList items={[
              "2–3 big shared days",
              "2 easy social or beach days",
              "1 slower reset day",
              "Enough spontaneity",
              "One visible plan the entire group can follow",
            ]} />
          </section>

          {/* Takeaway + CTA */}
          <section className="mb-14" aria-labelledby="cta">
            <SectionHeading id="cta">Make the fun part spontaneous and the logistics clear</SectionHeading>
            <p className={`${body} mb-4`}>
              If you are planning an Oahu trip with friends, keep the fun flexible and the coordination simple.
            </p>
            <p className={`${body} mb-6`}>
              TRYPS helps your group keep dates, itinerary, and shared costs in one place, so the trip feels easy before it even starts.
            </p>
            <div className="bg-[#FEF3C7] border-l-4 border-[#D97706] rounded-r-2xl px-6 py-5">
              <p className="text-[#1C1208] font-semibold text-base leading-relaxed">Keep the plan visible to everyone, lock transport and expenses early, and let the good days happen naturally.</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14" aria-labelledby="faqs">
            <SectionHeading id="faqs">Frequently asked questions</SectionHeading>
            <div className="space-y-3">
              {[
                { q: "Is Oahu good for a group trip with friends?", a: "Yes. Oahu works especially well for friend groups because it combines beaches, food, nightlife, and day trips without making logistics overly complicated." },
                { q: "Where should a group stay in Oahu?", a: "For most friend trips, Waikiki is the easiest base because it is walkable, active, and much easier for group coordination." },
                { q: "How many days do you need in Oahu with friends?", a: "Seven days is a strong trip length for a group. It gives you enough time for relaxed Waikiki days and a proper North Shore day without rushing." },
                { q: "What should you plan in advance for a group trip to Oahu?", a: "Lock accommodation, transport approach, rough itinerary structure, and expense tracking before the trip begins." },
                { q: "What is the best way to organize an Oahu group trip?", a: "Use one shared system for trip details, itinerary, dates, and costs so everyone knows what is happening." },
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
