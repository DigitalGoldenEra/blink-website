import DocShell from "../components/doc-shell";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Server,
  Globe,
  Mail,
  Link2,
  FileText,
  Clock,
  RefreshCw,
  Info,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <DocShell
      eyebrow="Legal"
      title={
        <>
          Privacy <span className="serif-italic">Policy</span>
        </>
      }
      intro="Last updated: March 29, 2026"
    >
      <div className="space-y-12">
        {/* Quick Jump Table of Contents */}
        <div className="rounded-3xl bg-[#F6E4CF]/50 p-6 md:p-8 border border-[#D9C4AA]/40">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#321C04]/60 mb-4 flex items-center gap-2">
            <Info className="h-4 w-4 text-[#321C04]/85" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {[
              { label: "1. Introduction", href: "#intro" },
              { label: "2. Information We Collect", href: "#collect" },
              { label: "3. How We Use Information", href: "#use" },
              { label: "4. Non-Custodial Architecture", href: "#custody" },
              { label: "5. Data Sharing & Disclosure", href: "#sharing" },
              { label: "6. Blockchain Transactions", href: "#blockchain" },
              { label: "7. Data Security", href: "#security" },
              { label: "8. Third-Party Services", href: "#third-party" },
              { label: "9. Children's Privacy", href: "#children" },
              { label: "10. International Transfers", href: "#transfers" },
              { label: "11. Your Rights & Retention", href: "#rights" },
              { label: "12. Changes to Policy", href: "#changes" },
              { label: "13. Regional Provisions (GDPR/CCPA)", href: "#regions" },
              { label: "14. Contact Us", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#321C04]/80 hover:text-[#321C04] hover:underline transition-all flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#321C04]/40" />
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <section id="intro" className="scroll-mt-24 space-y-4">
          <p className="text-base md:text-lg leading-relaxed text-[#321C04]/80">
            Blink (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
            committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you use
            our mobile application and services.
          </p>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Information We Collect */}
        <section id="collect" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              1. Information We Collect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Information You Provide */}
            <div className="bg-[#FFF9F2] border border-[#D9C4AA]/55 p-6 rounded-3xl space-y-4">
              <h3 className="text-lg font-semibold text-[#321C04] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#321C04] text-xs font-bold text-white">
                  A
                </span>
                Information You Provide
              </h3>
              <ul className="space-y-3 text-sm text-[#321C04]/80">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]/40" />
                  <span>
                    <strong className="text-[#321C04]">Contact Information:</strong> Name and email address when you contact us through our website or app.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]/40" />
                  <span>
                    <strong className="text-[#321C04]">Communication Data:</strong> Messages and inquiries you send to our support team.
                  </span>
                </li>
              </ul>
            </div>

            {/* Automatically Collected */}
            <div className="bg-[#FFF9F2] border border-[#D9C4AA]/55 p-6 rounded-3xl space-y-4">
              <h3 className="text-lg font-semibold text-[#321C04] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#321C04] text-xs font-bold text-white">
                  B
                </span>
                Information Collected Automatically
              </h3>
              <ul className="space-y-3 text-sm text-[#321C04]/80">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]/40" />
                  <span>
                    <strong className="text-[#321C04]">Device Information:</strong> Device type, operating system version, unique device identifiers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]/40" />
                  <span>
                    <strong className="text-[#321C04]">Usage Data:</strong> App features accessed, transaction timestamps (not transaction details), app performance metrics.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]/40" />
                  <span>
                    <strong className="text-[#321C04]">Bluetooth Data:</strong> Bluetooth connection metadata for Tap-to-Pay functionality (no personal data transmitted).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Privacy Guarantee Block: What We Do NOT Collect */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 md:p-8 space-y-4">
            <h3 className="text-lg font-semibold text-emerald-950 flex items-center gap-2.5">
              <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" strokeWidth={2} />
              What We Do NOT Collect (Our Privacy Guarantees)
            </h3>
            <p className="text-xs text-emerald-900/70">
              As a privacy-focused decentralized payments tool, we strictly enforce zero-knowledge boundaries on sensitive items:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-emerald-900/80">
              <div className="bg-white/60 border border-emerald-100 p-4 rounded-2xl">
                <p className="font-semibold text-sm text-emerald-950 mb-1">Wallet Keys</p>
                <p className="text-xs leading-relaxed">
                  Your private keys remain exclusively on your device and are never transmitted to or stored on our servers.
                </p>
              </div>
              <div className="bg-white/60 border border-emerald-100 p-4 rounded-2xl">
                <p className="font-semibold text-sm text-emerald-950 mb-1">Transaction Details</p>
                <p className="text-xs leading-relaxed">
                  We do not store or access your transaction history, amounts, or recipient information.
                </p>
              </div>
              <div className="bg-white/60 border border-emerald-100 p-4 rounded-2xl">
                <p className="font-semibold text-sm text-emerald-950 mb-1">Biometric Data</p>
                <p className="text-xs leading-relaxed">
                  Biometric authentication is handled locally on your device; we never receive or access this data.
                </p>
              </div>
              <div className="bg-white/60 border border-emerald-100 p-4 rounded-2xl">
                <p className="font-semibold text-sm text-emerald-950 mb-1">Financial Information</p>
                <p className="text-xs leading-relaxed">
                  We do not collect bank account details, credit card numbers, or other financial credentials.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* How We Use Your Information */}
        <section id="use" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              2. How We Use Your Information
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#321C04]/80">
            We use the information we collect to provide and enhance our services. Specifically, this includes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Provide and maintain the Blink app functionality",
              "Process and respond to your inquiries and support requests",
              "Improve app performance, security, and user experience",
              "Detect and prevent technical issues or fraudulent activity",
              "Comply with legal obligations",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl border border-[#D9C4AA]/25 bg-[#FFF9F2]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D9C4AA]/40 text-xs font-bold text-[#321C04]">
                  {idx + 1}
                </span>
                <span className="text-sm font-medium text-[#321C04]/90 leading-snug">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Non-Custodial Architecture */}
        <section id="custody" className="scroll-mt-24">
          <div className="rounded-3xl bg-[#321C04] p-6 md:p-8 text-white space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF9F2]/10 border border-[#FFF9F2]/15">
                <Lock className="h-5 w-5 text-[#FFF9F2]" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">3. Non-Custodial Architecture</h3>
                <p className="text-xs text-[#FFF9F2]/70 mt-0.5">Absolute user ownership</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#FFF9F2]/80">
              Blink is built on a non-custodial architecture. This means you maintain full control and sovereignty of your cryptocurrency assets:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FFF9F2]/5 border border-[#FFF9F2]/10">
                <h4 className="font-semibold text-sm mb-1 text-[#FFF9F2]">Full Control</h4>
                <p className="text-xs text-[#FFF9F2]/70 leading-relaxed">
                  We cannot access, freeze, recover, or control your funds. You remain the sole owner.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFF9F2]/5 border border-[#FFF9F2]/10">
                <h4 className="font-semibold text-sm mb-1 text-[#FFF9F2]">Secure Storage</h4>
                <p className="text-xs text-[#FFF9F2]/70 leading-relaxed">
                  Your private keys are stored locally on your device using Secure Enclave technologies.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#FFF9F2]/15 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-200/90">
              💡 <strong>Important Security Note:</strong> Because we do not hold your keys, you are solely responsible for backing up your recovery phrase. If you lose your recovery phrase, Blink cannot assist you in recovering access to your wallet.
            </div>
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Data Sharing and Disclosure */}
        <section id="sharing" className="scroll-mt-24 space-y-4">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              4. Data Sharing & Disclosure
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#321C04]/80">
            We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Service Providers",
                desc: "Third-party vendors who assist with app infrastructure (hosting, anonymized performance metrics, etc.) under strict confidentiality agreements.",
              },
              {
                title: "Legal Requirements",
                desc: "When required to do so by applicable law, court order, or official government regulation.",
              },
              {
                title: "Business Transfers",
                desc: "In connection with a merger, acquisition, or sale of assets, in which case users will be notified.",
              },
              {
                title: "With Your Consent",
                desc: "When you explicitly authorize us to share specific details.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF9F2] border border-[#D9C4AA]/30"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#321C04]/10 text-xs font-bold text-[#321C04]">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#321C04]">{item.title}</h4>
                  <p className="text-xs text-[#321C04]/75 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Blockchain Transactions */}
        <section id="blockchain" className="scroll-mt-24 space-y-4">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              5. Blockchain Transactions
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#321C04]/80">
            When you perform payments or settle transactions using Blink, the details are permanently logged:
          </p>
          <div className="rounded-3xl bg-[#F6E4CF]/40 border border-[#D9C4AA]/45 p-6 space-y-3">
            <ul className="space-y-2.5 text-xs text-[#321C04]/80">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]" />
                <span>Transactions are recorded on public decentralized ledger networks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]" />
                <span>Blockchain records are transparent, public, and immutable.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]" />
                <span>We do not control, modify, or have the ability to delete blockchain records.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#321C04]" />
                <span>Transaction privacy relies on the properties of the respective blockchain protocols.</span>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Data Security */}
        <section id="security" className="scroll-mt-24 space-y-5">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              6. Data Security
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#321C04]/80">
            We implement robust, industry-standard security practices to protect your details:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex gap-3 items-start">
              <Lock className="h-5 w-5 text-[#321C04] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-[#321C04]">End-to-End Encryption</h4>
                <p className="text-xs text-[#321C04]/70 leading-relaxed">
                  Applied to all data transfers and server sync pipelines.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Server className="h-5 w-5 text-[#321C04] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-[#321C04]">Secure Enclave Keys</h4>
                <p className="text-xs text-[#321C04]/70 leading-relaxed">
                  Keys are isolated within secure hardware components on-device.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <ShieldCheck className="h-5 w-5 text-[#321C04] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-[#321C04]">Vulnerability Auditing</h4>
                <p className="text-xs text-[#321C04]/70 leading-relaxed">
                  Periodic security reviews and continuous threat mitigation.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <EyeOff className="h-5 w-5 text-[#321C04] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-[#321C04]">Minimized Data Retention</h4>
                <p className="text-xs text-[#321C04]/70 leading-relaxed">
                  No tracking log files are maintained beyond active resolution.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#321C04]/60 italic bg-[#FFF9F2] p-4 rounded-2xl border border-[#D9C4AA]/30">
            ⚠️ <strong>Security Disclaimer:</strong> While we establish tight parameters, no connection method is completely secure. You hold ultimate accountability for safeguarding your device passcode and recovery phrase.
          </p>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Third-Party Services */}
        <section id="third-party" className="scroll-mt-24 space-y-4">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              7. Third-Party Services
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#321C04]/80">
            Blink may integrate or link with third-party service components:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Blockchain Networks", desc: "For transaction broadcasting and final settlement verification." },
              { title: "Analytics Engines", desc: "For server logging and runtime performance reports (anonymized)." },
              { title: "Support Channels", desc: "For parsing support emails and user feedback messages." },
            ].map((el, idx) => (
              <div key={idx} className="bg-[#FFF9F2] border border-[#D9C4AA]/40 p-5 rounded-2xl space-y-1">
                <h4 className="font-semibold text-xs text-[#321C04] uppercase tracking-wider flex items-center gap-1.5">
                  <ExternalLink className="h-3.5 w-3.5 text-[#321C04]/60" />
                  {el.title}
                </h4>
                <p className="text-xs text-[#321C04]/70 leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#321C04]/70">
            These external platforms operate under distinct privacy frameworks. We strongly recommend reading their respective statements.
          </p>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Children's Privacy */}
        <section id="children" className="scroll-mt-24 space-y-4">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              8. Children&apos;s Privacy
            </h2>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 flex items-start gap-4">
            <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed text-[#321C04]/80">
              Blink is not designed for individuals under the age of 18. We do not intentionally compile or maintain records for minors. If you discover a child has transmitted any personal identifiers to us, please notify support immediately.
            </p>
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* International Transfers */}
        <section id="transfers" className="scroll-mt-24 space-y-4">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              9. International Data Transfers
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#321C04]/80">
            Collected analytics or support information may be stored, hosted, or analyzed across jurisdictions other than your native country of residence. We ensure that appropriate security frameworks and compliance mechanisms are maintained to protect your data under this policy.
          </p>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Your Rights & Data Retention */}
        <section id="rights" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              10. Your Rights & Data Retention
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Rights */}
            <div className="bg-[#FFF9F2] border border-[#D9C4AA]/50 p-6 rounded-3xl space-y-3">
              <h3 className="font-semibold text-[#321C04] flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#321C04]" />
                Your Privacy Rights
              </h3>
              <p className="text-xs text-[#321C04]/70 leading-relaxed mb-2">
                Depending on your country of residence, you may have the following legal capacities:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-[#321C04]/90">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#321C04]" />
                  Access details
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#321C04]" />
                  Request edits
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#321C04]" />
                  Delete details
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#321C04]" />
                  Object to use
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#321C04]" />
                  Portability
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#321C04]" />
                  Revoke consent
                </li>
              </ul>
              <p className="text-xs text-[#321C04]/70 mt-4 leading-relaxed pt-2 border-t border-[#321C04]/10">
                To submit a query regarding these rights, email us at:{" "}
                <a href="mailto:admin@useblinkapp.com" className="text-[#321C04] font-semibold underline">
                  admin@useblinkapp.com
                </a>
              </p>
            </div>

            {/* Retention Policies */}
            <div className="bg-[#FFF9F2] border border-[#D9C4AA]/50 p-6 rounded-3xl space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-[#321C04] flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#321C04]" />
                  Data Retention Limit
                </h3>
                <p className="text-xs text-[#321C04]/75 leading-relaxed mt-2">
                  We process and retain personal identifiers (such as support emails) strictly for the duration required to:
                </p>
                <ul className="list-disc pl-5 mt-2 text-xs text-[#321C04]/70 space-y-1">
                  <li>Render requested service operations.</li>
                  <li>Verify compliance with legal requirements.</li>
                  <li>Resolve active support disputes.</li>
                </ul>
              </div>
              <p className="text-xs text-[#321C04]/60 italic mt-4 pt-2 border-t border-[#321C04]/10">
                * Note: Support contact form transmissions are routinely expunged within 90 days of complete ticket resolution.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Changes to this Policy */}
        <section id="changes" className="scroll-mt-24 space-y-4">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              11. Changes to This Privacy Policy
            </h2>
          </div>
          <div className="flex gap-4 items-start bg-[#FFF9F2] border border-[#D9C4AA]/40 p-5 rounded-2xl">
            <RefreshCw className="h-5 w-5 text-[#321C04] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-[#321C04]/80">
                We reserve the right to revise this Privacy Policy. If revisions occur, we will adjust the date header and distribute updates through:
              </p>
              <ul className="list-disc pl-5 text-xs text-[#321C04]/75 space-y-1">
                <li>Adjusting the &ldquo;Last Updated&rdquo; timestamp at the top of the policy page.</li>
                <li>Transmitting an in-app notice or notification where applicable.</li>
              </ul>
              <p className="text-xs text-[#321C04]/60 italic pt-1">
                Your continued utilization of Blink post-update constitutes approval of the modified statement.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Jurisdiction-Specific Provisions */}
        <section id="regions" className="scroll-mt-24 space-y-5">
          <div className="border-b border-[#321C04]/15 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              12. Jurisdiction-Specific Provisions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-3xl bg-[#FFF9F2] border border-[#D9C4AA]/40 space-y-2">
              <h3 className="font-semibold text-sm text-[#321C04] flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#321C04]" strokeWidth={2.2} />
                California Residents (CCPA)
              </h3>
              <p className="text-xs leading-relaxed text-[#321C04]/75">
                California residents possess distinct rights under the California Consumer Privacy Act (CCPA). This includes the right to request access to compiled categories of personal data, as well as opting out of any sale of details. <strong>We do not sell personal details.</strong>
              </p>
            </div>
            <div className="p-5 rounded-3xl bg-[#FFF9F2] border border-[#D9C4AA]/40 space-y-2">
              <h3 className="font-semibold text-sm text-[#321C04] flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#321C04]" strokeWidth={2.2} />
                EU & UK Residents (GDPR)
              </h3>
              <p className="text-xs leading-relaxed text-[#321C04]/75">
                EU and UK residents have precise rights under the General Data Protection Regulation (GDPR) and UK Data Protection Act. This includes requesting access, correction, erasure, and portability of personal data. Processing is conducted under user consent or legitimate interest frameworks.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[#321C04]/10" />

        {/* Contact Us */}
        <section id="contact" className="scroll-mt-24 text-center space-y-6">
          <div className="border-b border-[#321C04]/15 pb-4 text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-[#321C04] md:text-3xl">
              13. Contact Us
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#321C04]/80">
            If you have questions about this Privacy Policy or wish to submit feedback regarding our data processing methods, contact us at:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href="mailto:admin@useblinkapp.com"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#321C04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/90 shadow-sm"
            >
              <Mail className="h-4 w-4" />
              admin@useblinkapp.com
            </a>
            <a
              href="https://useblinkapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#D9C4AA]/40 px-6 py-4 text-sm font-semibold text-[#321C04] transition hover:bg-[#D9C4AA]/60"
            >
              <Link2 className="h-4 w-4" />
              useblinkapp.com
            </a>
          </div>
        </section>

        {/* Bottom Banner */}
        <div className="mt-16 border-t border-[#321C04]/10 pt-8 text-center">
          <p className="italic text-xs text-[#321C04]/50 leading-relaxed max-w-md mx-auto">
            By using Blink, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </DocShell>
  );
}
