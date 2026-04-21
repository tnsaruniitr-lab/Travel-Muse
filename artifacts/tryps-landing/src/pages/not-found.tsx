function TrypsLogo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="nf-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A0514" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#nf-logo-grad)" />
      <rect x="8" y="10" width="16" height="3.5" rx="1.75" fill="white" />
      <rect x="13.25" y="13.5" width="5.5" height="10" rx="2.75" fill="white" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#1C0808] font-sans flex flex-col">
      <header className="border-b border-[#FECDD3]/40 bg-[#FFF9F9]">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2.5 font-black text-2xl tracking-tighter text-[#9A0514]" aria-label="TRYPS home">
            <TrypsLogo size={32} />
            TRYPS
          </a>
        </nav>
      </header>
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          <p className="text-8xl font-black text-[#9A0514]/20 mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>404</p>
          <h1 className="text-3xl font-black text-[#1C0808] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Page not found
          </h1>
          <p className="text-[#6B3030] mb-8 leading-relaxed">
            This page doesn't exist. It may have moved, been deleted, or the link could be wrong.
          </p>
          <a href="/" className="inline-block bg-[#9A0514] hover:bg-[#7B0310] text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-[#9A0514]/25 transition-colors">
            Back to home
          </a>
        </div>
      </main>
    </div>
  );
}
