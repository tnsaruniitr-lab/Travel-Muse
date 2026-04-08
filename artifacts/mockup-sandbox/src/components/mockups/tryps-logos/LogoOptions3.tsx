const C = "#9A0514"
const C2 = "#BE123C"
const ROSE = "#FB7185"
const BG = "#FFF9F9"
const DARK = "#1C0808"
const MID = "#6B3030"
const DEEP = "#0F0404"

/* ── A: The Overlap — three people, one trip ────────────────────── */
function OverlapMark({ size = 56, light = false }: { size?: number; light?: boolean }) {
  const fill = light ? "white" : C
  const fill2 = light ? "rgba(255,255,255,0.7)" : C2
  const fill3 = light ? "rgba(255,255,255,0.45)" : ROSE
  const s = size / 56
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 56 40" fill="none">
      <circle cx="14" cy="20" r="14" fill={fill} />
      <circle cx="28" cy="20" r="14" fill={fill2} />
      <circle cx="42" cy="20" r="14" fill={fill3} />
    </svg>
  )
}

/* ── B: The Gather — everyone around one destination ────────────── */
function GatherMark({ size = 56, light = false }: { size?: number; light?: boolean }) {
  const stroke = light ? "white" : C
  const dot = light ? "white" : C
  const center = light ? "rgba(255,255,255,0.9)" : C2
  const persons = [
    { cx: 28, cy: 8 },
    { cx: 46, cy: 17 },
    { cx: 42, cy: 37 },
    { cx: 14, cy: 37 },
    { cx: 10, cy: 17 },
  ]
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      {persons.map((p, i) => (
        <line key={i} x1={p.cx} y1={p.cy} x2="28" y2="28"
          stroke={stroke} strokeWidth="1.2" strokeOpacity="0.3" />
      ))}
      {persons.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="5" fill={dot}
          opacity={i === 0 ? 1 : i === 1 ? 0.85 : i === 2 ? 0.75 : i === 3 ? 0.85 : 0.65} />
      ))}
      <circle cx="28" cy="28" r="9" fill={center} />
      <circle cx="28" cy="28" r="4" fill="white" />
    </svg>
  )
}

/* ── C: The Thread — people connected by a journey ──────────────── */
function ThreadMark({ size = 56, light = false }: { size?: number; light?: boolean }) {
  const stroke = light ? "white" : C
  const dot1 = light ? "white" : C
  const dot2 = light ? "rgba(255,255,255,0.75)" : C2
  const dot3 = light ? "rgba(255,255,255,0.5)" : ROSE
  return (
    <svg width={size * 1.6} height={size * 0.7} viewBox="0 0 90 40" fill="none">
      {/* Elegant bezier thread connecting all three */}
      <path d="M18 20 Q45 4 72 20" stroke={stroke} strokeWidth="2"
        fill="none" strokeLinecap="round" strokeOpacity="0.4" />
      <path d="M18 20 Q45 36 72 20" stroke={stroke} strokeWidth="1"
        fill="none" strokeLinecap="round" strokeOpacity="0.2" />
      {/* The three people */}
      <circle cx="18" cy="20" r="12" fill={dot1} />
      <circle cx="45" cy="20" r="12" fill={dot2} />
      <circle cx="72" cy="20" r="12" fill={dot3} />
      {/* Initials */}
      <text x="18" y="25" textAnchor="middle" fontSize="11" fontWeight="800"
        fill="white" fontFamily="system-ui">A</text>
      <text x="45" y="25" textAnchor="middle" fontSize="11" fontWeight="800"
        fill="white" fontFamily="system-ui">B</text>
      <text x="72" y="25" textAnchor="middle" fontSize="11" fontWeight="800"
        fill="white" fontFamily="system-ui">C</text>
    </svg>
  )
}

/* ── D: People T — the group forms the T ───────────────────────── */
function PeopleTMark({ size = 56, light = false }: { size?: number; light?: boolean }) {
  const fill1 = light ? "rgba(255,255,255,1)" : C
  const fill2 = light ? "rgba(255,255,255,0.75)" : C2
  const fill3 = light ? "rgba(255,255,255,0.5)" : ROSE
  const stem = light ? "rgba(255,255,255,0.85)" : C
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 52 58" fill="none">
      {/* Three people form the crossbar of T */}
      <circle cx="10" cy="12" r="9" fill={fill1} />
      <circle cx="26" cy="12" r="9" fill={fill2} />
      <circle cx="42" cy="12" r="9" fill={fill3} />
      {/* Stem of T — the journey/path going down */}
      <rect x="20" y="22" width="12" height="34" rx="6" fill={stem} />
      {/* Small destination dot at the bottom */}
      <circle cx="26" cy="52" r="4" fill={light ? "rgba(255,255,255,0.6)" : ROSE} />
    </svg>
  )
}

