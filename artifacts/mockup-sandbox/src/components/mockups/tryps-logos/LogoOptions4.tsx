import React from "react"

const C = "#9A0514"
const C2 = "#BE123C"
const ROSE = "#FB7185"
const BG = "#FFF9F9"
const DARK = "#1C0808"
const MID = "#6B3030"
const DEEP = "#0F0404"

/* ══════════════════════════════════════════════════════════
   PEOPLE T VARIANTS
══════════════════════════════════════════════════════════ */

/* T1 — Clean & Balanced (original refined) */
function PeopleTv1({ size = 64 }: { size?: number }) {
  const u = size / 64
  return (
    <svg width={size * 0.85} height={size * 1.1} viewBox="0 0 54 74" fill="none">
      <defs>
        <linearGradient id="t1g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C} />
          <stop offset="50%" stopColor={C2} />
          <stop offset="100%" stopColor={ROSE} />
        </linearGradient>
      </defs>
      {/* Three equal circles — the group */}
      <circle cx="11" cy="11" r="10" fill={C} />
      <circle cx="27" cy="11" r="10" fill={C2} />
      <circle cx="43" cy="11" r="10" fill={ROSE} />
      {/* Stem */}
      <rect x="21" y="22" width="12" height="42" rx="6" fill="url(#t1g)" />
      {/* Destination pip */}
      <circle cx="27" cy="70" r="4" fill={ROSE} opacity="0.6" />
    </svg>
  )
}

/* T2 — Group Photo Heights (friends of different sizes) */
function PeopleTv2({ size = 64 }: { size?: number }) {
  return (
    <svg width={size * 0.85} height={size * 1.15} viewBox="0 0 54 76" fill="none">
      {/* Left friend — slightly shorter */}
      <circle cx="11" cy="14" r="9" fill={C} opacity="0.7" />
      {/* Centre friend — tallest, the organiser */}
      <circle cx="27" cy="10" r="12" fill={C} />
      {/* Right friend — slightly shorter */}
      <circle cx="43" cy="14" r="9" fill={C2} opacity="0.85" />
      {/* Connecting bar — like the crossbar of T */}
      <rect x="2" y="24" width="50" height="5" rx="2.5" fill={C} opacity="0.15" />
      {/* Stem — the journey */}
      <rect x="21" y="28" width="12" height="44" rx="6" fill={C} />
      {/* Destination */}
      <circle cx="27" cy="74" r="3.5" fill={C2} />
    </svg>
  )
}

/* T3 — Dark tile, glow effect, premium feel */
function PeopleTv3({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ROSE} stopOpacity="0.5" />
          <stop offset="100%" stopColor={ROSE} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C2} stopOpacity="0.6" />
          <stop offset="100%" stopColor={C2} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C} stopOpacity="0.7" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Glows behind each dot */}
      <ellipse cx="11" cy="12" rx="14" ry="14" fill="url(#glow3)" />
      <ellipse cx="32" cy="12" rx="14" ry="14" fill="url(#glow2)" />
      <ellipse cx="53" cy="12" rx="14" ry="14" fill="url(#glow1)" />
      {/* People */}
      <circle cx="11" cy="12" r="8" fill={C} />
      <circle cx="32" cy="12" r="8" fill={C2} />
      <circle cx="53" cy="12" r="8" fill={ROSE} />
      {/* Stem */}
      <rect x="26" y="21" width="12" height="36" rx="6" fill="white" opacity="0.9" />
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════
   WORDMARK PLAY VARIANTS
══════════════════════════════════════════════════════════ */

