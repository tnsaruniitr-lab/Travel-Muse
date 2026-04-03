import { useState } from "react";

const features = [
  { icon: "link_2", title: "One-link invite", desc: "Invite friends instantly via iMessage or a simple link — no extra app needed.", color: "#7c3aed" },
  { icon: "calendar", title: "Group date polling", desc: "Find dates that work for everyone by collecting availability in one place.", color: "#db2777" },
  { icon: "map", title: "Shared itinerary", desc: "Plan destinations, activities, and schedules together so the whole group stays aligned.", color: "#0891b2" },
  { icon: "split", title: "Split expenses", desc: "Track shared costs and settle balances without switching between apps.", color: "#059669" },
  { icon: "bell", title: "Real-time updates", desc: "Keep everyone in sync as plans evolve.", color: "#d97706" },
  { icon: "compass", title: "Travel preferences", desc: "Understand where your group wants to go and align on destinations faster.", color: "#e11d48" },
];

const steps = [
  { n: "01", title: "Create and invite", desc: "Start a trip and invite your group in seconds via iMessage or a simple link." },
  { n: "02", title: "Poll for dates", desc: "Find dates that work for everyone in the group." },
  { n: "03", title: "Build the itinerary", desc: "Create a shared trip plan where everyone can contribute." },
  { n: "04", title: "Track expenses", desc: "Manage shared costs and settle balances across the group." },
];

const faqs = [
  { q: "Do my friends need to download an app?", a: "No. Friends can join via a simple iMessage link or URL — no account needed to view and respond." },
  { q: "How does group date polling work?", a: "Everyone marks their available dates. TRYPS highlights the windows that work for the whole group." },
  { q: "Can anyone edit the itinerary?", a: "Yes. Every member can add, suggest, or update items in the shared trip plan in real time." },
  { q: "Is TRYPS free?", a: "Yes, TRYPS is free to get started. We're currently building out premium features — join the waitlist for early access." },
];

