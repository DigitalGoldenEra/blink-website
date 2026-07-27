import DriftLogo from "./drift-logo";

const points = [
  {
    stat: "10%",
    title: "Off-ramp fees",
    desc: "Cashing crypto back into local currency eats up to a tenth of every transfer before it reaches a bank account.",
  },
  {
    stat: "Manual",
    title: "P2P trades",
    desc: "Peer-to-peer swaps mean waiting on strangers, comparing rates by hand, and hoping the other side actually sends.",
  },
  {
    stat: "42+ chars",
    title: "Wallet addresses",
    desc: "No checkout counter was ever built around typing a string of random characters correctly under pressure.",
  },
];

export default function FrictionSection() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 bg-black px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-white/60">The Friction</p>
            <h2 className="mt-6 max-w-xl text-4xl font-normal leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              Crypto checkout still feels{" "}
              <em
                className="not-italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                }}
              >
                broken
              </em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/50">
            Every workaround people use today to spend crypto in person adds
            friction Blink was built to remove.
          </p>
        </div>

        <div>
          {points.map((p) => (
            <div
              key={p.title}
              className="grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-3 border-b border-white/10 py-10"
            >
              <div>
                <h3 className="text-2xl font-normal tracking-tight text-white md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55 md:text-base">
                  {p.desc}
                </p>
              </div>
              <span
                className="text-2xl text-neutral-400 md:text-4xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                }}
              >
                {p.stat}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <DriftLogo size={32} fill="rgba(255,255,255,0.8)" />
          <span className="eyebrow text-white/50">
            Built to remove every step
          </span>
        </div>
      </div>
    </section>
  );
}
