import type { Metadata } from "next";
import DocShell from "../components/doc-shell";
import { Bluetooth, Smartphone, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use Blink",
  description:
    "Official guide to using the Blink mobile app. Learn how to pay with USDC over Bluetooth — no QR codes, no wallet addresses — and how merchants accept crypto and settle in local currency instantly.",
  alternates: { canonical: "/doc" },
  openGraph: {
    title: "How to Use Blink | Official Documentation",
    description:
      "Step-by-step guide for customers and merchants using Blink's Bluetooth crypto payment app.",
    url: "https://useblinkapp.com/doc",
    images: [{ url: "/blink-logo.png", alt: "Blink Documentation" }],
  },
  twitter: {
    card: "summary",
    title: "How to Use Blink",
    description:
      "Step-by-step guide for customers and merchants using Blink's BLE crypto payment app.",
    images: ["/blink-logo.png"],
  },
};


const payerCards = [
  {
    icon: Smartphone,
    title: "1. Enable Bluetooth",
    body: "Ensure your smartphone's Bluetooth is turned on. When you're ready to check out, simply open the Blink App.",
  },
  {
    icon: Bluetooth,
    title: "2. Tap to Receive Request",
    body: "Bring your phone close to the merchant's device. Blink will automatically detect the local Bluetooth payment broadcast and render the checkout screen instantly.",
  },
  {
    icon: ShieldCheck,
    title: "3. Approve Transaction",
    body: "Review the exact fiat equivalent mapping to your chosen crypto asset. Use Face ID or biometrics to securely sign the transaction strictly locally on your device.",
  },
  {
    icon: Zap,
    title: "4. Instant Settlement",
    body: "The transaction is pushed permanently onchain (Stellar, Base, Solana, etc). Confirmation typically executes in under 5 seconds. You're good to go!",
  },
];

const merchantSteps = [
  {
    title: "Input the Bill Amount",
    body: (
      <>
        On the Blink App, type in the final charge amount natively in your
        preferred fiat currency. The system handles real-time oracle exchange
        rates.
      </>
    ),
  },
  {
    title: "Broadcast the Payment Request",
    body: (
      <>
        Press <b>&ldquo;Receive&rdquo;</b>. Blink will instantly activate a
        Bluetooth Low-Energy beacon bridging data to any proximate customer phone.
        A <b>Scan-to-Pay QR code</b> will also be actively displayed on screen for
        cross-compatibility fallback.
      </>
    ),
  },
  {
    title: "Wait for User Signature",
    body: (
      <>
        The App listens momentarily while the customer signs on their own
        hardware. Do not close the screen.
      </>
    ),
  },
  {
    title: "Fiat Finality",
    body: (
      <>
        Once the blockchain states finalize, Blink&apos;s smart bridges swap the
        incoming crypto for fiat immediately and flag your interface with a glowing
        green success screen. You acquire zero volatility exposure.
      </>
    ),
  },
];

export default function Doc() {
  return (
    <DocShell
      eyebrow="Official Documentation"
      title={
        <>
          How to use <span className="serif-italic">Blink</span>
        </>
      }
      intro="The complete guide to setting up and using the Blink mobile app for real-world crypto payments. We rely on Bluetooth Low-Energy to guarantee seamless checkouts across iOS and Android."
    >
      {/* Architecture note */}
      <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black">
          <Bluetooth className="h-5 w-5 text-white" strokeWidth={1.6} />
        </div>
        <div>
          <h4 className="mb-1 font-semibold text-black">
            Architecture Update: Bluetooth over NFC
          </h4>
          <p className="text-sm leading-relaxed text-black/70">
            To provide standard, cross-platform compatibility across all mobile
            devices without OS-level restrictions (like Apple&apos;s closed NFC
            constraints), <b className="text-black">Blink utilizes Bluetooth
            Low-Energy (BLE) as the primary tap-to-pay mechanism</b>, backed by a
            QR code fallback.
          </p>
        </div>
      </div>

      {/* Payers */}
      <h2 className="mt-12 border-b border-neutral-200 pb-4 text-2xl font-medium tracking-tight text-black md:text-3xl">
        For Payers (Customers)
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {payerCards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:border-black"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-medium text-black">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-black/70">{c.body}</p>
            </div>
          );
        })}
      </div>

      {/* Merchants */}
      <h2 className="mt-14 border-b border-neutral-200 pb-4 text-2xl font-medium tracking-tight text-black md:text-3xl">
        For Receivers (Merchants)
      </h2>
      <div className="mt-8 space-y-8">
        {merchantSteps.map((s, i) => (
          <div key={s.title} className="flex flex-col items-start gap-5 md:flex-row">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
              {i + 1}
            </div>
            <div className="md:pt-1.5">
              <h3 className="mb-2 text-xl font-medium text-black">
                {s.title}
              </h3>
              <p className="leading-relaxed text-black/70">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SDK teaser */}
      <div className="mt-14 rounded-3xl bg-black border border-neutral-800 p-10 text-center">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
          Coming Soon
        </span>
        <h3 className="mt-4 text-2xl font-medium text-white md:text-3xl">
          Integration SDKs
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-white/70">
          Looking to deploy Blink at your physical retail location or embed
          our SDK deep into your custom web architecture? SDK access and
          documentation will be rolling out soon.
        </p>
        <button
          disabled
          className="mt-8 cursor-not-allowed rounded-xl bg-white px-8 py-4 font-medium text-black"
        >
          Developer Docs Upcoming
        </button>
      </div>
    </DocShell>
  );
}
