const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

function TrypsLogo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="apps-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A0514" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#apps-logo-grad)" />
      <rect x="8" y="10" width="16" height="3.5" rx="1.75" fill="white" />
      <rect x="13.25" y="13.5" width="5.5" height="10" rx="2.75" fill="white" />
    </svg>
  );
}

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-[#1C0808] border-l-4 border-[#9A0514] pl-5 mb-4 leading-snug" style={serif}>
      {children}
    </h2>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#9A0514] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-[#999] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-[#2D1A0A] text-[17px] leading-relaxed">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const comparisonData = [
  { app: "TRYPS", dates: true, itinerary: true, expenses: true, noSignup: true, price: "Free" },
  { app: "Wanderlog", dates: false, itinerary: true, expenses: false, noSignup: false, price: "Free / $39/yr" },
  { app: "Splitwise", dates: false, itinerary: false, expenses: true, noSignup: false, price: "Free / ~$5/mo" },
  { app: "Troupe", dates: true, itinerary: true, expenses: false, noSignup: true, price: "Free" },
  { app: "SquadTrip", dates: false, itinerary: true, expenses: true, noSignup: false, price: "2–5% fee" },
];

function Tick({ v }: { v: boolean }) {
  return v
    ? <span className="text-[#9A0514] font-bold">✓</span>
    : <span className="text-[#bbb]">—</span>;
}

const faqItems = [
  {
    q: "What is the best group trip planning app for friends in 2026?",
    a: "TRYPS is the best group trip planning app for friends in 2026 because it combines date polling, a shared itinerary, and expense splitting without requiring anyone to sign up or download an app. Everyone joins via a single link or iMessage.",
  },
  {
    q: "How is TRYPS different from Wanderlog?",
    a: "TRYPS is built for group coordination — lock in dates, plan together, and track expenses, all in one link. Wanderlog focuses on itineraries and maps but requires sign-up and doesn't handle date polling or expense splitting.",
  },
  {
    q: "Does Splitwise help with trip planning or just expenses?",
    a: "Splitwise handles group expense tracking and settling up, but it doesn't offer tools for choosing dates or building a shared itinerary. You need a separate app for the planning side.",
  },
  {
    q: "Do I need to install an app or sign up to use TRYPS?",
    a: "No. TRYPS works entirely from a link or iMessage — no download or sign-up required, so even the least motivated person in your group can join instantly.",
  },
  {
    q: "Which app actually helps groups lock in dates the fastest?",
    a: "TRYPS has a built-in date poll so everyone can vote and dates get locked without the usual back-and-forth. Wanderlog and Splitwise don't offer date polling.",
  },
  {
    q: "Is there an app that combines itinerary planning and expense splitting in one?",
    a: "TRYPS does both — itinerary and real-time expense splitting, purpose-built for friend groups. With other apps you still need to bounce between tools.",
  },
  {
    q: "What group size is TRYPS best for?",
    a: "TRYPS is designed for small to medium friend groups — birthdays, reunions, bachelor trips, weekend getaways — where coordination is the biggest hurdle.",
  },
  {
    q: "Is TRYPS free?",
    a: "TRYPS is free to try and web-based — it works on any phone or laptop via link, with no installation needed.",
  },
];