/* ── E: Duo — Two overlapping circles (couple / duo travel) ─────── */
function WaveMark({ size = 56, light = false }: { size?: number; light?: boolean }) {
  const id = `wave-${light ? "l" : "d"}`
  return (
    <svg width={size * 1.1} height={size * 0.75} viewBox="0 0 62 42" fill="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={light ? "white" : C} />
          <stop offset="100%" stopColor={light ? "rgba(255,255,255,0.5)" : ROSE} />
        </linearGradient>
      </defs>
      {/* Flowing wave that passes through three circles (people on a journey) */}
      <path
        d="M6 21 C10 6 20 6 24 21 C28 36 38 36 42 21 C46 6 56 6 58 21"
        stroke={`url(#${id})`}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ── F: Route Mark — dots on a path (the trip itself) ──────────── */
function RouteMark({ size = 56, light = false }: { size?: number; light?: boolean }) {
  const pathColor = light ? "rgba(255,255,255,0.35)" : `${C}30`
  const dot = light ? "white" : C
  const dot2 = light ? "rgba(255,255,255,0.7)" : C2
  const dot3 = light ? "rgba(255,255,255,0.5)" : ROSE
  return (
    <svg width={size * 1.3} height={size * 0.7} viewBox="0 0 72 40" fill="none">
      {/* Curved route */}
      <path d="M10 30 Q36 2 62 30" stroke={pathColor} strokeWidth="2.5"
        strokeLinecap="round" strokeDasharray="4 3" fill="none" />
      {/* Start */}
      <circle cx="10" cy="30" r="8" fill={dot} />
      {/* Midpoint — the group gathering */}
      <circle cx="36" cy="12" r="11" fill={dot2} />
      {/* End destination */}
      <circle cx="62" cy="30" r="8" fill={dot3} />
      {/* Arrows/chevrons on path to suggest motion */}
      <path d="M30 17 L36 12 L42 17" stroke="white" strokeWidth="2"
        fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Wordmark component ─────────────────────────────────────────── */
function Wordmark({ color = DARK }: { color?: string }) {
  return (
    <span style={{ color, fontFamily: "'Arial Black', 'Arial', system-ui", fontWeight: 900, letterSpacing: "-1px", fontSize: "22px" }}>
      TRYPS
    </span>
  )
}

/* ── Card ──────────────────────────────────────────────────────── */
function Card({
  tag, name, desc, icon, dark = false,
  accentBg
}: {
  tag: string; name: string; desc: string
  icon: React.ReactNode
  dark?: boolean
  accentBg?: string
}) {
  const bg = dark ? DEEP : "white"
  const border = dark ? "#2A0A0A" : "#FECDD3"
  const text = dark ? "#F5F5F5" : DARK
  const sub = dark ? "#9CA3AF" : MID

  return (
    <div style={{ background: bg, border: `1.5px solid ${border}` }}
      className="rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
      <span style={{ color: C, background: dark ? "#2C0A0A" : "#FFE4E6" }}
        className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full w-fit">
        {tag}
      </span>

      {/* Mark large */}
      <div style={{ background: accentBg || (dark ? "#1A0505" : BG) }}
        className="flex justify-center items-center py-6 rounded-xl">
        {icon}
      </div>

      {/* Lockup */}
      <div style={{ background: dark ? "#230808" : "white", border: `1px solid ${border}` }}
        className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl">
        {React.cloneElement(icon as React.ReactElement, { size: 32, light: dark })}
        <Wordmark color={dark ? "#FFF9F9" : DARK} />
      </div>

      <div>
        <p style={{ color: text }} className="font-black text-sm mb-0.5">{name}</p>
        <p style={{ color: sub }} className="text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

import React from "react"

export function LogoOptions3() {
  return (
    <div style={{ background: BG }} className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-7">
          <p style={{ color: C }} className="text-[10px] font-black uppercase tracking-widest mb-1">Round 3 — Group travel, made visual</p>
          <h1 style={{ color: DARK }} className="text-3xl font-black tracking-tight mb-1">What does a group trip look like?</h1>
          <p style={{ color: MID }} className="text-xs">Each mark tells the same story — people, together, going somewhere.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

          <Card
            tag="A — The Overlap"
            name="Three Circles"
            desc="Three people, slightly overlapping — the intersection is the trip. Ownable, abstract, scales from favicon to billboard. Venn diagram energy."
            icon={<OverlapMark size={56} />}
            dark={false}
          />

          <Card
            tag="B — The Gather"
            name="Around a Destination"
            desc="Five friends, all connected to one central point. The warmth of a campfire circle. Every person different, every journey shared."
            icon={<GatherMark size={56} />}
            dark={false}
          />

          <Card
            tag="C — The Thread"
            name="Connected People"
            desc="Three people, A B C, tied together by an elegant arc — the journey. Bracelet-like, human, chic. Think luxury travel agency meets group chat."
            icon={<ThreadMark size={52} />}
            dark={true}
          />

          <Card
            tag="D — People T"
            name="The Group Forms the Brand"
            desc="The three people ARE the crossbar of the T. Together they make the brand. Below them: a stem, a path, and a destination dot. Very clever, very warm."
            icon={<PeopleTMark size={48} />}
            dark={false}
          />

          <Card
            tag="E — The Wave"
            name="One Fluid Journey"
            desc="A single flowing stroke — three friends, one continuous motion. Feels like a winding road, a river, or the path of a perfect trip. Fluid and modern."
            icon={<WaveMark size={52} />}
            dark={true}
            accentBg="#230808"
          />

          <Card
            tag="F — The Route"
            name="Start. Together. Arrive."
            desc="A dashed arc with three stops — departure, the group mid-journey, and destination. The trip in one glance. Clean, purposeful, travel-native."
            icon={<RouteMark size={48} />}
            dark={false}
          />

        </div>
      </div>
    </div>
  )
}

export default LogoOptions3
