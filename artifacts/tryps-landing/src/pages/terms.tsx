import { type ReactNode } from "react";

function TrypsLogo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="terms-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A0514" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#terms-logo-grad)" />
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

export default function TermsOfService() {
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
            <h1 className="text-4xl font-black text-[#1C0808] mb-3">Terms of Service</h1>
            <p className="text-[#6B3030] text-sm">Effective date: April 16, 2026 &nbsp;·&nbsp; Last updated: April 16, 2026</p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-2xl border border-[#FECDD3]/60 px-6 py-5 mb-10 text-[15px] text-[#6B3030] leading-relaxed">
            These Terms of Service ("Terms") form a binding agreement between you and TRYPS ("we", "our", or "us") governing your use of the TRYPS mobile application and website at trypsagent.com. By creating an account or using TRYPS you agree to these Terms. If you do not agree, do not use the service.
          </div>

          {/* 1. Eligibility */}
          <Section id="eligibility" title="1. Eligibility">
            <p>You must be at least 13 years old to use TRYPS. By using TRYPS you confirm that you meet this requirement. If you are between 13 and 17 years old, you confirm that a parent or guardian has reviewed and agreed to these Terms on your behalf.</p>
            <p>TRYPS is not available in jurisdictions where the service is prohibited by law.</p>
          </Section>

          {/* 2. Accounts */}
          <Section id="accounts" title="2. Your account">
            <p>To use TRYPS you create an account using your mobile phone number. You are responsible for:</p>
            <Ul items={[
              "Keeping your account credentials secure",
              "All activity that occurs under your account",
              "Ensuring the phone number you provide is yours and that you are authorised to receive SMS messages on it",
            ]} />
            <p>You must notify us immediately at <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a> if you believe your account has been compromised.</p>
          </Section>

          {/* 3. Account deletion */}
          <Section id="account-deletion" title="3. Account deletion">
            <p>You may delete your account at any time from within the app:</p>
            <p className="font-medium text-[#1C0808]">Settings → Account → Delete Account</p>
            <p>Account deletion is permanent. Once deleted, your account and personal profile cannot be recovered. Trip content you contributed to shared trips may be retained in anonymised form to preserve the record for other group members. See our <a href="/privacy#account-deletion" className="text-[#9A0514] underline">Privacy Policy §5</a> for full details of what is deleted and what is retained.</p>
          </Section>

          {/* 4. Acceptable use */}
          <Section id="acceptable-use" title="4. Acceptable use">
            <p>You agree not to use TRYPS to:</p>
            <Ul items={[
              "Violate any applicable law or regulation",
              "Harass, threaten, or harm other users",
              "Send unsolicited messages or spam to other users",
              "Impersonate another person or entity",
              "Attempt to gain unauthorised access to other accounts or our systems",
              "Interfere with the availability or integrity of the service",
              "Scrape, copy, or redistribute any part of the service without our written permission",
              "Use TRYPS for any commercial purpose other than those expressly permitted by us",
            ]} />
            <p>We reserve the right to suspend or terminate accounts that violate these rules without prior notice.</p>
          </Section>

          {/* 5. User content */}
          <Section id="user-content" title="5. Your content">
            <p>You retain ownership of the content you create in TRYPS — trip plans, itinerary items, expense records, and photos you upload ("Your Content").</p>
            <p>By using TRYPS you grant us a limited, non-exclusive, royalty-free licence to store, process, and display Your Content solely for the purpose of operating the service for you and your trip group. We do not use Your Content for advertising and do not share it with third parties except as described in our Privacy Policy.</p>
            <p>You are responsible for ensuring that Your Content does not infringe third-party rights and complies with these Terms.</p>
          </Section>

          {/* 6. Invitations and SMS */}
          <Section id="sms" title="6. Invitations and SMS">
            <p>TRYPS enables you to invite friends to trips by sending them SMS messages via Twilio. By using this feature you confirm that:</p>
            <Ul items={[
              "You have permission to send the recipient an SMS message",
              "The recipient has not asked you to stop contacting them",
              "You are not using the feature to send unsolicited commercial messages",
            ]} />
            <p>Standard SMS and data rates may apply to recipients depending on their carrier and plan. TRYPS is not responsible for carrier charges incurred by recipients.</p>
          </Section>

          {/* 7. Intellectual property */}
          <Section id="ip" title="7. Intellectual property">
            <p>All TRYPS branding, design, software, and content (excluding Your Content) is owned by us or our licensors and is protected by copyright, trademark, and other intellectual property laws. Nothing in these Terms transfers ownership of our intellectual property to you.</p>
            <p>We grant you a limited, non-exclusive, non-transferable, revocable licence to use TRYPS for personal, non-commercial trip planning purposes in accordance with these Terms.</p>
          </Section>

          {/* 8. Third-party services */}
          <Section id="third-party" title="8. Third-party services">
            <p>TRYPS integrates third-party services including Twilio (SMS) and Google Firebase (analytics and crash reporting). Your use of TRYPS is also subject to the relevant terms of those providers. We are not responsible for third-party service availability, accuracy, or practices.</p>
          </Section>

          {/* 9. Disclaimers */}
          <Section id="disclaimers" title="9. Disclaimers">
            <p>TRYPS is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            <p>We do not warrant that:</p>
            <Ul items={[
              "The service will be uninterrupted, error-free, or secure",
              "Any defects will be corrected",
              "The service or its infrastructure is free of viruses or harmful components",
            ]} />
            <p>TRYPS is a planning tool. We are not responsible for the outcome of any trip, booking, expense agreement, or arrangement made using the app.</p>
          </Section>

          {/* 10. Limitation of liability */}
          <Section id="liability" title="10. Limitation of liability">
            <p>To the maximum extent permitted by applicable law, TRYPS and its officers, directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, revenue, or goodwill, arising from your use of or inability to use the service.</p>
            <p>Our total liability to you for any claim arising under these Terms will not exceed the greater of (a) the amount you paid us in the 12 months preceding the claim, or (b) USD $100.</p>
            <p>Some jurisdictions do not allow certain limitations of liability. In those jurisdictions our liability is limited to the maximum extent permitted by law.</p>
          </Section>

          {/* 11. Indemnity */}
          <Section id="indemnity" title="11. Indemnity">
            <p>You agree to indemnify and hold harmless TRYPS and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of TRYPS, Your Content, or your violation of these Terms.</p>
          </Section>

          {/* 12. Termination */}
          <Section id="termination" title="12. Termination">
            <p>We may suspend or terminate your access to TRYPS at any time, with or without notice, if we believe you have violated these Terms or if required by law.</p>
            <p>You may stop using TRYPS and delete your account at any time (see Section 3). Termination does not affect any rights or obligations that arose before termination.</p>
          </Section>

          {/* 13. Changes to Terms */}
          <Section id="changes" title="13. Changes to these Terms">
            <p>We may update these Terms from time to time. When we make material changes we will notify you via the app or by SMS and update the "Last updated" date at the top of this page. Continued use of TRYPS after the effective date of changes constitutes acceptance of the updated Terms.</p>
          </Section>

          {/* 14. Governing law */}
          <Section id="governing-law" title="14. Governing law">
            <p>These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles. Any dispute arising under these Terms will be subject to the exclusive jurisdiction of the courts located in Delaware.</p>
          </Section>

          {/* 15. Contact */}
          <Section id="contact" title="15. Contact us">
            <p>For questions about these Terms:</p>
            <div className="bg-white rounded-xl border border-[#FECDD3]/60 px-5 py-4 mt-3 text-[15px]">
              <p className="font-bold text-[#1C0808] mb-1">TRYPS</p>
              <p>Email: <a href="mailto:support@trypsagent.com" className="text-[#9A0514] underline">support@trypsagent.com</a></p>
              <p>Website: <a href="https://trypsagent.com" className="text-[#9A0514] underline">trypsagent.com</a></p>
            </div>
          </Section>

          {/* Footer nav */}
          <div className="pt-6 border-t border-[#FECDD3]/60 flex flex-wrap gap-4 text-sm text-[#6B3030]">
            <a href="/privacy" className="hover:text-[#9A0514] transition-colors">Privacy Policy</a>
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
