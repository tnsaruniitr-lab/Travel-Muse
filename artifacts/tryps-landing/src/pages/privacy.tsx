import { type ReactNode } from "react";

function TrypsLogo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="priv-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A0514" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#priv-logo-grad)" />
      <rect x="8" y="10" width="16" height="3.5" rx="1.75" fill="white" />
      <rect x="13.25" y="13.5" width="5.5" height="10" rx="2.75" fill="white" />
    </svg>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-xl font-black text-[#1C0808] mb-4 pb-2 border-b border-[#FECDD3]/60">{title}</h2>
      <div className="space-y-3 text-[#2D1A0A] leading-relaxed text-[16px]">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="font-bold text-[#1C0808] mb-1.5">{title}</h3>
      <div className="text-[#2D1A0A] leading-relaxed">{children}</div>
    </div>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 list-none p-0 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#9A0514] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#1C0808] font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFF9F9]/90 backdrop-blur-md border-b border-[#FECDD3]/40">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2.5 font-black text-2xl tracking-tighter text-[#9A0514]" aria-label="TRYPS home">
            <TrypsLogo size={32} />
            TRYPS
          </a>
          <a href="/" className="text-sm font-medium text-[#6B3030] hover:text-[#9A0514] transition-colors">← Back to home</a>
        </nav>
      </header>

      <main id="main-content">
        <div className="max-w-[720px] mx-auto px-6 py-12 pb-24">

          {/* Page header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE4E6] border border-[#FECDD3] text-[#9A0514] text-xs font-bold uppercase tracking-widest mb-4">
              Legal
            </div>
            <h1 className="text-4xl font-black text-[#1C0808] mb-3">Privacy Policy</h1>
            <p className="text-[#6B3030] text-sm">Effective date: April 16, 2026 &nbsp;·&nbsp; Last updated: April 16, 2026</p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-2xl border border-[#FECDD3]/60 px-6 py-5 mb-10 text-[15px] text-[#6B3030] leading-relaxed">
            TRYPS ("we", "our", or "us") operates the TRYPS mobile application and website at trypsagent.com. This Privacy Policy explains what data we collect, how we use it, who we share it with, and what rights you have over it. By using TRYPS you agree to this policy.
          </div>

          {/* 1. Data we collect */}
          <Section id="data-we-collect" title="1. Data we collect">
            <Sub title="1.1 Account and contact information">
              <p>When you create a TRYPS account or join the waitlist we collect:</p>
              <Ul items={[
                "Mobile phone number — used to create your account, send SMS invitations via Twilio, and authenticate you",
                "Display name — if you choose to provide one",
              ]} />
            </Sub>

            <Sub title="1.2 Trip content (user-generated)">
              <p>When you use the app to plan trips we collect and store:</p>
              <Ul items={[
                "Trip names, destinations, and dates you create or vote on",
                "Itinerary items — activities, accommodation, reservations, and notes you or your group add",
                "Expense records — amounts, categories, who paid, and who owes what",
                "Group membership — the phone numbers or identifiers of people you invite to a trip",
              ]} />
            </Sub>

            <Sub title="1.3 Device permissions (collected only when you grant access)">
              <Ul items={[
                "Contacts — to let you invite friends to trips by selecting from your address book. We do not store your full contact list; only identifiers for contacts you explicitly invite are processed.",
                "Location — to suggest nearby destinations, activities, and places relevant to your trip planning. Collected only while you use the relevant feature.",
                "Camera — to let you add photos to a trip plan or itinerary item.",
                "Photo library — to let you choose existing photos from your device to add to a trip.",
                "Notifications — to send you reminders about trips, votes, and group activity within the app.",
              ]} />
              <p className="mt-2 text-sm text-[#6B3030]">You can revoke any permission at any time in your device Settings. Revoking a permission disables the related feature but does not delete your account or trip data.</p>
            </Sub>

            <Sub title="1.4 Usage and analytics data (Firebase)">
              <p>We use Google Firebase to collect analytics and crash reporting data, including:</p>
              <Ul items={[
                "App events — screens viewed, features used, session length",
                "Crash reports and performance diagnostics — to identify and fix bugs",
                "Device type, operating system version, and approximate geographic region",
                "Firebase installation ID — a pseudonymous identifier assigned by Firebase",
              ]} />
              <p className="mt-2">Firebase data is governed by <a href="https://policies.google.com/privacy" className="text-[#9A0514] underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>. Firebase does not receive your phone number or trip content.</p>
            </Sub>
          </Section>

          {/* 2. How we use your data */}
          <Section id="how-we-use" title="2. How we use your data">
            <Ul items={[
              "To create and manage your TRYPS account",
              "To deliver core app functionality — trip creation, date polling, itinerary collaboration, and expense tracking",
              "To send SMS messages via Twilio — including account verification, group invitations you initiate, and trip notifications you enable",
              "To process and surface contact-based invitations when you choose to invite friends",
              "To suggest nearby places and destinations when you grant location access",
              "To allow you to attach photos to trip plans when you grant camera or photo library access",
              "To send push notifications about your trips when you grant notification permission",
              "To analyse app usage via Firebase and improve the product",
              "To diagnose crashes and fix technical issues via Firebase Crashlytics",
              "To respond to support requests",
              "To comply with legal obligations",
            ]} />
          </Section>

          {/* 3. Third parties */}
          <Section id="third-parties" title="3. Third parties we share data with">
            <p>We do not sell your personal data. We share data only with the service providers listed below and only to the extent necessary to operate TRYPS.</p>

            <div className="mt-4 overflow-x-auto rounded-xl border border-[#FECDD3]/60">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="bg-[#9A0514] text-white">
                    <th className="text-left px-4 py-3 font-bold rounded-tl-xl">Provider</th>
                    <th className="text-left px-4 py-3 font-bold">Purpose</th>
                    <th className="text-left px-4 py-3 font-bold rounded-tr-xl">Data shared</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { provider: "Twilio", purpose: "SMS delivery — verification and invitations", data: "Phone number, message content" },
                    { provider: "Google Firebase", purpose: "Analytics, crash reporting, performance monitoring", data: "Pseudonymous usage events, crash logs, device info" },
                    { provider: "Hosting provider", purpose: "App and database hosting", data: "Encrypted trip and account data" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FFF9F9]"}>
                      <td className="px-4 py-3 font-medium text-[#1C0808]">{row.provider}</td>
                      <td className="px-4 py-3 text-[#2D1A0A]">{row.purpose}</td>
                      <td className="px-4 py-3 text-[#6B3030]">{row.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4">We may also disclose data if required by law, court order, or to protect the rights and safety of users or the public.</p>
          </Section>

          {/* 4. Data retention */}
          <Section id="retention" title="4. Data retention">
            <Ul items={[
              "Account data — retained for as long as your account is active",
              "Trip content — retained until you delete the trip or your account",
              "SMS logs — Twilio retains delivery logs per their own retention policy (typically 30 days)",
              "Firebase analytics — retained for up to 14 months per Firebase default settings",
              "Waitlist data — phone numbers collected before account creation are retained until you join or request deletion",
            ]} />
          </Section>

          {/* 5. Account deletion */}
          <Section id="account-deletion" title="5. Account deletion">
            <p>You can delete your TRYPS account at any time from within the app:</p>
            <Ul items={[
              "Open the app → Settings → Account → Delete Account",
              "Confirm deletion when prompted",
            ]} />
            <p>When you delete your account:</p>
            <Ul items={[
              "Your profile and authentication record are permanently deleted",
              "Trip content you created is deleted. Trip content contributed to shared trips is anonymised rather than deleted to preserve the record for other group members.",
              "Your phone number is removed from our database within 30 days",
              "Firebase analytics data associated with your installation ID may be retained in aggregate, anonymised form per Google's data retention policies",
            ]} />
            <p>You may also request deletion by emailing <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a>. We will action deletion requests within 30 days.</p>
          </Section>

          {/* 6. Your rights */}
          <Section id="your-rights" title="6. Your rights">
            <p>Depending on your location, you may have the right to:</p>
            <Ul items={[
              "Access the personal data we hold about you",
              "Correct inaccurate data",
              "Request deletion of your data (see Section 5)",
              "Object to or restrict certain processing",
              "Data portability — receive a copy of your data in a structured format",
              "Withdraw consent for optional data processing at any time",
            ]} />
            <p>To exercise any of these rights, email <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a>. We will respond within 30 days.</p>
          </Section>

          {/* 7. Device permissions detail */}
          <Section id="permissions" title="7. Device permissions — detailed">
            <p>TRYPS requests the following iOS system permissions. Each is optional and only requested when you use the relevant feature.</p>
            <Ul items={[
              "NSContactsUsageDescription — to suggest friends to invite to trips from your address book",
              "NSLocationWhenInUseUsageDescription — to suggest nearby places and destinations during active use",
              "NSCameraUsageDescription — to capture photos and attach them to itinerary items",
              "NSPhotoLibraryUsageDescription — to select existing photos and attach them to itinerary items",
              "UNUserNotificationCenter — to send you in-app and push notifications about trip activity",
            ]} />
            <p>You can manage all permissions at any time in: iPhone Settings → TRYPS.</p>
          </Section>

          {/* 8. Children */}
          <Section id="children" title="8. Children's privacy">
            <p>TRYPS is not directed to children under the age of 13. We do not knowingly collect personal data from anyone under 13. If you believe a child under 13 has provided us with personal data, please contact us at <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a> and we will delete it promptly.</p>
            <p>Users between 13 and 17 should use TRYPS only with the involvement of a parent or guardian.</p>
          </Section>

          {/* 9. Security */}
          <Section id="security" title="9. Security">
            <p>We use industry-standard technical and organisational measures to protect your data, including:</p>
            <Ul items={[
              "Encryption in transit (TLS) for all data transmitted between your device and our servers",
              "Encryption at rest for stored account and trip data",
              "Rate limiting and access controls on our API",
              "Firebase security rules restricting access to user data",
            ]} />
            <p>No system is perfectly secure. If you believe your account has been compromised, contact us immediately at <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a>.</p>
          </Section>

          {/* 10. Changes */}
          <Section id="changes" title="10. Changes to this policy">
            <p>We may update this Privacy Policy from time to time. When we make material changes we will notify you via the app or by SMS (if you have an account) and update the "Last updated" date at the top of this page. Continued use of TRYPS after the effective date of changes constitutes acceptance of the updated policy.</p>
          </Section>

          {/* 11. Contact */}
          <Section id="contact" title="11. Contact us">
            <p>For privacy questions, data access requests, or account deletion requests:</p>
            <div className="bg-white rounded-xl border border-[#FECDD3]/60 px-5 py-4 mt-3 text-[15px]">
              <p className="font-bold text-[#1C0808] mb-1">TRYPS</p>
              <p>Email: <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a></p>
              <p>Website: <a href="https://trypsagent.com" className="text-[#9A0514] underline">trypsagent.com</a></p>
            </div>
          </Section>

          {/* Footer nav */}
          <div className="pt-6 border-t border-[#FECDD3]/60 flex flex-wrap gap-4 text-sm text-[#6B3030]">
            <a href="/terms" className="hover:text-[#9A0514] transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="/" className="hover:text-[#9A0514] transition-colors">Home</a>
            <span>·</span>
            <a href="mailto:support@trypsagent.com" className="hover:text-[#9A0514] transition-colors">Contact</a>
          </div>

        </div>
      </main>
    </div>
  );
}
