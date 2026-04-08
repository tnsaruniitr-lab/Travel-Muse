import { useState } from "react"
import {
  ArrowRight, CheckCircle2, Globe, MapPin, MessageCircle,
  Plane, Share, Star, Users, Wallet, Calendar, Clock, List, XCircle, ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const faqs = [
  { q: "Do all my friends need to download the app?", a: "Nope! Send them a web link and they can vote on dates, add ideas, and see the itinerary right from their browser." },
  { q: "Is TRYPS free to use?", a: "Yes! Core group planning features are completely free. Premium tier unlocks AI itinerary generation and unlimited trip history." },
  { q: "How does expense splitting work?", a: "Anyone logs an expense during the trip. Split equally or with custom amounts — we do the math to settle up at the end." },
  { q: "Can we use it for a trip that's already booked?", a: "Absolutely. Skip the date polling step and jump straight into the shared itinerary and expense tracking." },
]

export function Crimson() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#1C0808] font-sans overflow-x-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FFF9F9]/85 backdrop-blur-md border-b border-[#FECDD3]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Star className="h-7 w-7 fill-[#9A0514] text-[#9A0514]" />
              <span className="font-black text-2xl tracking-tighter text-[#9A0514]">TRYPS</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-medium text-[#6B3030]">
              <a href="#" className="hover:text-[#9A0514] transition-colors">Features</a>
              <a href="#" className="hover:text-[#9A0514] transition-colors">How it works</a>
              <a href="#" className="hover:text-[#9A0514] transition-colors">FAQ</a>
              <Button className="bg-[#9A0514] hover:bg-[#7B0310] text-white rounded-full px-6 shadow-md shadow-[#9A0514]/20">
                Start planning
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FB7185]/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#9A0514]/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 pt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE4E6] text-[#9A0514] font-semibold text-sm mb-10">
                <Star className="h-4 w-4 fill-[#9A0514]" />
                <span>Now in early access</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-8">
                The group trip planner{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A0514] via-[#BE123C] to-[#FB7185]">
                  your friends deserve.
                </span>
              </h1>
              <p className="text-xl text-[#6B3030] mb-8 leading-relaxed max-w-xl">
                TRYPS brings your group together to plan trips — dates everyone agrees on, a shared itinerary, and expenses split fairly. All in one beautiful place.
              </p>

              <div className="flex items-center gap-3 mb-10 w-fit bg-white/70 px-5 py-3 rounded-2xl border border-[#FECDD3]/50">
                <MessageCircle className="h-5 w-5 text-[#9A0514] shrink-0" />
                <span className="text-[#6B3030] font-medium">No app downloads needed. Invite via iMessage or a link.</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-[#9A0514] hover:bg-[#7B0310] text-white h-14 px-8 rounded-full text-lg shadow-xl shadow-[#9A0514]/25 font-bold group">
                  Start planning your trip
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="h-14 px-8 rounded-full text-lg border-[#9A0514] text-[#9A0514] hover:bg-[#FFE4E6] font-bold">
                  Join waitlist
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["#9A0514","#BE123C","#4ECDC4","#8B5CF6"].map((c, i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-[#FFF9F9] flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-[#6B3030]">
                  Join <strong className="text-[#1C0808]">500+ groups</strong> already planning trips
                </p>
              </div>
            </div>

            {/* App mockup */}
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9A0514] to-[#FB7185] rounded-[3rem] opacity-10 blur-2xl scale-110" />

              <div className="relative bg-white rounded-[2rem] shadow-2xl border border-[#FECDD3]/40 overflow-hidden">
                <div className="bg-gradient-to-r from-[#9A0514] to-[#BE123C] px-6 py-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-red-200 text-xs font-semibold uppercase tracking-widest">Active trip</p>
                      <h3 className="font-black text-white text-xl mt-0.5">Amalfi Coast</h3>
                    </div>
                    <div className="flex -space-x-2">
                      {["#fff3","#fff4","#fff2"].map((c, i) => (
                        <div key={i} className="w-9 h-9 rounded-full border-2 border-white/50 flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="bg-[#FFF9F9] rounded-2xl p-4 border border-[#FECDD3]/50">
                    <p className="text-xs font-bold text-[#9A0514] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> Vote on dates
                    </p>
                    {[
                      { date: "Jun 14–18", votes: 4, best: true },
                      { date: "Jun 21–25", votes: 2, best: false },
                      { date: "Jul 5–9", votes: 1, best: false },
                    ].map((d, i) => (
                      <div key={i} className={`flex items-center justify-between p-3 rounded-xl mb-2 ${d.best ? "bg-white border border-[#9A0514] shadow-sm" : "bg-white/50"}`}>
                        <span className={`text-sm font-semibold ${d.best ? "text-[#9A0514]" : "text-gray-500"}`}>{d.date}</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-xs font-bold ${d.best ? "text-[#9A0514]" : "text-gray-400"}`}>{d.votes} votes</span>
                          {d.best && <CheckCircle2 className="h-4 w-4 text-[#9A0514]" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#FFF9F9] rounded-2xl p-4 border border-[#FECDD3]/50">
                    <p className="text-xs font-bold text-[#9A0514] uppercase tracking-widest mb-3">Expenses</p>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-500">Total budget</span>
                      <span className="text-lg font-black">$2,400</span>
                    </div>
                    <div className="h-2 bg-[#FFE4E6] rounded-full overflow-hidden mb-3">
                      <div className="h-full w-3/5 bg-gradient-to-r from-[#9A0514] to-[#BE123C] rounded-full" />
                    </div>
                    <p className="text-xs text-gray-400">60% of budget allocated</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-[#FECDD3]/40 px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFE4E6] flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-[#9A0514]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Sarah voted</p>
                  <p className="text-sm font-bold">Jun 14–18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trip types */}
      <section className="py-10 bg-white border-y border-[#FECDD3]/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-[#9A0514] tracking-widest uppercase mb-6">Perfect for every group</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Friends Vacations","Bachelor Parties","Bachelorette Trips","Weekend Getaways","Family Reunions","Ski Trips","Festival Crews","Road Trips"].map(chip => (
              <Badge key={chip} variant="secondary" className="bg-[#FFF9F9] text-[#1C0808] hover:bg-[#FFE4E6] text-sm py-2 px-4 rounded-full border border-[#FECDD3]/50">{chip}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Everything you need, nothing you don't</h2>
            <p className="text-lg text-[#6B3030]">We stripped away the complexity so you can focus on the fun part: actually going.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              { title: "One-link invite", icon: Share, bg: "bg-[#9A0514]", text: "No app required. Send a link in the group chat and everyone's in." },
              { title: "Group date polling", icon: Calendar, bg: "bg-[#BE123C]", text: "Find the elusive weekend that works for all 8 of you, fast." },
              { title: "Shared itinerary", icon: List, bg: "bg-[#4ECDC4]", text: "Everyone adds ideas, votes on activities, and sees the final plan." },
              { title: "Split expenses", icon: Wallet, bg: "bg-[#8B5CF6]", text: "Track who paid what and settle up easily at the end of the trip." },
              { title: "Real-time updates", icon: Clock, bg: "bg-[#9A0514]", text: "Flight delayed? Dinner reservation changed? Everyone's notified instantly." },
              { title: "Travel preferences", icon: Plane, bg: "bg-[#BE123C]", text: "Collect dietary restrictions and budget preferences upfront." },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-[#FECDD3]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`${f.bg} h-12 w-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-[#6B3030] leading-relaxed text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">How it works</h2>
            <p className="text-lg text-[#6B3030]">From "we should do a trip" to actually going.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Create + invite", desc: "Start a trip and drop the link in your group chat." },
              { step: 2, title: "Poll for dates", desc: "Everyone votes on weekends that work for them." },
              { step: 3, title: "Build itinerary", desc: "Collaborate on where to stay and what to do." },
              { step: 4, title: "Split expenses", desc: "Track costs and settle up without the awkwardness." },
            ].map((item, i) => (
              <div key={i} className="bg-[#FFF9F9] rounded-3xl p-8 text-center border border-[#FECDD3]/30 hover:border-[#9A0514] transition-colors group">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-xl font-black text-[#9A0514] shadow-md mx-auto mb-5 border-4 border-[#FFF9F9] group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#6B3030] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-[#FFF9F9]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-14">Stop planning across multiple apps</h2>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white rounded-[2rem] p-10 border border-gray-200 shadow-sm opacity-80">
              <div className="flex items-center gap-3 mb-7">
                <XCircle className="h-7 w-7 text-red-400" />
                <h3 className="text-xl font-bold text-gray-400">Without TRYPS</h3>
              </div>
              <ul className="space-y-5">
                {["75 texts to agree on a date","Bookings scattered across group chats","One person drowns in all the planning","Awkward Venmo requests weeks later"].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-lg opacity-40 mt-0.5">⨯</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#9A0514] to-[#BE123C] rounded-[2rem] p-10 text-white shadow-xl md:-translate-y-4">
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
              <div key={i} className={`border rounded-2xl px-6 overflow-hidden transition-all ${openFaq === i ? "border-[#9A0514] bg-[#FFE4E6]" : "border-[#FECDD3]/50 bg-[#FFF9F9]"}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center py-5 text-left">
                  <span className="text-lg font-bold">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#9A0514] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <p className="text-[#6B3030] pb-5 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#9A0514] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#BE123C]/40 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Ready to get out of the group chat?</h2>
          <p className="text-2xl text-white/80 mb-10 font-medium">Start planning your next trip with friends today.</p>
          <Button className="bg-white text-[#9A0514] hover:bg-[#FFF9F9] h-16 px-10 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform">
            Start planning now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C0808] text-[#FFF9F9] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 fill-[#9A0514] text-[#9A0514]" />
            <span className="font-black text-xl">TRYPS</span>
          </div>
          <p className="text-white/30 text-sm">2025 TRYPS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Crimson
