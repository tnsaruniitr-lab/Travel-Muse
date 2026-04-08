import React, { useState } from "react"

const C = "#9A0514"
const C2 = "#BE123C"
const ROSE = "#FB7185"
const BG = "#FFF9F9"
const DARK = "#1C0808"
const MID = "#6B3030"
const BORDER = "#FECDD3"
const TINT = "#FFE4E6"

/* ── Shared UI pieces ─────────────────────────────────── */

function CountrySelect({ size = "md" }: { size?: "sm" | "md" }) {
  const pad = size === "sm" ? "px-2 py-2 text-xs" : "px-3 py-3 text-sm"
  return (
    <div style={{ borderRight: `1px solid ${BORDER}` }}
      className={`flex items-center gap-1.5 shrink-0 ${pad} text-sm text-gray-600 cursor-pointer select-none`}>
      <span className="text-base">🇮🇳</span>
      <span className="font-semibold text-xs" style={{ color: DARK }}>+91</span>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path d="M1 1l4 4 4-4" stroke={MID} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function GradientTileLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="pcg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C} />
          <stop offset="100%" stopColor={ROSE} />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#pcg)" />
      <rect x="8" y="10" width="16" height="3.5" rx="1.75" fill="white" />
      <rect x="13.25" y="13.5" width="5.5" height="10" rx="2.75" fill="white" />
    </svg>
  )
}

const avatarColors = [C, C2, "#7B0310", "#4C0412", ROSE]
const avatarInitials = ["A", "R", "K", "S", "M"]

function Avatars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}
          style={{ background: avatarColors[i], border: `2px solid ${BG}`, marginLeft: i === 0 ? 0 : -8, zIndex: count - i }}
          className="w-7 h-7 rounded-full flex items-center justify-center relative">
          <span className="text-white text-[10px] font-bold">{avatarInitials[i]}</span>
        </div>
      ))}
    </div>
  )
}

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M6.5 1L8.1 4.3l3.6.5-2.6 2.5.6 3.6L6.5 9.1 3.3 10.9l.6-3.6L1.3 4.8l3.6-.5L6.5 1z"
          fill={C} opacity="0.7" />
      </svg>
      <span style={{ color: MID }} className="text-xs">{text}</span>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   VARIANT A — Inline pill (like the reference, crimson-ified)
   SEO note: `<label>` + `aria-label` + `type="tel"` + keyword-rich
   surrounding copy answers "how do I join a group trip app"
