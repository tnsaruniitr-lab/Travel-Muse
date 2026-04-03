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

export function Golden() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#1C1208] font-sans overflow-x-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FFFBF0]/85 backdrop-blur-md border-b border-[#F5D78E]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Star className="h-7 w-7 fill-[#D97706] text-[#D97706]" />
              <span className="font-black text-2xl tracking-tighter text-[#D97706]">TRYPS</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-medium text-[#6B5230]">
              <a href="#" className="hover:text-[#D97706] transition-colors">Features</a>
              <a href="#" className="hover:text-[#D97706] transition-colors">How it works</a>
              <a href="#" className="hover:text-[#D97706] transition-colors">FAQ</a>
              <Button className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-full px-6 shadow-md shadow-[#D97706]/20">
                Start planning
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — asymmetric layout */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FCD34D]/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text — takes 3 columns */}
            <div className="lg:col-span-3 pt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEF3C7] text-[#D97706] font-semibold text-sm mb-10">
                <Star className="h-4 w-4 fill-[#D97706]" />
                <span>Now in early access</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-8">
                The group trip planner{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#FCD34D]">
                  your friends deserve.
                </span>
              </h1>
              <p className="text-xl text-[#6B5230] mb-8 leading-relaxed max-w-xl">
                TRYPS brings your group together to plan trips — dates everyone agrees on, a shared itinerary, and expenses split fairly. All in one beautiful place.
              </p>

              <div className="flex items-center gap-3 mb-10 w-fit bg-white/70 px-5 py-3 rounded-2xl border border-[#F5D78E]/50">
                <MessageCircle className="h-5 w-5 text-[#D97706] shrink-0" />
                <span className="text-[#6B5230] font-medium">No app downloads needed. Invite via iMessage or a link.</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-[#D97706] hover:bg-[#B45309] text-white h-14 px-8 rounded-full text-lg shadow-xl shadow-[#D97706]/25 font-bold group">
                  Start planning your trip
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="h-14 px-8 rounded-full text-lg border-[#D97706] text-[#D97706] hover:bg-[#FEF3C7] font-bold">
                  Join waitlist
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["#D97706","#F59E0B","#4ECDC4","#8B5CF6"].map((c, i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-[#FFFBF0] flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-[#6B5230]">
                  Join <strong className="text-[#1C1208]">500+ groups</strong> already planning trips
                </p>
              </div>
            </div>

            {/* App mockup stack — takes 2 columns */}
            <div className="lg:col-span-2 relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706] to-[#FCD34D] rounded-[3rem] opacity-10 blur-2xl scale-110" />

              {/* Main card */}
              <div className="relative bg-white rounded-[2rem] shadow-2xl border border-[#F5D78E]/40 overflow-hidden">
                <div className="bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-6 py-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-amber-200 text-xs font-semibold uppercase tracking-widest">Active trip</p>
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
                  {/* Date poll */}
                  <div className="bg-[#FFFBF0] rounded-2xl p-4 border border-[#F5D78E]/50">
                    <p className="text-xs font-bold text-[#D97706] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> Vote on dates
                    </p>
                    {[
                      { date: "Jun 14–18", votes: 4, best: true },
                      { date: "Jun 21–25", votes: 2, best: false },
                      { date: "Jul 5–9", votes: 1, best: false },
                    ].map((d, i) => (
                      <div key={i} className={`flex items-center justify-between p-3 rounded-xl mb-2 ${d.best ? "bg-white border border-[#D97706] shadow-sm" : "bg-white/50"}`}>
                        <span className={`text-sm font-semibold ${d.best ? "text-[#D97706]" : "text-gray-500"}`}>{d.date}</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-xs font-bold ${d.best ? "text-[#D97706]" : "text-gray-400"}`}>{d.votes} votes</span>
                          {d.best && <CheckCircle2 className="h-4 w-4 text-[#D97706]" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expenses preview */}
                  <div className="bg-[#FFFBF0] rounded-2xl p-4 border border-[#F5D78E]/50">
                    <p className="text-xs font-bold text-[#D97706] uppercase tracking-widest mb-3">Expenses</p>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-500">Total budget</span>
                      <span className="text-lg font-black">$2,400</span>
                    </div>
                    <div className="h-2 bg-[#FEF3C7] rounded-full overflow-hidden mb-3">
                      <div className="h-full w-3/5 bg-gradient-to-r from-[#D97706] to-[#F59E0B] rounded-full" />
                    </div>
                    <p className="text-xs text-gray-400">60% of budget allocated</p>
                  </div>
                </div>
              </div>

              {/* Floating notif card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-[#F5D78E]/40 px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-[#D97706]" />
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
      <section className="py-10 bg-white border-y border-[#F5D78E]/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-[#D97706] tracking-widest uppercase mb-6">Perfect for every group</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Friends Vacations","Bachelor Parties","Bachelorette Trips","Weekend Getaways","Family Reunions","Ski Trips","Festival Crews","Road Trips"].map(chip => (
              <Badge key={chip} variant="secondary" className="bg-[#FFFBF0] text-[#1C1208] hover:bg-[#FEF3C7] text-sm py-2 px-4 rounded-full border border-[#F5D78E]/50">{chip}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Everything you need, nothing you don't</h2>
            <p className="text-lg text-[#6B5230]">We stripped away the complexity so you can focus on the fun part: actually going.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              { title: "One-link invite", icon: Share, bg: "bg-[#D97706]", text: "No app required. Send a link in the group chat and everyone's in." },
              { title: "Group date polling", icon: Calendar, bg: "bg-[#F59E0B]", text: "Find the elusive weekend that works for all 8 of you, fast." },
              { title: "Shared itinerary", icon: List, bg: "bg-[#4ECDC4]", text: "Everyone adds ideas, votes on activities, and sees the final plan." },
              { title: "Split expenses", icon: Wallet, bg: "bg-[#8B5CF6]", text: "Track who paid what and settle up easily at the end of the trip." },
              { title: "Real-time updates", icon: Clock, bg: "bg-[#D97706]", text: "Flight delayed? Dinner reservation changed? Everyone's notified instantly." },
              { title: "Travel preferences", icon: Plane, bg: "bg-[#F59E0B]", text: "Collect dietary restrictions and budget preferences upfront." },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-[#F5D78E]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`${f.bg} h-13 w-13 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg h-12 w-12`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-[#6B5230] leading-relaxed text-sm">{f.text}</p>
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
            <p className="text-lg text-[#6B5230]">From "we should do a trip" to actually going.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Create + invite", desc: "Start a trip and drop the link in your group chat." },
              { step: 2, title: "Poll for dates", desc: "Everyone votes on weekends that work for them." },
              { step: 3, title: "Build itinerary", desc: "Collaborate on where to stay and what to do." },
              { step: 4, title: "Split expenses", desc: "Track costs and settle up without the awkwardness." },
            ].map((item, i) => (
              <div key={i} className="bg-[#FFFBF0] rounded-3xl p-8 text-center border border-[#F5D78E]/30 hover:border-[#D97706] transition-colors group">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-xl font-black text-[#D97706] shadow-md mx-auto mb-5 border-4 border-[#FFFBF0] group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#6B5230] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-[#FFFBF0]">
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
            <div className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-[2rem] p-10 text-white shadow-xl md:-translate-y-4">
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
              <div key={i} className={`border rounded-2xl px-6 overflow-hidden transition-all ${openFaq === i ? "border-[#D97706] bg-[#FEF3C7]" : "border-[#F5D78E]/50 bg-[#FFFBF0]"}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center py-5 text-left">
                  <span className="text-lg font-bold">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#D97706] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <p className="text-[#6B5230] pb-5 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#D97706] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#F59E0B]/40 rounded-full blur-3xl" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Ready to get out of the group chat?</h2>
          <p className="text-2xl text-white/80 mb-10 font-medium">Start planning your next trip with friends today.</p>
          <Button className="bg-white text-[#D97706] hover:bg-[#FFFBF0] h-16 px-10 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform">
            Start planning now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1208] text-[#FFFBF0] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 fill-[#D97706] text-[#D97706]" />
            <span className="font-black text-xl">TRYPS</span>
          </div>
          <p className="text-white/30 text-sm">2025 TRYPS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Golden
