const C = "#9A0514"
const C2 = "#BE123C"
const ROSE = "#FB7185"
const BG = "#FFF9F9"
const DARK = "#1C0808"
const MID = "#6B3030"

/* ── A: Ultra Bold Wordmark (Uber DNA) ─────────────────────────── */
function WordmarkMark({ size = 52 }: { size?: number }) {
  const s = size / 52
  return (
    <svg width={size * 2.8} height={size * 0.75} viewBox="0 0 148 38" fill="none">
      <text
        x="0" y="32"
        fontSize="36"
        fontWeight="900"
        fontFamily="'Arial Black', 'Arial', system-ui"
        letterSpacing="-2"
        fill={DARK}
      >
        TRYPS
      </text>
      <circle cx="145" cy="30" r="4" fill={C} />
    </svg>
  )
}

/* ── B: Gradient Tile (Partiful DNA) ───────────────────────────── */
function GradientTileMark({ size = 52 }: { size?: number }) {
  const id = "grad-b"
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7B0310" />
          <stop offset="60%" stopColor={C} />
          <stop offset="100%" stopColor={C2} />
        </linearGradient>
        <radialGradient id="shine" cx="30%" cy="25%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="52" height="52" rx="14" fill={`url(#${id})`} />
      <rect width="52" height="52" rx="14" fill="url(#shine)" />
      <text x="26" y="35" textAnchor="middle" fontSize="26" fontWeight="900"
        fontFamily="'Arial Black', system-ui" fill="white" letterSpacing="-1">T</text>
    </svg>
  )
}

/* ── C: Three-dot Journey (minimalist) ─────────────────────────── */
function ThreeDotMark({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 52 28" fill="none">
      {/* Arc path connecting the dots */}
      <path d="M8 22 Q26 2 44 22" stroke={`${C}30`} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Three dots — crew members */}
      <circle cx="8" cy="22" r="5" fill={C} />
      <circle cx="26" cy="10" r="6.5" fill={C2} />
      <circle cx="44" cy="22" r="5" fill={C} />
    </svg>
  )
}

/* ── D: Bélo-style narrative mark (Airbnb DNA) ─────────────────── */
function BeloMark({ size = 52 }: { size?: number }) {
  return (
    <svg width={size * 0.75} height={size} viewBox="0 0 38 52" fill="none">
      <defs>
        <linearGradient id="belo-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C} />
          <stop offset="100%" stopColor={C2} />
        </linearGradient>
      </defs>
      {/* Pin body */}
      <path
        d="M19 2 C10 2 3 9 3 18 C3 30 19 50 19 50 C19 50 35 30 35 18 C35 9 28 2 19 2Z"
        fill="url(#belo-grad)"
      />
      {/* Inner white circle */}
      <circle cx="19" cy="18" r="8" fill="white" />
      {/* Three tiny dots = group */}
      <circle cx="14" cy="18" r="2" fill={C} />
      <circle cx="19" cy="14" r="2" fill={C2} />
      <circle cx="24" cy="18" r="2" fill={C} />
    </svg>
  )
}

/* ── E: Negative Space / Cut-out T ─────────────────────────────── */
function CutoutMark({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
      {/* Crimson background square */}
      <rect width="52" height="52" rx="10" fill={C} />
      {/* White T cut-out — thick crossbar, narrow stem */}
      {/* Crossbar */}
      <rect x="8" y="11" width="36" height="10" rx="3" fill="white" />
      {/* Stem */}
      <rect x="20" y="21" width="12" height="22" rx="3" fill="white" />
    </svg>
  )
}

/* ── F: Wordmark with accent line (chic/fashion) ───────────────── */
function FashionWordmark({ size = 52 }: { size?: number }) {
  return (
    <svg width={size * 3.2} height={size * 0.9} viewBox="0 0 164 46" fill="none">
      {/* Thin crimson bar above */}
      <rect x="0" y="0" width="52" height="3" rx="1.5" fill={C} />
      {/* Wordmark — slightly spaced */}
      <text
        x="0" y="38"
        fontSize="30"
        fontWeight="800"
        fontFamily="'Georgia', 'Times New Roman', serif"
        letterSpacing="6"
        fill={DARK}
      >
        TRYPS
      </text>
    </svg>
  )
}

