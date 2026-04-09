/**
 * Variant C — dot in the gap, vertical stem completely clean.
 * Most minimal. The junction dot is the only white detail.
 * Also shows app-icon framing.
 */
export function DotUpC() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 bg-[#0D0D0D] p-10">
      <p className="text-[#6B3030] text-xs uppercase tracking-widest font-bold">C — Junction dot · clean stem</p>
      <TLogo size={260} />
      <div className="flex items-end gap-8">
        {[96, 64, 40].map(s => (
          <div key={s} className="flex flex-col items-center gap-2">
            <TLogo size={s} />
            <span className="text-[#6B3030] text-[10px]">{s}px</span>
          </div>
        ))}
      </div>

      {/* App icon framing */}
      <div className="flex gap-6">
        {[
          { bg: "#0D0D0D", border: "border border-[#2a0a0a]", label: "Dark" },
          { bg: "#9A0514", border: "", label: "Red" },
          { bg: "#ffffff", border: "border border-gray-100", label: "Light" },
        ].map(({ bg, border, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div
              className={`w-[76px] h-[76px] rounded-[18px] flex items-center justify-center ${border}`}
              style={{ background: bg }}
            >
              <TLogo size={58} invert={bg === "#9A0514"} />
            </div>
            <span className="text-[#6B3030] text-[10px]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TLogo({ size = 180, invert = false }: { size?: number; invert?: boolean }) {
  const R  = invert ? "white"   : "#9A0514"
  const DOT = invert ? "#9A0514" : "white"
  const vw = 220
  const vh = 390
  const scale = size / vw

  return (
    <svg width={vw * scale} height={vh * scale} viewBox={`0 0 ${vw} ${vh}`} fill="none">

      {/* ── Top speech bubble ── */}
      <rect x="8" y="6" width="204" height="72" rx="30" fill={R} />
      <path d="M 28 78 L 6 106 L 60 78 Z" fill={R} />

      {/* ── Junction dot — in the gap ── */}
      <circle cx="110" cy="89" r="11" fill={DOT} />

      {/* ── Vertical stem — clean ── */}
      <rect x="62" y="100" width="96" height="148" rx="30" fill={R} />

      {/* ── Tail ── */}
      <circle cx="100" cy="256" r="7" fill={R} />
      <circle cx="112" cy="272" r="5" fill={R} />

      {/* ── Group circle ── */}
      <circle cx="110" cy="330" r="42" fill={R} />
      <circle cx="96"  cy="318" r="14" fill={DOT} fillOpacity="0.25" />
      <circle cx="124" cy="318" r="14" fill={DOT} fillOpacity="0.20" />
      <circle cx="96"  cy="344" r="14" fill={DOT} fillOpacity="0.18" />
      <circle cx="124" cy="344" r="14" fill={DOT} fillOpacity="0.15" />
      <circle cx="96"  cy="314" r="5"  fill={DOT} fillOpacity="0.7" />
      <circle cx="124" cy="314" r="5"  fill={DOT} fillOpacity="0.7" />
      <circle cx="96"  cy="340" r="5"  fill={DOT} fillOpacity="0.6" />
      <circle cx="124" cy="340" r="5"  fill={DOT} fillOpacity="0.6" />
    </svg>
  )
}
