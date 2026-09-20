import type { Metadata } from "next";
import DocShell from "../components/doc-shell";
import {
  ShieldCheck,
  Lock,
  Radio,
  Building2,
  AlertTriangle,
  CreditCard,
  Ban,
  Info,
  List,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use (Terms of Service)",
  description:
    "Review Blink Labs Ltd's Terms of Use governing your access to the Blink website, mobile application, Bluetooth crypto payment infrastructure, and local currency settlement services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Blink Labs Ltd Terms of Use",
    description:
      "Terms of Use and Service for Blink - Non-custodial crypto payment infrastructure with Bluetooth Low Energy proximity discovery and local currency settlement.",
    url: "https://useblinkapp.com/terms",
    images: [{ url: "/blink-logo.png", alt: "Blink Terms of Use" }],
  },
};

const sections = [
  { id: "intro", num: "1", title: "Introduction & Acceptance" },
  { id: "definitions", num: "2", title: "Definitions" },
  { id: "eligibility", num: "3", title: "Eligibility" },
  { id: "services", num: "4", title: "Description of the Services" },
  { id: "kyc-aml", num: "5", title: "Account Registration, KYC & AML" },
  { id: "license", num: "6", title: "License to Use the Platform" },
  { id: "obligations", num: "7", title: "User Obligations & Conduct" },
  { id: "fees", num: "8", title: "Fees and Charges" },
  { id: "blockchain-risk", num: "9", title: "Blockchain Risk & Settlement" },
  { id: "ip", num: "10", title: "Intellectual Property" },
  { id: "privacy", num: "11", title: "Privacy" },
  { id: "disclaimers", num: "12", title: "Disclaimers" },
  { id: "liability", num: "13", title: "Limitation of Liability" },
  { id: "indemnity", num: "14", title: "Indemnity" },
  { id: "suspension", num: "15", title: "Suspension & Termination" },
  { id: "links", num: "16", title: "Links to Other Websites" },
  { id: "security", num: "17", title: "Security" },
  { id: "misuse", num: "18", title: "Reporting Misuse" },
  { id: "governing-law", num: "19", title: "Governing Law & Disputes" },
  { id: "general", num: "20", title: "General Provisions" },
];

