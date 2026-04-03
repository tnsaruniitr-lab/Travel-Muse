import { ArrowRight, CheckCircle2, Star, MessageCircle, Calendar, MapPin, Wallet, Plane, Globe, XCircle } from "lucide-react";

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

/* ─── Product Flow Preview (replaces external image) ─── */
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
            <a href="#faq" className="hover:text-[#D97706] transition-colors">FAQ</a>
            <a href="/download" className="hover:text-[#D97706] transition-colors">Download app</a>
          </div>
          <a href="/waitlist" className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#D97706]/20 transition-colors">
            Join waitlist
          </a>
        </nav>
      </header>

      <main>

        {/* ── HERO ── */}
        <section aria-labelledby="hero-title" className="relative pt-12 md:pt-20 pb-12 md:pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FCD34D]/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

              {/* Text - 3 columns */}
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

                <div>
                  <p className="text-base font-medium text-[#1C1208] mb-1">
                    500+ trips planned. Groups lock dates <strong className="text-[#D97706]">3&times; faster</strong> than over chat.
                  </p>
                  <small className="text-xs text-[#9CA3AF]">
                    *Based on trips planned on TRYPS vs. self-reported coordination time over WhatsApp.
                  </small>
                </div>
              </div>

              {/* Mockup - 2 columns */}
              <div className="lg:col-span-2 pt-6">
                <HeroMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" aria-labelledby="features-title" className="py-14 md:py-24 bg-white border-t border-[#F5D78E]/30">
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
                <li key={f.title} className="bg-[#FFFBF0] rounded-3xl p-6 md:p-8 border border-[#F5D78E]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`${f.color} h-12 w-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black mb-2 text-[#1C1208]">{f.title}</h3>
                  <p className="text-[#6B5230] leading-relaxed text-sm">{f.desc}</p>
                </li>
              ))}
            </ul>

            <div className="text-center bg-[#FFFBF0] rounded-3xl p-7 md:p-10 border border-[#F5D78E]/30">
              <p className="text-xl font-black text-[#1C1208] mb-4">Start your group trip</p>
              <a href="/start" className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg shadow-[#D97706]/20 transition-colors">
                Create trip
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" aria-labelledby="how-title" className="py-14 md:py-24 bg-[#FFFBF0] border-t border-[#F5D78E]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Simple process</p>
              <h2 id="how-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                From "we should plan something" to booked and ready
              </h2>
            </div>

            <ol className="grid lg:grid-cols-4 gap-6 list-none p-0">
              {[
                { n: "1", title: "Create and invite", desc: "Start a trip in seconds. Share a link or iMessage. Everyone joins instantly." },
                { n: "2", title: "Lock dates fast", desc: "One availability poll. TRYPS finds what works - no chasing people." },
                { n: "3", title: "Plan together", desc: "Add places, stays, activities. Everyone contributes to one shared plan." },
                { n: "4", title: "Split expenses simply", desc: "Log costs as they happen. Everyone sees what they owe - no spreadsheets, no stress." },
              ].map((item) => (
                <li key={item.n} className="bg-white rounded-3xl p-6 md:p-8 text-center border border-[#F5D78E]/30 hover:border-[#D97706] hover:shadow-xl transition-all duration-300 group">
                  <div className="h-14 w-14 bg-[#FEF3C7] rounded-full flex items-center justify-center text-2xl font-black text-[#D97706] mx-auto mb-5 border-4 border-[#FFFBF0] shadow-md group-hover:scale-110 transition-transform">
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
        <section aria-labelledby="problem-solution-title" className="py-14 md:py-24 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <h2 id="problem-solution-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                Why most group trips never happen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-white rounded-[2rem] p-7 md:p-10 border border-gray-200 shadow-sm">
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
              </div>

              <div className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-[2rem] p-7 md:p-10 text-white shadow-xl md:-translate-y-4">
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
                    "Expenses handled automatically",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
                      <span className="font-medium leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON ── */}
        <section id="comparison" aria-labelledby="comparison-title" className="py-14 md:py-24 bg-[#FFFBF0] border-t border-[#F5D78E]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Why TRYPS</p>
              <h2 id="comparison-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                Why not just use WhatsApp, Google Sheets, or Wanderlog?
              </h2>
            </div>

            <ul className="space-y-4 mb-10 list-none p-0">
              {[
                { tool: "WhatsApp", verdict: "great for chatting, not for making decisions" },
                { tool: "Google Sheets", verdict: "flexible, but manual and fragmented" },
                { tool: "Splitwise", verdict: "solves money, not planning" },
                { tool: "Wanderlog", verdict: "built for individuals, not group coordination" },
              ].map((row) => (
                <li key={row.tool} className="bg-white rounded-2xl px-7 py-5 border border-[#F5D78E]/40 shadow-sm">
                  <p className="text-[#1C1208]">
                    <strong className="font-black">{row.tool}</strong>
                    <span className="text-[#6B5230]"> → {row.verdict}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-3xl p-7 md:p-10 text-white text-center shadow-xl">
              <p className="text-lg font-medium mb-3 opacity-90">TRYPS combines all of this — built specifically for planning trips with friends.</p>
              <p className="text-2xl font-black">One link. Everyone in. Dates locked. Plan built. Costs settled.</p>
              <p className="text-lg mt-2 opacity-80">That's the whole trip.</p>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section aria-labelledby="social-proof-title" className="py-14 md:py-24 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Real trips</p>
              <h2 id="social-proof-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                Trips that actually happened
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-7 mb-8 md:mb-12">
              {[
                {
                  quote: "We'd been trying to plan this for months. With TRYPS, dates were locked in a day. I don't know why we didn't do it sooner.",
                  author: "Marcus T.",
                  detail: "organised a 7-person trip to Barcelona",
                },
                {
                  quote: "I'm always the one chasing people for money after trips. TRYPS just... handled it. That alone makes it worth it.",
                  author: "Divya R.",
                  detail: "organised a bachelorette weekend in Jaipur",
                },
                {
                  quote: "We've tried so many apps and they always fall apart because half the group won't install something. Nobody had to download anything. That changed everything.",
                  author: "Tom H.",
                  detail: "organised a 5-person road trip across New Zealand",
                },
              ].map((t, i) => (
                <blockquote key={i} className="bg-[#FFFBF0] rounded-3xl p-6 md:p-8 border border-[#F5D78E]/40 shadow-sm flex flex-col">
                  <p className="text-[#1C1208] leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                  <footer className="text-sm">
                    <strong className="text-[#D97706] block">{t.author}</strong>
                    <span className="text-[#9CA3AF]">{t.detail}</span>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl font-black text-[#1C1208] mb-2">500+ trips planned across friend groups globally.</p>
              <p className="text-[#6B5230] max-w-xl mx-auto leading-relaxed">
                Groups using TRYPS lock in dates an average of <strong className="text-[#D97706]">3&times; faster</strong> than coordinating over chat — based on trip data and user-reported coordination time.
              </p>
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section aria-labelledby="use-cases-title" className="py-14 md:py-24 bg-[#FFFBF0] border-t border-[#F5D78E]/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">Built for you</p>
              <h2 id="use-cases-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208]">
                Built for the trip that never gets planned
              </h2>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
              {[
                { title: "The trip stuck in the group chat", desc: 'Turn "we should go" into an actual plan.' },
                { title: "The trip where no one agrees on dates", desc: "One poll. Dates locked. Move forward." },
                { title: "The trip where one person does all the work", desc: "Everyone contributes. No single organiser burden." },
                { title: "The trip where money gets messy", desc: "Expenses tracked automatically. No follow-ups." },
                { title: "Planning a Goa trip with friends?", desc: "Lock dates, build your plan, and split costs — faster than agreeing on a weekend." },
              ].map((uc, i) => (
                <li key={i} className="bg-white rounded-3xl p-6 md:p-8 border border-[#F5D78E]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#FEF3C7] rounded-xl flex items-center justify-center mb-5">
                    <Star className="h-5 w-5 fill-[#D97706] text-[#D97706]" />
                  </div>
                  <h3 className="text-base font-black text-[#1C1208] mb-2">{uc.title}</h3>
                  <p className="text-[#6B5230] text-sm leading-relaxed">{uc.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── PRODUCT PREVIEW ── */}
        <section aria-labelledby="preview-title" className="py-14 md:py-24 bg-white border-t border-[#F5D78E]/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-3">See it in action</p>
              <h2 id="preview-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C1208] mb-4">
                What planning actually looks like
              </h2>
              <p className="text-lg text-[#6B5230] max-w-2xl mx-auto leading-relaxed">
                From your group chat to a structured plan everyone follows — invite, poll, plan, split, all in one flow.
              </p>
            </div>

            <figure className="bg-[#FFFBF0] rounded-3xl p-5 md:p-8 border border-[#F5D78E]/40 shadow-sm">
              <ProductPreview />
              <figcaption className="text-center text-sm text-[#9CA3AF] mt-6 font-medium">
                iMessage invite &rarr; date poll &rarr; shared itinerary &rarr; expense summary
              </figcaption>
            </figure>
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
                  a: ["TRYPS is a group trip planning app for friends that helps you coordinate dates, build a shared itinerary, and split expenses — all in one place."],
                },
                {
                  q: "How is this different from WhatsApp or Google Sheets?",
                  a: [
                    "WhatsApp is great for chatting. Google Sheets is great for data. But neither was built for making group decisions — which is why most trip planning over those tools drags on for weeks or collapses entirely.",
                    "TRYPS is structured around the trip from day one. Dates, plans, and costs all live in one shared space your whole group can access. Decisions get made because the tool is designed to make them — not bury them in a thread.",
                  ],
                },
                {
                  q: "Does everyone need to download an app?",
                  a: ["No. People can join instantly via link or iMessage without installing anything. One person creates the trip. Everyone else just shows up."],
                },
                {
                  q: "Can everyone edit the plan?",
                  a: ["Yes. It's fully collaborative — everyone can add to the itinerary, respond to polls, and log expenses."],
                },
                {
                  q: "How does expense splitting work?",
                  a: ["Log costs as they happen — the Airbnb, dinner, that spontaneous boat hire. TRYPS tracks balances and shows everyone what they owe at the end. No spreadsheet. No uncomfortable follow-ups."],
                },
                {
                  q: "How do I start?",
                  a: ["Create a trip, share the link, and start planning. Takes under a minute."],
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-[#F5D78E]/50 px-6 overflow-hidden open:border-[#D97706] open:bg-[#FEF3C7] transition-colors"
                >
                  <summary className="flex justify-between items-center py-5 cursor-pointer list-none font-black text-lg text-[#1C1208] select-none">
                    {faq.q}
                    <span className="text-[#D97706] text-xl shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="pb-5 space-y-3">
                    {faq.a.map((para, j) => (
                      <p key={j} className="text-[#6B5230] leading-relaxed">{para}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
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
            <p className="text-xl text-white/80 mb-3 font-medium">Create a trip. Share the link.</p>
            <p className="text-xl text-white/80 mb-10 font-medium">Get everyone aligned in minutes.</p>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 fill-[#D97706] text-[#D97706]" />
              <span className="font-black text-xl">TRYPS</span>
            </div>
            <nav aria-label="Footer navigation" className="flex gap-6 text-sm text-white/50">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <p className="text-white/30 text-sm">&copy; TRYPS</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
