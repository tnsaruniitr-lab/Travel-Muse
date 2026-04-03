import React, { useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Plane,
  Plus,
  Share,
  Sparkles,
  Sun,
  Umbrella,
  Users,
  Wallet,
  XCircle,
  Calendar,
  Clock,
  List
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function Sunshine() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#2D2424] font-sans selection:bg-[#FF6B35] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FFF9F2]/80 backdrop-blur-md border-b border-[#F7C59F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Sun className="h-8 w-8 text-[#FF6B35]" />
              <span className="font-black text-2xl tracking-tighter text-[#FF6B35]">TRYPS</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <a href="#features" className="hover:text-[#FF6B35] transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-[#FF6B35] transition-colors">How it works</a>
              <a href="#faq" className="hover:text-[#FF6B35] transition-colors">FAQ</a>
              <Button className="bg-[#FF6B35] hover:bg-[#E85D2C] text-white rounded-full px-6 shadow-md shadow-[#FF6B35]/20">
                Start planning
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6 text-[#2D2424]" />
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FFF9F2] border-b border-[#F7C59F]/30 px-4 py-6 space-y-4">
            <a href="#features" className="block font-medium hover:text-[#FF6B35]">Features</a>
            <a href="#how-it-works" className="block font-medium hover:text-[#FF6B35]">How it works</a>
            <a href="#faq" className="block font-medium hover:text-[#FF6B35]">FAQ</a>
            <Button className="w-full bg-[#FF6B35] hover:bg-[#E85D2C] text-white rounded-full">
              Start planning
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#FF9F1C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE5D9] text-[#FF6B35] font-semibold text-sm mb-8">
                <Sparkles className="h-4 w-4" />
                <span>Your group's favorite app</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-[#2D2424]">
                Group trip planning <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C]">
                  made for friends
                </span>
              </h1>
              <p className="text-xl text-[#5A4C4C] mb-8 leading-relaxed">
                JOINTRYPS helps your group plan trips together — dates that work for everyone, shared itineraries, and split expenses. All in one place.
              </p>
              
              <div className="flex items-center gap-3 mb-10 text-[#5A4C4C] font-medium bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-[#F7C59F]/30 w-fit">
                <div className="h-10 w-10 rounded-full bg-[#FFE5D9] flex items-center justify-center text-[#FF6B35]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <p>No extra app downloads. Invite friends instantly via iMessage or a link.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-[#FF6B35] hover:bg-[#E85D2C] text-white h-14 px-8 rounded-full text-lg shadow-xl shadow-[#FF6B35]/20 font-bold group">
                  Start planning your trip
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="h-14 px-8 rounded-full text-lg border-[#FF6B35] text-[#FF6B35] hover:bg-[#FFE5D9] font-bold">
                  Join waitlist
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-10 w-10 rounded-full border-2 border-[#FFF9F2] flex items-center justify-center text-xs font-bold text-white
                      ${i === 1 ? 'bg-[#FF6B35]' : i === 2 ? 'bg-[#FF9F1C]' : i === 3 ? 'bg-[#4ECDC4]' : 'bg-[#FFD166]'}`}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-[#5A4C4C]">
                  Join <strong className="text-[#2D2424]">500+ groups</strong> already planning trips together
                </p>
              </div>
            </div>

            {/* Fake App UI Card */}
            <div className="relative mx-auto w-full max-w-md perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35] to-[#FF9F1C] rounded-[2.5rem] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              
              <div className="bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-white overflow-hidden relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Status Bar */}
                <div className="h-12 bg-white flex items-center justify-between px-6 text-xs font-medium text-gray-500">
                  <span>9:41</span>
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl">Tulum 2024 🌴</h3>
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-[#FF6B35] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">A</div>
                      <div className="h-8 w-8 rounded-full bg-[#FF9F1C] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">B</div>
                      <div className="h-8 w-8 rounded-full bg-[#4ECDC4] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">C</div>
                    </div>
                  </div>
                  
                  {/* Date Poll */}
                  <div className="bg-[#FFF9F2] rounded-2xl p-4 border border-[#FFE5D9]">
                    <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#FF6B35]" />
                      Vote on dates
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between border border-[#FF6B35]">
                        <div>
                          <p className="font-medium text-sm">Oct 12 - 16</p>
                          <p className="text-xs text-gray-500">Thu to Mon</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#FF6B35]">3 votes</span>
                          <CheckCircle2 className="h-5 w-5 text-[#FF6B35]" />
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Oct 19 - 23</p>
                          <p className="text-xs text-gray-500">Thu to Mon</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-400">1 vote</span>
                          <div className="h-5 w-5 rounded-full border-2 border-gray-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="px-6 py-6 bg-gray-50/50">
                  <h4 className="font-semibold text-sm mb-4">Proposed Ideas</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm flex gap-3 items-center">
                      <div className="h-12 w-12 rounded-lg bg-[#FFE5D9] flex items-center justify-center text-[#FF6B35]">
                        <Umbrella className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Beach Club Day</p>
                        <p className="text-xs text-gray-500">Suggested by Sarah</p>
                      </div>
                      <Heart className="h-4 w-4 text-gray-300" />
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm flex gap-3 items-center">
                      <div className="h-12 w-12 rounded-lg bg-[#E6F9F8] flex items-center justify-center text-[#4ECDC4]">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Cenote Tour</p>
                        <p className="text-xs text-gray-500">Suggested by Mike</p>
                      </div>
                      <Heart className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Section (Chips) */}
      <section className="py-12 bg-white border-y border-[#F7C59F]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-[#FF6B35] tracking-widest uppercase mb-8">Perfect for every group</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["Friends Vacations", "Bachelor Parties", "Bachelorette Trips", "Weekend Getaways", "Family Reunions", "Ski Trips", "Festival Crews", "Road Trips"].map((chip) => (
              <Badge key={chip} variant="secondary" className="bg-[#FFF9F2] text-[#2D2424] hover:bg-[#FFE5D9] text-sm md:text-base py-2 px-4 rounded-full border border-[#F7C59F]/50">
                {chip}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6 text-[#2D2424]">Everything you need, nothing you don't</h2>
            <p className="text-lg text-[#5A4C4C]">We stripped away the complexity of travel planning so you can focus on the fun part: actually going on the trip.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "One-link invite", icon: Share, color: "bg-[#FF6B35]", text: "No app required. Send a link in the group chat and everyone's in." },
              { title: "Group date polling", icon: Calendar, color: "bg-[#FF9F1C]", text: "Find the elusive weekend that works for all 8 of you without 50 text messages." },
              { title: "Shared itinerary", icon: List, color: "bg-[#4ECDC4]", text: "Everyone can add ideas, vote on activities, and see the final plan." },
              { title: "Split expenses", icon: Wallet, color: "bg-[#FFD166]", text: "Track who paid for what and settle up easily at the end of the trip." },
              { title: "Real-time updates", icon: Clock, color: "bg-[#FF6B35]", text: "Flight delayed? Dinner reservation changed? Everyone gets notified instantly." },
              { title: "Travel preferences", icon: Plane, color: "bg-[#FF9F1C]", text: "Collect dietary restrictions and budget preferences upfront." },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-[#F7C59F]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`${feature.color} h-14 w-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#5A4C4C] leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFE5D9] to-transparent hidden lg:block -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">How it works</h2>
            <p className="text-lg text-[#5A4C4C]">From "we should do a trip" to actually booking it.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Create + invite", desc: "Start a trip and drop the link in your group chat." },
              { step: 2, title: "Poll for dates", desc: "Everyone votes on weekends that work for them." },
              { step: 3, title: "Build itinerary", desc: "Collaborate on where to stay and what to do." },
              { step: 4, title: "Split expenses", desc: "Track costs and settle up without the awkwardness." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-[#FFF9F2] rounded-3xl p-8 text-center h-full border border-[#F7C59F]/30 hover:border-[#FF6B35] transition-colors relative z-10">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-2xl font-black text-[#FF6B35] shadow-md mx-auto mb-6 border-4 border-[#FFF9F2] group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#5A4C4C]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="py-12 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] overflow-hidden aspect-[21/9] relative shadow-2xl">
            <img 
              src="/__mockup/images/tryps-friends.png" 
              alt="Friends enjoying a sunset dinner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8 md:p-16">
              <h2 className="text-3xl md:text-5xl font-black text-white max-w-2xl leading-tight">
                Stop talking about the trip. <br/>
                Start planning it.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-[#FFF9F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Without Tryps */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-200 shadow-sm opacity-80">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="h-8 w-8 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-500">Without TRYPS</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "75 text messages to find a date",
                  "Scattered links in a chaotic group chat",
                  "One person does all the planning work",
                  "Awkward Venmo requests weeks later",
                  "\"Wait, what time is our flight?\""
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500">
                    <span className="text-xl opacity-50 block mt-1">⨯</span>
                    <span className="text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Tryps */}
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF9F1C] rounded-[2rem] p-8 md:p-12 text-white shadow-xl transform md:-translate-y-4">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-bold text-white">With TRYPS</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Dates decided in one clean poll",
                  "All links, bookings, and ideas in one place",
                  "Everyone collaborates and gets excited",
                  "Expenses tracked and split automatically",
                  "All details available offline for everyone"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5 opacity-80" />
                    <span className="text-lg font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12 text-center">Got questions?</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Do all my friends need to download the app?", a: "Nope! That's the best part. You can send them a web link and they can vote on dates, add ideas, and see the itinerary right from their browser." },
              { q: "Is TRYPS free to use?", a: "Yes! The core group planning features are completely free. We offer a premium tier for advanced features like AI itinerary generation and unlimited trip history." },
              { q: "Can I book flights and hotels through TRYPS?", a: "Not yet. Right now we focus on the planning, deciding, and organizing part. Once you book on your favorite sites, you can drop the confirmations into TRYPS." },
              { q: "How does the expense splitting work?", a: "Anyone can log an expense during the trip (e.g., 'Dinner - $120'). You can choose if it's split equally or custom amounts. At the end, we do the math to minimize the number of transactions needed to settle up." },
              { q: "Can we use it for a trip that's already booked?", a: "Absolutely. Just skip the date polling step and jump straight into building your shared itinerary and tracking expenses." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-[#F7C59F]/50 rounded-2xl px-6 bg-[#FFF9F2] data-[state=open]:bg-[#FFE5D9] transition-colors">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#5A4C4C] text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-[#FF6B35]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#FF9F1C]/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Ready to get out of the group chat?
          </h2>
          <p className="text-2xl text-white/90 mb-12 font-medium">
            Start planning your next trip with friends today.
          </p>
          <Button className="bg-white text-[#FF6B35] hover:bg-[#FFF9F2] h-16 px-10 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform">
            Start planning now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2424] text-[#FFF9F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Sun className="h-8 w-8 text-[#FF6B35]" />
                <span className="font-black text-2xl tracking-tighter text-white">TRYPS</span>
              </div>
              <p className="text-white/60 max-w-sm mb-6">
                The fun, social, totally-stress-free way to plan group trips with your favorite people.
              </p>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B35] cursor-pointer transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Product</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Waitlist</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center md:text-left text-white/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} TRYPS Inc. All rights reserved.</p>
            <p className="flex items-center gap-1">Made with <Heart className="h-3 w-3 text-[#FF6B35] fill-[#FF6B35]" /> for friends</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
