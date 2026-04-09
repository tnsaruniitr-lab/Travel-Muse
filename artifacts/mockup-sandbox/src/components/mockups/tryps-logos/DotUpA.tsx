/**
 * Variant A — dot sits in the gap between the top speech bubble and the vertical stem.
 * Three typing dots remain in the vertical bubble.
 */
export function DotUpA() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 bg-[#0D0D0D] p-10">
      <p className="text-[#6B3030] text-xs uppercase tracking-widest font-bold">A — Junction dot · three typing dots</p>
      <TLogo size={260} />
      <div className="flex items-end gap-8">
        {[96, 64, 40].map(s => (
          <div key={s} className="flex flex-col items-center gap-2">
            <TLogo size={s} />
            <span className="text-[#6B3030] text-[10px]">{s}px</span>
          </div>
        ))}
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
  const vh = 390
  const scale = size / vw

  /*
   * Layout (in viewBox units):
   *   Top bubble    : y=6  → h=72  → bottom=78
   *   GAP           : 78 → 100  (22px gap — dot lives here)
   *   Vertical stem : y=100 → h=148 → bottom=248
   *   Tail dots     : 256, 270
   *   Group circle  : cy=330
   */

  return (
    <svg width={vw * scale} height={vh * scale} viewBox={`0 0 ${vw} ${vh}`} fill="none">

      {/* ── Top speech bubble (horizontal bar of T) ── */}
      <rect x="8" y="6" width="204" height="72" rx="30" fill={R} />
      {/* Bubble tail — bottom-left */}
      <path d="M 28 78 L 6 106 L 60 78 Z" fill={R} />

      {/* ── Junction dot — centered in the gap between bar and stem ── */}
      <circle cx="110" cy="89" r="11" fill="white" />

      {/* ── Vertical typing bubble (stem of T) ── */}
      <rect x="62" y="100" width="96" height="148" rx="30" fill={R} />

      {/* Three typing dots */}
      <circle cx="86"  cy="174" r="8" fill="white" />
      <circle cx="110" cy="174" r="8" fill="white" />
      <circle cx="134" cy="174" r="8" fill="white" />

      {/* ── Thought-bubble tail ── */}
      <circle cx="100" cy="256" r="7" fill={R} />
      <circle cx="112" cy="272" r="5" fill={R} />

      {/* ── Group avatar circle ── */}
      <circle cx="110" cy="330" r="42" fill={R} />
      <circle cx="96"  cy="318" r="14" fill="white" fillOpacity="0.25" />
      <circle cx="124" cy="318" r="14" fill="white" fillOpacity="0.20" />
      <circle cx="96"  cy="344" r="14" fill="white" fillOpacity="0.18" />
      <circle cx="124" cy="344" r="14" fill="white" fillOpacity="0.15" />
      <circle cx="96"  cy="314" r="5"  fill="white" fillOpacity="0.7" />
      <circle cx="124" cy="314" r="5"  fill="white" fillOpacity="0.7" />
      <circle cx="96"  cy="340" r="5"  fill="white" fillOpacity="0.6" />
      <circle cx="124" cy="340" r="5"  fill="white" fillOpacity="0.6" />
    </svg>
  )
}
