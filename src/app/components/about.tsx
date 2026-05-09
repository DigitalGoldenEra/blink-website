"use client";

export default function AboutSection() {
  return (
    <section
      id="whyblink"
      className="py-24 md:py-48 px-6 bg-white border-t border-zinc-100"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <div className="mb-20">
          <span className="text-zinc-400 font-medium text-xs md:text-sm uppercase tracking-[0.4em] mb-8 block">
            The Vision
          </span>
          <h2 className="font-heading text-4xl md:text-7xl font-bold text-black">
            Payments built for crypto-native spenders and real-world merchants
          </h2>
        </div>

        <div className="space-y-12 md:space-y-20">
          <p className="text-2xl md:text-4xl text-zinc-900 leading-[1.3] font-medium">
            Today, turning crypto into everyday spending still means high fees,
            risky P2P off-ramps, and clunky wallet-address entry at checkout.
          </p>

          <p className="text-2xl md:text-4xl text-zinc-900 leading-[1.3] font-medium">
            Blink is focused on Nigeria, Kenya, Ghana, and South Africa
            first making crypto utility feel as familiar as other digital
            payments.
          </p>

          <p className="text-xl md:text-3xl text-zinc-500 leading-relaxed font-normal">
            Spend stablecoins directly, discover the counter over
            Bluetooth, and let sellers receive predictable balances in local
            currency.
          </p>
        </div>
      </div>
    </section>
  );
}
