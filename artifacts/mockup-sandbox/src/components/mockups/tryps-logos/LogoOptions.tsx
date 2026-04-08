const C = "#9A0514"
const C2 = "#BE123C"
const BG = "#FFF9F9"
const DARK = "#1C0808"

/* ── 1. Compass Rose ── */
function CompassMark({ size = 48 }: { size?: number }) {
  const r = size / 2
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" stroke={C} strokeWidth="2" />
      <circle cx="24" cy="24" r="4" fill={C} />
      {/* N needle - crimson */}
      <polygon points="24,5 21,24 27,24" fill={C} />
      {/* S needle - light */}
      <polygon points="24,43 21,24 27,24" fill={`${C}40`} />
      {/* E needle */}
      <polygon points="43,24 24,21 24,27" fill={`${C}70`} />
      {/* W needle */}
      <polygon points="5,24 24,21 24,27" fill={`${C}70`} />
      <text x="24" y="15" textAnchor="middle" fontSize="6" fontWeight="800" fill="white" fontFamily="system-ui">N</text>
    </svg>
  )
}

/* ── 2. Shield / Agent Badge ── */
function ShieldMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 3 L42 10 L42 26 C42 35 34 42 24 46 C14 42 6 35 6 26 L6 10 Z" fill={C} />
      <path d="M24 7 L38 13 L38 26 C38 33 32 39 24 43 C16 39 10 33 10 26 L10 13 Z" fill={C2} />
      <text x="24" y="31" textAnchor="middle" fontSize="18" fontWeight="900" fill="white" fontFamily="system-ui" letterSpacing="-1">T</text>
    </svg>
  )
}

/* ── 3. Passport Stamp / Seal ── */
function StampMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="none" stroke={C} strokeWidth="2.5" strokeDasharray="4 2" />
      <circle cx="24" cy="24" r="17" fill={C} />
      <circle cx="24" cy="24" r="14" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
      <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="900" fill="white" fontFamily="system-ui" letterSpacing="2">TR</text>
    </svg>
  )
}

/* ── 4. Map Pin + Group ── */
function PinMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Pin shape */}
      <path d="M24 4 C16 4 10 10 10 18 C10 28 24 44 24 44 C24 44 38 28 38 18 C38 10 32 4 24 4Z" fill={C} />
      {/* Inner circle */}
      <circle cx="24" cy="18" r="7" fill="white" />
      {/* Three dots inside representing group */}
      <circle cx="18" cy="18" r="2" fill={C} />
      <circle cx="24" cy="18" r="2" fill={C2} />
      <circle cx="30" cy="18" r="2" fill={C} />
    </svg>
  )
}

/* ── 5. Plane Trail ── */
function PlaneMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Rounded square bg */}
      <rect width="48" height="48" rx="12" fill={C} />
      {/* Plane body */}
      <path d="M10 32 L22 20 L38 16 L34 32 L28 28 L24 36 L20 28 Z" fill="white" />
      {/* Wing detail */}
      <path d="M22 20 L34 32" stroke={C2} strokeWidth="1.5" />
      {/* Dotted trail */}
      <circle cx="8" cy="38" r="1.5" fill="white" opacity="0.5" />
      <circle cx="13" cy="38" r="1.5" fill="white" opacity="0.4" />
      <circle cx="18" cy="38" r="1.5" fill="white" opacity="0.3" />
    </svg>
  )
}

/* ── Option Card ── */
function LogoCard({
  name,
  tag,
  mark,
  desc,
  dark = false,
}: {
  name: string
  tag: string
  mark: React.ReactNode
  desc: string
  dark?: boolean
}) {
  const bg = dark ? DARK : "white"
  const text = dark ? "#FFF9F9" : DARK
  const sub = dark ? "#9CA3AF" : "#6B3030"
  const border = dark ? "#3B1A1A" : "#FECDD3"

  return (
    <div
      style={{ background: bg, border: `1.5px solid ${border}` }}
      className="rounded-2xl p-6 flex flex-col gap-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span style={{ color: C, background: "#FFE4E6" }} className="text-xs font-black uppercase tracking-widest px-2 py-1 rounded-full">
          {tag}
        </span>
      </div>

      {/* Large mark */}
      <div className="flex justify-center py-2">{mark}</div>

      {/* Horizontal lockup */}
      <div
        style={{ background: dark ? "#2C1010" : BG, border: `1px solid ${border}` }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl"
      >
        <div className="shrink-0">{mark}</div>
        <span style={{ color: dark ? "#FFF9F9" : DARK, fontFamily: "system-ui" }} className="text-2xl font-black tracking-tighter">
          TRYPS
        </span>
      </div>

      <div>
        <p style={{ color: text }} className="font-black text-base mb-1">{name}</p>
        <p style={{ color: sub }} className="text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export function LogoOptions() {
  const options = [
    {
      name: "Compass",
      tag: "Option A",
      mark: <CompassMark size={52} />,
      desc: "Navigation meets planning. The N-needle in crimson signals direction — an agent always knows the way.",
      dark: false,
    },
    {
      name: "Shield",
      tag: "Option B",
      mark: <ShieldMark size={52} />,
      desc: "Agent credential energy. The shield signals trust and authority — a T monogram that says: we handle this.",
      dark: false,
    },
    {
      name: "Stamp",
      tag: "Option C",
      mark: <StampMark size={52} />,
      desc: "Passport stamp vibes. Circular, official, travel-native. The dashed ring reinforces the agent-approval feel.",
      dark: true,
    },
    {
      name: "Group Pin",
      tag: "Option D",
      mark: <PinMark size={52} />,
      desc: "Three dots inside a map pin — three friends, one destination. Emphasises the group-first identity.",
      dark: false,
    },
    {
      name: "Plane Trail",
      tag: "Option E",
      mark: <PlaneMark size={52} />,
      desc: "A plane mark on a crimson tile. Clean, bold, app-icon ready. The dotted trail suggests the journey ahead.",
      dark: false,
    },
  ]

  return (
    <div style={{ background: BG }} className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p style={{ color: C }} className="text-xs font-black uppercase tracking-widest mb-2">Logo exploration</p>
          <h1 style={{ color: DARK }} className="text-3xl font-black tracking-tight mb-1">TRYPS — Agent theme</h1>
          <p style={{ color: "#6B3030" }} className="text-sm">Five directions. Each shows the mark at icon scale and as a horizontal wordmark lockup.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {options.slice(0, 3).map((o) => (
            <LogoCard key={o.tag} {...o} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 max-w-2xl">
          {options.slice(3).map((o) => (
            <LogoCard key={o.tag} {...o} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoOptions
