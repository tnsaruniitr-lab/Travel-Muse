import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Plane, Map, Calendar, DollarSign, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-primary">TRYPS</div>
          <div className="hidden md:flex gap-6 items-center text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button className="rounded-full">Get the App</Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-background/50" />
        <div className="absolute inset-0 -z-20">
          <img 
            src="/images/hero-bg.png" 
            alt="Friends on a trip" 
            className="w-full h-full object-cover opacity-20 blur-[2px]"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            The new way to plan trips
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Group trip planning app for friends
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-foreground">JOINTRYPS</span> is a group trip planning app for friends. Plan trips together, choose dates that work for everyone, build shared itineraries, and split expenses in one place.
          </p>

          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
            No setup or extra app downloads for your friends - invite your group instantly via iMessage or a simple link.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="rounded-full text-lg px-8 h-14 w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
              Start planning your trip with friends
            </Button>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full h-14 w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                Join waitlist
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full h-14 w-full sm:w-auto">
                Download app
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold">
                  {String.fromCharCode(64+i)}
                </div>
              ))}
            </div>
            Join 500+ groups already planning trips together
          </div>
        </div>
      </section>

      {/* SECTION 1 - Everything your group needs */}
      <section id="features" className="py-24 bg-card relative z-10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Everything your group needs to plan a trip together</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: "One-link invite", desc: "Invite your friends instantly via iMessage or a simple link so everyone can join the trip in seconds." },
              { icon: Calendar, title: "Group date polling", desc: "Find dates that work for everyone by collecting availability in one place." },
              { icon: Map, title: "Shared itinerary", desc: "Plan destinations, activities, and schedules together so the whole group stays aligned." },
              { icon: DollarSign, title: "Split expenses", desc: "Track shared trip costs and settle balances without switching between apps." },
              { icon: Check, title: "Real-time updates", desc: "Keep everyone in sync as plans evolve." },
              { icon: Plane, title: "Travel preferences", desc: "Understand where your group wants to go and align on destinations faster." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full px-8">Join TRYPS</Button>
          </div>
        </div>
      </section>

      {/* SECTION breaks image */}
      <section className="h-64 md:h-96 relative">
        <img 
          src="/images/section-break.png" 
          alt="Travel inspiration" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* SECTION 2 - How TRYPS helps */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">How TRYPS helps you plan trips with friends</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "Step 1", title: "Create and invite", desc: "Start a trip and invite your group in seconds via iMessage or a simple link." },
              { step: "Step 2", title: "Poll for dates", desc: "Find dates that work for everyone in the group." },
              { step: "Step 3", title: "Build the itinerary together", desc: "Create a shared trip plan where everyone can contribute ideas and plans." },
              { step: "Step 4", title: "Track and split expenses", desc: "Manage shared costs and settle balances across the group." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-secondary flex items-center justify-center border-4 border-background shadow-xl z-10 relative">
                  <span className="font-bold text-lg">{item.step}</span>
                  {i !== 3 && <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-12 bg-border hidden md:block" />}
                </div>
                <div className="flex-grow p-8 rounded-2xl bg-card border border-border">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Stop planning trips across multiple apps */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Stop planning trips across multiple apps</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-background border border-destructive/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-destructive mb-8 flex items-center gap-2">
                Without TRYPS
              </h3>
              <ul className="space-y-6">
                {[
                  "chats spread across WhatsApp or iMessage",
                  "dates discussed endlessly without resolution",
                  "plans scattered across notes and messages",
                  "expenses tracked separately in another app"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">✕</span>
                    <span className="text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-card border-2 border-primary relative overflow-hidden shadow-xl shadow-primary/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                With TRYPS
              </h3>
              <ul className="space-y-6">
                {[
                  "one shared trip plan for the entire group",
                  "built-in group date polling",
                  "shared itinerary everyone can edit",
                  "expenses tracked and settled in one place"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-foreground font-medium">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">✓</span>
                    <span className="text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5 - Plan in one place */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Plan your entire trip in one place</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-16 opacity-90">
              TRYPS brings planning, coordination, and expense tracking together so your group stays aligned from start to finish. No switching between apps. No confusion. Just one shared trip plan.
            </p>

            <div className="p-8 md:p-12 rounded-3xl bg-black/10 backdrop-blur-sm border border-white/10 text-left">
              <h3 className="text-2xl font-bold mb-6">Built for planning trips with friends</h3>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                TRYPS is designed for: friends planning vacations / bachelor or bachelorette trips / weekend getaways / group travel where everyone needs to coordinate.
              </p>
              <p className="text-lg font-medium">
                If your trip involves multiple people, TRYPS simplifies the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - App Mockup */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">See how group trip planning works in TRYPS</h2>
            <p className="text-xl text-muted-foreground">
              Plan trips, coordinate dates, and manage expenses through one shared interface your entire group can access.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img 
              src="/images/app-mockup.png" 
              alt="TRYPS App Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section id="faq" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What is TRYPS?", a: "TRYPS is a group trip planning app for friends that helps you coordinate trips, manage shared itineraries, and split expenses." },
              { q: "How is TRYPS different from using multiple apps?", a: "TRYPS brings planning, coordination, and expense tracking into one place, so you don't have to juggle WhatsApp, Google Sheets, and Splitwise." },
              { q: "Can multiple people edit a trip?", a: "Yes, TRYPS is designed for collaborative planning so everyone in the group can contribute." },
              { q: "Does TRYPS help split travel expenses?", a: "Yes, TRYPS allows groups to track and settle shared costs." },
              { q: "How do I invite friends to a trip?", a: "You can invite your friends instantly via iMessage or by sharing a simple link." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-border/50 px-2">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-primary/5" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Start planning your next trip with friends</h2>
          <Button size="lg" className="rounded-full text-lg px-10 h-16 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
            Join TRYPS
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-bold text-2xl tracking-tight text-primary">TRYPS</div>
            <div className="flex gap-6 text-background/60">
              <a href="#" className="hover:text-background transition-colors">Twitter</a>
              <a href="#" className="hover:text-background transition-colors">Instagram</a>
              <a href="#" className="hover:text-background transition-colors">Privacy</a>
              <a href="#" className="hover:text-background transition-colors">Terms</a>
            </div>
            <div className="text-background/40 text-sm">
              © {new Date().getFullYear()} TRYPS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
