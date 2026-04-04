import { ArrowRight, Star } from "lucide-react";

function ArticleImage({ src, alt, width, height, loading = "lazy" }: {
  src: string; alt: string; width: number; height: number; loading?: "eager" | "lazy";
}) {
  return (
    <figure className="my-7">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className="w-full rounded-2xl"
        style={{ aspectRatio: `${width}/${height}`, background: "linear-gradient(135deg,#FEF3C7,#FDE68A,#FEF3C7)" }}
      />
      <figcaption className="text-sm text-[#9CA3AF] mt-3 text-center">{alt}</figcaption>
    </figure>
  );
}

export default function HowToPlanGroupTrip() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#1C1208] font-sans">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#FFFBF0]/85 backdrop-blur-md border-b border-[#F5D78E]/40">
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
        <article className="max-w-[760px] mx-auto px-6 py-10 pb-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-[#9CA3AF] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#D97706] transition-colors">Home</a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#D97706] transition-colors">Blog</a>
            <span>/</span>
            <span className="text-[#6B5230]">How to Plan a Group Trip</span>
          </nav>

          {/* Article header */}
          <header className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F5D78E] text-[#D97706] text-xs font-bold uppercase tracking-widest mb-4">
              Group trip planning
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-[#1C1208] mb-4">
              How to Plan a Group Trip: Step-by-Step Guide
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#9CA3AF] mb-5">
              <span>TRYPS Blog</span>
              <span>·</span>
              <time dateTime="2026-04-04">April 4, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>

            <p className="text-xl text-[#1C1208] font-semibold leading-relaxed mb-4">
              Planning a group trip sounds fun until someone says "I'm flexible" and disappears for three days.
            </p>
            <p className="text-base text-[#6B5230] leading-relaxed mb-3">
              One person is excited. Two reply instantly. A few respond late. Someone never replies but still wants to come. Meanwhile, dates are floating, ideas are scattered across chats, and no one is quite sure what's actually decided.
            </p>
            <p className="text-base text-[#6B5230] leading-relaxed mb-3">That's where most group trips get stuck.</p>
            <p className="text-base text-[#6B5230] leading-relaxed mb-3">
              The easiest way to plan a group trip is not more discussion — it's better structure. Lock the group, align on dates, agree on budget, build the itinerary together, and track expenses clearly in one place.
            </p>
            <p className="text-base text-[#6B5230] leading-relaxed mb-6">
              Tools like TRYPS are built for exactly this. You share one link, everyone joins, and the planning happens in one shared flow instead of five different apps.
            </p>

            <ArticleImage
              src="/images/blog/how-to-plan-group-trip-hero.jpg"
              alt="Friends planning a group trip together on their phones"
              width={1200}
              height={675}
              loading="eager"
            />
          </header>

          {/* Quick Answer */}
          <section className="bg-white rounded-3xl border border-[#F5D78E]/60 p-6 mb-10 shadow-sm" aria-labelledby="quick-answer-title">
            <h2 id="quick-answer-title" className="text-xl font-black text-[#D97706] mb-3">Quick answer</h2>
            <p className="text-[#6B5230] mb-4 text-sm">To plan a group trip without chaos:</p>
            <ol className="space-y-2 list-none p-0">
              {[
                "Confirm who is actually going",
                "Shortlist 2–3 destination options",
                "Lock dates using a group poll",
                "Set a realistic budget range",
                "Build a shared itinerary",
                "Assign simple responsibilities",
                "Track and split expenses clearly",
                "Finalize bookings quickly",
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FEF3C7] text-[#D97706] font-black text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-[#1C1208] text-sm font-medium">{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-[#6B5230] text-sm mt-4">The key is simple: reduce coordination friction. The fewer moving parts, the smoother everything becomes.</p>
          </section>

          {/* Why chaotic */}
          <section className="mb-10" aria-labelledby="why-chaotic">
            <h2 id="why-chaotic" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4 pb-3 border-b border-[#F5D78E]/60">Why group trips become chaotic</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">Most group trips don't fail because people disagree.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">They fail because everything is scattered.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">One plan lives in WhatsApp. Another in someone's Notes app. Flights are discussed in one place, stays in another, and expenses somewhere else entirely. By the time you're ready to decide, no one knows what's final.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Sounds familiar — because it happens every time.</p>
            <p className="text-[#6B5230] leading-relaxed">Planning a group trip isn't really about ideas. It's about keeping everyone aligned at the same time.</p>
          </section>

          {/* Step 1 */}
          <section className="mb-10" aria-labelledby="step-1">
            <div className="flex items-center gap-3 mb-3"><span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Step 1</span><div className="flex-1 h-px bg-[#F5D78E]" /></div>
            <h2 id="step-1" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">Confirm who is actually going</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">Start here, not with destinations.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">You don't need perfect commitment — but you do need clarity on who's seriously in.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">There's a big difference between:</p>
            <ul className="space-y-2 mb-4 list-none p-0">
              {['"sounds fun"', '"I\'m in if dates work"', '"book it, I\'m coming"'].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B5230]"><span className="text-[#D97706] shrink-0">—</span>{t}</li>
              ))}
            </ul>
            <p className="text-[#6B5230] leading-relaxed mb-3">If you mix all three, planning drags.</p>
            <p className="text-[#6B5230] leading-relaxed">Keep a working group of people who are actively participating. You can always add others later, but early clarity makes everything faster.</p>
          </section>

          {/* Step 2 */}
          <section className="mb-10" aria-labelledby="step-2">
            <div className="flex items-center gap-3 mb-3"><span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Step 2</span><div className="flex-1 h-px bg-[#F5D78E]" /></div>
            <h2 id="step-2" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">Shortlist destination options</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">Open-ended questions slow everything down.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Instead of "where should we go?", narrow it to 2–3 solid options.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Think in terms of:</p>
            <ul className="space-y-2 mb-4 list-none p-0">
              {["budget range","travel time","visa friction","weather","overall vibe"].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B5230]"><span className="text-[#D97706] shrink-0">—</span>{t}</li>
              ))}
            </ul>
            <p className="text-[#6B5230] leading-relaxed mb-3">For example, a beach weekend and a ski trip aren't just different locations — they're completely different trips.</p>
            <p className="text-[#6B5230] leading-relaxed">Once the options are clear, decisions become much easier.</p>
          </section>

          {/* Step 3 */}
          <section className="mb-10" aria-labelledby="step-3">
            <div className="flex items-center gap-3 mb-3"><span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Step 3</span><div className="flex-1 h-px bg-[#F5D78E]" /></div>
            <h2 id="step-3" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">Lock dates with a group poll</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">This is where most trips quietly fall apart.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Chat-based planning doesn't work here. People miss messages, reply late, or say "I'm flexible" without actually confirming anything.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">A date poll fixes this. Everyone votes. You see overlap instantly. No chasing.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">In TRYPS, this happens inside the trip itself — no switching tools, no back-and-forth.</p>
            <p className="text-[#6B5230] leading-relaxed mb-5">Once dates are locked, the trip becomes real.</p>
            <ArticleImage
              src="/images/blog/group-trip-date-poll.jpg"
              alt="Group trip date poll showing friends voting on travel dates"
              width={1200}
              height={750}
            />
          </section>

          {/* Step 4 */}
          <section className="mb-10" aria-labelledby="step-4">
            <div className="flex items-center gap-3 mb-3"><span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Step 4</span><div className="flex-1 h-px bg-[#F5D78E]" /></div>
            <h2 id="step-4" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">Set the budget early</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">No one likes talking about money — but avoiding it is worse.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Budget misalignment is one of the fastest ways to create friction. One person is thinking premium hotels, another is thinking budget stays, and no one realizes until it's too late.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Set a rough range early:</p>
            <ul className="space-y-2 mb-4 list-none p-0">
              {["total spend per person","type of stay","key activities","comfort vs cost trade-offs"].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B5230]"><span className="text-[#D97706] shrink-0">—</span>{t}</li>
              ))}
            </ul>
            <p className="text-[#6B5230] leading-relaxed">It doesn't need to be perfect. It just needs to be aligned.</p>
          </section>

          {/* Step 5 */}
          <section className="mb-10" aria-labelledby="step-5">
            <div className="flex items-center gap-3 mb-3"><span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Step 5</span><div className="flex-1 h-px bg-[#F5D78E]" /></div>
            <h2 id="step-5" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">Build a shared itinerary</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">This is where the trip starts taking shape.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Not a minute-by-minute schedule — just a clear view of:</p>
            <ul className="space-y-2 mb-4 list-none p-0">
              {["where you're staying","what the main plans are","what's optional","what's already booked"].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B5230]"><span className="text-[#D97706] shrink-0">—</span>{t}</li>
              ))}
            </ul>
            <p className="text-[#6B5230] leading-relaxed mb-3">The goal is alignment, not control.</p>
            <p className="text-[#6B5230] leading-relaxed mb-5">TRYPS lets everyone see and contribute to the same plan, so there's no confusion about what's happening.</p>
            <ArticleImage
              src="/images/blog/shared-group-trip-itinerary.jpg"
              alt="Shared itinerary for a group trip planned with friends"
              width={1200}
              height={750}
            />
          </section>

          {/* Step 6 */}
          <section className="mb-10" aria-labelledby="step-6">
            <div className="flex items-center gap-3 mb-3"><span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Step 6</span><div className="flex-1 h-px bg-[#F5D78E]" /></div>
            <h2 id="step-6" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">Assign responsibilities</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">If one person does everything, things slow down.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Instead, split simple roles:</p>
            <ul className="space-y-2 mb-4 list-none p-0">
              {["flights","accommodation","activities","local logistics"].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B5230]"><span className="text-[#D97706] shrink-0">—</span>{t}</li>
              ))}
            </ul>
            <p className="text-[#6B5230] leading-relaxed mb-3">It's not about strict ownership — it's about momentum.</p>
            <p className="text-[#6B5230] leading-relaxed">People engage more when they have a role, even a small one.</p>
          </section>

          {/* Step 7 */}
          <section className="mb-10" aria-labelledby="step-7">
            <div className="flex items-center gap-3 mb-3"><span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Step 7</span><div className="flex-1 h-px bg-[#F5D78E]" /></div>
            <h2 id="step-7" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">Track and split expenses clearly</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">This is where things can get awkward if handled badly.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">Someone pays for dinner. Someone else books the stay. A few costs are forgotten. By the end, no one is sure who owes what.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">And then comes the "we'll settle later" phase — which rarely goes well.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">The fix is simple: track expenses as they happen.</p>
            <ul className="space-y-2 mb-4 list-none p-0">
              {["log costs immediately","keep everything visible","avoid reconstructing later"].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B5230]"><span className="text-[#D97706] shrink-0">—</span>{t}</li>
              ))}
            </ul>
            <p className="text-[#6B5230] leading-relaxed mb-5">TRYPS keeps this inside the same trip flow, so you're not jumping between planning tools and expense apps.</p>
            <ArticleImage
              src="/images/blog/group-trip-expense-tracker.jpg"
              alt="Group trip expense tracker showing shared costs and balances"
              width={1200}
              height={750}
            />
          </section>

          {/* Step 8 */}
          <section className="mb-10" aria-labelledby="step-8">
            <div className="flex items-center gap-3 mb-3"><span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Step 8</span><div className="flex-1 h-px bg-[#F5D78E]" /></div>
            <h2 id="step-8" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">Finalize bookings and move</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">Once dates, budget, and plans are aligned — don't wait.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">This is where momentum matters. Confirm:</p>
            <ul className="space-y-2 mb-4 list-none p-0">
              {["flights or transport","accommodation","key reservations","arrival details"].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B5230]"><span className="text-[#D97706] shrink-0">—</span>{t}</li>
              ))}
            </ul>
            <p className="text-[#6B5230] leading-relaxed mb-3">The longer you wait, the more things drift again.</p>
            <p className="text-[#6B5230] leading-relaxed">Decisions lose energy if they're not followed by action.</p>
          </section>

          {/* Common mistakes */}
          <section className="mb-10" aria-labelledby="mistakes">
            <h2 id="mistakes" className="text-2xl font-black text-[#1C1208] tracking-tight mb-6 pb-3 border-b border-[#F5D78E]/60">Common mistakes to avoid</h2>
            <div className="space-y-5">
              {[
                { h: "Starting with too many people", p: "More people means more coordination and slower decisions." },
                { h: "Keeping everything in chat", p: "Chats are great for talking, not for organizing." },
                { h: "Delaying date decisions", p: "Until dates are locked, nothing else really moves." },
                { h: "Skipping the budget conversation", p: "Unspoken assumptions always surface later." },
                { h: "Using too many tools", p: "Every extra tool adds friction and confusion." },
              ].map((m, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-[#F5D78E]/50">
                  <div className="w-7 h-7 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 text-red-400 text-xs font-black">✕</div>
                  <div>
                    <h3 className="font-black text-[#1C1208] text-sm mb-1">{m.h}</h3>
                    <p className="text-[#6B5230] text-sm leading-relaxed">{m.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Easiest way */}
          <section className="mb-10" aria-labelledby="easiest-way">
            <h2 id="easiest-way" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4 pb-3 border-b border-[#F5D78E]/60">The easiest way to plan a group trip today</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">The easiest system is the one with the least setup.</p>
            <ul className="space-y-2 mb-4 list-none p-0">
              {["one link to invite","one place to plan","one flow for decisions"].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B5230]"><span className="text-[#D97706] shrink-0">—</span>{t}</li>
              ))}
            </ul>
            <p className="text-[#6B5230] leading-relaxed mb-3">TRYPS is designed around this. You send a link. Your friends join. You vote on dates, build the itinerary, and track expenses — all in one place.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">No downloads. No setup. No switching between tools.</p>
            <p className="text-[#6B5230] leading-relaxed">For most friend trips, that's the difference between "we should go" and actually going.</p>
          </section>

          {/* Takeaway */}
          <section className="mb-10" aria-labelledby="takeaway">
            <h2 id="takeaway" className="text-2xl font-black text-[#1C1208] tracking-tight mb-4 pb-3 border-b border-[#F5D78E]/60">Final takeaway</h2>
            <p className="text-[#6B5230] leading-relaxed mb-3">Group trips don't fail because they're complicated.</p>
            <p className="text-[#6B5230] leading-relaxed mb-3">They fail because coordination is messy.</p>
            <p className="text-[#6B5230] leading-relaxed mb-5">Once everything is visible and shared, decisions happen faster, plans stay clear, and the group actually follows through.</p>
            <div className="bg-[#FEF3C7] border-l-4 border-[#D97706] rounded-r-2xl px-5 py-4">
              <p className="text-[#1C1208] font-semibold text-sm">Keep it simple: define the group, lock the dates, align on budget, build the plan, and track expenses in one place.</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10" aria-labelledby="faq">
            <h2 id="faq" className="text-2xl font-black text-[#1C1208] tracking-tight mb-6 pb-3 border-b border-[#F5D78E]/60">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                { q: "How far in advance should you plan a group trip?", a: "For shorter trips, one to three months works. For international or larger groups, three to six months is safer." },
                { q: "What is the easiest way to decide dates for a group trip?", a: "Use a date poll. It's faster and more reliable than chat discussions." },
                { q: "How do you split expenses fairly on a group trip?", a: "Track expenses as they happen and keep balances visible. Avoid settling everything at the end." },
                { q: "What should a group trip itinerary include?", a: "Travel dates, accommodation, major activities, and key logistics everyone needs to know." },
                { q: "What is the best app for planning group trips?", a: "The best tools combine date coordination, itinerary planning, and expense tracking in one place so the group stays aligned." },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-[#F5D78E]/50 px-5 overflow-hidden open:border-[#D97706] open:bg-[#FEF3C7] transition-colors">
                  <summary className="flex justify-between items-center py-4 cursor-pointer list-none select-none">
                    <h3 className="font-black text-base text-[#1C1208] m-0">{faq.q}</h3>
                    <span className="text-[#D97706] text-lg shrink-0 ml-4 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pb-4"><p className="text-[#6B5230] text-sm leading-relaxed">{faq.a}</p></div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-3xl p-8 mb-10 text-white text-center shadow-xl" aria-labelledby="cta">
            <h2 id="cta" className="text-2xl font-black mb-3">Plan together without the usual chaos</h2>
            <p className="text-white/80 leading-relaxed mb-5 text-sm max-w-lg mx-auto">If your group is tired of chasing messages, spreadsheets, and scattered plans, TRYPS gives you one place to coordinate everything — dates, itinerary, and expenses — without the usual friction.</p>
            <a href="/start" className="inline-flex items-center gap-2 bg-white text-[#D97706] font-black px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform text-sm">
              Start planning with TRYPS
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          {/* Related articles */}
          <section className="border-t border-[#F5D78E]/60 pt-8" aria-labelledby="related-articles">
            <h2 id="related-articles" className="text-lg font-black text-[#1C1208] mb-4">Related articles</h2>
            <ul className="space-y-3 list-none p-0">
              {[
                { href: "/blog/how-to-split-expenses-on-a-group-trip", label: "How to Split Expenses on a Group Trip" },
                { href: "/blog/best-group-trip-planning-apps", label: "Best Group Trip Planning Apps" },
                { href: "/blog/thailand-group-trip-itinerary", label: "Thailand Group Trip Itinerary" },
              ].map((a) => (
                <li key={a.href}>
                  <a href={a.href} className="flex items-center justify-between group p-4 bg-white rounded-2xl border border-[#F5D78E]/40 hover:border-[#D97706] hover:shadow-md transition-all">
                    <span className="text-[#1C1208] font-semibold text-sm group-hover:text-[#D97706] transition-colors">{a.label}</span>
                    <ArrowRight className="h-4 w-4 text-[#D97706] shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </article>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C1208] text-[#FFFBF0] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 fill-[#D97706] text-[#D97706]" />
              <span className="font-black text-xl">TRYPS</span>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 text-sm text-white/50">
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/group-trip-planning-guide" className="hover:text-white transition-colors">Guide</a>
            </nav>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-white/40 text-sm max-w-md leading-relaxed">TRYPS helps friends plan trips together, lock dates, build itineraries, and split expenses.</p>
            <div className="flex flex-col items-start md:items-end gap-1">
              <p className="text-white/40 text-sm">Support: <a href="mailto:support@jointryps.com" className="text-[#D97706] hover:underline">support@jointryps.com</a></p>
              <p className="text-white/30 text-sm">&copy; TRYPS</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
