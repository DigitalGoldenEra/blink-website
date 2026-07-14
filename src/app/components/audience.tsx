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
      className="relative z-10 bg-[#321C04] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-[#FFF9F2]/60">Who It&apos;s For</p>
        <h2 className="mt-8 text-4xl font-normal leading-[1.1] tracking-tight text-[#FFF9F2] md:text-5xl lg:text-6xl">
          Two sides of the{" "}
          <em
            className="not-italic"
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
            className="rounded-3xl bg-[#FFF9F2]/[0.06] p-8 backdrop-blur-sm transition-colors hover:bg-[#FFF9F2]/[0.1]"
          >
            <p className="eyebrow text-[#D9C4AA] !text-[10px]">{a.category}</p>
            <h3 className="mt-6 text-2xl font-normal tracking-tight text-[#FFF9F2] md:text-3xl">
              {a.title}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#FFF9F2]/60 md:text-base">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
