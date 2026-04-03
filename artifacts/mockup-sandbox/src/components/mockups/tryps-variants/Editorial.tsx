import { useState } from "react";

const features = [
  { icon: "01", title: "One-link invite", desc: "Invite friends instantly via iMessage or a simple link — no extra app needed." },
  { icon: "02", title: "Group date polling", desc: "Find dates that work for everyone by collecting availability in one place." },
  { icon: "03", title: "Shared itinerary", desc: "Plan destinations, activities, and schedules together so the whole group stays aligned." },
  { icon: "04", title: "Split expenses", desc: "Track shared costs and settle balances without switching between apps." },
];

const steps = [
  { n: "1", title: "Create and invite", desc: "Start a trip and invite your group in seconds via iMessage or a simple link." },
  { n: "2", title: "Poll for dates", desc: "Find dates that work for everyone in the group." },
  { n: "3", title: "Build the itinerary", desc: "Create a shared trip plan where everyone can contribute." },
  { n: "4", title: "Track expenses", desc: "Manage shared costs and settle balances across the group." },
];

const faqs = [
  { q: "Do my friends need to download an app?", a: "No. Friends can join via a simple iMessage link or URL — no account needed to view and respond." },
  { q: "How does group date polling work?", a: "Everyone marks their available dates. TRYPS highlights the windows that work for the whole group." },
  { q: "Can anyone edit the itinerary?", a: "Yes. Every member can add, suggest, or update items in the shared trip plan in real time." },
  { q: "Is TRYPS free?", a: "Yes, TRYPS is free to get started. We're currently building out premium features — join the waitlist for early access." },
];

