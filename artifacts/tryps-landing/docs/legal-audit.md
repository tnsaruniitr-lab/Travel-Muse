# TRYPS Legal Document Audit
**Audited:** April 16, 2026  
**Documents:** `/privacy` · `/terms`  
**URLs:** https://trypsagent.com/privacy · https://trypsagent.com/terms  
**App stack:** iOS, phone-number auth, Twilio SMS, Firebase analytics/crashlytics, Google Tag Manager, user accounts with trip/expense/itinerary data  
**Frameworks checked:** Apple App Store Guidelines 5.1.1, GDPR (EU), CCPA (California), CAN-SPAM/TCPA (SMS), COPPA (children)

---

## STATUS SUMMARY

| Area | Privacy Policy | Terms of Service |
|---|---|---|
| Apple 5.1.1(v) account deletion | ✅ Pass | ✅ Pass |
| Apple permission disclosures | ✅ Pass | n/a |
| GDPR — data collection disclosure | ✅ Pass | n/a |
| GDPR — legal basis for processing | ❌ Missing | n/a |
| GDPR — international data transfers | ❌ Missing | n/a |
| GDPR — right to complain to supervisory authority | ❌ Missing | n/a |
| GDPR — data breach notification commitment | ❌ Missing | n/a |
| CCPA — California-specific rights | ❌ Missing | n/a |
| GTM / website tracking disclosure | ❌ Missing | n/a |
| Cookies & web tracking | ❌ Missing | n/a |
| Severability clause | n/a | ❌ Missing |
| Entire agreement clause | n/a | ❌ Missing |
| App Store / Play Store terms reference | n/a | ❌ Missing |
| DMCA / copyright infringement | n/a | ❌ Missing |
| Dispute resolution / arbitration | n/a | ⚠️ Weak |
| Physical mailing address | ❌ Missing | ❌ Missing |
| Paid features / billing terms | n/a | ⚠️ Not addressed |

---

## PRIVACY POLICY — DETAILED FINDINGS

### ❌ CRITICAL: GTM / website tracking not disclosed
**What's missing:** Google Tag Manager is installed on every page of trypsagent.com. GTM can load analytics, advertising, and remarketing tags. The privacy policy has no mention of GTM, cookies, localStorage, tracking pixels, or any web-based tracking technology.  
**Risk:** GDPR Art. 13 requires disclosure of all data collection including website tracking. Lack of disclosure is a violation.  
**Fix required:** Add a "Website tracking and cookies" section covering GTM, what it can load, and what data the website collects from visitors (distinct from app users).

---

### ❌ CRITICAL: No legal basis for processing (GDPR Art. 13(1)(c))
**What's missing:** The policy lists what data is collected and why, but never states the *legal basis* under GDPR for each processing activity.  
**Required bases to document:**
- Phone number + account → **Contract performance** (Art. 6(1)(b))
- Firebase analytics → **Legitimate interest** (Art. 6(1)(f)) or **Consent**
- GTM / marketing tags → **Consent** (Art. 6(1)(a))
- Legal compliance → **Legal obligation** (Art. 6(1)(c))  
**Risk:** GDPR enforcement; Irish DPC (where most US apps are regulated in EU) specifically checks for this.

---

