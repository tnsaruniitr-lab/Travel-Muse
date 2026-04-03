import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Link as LinkIcon,
  MessageCircle,
  Plane,
  Plus,
  Share,
  Star,
  Users,
  Wallet,
  Calendar,
  MapPin,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Using Plus Jakarta Sans for a modern fintech/premium feel, Space Mono for data/tech accents.
const fontDisplay = "font-['Plus_Jakarta_Sans',sans-serif]";
const fontMono = "font-['Space_Mono',monospace]";

export function NightFlight() {
  const [activeTab, setActiveTab] = useState<"dates" | "itinerary" | "expenses">("dates");

  return (
    <div className={cn("min-h-screen bg-[#0A0D14] text-white selection:bg-blue-500/30", fontDisplay)}>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0D14]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Plane className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">TRYPS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">Log in</a>
          <Button className="bg-white text-black hover:bg-slate-200 rounded-full font-semibold px-6">
            Get Started
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 text-blue-400">
              <Star className="w-4 h-4 fill-blue-400" />
              <span>Join 500+ groups planning trips</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Group trip planning <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">made for friends</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
              TRYPS helps your group plan trips together — dates that work for everyone, shared itineraries, and split expenses. All in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold px-8 h-14 text-base">
                Start planning your trip
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 rounded-full font-semibold px-8 h-14 text-base bg-transparent">
                Download app
              </Button>
            </div>
            
            <p className="text-sm text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              No extra app downloads. Invite instantly via iMessage.
            </p>
          </div>

          {/* Code-built Fake App UI */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            {/* Decorative ring behind UI */}
            <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] transform -rotate-3 scale-105" />
            
            <div className="bg-[#121620] border border-white/10 rounded-[2rem] shadow-2xl shadow-black/50 overflow-hidden relative">
              {/* App Header */}
              <div className="p-6 border-b border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex -space-x-3">
                    {['#3B82F6', '#10B981', '#F59E0B', '#6366F1'].map((color, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#121620] flex items-center justify-center text-xs font-bold" style={{ backgroundColor: color }}>
                        {['JD', 'SM', 'AL', 'KT'][i]}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[#121620] bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                      +2
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full bg-white/5 hover:bg-white/10 text-white">
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
                
                <h3 className="text-2xl font-bold mb-1">Tokyo 2024 🇯🇵</h3>
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Oct 12 - 24, 2024
                </p>
              </div>

              {/* App Tabs */}
              <div className="flex border-b border-white/5 px-4">
                {(['dates', 'itinerary', 'expenses'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "flex-1 py-4 text-sm font-medium capitalize transition-colors border-b-2",
                      activeTab === tab ? "border-blue-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* App Content */}
              <div className="p-6 bg-[#0D1017] min-h-[300px]">
                {activeTab === 'dates' && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-400 mb-4 font-medium uppercase tracking-wider">Vote on dates</p>
                    {[
                      { dates: "Oct 12 - Oct 24", votes: 5, total: 6 },
                      { dates: "Nov 02 - Nov 14", votes: 2, total: 6 },
                      { dates: "Dec 05 - Dec 17", votes: 1, total: 6 },
                    ].map((poll, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                        <div 
                          className="absolute left-0 top-0 bottom-0 bg-blue-600/20 -z-10 transition-all duration-1000"
                          style={{ width: `${(poll.votes / poll.total) * 100}%` }}
                        />
                        <div className="flex justify-between items-center relative z-10">
                          <span className="font-medium text-sm">{poll.dates}</span>
                          <div className="flex items-center gap-2">
                            <span className={cn("text-xs", fontMono)}>{poll.votes}/{poll.total}</span>
                            <div className={cn("w-5 h-5 rounded-full flex items-center justify-center border", i === 0 ? "bg-blue-600 border-blue-500" : "border-white/20")}>
                              {i === 0 && <CheckCircle2 className="w-3 h-3 text-white" />}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'itinerary' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-bold">Day 1 • Oct 12</p>
                      <Badge className="bg-white/10 text-white hover:bg-white/20">Tokyo</Badge>
                    </div>
                    {[
                      { time: "14:00", title: "Check-in at Shinjuku Prince", icon: MapPin },
                      { time: "19:30", title: "Dinner at Omoide Yokocho", icon: Clock },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className={cn("text-xs text-slate-500 pt-1 shrink-0 w-12", fontMono)}>{item.time}</div>
                        <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex-1 flex items-start gap-3">
                          <item.icon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'expenses' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Total Trip Cost</p>
                        <p className={cn("text-3xl font-bold", fontMono)}>$2,450</p>
                      </div>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Settled</Badge>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Airbnb", amount: 1200, payer: "JD" },
                        { name: "Flights", amount: 850, payer: "SM" },
                        { name: "Dinner", amount: 400, payer: "AL" },
                      ].map((exp, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">{exp.payer}</div>
                            <span className="text-sm font-medium">{exp.name}</span>
                          </div>
                          <span className={cn("text-sm font-bold", fontMono)}>${exp.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Floating feature pill */}
            <div className="absolute -bottom-6 -left-6 bg-[#0A0D14] border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Split exactly</p>
                <p className={cn("text-sm font-bold", fontMono)}>$408.33 / person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE BREAK */}
      <section className="h-[40vh] md:h-[60vh] relative">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10" />
        <img 
          src="/__mockup/images/nightflight-hero.png" 
          alt="Night airport looking at glowing city" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14] via-transparent to-white z-20" />
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to <br/>plan the perfect trip.</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Stop juggling spreadsheets, group chats, and unread emails. TRYPS brings order to the chaos.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LinkIcon, title: "One-link invite", desc: "No app required for guests. Send a link via iMessage, WhatsApp, or email." },
              { icon: Calendar, title: "Group date polling", desc: "Find the overlap. Propose dates and let the group vote on what works best." },
              { icon: MapPin, title: "Shared itinerary", desc: "A collaborative timeline where anyone can add flights, stays, and reservations." },
              { icon: Wallet, title: "Split expenses", desc: "Track who paid for what. We do the math so you don't have to chase people down." },
              { icon: MessageCircle, title: "Real-time updates", desc: "Instant notifications when someone adds an activity or pays you back." },
              { icon: Globe, title: "Travel preferences", desc: "Collect dietary restrictions and accommodation preferences upfront." },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-[#0A0D14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Four steps to <br/>departure.</h2>
              <p className="text-slate-400 text-lg mb-12">Planning shouldn't be the hardest part of the trip. We streamlined the process so you can focus on the destination.</p>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
                {[
                  { step: "01", title: "Create + invite", desc: "Set up the destination and send the invite link to the group chat." },
                  { step: "02", title: "Poll for dates", desc: "Everyone votes on their availability. The best dates win automatically." },
                  { step: "03", title: "Build itinerary", desc: "Add flights, Airbnbs, and dinner reservations to the shared timeline." },
                  { step: "04", title: "Split expenses", desc: "Log costs as you go. Settle up with one tap at the end of the trip." },
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0A0D14] bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-xs font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0A0D14]">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-8 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                
                {/* Abstract UI representation */}
                <div className="flex-1 w-full bg-[#0A0D14]/80 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-2xl relative z-10 flex flex-col gap-4">
                  <div className="w-1/3 h-4 bg-slate-800 rounded-full mb-4" />
                  <div className="space-y-3">
                    <div className="w-full h-12 bg-white/5 rounded-xl flex items-center px-4 gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-500"/></div>
                      <div className="w-1/2 h-3 bg-slate-700 rounded-full" />
                    </div>
                    <div className="w-full h-12 bg-white/5 rounded-xl flex items-center px-4 gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-500"/></div>
                      <div className="w-2/3 h-3 bg-slate-700 rounded-full" />
                    </div>
                    <div className="w-full h-12 bg-white/5 rounded-xl flex items-center px-4 gap-3">
                      <div className="w-6 h-6 rounded-full border border-slate-700 border-dashed flex items-center justify-center" />
                      <div className="w-1/3 h-3 bg-slate-800 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#0A0D14]" />
                      <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0A0D14]" />
                      <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#0A0D14]" />
                    </div>
                    <Button size="sm" className="bg-white text-black rounded-full text-xs font-bold">Invite</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The difference is clear.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm">
              <div className="text-red-500 font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">✕</div>
                Without TRYPS
              </div>
              <ul className="space-y-4">
                {[
                  "Endless scrolling through group chats to find flight details",
                  "Venmo requests getting lost or ignored",
                  "Arguments over which weekend works best for everyone",
                  "One person doing 90% of the planning work",
                  "Multiple spreadsheets, notes apps, and booking emails"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <span className="text-slate-300 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* With */}
            <div className="bg-[#0A0D14] rounded-[2rem] p-8 border border-slate-800 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[50px] rounded-full" />
              <div className="text-emerald-400 font-bold mb-6 flex items-center gap-2 relative z-10">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">✓</div>
                With TRYPS
              </div>
              <ul className="space-y-4 relative z-10">
                {[
                  "All bookings and confirmation numbers in one timeline",
                  "Automatic expense splitting and precise balances",
                  "Democratic polling for dates and destinations",
                  "Collaborative planning where everyone contributes",
                  "A single app (or web link) that holds everything"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className="py-24 bg-white border-t border-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Built For Every Crew</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-3xl mx-auto">
            If your trip involves multiple people, TRYPS simplifies the process.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Bachelor Parties", "Bachelorette Trips", "Family Vacations", 
              "College Reunions", "Ski Trips", "Festival Squads", 
              "Couples Retreats", "Road Trips", "Golf Weekends"
            ].map((tag, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center">Common questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Do all my friends need to download the app?",
                a: "No! That's the best part. You can invite friends via a simple web link. They can view the itinerary, vote on dates, and add expenses right from their mobile browser without downloading anything."
              },
              {
                q: "How does expense splitting work?",
                a: "Anyone can add an expense and select who was involved (e.g., 'Dinner for everyone except Sarah'). TRYPS automatically calculates the most efficient way to settle debts at the end of the trip, minimizing the number of transactions needed."
              },
              {
                q: "Is TRYPS free to use?",
                a: "Yes, the core planning features are completely free. We offer a premium tier for large groups (15+ people) or advanced features like custom branding for your itinerary."
              },
              {
                q: "Can I export the itinerary?",
                a: "Yes, you can sync your TRYPS itinerary directly to Apple Calendar, Google Calendar, or export it as a clean PDF to print out."
              },
              {
                q: "Does it work offline?",
                a: "The native iOS and Android apps have full offline support. Your itinerary and confirmation numbers are always accessible, even when you're on a plane or out of cell service."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-200">
                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-blue-600 py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-[#0A0D14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Start planning your next trip with friends.
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Stop herding cats. Start enjoying the vacation. Join thousands of groups already using TRYPS.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-slate-200 rounded-full font-bold px-10 h-16 text-lg">
            Create your first trip <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0D14] text-slate-500 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                <Plane className="w-3 h-3 text-white" />
              </div>
              <span className="font-bold tracking-tight">TRYPS</span>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
            
            <p className="text-sm">© {new Date().getFullYear()} TRYPS Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Badge helper component for internal use */}
      {false && <Badge>Hidden</Badge>}
    </div>
  );
}

// Simple internal Badge component to avoid importing from ui/badge if it's missing
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors", className)}>
      {children}
    </span>
  );
}
