import { useState } from "react"
import {
  ArrowRight, CheckCircle2, MapPin, MessageCircle,
  Plane, Share, Zap, Wallet, Calendar, List, XCircle, ChevronDown, Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const faqs = [
  { q: "Do all my friends need to download the app?", a: "Nope! Send them a web link and they can vote on dates, add ideas, and see the itinerary right from their browser." },
  { q: "Is TRYPS free to use?", a: "Yes! Core group planning features are completely free. Premium tier unlocks AI itinerary generation and unlimited trip history." },
  { q: "How does expense splitting work?", a: "Anyone logs an expense during the trip. Split equally or with custom amounts — we do the math to settle up at the end." },
  { q: "Can we use it for a trip that's already booked?", a: "Absolutely. Skip the date polling step and jump straight into the shared itinerary and expense tracking." },
]

export function Punchy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans overflow-x-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#111827]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-4">
            <div className="flex items-center gap-2">
              <Zap className="h-7 w-7 fill-[#FACC15] text-[#111827]" />
              <span className="font-black text-2xl tracking-tighter">TRYPS</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-bold text-[#111827]">
              <a href="#" className="hover:text-[#EF4444] transition-colors">Features</a>
              <a href="#" className="hover:text-[#EF4444] transition-colors">How it works</a>
              <a href="#" className="hover:text-[#EF4444] transition-colors">FAQ</a>
              <Button className="bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-full px-6 border-2 border-[#111827] shadow-[3px_3px_0px_#111827]">
                Start planning
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — bold split with yellow block */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[80vh] items-stretch">
            {/* Left — text */}
            <div className="py-20 pr-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FACC15] text-[#111827] font-black text-sm mb-8 border-2 border-[#111827] w-fit shadow-[2px_2px_0px_#111827]">
                <Zap className="h-4 w-4 fill-[#111827]" />
                <span>No more group chat planning</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] mb-6">
                Group trips{" "}
                <span className="inline-block bg-[#EF4444] text-white px-4 py-1 rotate-[-1deg] shadow-[4px_4px_0px_#111827]">
                  made easy.
                </span>
              </h1>
              <p className="text-xl text-[#4B5563] mb-8 leading-relaxed max-w-lg mt-4">
                TRYPS brings your whole crew together — poll dates, build itineraries, and split expenses in one place.
              </p>

              <div className="flex items-start gap-3 mb-10 font-medium bg-[#F9FAFB] p-4 rounded-2xl border-2 border-[#111827] w-fit shadow-[3px_3px_0px_#111827]">
                <MessageCircle className="h-5 w-5 text-[#EF4444] shrink-0 mt-0.5" />
                <span>No app downloads needed — invite friends via iMessage or a simple link.</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-[#EF4444] hover:bg-[#DC2626] text-white h-14 px-8 rounded-full text-lg border-2 border-[#111827] shadow-[4px_4px_0px_#111827] font-black group">
                  Start planning your trip
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="h-14 px-8 rounded-full text-lg border-2 border-[#111827] text-[#111827] hover:bg-[#FACC15] font-black shadow-[3px_3px_0px_#111827]">
                  Join waitlist
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["#EF4444","#FACC15","#22C55E","#3B82F6"].map((c, i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-black" style={{ background: c, color: c === "#FACC15" ? "#111827" : "#fff" }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-[#6B7280]">
                  <strong className="text-[#111827]">500+ groups</strong> already planning trips
                </p>
              </div>
            </div>

            {/* Right — yellow block with app UI */}
            <div className="bg-[#FACC15] border-l-2 border-[#111827] flex items-center justify-center p-10 relative">
              <div className="w-full max-w-sm">
                {/* Phone-style card */}
                <div className="bg-white rounded-[2rem] border-2 border-[#111827] shadow-[8px_8px_0px_#111827] overflow-hidden">
                  <div className="bg-[#EF4444] px-5 py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-red-200 text-[10px] font-bold uppercase tracking-widest">Active Trip</p>
                        <h3 className="font-black text-white text-lg">Ibiza 2025</h3>
                      </div>
                      <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold text-white">8 people</div>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Date poll */}
                    <div className="bg-[#FFF7ED] rounded-2xl p-4 border-2 border-[#111827]">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#EF4444] mb-3 flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" /> Vote on dates
                      </p>
                      {[
                        { date: "Aug 7–11", votes: 6, best: true },
                        { date: "Aug 14–18", votes: 3, best: false },
                      ].map((d, i) => (
                        <div key={i} className={`p-3 rounded-xl mb-2 flex items-center justify-between border-2 ${d.best ? "border-[#EF4444] bg-white" : "border-transparent bg-white/50"}`}>
                          <span className={`text-sm font-bold ${d.best ? "text-[#EF4444]" : "text-gray-500"}`}>{d.date}</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-gray-500">{d.votes} votes</span>
                            {d.best && <CheckCircle2 className="h-4 w-4 text-[#EF4444]" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Itinerary snippet */}
                    <div className="bg-[#F0FDF4] rounded-2xl p-4 border-2 border-[#111827]">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#16A34A] mb-3">Itinerary Highlights</p>
                      {[
                        { emoji: "✈️", label: "Fly to Ibiza" },
                        { emoji: "🏖️", label: "Beach + lunch" },
                        { emoji: "🎉", label: "Club night" },
                      ].map((e, i) => (
                        <div key={i} className="flex items-center gap-2 mb-2">
                          <span>{e.emoji}</span>
                          <span className="text-sm font-semibold">{e.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expense */}
                    <div className="flex items-center justify-between bg-[#EEF2FF] rounded-2xl p-4 border-2 border-[#111827]">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#6366F1] mb-1">Group Expenses</p>
                        <p className="text-2xl font-black">$3,840</p>
                      </div>
                      <div className="bg-[#22C55E] text-white text-xs font-black px-3 py-1.5 rounded-full border-2 border-[#111827]">All good</div>
                    </div>
                  </div>
                </div>

                {/* Floating reaction */}
                <div className="absolute bottom-8 left-4 bg-white rounded-2xl px-4 py-2.5 border-2 border-[#111827] shadow-[3px_3px_0px_#111827] flex items-center gap-2">
                  <Heart className="h-4 w-4 fill-[#EF4444] text-[#EF4444]" />
                  <span className="text-sm font-black">Sarah is in!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trip type chips */}
      <section className="py-10 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black text-[#FACC15] tracking-widest uppercase mb-6">Perfect for every group</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Friends Vacations","Bachelor Parties","Bachelorette Trips","Weekend Getaways","Family Reunions","Ski Trips","Festival Crews","Road Trips"].map(chip => (
              <Badge key={chip} className="bg-white text-[#111827] hover:bg-[#FACC15] text-sm py-2 px-4 rounded-full border-2 border-white font-bold cursor-pointer transition-colors">{chip}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Everything you need to plan together</h2>
            <p className="text-lg text-[#6B7280]">Built for real friend groups, not travel agents.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "One-link invite", icon: Share, bg: "bg-[#EF4444]", text: "No app required. Drop a link in the group chat and everyone's in." },
              { title: "Group date polling", icon: Calendar, bg: "bg-[#FACC15] text-[#111827]", text: "Find the weekend that works for all of you without 50 messages." },
              { title: "Shared itinerary", icon: List, bg: "bg-[#22C55E]", text: "Everyone adds ideas, votes on activities, and sees the final plan." },
              { title: "Split expenses", icon: Wallet, bg: "bg-[#3B82F6]", text: "Track who paid what and settle up at the end. No awkwardness." },
              { title: "Real-time updates", icon: Zap, bg: "bg-[#8B5CF6]", text: "Flight delayed? Everyone gets notified instantly. No chasing." },
              { title: "Travel preferences", icon: Plane, bg: "bg-[#F97316]", text: "Collect dietary restrictions and budget preferences upfront." },
            ].map((f, i) => (
              <div key={i} className="rounded-3xl p-8 border-2 border-[#111827] hover:shadow-[6px_6px_0px_#111827] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1">
                <div className={`${f.bg} h-12 w-12 rounded-2xl flex items-center justify-center text-white mb-5 border-2 border-[#111827]`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black mb-2">{f.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#FACC15]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">How it works</h2>
            <p className="text-lg font-medium text-[#4B3F00]">Simple. Four steps. Done.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-5">
            {[
              { step: "1", title: "Create + invite", desc: "Start a trip and drop the link in your group chat." },
              { step: "2", title: "Poll for dates", desc: "Everyone votes on weekends that work for them." },
              { step: "3", title: "Build itinerary", desc: "Collaborate on where to stay and what to do." },
              { step: "4", title: "Split expenses", desc: "Track costs and settle up without the awkwardness." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 text-center border-2 border-[#111827] shadow-[4px_4px_0px_#111827]">
                <div className="h-14 w-14 bg-[#EF4444] rounded-full flex items-center justify-center text-2xl font-black text-white mx-auto mb-5 border-2 border-[#111827]">
                  {item.step}
                </div>
                <h3 className="text-lg font-black mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-14">Stop planning across multiple apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-10 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-7">
                <XCircle className="h-7 w-7 text-red-400" />
                <h3 className="text-xl font-black text-gray-400">Without TRYPS</h3>
              </div>
              <ul className="space-y-4">
                {["75 texts to agree on a single date","Bookings scattered across group chats","One person does all the planning work","Awkward Venmo requests weeks later"].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="font-black text-xl mt-0.5">—</span>
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#EF4444] rounded-3xl p-10 border-2 border-[#111827] shadow-[5px_5px_0px_#111827] text-white md:-translate-y-4">
              <div className="flex items-center gap-3 mb-7">
                <CheckCircle2 className="h-7 w-7 text-white" />
                <h3 className="text-xl font-black">With TRYPS</h3>
              </div>
              <ul className="space-y-4">
                {["Dates decided in one clean poll","All links and bookings in one place","Everyone collaborates and contributes","Expenses tracked and split automatically"].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
                    <span className="font-bold">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">Got questions?</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-2 rounded-2xl px-6 overflow-hidden transition-all ${openFaq === i ? "border-[#EF4444] bg-white shadow-[3px_3px_0px_#EF4444]" : "border-[#111827] bg-white"}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center py-5 text-left">
                  <span className="text-lg font-black">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#EF4444] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <p className="text-[#6B7280] pb-5 leading-relaxed font-medium">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#EF4444] relative overflow-hidden border-t-2 border-[#111827]">
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#FACC15] rounded-full border-2 border-[#111827] opacity-60" />
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-white rounded-full border-2 border-[#111827] opacity-40" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Ready to get out of the group chat?</h2>
          <p className="text-2xl text-white/80 mb-10 font-bold">Start planning your next trip with friends today.</p>
          <Button className="bg-white text-[#EF4444] hover:bg-[#FACC15] hover:text-[#111827] h-16 px-10 rounded-full text-xl font-black border-2 border-[#111827] shadow-[5px_5px_0px_#111827] hover:shadow-[6px_6px_0px_#111827] transition-all">
            Start planning now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 border-t-2 border-[#111827]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 fill-[#FACC15] text-[#111827]" />
            <span className="font-black text-xl">TRYPS</span>
          </div>
          <p className="text-white/30 text-sm">2025 TRYPS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Punchy