══════════════════════════════════════════════════════════ */
function VariantA() {
  const [val, setVal] = useState("")
  return (
    <section
      aria-labelledby="va-heading"
      style={{ background: BG }}
      className="flex flex-col items-center text-center px-8 py-10 gap-5 h-full justify-center">

      <div className="flex items-center gap-2 mb-1">
        <GradientTileLogo size={30} />
        <span style={{ color: DARK, fontFamily: "'Arial Black', system-ui", fontWeight: 900, fontSize: 18, letterSpacing: -0.5 }}>TRYPS</span>
      </div>

      <h2 id="va-heading"
        style={{ color: DARK }}
        className="text-2xl font-black tracking-tight leading-tight max-w-xs">
        Plan your next group trip.<br />
        <span style={{ color: C }}>Get early access.</span>
      </h2>

      <p style={{ color: MID }} className="text-sm max-w-xs leading-relaxed">
        Join <strong style={{ color: DARK }}>500+ groups</strong> already planning trips together — split expenses, vote on dates, and actually go.
      </p>

      {/* Semantic form — `type="tel"` tells search engines + browsers this is a phone field */}
      <form
        role="form"
        aria-label="Join TRYPS early access — enter your phone number"
        onSubmit={e => e.preventDefault()}
        className="w-full max-w-sm flex flex-col gap-2">

        <label htmlFor="va-phone" className="sr-only">
          Your mobile number to join the TRYPS group trip planning app
        </label>

        <div style={{ border: `1.5px solid ${BORDER}`, background: "white" }}
          className="flex items-stretch rounded-full overflow-hidden shadow-sm">
          <CountrySelect />
          <input
            id="va-phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            placeholder="98765 43210"
            value={val}
            onChange={e => setVal(e.target.value)}
            style={{ color: DARK }}
            className="flex-1 px-3 py-3 text-sm outline-none bg-transparent placeholder-gray-300"
          />
          <button
            type="submit"
            aria-label="Join TRYPS — get your group trip invite"
            style={{ background: C }}
            className="px-6 py-3 text-white text-sm font-black rounded-full m-1 hover:opacity-90 transition-opacity shrink-0">
            Join
          </button>
        </div>

        <p style={{ color: MID }} className="text-xs text-center">
          We'll send you an invite SMS. No spam, ever.
        </p>
      </form>

      <div className="flex items-center gap-3 pt-1">
        <Avatars />
        <span style={{ color: MID }} className="text-xs">500+ groups waiting</span>
      </div>

      <div style={{ color: MID }} className="text-[10px] flex gap-1">
        <span>🔒</span>
        <span>Your number is private. We never share it.</span>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   VARIANT B — Card / Framed (elevated, trust-forward)
   SEO note: `<section>` with descriptive heading, explicit
   structured copy that answers "what is TRYPS" for AEO
══════════════════════════════════════════════════════════ */
function VariantB() {
  const [val, setVal] = useState("")
  return (
    <section
      aria-labelledby="vb-heading"
      style={{ background: `linear-gradient(160deg, ${C} 0%, #4C0412 100%)` }}
      className="flex flex-col items-center text-center px-8 py-10 gap-5 h-full justify-center">

      {/* Card */}
      <div style={{ background: "white", border: `1px solid ${BORDER}` }}
        className="rounded-3xl p-8 w-full max-w-sm shadow-2xl flex flex-col gap-5 items-center text-center">

        <GradientTileLogo size={44} />

        <div>
          <h2 id="vb-heading" style={{ color: DARK }} className="text-xl font-black tracking-tight leading-tight mb-1">
            Reserve your spot
          </h2>
          {/* AEO-optimised copy — answers "what does TRYPS do" as a natural sentence */}
          <p style={{ color: MID }} className="text-xs leading-relaxed">
            TRYPS is the group trip planning app for friends — coordinate dates, split costs, and stop the endless WhatsApp chain.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Avatars count={4} />
          <div className="text-left">
            <p style={{ color: DARK }} className="text-xs font-black">500+ groups joined</p>
            <p style={{ color: MID }} className="text-[10px]">across India & Southeast Asia</p>
          </div>
        </div>

        <form
          role="form"
          aria-label="Reserve your TRYPS early access spot with your mobile number"
          onSubmit={e => e.preventDefault()}
          className="w-full flex flex-col gap-3">

          <label htmlFor="vb-phone" style={{ color: DARK }} className="text-xs font-bold text-left">
            Your WhatsApp / mobile number
          </label>

          <div style={{ border: `1.5px solid ${BORDER}`, background: BG }}
            className="flex items-stretch rounded-xl overflow-hidden">
            <CountrySelect />
            <input
              id="vb-phone"
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              placeholder="98765 43210"
              value={val}
              onChange={e => setVal(e.target.value)}
              style={{ color: DARK }}
              className="flex-1 px-3 py-3 text-sm outline-none bg-transparent placeholder-gray-300"
            />
          </div>

          <button
            type="submit"
            aria-label="Get early access to TRYPS group trip planning app"
            style={{ background: C }}
            className="w-full py-3.5 text-white text-sm font-black rounded-xl hover:opacity-90 transition-opacity">
            Get early access →
          </button>

          <p style={{ color: MID }} className="text-[10px] text-center">
            🔒 We'll WhatsApp you an invite. No spam, unsubscribe any time.
          </p>
        </form>
      </div>

      {/* Social proof outside the card */}
      <div className="flex flex-col gap-1 items-center">
        <TrustBadge text="No credit card. No app download needed yet." />
        <TrustBadge text="Works on any phone — iOS or Android." />
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   VARIANT C — Two-step / conversational
   UX: First asks "where are you planning to go?" then reveals
   the phone field — higher perceived value before asking for number.
   SEO note: The question copy contains the keyword "plan a group trip"
   naturally, improving topical relevance.
══════════════════════════════════════════════════════════ */
function VariantC() {
  const [step, setStep] = useState<1 | 2>(1)
  const [dest, setDest] = useState("")
  const [phone, setPhone] = useState("")

  const destinations = ["Goa", "Bali", "Thailand", "Manali", "Europe", "Other"]

  return (
    <section
      aria-labelledby="vc-heading"
      style={{ background: BG }}
      className="flex flex-col items-center text-center px-8 py-10 gap-6 h-full justify-center">

      <div className="flex items-center gap-2">
        <GradientTileLogo size={26} />
        <span style={{ color: DARK, fontFamily: "'Arial Black', system-ui", fontWeight: 900, fontSize: 16, letterSpacing: -0.5 }}>TRYPS</span>
      </div>

      {step === 1 ? (
        <div className="flex flex-col items-center gap-5 w-full max-w-sm">
          <div>
            <p style={{ color: C }} className="text-[10px] font-black uppercase tracking-widest mb-2">Step 1 of 2</p>
            <h2 id="vc-heading" style={{ color: DARK }} className="text-2xl font-black tracking-tight leading-tight">
              Where's the group trip?
            </h2>
            <p style={{ color: MID }} className="text-xs mt-1">We'll tailor your TRYPS experience for your destination.</p>
          </div>

          {/* Destination chips — keyword-rich, naturally SEO-friendly */}
          <div className="flex flex-wrap gap-2 justify-center">
            {destinations.map(d => (
              <button key={d}
                onClick={() => { setDest(d); setStep(2) }}
                style={{
                  background: dest === d ? C : "white",
                  border: `1.5px solid ${dest === d ? C : BORDER}`,
                  color: dest === d ? "white" : DARK
                }}
                className="px-4 py-2 rounded-full text-sm font-bold hover:border-red-400 transition-all">
                {d}
              </button>
            ))}
          </div>

          <p style={{ color: MID }} className="text-xs">Planning a group trip to somewhere else? Tap Other ↑</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5 w-full max-w-sm">
          <div>
            <button onClick={() => setStep(1)}
              style={{ color: C }}
              className="text-xs font-bold mb-3 flex items-center gap-1 mx-auto">
              ← {dest || "Back"}
            </button>
            <p style={{ color: C }} className="text-[10px] font-black uppercase tracking-widest mb-2">Step 2 of 2</p>
            <h2 id="vc-heading" style={{ color: DARK }} className="text-xl font-black tracking-tight leading-tight">
              Who's getting the invite?
            </h2>
            <p style={{ color: MID }} className="text-xs mt-1">
              We'll text you when your {dest} trip planner is ready.
            </p>
          </div>

          <form
            role="form"
            aria-label={`Join TRYPS group trip planning for ${dest} — enter your mobile number`}
            onSubmit={e => e.preventDefault()}
            className="w-full flex flex-col gap-3">

            <label htmlFor="vc-phone" className="sr-only">
              Your mobile number to plan a group trip to {dest} with TRYPS
            </label>

            <div style={{ border: `1.5px solid ${BORDER}`, background: "white" }}
              className="flex items-stretch rounded-xl overflow-hidden shadow-sm">
              <CountrySelect />
              <input
                id="vc-phone"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                placeholder="98765 43210"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{ color: DARK }}
                className="flex-1 px-3 py-3 text-sm outline-none bg-transparent placeholder-gray-300"
              />
            </div>

            <button
              type="submit"
              aria-label={`Plan my group trip to ${dest || "my destination"} with TRYPS`}
              style={{ background: C }}
              className="w-full py-3.5 text-white text-sm font-black rounded-xl hover:opacity-90 transition-opacity">
              Plan my {dest || "group"} trip →
            </button>
          </form>

          <div className="flex items-center gap-2">
            <Avatars count={3} />
            <p style={{ color: MID }} className="text-xs text-left">
              12 groups planning {dest} trips<br />
              <span className="font-bold" style={{ color: DARK }}>right now</span>
            </p>
          </div>

          <p style={{ color: MID }} className="text-[10px]">🔒 SMS invite only. No spam.</p>
        </div>
      )}
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   MAIN LAYOUT
══════════════════════════════════════════════════════════ */
export function PhoneCapture() {
  return (
    <div style={{ background: "#F0E8E8" }} className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-5">
          <p style={{ color: C }} className="text-[10px] font-black uppercase tracking-widest mb-0.5">Phone capture — three variants</p>
          <h1 style={{ color: DARK }} className="text-2xl font-black tracking-tight">Which capture flow fits best?</h1>
          <p style={{ color: MID }} className="text-xs mt-1">All use <code className="bg-white px-1 rounded text-[10px]">type="tel"</code>, semantic labels, and keyword-rich copy — AEO + SEO ready from day one.</p>
        </div>

        <div className="grid grid-cols-3 gap-4" style={{ height: "calc(100vh - 160px)", minHeight: 600 }}>
          {/* Labels */}
          {[
            { tag: "A — Inline Pill", desc: "Compact. One line. Familiar." },
            { tag: "B — Elevated Card", desc: "Trust-forward. Great for paid traffic." },
            { tag: "C — Two-step", desc: "Conversational. Higher intent." },
          ].map(({ tag, desc }, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span style={{ background: TINT, color: C }}
                  className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {tag}
                </span>
                <span style={{ color: MID }} className="text-[10px]">{desc}</span>
              </div>
              <div style={{ border: `1.5px solid ${BORDER}`, height: "100%" }}
                className="rounded-2xl overflow-hidden flex-1 bg-white shadow-sm">
                {i === 0 && <VariantA />}
                {i === 1 && <VariantB />}
                {i === 2 && <VariantC />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhoneCapture
