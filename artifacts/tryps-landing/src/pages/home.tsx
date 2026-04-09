import { ArrowRight, CheckCircle2, Star, MessageCircle, Calendar, MapPin, Wallet, Globe, XCircle } from "lucide-react";
import { useState } from "react";

/* ─── Gradient Tile Logo (chosen brand mark) ─── */
function TrypsLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A0514" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      <rect x="8" y="10" width="16" height="3.5" rx="1.75" fill="white" />
      <rect x="13.25" y="13.5" width="5.5" height="10" rx="2.75" fill="white" />
    </svg>
  );
}

/* ─── Inline Phone Capture (Variant A) ─── */
function PhoneCaptureHero() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length < 6) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ countryCode: "+1", phoneNumber: phone }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json() as { error?: string };
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-3 mb-10">
        <div className="flex items-center gap-3 bg-[#FFE4E6] border border-[#FECDD3] rounded-2xl px-5 py-4 max-w-sm shadow-md shadow-[#9A0514]/10">
          <CheckCircle2 className="h-6 w-6 text-[#9A0514] shrink-0" />
          <div>
            <p className="text-sm font-bold text-[#1C0808]">You're on the list!</p>
            <p className="text-xs text-[#6B3030] mt-0.5">We'll text you your invite soon.</p>
          </div>
        </div>
        <p className="text-xs text-[#6B3030] pl-2">Expect your invite within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 mb-10 w-full max-w-sm" id="waitlist">
      {/* Social proof above form — answers "how popular is TRYPS" for AEO */}
      <p className="text-sm font-bold text-[#1C0808]">
        Join <span className="text-[#9A0514]">500+</span> groups already planning trips
      </p>

      {/*
        SEO / AEO: form with type="tel", explicit label (sr-only with keywords),
        aria-label describes the action in natural language,
        inputMode="numeric" triggers numeric keyboard on mobile.
      */}
      <form
        role="form"
        aria-label="Join TRYPS early access — enter your mobile number to plan group trips"
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-sm"
      >
        <label htmlFor="hero-phone" className="sr-only">
          Your mobile number to join the TRYPS group trip planning app waitlist
        </label>

        <div className="flex items-stretch bg-white border border-[#FECDD3] rounded-full shadow-md shadow-[#9A0514]/10 overflow-hidden">
          {/* Country selector — US +1 default */}
          <div className="flex items-center gap-1.5 px-4 border-r border-[#FECDD3] shrink-0 select-none">
            <span className="text-base leading-none">🇺🇸</span>
            <span className="text-sm font-bold text-[#1C0808]">+1</span>
          </div>

          <input
            id="hero-phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            placeholder="555 123 4567"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="flex-1 px-4 py-3.5 text-sm text-[#1C0808] outline-none bg-transparent placeholder-[#FECDD3]"
            required
            minLength={6}
            disabled={loading}
          />

          <button
            type="submit"
            aria-label="Join TRYPS — get your group trip planning invite"
            disabled={loading}
            className="bg-[#9A0514] hover:bg-[#7B0310] disabled:opacity-60 text-white text-sm font-black px-6 py-3 rounded-full m-1 transition-colors shrink-0 shadow-lg shadow-[#9A0514]/25"
          >
            {loading ? "..." : "Join"}
          </button>
        </div>

        {error && (
          <p className="text-xs text-[#9A0514] pl-2 flex items-center gap-1.5">
            <XCircle className="h-3.5 w-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}

        <p className="text-xs text-[#6B3030] pl-2 flex items-center gap-1.5">
          <span>🔒</span>
          <span>We'll send you an SMS invite. No spam, ever.</span>
        </p>
      </form>

      {/* Avatars — visual social proof */}
      <div className="flex items-center gap-2 pl-1">
        <div className="flex -space-x-2">
          {["#9A0514","#BE123C","#7B0310","#4C0412","#FB7185"].map((bg, i) => (
            <div key={i}
              style={{ background: bg, border: "2px solid #FFF9F9", zIndex: 5 - i }}
              className="relative w-7 h-7 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {["A","R","K","S","M"][i]}
              </span>
            </div>
          ))}
        </div>
        <span className="text-xs text-[#6B3030]">500+ groups waiting</span>
      </div>

      {/*
        App store badges — coming soon state.
        SEO / AEO: aria-label explicitly says "coming soon" so crawlers and LLMs
        understand the app is in development for iOS and Android.
        Schema signals this too (operatingSystem updated to "Web" + comingSoon note).
        Using <a> with aria-disabled + tabIndex -1 so they're skipped by screen readers
        but still parsed as links by Googlebot for future indexing signals.
      */}
      <div
        role="group"
        aria-label="TRYPS iOS and Android apps — coming soon"
        className="flex flex-col gap-2 pt-1"
      >
        <div className="flex flex-wrap gap-3">
          {/* Apple App Store — coming soon */}
          <a
            href="#waitlist"
            aria-label="Download TRYPS on the App Store — iOS app coming soon, join the waitlist"
            aria-disabled="true"
            tabIndex={-1}
            onClick={e => e.preventDefault()}
            className="flex items-center gap-2.5 bg-[#6B7280] cursor-not-allowed rounded-xl px-4 py-2.5 select-none opacity-70 hover:opacity-70 transition-none"
            style={{ minWidth: 130 }}
          >
            {/* Apple logo SVG */}
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden="true">
              <path d="M14.94 11.44c-.02-2.23 1.82-3.31 1.9-3.36-1.04-1.52-2.66-1.73-3.23-1.75-1.37-.14-2.69.81-3.39.81-.7 0-1.77-.79-2.91-.77-1.49.02-2.87.87-3.63 2.2-1.56 2.7-.4 6.7 1.11 8.89.74 1.07 1.62 2.27 2.78 2.23 1.12-.05 1.54-.72 2.89-.72 1.35 0 1.74.72 2.91.7 1.2-.02 1.96-1.08 2.69-2.16.85-1.24 1.2-2.44 1.22-2.5-.03-.01-2.34-.9-2.34-3.57z" fill="white"/>
              <path d="M12.72 4.28c.62-.75 1.03-1.79.92-2.83-.89.04-1.97.59-2.6 1.33-.57.66-1.07 1.71-.94 2.72.99.08 2-.5 2.62-1.22z" fill="white"/>
            </svg>
            <div className="text-left">
              <p className="text-white text-xs font-medium leading-none mb-0.5">Download on the</p>
              <p className="text-white text-sm font-bold leading-none">App Store</p>
            </div>
          </a>

          {/* Google Play — coming soon */}
          <a
            href="#waitlist"
            aria-label="Get TRYPS on Google Play — Android app coming soon, join the waitlist"
            aria-disabled="true"
            tabIndex={-1}
            onClick={e => e.preventDefault()}
            className="flex items-center gap-2.5 bg-[#6B7280] cursor-not-allowed rounded-xl px-4 py-2.5 select-none opacity-70 hover:opacity-70 transition-none"
            style={{ minWidth: 130 }}
          >
            {/* Google Play triangle SVG */}
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
              <path d="M1 1.27v17.46L10.08 10 1 1.27z" fill="white" opacity="0.9"/>
              <path d="M13.5 6.8L3.2 1 10.08 10l3.42-3.2z" fill="white" opacity="0.7"/>
              <path d="M13.5 13.2L10.08 10 3.2 19l10.3-5.8z" fill="white" opacity="0.8"/>
              <path d="M16.5 8.5c.83.46.83 1.54 0 2L13.5 12.2 10.08 10l3.42-3.2 3 1.7z" fill="white"/>
            </svg>
            <div className="text-left">
              <p className="text-white text-xs font-medium leading-none mb-0.5 uppercase tracking-wide">Get it on</p>
              <p className="text-white text-sm font-bold leading-none">Google Play</p>
            </div>
          </a>
        </div>

        {/* "Coming soon" label — keyword-carries "iOS app" and "Android app" for AEO */}
        <p className="text-xs text-[#9CA3AF] pl-1">
          iOS &amp; Android apps coming soon —{" "}
          <a href="#waitlist" className="text-[#9A0514] font-semibold hover:underline">
            join the waitlist
          </a>{" "}
          to be first.
        </p>
      </div>
    </div>
  );
}

/* ─── Inline App Mockup for Hero ─── */
function HeroMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto pb-6">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9A0514] to-[#FB7185] rounded-[2.5rem] opacity-15 blur-2xl pointer-events-none" />
      <div className="relative bg-white rounded-[2rem] shadow-2xl border border-[#FECDD3]/40 overflow-hidden">
        <div className="bg-gradient-to-r from-[#9A0514] to-[#BE123C] px-6 py-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-0.5">Active trip</p>
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
          <div className="bg-[#FFF9F9] rounded-2xl p-4 border border-[#FECDD3]/50">
            <p className="text-xs font-black text-[#9A0514] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Calendar className="h-3 w-3" /> Date poll
            </p>
            {[
              { date: "Jun 14–18", votes: 4, best: true },
              { date: "Jun 21–25", votes: 2, best: false },
              { date: "Jul 5–9", votes: 1, best: false },
            ].map((d, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-xl mb-2 last:mb-0 ${d.best ? "bg-white border border-[#9A0514] shadow-sm" : "bg-white/50"}`}>
                <span className={`text-sm font-semibold ${d.best ? "text-[#9A0514]" : "text-[#6B3030]"}`}>{d.date}</span>
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-bold ${d.best ? "text-[#9A0514]" : "text-[#9CA3AF]"}`}>{d.votes} votes</span>
                  {d.best && <CheckCircle2 className="h-4 w-4 text-[#9A0514]" />}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#FFF9F9] rounded-2xl p-4 border border-[#FECDD3]/50">
            <p className="text-xs font-black text-[#9A0514] uppercase tracking-widest mb-2">Expenses</p>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-[#6B3030]">Group total</span>
              <span className="text-lg font-black text-[#1C0808]">$2,400</span>
            </div>
            <div className="h-2 bg-[#FFE4E6] rounded-full overflow-hidden">
              <div className="h-full w-3/5 bg-gradient-to-r from-[#9A0514] to-[#BE123C] rounded-full" />
            </div>
            <p className="text-xs text-[#9CA3AF] mt-1.5">60% of budget allocated</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 bg-white rounded-2xl shadow-xl border border-[#FECDD3]/40 px-4 py-3 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-[#FFE4E6] flex items-center justify-center shrink-0">
          <CheckCircle2 className="h-4 w-4 text-[#9A0514]" />
        </div>
        <div>
          <p className="text-xs text-[#9CA3AF]">Sarah just voted</p>
          <p className="text-sm font-black text-[#1C0808]">Jun 14–18</p>
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
      color: "#9A0514",
      content: (
        <div className="space-y-2 mt-3">
          <div className="bg-[#FFE4E6] rounded-xl p-3 text-left">
            <p className="text-xs font-semibold text-[#1C0808]">Hey! Join our Amalfi trip</p>
            <p className="text-xs text-[#6B3030] mt-0.5">jointryps.com/amalfi-2025</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-[#9A0514] flex items-center justify-center text-xs font-black text-white">A</div>
            <div className="w-6 h-6 rounded-full bg-[#BE123C] flex items-center justify-center text-xs font-black text-white">B</div>
            <div className="w-6 h-6 rounded-full bg-[#4ECDC4] flex items-center justify-center text-xs font-black text-white">C</div>
            <span className="text-xs text-[#9CA3AF]">6 joined</span>
          </div>
        </div>
      ),
    },
    {
      label: "Date poll",
      icon: Calendar,
      color: "#BE123C",
      content: (
        <div className="space-y-1.5 mt-3">
          {[
            { date: "Jun 14–18", w: "80%", best: true },
            { date: "Jun 21–25", w: "50%", best: false },
            { date: "Jul 5–9", w: "30%", best: false },
          ].map((d, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-0.5">
                <span className={d.best ? "font-bold text-[#9A0514]" : "text-[#6B3030]"}>{d.date}</span>
              </div>
              <div className="h-1.5 bg-[#FFE4E6] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#9A0514] to-[#BE123C] rounded-full" style={{ width: d.w }} />
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
              <span className="text-xs text-[#9CA3AF] w-8 shrink-0">{e.time}</span>
              <span className="text-xs text-[#1C0808] font-medium">{e.item}</span>
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
              <span className="text-xs text-[#6B3030]">{e.label}</span>
              <span className="text-xs font-bold text-[#1C0808]">{e.amt}</span>
            </div>
          ))}
          <div className="border-t border-[#FECDD3] pt-1.5 flex justify-between">
            <span className="text-xs font-bold text-[#9A0514]">All settled</span>
            <span className="text-xs font-black text-[#1C0808]">$1,680</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {panels.map((p, i) => (
        <div key={i} className="bg-white rounded-2xl p-4 border border-[#FECDD3]/40 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${p.color}22` }}>
              <p.icon className="h-3.5 w-3.5" style={{ color: p.color }} />
            </div>
            <span className="text-xs font-black uppercase tracking-wider" style={{ color: p.color }}>{p.label}</span>
          </div>
          {p.content}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#1C0808] font-sans">

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#9A0514] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-bold">Skip to content</a>

      {/* ── HEADER / NAV ── */}
      <header className="sticky top-0 z-50 bg-[#FFF9F9]/95 backdrop-blur-md border-b border-[#FECDD3]/40">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
          <a href="/" className="flex items-center gap-2.5 font-black text-2xl tracking-tighter text-[#9A0514]" aria-label="TRYPS home">
            <TrypsLogo size={34} />
            TRYPS
          </a>
          <div className="hidden md:flex items-center gap-6 font-medium text-[#6B3030] text-sm">
            <a href="#features" className="hover:text-[#9A0514] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[#9A0514] transition-colors">How it works</a>
            <a href="#faq" className="hover:text-[#9A0514] transition-colors">FAQ</a>
            <a href="/group-trip-planning-guide" className="hover:text-[#9A0514] transition-colors">Guide</a>
            <a href="/blog" className="hover:text-[#9A0514] transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#waitlist" className="bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold text-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-md shadow-[#9A0514]/20 transition-colors">
              Join waitlist
            </a>
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-[#FFE4E6] transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4L16 16M16 4L4 16" stroke="#9A0514" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="#9A0514" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* ── MOBILE DRAWER ── always in DOM so aria-controls reference is valid */}
        <div
          id="mobile-nav"
          className="md:hidden border-t border-[#FECDD3]/60 bg-[#FFF9F9]"
          role="dialog"
          aria-label="Navigation menu"
          hidden={!menuOpen}
        >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {[
                { href: "#features", label: "Features" },
                { href: "#how-it-works", label: "How it works" },
                { href: "#faq", label: "FAQ" },
                { href: "/group-trip-planning-guide", label: "Guide" },
                { href: "/blog", label: "Blog" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center px-4 py-3.5 rounded-2xl font-semibold text-[#6B3030] hover:bg-[#FFE4E6] hover:text-[#9A0514] transition-colors text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="mt-3 pt-4 border-t border-[#FECDD3]/60">
                <a
                  href="#waitlist"
                  className="flex justify-center w-full bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold text-base px-5 py-3.5 rounded-2xl shadow-md shadow-[#9A0514]/20 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Join waitlist →
                </a>
              </div>
            </div>
          </div>
      </header>

      <main id="main-content">

        {/* ── HERO ── */}
        <section aria-labelledby="hero-title" className="relative pt-12 md:pt-20 pb-12 md:pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FB7185]/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#9A0514]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

              <div className="lg:col-span-3 pt-6 text-center lg:text-left">
                <p className="flex w-fit mx-auto lg:mx-0 items-center gap-2 px-4 py-2 rounded-full bg-[#FFE4E6] text-[#9A0514] font-bold text-sm mb-5 md:mb-8 border border-[#FECDD3]">
                  <Star className="h-4 w-4 fill-[#9A0514]" />
                  Group trip planning app
                </p>

                <h1 id="hero-title" className="text-[2.7rem] md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-5 md:mb-6 text-balance">
                  A group trip planning app{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A0514] via-[#BE123C] to-[#FB7185]">
                    your friends actually use.
                  </span>
                </h1>

                {/* Quick-answer box — primary AI snippet target for "what is TRYPS" queries */}
                <div
                  className="quick-answer bg-[#FFE4E6] border border-[#FECDD3] rounded-2xl px-5 py-4 mb-4 max-w-lg mx-auto lg:mx-0 text-left"
                  role="note"
                  aria-label="What is TRYPS"
                >
                  <p className="text-sm font-black text-[#9A0514] uppercase tracking-widest mb-1">What is TRYPS?</p>
                  <p className="text-base text-[#1C0808] leading-relaxed">
                    TRYPS is a group trip planning app for friends that helps you choose dates, build a shared itinerary, and split expenses — all in one place. No app download or sign-up required for anyone in the group.
                  </p>
                </div>

                <div className="flex items-start justify-center lg:justify-start gap-3 max-w-lg mx-auto lg:mx-0 mb-8">
                  <MessageCircle className="h-5 w-5 text-[#9A0514] shrink-0 mt-0.5" />
                  <p className="text-base text-[#6B3030] leading-relaxed">
                    No downloads. No sign-ups. Send one link or iMessage — your group joins instantly and starts planning.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <PhoneCaptureHero />
                </div>

                <p className="text-sm text-[#6B3030] leading-relaxed text-center lg:text-left">
                  Trusted by friend groups planning birthdays, bachelor trips, reunions, weekend getaways, and long vacations.
                </p>
              </div>

              <div className="lg:col-span-2 pt-8 lg:pt-6">
                <HeroMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section aria-labelledby="trust-title" className="py-10 bg-white border-t border-[#FECDD3]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 id="trust-title" className="text-lg font-black text-[#1C0808] mb-5 text-center">How does TRYPS make group trip coordination actually work?</h2>
            <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 list-none p-0">
              {[
                "No app required for invitees",
                "Dates, itinerary, and expenses in one shared flow",
                "Used for weekend trips, reunions, and destination trips",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[#6B3030] text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#9A0514] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" aria-labelledby="features-title" className="py-14 md:py-24 bg-[#FFF9F9] border-t border-[#FECDD3]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <p className="text-[#9A0514] font-bold text-sm uppercase tracking-widest mb-3">Everything you need</p>
              <h2 id="features-title" className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-[#1C0808]">
                Everything your group needs — without the chaos
              </h2>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 list-none p-0 mb-10 md:mb-16">
              {[
                { n: "01", title: "Get everyone in instantly", desc: 'Send one link. No apps, no accounts, no "wait, what are we using?"', color: "bg-[#9A0514]", icon: MessageCircle },
                { n: "02", title: "Lock dates in one round", desc: "One poll. Everyone responds. Dates decided — no endless back-and-forth.", color: "bg-[#BE123C]", icon: Calendar },
                { n: "03", title: "Keep the plan in one place", desc: "A shared itinerary everyone can see and update — no confusion, no scattered notes.", color: "bg-[#4ECDC4]", icon: MapPin },
                { n: "04", title: "No awkward money conversations", desc: "Track who paid what and who owes whom — settle up cleanly at the end.", color: "bg-[#8B5CF6]", icon: Wallet },
                { n: "05", title: "Know what everyone actually wants", desc: "Capture preferences early so you don't plan a trip half the group isn't excited about.", color: "bg-[#EC4899]", icon: Globe },
              ].map((f) => (
                <li key={f.title} className="bg-white rounded-3xl p-6 md:p-8 border border-[#FECDD3]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`${f.color} h-12 w-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black mb-2 text-[#1C0808]">{f.title}</h3>
                  <p className="text-[#6B3030] leading-relaxed text-sm">{f.desc}</p>
                </li>
              ))}
            </ul>

            <div className="text-center bg-white rounded-3xl p-7 md:p-10 border border-[#FECDD3]/30">
              <p className="text-xl font-black text-[#1C0808] mb-4">Start your group trip</p>
              <a href="/start" className="inline-flex items-center gap-2 bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg shadow-[#9A0514]/20 transition-colors">
                Create trip
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" aria-labelledby="how-title" className="py-14 md:py-24 bg-white border-t border-[#FECDD3]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <p className="text-[#9A0514] font-bold text-sm uppercase tracking-widest mb-3">Simple process</p>
              <h2 id="how-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C0808]">
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
                <li key={item.n} className="bg-[#FFF9F9] rounded-3xl p-6 md:p-8 text-center border border-[#FECDD3]/30 hover:border-[#9A0514] hover:shadow-xl transition-all duration-300 group">
                  <div className="h-14 w-14 bg-[#FFE4E6] rounded-full flex items-center justify-center text-2xl font-black text-[#9A0514] mx-auto mb-5 border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                    {item.n}
                  </div>
                  <h3 className="text-lg font-black mb-3 text-[#1C0808]">{item.title}</h3>
                  <p className="text-[#6B3030] text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── PROBLEM VS SOLUTION ── */}
        <section aria-labelledby="problem-solution-title" className="py-14 md:py-24 bg-[#FFF9F9] border-t border-[#FECDD3]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <h2 id="problem-solution-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C0808]">
                Why do most group trips fail before they start?
              </h2>
              <p className="mt-4 text-[#6B3030] text-base max-w-2xl mx-auto leading-relaxed">
                According to{" "}
                <a
                  href="https://www.ustravel.org/research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9A0514] font-semibold hover:underline"
                >
                  U.S. Travel Association research
                </a>
                , group travel is among the most planned and most often postponed category of leisure trips — coordination, not desire, is what stops them.
              </p>
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

              <article className="bg-gradient-to-br from-[#9A0514] to-[#BE123C] rounded-[2rem] p-7 md:p-10 text-white shadow-xl md:-translate-y-4">
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
        <section id="comparison" aria-labelledby="comparison-title" className="py-14 md:py-24 bg-white border-t border-[#FECDD3]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-[#9A0514] font-bold text-sm uppercase tracking-widest mb-3">Why TRYPS</p>
              <h2 id="comparison-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C0808]">
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
                <li key={row.tool} className="bg-[#FFF9F9] rounded-2xl px-7 py-5 border border-[#FECDD3]/40 shadow-sm">
                  <p className="text-[#1C0808]">
                    <strong className="font-black">{row.tool}</strong>
                    <span className="text-[#6B3030]"> — {row.verdict}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-[#9A0514] to-[#BE123C] rounded-3xl p-7 md:p-10 text-white text-center shadow-xl">
              <p className="text-lg font-medium mb-3 opacity-90">TRYPS combines planning, date coordination, and expense splitting in one shared flow built specifically for trips with friends.</p>
              <p className="text-2xl font-black">One link. Everyone in. Dates locked. Plan built. Costs settled.</p>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section aria-labelledby="social-proof-title" className="py-14 md:py-24 bg-[#FFF9F9] border-t border-[#FECDD3]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <p className="text-[#9A0514] font-bold text-sm uppercase tracking-widest mb-3">Real trips</p>
              <h2 id="social-proof-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C0808]">
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
                <blockquote key={i} className="bg-white rounded-3xl p-6 md:p-8 border border-[#FECDD3]/40 shadow-sm flex flex-col">
                  <p className="text-[#1C0808] leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                  <footer className="text-sm">
                    <strong className="text-[#9A0514] block">{t.author}</strong>
                    <span className="text-[#9CA3AF]">{t.detail}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section id="use-cases" aria-labelledby="use-cases-title" className="py-14 md:py-24 bg-white border-t border-[#FECDD3]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-14">
              <p className="text-[#9A0514] font-bold text-sm uppercase tracking-widest mb-3">Built for you</p>
              <h2 id="use-cases-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C0808]">
                What types of group trips is TRYPS built for?
              </h2>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 mb-12">
              {[
                { title: "The trip stuck in the group chat", desc: 'Turn "we should go" into an actual plan.' },
                { title: "The trip where no one agrees on dates", desc: "One poll. Dates locked. Move forward." },
                { title: "The trip where one person does all the work", desc: "Everyone contributes. No single organiser burden." },
                { title: "The trip where money gets messy", desc: "Expenses tracked automatically. No awkward follow-ups." },
              ].map((uc, i) => (
                <li key={i} className="bg-[#FFF9F9] rounded-3xl p-6 md:p-8 border border-[#FECDD3]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#FFE4E6] rounded-xl flex items-center justify-center mb-5">
                    <Star className="h-5 w-5 fill-[#9A0514] text-[#9A0514]" />
                  </div>
                  <h3 className="text-base font-black text-[#1C0808] mb-2">{uc.title}</h3>
                  <p className="text-[#6B3030] text-sm leading-relaxed">{uc.desc}</p>
                </li>
              ))}
            </ul>

            <div className="bg-[#FFF9F9] rounded-3xl p-7 md:p-10 border border-[#FECDD3]/30">
              <h3 className="text-xl font-black text-[#1C0808] mb-5">Popular trip examples</h3>
              <ul className="space-y-4 list-none p-0">
                {[
                  { href: "/plan-a-goa-trip-with-friends", label: "Planning a Goa trip with friends?", desc: "Lock dates, build your plan, and split costs faster than coordinating over chat." },
                  { href: "/plan-a-manali-trip-with-friends", label: "Planning a Manali trip with friends?", desc: "Keep dates, stays, and travel plans aligned in one place." },
                  { href: "/plan-a-pondicherry-trip-with-friends", label: "Planning a Pondicherry trip with friends?", desc: "Decide faster without bouncing across chats and spreadsheets." },
                  { href: "/plan-a-coorg-trip-with-friends", label: "Planning a Coorg trip with friends?", desc: "Build the itinerary together and keep expense tracking simple." },
                ].map((item) => (
                  <li key={item.href} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-sm">
                    <a href={item.href} className="font-bold text-[#9A0514] hover:underline shrink-0">{item.label}</a>
                    <span className="text-[#6B3030]">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── PRODUCT PREVIEW ── */}
        <section aria-labelledby="preview-title" className="py-14 md:py-24 bg-[#FFF9F9] border-t border-[#FECDD3]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-[#9A0514] font-bold text-sm uppercase tracking-widest mb-3">See it in action</p>
              <h2 id="preview-title" className="text-4xl md:text-5xl font-black tracking-tight text-[#1C0808] mb-4">
                What planning actually looks like
              </h2>
              <p className="text-lg text-[#6B3030] max-w-2xl mx-auto leading-relaxed">
                Instead of planning across chat, notes, and payment apps, your group gets one shared flow: invite, poll, plan, and split.
              </p>
            </div>

            <figure className="bg-white rounded-3xl p-5 md:p-8 border border-[#FECDD3]/40 shadow-sm">
              <ProductPreview />
              <figcaption className="text-center text-sm text-[#9CA3AF] mt-6 font-medium">
                One shared flow for invites, date voting, itinerary planning, and expense splitting.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section aria-labelledby="about-title" className="py-14 md:py-24 bg-white border-t border-[#FECDD3]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 id="about-title" className="text-3xl md:text-4xl font-black tracking-tight text-[#1C0808] mb-5">
              Built by people who care about making group trips actually happen
            </h2>
            <p className="text-lg text-[#6B3030] leading-relaxed mb-4">
              TRYPS was built to solve the coordination mess that stops most friend trips before they start: too many chats, unclear dates, scattered plans, and awkward expense follow-ups.
            </p>
            <p className="text-base text-[#6B3030] leading-relaxed">
              Learn more about the team, product vision, and company background on our{" "}
              <a href="/about" className="text-[#9A0514] font-bold hover:underline">About page</a>.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" aria-labelledby="faq-title" className="py-14 md:py-24 bg-[#FFF9F9] border-t border-[#FECDD3]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-[#9A0514] font-bold text-sm uppercase tracking-widest mb-3">FAQ</p>
              <h2 id="faq-title" className="text-4xl font-black text-[#1C0808]">Frequently asked questions</h2>
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
                  className="group bg-white rounded-2xl border border-[#FECDD3]/50 px-6 overflow-hidden open:border-[#9A0514] open:bg-[#FFE4E6] transition-colors"
                >
                  <summary className="flex justify-between items-center py-5 cursor-pointer list-none font-black text-lg text-[#1C0808] select-none">
                    <h3 className="font-black text-lg text-[#1C0808] m-0">{faq.q}</h3>
                    <span className="text-[#9A0514] text-xl shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="pb-5">
                    <p className="text-[#6B3030] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESOURCES ── */}
        <section aria-labelledby="resources-title" className="py-14 md:py-20 bg-white border-t border-[#FECDD3]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 id="resources-title" className="text-2xl font-black text-[#1C0808] mb-6">Helpful planning guides</h2>
            <ul className="space-y-3 list-none p-0">
              {[
                { href: "/group-trip-planning-guide", label: "How to plan a group trip without endless back-and-forth" },
                { href: "/split-trip-expenses", label: "How to split trip expenses with friends fairly" },
                { href: "/weekend-trip-planning-checklist", label: "Weekend trip planning checklist for friend groups" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[#9A0514] font-semibold hover:underline text-base">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section aria-labelledby="final-cta-title" className="py-20 md:py-32 bg-[#9A0514] relative overflow-hidden border-t border-[#7B0310]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#BE123C]/40 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 id="final-cta-title" className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              The trip has been in the group chat long enough.
            </h2>
            <p className="text-xl text-white/80 mb-10 font-medium">Create a trip. Share the link. Get everyone aligned in minutes.</p>
            <a href="/start" className="inline-flex items-center gap-2 bg-white text-[#9A0514] hover:bg-[#FFF9F9] font-black text-xl px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all">
              Start planning with friends
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C0808] text-[#FFF9F9] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div className="flex items-center gap-2.5">
              <TrypsLogo size={28} />
              <span className="font-black text-xl">TRYPS</span>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 text-sm text-white/50">
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/group-trip-planning-guide" className="hover:text-white transition-colors">Guide</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            </nav>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              TRYPS helps friends plan trips together, lock dates, build itineraries, and split expenses.
            </p>
            <div className="flex flex-col items-start md:items-end gap-1">
              <p className="text-white/40 text-sm">
                Support: <a href="mailto:support@jointryps.com" className="text-[#9A0514] hover:underline">support@jointryps.com</a>
              </p>
              <p className="text-white/30 text-sm">&copy; TRYPS</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
