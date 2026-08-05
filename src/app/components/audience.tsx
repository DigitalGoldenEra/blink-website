const audiences = [
  {
    category: "Crypto-native & underbanked",
    title: "The payer",
    desc: "Spend USDC and other stablecoins at local shops without cashing out to a bank first. No gas surprises, no slow confirmations, no triple-checking long addresses.",
  },
  {
    category: "SMEs & retailers",
    title: "The merchant",
    desc: "Accept modern payment flows and reach crypto-holding customers — with predictable local-currency balances, no nodes to run and no volatility to absorb.",
  },
  {
    category: "Where we start",
    title: "Emerging markets first",
    desc: "Nigeria, Kenya, Ghana and South Africa first — places where digital money is thriving but crypto checkout is still harder than it should be.",
  },
];

export default function AudienceSection() {
  return (
    <section
      id="use-cases"
      className="relative z-10 bg-black px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-white/60">Who It&apos;s For</p>
        <h2 className="mt-8 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px]">
          Two sides of the{" "}
          <em
            className="not-italic text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
            }}
          >
            same checkout
          </em>
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {audiences.map((a) => (
          <div
            key={a.title}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-2xl"
          >
            <p className="eyebrow text-neutral-400 !text-[10px] tracking-widest uppercase">{a.category}</p>
            <h3 className="mt-6 text-2xl font-medium tracking-tight text-white md:text-3xl">
              {a.title}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/60 md:text-base">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
