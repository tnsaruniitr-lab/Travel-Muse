import { ArrowRight, Star } from "lucide-react";

export default function BlogIndex() {
  const posts = [
    {
      href: "/blog/how-to-plan-a-group-trip",
      category: "Group trip planning",
      title: "How to Plan a Group Trip: Step-by-Step Guide",
      excerpt: "Planning a group trip sounds fun until someone says \"I'm flexible\" and disappears for three days. Here's a clear system that actually works.",
      date: "April 4, 2026",
      readTime: "8 min read",
      image: "/images/blog/how-to-plan-group-trip-hero.png",
    },
    {
      href: "/blog/oahu-group-trip-itinerary",
      category: "Destination guides",
      title: "7 Days in Oahu With Friends: The Group Trip Itinerary That Actually Works",
      excerpt: "One person wants beach days, someone wants nightlife, someone wants food stops every two hours, and nobody has locked the plan. Here's how to fix that.",
      date: "April 4, 2026",
      readTime: "10 min read",
      image: "/images/blog/oahu-group-trip-hero.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#1C1208] font-sans">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#FFFBF0]/90 backdrop-blur-md border-b border-[#F5D78E]/40">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter text-[#D97706]" aria-label="TRYPS home">
            <Star className="h-7 w-7 fill-[#D97706] text-[#D97706]" />
            TRYPS
          </a>
          <div className="hidden md:flex items-center gap-7 font-medium text-[#6B5230] text-sm">
            <a href="/" className="hover:text-[#D97706] transition-colors">Home</a>
            <a href="/blog" className="text-[#D97706] font-bold">Blog</a>
            <a href="/group-trip-planning-guide" className="hover:text-[#D97706] transition-colors">Guide</a>
          </div>
          <a href="/start" className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#D97706]/20 transition-colors">
            Start planning
          </a>
        </nav>
      </header>

      <main id="main-content">

        {/* Hero banner */}
        <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FFFBF0] border-b border-[#F5D78E]/40 py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-[#D97706] text-xs font-bold uppercase tracking-widest mb-4">
              TRYPS Blog
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#1C1208] mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Group trip planning,{" "}
              <em className="text-[#D97706] not-italic">made clear</em>
            </h1>
            <p className="text-[#6B5230] text-lg leading-relaxed max-w-xl mx-auto">
              Practical guides on planning trips with friends — without the chaos.
            </p>
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-3xl mx-auto px-6 py-14 space-y-8">

          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              className="group block bg-white rounded-3xl border border-[#F5D78E]/60 overflow-hidden shadow-sm hover:shadow-md hover:border-[#D97706]/40 transition-all"
            >
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  width={1200}
                  height={525}
                />
              </div>
              <div className="p-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F5D78E] text-[#D97706] text-xs font-bold uppercase tracking-widest mb-4">
                  {post.category}
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1C1208] mb-3 leading-snug group-hover:text-[#D97706] transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {post.title}
                </h2>
                <p className="text-[#6B5230] text-base leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                    <time>{post.date}</time>
                    <span className="w-1 h-1 rounded-full bg-[#D5C4A8]" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#D97706] font-bold text-sm group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* Coming soon placeholder */}
          <div className="bg-[#FEF3C7]/50 rounded-3xl border border-[#F5D78E]/60 border-dashed p-10 text-center">
            <p className="text-[#D97706] font-bold text-sm uppercase tracking-widest mb-2">More coming soon</p>
            <p className="text-[#6B5230] text-base">New guides on group trip itineraries, budgeting, and more — dropping regularly.</p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F5D78E]/40 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF]">
          <a href="/" className="flex items-center gap-2 font-black text-base text-[#D97706]">
            <Star className="h-5 w-5 fill-[#D97706] text-[#D97706]" />
            TRYPS
          </a>
          <nav aria-label="Blog footer navigation" className="flex flex-wrap gap-5 text-xs">
            <a href="/" className="hover:text-[#D97706] transition-colors">Home</a>
            <a href="/blog" className="hover:text-[#D97706] transition-colors">Blog</a>
            <a href="/about" className="hover:text-[#D97706] transition-colors">About</a>
            <a href="/privacy" className="hover:text-[#D97706] transition-colors">Privacy</a>
          </nav>
          <p className="text-xs">© 2026 TRYPS</p>
        </div>
      </footer>

    </div>
  );
}
