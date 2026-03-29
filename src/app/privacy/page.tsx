import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 bg-zinc-50">
        <Navbar />
      </div>
      
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 text-sm mb-12">Last Updated: March 29, 2026</p>

        <div className="prose prose-zinc max-w-none">
          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Introduction</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Blink ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Information We Collect</h2>
            
            <h3 className="font-heading text-xl font-semibold text-black mb-3 mt-6">Information You Provide</h3>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-6">
              <li><strong className="text-black">Contact Information:</strong> Name and email address when you contact us through our website or app</li>
              <li><strong className="text-black">Communication Data:</strong> Messages and inquiries you send to our support team</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-black mb-3">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-6">
              <li><strong className="text-black">Device Information:</strong> Device type, operating system version, unique device identifiers</li>
              <li><strong className="text-black">Usage Data:</strong> App features accessed, transaction timestamps (not transaction details), app performance metrics</li>
              <li><strong className="text-black">Bluetooth Data:</strong> Bluetooth connection metadata for Tap-to-Pay functionality (no personal data transmitted)</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-black mb-3">Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li><strong className="text-black">Wallet Keys:</strong> Your private keys remain on your device and are never transmitted to our servers</li>
              <li><strong className="text-black">Transaction Details:</strong> We do not store or access your transaction history, amounts, or recipient information</li>
              <li><strong className="text-black">Biometric Data:</strong> Biometric authentication is handled locally on your device; we never receive or store this data</li>
              <li><strong className="text-black">Financial Information:</strong> We do not collect bank account details, credit card numbers, or other financial credentials</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">How We Use Your Information</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>Provide and maintain the Blink app functionality</li>
              <li>Process and respond to your inquiries and support requests</li>
              <li>Improve app performance, security, and user experience</li>
              <li>Detect and prevent technical issues or fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Non-Custodial Architecture</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">Blink is a non-custodial wallet. This means:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>You maintain full control of your cryptocurrency assets</li>
              <li>Your private keys are stored locally on your device using secure enclave technology</li>
              <li>We cannot access, freeze, or control your funds</li>
              <li>You are solely responsible for backing up and securing your wallet recovery phrase</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Data Sharing and Disclosure</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li><strong className="text-black">Service Providers:</strong> Third-party vendors who assist with app infrastructure (hosting, analytics) under strict confidentiality agreements</li>
              <li><strong className="text-black">Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong className="text-black">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (users will be notified)</li>
              <li><strong className="text-black">With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Blockchain Transactions</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">When you make payments using Blink:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>Transactions are recorded on public blockchain networks</li>
              <li>Blockchain data is publicly accessible and permanent</li>
              <li>We do not control or have the ability to delete blockchain records</li>
              <li>Transaction privacy depends on the blockchain protocol used</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Data Security</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">We implement industry-standard security measures:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>End-to-end encryption for sensitive communications</li>
              <li>Secure local storage for wallet keys using device security features</li>
              <li>Regular security audits and updates</li>
              <li>Limited data retention policies</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              However, no method of transmission or storage is 100% secure. You are responsible for maintaining the security of your device and wallet recovery information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Third-Party Services</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">Blink may integrate with:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li><strong className="text-black">Blockchain Networks:</strong> For transaction processing and settlement</li>
              <li><strong className="text-black">Analytics Services:</strong> For app performance monitoring (anonymized data only)</li>
              <li><strong className="text-black">Communication Tools:</strong> For customer support</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              These third parties have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Children's Privacy</h2>
            <p className="text-zinc-600 leading-relaxed">
              Blink is not intended for users under 18 years of age. We do not knowingly collect information from children. If you believe we have collected information from a minor, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">International Data Transfers</h2>
            <p className="text-zinc-600 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Your Rights</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              To exercise these rights, contact us at [email].
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Data Retention</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">We retain personal information only as long as necessary to:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              Contact form submissions are typically deleted within 90 days after resolution.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Changes to This Privacy Policy</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">We may update this Privacy Policy periodically. We will notify you of material changes by:</p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>Posting the updated policy with a new "Last Updated" date</li>
              <li>Sending an in-app notification or email (for significant changes)</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              Continued use of Blink after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul className="list-none pl-0 text-zinc-600 space-y-2">
              <li><strong className="text-black">Email:</strong> [email]</li>
              <li><strong className="text-black">Website:</strong> [website]</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">Jurisdiction-Specific Provisions</h2>
            
            <h3 className="font-heading text-xl font-semibold text-black mb-3 mt-6">For California Residents (CCPA)</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              California residents have additional rights under the California Consumer Privacy Act, including the right to know what personal information is collected and the right to opt-out of sale of personal information. We do not sell personal information.
            </p>

            <h3 className="font-heading text-xl font-semibold text-black mb-3">For EU/UK Residents (GDPR)</h3>
            <p className="text-zinc-600 leading-relaxed">
              EU and UK residents have rights under the General Data Protection Regulation, including the right to access, rectification, erasure, and data portability. Our lawful basis for processing is typically consent or legitimate interests in providing our services.
            </p>
          </section>

          <div className="border-t border-zinc-200 pt-8 mt-12">
            <p className="text-zinc-500 text-center italic">
              By using Blink, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
