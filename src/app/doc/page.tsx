import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Bluetooth, QrCode, Smartphone, Store, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Doc() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-zinc-50 border-b border-zinc-200">
        <div className="px-4 py-4">
          <Navbar />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28 text-center pt-24">
          <span className="text-zinc-500 font-medium text-sm uppercase tracking-widest mb-4 block">
            Official Documentation
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-black mb-6">
            How to use Blink
          </h1>
          <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The complete guide to setting up and using the Blink mobile app for real-world crypto payments. We rely on Bluetooth low-energy to guarantee seamless checkouts across iOS and Android.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 pb-32">
        <div className="prose prose-zinc max-w-none">
          {/* Transition note */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
            <div className="p-2 bg-blue-100 rounded-full text-blue-600 shrink-0">
              <Bluetooth className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-black text-lg m-0 mb-1">Architecture Update: Bluetooth over NFC</h4>
              <p className="text-zinc-700 m-0 text-sm leading-relaxed">
                To provide standard, cross-platform compatibility across all mobile devices without OS-level restrictions (like Apple's closed NFC constraints), <b>Blink utilizes Bluetooth Low-Energy (BLE) as the primary tap-to-pay mechanism</b>, backed by a QR code fallback. 
              </p>
            </div>
          </div>

          <h2 className="font-heading text-3xl font-bold text-black mb-8 border-b pb-4">
            For Payers (Customers)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="border border-zinc-200 rounded-3xl p-8 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-xl text-black mb-3">1. Enable Bluetooth</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Ensure your smartphone's Bluetooth is turned on. When you're ready to check out, simply open the Blink App.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-3xl p-8 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                <Bluetooth className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-xl text-black mb-3">2. "Tap" to Receive Request</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Bring your phone close to the merchant's device. Blink will automatically detect the local Bluetooth payment broadcast and render the checkout screen instantly.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-3xl p-8 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-xl text-black mb-3">3. Approve Transaction</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Review the exact fiat equivalent mapping to your chosen crypto asset. Use Face ID or biometrics to securely sign the transaction strictly locally on your device.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-3xl p-8 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-xl text-black mb-3">4. Instant Settlement</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                The transaction is pushed permanently onchain (Stellar, Base Solana, etc). Confirmation typically executes in under 5 seconds. You're good to go!
              </p>
            </div>
          </div>

          <h2 className="font-heading text-3xl font-bold text-black mb-8 border-b pb-4 mt-8">
            For Receivers (Merchants)
          </h2>
          <div className="space-y-8 mb-16">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 border-4 border-zinc-100">
                1
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-xl text-black mb-2">Input the Bill Amount</h3>
                <p className="text-zinc-600">
                  On the Blink App, type in the final charge amount natively in your preferred fiat currency. The system handles real-time oracle exchange rates.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 border-4 border-zinc-100">
                2
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-xl text-black mb-2">Broadcast the Payment Request</h3>
                <p className="text-zinc-600">
                  Press <b>"Recieve"</b>. Blink will instantly activate a Bluetooth Low-Energy beacon bridging data to any proximate customer phone. A <b>Scan-to-Pay QR code</b> will also be actively displayed on screen for cross-compatibility fallback.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 border-4 border-zinc-100">
                3
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-xl text-black mb-2">Wait for User Signature</h3>
                <p className="text-zinc-600">
                  The App listens momentarily while the customer signs on their own hardware. Do not close the screen.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 border-4 border-zinc-100">
                4
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-xl text-black mb-2">Fiat Finality</h3>
                <p className="text-zinc-600">
                  Once the blockchain states finalize, Blink's smart bridges swap the incoming crypto for fiat immediately and flag your interface with a glowing green success screen. You acquire zero volatility exposure.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-zinc-50 border border-zinc-200 rounded-3xl p-10 text-center relative">
            <div className="flex justify-center mb-4">
              <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-zinc-200 text-zinc-600">
                Coming Soon
              </span>
            </div>
            <h3 className="font-heading text-3xl font-bold text-black mb-4">Integration SDKs</h3>
            <p className="text-zinc-600 mb-8 max-w-lg mx-auto">
              Looking to deploy Blink at your physical retail location or embed our POS SDK deep into your custom web architecture? SDK access and documentation will be rolling out soon.
            </p>
            <button disabled className="px-8 py-4 rounded-xl bg-zinc-200 text-zinc-400 font-semibold cursor-not-allowed">
              Developer Docs Upcoming
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}