export default function Gradient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#09090b", color: "#fff", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, position: "sticky", top: 0, zIndex: 50, background: "rgba(9,9,11,0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.5px", background: "linear-gradient(90deg, #a78bfa, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>TRYPS</span>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Features</a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>How it works</a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>FAQ</a>
        </div>
        <button style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Join waitlist</button>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 48px 80px", textAlign: "center" }}>
        {/* Gradient orbs */}
        <div style={{ position: "absolute", top: -200, left: "20%", width: 600, height: 600, background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -100, right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa" }} />
            <span style={{ fontSize: 12, color: "#a78bfa", fontWeight: 600, letterSpacing: 0.5 }}>Group Trip Planning — Now Available</span>
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1, margin: "0 0 24px", letterSpacing: "-2px", maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
            <span style={{ background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Group trips,</span>
            <br />
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #ec4899, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>zero drama.</span>
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 auto 16px", maxWidth: 560 }}>
            Plan trips together, choose dates that work for everyone, build shared itineraries, and split expenses in one place.
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", margin: "0 0 40px" }}>
            No setup for your friends — invite instantly via iMessage or a link.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "#fff", border: "none", padding: "16px 32px", borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 0 40px rgba(124,58,237,0.4)" }}>Start planning your trip</button>
            <button style={{ background: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", padding: "16px 32px", borderRadius: 10, fontSize: 16, fontWeight: 600, cursor: "pointer" }}>Download app</button>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", margin: "24px 0 0" }}>Join 500+ groups already planning trips together</p>
        </div>

        {/* Mock UI */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "64px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Trip card */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, textAlign: "left" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>Active Trip</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Barcelona Weekend</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>6 members</div>
            <div style={{ display: "flex", gap: -8 }}>
              {["A","B","C","D","E","F"].map((m, i) => (
                <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", border: "2px solid #09090b", background: ["#7c3aed","#db2777","#0891b2","#059669","#d97706","#e11d48"][i], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, marginLeft: i === 0 ? 0 : -8 }}>{m}</div>
              ))}
            </div>
          </div>

          {/* Date poll */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, textAlign: "left" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>Date Poll</div>
            {[
              { date: "Sep 12–15", votes: 5, total: 6, best: true },
              { date: "Sep 19–22", votes: 3, total: 6, best: false },
              { date: "Oct 3–6", votes: 2, total: 6, best: false },
            ].map((d, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: d.best ? "#a78bfa" : "rgba(255,255,255,0.6)" }}>{d.date}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{d.votes}/{d.total}</span>
                </div>
                <div style={{ height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(d.votes / d.total) * 100}%`, background: d.best ? "linear-gradient(90deg, #7c3aed, #ec4899)" : "rgba(255,255,255,0.15)", borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Itinerary */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, textAlign: "left" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>Itinerary — Day 1</div>
            {[
              { time: "10:00", item: "Arrive in Barcelona", color: "#7c3aed" },
              { time: "12:30", item: "Lunch at La Barceloneta", color: "#ec4899" },
              { time: "15:00", item: "Sagrada Familia tour", color: "#0891b2" },
              { time: "20:00", item: "Dinner & sunset drinks", color: "#059669" },
            ].map((e, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center" }}>
                <div style={{ width: 3, height: 32, background: e.color, borderRadius: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>{e.time}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{e.item}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Expenses */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, textAlign: "left" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>Expenses</div>
            {[
              { label: "Flights", amount: "$840", color: "#7c3aed" },
              { label: "Hotel (3 nights)", amount: "$620", color: "#ec4899" },
              { label: "Activities", amount: "$220", color: "#0891b2" },
            ].map((e, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: e.color }} />
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{e.label}</span>
                </div>
                <span style={{ fontSize: 14, fontWeight: 700 }}>{e.amount}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Total</span>
              <span style={{ fontSize: 16, fontWeight: 900, background: "linear-gradient(90deg, #a78bfa, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>$1,680</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: 48, fontWeight: 900, margin: "0 0 16px", letterSpacing: "-1px" }}>Everything your group needs</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: 0 }}>One shared space for dates, plans, and expenses.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 28, transition: "border-color 0.2s" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${f.color}22`, border: `1px solid ${f.color}44`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <div style={{ width: 16, height: 16, borderRadius: 3, background: f.color }} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 48px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: "0 0 16px", letterSpacing: "-1px" }}>How TRYPS works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 48, fontWeight: 900, background: "linear-gradient(135deg, #7c3aed, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1, marginBottom: 16 }}>{s.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Without/With */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ fontSize: 48, fontWeight: 900, textAlign: "center", margin: "0 0 56px", letterSpacing: "-1px" }}>Stop planning across multiple apps</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: "40px 40px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 24 }}>Without TRYPS</div>
            {["Chats spread across WhatsApp or iMessage", "Dates discussed endlessly without resolution", "Plans scattered across notes and messages", "Expenses tracked separately in another app"].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 6, height: 1, background: "rgba(255,255,255,0.3)" }} />
                </div>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.15))", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 20, padding: "40px 40px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#a78bfa", textTransform: "uppercase", marginBottom: 24 }}>With TRYPS</div>
            {["One shared trip plan for the entire group", "Built-in group date polling", "Shared itinerary everyone can edit", "Expenses tracked and settled in one place"].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(167,139,250,0.2)", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <div style={{ fontSize: 10, color: "#a78bfa", lineHeight: 1 }}>✓</div>
                </div>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 48px 80px" }}>
        <h2 style={{ fontSize: 48, fontWeight: 900, margin: "0 0 48px", letterSpacing: "-1px" }}>Questions</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ background: "none", border: "none", width: "100%", textAlign: "left", padding: "24px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}>
              <span style={{ fontSize: 17, fontWeight: 600 }}>{f.q}</span>
              <span style={{ fontSize: 20, color: "rgba(255,255,255,0.3)", flexShrink: 0, marginLeft: 24 }}>{openFaq === i ? "−" : "+"}</span>
            </button>
            {openFaq === i && <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, paddingBottom: 24 }}>{f.a}</div>}
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
      </section>

      {/* CTA */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 48px", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(124,58,237,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: 56, fontWeight: 900, margin: "0 0 20px", letterSpacing: "-1.5px", background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ready to plan your next trip?</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "0 0 40px" }}>Join thousands of friends already using TRYPS.</p>
          <button style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "#fff", border: "none", padding: "18px 40px", borderRadius: 12, fontSize: 18, fontWeight: 800, cursor: "pointer", boxShadow: "0 0 60px rgba(124,58,237,0.5)" }}>Join TRYPS free</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 900, fontSize: 16, background: "linear-gradient(90deg, #a78bfa, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>TRYPS</span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>2025 TRYPS. All rights reserved.</span>
      </footer>
    </div>
  );
}
