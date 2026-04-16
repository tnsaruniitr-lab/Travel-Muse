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
          <div className="bg-white rounded-2xl border border-[#FECDD3]/60 px-6 py-5 mb-6 text-[15px] text-[#6B3030] leading-relaxed">
            TRYPS ("we", "our", or "us") operates the TRYPS mobile application and website at trypsagent.com. This Privacy Policy explains what personal data we collect, why we collect it, who we share it with, and what rights you have over it. We are the data controller for all personal data described in this policy. By creating an account or using TRYPS you acknowledge that you have read this policy. This policy is accessible within the TRYPS app under Settings → Privacy Policy.
          </div>

          {/* Apple App Store — Privacy Nutrition Label Summary */}
          <div className="bg-[#FFE4E6] rounded-2xl border border-[#FECDD3] px-6 py-5 mb-10">
            <div className="flex items-center gap-2 mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 5c.552 0 1 .448 1 1v5a1 1 0 1 1-2 0v-5c0-.552.448-1 1-1z" fill="#9A0514"/></svg>
              <span className="font-black text-[#9A0514] text-sm uppercase tracking-widest">Apple App Store — Privacy data types</span>
            </div>
            <p className="text-[13px] text-[#6B3030] mb-4">The following table maps TRYPS data to Apple's App Store privacy nutrition label categories, as declared in App Store Connect. All detail is in the numbered sections below.</p>
            <div className="overflow-x-auto rounded-xl border border-[#FECDD3]">
              <table className="w-full text-[13px] border-collapse bg-white">
                <thead>
                  <tr className="bg-[#9A0514] text-white">
                    <th className="text-left px-3 py-2.5 font-bold rounded-tl-xl">Apple category</th>
                    <th className="text-left px-3 py-2.5 font-bold">Data type</th>
                    <th className="text-left px-3 py-2.5 font-bold">Linked to you?</th>
                    <th className="text-left px-3 py-2.5 font-bold rounded-tr-xl">Used for tracking?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Contact Info", type: "Phone number", linked: "Yes", tracking: "No" },
                    { cat: "Contact Info", type: "Name (display name, optional)", linked: "Yes", tracking: "No" },
                    { cat: "Identifiers", type: "User ID (account identifier)", linked: "Yes", tracking: "No" },
                    { cat: "Identifiers", type: "Firebase installation ID (pseudonymous)", linked: "No", tracking: "No" },
                    { cat: "User Content", type: "Trip plans, itineraries, expenses, notes", linked: "Yes", tracking: "No" },
                    { cat: "User Content", type: "Photos added to trips", linked: "Yes", tracking: "No" },
                    { cat: "Location", type: "Coarse location (when permission granted)", linked: "Yes", tracking: "No" },
                    { cat: "Contacts", type: "Invited contacts only (not full address book)", linked: "No", tracking: "No" },
                    { cat: "Usage Data", type: "App interaction events (Firebase Analytics)", linked: "No", tracking: "No" },
                    { cat: "Diagnostics", type: "Crash data, performance data (Firebase Crashlytics)", linked: "No", tracking: "No" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FFF9F9]"}>
                      <td className="px-3 py-2 font-medium text-[#1C0808]">{row.cat}</td>
                      <td className="px-3 py-2 text-[#2D1A0A]">{row.type}</td>
                      <td className="px-3 py-2">{row.linked === "Yes" ? <span className="text-[#9A0514] font-bold">Yes</span> : <span className="text-[#6B3030]">No</span>}</td>
                      <td className="px-3 py-2"><span className="text-[#6B3030]">No</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#6B3030] mt-3">TRYPS does not collect: Health &amp; Fitness, Financial Info, Sensitive Info, Browsing History, Search History, or Purchases data. No data is used for tracking across third-party apps or websites. ATT prompt is not shown.</p>
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

            <Sub title="1.4 App usage and analytics data (Firebase)">
              <p>We use Google Firebase to collect analytics and crash reporting data, including:</p>
              <Ul items={[
                "App events — screens viewed, features used, session length",
                "Crash reports and performance diagnostics — to identify and fix bugs",
                "Device type, operating system version, and approximate geographic region",
                "Firebase installation ID — a pseudonymous identifier assigned by Firebase",
              ]} />
              <p className="mt-2">We use Firebase for <strong>first-party analytics only</strong>. Firebase Analytics is configured without advertising features, and we do not use Firebase to track you across other apps or websites. As a result, TRYPS does not trigger Apple's App Tracking Transparency (ATT) framework — you will not see an ATT permission prompt.</p>
              <p className="mt-2">Firebase data is governed by <a href="https://policies.google.com/privacy" className="text-[#9A0514] underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>. Firebase does not receive your phone number or trip content.</p>
            </Sub>

            <Sub title="1.5 Website data (Google Tag Manager)">
              <p>Our website at trypsagent.com uses Google Tag Manager (GTM), a tag management system that allows us to deploy and manage analytics and measurement scripts. GTM itself does not collect personal data, but it may load third-party tags that do. Currently the only tags active via GTM are Google Analytics (aggregate page-view and session data) and the Firebase measurement integration. We do not run advertising or remarketing tags through GTM.</p>
              <p className="mt-2">Website data collected includes:</p>
              <Ul items={[
                "Pages visited and time spent on each page",
                "Referral source — how you arrived at the site",
                "Device type and browser",
                "Approximate geographic region",
              ]} />
              <p className="mt-2">This data is collected via browser cookies and similar technologies. It is associated with a pseudonymous analytics identifier, not your name or phone number.</p>
            </Sub>
          </Section>

          {/* 2. Legal basis for processing (GDPR) */}
          <Section id="legal-basis" title="2. Legal basis for processing (EU/UK users)">
            <p>If you are located in the European Union or United Kingdom, we process your personal data under the following legal bases under the UK/EU General Data Protection Regulation (UK/EU GDPR):</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[#FECDD3]/60">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="bg-[#9A0514] text-white">
                    <th className="text-left px-4 py-3 font-bold rounded-tl-xl">Processing activity</th>
                    <th className="text-left px-4 py-3 font-bold rounded-tr-xl">Legal basis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { activity: "Creating and managing your account; delivering core app functionality", basis: "Performance of contract (Art. 6(1)(b))" },
                    { activity: "Sending SMS verification and trip invitations via Twilio", basis: "Performance of contract (Art. 6(1)(b))" },
                    { activity: "Firebase crash reporting and performance monitoring", basis: "Legitimate interests — maintaining a stable, secure app (Art. 6(1)(f))" },
                    { activity: "Firebase analytics and GTM website measurement", basis: "Legitimate interests — understanding product usage to improve it (Art. 6(1)(f))" },
                    { activity: "Responding to support requests", basis: "Legitimate interests (Art. 6(1)(f))" },
                    { activity: "Complying with legal obligations", basis: "Legal obligation (Art. 6(1)(c))" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FFF9F9]"}>
                      <td className="px-4 py-3 text-[#2D1A0A]">{row.activity}</td>
                      <td className="px-4 py-3 text-[#6B3030] font-medium">{row.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-[#6B3030]">Where we rely on legitimate interests, we have assessed that our interests are not overridden by your rights and freedoms. You may object to legitimate-interest processing at any time — see Section 7.</p>
          </Section>

          {/* 3. How we use your data */}
          <Section id="how-we-use" title="3. How we use your data">
            <Ul items={[
              "To create and manage your TRYPS account",
              "To deliver core app functionality — trip creation, date polling, itinerary collaboration, and expense tracking",
              "To send SMS messages via Twilio — including account verification, group invitations you initiate, and trip notifications you enable",
              "To process and surface contact-based invitations when you choose to invite friends",
              "To suggest nearby places and destinations when you grant location access",
              "To allow you to attach photos to trip plans when you grant camera or photo library access",
              "To send push notifications about your trips when you grant notification permission",
              "To analyse app and website usage via Firebase and GTM and improve the product",
              "To diagnose crashes and fix technical issues via Firebase Crashlytics",
              "To respond to support requests",
              "To comply with legal obligations",
            ]} />
          </Section>

          {/* 4. Third parties */}
          <Section id="third-parties" title="4. Third parties we share data with">
            <p>We do not sell your personal data. We share data only with the service providers listed below, only to the extent necessary to operate TRYPS. Each provider acts as a data processor under a data processing agreement with us.</p>

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
                    { provider: "Twilio (US)", purpose: "SMS delivery — verification and invitations", data: "Phone number, message content" },
                    { provider: "Google Firebase (US)", purpose: "Analytics, crash reporting, performance monitoring", data: "Pseudonymous usage events, crash logs, device info" },
                    { provider: "Google Tag Manager (US)", purpose: "Website tag management and measurement", data: "Pseudonymous website session and event data" },
                    { provider: "Hosting provider (US)", purpose: "App and database hosting", data: "Encrypted trip and account data" },
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

            <Sub title="International data transfers">
              <p>All third-party providers listed above are based in the United States. If you are located in the European Union or United Kingdom, your personal data will be transferred to and processed in the US. We ensure that such transfers are protected by appropriate safeguards, including Standard Contractual Clauses (SCCs) approved by the European Commission, and/or by using providers that are certified under applicable data transfer frameworks. You may request a copy of the applicable transfer mechanism by emailing <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a>.</p>
            </Sub>
          </Section>

          {/* 5. Data retention */}
          <Section id="retention" title="5. Data retention">
            <Ul items={[
              "Account data — retained for as long as your account is active",
              "Trip content — retained until you delete the trip or your account",
              "SMS logs — Twilio retains delivery logs per their own retention policy (typically 30 days)",
              "Firebase analytics — retained for up to 14 months per Firebase default settings",
              "Waitlist data — phone numbers collected before account creation are retained for up to 24 months, after which they are automatically deleted",
            ]} />
          </Section>

          {/* 6. Account deletion */}
          <Section id="account-deletion" title="6. Account deletion">
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

          {/* 7. Your rights */}
          <Section id="your-rights" title="7. Your rights">
            <p>Depending on your location, you may have the right to:</p>
            <Ul items={[
              "Access the personal data we hold about you",
              "Correct inaccurate data",
              "Request deletion of your data (see Section 6)",
              "Object to processing based on legitimate interests",
              "Restrict certain processing while a dispute is resolved",
              "Data portability — receive a copy of your data in a structured, machine-readable format",
              "Withdraw consent for any processing based on consent, at any time, without affecting the lawfulness of prior processing",
            ]} />
            <p>To exercise any of these rights, email <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a>. We will respond within 30 days.</p>
            <Sub title="EU/UK users — right to lodge a complaint">
              <p>If you are located in the EU or UK and believe we have breached applicable data protection law, you have the right to lodge a complaint with your national data protection supervisory authority. In the EU you can find your local authority at <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" className="text-[#9A0514] underline" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>. In the UK the relevant authority is the <a href="https://ico.org.uk" className="text-[#9A0514] underline" target="_blank" rel="noopener noreferrer">Information Commissioner's Office (ICO)</a>. We would appreciate the opportunity to address your concerns before you contact a regulator — please reach out to us first.</p>
            </Sub>
            <Sub title="California residents (CCPA)">
              <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
              <Ul items={[
                "Right to know — the categories and specific pieces of personal information we collect, use, disclose, and sell about you",
                "Right to delete — to request deletion of your personal information (subject to certain exceptions)",
                "Right to opt out of sale — we do not sell your personal information to third parties. You do not need to opt out.",
                "Right to non-discrimination — we will not discriminate against you for exercising your privacy rights",
                "Right to correct — to request correction of inaccurate personal information",
              ]} />
              <p className="mt-2">To exercise your California rights, email <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a> with "California Privacy Request" in the subject line. We will respond within 45 days.</p>
            </Sub>
          </Section>

          {/* 8. Device permissions */}
          <Section id="permissions" title="8. Device permissions">
            <p>TRYPS requests the following permissions on your device. Each is optional and only requested when you use the relevant feature. You can manage all permissions at any time in your device Settings.</p>
            <Ul items={[
              "Contacts — so you can invite friends to trips by selecting from your address book. We do not upload or store your contact list.",
              "Location (while using the app) — so we can suggest nearby places and destinations during active trip planning sessions.",
              "Camera — so you can take photos and attach them to itinerary items.",
              "Photos / media library — so you can choose existing photos from your device to add to a trip.",
              "Notifications — so we can send you reminders about trips, date polls, and group activity.",
            ]} />
            <p className="text-sm text-[#6B3030] mt-2">To manage permissions: iPhone → Settings → TRYPS. Revoking a permission only disables the related feature — your account and trip data are unaffected.</p>
          </Section>

          {/* 9. Children */}
          <Section id="children" title="9. Children's privacy">
            <p>TRYPS is not directed to children under the age of 13. We do not knowingly collect personal data from anyone under 13. If you believe a child under 13 has provided us with personal data, please contact us at <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a> and we will delete it promptly.</p>
            <p>Users between 13 and 17 should use TRYPS only with the involvement of a parent or guardian.</p>
          </Section>

          {/* 10. Security */}
          <Section id="security" title="10. Security">
            <p>We use industry-standard technical and organisational measures to protect your data, including:</p>
            <Ul items={[
              "Encryption in transit (TLS) for all data transmitted between your device and our servers",
              "Encryption at rest for stored account and trip data",
              "Rate limiting and access controls on our API",
              "Firebase security rules restricting access to user data",
            ]} />
            <p>No system is perfectly secure. If you believe your account has been compromised, contact us immediately at <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a>.</p>
            <Sub title="Data breach notification">
              <p>If we become aware of a data breach that is likely to result in a high risk to your rights and freedoms, we will notify you without undue delay in accordance with applicable law, including GDPR Article 34 where applicable. Notification will be made via the app, by SMS, or by email where we hold a contact address for you.</p>
            </Sub>
          </Section>

          {/* 11. Changes */}
          <Section id="changes" title="11. Changes to this policy">
            <p>We may update this Privacy Policy from time to time. When we make material changes we will notify you via the app or by SMS (if you have an account) and update the "Last updated" date at the top of this page. For EU/UK users, if we change the legal basis on which we process your data, we will seek fresh consent or provide notice in accordance with GDPR requirements. Continued use of TRYPS after the effective date of non-material changes constitutes acknowledgement of the updated policy.</p>
          </Section>

          {/* 12. Contact */}
          <Section id="contact" title="12. Contact us">
            <p>For privacy questions, data access requests, or account deletion requests, contact our privacy team:</p>
            <div className="bg-white rounded-xl border border-[#FECDD3]/60 px-5 py-4 mt-3 text-[15px]">
              <p className="font-bold text-[#1C0808] mb-1">TRYPS — Privacy</p>
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