/* ── Card ──────────────────────────────────────────────────────── */
function Card({
  tag, name, desc, mark, lockup, dark = false, wide = false
}: {
  tag: string; name: string; desc: string
  mark: React.ReactNode; lockup: React.ReactNode
  dark?: boolean; wide?: boolean
}) {
  const bg = dark ? "#180606" : "white"
  const border = dark ? "#3B1010" : "#FECDD3"
  const text = dark ? "#FFF9F9" : DARK
  const sub = dark ? "#9CA3AF" : MID
  const inner = dark ? "#2C1010" : BG

  return (
    <div
      style={{ background: bg, border: `1.5px solid ${border}`, gridColumn: wide ? "span 2" : undefined }}
      className="rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
    >
      <span style={{ color: C, background: "#FFE4E6" }}
        className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full w-fit">
        {tag}
      </span>

      <div className="flex justify-center py-3">{mark}</div>

      <div style={{ background: inner, border: `1px solid ${border}` }}
        className="flex items-center justify-center gap-4 px-5 py-3 rounded-xl min-h-[56px]">
        {lockup}
      </div>

      <div>
        <p style={{ color: text }} className="font-black text-sm mb-1">{name}</p>
        <p style={{ color: sub }} className="text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export function LogoOptions2() {
  return (
    <div style={{ background: BG }} className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p style={{ color: C }} className="text-[10px] font-black uppercase tracking-widest mb-1">Round 2 — Modern directions</p>
          <h1 style={{ color: DARK }} className="text-3xl font-black tracking-tight mb-1">Uber. Partiful. Airbnb. TRYPS.</h1>
          <p style={{ color: MID }} className="text-xs">Bold wordmarks, gradient tiles, narrative marks — chic travel energy.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

          <Card
            tag="Option A — Uber DNA"
            name="Pure Wordmark"
            desc="The brand IS the word. No icon mark — just bold type with a crimson full-stop. Confident. Clean. Let the name do the work."
            mark={<WordmarkMark />}
            lockup={<WordmarkMark />}
          />

          <Card
            tag="Option B — Partiful DNA"
            name="Gradient Tile"
            desc="Deep-to-rose crimson gradient on a rounded square. Works instantly as an app icon, favicon, and profile avatar. Very now."
            mark={<GradientTileMark size={64} />}
            lockup={
              <div className="flex items-center gap-3">
                <GradientTileMark size={36} />
                <span style={{ color: DARK, fontFamily: "'Arial Black', system-ui" }}
                  className="text-2xl font-black tracking-tight">TRYPS</span>
              </div>
            }
            dark={false}
          />

          <Card
            tag="Option C — Minimal"
            name="Three-dot Journey"
            desc="Three people, one arc, one destination. No words needed. The most abstract — highest potential for ownable brand equity."
            mark={<ThreeDotMark size={64} />}
            lockup={
              <div className="flex items-center gap-3">
                <ThreeDotMark size={40} />
                <span style={{ color: DARK, fontFamily: "'Arial Black', system-ui" }}
                  className="text-2xl font-black tracking-tight">TRYPS</span>
              </div>
            }
            dark={false}
          />

          <Card
            tag="Option D — Airbnb DNA"
            name="Narrative Pin"
            desc="A Belo-style mark that tells a story: a pin holding three people. One glance communicates group + destination. Premium travel feel."
            mark={<BeloMark size={64} />}
            lockup={
              <div className="flex items-center gap-3">
                <BeloMark size={40} />
                <span style={{ color: DARK, fontFamily: "'Arial Black', system-ui" }}
                  className="text-2xl font-black tracking-tight">TRYPS</span>
              </div>
            }
            dark={false}
          />

          <Card
            tag="Option E — App-native"
            name="Cut-out T"
            desc="A bold crimson tile with a white T carved in negative space. Crisp at 16px or 1000px. Unambiguous as an icon, memorable as a stamp."
            mark={<CutoutMark size={64} />}
            lockup={
              <div className="flex items-center gap-3">
                <CutoutMark size={36} />
                <span style={{ color: DARK, fontFamily: "'Arial Black', system-ui" }}
                  className="text-2xl font-black tracking-tight">TRYPS</span>
              </div>
            }
            dark={false}
          />

          <Card
            tag="Option F — Editorial"
            name="Fashion Wordmark"
            desc="Spaced serif letterforms with a crimson accent bar. The look of a luxury travel magazine masthead. Distinct from every SaaS brand in the category."
            mark={<FashionWordmark size={44} />}
            lockup={<FashionWordmark size={44} />}
            dark={false}
          />

        </div>
      </div>
    </div>
  )
}

export default LogoOptions2
