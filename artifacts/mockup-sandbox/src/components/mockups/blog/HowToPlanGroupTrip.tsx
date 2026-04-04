import { Star, ArrowRight, CheckCircle2 } from "lucide-react";

function ImagePlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      className="w-full rounded-2xl flex flex-col items-center justify-center gap-2 text-[#6B5230]"
      style={{ aspectRatio: aspect, background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #FEF3C7 100%)" }}
    >
      <div className="w-10 h-10 rounded-full bg-[#D97706]/20 flex items-center justify-center">
        <Star className="h-5 w-5 fill-[#D97706] text-[#D97706]" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav className="text-sm text-[#9CA3AF] mb-6 flex items-center gap-2">
      <a href="/" className="hover:text-[#D97706] transition-colors">Home</a>
      <span>/</span>
      <a href="/blog" className="hover:text-[#D97706] transition-colors">Blog</a>
      <span>/</span>
      <span className="text-[#6B5230]">How to Plan a Group Trip</span>
    </nav>
  );
}

export function HowToPlanGroupTrip() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] font-sans" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#FFFBF0]/90 backdrop-blur-md border-b border-[#F5D78E]/40">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2 font-black text-xl text-[#D97706]">
            <Star className="h-6 w-6 fill-[#D97706]" />
            TRYPS
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#6B5230] font-medium">
            <a href="/" className="hover:text-[#D97706]">Home</a>
            <a href="/blog" className="text-[#D97706] font-bold">Blog</a>
            <a href="/start" className="bg-[#D97706] text-white px-4 py-2 rounded-full font-bold hover:bg-[#B45309] transition-colors">Start planning</a>
          </nav>
        </div>
      </header>

      {/* ── ARTICLE ── */}
      <main className="max-w-[760px] mx-auto px-6 py-10 pb-20">
        <Breadcrumb />

        {/* Header */}
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
            <span>8 min read</span>
          </div>

          <p className="text-xl text-[#1C1208] font-semibold leading-relaxed mb-4">
            Planning a group trip sounds fun until someone says "I'm flexible" and disappears for three days.
          </p>
          <p className="text-base text-[#6B5230] leading-relaxed mb-3">
            One person is excited. Two reply instantly. A few respond late. Someone never replies but still wants to come. Meanwhile, dates are floating, ideas are scattered across chats, and no one is quite sure what's actually decided.
          </p>
          <p className="text-base text-[#6B5230] leading-relaxed mb-3">
            That's where most group trips get stuck.
          </p>
          <p className="text-base text-[#6B5230] leading-relaxed mb-4">
            The easiest way to plan a group trip is not more discussion — it's better structure. Lock the group, align on dates, agree on budget, build the itinerary together, and track expenses clearly in one place.
          </p>

          <figure className="my-6">
            <ImagePlaceholder label="Friends planning a group trip together on their phones" />
            <figcaption className="text-sm text-[#9CA3AF] mt-3 text-center">Group trips work better when everyone plans in one shared place.</figcaption>
          </figure>
        </header>

        {/* Quick Answer */}
        <section className="bg-white rounded-3xl border border-[#F5D78E]/60 p-6 mb-10 shadow-sm">
          <h2 className="text-xl font-black text-[#D97706] mb-3">Quick answer</h2>
          <p className="text-[#6B5230] mb-3 text-sm">To plan a group trip without chaos:</p>
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

        {/* Why group trips fail */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-[#1C1208] tracking-tight mb-4 pb-3 border-b border-[#F5D78E]/60">Why group trips become chaotic</h2>
          <p className="text-[#6B5230] leading-relaxed mb-3">Most group trips don't fail because people disagree.</p>
          <p className="text-[#6B5230] leading-relaxed mb-3">They fail because everything is scattered.</p>
          <p className="text-[#6B5230] leading-relaxed mb-3">One plan lives in WhatsApp. Another in someone's Notes app. Flights are discussed in one place, stays in another, and expenses somewhere else entirely. By the time you're ready to decide, no one knows what's final.</p>
          <p className="text-[#6B5230] leading-relaxed">Planning a group trip isn't really about ideas. It's about keeping everyone aligned at the same time.</p>
        </section>

        {/* Steps */}
        {[
          {
            id: "step-1", n: "Step 1", title: "Confirm who is actually going",
            body: (
              <>
                <p className="text-[#6B5230] leading-relaxed mb-3">Start here, not with destinations.</p>
                <p className="text-[#6B5230] leading-relaxed mb-3">There's a big difference between:</p>
                <ul className="space-y-2 mb-3 list-none p-0">
                  {['"sounds fun"', '"I\'m in if dates work"', '"book it, I\'m coming"'].map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#6B5230]">
                      <span className="text-[#D97706] mt-0.5 shrink-0">—</span>{t}
                    </li>
                  ))}
                </ul>
                <p className="text-[#6B5230] leading-relaxed">Keep a working group of people who are actively participating. Early clarity makes everything faster.</p>
              </>
            ),
          },
          {
            id: "step-2", n: "Step 2", title: "Shortlist destination options",
            body: (
              <>
                <p className="text-[#6B5230] leading-relaxed mb-3">Instead of "where should we go?", narrow it to 2–3 solid options. Think in terms of: budget range, travel time, visa friction, weather, and overall vibe.</p>
                <p className="text-[#6B5230] leading-relaxed">Once the options are clear, decisions become much easier.</p>
              </>
            ),
          },
          {
            id: "step-3", n: "Step 3", title: "Lock dates with a group poll",
            body: (
              <>
                <p className="text-[#6B5230] leading-relaxed mb-3">This is where most trips quietly fall apart. Chat-based planning doesn't work here. A date poll fixes this — everyone votes, you see overlap instantly, no chasing.</p>
                <p className="text-[#6B5230] leading-relaxed mb-5">Once dates are locked, the trip becomes real.</p>
                <figure className="my-2">
                  <ImagePlaceholder label="Group trip date poll — friends voting on travel dates" />
                  <figcaption className="text-sm text-[#9CA3AF] mt-2 text-center">Date polls make it easier to find overlap and lock the trip faster.</figcaption>
                </figure>
              </>
            ),
          },
          {
            id: "step-4", n: "Step 4", title: "Set the budget early",
            body: (
              <>
                <p className="text-[#6B5230] leading-relaxed mb-3">Budget misalignment is one of the fastest ways to create friction. Set a rough range early: total spend per person, type of stay, key activities, comfort vs cost trade-offs.</p>
                <p className="text-[#6B5230] leading-relaxed">It doesn't need to be perfect. It just needs to be aligned.</p>
              </>
            ),
          },
          {
            id: "step-5", n: "Step 5", title: "Build a shared itinerary",
            body: (
              <>
                <p className="text-[#6B5230] leading-relaxed mb-3">Not a minute-by-minute schedule — just a clear view of where you're staying, what the main plans are, what's optional, and what's already booked. The goal is alignment, not control.</p>
                <figure className="my-2">
                  <ImagePlaceholder label="Shared itinerary for a group trip planned with friends" />
                  <figcaption className="text-sm text-[#9CA3AF] mt-2 text-center">A shared itinerary keeps the group aligned on what the trip actually looks like.</figcaption>
                </figure>
              </>
            ),
          },
          {
            id: "step-6", n: "Step 6", title: "Assign responsibilities",
            body: (
              <>
                <p className="text-[#6B5230] leading-relaxed mb-3">Split simple roles: flights, accommodation, activities, local logistics. It's not about strict ownership — it's about momentum.</p>
                <p className="text-[#6B5230] leading-relaxed">People engage more when they have a role, even a small one.</p>
              </>
            ),
          },
          {
            id: "step-7", n: "Step 7", title: "Track and split expenses clearly",
            body: (
              <>
                <p className="text-[#6B5230] leading-relaxed mb-3">Log costs immediately, keep everything visible, avoid reconstructing later. Someone pays for dinner, someone else books the stay — TRYPS keeps this inside the same trip flow.</p>
                <figure className="my-2">
                  <ImagePlaceholder label="Group trip expense tracker showing shared costs and balances" />
                  <figcaption className="text-sm text-[#9CA3AF] mt-2 text-center">Clear expense tracking reduces awkwardness and confusion during the trip.</figcaption>
                </figure>
              </>
            ),
          },
          {
            id: "step-8", n: "Step 8", title: "Finalize bookings and move",
            body: (
              <>
                <p className="text-[#6B5230] leading-relaxed mb-3">Once dates, budget, and plans are aligned — don't wait. Confirm flights or transport, accommodation, key reservations, and arrival details.</p>
                <p className="text-[#6B5230] leading-relaxed">Decisions lose energy if they're not followed by action.</p>
              </>
            ),
          },
        ].map((step) => (
          <section key={step.id} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-black text-[#D97706] uppercase tracking-widest">{step.n}</span>
              <div className="flex-1 h-px bg-[#F5D78E]" />
            </div>
            <h2 className="text-2xl font-black text-[#1C1208] tracking-tight mb-4">{step.title}</h2>
            {step.body}
          </section>
        ))}

        {/* Common mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-[#1C1208] tracking-tight mb-6 pb-3 border-b border-[#F5D78E]/60">Common mistakes to avoid</h2>
          <div className="space-y-5">
            {[
              { h: "Starting with too many people", p: "More people means more coordination and slower decisions." },
              { h: "Keeping everything in chat", p: "Chats are great for talking, not for organizing." },
              { h: "Delaying date decisions", p: "Until dates are locked, nothing else really moves." },
              { h: "Skipping the budget conversation", p: "Unspoken assumptions always surface later." },
              { h: "Using too many tools", p: "Every extra tool adds friction and confusion." },
            ].map((m, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-[#F5D78E]/50">
                <div className="w-7 h-7 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-black">✕</span>
                </div>
                <div>
                  <h3 className="font-black text-[#1C1208] text-sm mb-1">{m.h}</h3>
                  <p className="text-[#6B5230] text-sm leading-relaxed">{m.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final takeaway */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-[#1C1208] tracking-tight mb-4 pb-3 border-b border-[#F5D78E]/60">Final takeaway</h2>
          <p className="text-[#6B5230] leading-relaxed mb-3">Group trips don't fail because they're complicated. They fail because coordination is messy.</p>
          <p className="text-[#6B5230] leading-relaxed mb-5">Once everything is visible and shared, decisions happen faster, plans stay clear, and the group actually follows through.</p>
          <div className="bg-[#FEF3C7] border-l-4 border-[#D97706] rounded-r-2xl px-5 py-4">
            <p className="text-[#1C1208] font-semibold text-sm">Keep it simple: define the group, lock the dates, align on budget, build the plan, and track expenses in one place.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-[#1C1208] tracking-tight mb-6 pb-3 border-b border-[#F5D78E]/60">Frequently asked questions</h2>
          <div className="space-y-3">
            {[
              { q: "How far in advance should you plan a group trip?", a: "For shorter trips, one to three months works. For international or larger groups, three to six months is safer." },
              { q: "What is the easiest way to decide dates for a group trip?", a: "Use a date poll. It's faster and more reliable than chat discussions." },
              { q: "How do you split expenses fairly on a group trip?", a: "Track expenses as they happen and keep balances visible. Avoid settling everything at the end." },
              { q: "What should a group trip itinerary include?", a: "Travel dates, accommodation, major activities, and key logistics everyone needs to know." },
              { q: "What is the best app for planning group trips?", a: "The best tools combine date coordination, itinerary planning, and expense tracking in one place so the group stays aligned." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-[#F5D78E]/50 px-5 overflow-hidden open:border-[#D97706] open:bg-[#FEF3C7] transition-colors">
                <summary className="flex justify-between items-center py-4 cursor-pointer list-none font-black text-base text-[#1C1208] select-none">
                  {faq.q}
                  <span className="text-[#D97706] text-lg shrink-0 ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pb-4">
                  <p className="text-[#6B5230] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA box */}
        <section className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-3xl p-8 mb-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-black mb-3">Plan together without the usual chaos</h2>
          <p className="text-white/80 leading-relaxed mb-5 text-sm">If your group is tired of chasing messages, spreadsheets, and scattered plans, TRYPS gives you one place to coordinate everything — dates, itinerary, and expenses — without the usual friction.</p>
          <a href="/start" className="inline-flex items-center gap-2 bg-white text-[#D97706] font-black px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform text-sm">
            Start planning with TRYPS
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        {/* Related articles */}
        <section className="border-t border-[#F5D78E]/60 pt-8">
          <h2 className="text-lg font-black text-[#1C1208] mb-4">Related articles</h2>
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
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C1208] text-[#FFFBF0] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-[#D97706] text-[#D97706]" />
            <span className="font-black text-lg">TRYPS</span>
          </div>
          <nav className="flex gap-6 text-sm text-white/50">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <p className="text-white/30 text-sm">&copy; TRYPS</p>
        </div>
      </footer>

    </div>
  );
}