/* W1 — T in TRYPS wears the people as its crossbar */
function WordmarkPeopleT({ dark = false }: { dark?: boolean }) {
  const textFill = dark ? "white" : DARK
  const dotA = dark ? "white" : C
  const dotB = dark ? "rgba(255,255,255,0.75)" : C2
  const dotC = dark ? "rgba(255,255,255,0.5)" : ROSE
  return (
    <svg width="220" height="72" viewBox="0 0 220 72" fill="none">
      {/* Three people sit ON the crossbar of T */}
      <circle cx="14" cy="12" r="9" fill={dotA} />
      <circle cx="28" cy="12" r="9" fill={dotB} />
      <circle cx="42" cy="12" r="9" fill={dotC} />
      {/* T crossbar — connects all three */}
      <rect x="2" y="22" width="52" height="7" rx="3.5" fill={dark ? "rgba(255,255,255,0.2)" : `${C}18`} />
      {/* T stem */}
      <rect x="22" y="29" width="12" height="34" rx="4" fill={dark ? "white" : DARK} />
      {/* RYPS — rest of wordmark */}
      <text x="62" y="58" fontSize="38" fontWeight="900"
        fontFamily="'Arial Black', 'Arial', system-ui"
        letterSpacing="-2" fill={textFill}>RYPS</text>
    </svg>
  )
}

/* W2 — 5 people dots float above T R Y P S */
function WordmarkFriendRow({ dark = false }: { dark?: boolean }) {
  const textFill = dark ? "white" : DARK
  const letters = ["T", "R", "Y", "P", "S"]
  const positions = [7, 47, 83, 118, 154]
  const dotColors = [C, C2, ROSE, C2, C]
  return (
    <svg width="185" height="76" viewBox="0 0 185 76" fill="none">
      {/* Person dot above each letter */}
      {positions.map((x, i) => (
        <circle key={i} cx={x + 15} cy="10" r="7" fill={dotColors[i]}
          opacity={i === 2 ? 1 : i === 0 || i === 4 ? 0.6 : 0.8} />
      ))}
      {/* Thin line connecting the dots */}
      <path d="M22 10 L62 10 L98 10 L133 10 L169 10"
        stroke={dark ? "rgba(255,255,255,0.2)" : `${C}25`}
        strokeWidth="1.5" strokeLinecap="round" />
      {/* Wordmark */}
      <text x="0" y="68" fontSize="36" fontWeight="900"
        fontFamily="'Arial Black', 'Arial', system-ui"
        letterSpacing="-1.5" fill={textFill}>TRYPS</text>
    </svg>
  )
}