### ❌ CRITICAL: No CCPA section (California Consumer Privacy Act)
**What's missing:** No California-specific rights section.  
**Required disclosures:**
- Right to know what personal information is collected, used, shared, or sold
- Right to delete (covered partially, but not labelled as CCPA right)
- Right to opt out of *sale* of personal information (even though you don't sell, must explicitly state this)
- Right to non-discrimination for exercising rights
- "Do Not Sell My Personal Information" — must be addressed even if answer is "we don't sell"  
**Risk:** CCPA applies to any business that collects personal data of California residents. Enforcement by California AG.

---

### ❌ IMPORTANT: No international data transfer disclosure (GDPR Art. 46)
**What's missing:** Data from EU/UK users is transferred to US-based servers (hosting provider), Twilio (US), and Google Firebase (US). GDPR requires disclosure of these transfers and the safeguard used (Standard Contractual Clauses, adequacy decision, etc.).  
**Fix required:** Add paragraph noting transfers to the US and that safeguards include SCCs or that providers are DPF-certified.

---

### ❌ IMPORTANT: No right to lodge complaint with supervisory authority (GDPR Art. 13(2)(d))
**What's missing:** GDPR requires explicitly informing EU users of their right to complain to their national data protection authority.  
**Fix required:** Add one sentence: "If you are in the EU or UK and believe we have breached data protection law, you have the right to lodge a complaint with your national supervisory authority."

---

### ❌ IMPORTANT: No data breach notification commitment
**What's missing:** GDPR (Art. 34) requires notifying affected users without undue delay if a breach is likely to result in high risk to their rights. The policy is silent on this.  
**Fix required:** Add one paragraph committing to notify users of material breaches in accordance with applicable law.

---

### ⚠️ MODERATE: Section 7 uses developer-facing iOS permission keys
**What's found:** Section 7 lists `NSContactsUsageDescription`, `NSLocationWhenInUseUsageDescription` etc. These are internal Apple plist keys — they mean nothing to a user or a regulator reviewing the policy.  
**Fix required:** Rewrite as plain-language descriptions. Keep the technical keys in the app's `Info.plist` only. (Fixed in updated page below.)

---

### ⚠️ MODERATE: "By using TRYPS you agree to this policy" — insufficient consent for GDPR
**What's found:** Consent by continued use is not valid under GDPR for analytics and optional tracking. Consent must be freely given, specific, informed, and unambiguous.  
**Fix required:** Change intro language to acknowledge that some processing (analytics, GTM) may require separate consent, and add a note that consent can be withdrawn at any time.

---

### ⚠️ MODERATE: No physical/mailing address
**What's missing:** COPPA (if ever collecting under-13 data), CAN-SPAM, and several state privacy laws require a physical address. GDPR requires contact details for the controller.  
**Fix required:** Add company address to the contact section of both documents. Can be a registered agent address.

---

### ⚠️ MODERATE: Waitlist retention is open-ended
**What's found:** "retained until you join or request deletion" — no maximum cap.  
**Fix required:** Add a maximum retention period (e.g., 24 months) after which waitlist data is purged automatically.

---

### ℹ️ LOW: No Data Protection Officer (DPO) named
**Context:** A DPO is only mandatory under GDPR if you engage in large-scale systematic monitoring or process sensitive categories of data. TRYPS likely does not meet this threshold, but naming a privacy contact beyond the generic email is good practice.

---

### ℹ️ LOW: No mention of Android permissions
**Context:** Section 7 is iOS-only. If TRYPS launches on Android, Android permission names are different (e.g., `READ_CONTACTS`, `ACCESS_FINE_LOCATION`). Update this section when Android ships.

---

## TERMS OF SERVICE — DETAILED FINDINGS

### ❌ IMPORTANT: No severability clause
**Risk:** If any clause is found unenforceable, the entire ToS could be voided in some jurisdictions.  
**Fix:** "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect."

---

### ❌ IMPORTANT: No entire agreement / integration clause
**Risk:** Without this, prior negotiations or representations could be argued to form part of the contract.  
**Fix:** "These Terms, together with the Privacy Policy, constitute the entire agreement between you and TRYPS regarding the service and supersede all prior agreements."

---

### ❌ IMPORTANT: No DMCA / copyright infringement contact
**What's missing:** Under the DMCA (17 U.S.C. § 512), if users can upload content (photos, notes), a designated agent must be registered with the US Copyright Office and named in the ToS.  
**Fix required:** Add a DMCA section naming a designated agent email (e.g., `dmca@trypsagent.com`) and the required takedown notice elements.

---

### ❌ IMPORTANT: No reference to Apple App Store / Google Play terms
**What's missing:** Apple and Google require that you acknowledge in your ToS that use of the app is also subject to their terms (especially for IAP, subscriptions, and refunds).  
**Fix required:** Add a clause noting that if the app is downloaded from the App Store or Google Play, the respective platform's terms also apply, and that Apple/Google are not parties to these Terms and bear no responsibility for the app.

---

### ⚠️ MODERATE: Paid features not addressed
**What's found:** The ToS has no billing, subscription, refund, or pricing section. If TRYPS adds paid features (premium plans), the absence of these terms creates a gap.  
**Fix required:** Add a clause stating the service is currently free, and that if paid features are introduced, separate pricing terms will apply and users will be notified before being charged.

---

### ⚠️ MODERATE: Dispute resolution is court-only with no arbitration
**What's found:** §14 goes straight to Delaware courts. Most US consumer apps include binding arbitration and a class action waiver to reduce litigation exposure.  
**Recommendation:** Consider adding an arbitration clause (AAA or JAMS rules) with a 60-day informal dispute resolution period before arbitration. This is a business decision — flag for legal counsel.

---

### ⚠️ MODERATE: No waiver clause
**Risk:** If TRYPS fails to enforce a term on one occasion, users could argue TRYPS has waived the right to enforce it in future.  
**Fix:** "Failure to enforce any provision of these Terms on one occasion will not be deemed a waiver of our right to enforce it in the future."

---

### ⚠️ MODERATE: No assignment clause
**What's missing:** If TRYPS is acquired or merges, can the agreement be transferred? Currently silent.  
**Fix:** "We may assign these Terms to a successor entity in the event of a merger, acquisition, or sale of all or substantially all of our assets. You may not assign your rights under these Terms without our written consent."

---

### ⚠️ MODERATE: Force majeure not addressed
**Fix:** Standard clause: "We will not be liable for any failure or delay in performance resulting from causes beyond our reasonable control, including acts of God, war, terrorism, pandemics, or internet outages."

---

### ℹ️ LOW: Age verification mechanism not described
**What's found:** §1 says "you confirm" you're 13+ — this is a self-certification. Acceptable for a general app but note that COPPA (US) prohibits actual collection of under-13 data; your 13+ minimum is correct, but you should describe any technical measures if you add them.

---

## ACTION CHECKLIST (priority order)

### Do immediately (before App Store submission)
- [ ] Add GTM / website tracking disclosure to Privacy Policy
- [ ] Add GDPR legal basis table to Privacy Policy
- [ ] Add CCPA section to Privacy Policy
- [ ] Add international data transfer paragraph to Privacy Policy
- [ ] Add right to complain to supervisory authority sentence
- [ ] Add data breach notification paragraph
- [ ] Add severability clause to ToS
- [ ] Add entire agreement clause to ToS
- [ ] Add Apple / Google Play terms reference to ToS
- [ ] Rewrite Section 7 of Privacy Policy in plain language (remove iOS plist keys)

### Do before any paid features launch
- [ ] Add DMCA designated agent section to ToS (register with US Copyright Office)
- [ ] Add billing / subscription / refund terms to ToS
- [ ] Add waiver clause to ToS
- [ ] Add assignment clause to ToS
- [ ] Add force majeure clause to ToS

### Consult legal counsel on
- [ ] Whether binding arbitration / class action waiver is appropriate for your user base
- [ ] Whether you need an EU representative under GDPR Art. 27
- [ ] Company mailing address to add to both documents
- [ ] Whether your Firebase / GTM usage requires a cookie consent banner in the EU (likely yes)
- [ ] Registering DMCA designated agent with US Copyright Office ($6 fee)

---

## NOTES FOR EXTERNAL REVIEWER

- All pages are **server-side rendered** — crawlers and regulators receive complete HTML with no JavaScript dependency
- Canonical URLs: `https://trypsagent.com/privacy` and `https://trypsagent.com/terms`
- Both pages are linked from the site footer on every page
- Privacy Policy is also linked from the Terms of Service (§8) and vice versa
- Account deletion path verified: Settings → Account → Delete Account (in-app) + email fallback within 30 days
- Third-party sub-processors documented in Privacy Policy §3 table: Twilio, Google Firebase, Hosting provider
- Apple permission strings used in the app (`Info.plist`) should match descriptions in Privacy Policy §7
- Google Tag Manager container ID: GTM-N48R7GWK (installed on all pages of trypsagent.com — must be disclosed)
