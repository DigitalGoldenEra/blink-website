import type { Metadata } from "next";
import DocShell from "../components/doc-shell";
import {
  ShieldCheck,
  Lock,
  FileText,
  Cookie,
  UserCheck,
  Mail,
  List,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import CookiePreferencesTrigger from "../components/cookie-preferences-trigger";

export const metadata: Metadata = {
  title: "Privacy Policy, Privacy Notice & Cookie Policy",
  description:
    "Read Blink Labs' comprehensive Privacy Policy, short-form Privacy Notice, and Cookie Policy in compliance with NDPA 2023, GAID 2025, and GDPR.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Blink Labs Privacy Policy & Cookie Policy",
    description:
      "Full Privacy Policy, Privacy Notice, and Cookie Policy for Blink - compliant with NDPA 2023, GAID 2025, and GDPR.",
    url: "https://useblinkapp.com/privacy",
    images: [{ url: "/blink-logo.png", alt: "Blink Privacy Policy" }],
  },
};

const partAItems = [
  { id: "a1", label: "A1. Introduction & Scope" },
  { id: "a2", label: "A2. Data Controller" },
  { id: "a3", label: "A3. Personal Data Collected" },
  { id: "a4", label: "A4. Sources of Data" },
  { id: "a5", label: "A5. Purposes & Lawful Basis" },
  { id: "a6", label: "A6. Automated Decisions" },
  { id: "a7", label: "A7. Data Sharing" },
  { id: "a8", label: "A8. Cross-Border Transfers" },
  { id: "a9", label: "A9. Data Subject Rights" },
  { id: "a10", label: "A10. Data Retention" },
  { id: "a11", label: "A11. Data Security" },
  { id: "a12", label: "A12. Breach Notification" },
  { id: "a13", label: "A13. Children's Privacy" },
  { id: "a14", label: "A14. Policy Changes" },
  { id: "a15", label: "A15. Contact DPO" },
];

const partBItems = [
  { id: "b1", label: "B1. Who We Are" },
  { id: "b2", label: "B2. Data At a Glance" },
  { id: "b3", label: "B3. Who We Share With" },
  { id: "b4", label: "B4. Data Locations" },
  { id: "b5", label: "B5. Retention Period" },
  { id: "b6", label: "B6. Your Rights in Brief" },
];

const partCItems = [
  { id: "c1", label: "C1. What Are Cookies" },
  { id: "c2", label: "C2. Types of Cookies" },
  { id: "c3", label: "C3. GAID Legal Basis" },
  { id: "c4", label: "C4. Banner & Consent" },
  { id: "c5", label: "C5. Third-Party Cookies" },
  { id: "c6", label: "C6. Browser Controls" },
  { id: "c7", label: "C7. Policy Updates" },
  { id: "c8", label: "C8. Contact Details" },
];