/* W3 — Letters at different heights like a group photo */
function WordmarkGroupPhoto({ dark = false }: { dark?: boolean }) {
  const textFill = dark ? "white" : DARK
  // Y is the tallest, friends at different heights
  const letters = [
    { l: "T", x: 0,   y: 58, size: 36 },
    { l: "R", x: 36,  y: 64, size: 32 },
    { l: "Y", x: 68,  y: 52, size: 42 }, // tallest — the star of the group
    { l: "P", x: 108, y: 64, size: 32 },
    { l: "S", x: 140, y: 58, size: 36 },
  ]
  return (
    <svg width="180" height="76" viewBox="0 0 180 76" fill="none">
      {/* Subtle ground line */}
      <line x1="0" y1="70" x2="178" y2="70"
        stroke={dark ? "rgba(255,255,255,0.15)" : `${C}20`} strokeWidth="1.5" />
      {letters.map((lt, i) => (
        <text key={i} x={lt.x} y={lt.y} fontSize={lt.size} fontWeight="900"
          fontFamily="'Arial Black', 'Arial', system-ui"
          fill={i === 2 ? C : textFill}
          letterSpacing="-1">
          {lt.l}
        </text>
      ))}
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════
   CARD COMPONENTS
══════════════════════════════════════════════════════════ */

function TCard({
  tag, name, desc, mark, lockup, dark = false, tileBg
}: {
  tag: string; name: string; desc: string
  mark: React.ReactNode
  lockup?: React.ReactNode
  dark?: boolean
  tileBg?: string
}) {
  const bg = dark ? DEEP : "white"
  const border = dark ? "#2A0808" : "#FECDD3"
  const text = dark ? "#F5F5F5" : DARK
  const sub = dark ? "#9CA3AF" : MID

  return (
    <div style={{ background: bg, border: `1.5px solid ${border}` }}
      className="rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
      <span style={{ color: C, background: dark ? "#2C0A0A" : "#FFE4E6" }}
        className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full w-fit">
        {tag}
      </span>
      <div style={{ background: tileBg || (dark ? "#180404" : BG) }}
        className="flex justify-center items-center py-6 rounded-xl min-h-[120px]">
        {mark}
      </div>
      {lockup && (
        <div style={{ background: dark ? "#1E0606" : "white", border: `1px solid ${border}` }}
          className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl">
          {lockup}
        </div>
      )}
      <div>
        <p style={{ color: text }} className="font-black text-sm mb-0.5">{name}</p>
        <p style={{ color: sub }} className="text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════ */

export function LogoOptions4() {
  return (
    <div style={{ background: BG }} className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* ─ Section 1: People T variants ─ */}
        <div>
          <p style={{ color: C }} className="text-[10px] font-black uppercase tracking-widest mb-1">People T — three variants</p>
          <h2 style={{ color: DARK }} className="text-2xl font-black tracking-tight mb-1">Refining the concept you liked</h2>
          <p style={{ color: MID }} className="text-xs mb-5">Same idea, three different moods — balanced, human, premium.</p>

          <div className="grid grid-cols-3 gap-5">
            <TCard
              tag="T1 — Balanced"
              name="Equal Friends"
              desc="Three equal circles graduating crimson to rose. The team is the brand — no one bigger than anyone else. Clean gradient stem grounds it."
              mark={<PeopleTv1 size={72} />}
              lockup={
                <div className="flex items-center gap-3">
                  <PeopleTv1 size={40} />
                  <span style={{ color: DARK, fontFamily: "'Arial Black', system-ui", fontWeight: 900, fontSize: 22, letterSpacing: -1 }}>TRYPS</span>
                </div>
              }
            />
            <TCard
              tag="T2 — Group Photo"
              name="Different Heights"
              desc="The centre friend is tallest — the organiser, the one who made this happen. Slightly different sizes make it feel like actual people, not a pattern."
              mark={<PeopleTv2 size={68} />}
              lockup={
                <div className="flex items-center gap-3">
                  <PeopleTv2 size={38} />
                  <span style={{ color: DARK, fontFamily: "'Arial Black', system-ui", fontWeight: 900, fontSize: 22, letterSpacing: -1 }}>TRYPS</span>
                </div>
              }
            />
            <TCard
              tag="T3 — Glow / Dark"
              name="Premium Night Mode"
              desc="Same mark on dark — each person has a soft glow behind them. Reads as three lit-up friends at a destination, at night. Very app-icon ready."
              mark={<PeopleTv3 size={72} />}
              lockup={
                <div className="flex items-center gap-3">
                  <PeopleTv3 size={38} />
                  <span style={{ color: "white", fontFamily: "'Arial Black', system-ui", fontWeight: 900, fontSize: 22, letterSpacing: -1 }}>TRYPS</span>
                </div>
              }
              dark
              tileBg="#0A0202"
            />
          </div>
        </div>

        {/* ─ Section 2: Wordmark play ─ */}
        <div>
          <p style={{ color: C }} className="text-[10px] font-black uppercase tracking-widest mb-1">Wordmark play — TRYPS tells the story</p>
          <h2 style={{ color: DARK }} className="text-2xl font-black tracking-tight mb-1">The word itself becomes the group</h2>
          <p style={{ color: MID }} className="text-xs mb-5">Three ways to make TRYPS feel like a group of people, not just a word.</p>

          <div className="grid grid-cols-3 gap-5">
            <TCard
              tag="W1 — People T Wordmark"
              name="The T leads the pack"
              desc="The T in TRYPS wears the three friends as its crossbar. The mark and the word are one — scan TRYPS and you see the group before you read the name."
              mark={<WordmarkPeopleT />}
              dark={false}
            />
            <TCard
              tag="W2 — Five Friends"
              name="One dot per letter"
              desc="Five letters, five dots above — five friends on a trip. The dot above the Y is biggest — the organiser, or just the friend who suggested the group chat. Playful and warm."
              mark={<WordmarkFriendRow />}
              dark={false}
            />
            <TCard
              tag="W3 — Group Photo"
              name="Everyone at a different height"
              desc="T R Y P S at different heights like friends of different heights in a group photo. The Y stands tallest — maybe it's you. Light-hearted, human, memorable."
              mark={<WordmarkGroupPhoto />}
              dark={false}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default LogoOptions4
