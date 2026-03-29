import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Trash2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 bg-zinc-50">
        <Navbar />
      </div>
      
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
            <Trash2 className="w-7 h-7 text-red-600" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-black">
            Delete Your Blink Account
          </h1>
        </div>

        <p className="text-zinc-600 text-lg leading-relaxed mb-12">
          We respect your right to control your data. This page explains how to request deletion of your Blink account and associated data.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-900 mb-2">Important: Non-Custodial Wallet</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              Blink is a non-custodial wallet. Your private keys and cryptocurrency are stored only on your device. Deleting your account will remove your data from our servers, but you remain responsible for your wallet and funds. Make sure to back up your recovery phrase before proceeding.
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-6">
            How to Request Account Deletion
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">Back Up Your Wallet</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Before deleting your account, ensure you have securely backed up your wallet recovery phrase. Once your account is deleted, we cannot help you recover your funds.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">Submit Deletion Request</h3>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Send an email to <a href="mailto:support@blink.app" className="text-black underline hover:text-zinc-700">support@blink.app</a> with the subject line "Account Deletion Request" and include:
                </p>
                <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                  <li>The email address associated with your Blink account</li>
                  <li>Confirmation that you have backed up your wallet</li>
                  <li>Any additional information to verify your identity</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">Verification</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Our team will verify your identity to ensure the request is legitimate. This typically takes 1-2 business days.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">Deletion Confirmation</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Once verified, we will delete your account data within 30 days and send you a confirmation email.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-6">
            What Data Gets Deleted
          </h2>
          
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
            <div className="flex gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
              <h3 className="font-semibold text-green-900 text-lg">Data We Delete</h3>
            </div>
            <ul className="list-disc pl-6 text-green-800 space-y-2">
              <li>Your contact information (name, email address)</li>
              <li>Support messages and communication history</li>
              <li>Device identifiers and usage analytics</li>
              <li>App preferences and settings stored on our servers</li>
              <li>Any other personal data we hold about you</li>
            </ul>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
            <div className="flex gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-zinc-600 shrink-0" />
              <h3 className="font-semibold text-zinc-900 text-lg">Data We Cannot Delete</h3>
            </div>
            <ul className="list-disc pl-6 text-zinc-700 space-y-2">
              <li><strong>Blockchain Records:</strong> Transactions recorded on public blockchains are permanent and cannot be deleted by anyone</li>
              <li><strong>Local Wallet Data:</strong> Your private keys and wallet data stored on your device must be deleted manually by uninstalling the app</li>
              <li><strong>Legal Records:</strong> Information required to be retained for legal, regulatory, or compliance purposes (typically 7 years)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-6">
            Data Retention Period
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            After you request account deletion:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 space-y-2">
            <li><strong className="text-black">Immediate:</strong> Your account is deactivated and you can no longer access Blink services</li>
            <li><strong className="text-black">Within 30 days:</strong> All deletable personal data is permanently removed from our active systems</li>
            <li><strong className="text-black">Up to 90 days:</strong> Backup systems are purged during routine maintenance cycles</li>
            <li><strong className="text-black">7 years:</strong> Records required for legal compliance (e.g., anti-fraud, tax records) are retained as required by law</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-6">
            Alternative: Uninstall the App
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            If you simply want to stop using Blink without deleting your server-side data:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 space-y-2">
            <li>Uninstall the Blink app from your device</li>
            <li>This removes all local data including your wallet keys</li>
            <li>Your server-side data (contact info, support messages) remains and can be deleted later if desired</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-6">
            Questions?
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            If you have questions about account deletion or data retention, please contact us at{" "}
            <a href="mailto:support@blink.app" className="text-black underline hover:text-zinc-700">
              support@blink.app
            </a>
          </p>
        </section>

        <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Ready to Delete Your Account?</h3>
          <p className="text-zinc-300 mb-6">
            Send your deletion request to our support team
          </p>
          <a
            href="mailto:support@blink.app?subject=Account%20Deletion%20Request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-100 transition-all duration-300"
          >
            Email Support
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