export default function PrivacyPolicy() {
  return (
    <DocShell
      eyebrow="Privacy & Data Protection"
      title={
        <>
          Privacy <span className="serif-italic">Policy</span>
        </>
      }
      intro={
        <>
          <span className="font-semibold text-black">
            BLINK LABS PRIVACY POLICY
          </span>
          <br />
          <span className="text-sm font-medium text-neutral-700">
            Including Privacy Notice and Cookie Policy
          </span>
          <br />
          <span className="text-xs text-neutral-500 mt-1 inline-block">
            Effective Date: 27th September, 2026 &bull; Last Updated: 14th September, 2026
          </span>
        </>
      }
      maxWidth="max-w-7xl"
    >
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
        {/* ── Left Sticky Column: Navigation Sidebar ── */}
        <aside className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-5 space-y-4 max-h-[calc(100vh-9rem)] overflow-y-auto">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
              <List className="h-4 w-4 text-black" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-black/80">
                Navigation
              </h2>
            </div>

            {/* Quick Overview Anchor */}
            <a
              href="#overview"
              className="group flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-semibold text-black hover:bg-neutral-200/70 transition-colors"
            >
              <span>Overview &amp; Scope</span>
              <ChevronRight className="h-3 w-3 text-neutral-400 group-hover:text-black shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Part A Section */}
            <div className="space-y-1">
              <div className="px-2.5 pt-1 text-[11px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <FileText className="h-3 w-3" />
                Part A: Privacy Policy
              </div>
              <div className="pl-1 space-y-0.5">
                {partAItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-1 px-2.5 rounded-md text-[11px] text-black/75 hover:text-black hover:bg-neutral-200/60 transition-colors truncate"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Part B Section */}
            <div className="space-y-1 pt-2 border-t border-neutral-200">
              <div className="px-2.5 text-[11px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <UserCheck className="h-3 w-3" />
                Part B: Privacy Notice
              </div>
              <div className="pl-1 space-y-0.5">
                {partBItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-1 px-2.5 rounded-md text-[11px] text-black/75 hover:text-black hover:bg-neutral-200/60 transition-colors truncate"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Part C Section */}
            <div className="space-y-1 pt-2 border-t border-neutral-200">
              <div className="px-2.5 text-[11px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <Cookie className="h-3 w-3" />
                Part C: Cookie Policy
              </div>
              <div className="pl-1 space-y-0.5">
                {partCItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-1 px-2.5 rounded-md text-[11px] text-black/75 hover:text-black hover:bg-neutral-200/60 transition-colors truncate"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Cookie Manager Trigger in Sidebar */}
            <div className="pt-3 border-t border-neutral-200 space-y-2">
              <CookiePreferencesTrigger
                label="Cookie Settings"
                className="w-full justify-center text-center inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
              />
            </div>
          </div>
        </aside>

        {/* ── Right Column: Document Content ── */}
        <div className="flex-1 min-w-0 space-y-12">
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                Overview
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              This document sets out, in three parts, how <strong className="text-black">Blink Labs</strong> (&ldquo;Blink,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and protects personal data in connection with the Blink website (<a href="https://useblinkapp.com" className="text-black underline font-medium hover:opacity-75">useblinkapp.com</a>), mobile application, and related services (the &ldquo;Platform&rdquo; or &ldquo;Services&rdquo;).
            </p>
            <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-5 space-y-3">
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                Blink is a non-custodial crypto payment infrastructure. It enables users (&ldquo;Users&rdquo; or &ldquo;Payers&rdquo;) to spend supported stablecoins (including USDC and USDT on selected networks) at nearby merchants via Bluetooth Low Energy proximity discovery. Merchants receive instant settlement in local currency.
              </p>
              <div className="rounded-xl bg-black text-white p-4 text-xs font-medium leading-relaxed">
                🔒 <strong>Non-Custodial Architecture:</strong> Private keys never leave the User&rsquo;s device. Blink does not hold, store, or control private keys or User crypto assets.
              </div>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-black/80 pl-1">
              <p><strong>Part A</strong> is our comprehensive Privacy Policy.</p>
              <p><strong>Part B</strong> is a concise Privacy Notice intended to give you an at-a-glance summary of our data practices at the point of data collection.</p>
              <p><strong>Part C</strong> is our Cookie Policy, governing cookies and similar tracking technologies used on the Platform.</p>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed bg-neutral-100 p-4 rounded-xl">
              Together, these documents are designed to comply with the <strong>Nigeria Data Protection Act 2023 (&ldquo;NDPA&rdquo;)</strong>, the Nigeria Data Protection Commission&rsquo;s <strong>General Application and Implementation Directive 2025 (&ldquo;GAID&rdquo;)</strong>, and, in respect of Users located in the European Union / European Economic Area, the <strong>EU General Data Protection Regulation (&ldquo;GDPR&rdquo;)</strong>. Where a conflict arises between these Parts, the more specific provision addressing the subject matter shall prevail, and the more protective standard for the data subject shall apply where the NDPA/GAID and GDPR diverge.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* ========================================================================= */}
          {/* PART A: FULL PRIVACY POLICY */}
          {/* ========================================================================= */}
          <section id="part-a" className="scroll-mt-28 space-y-8">
            <div className="rounded-2xl bg-black text-white p-5 sm:p-7 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Part A</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">Privacy Policy</h2>
              </div>
              <ShieldCheck className="h-8 w-8 text-white/80 shrink-0" />
            </div>

            {/* A1 */}
            <div id="a1" className="scroll-mt-28 space-y-2.5">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A1. Introduction and Scope</h3>
              <p className="text-sm leading-relaxed text-black/80">
                This Privacy Policy applies to all personal data processed by Blink in connection with your use of the Platform, whether you are a prospective User, a registered User (Payer or Merchant), or a visitor to our website. It applies regardless of the device or channel you use to access the Platform. Blink is committed to processing personal data lawfully, fairly, and transparently, in accordance with the NDPA, the GAID, and, where applicable to Users located in the EU/EEA, the GDPR.
              </p>
            </div>

            {/* A2 */}
            <div id="a2" className="scroll-mt-28 space-y-2.5">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A2. Who We Are — Data Controller Information</h3>
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs sm:text-sm text-black/80">
                <p>
                  <strong className="text-black">Blink Labs Ltd</strong>, with its registered office at <strong>P1 road, Shagari Lowcost, Barnawa, Kaduna, Nigeria</strong>, is the data controller responsible for your personal data in connection with the Platform.
                </p>
                <p>
                  Where Blink processes personal data of Users located in the EU/EEA and is required to appoint an EU representative under Article 27 GDPR, details of that representative will be published on the Platform.
                </p>
                <p>
                  Our Data Protection Officer (&ldquo;DPO&rdquo;), appointed in accordance with the NDPA and the GAID (as required for Data Controllers of Major Importance, including fintechs), can be contacted using the details in Section A15 below.
                </p>
              </div>
            </div>

            {/* A3 */}
            <div id="a3" className="scroll-mt-28 space-y-3.5">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A3. Personal Data We Collect</h3>
              <p className="text-sm leading-relaxed text-black/80">
                We collect the following categories of personal data, depending on your interaction with the Platform:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="block text-black font-semibold mb-1">Identity Data</strong>
                  <p className="text-black/80 leading-relaxed">
                    Full name, date of birth, nationality, government-issued ID number and copies (NIN, BVN, passport or driver&rsquo;s licence), selfie for liveness verification, and proof of address.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="block text-black font-semibold mb-1">Contact Data</strong>
                  <p className="text-black/80 leading-relaxed">
                    Email address, phone number, residential or business address.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="block text-black font-semibold mb-1">Account Data</strong>
                  <p className="text-black/80 leading-relaxed">
                    Username, hashed credentials, account preferences, and security settings.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="block text-black font-semibold mb-1">Financial &amp; Settlement Data</strong>
                  <p className="text-black/80 leading-relaxed">
                    Merchant bank account/settlement details, transaction amounts, timestamps, stablecoin/network used, status, on-chain references. <strong className="text-black">We never collect or store private keys.</strong>
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="block text-black font-semibold mb-1">KYC/AML Compliance Data</strong>
                  <p className="text-black/80 leading-relaxed">
                    Identity verification results, sanctions screening, risk-scoring, PEP status, and Travel Rule data.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="block text-black font-semibold mb-1">Technical &amp; Device Data</strong>
                  <p className="text-black/80 leading-relaxed">
                    IP address, device identifiers, device type, OS, app version, session data, and crash logs.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="block text-black font-semibold mb-1">Bluetooth Proximity Data</strong>
                  <p className="text-black/80 leading-relaxed">
                    Short-range Bluetooth Low Energy signals to locate and connect with nearby Merchant terminals. Transient and purpose-limited.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="block text-black font-semibold mb-1">Biometric Confirmation Data</strong>
                  <p className="text-black/80 leading-relaxed">
                    Authentication occurs locally on your device. We receive only a success or failure confirmation signal.
                  </p>
                </div>
              </div>
            </div>

            {/* A4 */}
            <div id="a4" className="scroll-mt-28 space-y-2.5">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A4. Sources of Personal Data</h3>
              <p className="text-sm leading-relaxed text-black/80">
                We obtain personal data from the following sources:
              </p>
              <ul className="space-y-2 pl-1 text-xs sm:text-sm text-black/80">
                {[
                  "Directly from you, when you register, complete KYC, initiate or confirm a Bluetooth payment, contact support, or otherwise interact with the Platform;",
                  "Automatically, through your use of the website and App (device, technical, Bluetooth proximity, and log data — see Part C);",
                  "From third parties, including identity verification providers, sanctions-screening providers, blockchain analytics providers, banking and settlement partners, and counterparty virtual asset service providers exchanging Travel Rule data;",
                  "From publicly available sources, including public blockchain records once a transaction is confirmed on-chain.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* A5 */}
            <div id="a5" className="scroll-mt-28 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A5. How and Why We Use Your Personal Data</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                {[
                  { purpose: "Registering and administering your Account", basis: "Performance of a contract" },
                  { purpose: "Verifying your identity (KYC) and performing due diligence", basis: "Legal obligation; contract" },
                  { purpose: "Facilitating Bluetooth payments and on-chain routing", basis: "Performance of a contract" },
                  { purpose: "Effecting merchant local-currency settlement", basis: "Performance of a contract; legal obligation" },
                  { purpose: "Complying with AML/CFT/CPF and Travel Rule laws", basis: "Legal obligation" },
                  { purpose: "Detecting and preventing fraud and security incidents", basis: "Legal obligation; legitimate interests" },
                  { purpose: "Providing customer support and responding to enquiries", basis: "Performance of a contract; legitimate interests" },
                  { purpose: "Platform analytics and product development", basis: "Legitimate interests; consent (cookies)" },
                  { purpose: "Sending service communications", basis: "Performance of a contract; legal obligation" },
                  { purpose: "Sending marketing communications", basis: "Consent (opt-in)" },
                  { purpose: "Regulatory audits and requests from authorities", basis: "Legal obligation" },
                  { purpose: "Establishing, exercising, or defending legal claims", basis: "Legitimate interests; legal obligation" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-semibold text-black">{item.purpose}</span>
                    <span className="text-[11px] text-neutral-600 bg-neutral-200/70 px-2 py-0.5 rounded-md w-fit">{item.basis}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* A6 */}
            <div id="a6" className="scroll-mt-28 space-y-2.5">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A6. Automated Decision-Making and Profiling</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                We may use automated tools, including rules-based systems and risk-scoring models, to support sanctions screening, fraud detection, and transaction risk assessment. Where a decision produces legal or similarly significant effects and is based solely on automated processing, you have the right to request human review, to express your point of view, and to contest the decision.
              </p>
            </div>

            {/* A7 */}
            <div id="a7" className="scroll-mt-28 space-y-2.5">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A7. How We Share Your Personal Data</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                We may disclose personal data to regulators (NDPC, SEC, CBN), banking/settlement partners, counterparty VASPs for Travel Rule compliance, identity verification providers, cloud infrastructure vendors, professional advisers, and successor entities. <strong className="text-black">We do not sell your personal data.</strong>
              </p>
            </div>

            {/* A8 */}
            <div id="a8" className="scroll-mt-28 space-y-2.5">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A8. Cross-Border Data Transfers</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                Where personal data is transferred outside Nigeria or the EU/EEA, we ensure adequate safeguards comparable to NDPA, GAID, and GDPR standards, including standard contractual clauses and recognized statutory transfer mechanisms.
              </p>
            </div>

            {/* A9 */}
            <div id="a9" className="scroll-mt-28 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A9. Your Data Subject Rights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                {[
                  { title: "Right of Access", desc: "Confirmation and copy of processed personal data." },
                  { title: "Right to Rectification", desc: "Correction of inaccurate or incomplete data." },
                  { title: "Right to Erasure", desc: "('Right to be forgotten'), subject to legal retention." },
                  { title: "Right to Restriction", desc: "Restriction of processing in specific legal cases." },
                  { title: "Right to Portability", desc: "Structured, machine-readable data transfer." },
                  { title: "Right to Object / Withdraw", desc: "Object to direct marketing or withdraw consent." },
                ].map((r, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-semibold text-black block mb-0.5">{r.title}</span>
                    <span className="text-xs text-neutral-600">{r.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* A10 to A14 */}
            <div id="a10" className="scroll-mt-28 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A10. Data Retention</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                KYC and transaction records are generally retained for a minimum of five (5) to seven (7) years following relationship termination in accordance with Nigerian AML/CFT and tax regulations (e.g. Nigeria Tax Administration Act 2025). Bluetooth session data is transient and deleted immediately following payment completion.
              </p>
            </div>

            <div id="a11" className="scroll-mt-28 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A11. Data Security</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                We employ encryption in transit and at rest, strict access controls, and regular audits. Because Blink is non-custodial, private keys remain exclusively secured on your local device.
              </p>
            </div>

            <div id="a12" className="scroll-mt-28 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A12. Data Breach Notification</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                In the event of a personal data breach, we will notify the NDPC within 72 hours and inform affected users directly without undue delay where high risk is present.
              </p>
            </div>

            <div id="a13" className="scroll-mt-28 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A13. Children&rsquo;s Privacy</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                The Platform is strictly for individuals aged 18 and older. We do not knowingly collect personal data from minors.
              </p>
            </div>

            <div id="a14" className="scroll-mt-28 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A14. Changes to This Privacy Policy</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                Material updates will be notified via the Platform or email before their effective date.
              </p>
            </div>

            {/* A15 */}
            <div id="a15" className="scroll-mt-28 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-black">A15. Contact Us / Data Protection Officer</h3>
              <div className="p-5 sm:p-6 rounded-2xl bg-black text-white space-y-2.5">
                <h4 className="font-semibold text-sm sm:text-base text-white">Office of the Data Protection Officer</h4>
                <div className="space-y-1 text-xs text-white/80">
                  <p><strong className="text-white">Business Name:</strong> Blink Labs Ltd</p>
                  <p><strong className="text-white">Email:</strong> <a href="mailto:infodesk@useblinkapp.com" className="text-white underline">infodesk@useblinkapp.com</a></p>
                  <p><strong className="text-white">Address:</strong> P1 road, After Ebglad School, Shagari Lowcost, Barnawa, Kaduna, Nigeria.</p>
                </div>
                <p className="text-[11px] text-white/70 pt-2 border-t border-white/15">
                  Complaints may also be lodged with the Nigeria Data Protection Commission (NDPC) at <a href="https://www.ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-white underline">www.ndpc.gov.ng</a>.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* ========================================================================= */}
          {/* PART B: PRIVACY NOTICE */}
          {/* ========================================================================= */}
          <section id="part-b" className="scroll-mt-28 space-y-6">
            <div className="rounded-2xl bg-neutral-900 text-white p-5 sm:p-7 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Part B</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">Privacy Notice</h2>
                <p className="text-xs text-white/70 mt-1">Short-form summary at collection point</p>
              </div>
              <UserCheck className="h-8 w-8 text-white/80 shrink-0" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div id="b1" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-0.5">B1. Who We Are</strong>
                <p className="text-black/80">Blink Labs Ltd is the data controller. Registered office in Kaduna, Nigeria.</p>
              </div>

              <div id="b2" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <strong className="block text-black font-semibold">B2. At a Glance: What We Collect and Why</strong>
                <ul className="space-y-1.5 text-xs text-black/80">
                  <li>&bull; <strong>Identity &amp; KYC:</strong> Account opening and legal compliance.</li>
                  <li>&bull; <strong>Transaction &amp; Settlement:</strong> Bluetooth proximity payments and local fiat settlement.</li>
                  <li>&bull; <strong>Travel Rule Data:</strong> VASP regulatory requirement.</li>
                  <li>&bull; <strong>Device &amp; Telemetry:</strong> Security, fraud prevention, and service stability.</li>
                </ul>
                <div className="rounded-lg bg-black text-white p-2.5 text-[11px]">
                  <strong>Non-Custodial:</strong> Private keys and biometric verification never leave your device.
                </div>
              </div>

              <div id="b3" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-0.5">B3. Who We Share It With</strong>
                <p className="text-black/80">Regulators, settlement banks, identity providers, and cloud hosts. No sale of personal data.</p>
              </div>

              <div id="b4" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-0.5">B4. Where Your Data May Go</strong>
                <p className="text-black/80">Primarily stored in Nigeria with NDPA/GDPR safeguards for international cloud providers.</p>
              </div>

              <div id="b5" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-0.5">B5. How Long We Keep It</strong>
                <p className="text-black/80">5 to 7 years for compliance records; transient Bluetooth data is erased after each payment.</p>
              </div>

              <div id="b6" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-0.5">B6. Your Rights in Brief</strong>
                <p className="text-black/80">Access, rectify, erase, restrict, port, or withdraw consent at any time free of charge.</p>
              </div>
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* ========================================================================= */}
          {/* PART C: COOKIE POLICY */}
          {/* ========================================================================= */}
          <section id="part-c" className="scroll-mt-28 space-y-6">
            <div className="rounded-2xl bg-neutral-900 text-white p-5 sm:p-7 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Part C</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">Cookie Policy</h2>
                <p className="text-xs text-white/70 mt-1">GAID Article 19 &amp; GDPR Compliant</p>
              </div>
              <Cookie className="h-8 w-8 text-white/80 shrink-0" />
            </div>

            <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold text-black text-xs sm:text-sm">Manage Your Cookie Settings</h3>
                <p className="text-[11px] text-neutral-600">Update your preferences or revoke consent anytime.</p>
              </div>
              <CookiePreferencesTrigger label="Cookie Settings" />
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div id="c1" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">C1. What Are Cookies</strong>
                <p className="text-black/80 leading-relaxed">
                  Small text files placed on your device to recognize equipment, remember settings, and optimize platform usage.
                </p>
              </div>

              <div id="c2" className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <strong className="block text-black font-semibold">C2. Types of Cookies We Use</strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-lg bg-white border border-neutral-200">
                    <strong className="text-black block mb-0.5">Strictly Necessary (Always Active)</strong>
                    <span className="text-neutral-600">Core security, session tokens, and stability. Exempt from consent.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-neutral-200">
                    <strong className="text-black block mb-0.5">Functional (Consent Required)</strong>
                    <span className="text-neutral-600">Display and preference customization.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-neutral-200">
                    <strong className="text-black block mb-0.5">Analytics (Consent Required)</strong>
                    <span className="text-neutral-600">Anonymized telemetry and performance insights.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-neutral-200">
                    <strong className="text-black block mb-0.5">Marketing (Consent Required)</strong>
                    <span className="text-neutral-600">Product announcements and campaign reach.</span>
                  </div>
                </div>
              </div>

              <div id="c3" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">C3. GAID Legal Basis</strong>
                <p className="text-black/80 leading-relaxed">
                  Under GAID Article 19, we obtain prior freely given opt-in consent for all non-essential cookies.
                </p>
              </div>

              <div id="c4" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">C4. The Cookie Banner and Choices</strong>
                <p className="text-black/80 leading-relaxed">
                  Clear banners allow users to accept, reject, or customize cookie preferences without pre-ticked boxes.
                </p>
              </div>

              <div id="c5" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">C5. Third-Party Cookies</strong>
                <p className="text-black/80 leading-relaxed">
                  Set by approved infrastructure vendors under strict data processing agreements.
                </p>
              </div>

              <div id="c6" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">C6. Browser &amp; OS Controls</strong>
                <p className="text-black/80 leading-relaxed">
                  Browser settings can block cookies; Bluetooth permissions are managed in mobile OS settings.
                </p>
              </div>

              <div id="c7" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">C7. Policy Changes</strong>
                <p className="text-black/80 leading-relaxed">
                  Updates will be notified on the platform with renewed consent requests where required.
                </p>
              </div>

              <div id="c8" className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">C8. Contact Details</strong>
                <p className="text-black/80 leading-relaxed">
                  Contact our DPO at <a href="mailto:infodesk@useblinkapp.com" className="text-black underline font-semibold">infodesk@useblinkapp.com</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom DPO Card */}
          <div className="rounded-2xl bg-neutral-900 text-white p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 border border-neutral-800">
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Data Protection Officer</h3>
              <p className="text-xs text-white/70 mt-1">P1 road, After Ebglad School, Shagari Lowcost, Barnawa, Kaduna, Nigeria.</p>
            </div>
            <a
              href="mailto:infodesk@useblinkapp.com?subject=Privacy%20Inquiry"
              className="shrink-0 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Email DPO
            </a>
          </div>
        </div>
      </div>
    </DocShell>
  );
}
