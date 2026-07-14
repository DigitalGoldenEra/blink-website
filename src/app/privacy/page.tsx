import DocShell from "../components/doc-shell";

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
      <div className="doc-prose">
        <section>
          <h2>Introduction</h2>
          <p>
            Blink (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
            committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you use
            our mobile application and services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>
              <strong>Contact Information:</strong> Name and email address when
              you contact us through our website or app
            </li>
            <li>
              <strong>Communication Data:</strong> Messages and inquiries you send
              to our support team
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Device Information:</strong> Device type, operating system
              version, unique device identifiers
            </li>
            <li>
              <strong>Usage Data:</strong> App features accessed, transaction
              timestamps (not transaction details), app performance metrics
            </li>
            <li>
              <strong>Bluetooth Data:</strong> Bluetooth connection metadata for
              Tap-to-Pay functionality (no personal data transmitted)
            </li>
          </ul>

          <h3>Information We Do NOT Collect</h3>
          <ul>
            <li>
              <strong>Wallet Keys:</strong> Your private keys remain on your
              device and are never transmitted to our servers
            </li>
            <li>
              <strong>Transaction Details:</strong> We do not store or access your
              transaction history, amounts, or recipient information
            </li>
            <li>
              <strong>Biometric Data:</strong> Biometric authentication is handled
              locally on your device; we never receive or store this data
            </li>
            <li>
              <strong>Financial Information:</strong> We do not collect bank
              account details, credit card numbers, or other financial credentials
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and maintain the Blink app functionality</li>
            <li>Process and respond to your inquiries and support requests</li>
            <li>Improve app performance, security, and user experience</li>
            <li>Detect and prevent technical issues or fraudulent activity</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>Non-Custodial Architecture</h2>
          <p>Blink is a non-custodial wallet. This means:</p>
          <ul>
            <li>You maintain full control of your cryptocurrency assets</li>
            <li>
              Your private keys are stored locally on your device using secure
              enclave technology
            </li>
            <li>We cannot access, freeze, or control your funds</li>
            <li>
              You are solely responsible for backing up and securing your wallet
              recovery phrase
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information. We may share
            information only in these limited circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist
              with app infrastructure (hosting, analytics) under strict
              confidentiality agreements
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or government regulation
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets (users will be notified)
            </li>
            <li>
              <strong>With Your Consent:</strong> When you explicitly authorize us
              to share specific information
            </li>
          </ul>
        </section>

        <section>
          <h2>Blockchain Transactions</h2>
          <p>When you make payments using Blink:</p>
          <ul>
            <li>Transactions are recorded on public blockchain networks</li>
            <li>Blockchain data is publicly accessible and permanent</li>
            <li>We do not control or have the ability to delete blockchain records</li>
            <li>Transaction privacy depends on the blockchain protocol used</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>We implement industry-standard security measures:</p>
          <ul>
            <li>End-to-end encryption for sensitive communications</li>
            <li>Secure local storage for wallet keys using device security features</li>
            <li>Regular security audits and updates</li>
            <li>Limited data retention policies</li>
          </ul>
          <p>
            However, no method of transmission or storage is 100% secure. You are
            responsible for maintaining the security of your device and wallet
            recovery information.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>Blink may integrate with:</p>
          <ul>
            <li>
              <strong>Blockchain Networks:</strong> For transaction processing and
              settlement
            </li>
            <li>
              <strong>Analytics Services:</strong> For app performance monitoring
              (anonymized data only)
            </li>
            <li>
              <strong>Communication Tools:</strong> For customer support
            </li>
          </ul>
          <p>
            These third parties have their own privacy policies. We encourage you
            to review them.
          </p>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>
            Blink is not intended for users under 18 years of age. We do not
            knowingly collect information from children. If you believe we have
            collected information from a minor, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other
            than your country of residence. We ensure appropriate safeguards are in
            place to protect your data in accordance with this Privacy Policy.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Data portability</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:admin@useblinkapp.com">admin@useblinkapp.com</a>.
          </p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>We retain personal information only as long as necessary to:</p>
          <ul>
            <li>Provide our services</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
          <p>
            Contact form submissions are typically deleted within 90 days after
            resolution.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of
            material changes by:
          </p>
          <ul>
            <li>
              Posting the updated policy with a new &ldquo;Last Updated&rdquo; date
            </li>
            <li>
              Sending an in-app notification or email (for significant changes)
            </li>
          </ul>
          <p>
            Continued use of Blink after changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy
            practices, please contact us:
          </p>
          <ul className="list-none">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:admin@useblinkapp.com">admin@useblinkapp.com</a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://useblinkapp.com">useblinkapp.com</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Jurisdiction-Specific Provisions</h2>
          <h3>For California Residents (CCPA)</h3>
          <p>
            California residents have additional rights under the California
            Consumer Privacy Act, including the right to know what personal
            information is collected and the right to opt-out of sale of personal
            information. We do not sell personal information.
          </p>
          <h3>For EU/UK Residents (GDPR)</h3>
          <p>
            EU and UK residents have rights under the General Data Protection
            Regulation, including the right to access, rectification, erasure, and
            data portability. Our lawful basis for processing is typically consent
            or legitimate interests in providing our services.
          </p>
        </section>

        <div className="mt-12 border-t border-[#321C04]/10 pt-8">
          <p className="text-center italic text-[#321C04]/55">
            By using Blink, you acknowledge that you have read and understood this
            Privacy Policy.
          </p>
        </div>
      </div>
    </DocShell>
  );
}