export default function Editorial() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#fafaf8", color: "#1a1a1a", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e5e0", background: "#fafaf8", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, position: "sticky", top: 0, zIndex: 50 }}>
        <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: "-0.5px", color: "#1a1a1a" }}>TRYPS</span>
        <div style={{ display: "flex", gap: 32, fontFamily: "system-ui, sans-serif", fontSize: 14, color: "#555" }}>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Features</a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>How it works</a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>FAQ</a>
        </div>
        <button style={{ fontFamily: "system-ui, sans-serif", background: "#1a1a1a", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Join waitlist</button>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#c2622a", textTransform: "uppercase", marginBottom: 24 }}>New — Group Trip Planning</div>
            <h1 style={{ fontSize: 64, fontWeight: 400, lineHeight: 1.05, margin: "0 0 28px", color: "#1a1a1a" }}>
              Group trip planning,{" "}
              <em style={{ fontStyle: "italic", color: "#c2622a" }}>finally</em>{" "}
              done right.
            </h1>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 18, color: "#555", lineHeight: 1.7, margin: "0 0 36px", maxWidth: 440 }}>
              TRYPS brings your whole group together — poll dates, build itineraries, and split expenses without the chaos.
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 14, color: "#888", margin: "0 0 28px", lineHeight: 1.6 }}>
              No setup for your friends — invite instantly via iMessage or a simple link.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "14px 28px", borderRadius: 6, fontSize: 15, fontWeight: 700, fontFamily: "system-ui, sans-serif", cursor: "pointer" }}>Start planning free</button>
              <button style={{ background: "transparent", color: "#1a1a1a", border: "1.5px solid #d5d5ce", padding: "14px 28px", borderRadius: 6, fontSize: 15, fontWeight: 600, fontFamily: "system-ui, sans-serif", cursor: "pointer" }}>Download app</button>
            </div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: "#aaa", margin: "20px 0 0" }}>Join 500+ groups already planning trips together</p>
          </div>

          {/* App Preview — editorial card stack */}
          <div style={{ position: "relative", height: 420 }}>
            {/* Main card */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: "#fff", border: "1px solid #e5e5e0", borderRadius: 16, padding: 28, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div>
                  <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, color: "#aaa", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Active trip</div>
                  <div style={{ fontSize: 22, fontWeight: 500, color: "#1a1a1a" }}>Barcelona Weekend</div>
                </div>
                <div style={{ background: "#f0f9f0", color: "#2d7d3a", fontFamily: "system-ui, sans-serif", fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>6 people</div>
              </div>
              {/* Date poll preview */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "#aaa", textTransform: "uppercase", marginBottom: 10 }}>Date Poll</div>
                {[
                  { date: "Sep 12–15", votes: 5, total: 6 },
                  { date: "Sep 19–22", votes: 3, total: 6 },
                  { date: "Oct 3–6", votes: 2, total: 6 },
                ].map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: "#555", width: 90, flexShrink: 0 }}>{d.date}</div>
                    <div style={{ flex: 1, height: 6, background: "#f0f0ec", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(d.votes / d.total) * 100}%`, background: i === 0 ? "#c2622a" : "#d5d5ce", borderRadius: 3 }} />
                    </div>
                    <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, color: "#aaa", width: 30, textAlign: "right" }}>{d.votes}/{d.total}</div>
                  </div>
                ))}
              </div>
              {/* Members */}
              <div style={{ display: "flex", gap: 8 }}>
                {["A", "B", "C", "D", "E", "+1"].map((m, i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: i === 5 ? "#f0f0ec" : ["#c2622a","#d4813a","#b85c20","#8b4513","#a0522d"][i] || "#e0e0dc", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", fontSize: 12, fontWeight: 700, color: i === 5 ? "#aaa" : "#fff" }}>{m}</div>
                ))}
              </div>
            </div>
            {/* Background card */}
            <div style={{ position: "absolute", bottom: 0, left: 20, right: 20, background: "#fff", border: "1px solid #e5e5e0", borderRadius: 16, padding: "14px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: "system-ui, sans-serif" }}>
                <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Expenses</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>$1,240 total</div>
              </div>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: "#2d7d3a", fontWeight: 600 }}>All settled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #e5e5e0", maxWidth: 1180, margin: "0 auto 0" }} />

      {/* Features */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 40, fontWeight: 400, lineHeight: 1.1, margin: "0 0 20px", color: "#1a1a1a" }}>Everything your group needs</h2>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 15, color: "#888", lineHeight: 1.7, margin: 0 }}>One shared space for dates, plans, and expenses — built for groups.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {features.map((f, i) => (
              <div key={i}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, fontWeight: 700, color: "#c2622a", letterSpacing: 2, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: 16, fontWeight: 700, margin: "0 0 8px", color: "#1a1a1a" }}>{f.title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 14, color: "#777", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #e5e5e0", maxWidth: 1180, margin: "0 auto" }} />

      {/* How it works */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ fontSize: 40, fontWeight: 400, margin: "0 0 56px", color: "#1a1a1a" }}>How TRYPS works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ borderLeft: i === 0 ? "1px solid #e5e5e0" : "none", borderRight: "1px solid #e5e5e0", borderTop: "1px solid #e5e5e0", borderBottom: "1px solid #e5e5e0", padding: "32px 28px" }}>
              <div style={{ fontSize: 48, fontWeight: 300, color: "#e5e5e0", fontFamily: "system-ui, sans-serif", marginBottom: 16, lineHeight: 1 }}>{s.n}</div>
              <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: 16, fontWeight: 700, margin: "0 0 10px", color: "#1a1a1a" }}>{s.title}</h3>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 14, color: "#777", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Without / With */}
      <section style={{ background: "#1a1a1a", color: "#fafaf8", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, fontWeight: 400, margin: "0 0 56px", textAlign: "center" }}>Stop planning across multiple apps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            <div style={{ background: "#111", padding: "40px 48px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#666", textTransform: "uppercase", marginBottom: 28 }}>Without TRYPS</div>
              {["Chats spread across WhatsApp or iMessage", "Dates discussed endlessly without resolution", "Plans scattered across notes and messages", "Expenses tracked separately in another app"].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 18, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 16, color: "#555", flexShrink: 0, marginTop: 1 }}>—</span>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 15, color: "#999", lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#c2622a", padding: "40px 48px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 28 }}>With TRYPS</div>
              {["One shared trip plan for the entire group", "Built-in group date polling", "Shared itinerary everyone can edit", "Expenses tracked and settled in one place"].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 18, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.7)", flexShrink: 0, marginTop: 1 }}>+</span>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 15, color: "#fff", lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 840, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ fontSize: 40, fontWeight: 400, margin: "0 0 48px", color: "#1a1a1a" }}>Questions</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderTop: "1px solid #e5e5e0" }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{ background: "none", border: "none", width: "100%", textAlign: "left", padding: "24px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 17, fontWeight: 600, color: "#1a1a1a" }}>{f.q}</span>
              <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#aaa", flexShrink: 0, marginLeft: 24 }}>{openFaq === i ? "−" : "+"}</span>
            </button>
            {openFaq === i && (
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 15, color: "#666", lineHeight: 1.7, paddingBottom: 24 }}>{f.a}</div>
            )}
          </div>
        ))}
        <div style={{ borderTop: "1px solid #e5e5e0" }} />
      </section>

      {/* CTA */}
      <section style={{ background: "#f5f0ea", padding: "80px 48px", textAlign: "center" }}>
        <h2 style={{ fontSize: 48, fontWeight: 400, margin: "0 0 20px", color: "#1a1a1a" }}>Ready to plan your next trip?</h2>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 18, color: "#777", margin: "0 0 40px" }}>Join thousands of friends already using TRYPS to plan together.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "16px 32px", borderRadius: 6, fontSize: 16, fontWeight: 700, fontFamily: "system-ui, sans-serif", cursor: "pointer" }}>Join TRYPS free</button>
          <button style={{ background: "transparent", color: "#1a1a1a", border: "1.5px solid #c5c0ba", padding: "16px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, fontFamily: "system-ui, sans-serif", cursor: "pointer" }}>Download app</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e5e0", padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: 900, fontSize: 16, color: "#1a1a1a" }}>TRYPS</span>
        <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: "#bbb" }}>2025 TRYPS. All rights reserved.</span>
      </footer>
    </div>
  );
}
