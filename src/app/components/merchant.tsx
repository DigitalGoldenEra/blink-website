import { Store, CreditCard, BarChart3, Shield, ArrowRight } from "lucide-react";
import DriftLogo from "./drift-logo";

const features = [
  {
    icon: CreditCard,
    title: "Payment links & invoices",
    desc: "Generate shareable payment links or send invoices directly — customers pay in crypto, you settle in local currency.",
  },
  {
    icon: BarChart3,
    title: "Real-time dashboard",
    desc: "Track transactions, monitor balances, and manage settlements from a single, clean interface.",
  },
  {
    icon: Shield,
    title: "API keys & webhooks",
    desc: "Integrate Blink into your existing stack with secure API keys, webhook events, and team-level access controls.",
  },
];

export default function MerchantSection() {
  return (
    <section
      id="merchant"
      className="relative z-10 bg-neutral-950 px-6 py-24 md:py-32 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-white/60">For Merchants</p>
            <h2 className="mt-6 max-w-2xl text-[2.5rem] font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px]">
              Accept crypto,{" "}
              <em
                className="not-italic text-white"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                }}
              >
                settle local
              </em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/50">
            Everything your business needs to accept stablecoin payments and
            receive local-currency settlements — no crypto knowledge required.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-2xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <f.icon size={20} className="text-white/80" />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight text-white md:text-2xl">
                {f.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-4">
            <DriftLogo size={32} variant="dark" />
            <span className="eyebrow text-white/50">Blink Merchant</span>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Set up your merchant account in minutes. Generate payment links,
            track transactions, and withdraw to your bank — all from one
            dashboard.
          </p>

          <a
            href="https://merchant.useblinkapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn mt-2 flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black shadow-xl shadow-white/5 transition-all duration-300 hover:scale-105 hover:bg-neutral-100 active:scale-95"
          >
            <Store size={20} />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase tracking-wide text-black/60">
                Create your account
              </span>
              <span className="text-base font-medium">
                Merchant Dashboard
              </span>
            </span>
            <ArrowRight
              size={16}
              className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
