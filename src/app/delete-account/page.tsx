import type { Metadata } from "next";
import DocShell from "../components/doc-shell";
import { Trash2, AlertCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Learn how to request deletion of your Blink account and associated data. We respect your right to control your personal data and will process requests within 30 days.",
  alternates: { canonical: "/delete-account" },
  robots: { index: true, follow: false },
  openGraph: {
    title: "Delete Your Blink Account",
    description:
      "Request deletion of your Blink account and personal data. Understand what data gets deleted and what is retained for legal compliance.",
    url: "https://useblinkapp.com/delete-account",
    images: [{ url: "/blink-logo.png", alt: "Blink Account Deletion" }],
  },
};


const steps = [
  {
    title: "Back Up Your Wallet",
    body: "Before deleting your account, ensure you have securely backed up your wallet recovery phrase. Once your account is deleted, we cannot help you recover your funds.",
  },
  {
    title: "Submit Deletion Request",
    body: null,
  },
  {
    title: "Verification",
    body: "Our team will verify your identity to ensure the request is legitimate. This typically takes 1-2 business days.",
  },
  {
    title: "Deletion Confirmation",
    body: "Once verified, we will delete your account data within 30 days and send you a confirmation email.",
  },
];

export default function DeleteAccount() {
  return (
    <DocShell
      eyebrow="Account"
      title={
        <>
          Delete your <span className="serif-italic">account</span>
        </>
      }
      intro="We respect your right to control your data. This page explains how to request deletion of your Blink account and associated data."
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black">
          <Trash2 className="h-6 w-6 text-white" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-medium tracking-tight text-black md:text-3xl">
          Delete Your Blink Account
        </h2>
      </div>

      {/* Non-custodial warning */}
      <div className="mt-8 flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-black" strokeWidth={1.6} />
        <div>
          <h3 className="mb-2 font-semibold text-black">
            Important: Non-Custodial Wallet
          </h3>
          <p className="text-sm leading-relaxed text-black/70">
            Blink is a non-custodial wallet. Your private keys and cryptocurrency
            are stored only on your device. Deleting your account will remove your
            data from our servers, but you remain responsible for your wallet and
            funds. Make sure to back up your recovery phrase before proceeding.
          </p>
        </div>
      </div>

      <div className="doc-prose mt-12">
        <h2>How to Request Account Deletion</h2>
      </div>

      <div className="mt-6 space-y-6">
        {steps.map((s, i) => (
          <div key={s.title} className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              {i + 1}
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-black">
                {s.title}
              </h3>
              {s.body ? (
                <p className="leading-relaxed text-black/70">{s.body}</p>
              ) : (
                <>
                  <p className="mb-4 leading-relaxed text-black/70">
                    Send an email to{" "}
                    <a
                      href="mailto:admin@useblinkapp.com"
                      className="text-black underline underline-offset-2 hover:opacity-65"
                    >
                      admin@useblinkapp.com
                    </a>{" "}
                    with the subject line &ldquo;Account Deletion Request&rdquo;
                    and include:
                  </p>
                  <ul className="list-disc space-y-1 pl-6 text-black/70">
                    <li>The email address associated with your Blink account</li>
                    <li>Confirmation that you have backed up your wallet</li>
                    <li>Any additional information to verify your identity</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="doc-prose mt-12">
        <h2>What Data Gets Deleted</h2>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <div className="mb-4 flex gap-3">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-black" strokeWidth={1.6} />
          <h3 className="text-lg font-semibold text-black">Data We Delete</h3>
        </div>
        <ul className="list-disc space-y-2 pl-6 text-black/75">
          <li>Your contact information (name, email address)</li>
          <li>Support messages and communication history</li>
          <li>Device identifiers and usage analytics</li>
          <li>App preferences and settings stored on our servers</li>
          <li>Any other personal data we hold about you</li>
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6">
        <div className="mb-4 flex gap-3">
          <AlertCircle className="h-6 w-6 shrink-0 text-black/70" strokeWidth={1.6} />
          <h3 className="text-lg font-semibold text-black">
            Data We Cannot Delete
          </h3>
        </div>
        <ul className="list-disc space-y-2 pl-6 text-black/75">
          <li>
            <strong className="text-black">Blockchain Records:</strong>{" "}
            Transactions recorded on public blockchains are permanent and cannot be
            deleted by anyone
          </li>
          <li>
            <strong className="text-black">Local Wallet Data:</strong> Your
            private keys and wallet data stored on your device must be deleted
            manually by uninstalling the app
          </li>
          <li>
            <strong className="text-black">Legal Records:</strong> Information
            required to be retained for legal, regulatory, or compliance purposes
            (typically 7 years)
          </li>
        </ul>
      </div>

      <div className="doc-prose mt-12">
        <h2>Data Retention Period</h2>
        <p>After you request account deletion:</p>
        <ul>
          <li>
            <strong>Immediate:</strong> Your account is deactivated and you can no
            longer access Blink services
          </li>
          <li>
            <strong>Within 30 days:</strong> All deletable personal data is
            permanently removed from our active systems
          </li>
          <li>
            <strong>Up to 90 days:</strong> Backup systems are purged during
            routine maintenance cycles
          </li>
          <li>
            <strong>7 years:</strong> Records required for legal compliance (e.g.,
            anti-fraud, tax records) are retained as required by law
          </li>
        </ul>

        <h2>Alternative: Uninstall the App</h2>
        <p>
          If you simply want to stop using Blink without deleting your server-side
          data:
        </p>
        <ul>
          <li>Uninstall the Blink app from your device</li>
          <li>This removes all local data including your wallet keys</li>
          <li>
            Your server-side data (contact info, support messages) remains and can
            be deleted later if desired
          </li>
        </ul>

        <h2>Questions?</h2>
        <p>
          If you have questions about account deletion or data retention, please
          contact us at{" "}
          <a href="mailto:admin@useblinkapp.com">admin@useblinkapp.com</a>
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl bg-black border border-neutral-800 p-8 text-center md:p-10">
        <h3 className="text-2xl font-medium text-white">
          Ready to delete your account?
        </h3>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Send your deletion request to our support team.
        </p>
        <a
          href="mailto:admin@useblinkapp.com?subject=Account%20Deletion%20Request"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-medium text-black transition hover:bg-neutral-200"
        >
          Email Support
        </a>
      </div>
    </DocShell>
  );
}