export default function BestGroupTripPlanningApps() {
  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#1C0808] font-sans">

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#9A0514] text-white px-4 py-2 z-50 font-medium" href="#main-content">
        Skip to main content
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#FFF9F9]/90 backdrop-blur-md border-b border-[#FECDD3]/40">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2.5 font-black text-2xl tracking-tighter text-[#9A0514]" aria-label="TRYPS home">
            <TrypsLogo size={32} />
            TRYPS
          </a>
          <div className="hidden md:flex items-center gap-7 font-medium text-[#6B3030] text-sm">
            <a href="/" className="hover:text-[#9A0514] transition-colors">Home</a>
            <a href="/blog" className="hover:text-[#9A0514] transition-colors">Blog</a>
            <a href="/blog/how-to-plan-a-group-trip" className="hover:text-[#9A0514] transition-colors">Guide</a>
          </div>
          <a href="/start" className="bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#9A0514]/20 transition-colors">
            Start planning
          </a>
        </nav>
      </header>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-10">

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-[#6B3030] flex-wrap">
            <li><a href="/" className="hover:text-[#9A0514] transition-colors">Home</a></li>
            <li aria-hidden="true" className="text-[#FECDD3]">›</li>
            <li><a href="/blog" className="hover:text-[#9A0514] transition-colors">Blog</a></li>
            <li aria-hidden="true" className="text-[#FECDD3]">›</li>
            <li className="text-[#1C0808] font-medium" aria-current="page">Best Group Trip Planning Apps (2026)</li>
          </ol>
        </nav>

        {/* HEADER */}
        <article>
          <header className="mb-8">
            <span className="text-xs bg-[#FFE4E6] border border-[#FECDD3] text-[#6B3030] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
              Travel Planning
            </span>
            <h1 className="mt-4 mb-3 text-4xl sm:text-5xl font-black text-[#1C0808] leading-tight" style={serif}>
              Best Group Trip Planning App for Friends (2026 Comparison)
            </h1>
            <p className="text-[#6B3030] text-sm mb-5">
              By Jake Stein · April 21, 2026 · 6 min read
            </p>
            <p className="text-[18px] text-[#3D1A1A] leading-relaxed border-l-4 border-[#9A0514] pl-5 mb-8">
              Compare top group trip planning apps for friends in 2026. Direct review of TRYPS vs Splitwise, Wanderlog, Troupe, and SquadTrip — and which one actually gets your group moving.
            </p>
          </header>

          <main id="main-content">

            {/* QUICK ANSWER */}
            <section className="quick-answer mb-8 bg-[#FFE4E6]/40 border border-[#FECDD3] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#9A0514] mb-3 uppercase tracking-wider" style={serif}>Quick answer</h2>
              <ul className="space-y-2">
                {[
                  "TRYPS is the best group trip planning app for friends in 2026 — date polling, shared itinerary, and expense splitting, all without sign-ups or downloads.",
                  "Wanderlog is strong for map-based itinerary collaboration but requires sign-up and doesn't handle date votes or shared expenses.",
                  "Splitwise is the go-to for splitting costs but won't help with dates or building your plan.",
                  "Troupe offers date voting and a shared plan but no expense tracking.",
                  "SquadTrip handles payments and bookings but is app-heavy and charges booking fees.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#2D1A0A] text-[16px] leading-relaxed">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* INTRO */}
            <section id="intro" className="mb-8">
              <p className="text-[17px] leading-[1.85] text-[#2D1A0A]">
                The best group trip planning app for friends in 2026 is <strong>TRYPS</strong>. It gives you one place to lock down dates, organise the plan, and split expenses — no sign-ups or downloads required. If you're tired of juggling polls, spreadsheets, and side chats, TRYPS stops the trip from dying in your group chat and gets everyone actually moving.
              </p>
            </section>

            {/* KEY TAKEAWAYS */}
            <section id="key-takeaways" className="mb-10">
              <SectionHeading>Key takeaways</SectionHeading>
              <BulletList items={[
                "Group trip planning fails when dates, plans, and money get scattered across different tools.",
                "TRYPS is the only all-in-one option with integrated date poll, itinerary, expenses, and instant join — no setup or app installs.",
                "Wanderlog and Splitwise are solid at what they do, but don't solve participation or coordination end-to-end.",
              ]} />
            </section>

            {/* WHY IS IT HARD */}
            <section id="why-hard" className="mb-10 pt-6 border-t border-[#FECDD3]/40">
              <SectionHeading>Why is group trip planning so hard?</SectionHeading>
              <p className="text-[17px] leading-[1.85] text-[#2D1A0A] mb-4">
                Getting a group of friends on the same page isn't about picking the perfect Airbnb. The real blockers are choosing dates everyone can do, making a plan people will follow, and settling who owes what — ideally without 27 back-and-forths. Most tools only fix one piece of this and just move the pain to another app.
              </p>
              <BulletList items={[
                "Dates get lost in endless polls.",
                "Itineraries sprawl across group chats and shared docs.",
                "Money conversations get awkward quickly.",
                "Participation fades when tools are slow or require an account.",
              ]} />
            </section>

            {/* WHAT FEATURES MATTER */}
            <section id="features" className="mb-10 pt-6 border-t border-[#FECDD3]/40">
              <SectionHeading>What features matter most in a trip planner for friends?</SectionHeading>
              <p className="text-[17px] leading-[1.85] text-[#2D1A0A] mb-4">
                The real test for a group trip planning app is: does it get everyone in? Does it get the decision made fast? Can everyone see the plan, not just the organiser? Apps built for business travel or solo travellers usually miss at least one of these.
              </p>
              <BulletList items={[
                "Date polls — quick voting, not endless scheduling links",
                "Shared itinerary builder — editable by the whole group, not buried in chat",
                "Expense splitting — integrated so nothing falls through the cracks",
                "No-download, no-sign-up invite — so your friends actually join",
                "All-in-one flow — so you don't need three tabs open for one trip",
              ]} />
            </section>

            {/* TRYPS SECTION */}
            <section id="tryps" className="mb-10 pt-6 border-t border-[#FECDD3]/40">
              <SectionHeading>TRYPS: All-in-one group trip planning (no app required)</SectionHeading>
              <p className="text-[17px] leading-[1.85] text-[#2D1A0A] mb-4">
                TRYPS helps friends plan trips together — pick dates, build your shared plan, split costs — without anyone needing to download an app or make an account. The invite is a single link (or iMessage). Your group joins instantly and can start planning in under a minute.
              </p>
              <BulletList items={[
                "Works for birthdays, bachelor trips, reunions, weekend getaways.",
                "Date polling is the first step — one poll, decision made.",
                "Shared itinerary, editable by the whole group.",
                "Integrated expense splitting with itemised details, not vague totals.",
                "No downloads or sign-ups required — works on any device.",
                "One link, everything included.",
              ]} />
            </section>

            {/* COMPARISON TABLE */}
            <section id="comparison" className="mb-10 pt-6 border-t border-[#FECDD3]/40">
              <SectionHeading>TRYPS vs Wanderlog vs Splitwise vs Troupe vs SquadTrip</SectionHeading>
              <p className="text-[17px] leading-[1.85] text-[#2D1A0A] mb-5">
                Here's where most group trip planners fall short. The fastest way to see which covers all angles:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-[#FECDD3] shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#FFE4E6]/50 border-b border-[#FECDD3]">
                      <th className="text-left px-4 py-3 font-bold text-[#1C0808]">App</th>
                      <th className="text-center px-3 py-3 font-bold text-[#1C0808]">Date poll</th>
                      <th className="text-center px-3 py-3 font-bold text-[#1C0808]">Itinerary</th>
                      <th className="text-center px-3 py-3 font-bold text-[#1C0808]">Expenses</th>
                      <th className="text-center px-3 py-3 font-bold text-[#1C0808]">No sign-up</th>
                      <th className="text-left px-3 py-3 font-bold text-[#1C0808]">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={row.app} className={i < comparisonData.length - 1 ? "border-b border-[#FECDD3]/50" : ""}>
                        <td className="px-4 py-3 font-semibold text-[#1C0808]">
                          {row.app === "TRYPS" ? <span className="text-[#9A0514] font-bold">{row.app} ★</span> : row.app}
                        </td>
                        <td className="px-3 py-3 text-center text-base"><Tick v={row.dates} /></td>
                        <td className="px-3 py-3 text-center text-base"><Tick v={row.itinerary} /></td>
                        <td className="px-3 py-3 text-center text-base"><Tick v={row.expenses} /></td>
                        <td className="px-3 py-3 text-center text-base"><Tick v={row.noSignup} /></td>
                        <td className="px-3 py-3 text-[#6B3030]">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#6B3030] mt-3">★ TRYPS is the only app that covers all four for friend groups — with no sign-up required.</p>
            </section>

            {/* APP-BY-APP */}
            <section id="app-breakdown" className="mb-10 pt-6 border-t border-[#FECDD3]/40">
              <SectionHeading>What each app does well — and where it stops</SectionHeading>
              <div className="space-y-6 mt-4">
                {[
                  {
                    name: "Wanderlog",
                    pro: "Excellent for collaborative itinerary building and route mapping.",
                    con: "Everyone needs to sign up. No date polling. No expense tracking.",
                  },
                  {
                    name: "Splitwise",
                    pro: "Top-tier for shared expense tracking and settling up.",
                    con: "No itinerary builder. No date polling. Purely financial.",
                  },
                  {
                    name: "Troupe",
                    pro: "Group date voting and shared plan, no account required.",
                    con: "No integrated expense splitting. Less polished for larger groups.",
                  },
                  {
                    name: "SquadTrip",
                    pro: "Useful for booking and payment processing as a group.",
                    con: "App-heavy, 2–5% booking fee, not designed around casual friend trips.",
                  },
                ].map(({ name, pro, con }) => (
                  <div key={name} className="border border-[#FECDD3] rounded-xl p-5 bg-white/50">
                    <h3 className="font-bold text-[#1C0808] text-[17px] mb-2" style={serif}>{name}</h3>
                    <div className="flex items-start gap-2 mb-1">
                      <CheckIcon />
                      <span className="text-[15px] text-[#2D1A0A]">{pro}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XIcon />
                      <span className="text-[15px] text-[#6B3030]">{con}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SUMMARY */}
            <section className="summary-box mb-10 bg-[#FFE4E6]/40 border border-[#FECDD3] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[#9A0514] mb-3 uppercase tracking-wider" style={serif}>Summary</h2>
              <ul className="space-y-2">
                {[
                  "Most group trip planning tools either nail expenses or itinerary — not both.",
                  "TRYPS covers every group trip pain point: dates, plan, costs — and makes it easy for friends to join instantly.",
                  "No other app in 2026 offers date polling, a shared itinerary, and expense splitting with zero download or sign-up friction.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#2D1A0A] text-[16px] leading-relaxed">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-10 pt-6 border-t border-[#FECDD3]/40">
              <SectionHeading id="faq-title">Frequently asked questions</SectionHeading>
              <div className="space-y-0 divide-y divide-[#FECDD3]/50">
                {faqItems.map(({ q, a }) => (
                  <div key={q} className="py-5">
                    <h3 className="font-bold text-[#1C0808] text-[17px] mb-2" style={serif}>{q}</h3>
                    <p className="faq-a text-[#2D1A0A] text-[16px] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section id="conclusion" className="mb-10 pt-6 border-t border-[#FECDD3]/40">
              <SectionHeading>Conclusion</SectionHeading>
              <p className="text-[17px] leading-[1.85] text-[#2D1A0A]">
                If you're done with trips dying in your group chat, TRYPS will get everyone in, decide dates, build the plan, and settle group expenses — before the energy runs out. Other apps solve part of the friction. TRYPS moves your group from "one day, maybe" to an actual plan, quickly and with less drama.
              </p>
            </section>

            {/* CTA */}
            <section id="cta" className="mb-10 bg-gradient-to-br from-[#9A0514] to-[#7B0310] text-white rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-black mb-2" style={serif}>Send one link. Get your group moving.</h2>
              <p className="text-[#FFE4E6] mb-6 text-[16px]">Dates, plan, and expenses — finally, everyone actually joins in.</p>
              <a href="/start" className="inline-block bg-white text-[#9A0514] font-bold px-8 py-3.5 rounded-full shadow-lg transition-opacity hover:opacity-90">
                Start planning free
              </a>
            </section>

            {/* REFERENCES */}
            <section id="references" className="mb-10 pt-6 border-t border-[#FECDD3]/40">
              <h2 className="text-sm font-bold text-[#6B3030] uppercase tracking-wider mb-4">References</h2>
              <ol className="space-y-1 text-sm text-[#6B3030]">
                <li id="source-tryps"><a href="https://trypsagent.com" className="underline hover:text-[#9A0514]">TRYPS — Group Trip Planning App</a></li>
                <li id="source-wanderlog"><a href="https://wanderlog.com" className="underline hover:text-[#9A0514]">Wanderlog Trip Planner</a></li>
                <li id="source-splitwise"><a href="https://splitwise.com" className="underline hover:text-[#9A0514]">Splitwise Expense Splitting</a></li>
                <li id="source-troupe"><a href="https://troupe.com" className="underline hover:text-[#9A0514]">Troupe Group Trip Planning</a></li>
                <li id="source-squadtrip"><a href="https://squadtrip.com" className="underline hover:text-[#9A0514]">SquadTrip Group Travel</a></li>
              </ol>
            </section>

            {/* RELATED */}
            <section id="related-articles" className="pt-6 border-t border-[#FECDD3]/40">
              <h2 className="text-lg font-bold text-[#1C0808] mb-4" style={serif}>Related articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/blog/how-to-plan-a-group-trip",
                    title: "How to Plan a Group Trip: Step-by-Step Guide",
                    desc: "The clear system that actually gets your group from idea to booked trip.",
                  },
                  {
                    href: "/blog/nashville-bachelorette-trip",
                    title: "Group Bachelorette Trip to Nashville",
                    desc: "What to pre-book, real 2026 costs, and a day-by-day itinerary.",
                  },
                  {
                    href: "/blog/oahu-group-trip-itinerary",
                    title: "7-Day Oahu Group Trip Itinerary",
                    desc: "Real restaurants, beaches, and what to book before you land.",
                  },
                  {
                    href: "/blog/how-tryps-works",
                    title: "How TRYPS Works",
                    desc: "From invite to settle-up — the full walkthrough in five steps.",
                  },
                ].map(({ href, title, desc }) => (
                  <a key={href} href={href} className="block border border-[#FECDD3] rounded-xl p-4 bg-white/50 hover:border-[#9A0514]/40 transition-colors group">
                    <h3 className="font-bold text-[#1C0808] text-[15px] mb-1 group-hover:text-[#9A0514] transition-colors" style={serif}>{title}</h3>
                    <p className="text-[13px] text-[#6B3030] leading-relaxed">{desc}</p>
                  </a>
                ))}
              </div>
            </section>

          </main>
        </article>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#FECDD3]/40 bg-[#FFF9F9] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <a href="/" className="flex items-center gap-2 font-black text-xl tracking-tighter text-[#9A0514] mb-2" aria-label="TRYPS home">
                <TrypsLogo size={24} />
                TRYPS
              </a>
              <p className="text-sm text-[#6B3030] max-w-xs">Plan group trips together — dates, itinerary, and expenses. One link, no chaos.</p>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6B3030]">
              <a href="/blog" className="hover:text-[#9A0514] transition-colors">Blog</a>
              <a href="/blog/how-to-plan-a-group-trip" className="hover:text-[#9A0514] transition-colors">Guide</a>
              <a href="/privacy" className="hover:text-[#9A0514] transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-[#9A0514] transition-colors">Terms</a>
              <a href="mailto:support@trypsagent.com" className="hover:text-[#9A0514] transition-colors">Contact</a>
            </nav>
          </div>
          <p className="text-xs text-[#6B3030]/60 mt-8">© {new Date().getFullYear()} TRYPS. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
