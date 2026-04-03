import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Link2,
  CalendarDays,
  Map,
  SplitSquareHorizontal,
  BellRing,
  Compass,
  Check,
  X,
  ArrowRight,
  Plane,
  Users,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

/* ─── Inline App Mockup (no image dependencies) ─── */
function AppMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f1c2e] ${className}`}>
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0a1628] border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-3 py-1 rounded-full bg-white/10 text-white/50 text-xs">tryps.app / cancun-2025</div>
        </div>
      </div>

      {/* App body */}
      <div className="flex h-80">
        {/* Sidebar */}
        <div className="w-52 border-r border-white/10 bg-[#0a1628] flex flex-col">
          <div className="px-4 py-4 border-b border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Trips</p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-500/20 text-orange-400 text-sm font-semibold">
              <Plane className="w-3.5 h-3.5" />
              Cancun 2025
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/40 text-sm mt-1 hover:bg-white/5">
              <Plane className="w-3.5 h-3.5" />
              Lisbon Spring
            </div>
          </div>
          <div className="px-4 py-3 flex flex-col gap-1 flex-1">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Planning</p>
            {[
              { icon: Users, label: "Group (6)", active: false },
              { icon: CalendarDays, label: "Dates", active: true },
              { icon: Map, label: "Itinerary", active: false },
              { icon: SplitSquareHorizontal, label: "Expenses", active: false },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                  active ? "bg-white/10 text-white font-medium" : "text-white/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Main panel */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-sm">Find a date for Cancun 2025</h3>
              <p className="text-white/40 text-xs mt-0.5">6 people responding</p>
            </div>
            <button className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-xs font-semibold">+ Add dates</button>
          </div>

          {/* Date poll */}
          <div className="flex-1 overflow-auto px-5 py-4 space-y-3">
            {[
              { date: "May 16-23", votes: 5, total: 6, names: ["Alex", "Sam", "Jordan", "Casey", "Riley"] },
              { date: "June 6-13", votes: 4, total: 6, names: ["Alex", "Jordan", "Casey", "Riley"] },
              { date: "June 20-27", votes: 3, total: 6, names: ["Sam", "Casey", "Riley"] },
            ].map(({ date, votes, total, names }, i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-medium">{date}</span>
                  <span className="text-white/50 text-xs">{votes}/{total} available</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 mb-2">
                  <div
                    className="h-full rounded-full bg-orange-500"
                    style={{ width: `${(votes / total) * 100}%` }}
                  />
                </div>
                <div className="flex gap-1 flex-wrap">
                  {names.map((n) => (
                    <span key={n} className="px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 text-xs">{n}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expenses panel (right) */}
        <div className="w-52 border-l border-white/10 bg-[#0a1628] flex flex-col">
          <div className="px-4 py-4 border-b border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Expenses</p>
            <div className="text-white font-bold text-xl">$1,840</div>
            <p className="text-white/40 text-xs mt-0.5">total · 6 people</p>
          </div>
          <div className="flex-1 overflow-auto px-4 py-3 space-y-2">
            {[
              { name: "Flights", amount: "$890", who: "Alex" },
              { name: "Airbnb", amount: "$720", who: "Sam" },
              { name: "Activities", amount: "$230", who: "Jordan" },
            ].map(({ name, amount, who }, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <div>
                  <p className="text-white text-xs font-medium">{name}</p>
                  <p className="text-white/30 text-xs">{who} paid</p>
                </div>
                <span className="text-white/70 text-xs font-mono">{amount}</span>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-white/10">
            <button className="w-full py-2 rounded-lg bg-orange-500/20 text-orange-400 text-xs font-semibold">Settle up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone mockup for hero ─── */
function PhoneMockup() {
  return (
    <div className="relative w-56 rounded-[2.5rem] border-4 border-white/20 bg-[#0a1628] shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />
      <div className="pt-7 pb-4 px-3 min-h-[440px]">
        <div className="text-white/50 text-[10px] uppercase tracking-wider mb-3">Cancun 2025</div>
        <div className="text-white font-bold text-base mb-1">Hey group!</div>
        <div className="text-white/60 text-xs mb-4">6 friends · Planning started</div>

        <div className="space-y-2 mb-4">
          {[
            { label: "Dates", status: "Polling", color: "text-yellow-400 bg-yellow-400/10" },
            { label: "Itinerary", status: "2 ideas", color: "text-sky-400 bg-sky-400/10" },
            { label: "Expenses", status: "$1,840", color: "text-green-400 bg-green-400/10" },
          ].map(({ label, status, color }) => (
            <div key={label} className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white text-xs font-medium">{label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${color}`}>{status}</span>
            </div>
          ))}
        </div>

        <div className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Members</div>
        <div className="flex gap-1.5 flex-wrap mb-4">
          {["AL", "SA", "JO", "CA", "RI", "+1"].map((init, i) => (
            <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${i < 5 ? "bg-orange-500/80 text-white" : "bg-white/10 text-white/50"}`}>
              {init}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-orange-500 text-white text-xs font-semibold justify-center">
          <Link2 className="w-3 h-3" /> Invite friends
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Link2,
    title: "One-link invite",
    desc: "Invite your friends instantly via iMessage or a simple link so everyone can join the trip in seconds.",
    color: "from-orange-500/20 to-amber-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: CalendarDays,
    title: "Group date polling",
    desc: "Find dates that work for everyone by collecting availability in one place.",
    color: "from-sky-500/20 to-blue-500/10",
    iconColor: "text-sky-500",
  },
  {
    icon: Map,
    title: "Shared itinerary",
    desc: "Plan destinations, activities, and schedules together so the whole group stays aligned.",
    color: "from-emerald-500/20 to-green-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: SplitSquareHorizontal,
    title: "Split expenses",
    desc: "Track shared trip costs and settle balances without switching between apps.",
    color: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-500",
  },
  {
    icon: BellRing,
    title: "Real-time updates",
    desc: "Keep everyone in sync as plans evolve.",
    color: "from-rose-500/20 to-pink-500/10",
    iconColor: "text-rose-500",
  },
  {
    icon: Compass,
    title: "Travel preferences",
    desc: "Understand where your group wants to go and align on destinations faster.",
    color: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-500",
  },
];

const steps = [
  {
    n: "01",
    title: "Create and invite",
    desc: "Start a trip and invite your group in seconds via iMessage or a simple link.",
    detail: "No app download required for your friends — they join instantly.",
  },
  {
    n: "02",
    title: "Poll for dates",
    desc: "Find dates that work for everyone in the group.",
    detail: "Everyone marks their availability. The best date wins — no more endless back-and-forth.",
  },
  {
    n: "03",
    title: "Build the itinerary together",
    desc: "Create a shared trip plan where everyone can contribute ideas and plans.",
    detail: "Add destinations, activities, restaurants. Everyone sees every update in real time.",
  },
  {
    n: "04",
    title: "Track and split expenses",
    desc: "Manage shared costs and settle balances across the group.",
    detail: "Log what you spend, see who owes what, and settle balances — all in one place.",
  },
];

const faqs = [
  {
    q: "What is TRYPS?",
    a: "TRYPS is a group trip planning app for friends that helps you coordinate trips, manage shared itineraries, and split expenses.",
  },
  {
    q: "How is TRYPS different from using multiple apps?",
    a: "TRYPS brings planning, coordination, and expense tracking into one place, so you don't have to juggle WhatsApp, Google Sheets, and Splitwise.",
  },
  {
    q: "Can multiple people edit a trip?",
    a: "Yes, TRYPS is designed for collaborative planning so everyone in the group can contribute.",
  },
  {
    q: "Does TRYPS help split travel expenses?",
    a: "Yes, TRYPS allows groups to track and settle shared costs.",
  },
  {
    q: "How do I invite friends to a trip?",
    a: "You can invite your friends instantly via iMessage or by sharing a simple link.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="font-extrabold text-xl tracking-tight text-primary">TRYPS</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Log in
            </button>
            <Button className="rounded-full text-sm font-semibold px-5" size="sm">
              Join waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-0 overflow-hidden bg-[#060f1e]">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-orange-500/20 blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-5">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              Now in early access
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-center text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
            Group trip planning<br />
            <span className="text-orange-400">made for friends</span>
          </h1>

          <p className="text-center text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
            Plan trips together, choose dates that work for everyone, build shared itineraries, and split expenses — all in one place.
          </p>
          <p className="text-center text-sm text-white/40 mb-10">
            No extra app downloads for your friends. Invite instantly via iMessage or a link.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-0.5"
            >
              Start planning your trip with friends
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base font-semibold border-white/20 text-white hover:bg-white/10 hover:border-white/30 bg-transparent"
            >
              Download app
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex justify-center mb-14">
            <div className="flex items-center gap-3 text-white/40 text-sm">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D", "E"].map((l, i) => (
                  <div
                    key={l}
                    className="w-7 h-7 rounded-full border-2 border-[#060f1e] flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: ["#f97316","#3b82f6","#10b981","#8b5cf6","#f43f5e"][i],
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              Join 500+ groups already planning trips together
            </div>
          </div>

          {/* Hero App Mockup */}
          <div className="flex justify-center gap-6 items-end pb-0">
            <div className="hidden md:block translate-y-4 opacity-80 scale-95 translate-x-6">
              <PhoneMockup />
            </div>
            <div className="flex-1 max-w-4xl">
              <AppMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Everything you need</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Everything your group needs to plan a trip together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {features.map(({ icon: Icon, title, desc, color, iconColor }) => (
              <div
                key={title}
                className={`p-6 rounded-2xl bg-gradient-to-br ${color} border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 cursor-default`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full px-10 bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/20">
              Join TRYPS
            </Button>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 bg-[#060f1e]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">Simple process</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              How TRYPS helps you plan trips with friends
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {steps.map(({ n, title, desc, detail }, i) => (
              <div
                key={n}
                className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-orange-500/30 transition-all group"
              >
                <div className="text-5xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors mb-4 leading-none">
                  {n}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{desc}</p>
                <p className="text-white/30 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Why TRYPS</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Stop planning trips across multiple apps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Without */}
            <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 bg-gray-100 border-b border-gray-200">
                <p className="text-base font-bold text-gray-500">Without TRYPS</p>
              </div>
              <div className="px-6 py-6 space-y-4">
                {[
                  "Chats spread across WhatsApp or iMessage",
                  "Dates discussed endlessly without resolution",
                  "Plans scattered across notes and messages",
                  "Expenses tracked separately in another app",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* With */}
            <div className="rounded-2xl bg-white border-2 border-orange-500 overflow-hidden shadow-xl shadow-orange-500/10">
              <div className="px-6 py-5 bg-orange-500 border-b border-orange-600">
                <p className="text-base font-bold text-white">With TRYPS</p>
              </div>
              <div className="px-6 py-6 space-y-4">
                {[
                  "One shared trip plan for the entire group",
                  "Built-in group date polling — everyone votes, you decide",
                  "Shared itinerary everyone can edit in real time",
                  "Expenses tracked and settled in one place",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-sm text-gray-900 font-medium">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONE PLACE ── */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Plan your entire trip in one place
          </h2>
          <p className="text-lg md:text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto mb-12">
            TRYPS brings planning, coordination, and expense tracking together so your group stays aligned from start to finish. No switching between apps. No confusion. Just one shared trip plan.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Friends planning vacations",
              "Bachelor & bachelorette trips",
              "Weekend getaways",
              "Multi-city adventures",
              "Group travel of any size",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium border border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SCREENSHOT ── */}
      <section className="py-24 bg-[#060f1e]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">Product</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              See how group trip planning works in TRYPS
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Plan trips, coordinate dates, and manage expenses through one shared interface your entire group can access.
            </p>
          </div>

          <AppMockup className="max-w-5xl mx-auto" />

          <div className="mt-10 grid grid-cols-3 gap-5">
            {[
              { icon: Users, label: "Shared access", desc: "Every member of the group can see and edit the plan." },
              { icon: BellRing, label: "Instant updates", desc: "Changes are reflected for everyone in real time." },
              { icon: MessageCircle, label: "No extra downloads", desc: "Invite friends via link — they don't need to install anything." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center px-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Questions</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Frequently asked questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-200 rounded-xl px-5 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-gray-900 py-5 hover:no-underline hover:text-orange-500 transition-colors [&>svg]:hidden">
                  <span className="flex-1 text-left">{q}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0 ml-4" />
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 bg-[#060f1e] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/15 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Start planning your next trip with friends
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Join 500+ groups already using TRYPS to plan better trips together.
          </p>
          <Button
            size="lg"
            className="rounded-full px-12 h-14 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-1"
          >
            Join TRYPS
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-white/30 text-sm mt-4">No credit card required</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#040c18] border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-extrabold text-xl text-orange-400">TRYPS</div>
          <div className="flex gap-6 text-white/30 text-sm">
            <a href="#" className="hover:text-white/60 transition-colors">Twitter</a>
            <a href="#" className="hover:text-white/60 transition-colors">Instagram</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
          <div className="text-white/20 text-sm">
            &copy; {new Date().getFullYear()} TRYPS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
