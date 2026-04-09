/**
 * Variant C — "Minimal"
 * Single dot centered in the top bubble.
 * Vertical stem is completely clean — no dots.
 * Most reduced / modern. Works well as an app icon.
 */
export function DotUpC() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 bg-[#0D0D0D] p-10">
      <p className="text-[#6B3030] text-xs uppercase tracking-widest font-bold">Variant C — Single dot · clean stem</p>

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

      {/* App icon square mockup */}
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[76px] h-[76px] rounded-[18px] bg-[#0D0D0D] flex items-center justify-center border border-[#2a0a0a]">
            <TLogo size={58} />
          </div>
          <span className="text-[#6B3030] text-[10px]">Dark icon</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[76px] h-[76px] rounded-[18px] bg-[#9A0514] flex items-center justify-center">
            <TLogoWhite size={58} />
          </div>
          <span className="text-[#6B3030] text-[10px]">Solid icon</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[76px] h-[76px] rounded-[18px] bg-white flex items-center justify-center border border-gray-100">
            <TLogo size={58} />
          </div>
          <span className="text-[#6B3030] text-[10px]">Light icon</span>
        </div>
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
    <svg width={vw * scale} height={vh * scale} viewBox={`0 0 ${vw} ${vh}`} fill="none">
      {/* Top speech bubble */}
      <rect x="8" y="6" width="204" height="72" rx="30" fill={R} />
      <path d="M 30 78 L 8 105 L 62 78 Z" fill={R} />

      {/* Single centered white dot in top bubble */}
      <circle cx="110" cy="42" r="11" fill="white" />

      {/* Vertical stem — clean */}
      <rect x="62" y="88" width="96" height="152" rx="32" fill={R} />

      {/* Thought tail */}
      <circle cx="98" cy="248" r="7" fill={R} />
      <circle cx="112" cy="265" r="5" fill={R} />

      {/* Group circle */}
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

function TLogoWhite({ size = 180 }: { size?: number }) {
  const vw = 220
  const vh = 370
  const scale = size / vw

  return (
    <svg width={vw * scale} height={vh * scale} viewBox={`0 0 ${vw} ${vh}`} fill="none">
      <rect x="8" y="6" width="204" height="72" rx="30" fill="white" />
      <path d="M 30 78 L 8 105 L 62 78 Z" fill="white" />
      <circle cx="110" cy="42" r="11" fill="#9A0514" />
      <rect x="62" y="88" width="96" height="152" rx="32" fill="white" />
      <circle cx="98" cy="248" r="7" fill="white" />
      <circle cx="112" cy="265" r="5" fill="white" />
      <circle cx="110" cy="322" r="42" fill="white" />
      <circle cx="96"  cy="310" r="14" fill="#9A0514" fillOpacity="0.2" />
      <circle cx="124" cy="310" r="14" fill="#9A0514" fillOpacity="0.15" />
      <circle cx="96"  cy="336" r="14" fill="#9A0514" fillOpacity="0.15" />
      <circle cx="124" cy="336" r="14" fill="#9A0514" fillOpacity="0.12" />
    </svg>
  )
}
