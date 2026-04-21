import { Star } from "lucide-react";

function TrypsLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="100" height="100" rx="22" fill="#9A0514" />
      <path d="M28 35h44M50 35v30M38 65h24" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const body = "text-[17px] leading-[1.85] text-[#2D1A0A]";

function PhoneScreenshot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-10 flex flex-col items-center" id={src.includes("activities") ? "hero" : undefined}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#9A0514] to-[#FB7185] rounded-[3rem] opacity-15 blur-3xl pointer-events-none scale-90 translate-y-4" />
        <img
          src={src}
          alt={alt}
          width={260}
          className="relative drop-shadow-2xl max-w-[260px] w-full"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-4 text-center text-xs text-[#6B3030] italic max-w-xs">{caption}</figcaption>
    </figure>
  );
}

function InsightBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#FFE4E6]/40 rounded-xl border border-[#FECDD3] p-5 mb-10">
      <p className="text-xs font-bold uppercase tracking-widest text-[#9A0514] mb-2">{label}</p>
      <p className="text-[15px] text-[#3d1a0f] leading-relaxed">{children}</p>
    </div>
  );
}

function StepSection({ num, id, title, children }: {
  num: number; id: string; title: string; children: React.ReactNode;
}) {
  return (
    <section className="mb-12" aria-labelledby={id}>
      <div className="flex items-start gap-5 mb-5">
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#9A0514] flex flex-col items-center justify-center shadow-sm shadow-[#9A0514]/30">
          <span className="text-white/60 text-[9px] font-black uppercase tracking-widest leading-none">STEP</span>
          <span className="text-white text-2xl font-black leading-tight">{num}</span>
        </div>
        <h2
          id={id}
          className="text-2xl md:text-3xl font-bold text-[#1C0808] leading-snug pt-2"
          style={serif}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[#FECDD3]/60 py-5 last:border-0">
      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-[#1C0808] text-[17px] leading-snug">
        {q}
        <span className="shrink-0 w-7 h-7 rounded-full bg-[#FFE4E6] flex items-center justify-center text-[#9A0514] font-black text-lg group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="faq-a mt-3 text-[16px] leading-relaxed text-[#2D1A0A]">{a}</p>
    </details>
  );
}

export default function HowTrypsWorks() {
  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#1C0808] font-sans">

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#9A0514] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-bold">Skip to content</a>

      <header className="sticky top-0 z-50 bg-[#FFF9F9]/90 backdrop-blur-md border-b border-[#FECDD3]/40">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2.5 font-black text-2xl tracking-tighter text-[#9A0514]" aria-label="TRYPS home">
            <TrypsLogo size={32} />
            TRYPS
          </a>
          <div className="hidden md:flex items-center gap-7 font-medium text-[#6B3030] text-sm">
            <a href="/" className="hover:text-[#9A0514] transition-colors">Home</a>
            <a href="/blog" className="text-[#9A0514] font-bold">Blog</a>
            <a href="/group-trip-planning-guide" className="hover:text-[#9A0514] transition-colors">Guide</a>
          </div>
          <a href="/#waitlist" className="bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#9A0514]/20 transition-colors">
            Join waitlist
          </a>
        </nav>
      </header>

      <main id="main-content">
        <article className="max-w-[740px] mx-auto px-6 py-10 pb-24">

          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#6B3030]">
              <li><a href="/" className="hover:underline hover:text-[#9A0514]">Home</a></li>
              <li className="text-[#FECDD3]">/</li>
              <li><a href="/blog" className="hover:underline hover:text-[#9A0514]">Blog</a></li>
              <li className="text-[#FECDD3]">/</li>
              <li><a href="/blog/product-guides" className="hover:underline hover:text-[#9A0514]">Product guides</a></li>
              <li className="text-[#FECDD3]">/</li>
              <li className="text-[#1C0808] font-medium">How TRYPS Works</li>
            </ol>
          </nav>

          <div className="mb-4">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#9A0514] bg-[#FFE4E6] px-3 py-1 rounded-full">Product guides · How-to</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-5 text-[#1C0808]" style={serif}>
            How TRYPS Works: Plan a Group Trip From Invite to Settle-Up
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#6B3030] mb-8">
            <span>TRYPS Blog</span>
            <span className="text-[#FECDD3]">·</span>
            <time dateTime="2026-04-21">April 21, 2026</time>
            <span className="text-[#FECDD3]">·</span>
            <span>6 min read</span>
          </div>

          <blockquote className="border-l-4 border-[#9A0514] pl-5 mb-3 text-xl text-[#1C0808] leading-snug italic" style={serif}>
            Group trips fall apart in the planning, not the trip itself. TRYPS handles the planning so the trip can be the trip.
          </blockquote>
          <p className={`${body} mb-8`}>
            This is the full walkthrough — five steps, one app, no spreadsheets. From the moment you create a trip to the final expense settle-up.
          </p>

          <PhoneScreenshot
            src="/images/app/screen-activities.png"
            alt="TRYPS activities tab showing the voting block with group suggestions and thumbs-up voting"
            caption="The Activities tab — where the group votes on what makes the trip."
          />

          <div
            className="quick-answer bg-[#FFE4E6]/40 border-l-4 border-[#9A0514] rounded-xl px-6 py-5 mb-10"
            role="note"
            aria-label="Quick answer: the short version"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#9A0514] mb-3">The short version</p>
            <p className={`${body} mb-3`}>TRYPS turns a group trip into five clean steps:</p>
            <ol className="space-y-1.5 text-[15px] text-[#2D1A0A] list-decimal pl-5">
              <li>Create the trip and text your group from inside the app.</li>
              <li>Each person sets their vibe — pace, budget, food, planning depth.</li>
              <li>Add ideas to the voting block, thumbs-up the winners.</li>
              <li>Confirmed activities flow into the day-by-day itinerary.</li>
              <li>Add expenses as they happen — TRYPS splits and settles the math.</li>
            </ol>
            <p className="text-[14px] leading-relaxed text-[#6B3030] mt-4 italic">
              No friend needs to download anything. The whole flow runs from one link.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1C0808] mt-10 mb-4" style={serif}>What do you need before you start?</h2>
          <p className={`${body} mb-3`}>
            Almost nothing. You need an iPhone (TRYPS is iOS for now), a destination idea — even a rough one — and a rough date window. Setup takes about <strong>2 minutes</strong>. You don't need flights booked, accommodation chosen, or your group fully confirmed.
          </p>
          <p className={`${body} mb-10`}>
            TRYPS is built for the messy early stage of group travel where most trips quietly die. The earlier you bring it in, the more it does.
          </p>

          <StepSection num={1} id="step-1" title="Create the trip and text your group">
            <p className={`${body} mb-4`}>
              Open TRYPS, hit new trip, set a destination and a date range. Add a cover photo so the trip feels real — pulled from your camera roll or a stock library inside the app.
            </p>
            <p className={`${body} mb-4`}>
              Then tap <strong>Text Friends</strong>. TRYPS opens iMessage with a pre-filled invite and a join link. Your friends tap the link, land inside the trip, and can immediately see the destination, dates, and other guests. <strong>No app download required.</strong> No account creation. No "what's your email?" friction.
            </p>
            <p className={`${body} mb-6`}>
              This is where most group-trip apps lose half the group. TRYPS doesn't.
            </p>
            <PhoneScreenshot
              src="/images/app/screen-trip-created.png"
              alt="TRYPS trip created screen showing You're all set with a Text Friends button to invite via iMessage"
              caption="After you create a trip, the share sheet hands off to iMessage with one tap."
            />
            <InsightBox label="Why iMessage">
              Friend groups already live in group chats. Pulling them into a separate app to start coordinating is the friction point. TRYPS meets the group where it already is — then quietly takes over the planning that the chat was never going to handle anyway.
            </InsightBox>
          </StepSection>

          <StepSection num={2} id="step-2" title="Set your group's vibe">
            <p className={`${body} mb-4`}>
              Once friends join, each person answers six short prompts. The vibe questionnaire is the bit that makes everything downstream smarter.
            </p>
            <p className={`${body} mb-4`}>
              The six dimensions: how packed the days should be (<strong>Chill &amp; Slow</strong> vs. <strong>Packed Schedule</strong>), budget style (<strong>Keep it Cheap</strong> vs. <strong>Treat Ourselves</strong>), food priority (<strong>Easy Meals</strong> vs. <strong>Foodie</strong>), group dynamic (<strong>Together</strong> vs. <strong>Split Up</strong>), activity type (<strong>Relax</strong> vs. <strong>Adventure</strong>), and how much planning the group wants to do upfront.
            </p>
            <p className={`${body} mb-6`}>
              TRYPS uses the overlap — not the average — to surface activities that actually fit the group. The "Save as default" option carries your personal vibe across future trips so you only fill it out once.
            </p>
            <PhoneScreenshot
              src="/images/app/screen-vibe.png"
              alt="TRYPS vibe questionnaire showing six preference sliders for pace, budget, food, group dynamic, activity type, and planning depth"
              caption="Six prompts. Two minutes. Powers every suggestion the app makes after this."
            />
            <InsightBox label="Why this matters">
              Most group-trip arguments aren't about the trip itself — they're about <em>unspoken</em> mismatches in pace, budget, or food expectations. The vibe step takes about <strong>90 seconds per person</strong> and makes those mismatches visible early, so the group can plan around them instead of arguing about them on day three.
            </InsightBox>
          </StepSection>

          <StepSection num={3} id="step-3" title="Vote on activities together">
            <p className={`${body} mb-4`}>
              The <strong>Activities</strong> tab is where the group decides what the trip actually is. It has three zones:
            </p>
            <ul className="space-y-3 mb-6 list-none p-0">
              {[
                ["Confirmed", "Locked in. Drag activities here when the group is clearly into it. Confirmed activities flow into the itinerary automatically."],
                ["Voting Block", "Ideas under consideration. Anyone can add an activity — paste a URL, search a place, or write it manually. Each person casts a thumbs-up or thumbs-down. Votes are visible to the group."],
                ["Discover", "Vibe-matched popular activities for your destination. Tap any one to add it straight to the voting block."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3 text-[#2D1A0A]">
                  <span className="mt-[6px] w-2 h-2 rounded-full bg-[#9A0514] shrink-0" />
                  <span className="text-[17px] leading-relaxed"><strong>{label}</strong> — {desc}</span>
                </li>
              ))}
            </ul>
            <p className={`${body} mb-6`}>
              No more scrolling back through three weeks of WhatsApp messages to find that restaurant someone suggested. Every idea has its own card, its own vote count, and its own clear status.
            </p>
            <PhoneScreenshot
              src="/images/app/screen-activities.png"
              alt="TRYPS activities tab showing Confirmed section, Voting Block with activity cards and thumbs up icons, and Discover feed"
              caption="Every idea in one place. Thumbs-up shows the group what has momentum."
            />
            <InsightBox label="The voting block vs. a group chat">
              In a group chat, a suggestion gets buried in 40 other messages within hours. In the Voting Block, every idea stays visible, has a vote count, and has a clear next state — either it moves to Confirmed or it doesn't make the cut. That clarity is what makes the group actually decide instead of just talking.
            </InsightBox>
          </StepSection>

          <StepSection num={4} id="step-4" title="See the day-by-day itinerary">
            <p className={`${body} mb-4`}>
              When an activity gets dragged to Confirmed, it automatically slots into the <strong>Itinerary</strong> tab. No copy-paste, no duplicate entry.
            </p>
            <p className={`${body} mb-4`}>
              The itinerary shows a day selector across the top, a weather forecast for each day, and a 24-hour timeline underneath. Activities land in their approximate time slot. Tap any day to drag and reorder, add a new activity, or pull in a confirmed idea that hasn't been placed yet.
            </p>
            <p className={`${body} mb-6`}>
              The weather is particularly useful for last-minute swaps — if it's going to rain Thursday, you can see that on Wednesday night and reshuffle the outdoor activities to Friday without any group chat drama.
            </p>
            <PhoneScreenshot
              src="/images/app/screen-itinerary.png"
              alt="TRYPS itinerary tab showing day selector, weather forecast, and a day-by-day activity timeline"
              caption="Confirmed activities, weather, and a day-by-day timeline — all auto-built."
            />
            <InsightBox label="What itinerary apps get wrong">
              Most itinerary builders require the organizer to do all the data entry while everyone else watches. In TRYPS, the itinerary is built by the voting process — the group decided what went in, so the itinerary already reflects what the group wants. The organizer's job is to sequence, not to sell.
            </InsightBox>
          </StepSection>

          <StepSection num={5} id="step-5" title="Track expenses and settle up">
            <p className={`${body} mb-4`}>
              As the trip happens, anyone in the group can add an expense. You enter what it was, who paid, and how to split it — evenly across everyone, or only across the people involved.
            </p>
            <p className={`${body} mb-4`}>
              TRYPS keeps a running balance for each person and shows a single net number: who owes what, to whom. No per-expense tracking, no spreadsheet, no end-of-trip negotiation about who had the expensive cocktail.
            </p>
            <p className={`${body} mb-6`}>
              When the trip ends and everyone settles up, TRYPS shows <strong>All Settled</strong>. One tap, clean slate.
            </p>
            <PhoneScreenshot
              src="/images/app/screen-expenses.png"
              alt="TRYPS expenses tab showing All Settled status with individual expense entries for dinner and train tickets"
              caption="Add expenses as they happen. TRYPS does the math. Everyone settles once."
            />
            <InsightBox label="Why not just use Splitwise?">
              You can — and a lot of groups do. But switching between apps to coordinate the trip and track costs adds friction every time something happens. Having expenses in the same app as the itinerary means the context is always there: you're looking at dinner at Shibuya in the itinerary and you can log the expense without leaving TRYPS.
            </InsightBox>
          </StepSection>

          <section className="summary-box bg-[#FFE4E6]/40 rounded-2xl border border-[#FECDD3] p-7 mb-14" aria-labelledby="summary-title">
            <h2 id="summary-title" className="text-xl font-bold text-[#1C0808] mb-4" style={serif}>The full picture</h2>
            <p className={`${body} mb-4`}>
              Five steps. One shared space. No friend needs to download anything before they can participate.
            </p>
            <p className="text-[16px] text-[#2D1A0A] leading-relaxed mb-4">
              What TRYPS replaces: a group chat trying to do coordination, a separate date-poll link, a shared Google Sheet for the itinerary, and a Splitwise group for expenses. That's four separate tools that groups currently bounce between and still lose track of things.
            </p>
            <p className="text-[16px] text-[#2D1A0A] leading-relaxed">
              What TRYPS requires from the host: about two minutes to set up the trip and send one iMessage. Everything else is collaborative.
            </p>
          </section>

          <section id="faq" aria-labelledby="faq-title" className="mb-16">
            <h2 id="faq-title" className="text-2xl font-bold text-[#1C0808] mb-6" style={serif}>Common questions</h2>
            <div className="divide-y divide-[#FECDD3]/60">
              <FaqItem
                q="Do my friends need to download TRYPS to join my trip?"
                a="No. When you tap Text Friends, TRYPS sends an iMessage with a join link. Friends tap the link and land directly inside the trip — they can vote on activities, see the itinerary, and add expenses without installing the app first."
              />
              <FaqItem
                q="Is TRYPS free to use?"
                a="Yes. TRYPS is free for the host and every guest. There is no paywall on creating a trip, inviting friends, voting on activities, building an itinerary, or splitting expenses."
              />
              <FaqItem
                q="How does group voting on activities work in TRYPS?"
                a="Anyone in the trip can add an activity to the Voting Block. Each member casts a thumbs-up or thumbs-down. Vote counts are visible to the whole group, so it's clear when something has consensus. Drag a popular activity to Confirmed and it slots into the day-by-day itinerary."
              />
              <FaqItem
                q="How does TRYPS split expenses between friends?"
                a="When someone pays for something, they add the expense, choose who paid and how it splits — evenly across the group or only across the people involved. TRYPS keeps a running balance and shows All Settled when nobody owes anyone money."
              />
              <FaqItem
                q="Can I plan multiple trips at the same time?"
                a="Yes. Each trip is a separate space with its own people, activities, itinerary, and expense ledger. Switch between them from the home screen without anything overlapping."
              />
              <FaqItem
                q="What kind of trips work best with TRYPS?"
                a="Anything that involves more than two people making decisions together — weekend getaways, bachelor and bachelorette trips, ski trips, group beach vacations, multi-city adventures. The bigger the group, the more friction TRYPS removes."
              />
              <FaqItem
                q="What's the best app for planning a group trip with friends?"
                a="TRYPS combines iMessage invites, group voting, a shared itinerary with weather and timing, and built-in expense splitting in one place. That's the difference: friend groups stop bouncing between WhatsApp, Google Sheets, and Splitwise and coordinate the whole trip from a single app."
              />
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#9A0514] to-[#BE123C] rounded-3xl p-8 md:p-10 text-center text-white" aria-labelledby="cta-title">
            <h2 id="cta-title" className="text-2xl md:text-3xl font-bold mb-3" style={serif}>
              Ready to plan your group trip?
            </h2>
            <p className="text-white/85 text-base mb-6 max-w-sm mx-auto leading-relaxed">
              Join the waitlist and be first to know when TRYPS launches on the App Store.
            </p>
            <a
              href="/#waitlist"
              className="inline-block bg-white text-[#9A0514] font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:bg-[#FFF9F9] transition-colors"
            >
              Join the waitlist →
            </a>
          </section>

          <div className="mt-12 pt-8 border-t border-[#FECDD3]/40">
            <p className="text-sm text-[#6B3030] mb-4">More from the blog</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/blog/how-to-plan-a-group-trip" className="flex-1 group rounded-xl border border-[#FECDD3]/60 p-4 hover:border-[#9A0514]/40 hover:bg-[#FFE4E6]/20 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9A0514] block mb-1">Guide</span>
                <span className="text-sm font-semibold text-[#1C0808] group-hover:text-[#9A0514] transition-colors leading-snug block">How to Plan a Group Trip: Step-by-Step Guide →</span>
              </a>
              <a href="/blog/oahu-group-trip-itinerary" className="flex-1 group rounded-xl border border-[#FECDD3]/60 p-4 hover:border-[#9A0514]/40 hover:bg-[#FFE4E6]/20 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9A0514] block mb-1">Destination</span>
                <span className="text-sm font-semibold text-[#1C0808] group-hover:text-[#9A0514] transition-colors leading-snug block">7 Days in Oahu With Friends: An Itinerary That Works →</span>
              </a>
            </div>
          </div>

        </article>
      </main>

      <footer className="border-t border-[#FECDD3]/40 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="/" className="flex items-center gap-2 font-black text-lg tracking-tighter text-[#9A0514]" aria-label="TRYPS home">
            <Star className="h-5 w-5 fill-[#9A0514] text-[#9A0514]" />
            TRYPS
          </a>
          <div className="flex flex-wrap gap-5 text-sm text-[#6B3030]">
            <a href="/" className="hover:text-[#9A0514] transition-colors">Home</a>
            <a href="/blog" className="hover:text-[#9A0514] transition-colors">Blog</a>
            <a href="/privacy" className="hover:text-[#9A0514] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#9A0514] transition-colors">Terms</a>
          </div>
          <p className="text-xs text-[#9CA3AF]">© {new Date().getFullYear()} Tryps Inc.</p>
        </div>
      </footer>

    </div>
  );
}
