const chains = [
  { name: "Base", caption: "Ethereum L2" },
  { name: "Stellar", caption: "Global payments" },
  { name: "Solana", caption: "High speed" },
  { name: "USDT · TRC20", caption: "Liquid stable" },
];

export default function ChainsSection() {
  return (
    <section
      id="chains"
      className="relative z-10 bg-neutral-50 border-b border-neutral-200 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-black/60">A Growing Network</p>
        <h2 className="mt-8 text-4xl font-normal leading-[1.1] tracking-tight text-black md:text-5xl lg:text-6xl">
          Every chain makes the network{" "}
          <em
            className="not-italic"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
            }}
          >
            stronger
          </em>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
          Blink routes every payment across fast, low-fee networks — USDC on
          Stellar, Solana and Base, plus USDT on Tron — so value moves at the
          speed of a tap, and merchants never touch volatility.
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-5xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="group flex flex-col items-center gap-3 rounded-3xl bg-white border border-neutral-200/80 p-6 py-12 shadow-sm transition-all duration-300 hover:bg-black hover:border-black"
            >
              <span className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-white">
                {chain.name}
              </span>
              <span className="eyebrow text-black/50 !text-[10px] transition-colors duration-300 group-hover:text-white/60">
                {chain.caption}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center eyebrow text-black/50 !text-[10px]">
          + More chains coming soon
        </p>
      </div>
    </section>
  );
}
