/**
 * Variant B — "Triple Up"
 * All three typing dots move to the top speech bubble (horizontal row).
 * The vertical bubble (stem of T) is clean — no dots.
 * Reads as: friends are typing → message above.
 */
export function DotUpB() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 bg-[#0D0D0D] p-10">
      <p className="text-[#6B3030] text-xs uppercase tracking-widest font-bold">Variant B — Three dots in top bubble</p>

      <TLogo size={260} />

      <div className="flex items-end gap-8">
        <div className="flex flex-col items-center gap-2">
          <TLogo size={96} />
          <span className="text-[#6B3030] text-[10px]">96px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TLogo size={64} />
          <span className="text-[#6B3030] text-[10px]">64px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TLogo size={40} />
          <span className="text-[#6B3030] text-[10px]">40px</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4">
        <p className="text-[#9CA3AF] text-[10px] uppercase tracking-widest">On light</p>
        <TLogo size={120} />
      </div>
    </div>
  )
}

function TLogo({ size = 180 }: { size?: number }) {
  const R = "#9A0514"
  const vw = 220
  const vh = 370

  const scale = size / vw

  return (
    <svg
      width={vw * scale}
      height={vh * scale}
      viewBox={`0 0 ${vw} ${vh}`}
      fill="none"
    >
      {/* ── Top speech bubble (horizontal bar of T) ── */}
      <rect x="8" y="6" width="204" height="72" rx="30" fill={R} />
      <path d="M 30 78 L 8 105 L 62 78 Z" fill={R} />

      {/* THREE white dots in top bubble — typing indicator lives up top */}
      <circle cx="82"  cy="42" r="8.5" fill="white" />
      <circle cx="110" cy="42" r="8.5" fill="white" />
      <circle cx="138" cy="42" r="8.5" fill="white" />

      {/* ── Vertical bubble — clean, no dots ── */}
      <rect x="62" y="88" width="96" height="152" rx="32" fill={R} />

      {/* ── Thought-bubble tail ── */}
      <circle cx="98" cy="248" r="7" fill={R} />
      <circle cx="112" cy="265" r="5" fill={R} />

      {/* ── Group avatar circle ── */}
      <circle cx="110" cy="322" r="42" fill={R} />
      <circle cx="96"  cy="310" r="14" fill="white" fillOpacity="0.25" />
      <circle cx="124" cy="310" r="14" fill="white" fillOpacity="0.20" />
      <circle cx="96"  cy="336" r="14" fill="white" fillOpacity="0.18" />
      <circle cx="124" cy="336" r="14" fill="white" fillOpacity="0.15" />
      <circle cx="96"  cy="306" r="5" fill="white" fillOpacity="0.7" />
      <circle cx="124" cy="306" r="5" fill="white" fillOpacity="0.7" />
      <circle cx="96"  cy="332" r="5" fill="white" fillOpacity="0.6" />
      <circle cx="124" cy="332" r="5" fill="white" fillOpacity="0.6" />
    </svg>
  )
}
