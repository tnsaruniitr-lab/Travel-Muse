import { useState } from "react"
import {
  ArrowRight, CheckCircle2, Globe, MapPin, MessageCircle,
  Plane, Share, Sparkles, Users, Wallet, Calendar, Clock, List, Waves, XCircle, ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const faqs = [
  { q: "Do all my friends need to download the app?", a: "Nope! Send them a web link and they can vote on dates, add ideas, and see the itinerary right from their browser." },
  { q: "Is TRYPS free to use?", a: "Yes! Core group planning features are completely free. Premium tier unlocks AI itinerary generation and unlimited trip history." },
  { q: "How does expense splitting work?", a: "Anyone logs an expense during the trip. Split equally or with custom amounts — we do the math to settle up at the end." },
  { q: "Can we use it for a trip that's already booked?", a: "Absolutely. Skip the date polling step and jump straight into the shared itinerary and expense tracking." },
]

export function Coastal() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#F0F8FF] text-[#1A2B3C] font-sans overflow-x-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#F0F8FF]/80 backdrop-blur-md border-b border-[#B8D9F0]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Waves className="h-7 w-7 text-[#0EA5E9]" />
              <span className="font-black text-2xl tracking-tighter text-[#0EA5E9]">TRYPS</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-medium text-[#4A6580]">
              <a href="#" className="hover:text-[#0EA5E9] transition-colors">Features</a>
              <a href="#" className="hover:text-[#0EA5E9] transition-colors">How it works</a>
              <a href="#" className="hover:text-[#0EA5E9] transition-colors">FAQ</a>
              <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white rounded-full px-6 shadow-md shadow-[#0EA5E9]/20">
                Start planning
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — centered layout */}
      <section className="relative pt-24 pb-20 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#38BDF8]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0EA5E9]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F2FE] text-[#0EA5E9] font-semibold text-sm mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Group trip planning, reimagined</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Your whole crew,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
              one trip plan.
            </span>
          </h1>
          <p className="text-xl text-[#4A6580] mb-8 leading-relaxed max-w-2xl mx-auto">
            TRYPS brings everyone together — poll dates, build shared itineraries, and split expenses without the group chat chaos.
          </p>

          <div className="inline-flex items-center gap-3 mb-10 text-[#4A6580] font-medium bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-[#B8D9F0]/50">
            <MessageCircle className="h-5 w-5 text-[#0EA5E9] shrink-0" />
            <span>No extra apps for friends — invite via iMessage or a simple link.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white h-14 px-8 rounded-full text-lg shadow-xl shadow-[#0EA5E9]/25 font-bold group">
              Start planning your trip
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-14 px-8 rounded-full text-lg border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#E0F2FE] font-bold">
              Join waitlist
            </Button>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="flex -space-x-3">
              {["#0EA5E9","#38BDF8","#F59E0B","#10B981"].map((c, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-[#F0F8FF] flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-[#4A6580]">
              Join <strong className="text-[#1A2B3C]">500+ groups</strong> already planning trips together
            </p>
          </div>
        </div>

        {/* UI Mockup — wide card below hero */}
        <div className="max-w-5xl mx-auto px-6 mt-16 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl border border-[#B8D9F0]/30 overflow-hidden">
            {/* Browser bar */}
            <div className="bg-[#F8FAFC] border-b border-gray-100 px-6 py-4 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-xs text-gray-400 border border-gray-100">app.tryps.com/trips/barcelona-crew</div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {/* Trip overview */}
              <div className="p-6">
                <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest mb-4">Active Trip</div>
                <h3 className="text-xl font-black mb-1">Barcelona Crew</h3>
                <p className="text-sm text-gray-400 mb-4">Sep 12 – Sep 15</p>
                <div className="flex -space-x-2 mb-4">
                  {["#0EA5E9","#38BDF8","#F59E0B","#10B981","#8B5CF6"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{ background: c }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="bg-[#E0F2FE] rounded-xl p-3">
                  <p className="text-xs font-semibold text-[#0EA5E9]">Dates confirmed</p>
                  <p className="text-sm font-bold mt-0.5">Sep 12 – 15</p>
                </div>
              </div>

              {/* Itinerary */}
              <div className="p-6">
                <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest mb-4">Day 1 Itinerary</div>
                {[
                  { time: "11:00", label: "Arrive & check in", icon: Plane },
                  { time: "13:00", label: "Lunch at Boqueria", icon: MapPin },
                  { time: "15:30", label: "Sagrada Familia", icon: Globe },
                  { time: "20:00", label: "Rooftop dinner", icon: Sparkles },
                ].map((e, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] flex items-center justify-center shrink-0">
                      <e.icon className="h-4 w-4 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{e.time}</p>
                      <p className="text-sm font-semibold">{e.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expenses */}
              <div className="p-6">
                <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest mb-4">Expenses</div>
                {[
                  { label: "Flights", amt: "$840", pct: 50 },
                  { label: "Hotel", amt: "$620", pct: 37 },
                  { label: "Activities", amt: "$220", pct: 13 },
                ].map((e, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{e.label}</span>
                      <span className="text-sm font-bold text-[#0EA5E9]">{e.amt}</span>
                    </div>
                    <div className="h-1.5 bg-[#E0F2FE] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0EA5E9] rounded-full" style={{ width: `${e.pct}%` }} />
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-500">Total</span>
                    <span className="text-lg font-black text-[#1A2B3C]">$1,680</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trip types */}
      <section className="py-10 bg-white border-y border-[#B8D9F0]/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-[#0EA5E9] tracking-widest uppercase mb-6">Perfect for every group</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Friends Vacations","Bachelor Parties","Bachelorette Trips","Weekend Getaways","Family Reunions","Ski Trips","Festival Crews","Road Trips"].map(chip => (
              <Badge key={chip} variant="secondary" className="bg-[#F0F8FF] text-[#1A2B3C] hover:bg-[#E0F2FE] text-sm py-2 px-4 rounded-full border border-[#B8D9F0]/50">{chip}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Everything your group needs</h2>
            <p className="text-lg text-[#4A6580]">One shared space for dates, plans, and money — no switching apps.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "One-link invite", icon: Share, color: "bg-[#0EA5E9]", text: "No app required. Send a link in the group chat and everyone's in." },
              { title: "Group date polling", icon: Calendar, color: "bg-[#38BDF8]", text: "Find the weekend that works for all 8 of you without 50 messages." },
              { title: "Shared itinerary", icon: List, color: "bg-[#F59E0B]", text: "Everyone adds ideas, votes, and sees the final plan in one place." },
              { title: "Split expenses", icon: Wallet, color: "bg-[#10B981]", text: "Track who paid for what and settle up easily at the end." },
              { title: "Real-time updates", icon: Clock, color: "bg-[#8B5CF6]", text: "Flight delayed? Everyone gets notified instantly." },
              { title: "Travel preferences", icon: Plane, color: "bg-[#EC4899]", text: "Collect dietary restrictions and budget preferences upfront." },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-[#B8D9F0]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`${f.color} h-12 w-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-[#4A6580] leading-relaxed text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">From idea to itinerary in minutes</h2>
            <p className="text-lg text-[#4A6580]">No planning experience required.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Create + invite", desc: "Start a trip and drop the link in your group chat." },
              { step: 2, title: "Poll for dates", desc: "Everyone votes on weekends that work for them." },
              { step: 3, title: "Build itinerary", desc: "Collaborate on where to stay and what to do." },
              { step: 4, title: "Split expenses", desc: "Track costs and settle up without the awkwardness." },
            ].map((item, i) => (
              <div key={i} className="bg-[#F0F8FF] rounded-3xl p-8 text-center border border-[#B8D9F0]/30 hover:border-[#0EA5E9] transition-colors group">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-xl font-black text-[#0EA5E9] shadow-md mx-auto mb-5 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#4A6580] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-[#F0F8FF]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-14">Stop planning across multiple apps</h2>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white rounded-[2rem] p-10 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-7">
                <XCircle className="h-7 w-7 text-red-400" />
                <h3 className="text-xl font-bold text-gray-400">Without TRYPS</h3>
              </div>
              <ul className="space-y-5">
                {["75 texts to agree on a date","Bookings scattered across chats","One person drowning in planning","Awkward Venmo requests at the end"].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-lg opacity-40 mt-0.5">—</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] rounded-[2rem] p-10 text-white shadow-xl md:-translate-y-4">
              <div className="flex items-center gap-3 mb-7">
                <CheckCircle2 className="h-7 w-7 text-white" />
                <h3 className="text-xl font-bold">With TRYPS</h3>
              </div>
              <ul className="space-y-5">
                {["Dates decided in one clean poll","All links and bookings in one place","Everyone collaborates and gets excited","Expenses tracked and split automatically"].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">Got questions?</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#B8D9F0]/50 rounded-2xl px-6 bg-[#F0F8FF] overflow-hidden transition-colors" style={{ background: openFaq === i ? "#E0F2FE" : "" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center py-5 text-left">
                  <span className="text-lg font-bold">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#0EA5E9] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <p className="text-[#4A6580] pb-5 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#0284C7]/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Ready to plan your trip?</h2>
          <p className="text-xl text-white/80 mb-10 font-medium">Join your crew and start planning today.</p>
          <Button className="bg-white text-[#0EA5E9] hover:bg-[#F0F8FF] h-16 px-10 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform">
            Start planning now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Waves className="h-6 w-6 text-[#0EA5E9]" />
            <span className="font-black text-xl text-white">TRYPS</span>
          </div>
          <p className="text-white/40 text-sm">2025 TRYPS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Coastal
