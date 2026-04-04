import { ArrowRight, CheckCircle2, Star, MessageCircle, Calendar, MapPin, Wallet, Globe, XCircle } from "lucide-react";

/* ─── Inline App Mockup for Hero ─── */
function HeroMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706] to-[#FCD34D] rounded-[2.5rem] opacity-15 blur-2xl scale-110 pointer-events-none" />
      <div className="relative bg-white rounded-[2rem] shadow-2xl border border-[#F5D78E]/40 overflow-hidden">
        <div className="bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-6 py-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-amber-200 text-[10px] font-bold uppercase tracking-widest mb-0.5">Active trip</p>
              <h3 className="font-black text-white text-xl">Amalfi Coast</h3>
            </div>
            <div className="flex -space-x-2">
              {["#fff3","#fff4","#fff2"].map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white/50 flex items-center justify-center text-xs font-black text-white" style={{ background: c }}>
                  {["A","B","C"][i]}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div className="bg-[#FFFBF0] rounded-2xl p-4 border border-[#F5D78E]/50">
            <p className="text-[10px] font-black text-[#D97706] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Calendar className="h-3 w-3" /> Date poll
            </p>
            {[
              { date: "Jun 14–18", votes: 4, best: true },
              { date: "Jun 21–25", votes: 2, best: false },
              { date: "Jul 5–9", votes: 1, best: false },
            ].map((d, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-xl mb-2 last:mb-0 ${d.best ? "bg-white border border-[#D97706] shadow-sm" : "bg-white/50"}`}>
                <span className={`text-sm font-semibold ${d.best ? "text-[#D97706]" : "text-[#6B5230]"}`}>{d.date}</span>
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-bold ${d.best ? "text-[#D97706]" : "text-[#9CA3AF]"}`}>{d.votes} votes</span>
                  {d.best && <CheckCircle2 className="h-4 w-4 text-[#D97706]" />}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#FFFBF0] rounded-2xl p-4 border border-[#F5D78E]/50">
            <p className="text-[10px] font-black text-[#D97706] uppercase tracking-widest mb-2">Expenses</p>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-[#6B5230]">Group total</span>
              <span className="text-lg font-black text-[#1C1208]">$2,400</span>
            </div>
            <div className="h-2 bg-[#FEF3C7] rounded-full overflow-hidden">
              <div className="h-full w-3/5 bg-gradient-to-r from-[#D97706] to-[#F59E0B] rounded-full" />
            </div>
            <p className="text-[10px] text-[#9CA3AF] mt-1.5">60% of budget allocated</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl border border-[#F5D78E]/40 px-4 py-3 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0">
          <CheckCircle2 className="h-4 w-4 text-[#D97706]" />
        </div>
        <div>
          <p className="text-[10px] text-[#9CA3AF]">Sarah just voted</p>
          <p className="text-sm font-black text-[#1C1208]">Jun 14–18</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Product Flow Preview ─── */
function ProductPreview() {
  const panels = [
    {
      label: "iMessage invite",
      icon: MessageCircle,
      color: "#D97706",
      content: (
        <div className="space-y-2 mt-3">
          <div className="bg-[#FEF3C7] rounded-xl p-3 text-left">
            <p className="text-xs font-semibold text-[#1C1208]">Hey! Join our Amalfi trip</p>
            <p className="text-[10px] text-[#6B5230] mt-0.5">jointryps.com/amalfi-2025</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-[#D97706] flex items-center justify-center text-[9px] font-black text-white">A</div>
            <div className="w-6 h-6 rounded-full bg-[#F59E0B] flex items-center justify-center text-[9px] font-black text-white">B</div>
            <div className="w-6 h-6 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[9px] font-black text-white">C</div>
            <span className="text-[10px] text-[#9CA3AF]">6 joined</span>
          </div>
        </div>
      ),
    },
    {
      label: "Date poll",
      icon: Calendar,
      color: "#F59E0B",
      content: (
        <div className="space-y-1.5 mt-3">
          {[
            { date: "Jun 14–18", w: "80%", best: true },
            { date: "Jun 21–25", w: "50%", best: false },
            { date: "Jul 5–9", w: "30%", best: false },
          ].map((d, i) => (
            <div key={i}>
              <div className="flex justify-between text-[10px] mb-0.5">
                <span className={d.best ? "font-bold text-[#D97706]" : "text-[#6B5230]"}>{d.date}</span>
              </div>
              <div className="h-1.5 bg-[#FEF3C7] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#D97706] to-[#F59E0B] rounded-full" style={{ width: d.w }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Shared itinerary",
      icon: MapPin,
      color: "#4ECDC4",
      content: (
        <div className="space-y-1.5 mt-3">
          {[
            { time: "10:00", item: "Arrive + check in" },
            { time: "13:00", item: "Lunch by the sea" },
            { time: "15:30", item: "Positano walk" },
            { time: "20:00", item: "Group dinner" },
          ].map((e, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[9px] text-[#9CA3AF] w-8 shrink-0">{e.time}</span>
              <span className="text-[10px] text-[#1C1208] font-medium">{e.item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Expense summary",
      icon: Wallet,
      color: "#8B5CF6",
      content: (
        <div className="space-y-1.5 mt-3">
          {[
            { label: "Flights", amt: "$840" },
            { label: "Hotel", amt: "$620" },
            { label: "Activities", amt: "$220" },
          ].map((e, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-[10px] text-[#6B5230]">{e.label}</span>
              <span className="text-[10px] font-bold text-[#1C1208]">{e.amt}</span>
            </div>
          ))}
          <div className="border-t border-[#F5D78E] pt-1.5 flex justify-between">
            <span className="text-[10px] font-bold text-[#D97706]">All settled</span>
            <span className="text-[10px] font-black text-[#1C1208]">$1,680</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {panels.map((p, i) => (
        <div key={i} className="bg-white rounded-2xl p-4 border border-[#F5D78E]/40 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${p.color}22` }}>
              <p.icon className="h-3.5 w-3.5" style={{ color: p.color }} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: p.color }}>{p.label}</span>
          </div>
          {p.content}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#1C1208] font-sans">

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#D97706] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-bold">Skip to content</a>

      {/* ── HEADER / NAV ── */}
      <header className="sticky top-0 z-50 bg-[#FFFBF0]/85 backdrop-blur-md border-b border-[#F5D78E]/40">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter text-[#D97706]" aria-label="TRYPS home">
            <Star className="h-7 w-7 fill-[#D97706] text-[#D97706]" />
            TRYPS
          </a>
          <div className="hidden md:flex items-center gap-7 font-medium text-[#6B5230] text-sm">
            <a href="#features" className="hover:text-[#D97706] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[#D97706] transition-colors">How it works</a>
            <a href="#comparison" className="hover:text-[#D97706] transition-colors">Comparison</a>
            <a href="#use-cases" className="hover:text-[#D97706] transition-colors">Use cases</a>
            <a href="#faq" className="hover:text-[#D97706] transition-colors">FAQ</a>
            <a href="/about" className="hover:text-[#D97706] transition-colors">About</a>
            <a href="/group-trip-planning-guide" className="hover:text-[#D97706] transition-colors">Guide</a>
          </div>
          <a href="/waitlist" className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#D97706]/20 transition-colors">
            Join waitlist
          </a>
        </nav>
      </header>

      <main id="main-content">

        {/* ── HERO ── */}
        <section aria-labelledby="hero-title" className="relative pt-12 md:pt-20 pb-12 md:pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FCD34D]/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

              <div className="lg:col-span-3 pt-6">
                <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEF3C7] text-[#D97706] font-bold text-sm mb-5 md:mb-8 border border-[#F5D78E]">
                  <Star className="h-4 w-4 fill-[#D97706]" />
                  Group trip planning app
                </p>

                <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5 md:mb-6">
                  A group trip planning app{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#FCD34D]">
                    your friends actually use.
                  </span>
                </h1>

                <p className="text-xl text-[#6B5230] mb-4 leading-relaxed max-w-xl">
                  TRYPS is a group trip planning app for friends that helps you choose dates, build a shared itinerary, and split expenses — all in one place.
                </p>

                <p className="text-base text-[#6B5230] mb-4 leading-relaxed max-w-xl flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-[#D97706] shrink-0 mt-0.5" />
                  <span>No downloads. No sign-ups. Send one link or iMessage — your group joins instantly and starts planning.</span>
                </p>

                <p className="text-base text-[#6B5230] mb-10 leading-relaxed max-w-lg italic">
                  Because the hardest part of any group trip isn't the destination. It's getting everyone in the same place.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a href="/start" className="inline-flex items-center justify-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white h-14 px-8 rounded-full text-lg font-black shadow-xl shadow-[#D97706]/25 transition-all hover:-translate-y-0.5 group">
                    Start planning
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="/waitlist" className="inline-flex items-center justify-center h-14 px-8 rounded-full text-lg font-bold border-2 border-[#D97706] text-[#D97706] hover:bg-[#FEF3C7] transition-colors">
                    Join waitlist
                  </a>
                </div>

                <p className="text-sm text-[#6B5230] leading-relaxed">
                  Trusted by friend groups planning birthdays, bachelor trips, reunions, weekend getaways, and long vacations.
                </p>
              </div>

              <div className="lg:col-span-2 pt-6">
                <HeroMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section aria-labelledby="trust-title" className="py-10 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 id="trust-title" className="text-lg font-black text-[#1C1208] mb-5 text-center">Built for real group-trip coordination</h2>
            <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 list-none p-0">
              {[
                "No app required for invitees",
                "Dates, itinerary, and expenses in one shared flow",
                "Used for weekend trips, reunions, and destination trips",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[#6B5230] text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#D97706] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" aria-labelledby="features-title" className="py-14 md:py-24 bg-[#FFFBF0] border-t border-[#F5D78E]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Everything you need</p>
              <h2 id="features-title" className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-[#1C1208]">
                Everything your group needs — without the chaos
              </h2>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 list-none p-0 mb-10 md:mb-16">
              {[
                { n: "01", title: "Get everyone in instantly", desc: 'Send one link. No apps, no accounts, no "wait, what are we using?"', color: "bg-[#D97706]", icon: MessageCircle },
                { n: "02", title: "Lock dates in one round", desc: "One poll. Everyone responds. Dates decided — no endless back-and-forth.", color: "bg-[#F59E0B]", icon: Calendar },
                { n: "03", title: "Keep the plan in one place", desc: "A shared itinerary everyone can see and update — no confusion, no scattered notes.", color: "bg-[#4ECDC4]", icon: MapPin },
                { n: "04", title: "No awkward money conversations", desc: "Track who paid what and who owes whom — settle up cleanly at the end.", color: "bg-[#8B5CF6]", icon: Wallet },
                { n: "05", title: "Know what everyone actually wants", desc: "Capture preferences early so you don't plan a trip half the group isn't excited about.", color: "bg-[#EC4899]", icon: Globe },
              ].map((f) => (
                <li key={f.title} className="bg-white rounded-3xl p-6 md:p-8 border border-[#F5D78E]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`${f.color} h-12 w-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black mb-2 text-[#1C1208]">{f.title}</h3>
                  <p className="text-[#6B5230] leading-relaxed text-sm">{f.desc}</p>
                </li>
              ))}
            </ul>

            <div className="text-center bg-white rounded-3xl p-7 md:p-10 border border-[#F5D78E]/30">
              <p className="text-xl font-black text-[#1C1208] mb-4">Start your group trip</p>
              <a href="/start" className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg shadow-[#D97706]/20 transition-colors">
                Create trip
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" aria-labelledby="how-title" className="py-14 md:py-24 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Simple process</p>
              <h2 id="how-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                From "we should plan something" to booked and ready
              </h2>
            </div>

            <ol className="grid lg:grid-cols-4 gap-6 list-none p-0">
              {[
                { n: "1", title: "Create and invite", desc: "Start a trip in seconds. Share a link or iMessage so everyone joins instantly." },
                { n: "2", title: "Lock dates fast", desc: "Run one availability poll so your group can pick dates without endless back-and-forth." },
                { n: "3", title: "Plan together", desc: "Add places, stays, activities, and notes to one shared itinerary everyone can update." },
                { n: "4", title: "Split expenses simply", desc: "Track shared costs during the trip so everyone can see balances and settle up cleanly." },
              ].map((item) => (
                <li key={item.n} className="bg-[#FFFBF0] rounded-3xl p-6 md:p-8 text-center border border-[#F5D78E]/30 hover:border-[#D97706] hover:shadow-xl transition-all duration-300 group">
                  <div className="h-14 w-14 bg-[#FEF3C7] rounded-full flex items-center justify-center text-2xl font-black text-[#D97706] mx-auto mb-5 border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                    {item.n}
                  </div>
                  <h3 className="text-lg font-black mb-3 text-[#1C1208]">{item.title}</h3>
                  <p className="text-[#6B5230] text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── PROBLEM VS SOLUTION ── */}
        <section aria-labelledby="problem-solution-title" className="py-14 md:py-24 bg-[#FFFBF0] border-t border-[#F5D78E]/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <h2 id="problem-solution-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                Why most group trips never happen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <article className="bg-white rounded-[2rem] p-7 md:p-10 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-7">
                  <XCircle className="h-7 w-7 text-red-400 shrink-0" />
                  <h3 className="text-xl font-black text-gray-400">Without TRYPS</h3>
                </div>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "Endless group chat messages, no decisions",
                    "Dates that never get locked",
                    "Plans scattered across notes, chats, and spreadsheets",
                    "One person stuck organising everything",
                    "Awkward money follow-ups after the trip",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-gray-400">
                      <span className="text-lg opacity-40 mt-0.5 shrink-0">-</span>
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-[2rem] p-7 md:p-10 text-white shadow-xl md:-translate-y-4">
                <div className="flex items-center gap-3 mb-7">
                  <CheckCircle2 className="h-7 w-7 text-white shrink-0" />
                  <h3 className="text-xl font-black">With TRYPS</h3>
                </div>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "One shared plan from idea to execution",
                    "Dates locked in minutes, not weeks",
                    "Everyone aligned and contributing",
                    "Clear itinerary the whole group follows",
                    "Expenses handled in one place",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
                      <span className="font-medium leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ── COMPARISON ── */}
        <section id="comparison" aria-labelledby="comparison-title" className="py-14 md:py-24 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Why TRYPS</p>
              <h2 id="comparison-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                Why not just use WhatsApp, Google Sheets, or Wanderlog?
              </h2>
            </div>

            <ul className="space-y-4 mb-10 list-none p-0">
              {[
                { tool: "WhatsApp", verdict: "great for chatting, but not built for locking dates, structuring trip plans, or tracking shared expenses. Important details disappear in the thread, and decisions often stall because nobody owns the workflow." },
                { tool: "Google Sheets", verdict: "flexible, but manual and fragmented. Someone still has to design the planning system, update it, and chase the group to keep it accurate." },
                { tool: "Splitwise", verdict: "useful for settling costs, but it only solves one part of the trip. It does not help your group decide when to go, what to do, or how the plan comes together." },
                { tool: "Wanderlog", verdict: "useful for itinerary planning, but not designed around group alignment first. TRYPS is built around the coordination problem: getting friends to decide, commit, and move forward together." },
              ].map((row) => (
                <li key={row.tool} className="bg-[#FFFBF0] rounded-2xl px-7 py-5 border border-[#F5D78E]/40 shadow-sm">
                  <p className="text-[#1C1208]">
                    <strong className="font-black">{row.tool}</strong>
                    <span className="text-[#6B5230]"> — {row.verdict}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-3xl p-7 md:p-10 text-white text-center shadow-xl">
              <p className="text-lg font-medium mb-3 opacity-90">TRYPS combines planning, date coordination, and expense splitting in one shared flow built specifically for trips with friends.</p>
              <p className="text-2xl font-black">One link. Everyone in. Dates locked. Plan built. Costs settled.</p>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section aria-labelledby="social-proof-title" className="py-14 md:py-24 bg-[#FFFBF0] border-t border-[#F5D78E]/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Real trips</p>
              <h2 id="social-proof-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                Used by groups planning trips that actually happen
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-7 mb-8 md:mb-12">
              {[
                {
                  quote: "We went from months of vague group-chat messages to a booked trip in less than a week. The date poll alone saved us hours.",
                  author: "Aarav M.",
                  detail: "organised a 7-person Barcelona trip",
                },
                {
                  quote: "Usually one person ends up managing everything. This time the plan felt shared, and the money part did not become awkward at the end.",
                  author: "Riya S.",
                  detail: "organised a bachelorette weekend in Jaipur",
                },
                {
                  quote: "The biggest win was that nobody had to install anything just to respond. That removed the usual friction immediately.",
                  author: "Kabir T.",
                  detail: "organised a 5-person road trip",
                },
              ].map((t, i) => (
                <blockquote key={i} className="bg-white rounded-3xl p-6 md:p-8 border border-[#F5D78E]/40 shadow-sm flex flex-col">
                  <p className="text-[#1C1208] leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                  <footer className="text-sm">
                    <strong className="text-[#D97706] block">{t.author}</strong>
                    <span className="text-[#9CA3AF]">{t.detail}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section id="use-cases" aria-labelledby="use-cases-title" className="py-14 md:py-24 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Built for you</p>
              <h2 id="use-cases-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                Built for the trip that never gets planned
              </h2>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 mb-12">
              {[
                { title: "The trip stuck in the group chat", desc: 'Turn "we should go" into an actual plan.' },
                { title: "The trip where no one agrees on dates", desc: "One poll. Dates locked. Move forward." },
                { title: "The trip where one person does all the work", desc: "Everyone contributes. No single organiser burden." },
                { title: "The trip where money gets messy", desc: "Expenses tracked automatically. No awkward follow-ups." },
              ].map((uc, i) => (
                <li key={i} className="bg-[#FFFBF0] rounded-3xl p-6 md:p-8 border border-[#F5D78E]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#FEF3C7] rounded-xl flex items-center justify-center mb-5">
                    <Star className="h-5 w-5 fill-[#D97706] text-[#D97706]" />
                  </div>
                  <h3 className="text-base font-black text-[#1C1208] mb-2">{uc.title}</h3>
                  <p className="text-[#6B5230] text-sm leading-relaxed">{uc.desc}</p>
                </li>
              ))}
            </ul>

            <div className="bg-[#FFFBF0] rounded-3xl p-7 md:p-10 border border-[#F5D78E]/30">
              <h3 className="text-xl font-black text-[#1C1208] mb-5">Popular trip examples</h3>
              <ul className="space-y-4 list-none p-0">
                {[
                  { href: "/plan-a-goa-trip-with-friends", label: "Planning a Goa trip with friends?", desc: "Lock dates, build your plan, and split costs faster than coordinating over chat." },
                  { href: "/plan-a-manali-trip-with-friends", label: "Planning a Manali trip with friends?", desc: "Keep dates, stays, and travel plans aligned in one place." },
                  { href: "/plan-a-pondicherry-trip-with-friends", label: "Planning a Pondicherry trip with friends?", desc: "Decide faster without bouncing across chats and spreadsheets." },
                  { href: "/plan-a-coorg-trip-with-friends", label: "Planning a Coorg trip with friends?", desc: "Build the itinerary together and keep expense tracking simple." },
                ].map((item) => (
                  <li key={item.href} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-sm">
                    <a href={item.href} className="font-bold text-[#D97706] hover:underline shrink-0">{item.label}</a>
                    <span className="text-[#6B5230]">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── PRODUCT PREVIEW ── */}
        <section aria-labelledby="preview-title" className="py-14 md:py-24 bg-[#FFFBF0] border-t border-[#F5D78E]/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">See it in action</p>
              <h2 id="preview-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208] mb-4">
                What planning actually looks like
              </h2>
              <p className="text-lg text-[#6B5230] max-w-2xl mx-auto leading-relaxed">
                Instead of planning across chat, notes, and payment apps, your group gets one shared flow: invite, poll, plan, and split.
              </p>
            </div>

            <figure className="bg-white rounded-3xl p-5 md:p-8 border border-[#F5D78E]/40 shadow-sm">
              <ProductPreview />
              <figcaption className="text-center text-sm text-[#9CA3AF] mt-6 font-medium">
                One shared flow for invites, date voting, itinerary planning, and expense splitting.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section aria-labelledby="about-title" className="py-14 md:py-24 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 id="about-title" className="text-3xl md:text-4xl font-black tracking-tight text-[#1C1208] mb-5">
              Built by people who care about making group trips actually happen
            </h2>
            <p className="text-lg text-[#6B5230] leading-relaxed mb-4">
              TRYPS was built to solve the coordination mess that stops most friend trips before they start: too many chats, unclear dates, scattered plans, and awkward expense follow-ups.
            </p>
            <p className="text-base text-[#6B5230] leading-relaxed">
              Learn more about the team, product vision, and company background on our{" "}
              <a href="/about" className="text-[#D97706] font-bold hover:underline">About page</a>.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" aria-labelledby="faq-title" className="py-14 md:py-24 bg-[#FFFBF0] border-t border-[#F5D78E]/30">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">FAQ</p>
              <h2 id="faq-title" className="text-4xl font-black text-[#1C1208]">Frequently asked questions</h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "What is TRYPS?",
                  a: "TRYPS is a group trip planning app for friends that helps you coordinate dates, build a shared itinerary, and split expenses — all in one place.",
                },
                {
                  q: "How is this different from WhatsApp or Google Sheets?",
                  a: "WhatsApp is good for chatting and Google Sheets is flexible for manual planning, but neither is built for making group travel decisions. TRYPS gives your group one structured place to vote on dates, plan the itinerary, and track shared costs so decisions happen faster and fewer details get lost.",
                },
                {
                  q: "Does everyone need to download an app?",
                  a: "No. People can join instantly via link or iMessage without installing anything.",
                },
                {
                  q: "Can everyone edit the plan?",
                  a: "Yes. Everyone can respond to polls, contribute to the itinerary, and log expenses.",
                },
                {
                  q: "How does expense splitting work?",
                  a: "Log shared costs as they happen and TRYPS tracks balances so everyone can see what they owe at the end of the trip.",
                },
                {
                  q: "How do I start?",
                  a: "Create a trip, share the link with your group, and start planning together.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-[#F5D78E]/50 px-6 overflow-hidden open:border-[#D97706] open:bg-[#FEF3C7] transition-colors"
                >
                  <summary className="flex justify-between items-center py-5 cursor-pointer list-none font-black text-lg text-[#1C1208] select-none">
                    <h3 className="font-black text-lg text-[#1C1208] m-0">{faq.q}</h3>
                    <span className="text-[#D97706] text-xl shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="pb-5">
                    <p className="text-[#6B5230] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESOURCES ── */}
        <section aria-labelledby="resources-title" className="py-14 md:py-20 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 id="resources-title" className="text-2xl font-black text-[#1C1208] mb-6">Helpful planning guides</h2>
            <ul className="space-y-3 list-none p-0">
              {[
                { href: "/group-trip-planning-guide", label: "How to plan a group trip without endless back-and-forth" },
                { href: "/split-trip-expenses", label: "How to split trip expenses with friends fairly" },
                { href: "/weekend-trip-planning-checklist", label: "Weekend trip planning checklist for friend groups" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[#D97706] font-semibold hover:underline text-base">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section aria-labelledby="final-cta-title" className="py-20 md:py-32 bg-[#D97706] relative overflow-hidden border-t border-[#B45309]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#F59E0B]/40 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 id="final-cta-title" className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              The trip has been in the group chat long enough.
            </h2>
            <p className="text-xl text-white/80 mb-10 font-medium">Create a trip. Share the link. Get everyone aligned in minutes.</p>
            <a href="/start" className="inline-flex items-center gap-2 bg-white text-[#D97706] hover:bg-[#FFFBF0] font-black text-xl px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all">
              Start planning with friends
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </section>

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
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/group-trip-planning-guide" className="hover:text-white transition-colors">Guide</a>
            </nav>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              TRYPS helps friends plan trips together, lock dates, build itineraries, and split expenses.
            </p>
            <div className="flex flex-col items-start md:items-end gap-1">
              <p className="text-white/40 text-sm">
                Support: <a href="mailto:support@jointryps.com" className="text-[#D97706] hover:underline">support@jointryps.com</a>
              </p>
              <p className="text-white/30 text-sm">&copy; TRYPS</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