export default function TermsOfService() {
  return (
    <DocShell
      eyebrow="Legal Agreement"
      title={
        <>
          Terms of <span className="serif-italic">Use</span>
        </>
      }
      intro={
        <>
          <span className="font-semibold text-black">BLINK LABS LTD TERMS OF USE (Terms of Service)</span>
          <br />
          <span className="text-xs text-neutral-500 mt-1 inline-block">
            Effective Date: 27th September, 2026 &bull; Last Updated: 14th September, 2026
          </span>
        </>
      }
      maxWidth="max-w-7xl"
    >
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
        {/* ── Left Sticky Column: Table of Contents ── */}
        <aside className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-5 space-y-4 max-h-[calc(100vh-9rem)] overflow-y-auto">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
              <List className="h-4 w-4 text-black" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-black/80">
                Table of Contents
              </h2>
            </div>

            <nav className="space-y-1">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-medium text-black/70 hover:text-black hover:bg-neutral-200/70 transition-colors"
                >
                  <span className="truncate pr-2">
                    <span className="text-neutral-400 font-normal mr-1.5">{item.num}.</span>
                    {item.title}
                  </span>
                  <ChevronRight className="h-3 w-3 text-neutral-400 group-hover:text-black shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-neutral-200">
              <div className="rounded-xl bg-black text-white p-3.5 space-y-1.5">
                <p className="text-[11px] font-semibold">Questions about our Terms?</p>
                <p className="text-[10px] text-white/70 leading-relaxed">
                  Our compliance team is here to assist you.
                </p>
                <a
                  href="mailto:infodesk@useblinkapp.com"
                  className="inline-flex items-center gap-1 text-[11px] text-white underline font-medium pt-1"
                >
                  <Mail className="h-3 w-3" />
                  infodesk@useblinkapp.com
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Right Column: Terms Content ── */}
        <div className="flex-1 min-w-0 space-y-12">
          {/* Highlight Callout: Non-Custodial Architecture */}
          <div className="rounded-2xl bg-black text-white p-6 sm:p-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/20">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Non-Custodial Architecture Summary</h3>
                <p className="text-xs text-white/70">You retain exclusive sovereignty of your private keys</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-white/80">
              Blink provides non-custodial cryptocurrency payment infrastructure. Private keys never leave your device.
              Blink does not hold, store, control, or have unilateral access to your private keys or digital assets. Confirmation of payments occurs locally on your device via biometrics, face scan, or transaction PIN.
            </p>
          </div>

          {/* Section 1 */}
          <section id="intro" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                1. Introduction and Acceptance
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and <strong className="text-black">Blink Labs Ltd</strong> (&ldquo;Blink,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to and use of the Blink website (<a href="https://useblinkapp.com" className="text-black underline font-medium hover:opacity-75">useblinkapp.com</a>), mobile application, and all related products and services (collectively, the &ldquo;Platform&rdquo; or &ldquo;Services&rdquo;).
            </p>
            <div className="rounded-2xl border-2 border-black bg-neutral-50 p-4 sm:p-5 text-xs sm:text-sm font-medium uppercase tracking-wide leading-relaxed text-black">
              BY ACCESSING, DOWNLOADING, INSTALLING, REGISTERING FOR, OR OTHERWISE USING THE PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS, INCLUDING OUR PRIVACY POLICY AND ANY OTHER POLICIES INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE PLATFORM.
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              We may amend these Terms from time to time. Material changes will be notified through the Platform, by email, or other reasonable means. Your continued use of the Platform after the effective date of any amendment constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 2 */}
          <section id="definitions" className="scroll-mt-28 space-y-5">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                2. Definitions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">Account</strong>
                <span className="text-black/80 leading-relaxed">The unique profile created by a User to access the Platform.</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">App</strong>
                <span className="text-black/80 leading-relaxed">The Blink mobile application available on supported iOS and Android devices.</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">Bluetooth Payment</strong>
                <span className="text-black/80 leading-relaxed">A payment initiated and completed through short-range Bluetooth Low Energy proximity discovery between a Payer&rsquo;s device and a Merchant&rsquo;s device or terminal.</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">Digital Asset / Supported Stablecoin</strong>
                <span className="text-black/80 leading-relaxed">Any virtual asset, cryptocurrency, or stablecoin supported on the Platform from time to time, including (without limitation) USDC on Stellar, Solana and Base, and USDT on Tron, as displayed within the App.</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">Merchant</strong>
                <span className="text-black/80 leading-relaxed">A User who accepts payments through the Platform and receives local-currency settlement.</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">Payer</strong>
                <span className="text-black/80 leading-relaxed">A User who initiates a payment of Supported Stablecoins through the Platform.</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">Platform / Services</strong>
                <span className="text-black/80 leading-relaxed">The website, App, Bluetooth payment infrastructure, on-chain routing, merchant local-currency settlement functionality, and any related features made available by Blink.</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">User / you</strong>
                <span className="text-black/80 leading-relaxed">Any individual or entity that accesses or uses the Platform, whether as Payer, Merchant, or otherwise.</span>
              </div>
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 3 */}
          <section id="eligibility" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                3. Eligibility
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              To use the Platform you must:
            </p>
            <ul className="space-y-2.5 pl-1 text-xs sm:text-sm text-black/80">
              {[
                "be at least 18 years of age, or the age of legal majority in your jurisdiction, whichever is higher;",
                "have full legal capacity to enter into binding contracts;",
                "not be a resident of, or located in, a jurisdiction where the Services are prohibited or restricted by applicable law;",
                "not be listed on any sanctions list maintained by the United Nations, the European Union, the United Kingdom, the United States (including OFAC), or any other competent authority; and",
                "provide accurate, current, and complete information during registration and throughout your use of the Platform.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-black/80 mt-2">
              We reserve the right to refuse registration, suspend, or terminate any Account at our sole discretion where eligibility requirements are not met or are reasonably believed not to be met.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 4 */}
          <section id="services" className="scroll-mt-28 space-y-5">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                4. Description of the Services
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              Blink provides non-custodial crypto payment infrastructure that enables Users to spend Supported Stablecoins at nearby Merchants via Bluetooth Low Energy proximity discovery and to withdraw Supported Stablecoins to their local bank accounts. Merchants receive settlement in local currency. Blink routes the underlying on-chain transfer and facilitates the conversion and settlement process.
            </p>

            <div className="space-y-3.5">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <h3 className="font-semibold text-sm text-black flex items-center gap-2">
                  <Lock className="h-4 w-4 text-black" />
                  4.1 Non-Custodial Architecture
                </h3>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  Blink is non-custodial by design. You retain exclusive control of your private keys and Digital Assets. Private keys never leave your device. Blink does not hold, store, control, or have unilateral access to your private keys or the Digital Assets in your wallet in the ordinary course of operations. Confirmation of each payment or withdrawal occurs locally on your device through any one of the following methods: biometric authentication, face scan, or transaction PIN. We receive only a success or failure confirmation signal.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <h3 className="font-semibold text-sm text-black flex items-center gap-2">
                  <Radio className="h-4 w-4 text-black" />
                  4.2 Bluetooth Payments to Merchants
                </h3>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  A Merchant generates a payment request within the App. Blink broadcasts a short, time-limited, single-use payment code over Bluetooth Low Energy. The Payer discovers nearby Merchants, selects the relevant request, reviews the amount, and confirms the payment using biometric authentication, face scan, or transaction PIN. Once confirmed, the Supported Stablecoin is transferred on-chain according to the network rules of the relevant blockchain, and the Merchant receives the corresponding local-currency settlement (subject to network confirmation, settlement partner processing times, and applicable fees).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <h3 className="font-semibold text-sm text-black flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-black" />
                  4.3 Withdrawals to Local Bank Accounts
                </h3>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  In addition to Merchant payments, Users may withdraw Supported Stablecoins from their non-custodial wallet to a designated local bank account. Upon confirmation of the withdrawal instruction (via biometric authentication, face scan, or transaction PIN), Blink routes the on-chain transfer and facilitates conversion into local currency for credit to the User&rsquo;s nominated bank account, subject to network confirmation, banking cut-off times, settlement partner processing, and applicable fees. Blink does not guarantee any specific exchange rate or settlement time. Displayed rates are indicative until the transaction is confirmed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <h3 className="font-semibold text-sm text-black flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-black" />
                  4.4 Merchant Local-Currency Settlement
                </h3>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  Blink facilitates the conversion of the received Supported Stablecoin into local currency and the subsequent settlement to the Merchant&rsquo;s designated bank account or other supported settlement rail. Settlement timing depends on blockchain confirmation, banking cut-off times, and the performance of third-party settlement partners. Blink does not guarantee instantaneous settlement or any particular exchange rate.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <h3 className="font-semibold text-sm text-black">
                  4.5 Geographic Scope and Future Expansion
                </h3>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  The Services are currently available in the jurisdictions displayed within the App. Blink intends to expand the availability of the Services to additional countries over time. When the Services are launched in a new jurisdiction, additional terms, eligibility requirements, supported currencies, settlement rails, and regulatory conditions applicable to that jurisdiction may apply and will be communicated through the Platform. Your continued use of the Services in any expanded jurisdiction constitutes acceptance of any jurisdiction-specific terms then in effect.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <h3 className="font-semibold text-sm text-black">
                  4.6 Future Deposit Functionality and Virtual Accounts
                </h3>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  At present, Blink does not accept fiat deposits. In the future, Blink may introduce functionality that allows Users to deposit fiat currency into a virtual account maintained in connection with the Platform. Any such deposits would be held in the User&rsquo;s virtual account and would be subject to separate terms, disclosures, and regulatory requirements that will be published before the feature is made available. The introduction of virtual-account deposit functionality will not alter the non-custodial nature of Users&rsquo; Digital Asset wallets: private keys will continue to remain under the exclusive control of the User on their device.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <h3 className="font-semibold text-sm text-black">
                  4.7 No Banking or Deposit-Taking Relationship (Current State)
                </h3>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  Blink is not a bank and does not currently accept deposits. Digital Assets held in your non-custodial wallet are not deposits and are not insured by the Nigeria Deposit Insurance Corporation (NDIC) or any equivalent scheme. Blink does not issue its own proprietary stablecoin. Any future virtual-account deposit feature will be clearly distinguished from the non-custodial Digital Asset functionality and will be governed by additional terms.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 5 */}
          <section id="kyc-aml" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                5. Account Registration, KYC and AML Compliance
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              To use certain features of the Platform you must register for an Account and provide accurate, current, and complete information, including identity verification (Know Your Customer, &ldquo;KYC&rdquo;) documentation as we may require from time to time.
            </p>
            <p className="text-sm leading-relaxed text-black/80">
              Blink operates in compliance with applicable anti-money laundering (AML), countering the financing of terrorism (CFT), and counter-proliferation financing (CPF) laws and regulations, including customer due diligence, enhanced due diligence for higher-risk customers, sanctions screening, and transaction monitoring obligations.
            </p>
            <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4 text-xs sm:text-sm text-black/80 space-y-1.5">
              <strong className="block text-black font-semibold">Travel Rule Compliance</strong>
              <p className="leading-relaxed">
                Where required by applicable law, including rules issued by the Securities and Exchange Commission, the Central Bank of Nigeria, or any other competent regulator, Blink will collect, verify, retain, and where applicable transmit originator and beneficiary information in connection with Digital Asset transfers (the &ldquo;Travel Rule&rdquo;). By using the Platform to send or receive Digital Assets, you consent to this collection, verification, retention, and transmission of information, including to counterparty service providers and regulators as required.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              You authorize Blink to perform identity verification, sanctions screening, and any other due diligence checks it deems necessary, directly or through third-party service providers, at any time during your relationship with Blink.
            </p>
            <p className="text-sm leading-relaxed text-black/80">
              You are solely responsible for maintaining the security of any device used to access the Platform and for all activity that occurs under your Account, whether or not authorized by you, except to the extent caused by Blink&rsquo;s gross negligence or willful misconduct.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 6 */}
          <section id="license" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                6. License to Use the Platform
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              Subject to your compliance with these Terms, Blink grants you a limited, non-exclusive, non-transferable, revocable license to access and use the website and App solely for your personal or internal business use, in accordance with these Terms. This license does not include any right to:
            </p>
            <ul className="space-y-2 pl-1 text-xs sm:text-sm text-black/80">
              {[
                "(a) resell or make commercial use of the Platform beyond ordinary Merchant acceptance of payments;",
                "(b) copy, reproduce, distribute, or create derivative works of any part of the Platform;",
                "(c) reverse engineer, decompile, or disassemble any part of the Platform; or",
                "(d) use any automated means to access the Platform without our prior written consent.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 7 */}
          <section id="obligations" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                7. User Obligations and Prohibited Conduct
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              You agree not to, and not to permit any third party to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {[
                "use the Platform for any unlawful purpose, including money laundering, terrorist financing, fraud, sanctions evasion, or any activity that violates applicable law;",
                "provide false, inaccurate, or misleading information during registration or KYC verification;",
                "attempt to gain unauthorized access to any part of the Platform, other Users' Accounts, or Blink's systems;",
                "interfere with or disrupt the integrity or performance of the Platform, including through introduction of malware, denial-of-service attacks, or similar conduct;",
                "use the Platform to transact in Digital Assets connected to illicit activity, sanctioned persons or jurisdictions, or prohibited goods or services;",
                "circumvent, disable, or otherwise interfere with any security-related feature of the Platform;",
                "use automated scripting tools, bots, or similar software to access or interact with the Platform without prior written consent;",
                "copy, mirror, reproduce, translate, adapt, vary, modify, sell, decipher, or decompile any part of the Platform without our express prior written consent;",
                "use the Platform if you are located in, or are a resident of, a jurisdiction subject to comprehensive sanctions.",
              ].map((text, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
                  <Ban className="h-4 w-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span className="text-black/80 leading-snug">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-black/80 mt-1">
              A breach of this Section constitutes a material breach of these Terms and may result in immediate suspension or termination of your Account, forfeiture of access, and reporting to competent authorities where required by law.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 8 */}
          <section id="fees" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                8. Fees and Charges
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              Blink may charge fees for use of certain Services, including transaction fees, conversion spreads, and settlement fees, as set out in the applicable fee schedule made available on the Platform or within the App. Fees are subject to change at Blink&rsquo;s discretion upon reasonable notice. Continued use of the Platform after such notice constitutes acceptance of the revised fees.
            </p>
            <p className="text-sm leading-relaxed text-black/80">
              You are solely responsible for any applicable taxes arising from your use of the Platform. Blink makes no representation regarding your tax obligations.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 9 */}
          <section id="blockchain-risk" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                9. Transactions, Blockchain Risk and Settlement
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              Once a payment is confirmed by the Payer and submitted to the relevant blockchain network, it is generally irreversible. Blockchain networks operate independently of Blink. Network congestion, forks, consensus failures, smart-contract risks, or other technical events outside our control may delay, fail, or alter the outcome of a transaction.
            </p>
            <div className="rounded-xl bg-neutral-900 text-white p-4 sm:p-5 space-y-2 border border-neutral-800">
              <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                Inherent Blockchain Technology Risks
              </div>
              <p className="text-xs leading-relaxed text-white/80">
                You acknowledge and accept the inherent risks of using blockchain technology, including the risk of loss of Digital Assets through user error (for example, incorrect confirmation, lost device, or compromised biometric settings), network failure, or third-party attacks.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              Merchant local-currency settlement is subject to the successful on-chain receipt of the Supported Stablecoin, the prevailing conversion rate at the time of conversion, banking and payment-rail cut-off times, and the performance of third-party settlement partners. Blink does not guarantee instantaneous settlement or any particular exchange rate.
            </p>
            <p className="text-sm leading-relaxed text-black/80">
              You warrant that all transaction instructions you submit are accurate and that you have the legal right to authorize the relevant transactions. You are solely responsible for any loss resulting from errors in your transaction instructions.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 10 */}
          <section id="ip" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                10. Intellectual Property
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              We retain ownership of the Platform and all materials on the Platform (including text, graphics, logos, design, icons, images, software, and any other content) (&ldquo;Platform Content&rdquo;) and reserve all rights in any intellectual property rights owned or licensed by us that are not expressly granted to you.
            </p>
            <p className="text-sm leading-relaxed text-black/80">
              You may make a temporary electronic copy of all or part of the website for the sole purpose of viewing it. You must not otherwise reproduce, transmit, adapt, distribute, sell, modify, or publish the Platform or any Platform Content without prior written consent from us or as permitted by law.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 11 */}
          <section id="privacy" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                11. Privacy
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              You agree to be bound by our <Link href="/privacy" className="text-black font-semibold underline underline-offset-2">Privacy Policy</Link>, which is incorporated into these Terms by reference and is available on the Platform. By using the Platform you consent to the processing described in the Privacy Policy and warrant that all data provided by you is accurate.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 12 */}
          <section id="disclaimers" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                12. Disclaimers
              </h2>
            </div>
            <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-4 sm:p-5 text-xs sm:text-sm font-medium uppercase tracking-wide leading-relaxed text-black/90">
              THE PLATFORM AND SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BLINK DISCLAIMS ALL WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              We do not guarantee that the Platform will be uninterrupted, error-free, free from harmful components, or available at any particular time or location. We do not guarantee the accuracy, authenticity, timeliness, reliability, or completeness of any information or content made available through the Platform. You acknowledge that all risks associated with the use of or reliance on any information or functionality accessed through the Services are your responsibility.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 13 */}
          <section id="liability" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                13. Limitation of Liability
              </h2>
            </div>
            <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-4 sm:p-5 text-xs sm:text-sm font-medium uppercase tracking-wide leading-relaxed text-black/90 space-y-2.5">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BLINK AND ITS OFFICERS, DIRECTORS, EMPLOYEES, PARTNERS, AND SERVICE PROVIDERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, INCLUDING LOSS OF PROFITS, DATA, GOODWILL, DIGITAL ASSETS, OR BUSINESS OPPORTUNITY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                BLINK&rsquo;S TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO BLINK IN THE THREE (3) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR ONE HUNDRED THOUSAND NAIRA (&#8358;100,000), WHICHEVER IS HIGHER.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              Nothing in these Terms limits liability for fraud, gross negligence, willful misconduct, death or personal injury resulting from negligence, or any liability that cannot be excluded or limited by applicable law.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 14 */}
          <section id="indemnity" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                14. Indemnity
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              You agree to indemnify, defend, and hold harmless Blink, its affiliates, officers, directors, employees, consultants, agents, and partners from and against any and all third-party claims, liability, damages, penalties, fines, costs, and expenses (including reasonable legal fees) arising from: (a) your breach of these Terms or any applicable law; (b) your use of the Platform; (c) any third-party claim arising from your transactions; or (d) your violation of any third party&rsquo;s rights.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 15 */}
          <section id="suspension" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                15. Suspension and Termination
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              Blink may suspend or terminate your Account and access to the Services at any time, with or without notice, where: (a) you breach these Terms; (b) we are required to do so by law or regulatory directive; (c) we suspect fraudulent, illegal, or unauthorized activity; or (d) continued provision of the Services creates legal, regulatory, or reputational risk for Blink.
            </p>
            <p className="text-sm leading-relaxed text-black/80">
              You may close your Account at any time by contacting us through the channels provided on the Platform. Regulatory retention obligations continue to apply following Account closure. Because Blink is non-custodial, closure of your Account does not affect Digital Assets that remain under your exclusive control on your device or on the relevant blockchain.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 16 */}
          <section id="links" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                16. Links to Other Websites
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              The Platform may contain links to third-party websites or services that are not under our control. We have no responsibility for the content, privacy practices, or terms of any linked third-party site. Inclusion of any link does not imply endorsement. Your use of third-party sites is at your own risk and subject to the terms and policies of those sites.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 17 */}
          <section id="security" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                17. Security
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              You are responsible for securing your device, biometric settings, operating-system permissions (including Bluetooth), and any credentials associated with your Account. We do not accept responsibility for loss or damage to computer systems, mobile devices, or other electronic equipment arising from your use of the Platform, except to the extent caused by our gross negligence or willful misconduct. You should take your own precautions to ensure that the process you employ for accessing the Platform does not expose you to risk of viruses, malicious code, or other forms of interference.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 18 */}
          <section id="misuse" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                18. Reporting Misuse
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/80">
              If you become aware of misuse of the Platform by any person, any errors in material on the Platform, or any difficulty in accessing or using the Platform, please contact us immediately using the contact details provided on the Platform or at <a href="mailto:infodesk@useblinkapp.com" className="text-black font-semibold underline">infodesk@useblinkapp.com</a>.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 19 */}
          <section id="governing-law" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                19. Governing Law and Dispute Resolution
              </h2>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2.5 text-xs sm:text-sm text-black/80">
              <p className="leading-relaxed">
                These Terms and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the laws of the <strong className="text-black">Federal Republic of Nigeria</strong>.
              </p>
              <p className="leading-relaxed">
                In the event of a dispute, the parties shall first attempt to resolve the matter through good-faith negotiation for a period of fifteen (15) business days following written notice of the dispute. If the dispute remains unresolved, either party may refer the matter to mediation under the rules of a mutually agreed mediator or mediation centre in Nigeria.
              </p>
              <p className="leading-relaxed">
                Subject to the foregoing, the courts of Nigeria shall have exclusive jurisdiction to settle any dispute arising out of or in connection with these Terms. Nothing in this clause prevents either party from seeking urgent injunctive or interim relief from a court of competent jurisdiction.
              </p>
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* Section 20 */}
          <section id="general" className="scroll-mt-28 space-y-5">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                20. General Provisions
              </h2>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">20.1 Entire Agreement</strong>
                <p className="text-black/80 leading-relaxed">
                  These Terms, together with the Privacy Policy and any other policies incorporated by reference, constitute the entire agreement between you and Blink with respect to the subject matter and supersede all prior negotiations, representations, or agreements relating to that subject matter.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">20.2 Severability</strong>
                <p className="text-black/80 leading-relaxed">
                  If any provision of these Terms is held to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it valid and enforceable, or if modification is not possible, severed from these Terms. The remaining provisions shall continue in full force and effect.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">20.3 Waiver</strong>
                <p className="text-black/80 leading-relaxed">
                  No failure or delay by Blink in exercising any right under these Terms shall constitute a waiver of that right. Any waiver must be in writing and signed by the party granting the waiver to be effective.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">20.4 Assignment</strong>
                <p className="text-black/80 leading-relaxed">
                  You may not assign, novate, or transfer any of your rights or obligations under these Terms without our prior written consent. We may assign or transfer our rights and obligations under these Terms without restriction.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">20.5 Third-Party Rights</strong>
                <p className="text-black/80 leading-relaxed">
                  Except as expressly provided, nothing in these Terms confers any right on any third party to enforce any term of these Terms.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">20.6 Force Majeure</strong>
                <p className="text-black/80 leading-relaxed">
                  Blink shall not be liable for any failure or delay in performing its obligations under these Terms where such failure or delay results from circumstances beyond its reasonable control, including acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemic, strikes, or shortages of transportation, facilities, fuel, energy, labour, or materials, or failures of public or private telecommunications networks or blockchain networks.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <strong className="block text-black font-semibold mb-1">20.7 Contact</strong>
                <p className="text-black/80 leading-relaxed">
                  If you have any questions or concerns about the Platform or these Terms, please contact us through the channels provided on the Platform or at{" "}
                  <a href="mailto:infodesk@useblinkapp.com" className="text-black font-semibold underline">
                    infodesk@useblinkapp.com
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Contact card */}
          <div className="rounded-2xl bg-neutral-900 text-white p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 border border-neutral-800">
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Have questions regarding our Terms?</h3>
              <p className="text-xs text-white/70 mt-1">Our compliance and support desk is available to assist you.</p>
            </div>
            <a
              href="mailto:infodesk@useblinkapp.com?subject=Terms%20of%20Use%20Inquiry"
              className="shrink-0 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Contact Desk
            </a>
          </div>
        </div>
      </div>
    </DocShell>
  );
}
