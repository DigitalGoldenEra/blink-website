"use client";

import { useEffect, useRef, useState } from "react";
import { Bluetooth, Zap, Fingerprint } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    index: "01",
    icon: Bluetooth,
    title: "Pay over Bluetooth",
    description:
      "Tap to connect to the merchant nearby. Blink pulls the amount, currency and rails automatically — no wallet addresses, no QR codes to fumble.",
  },
  {
    index: "02",
    icon: Zap,
    title: "Settle in local currency",
    description:
      "The merchant sees local currency the moment a payment clears. Blink routes on-chain behind the scenes and absorbs the volatility for you.",
  },
  {
    index: "03",
    icon: Fingerprint,
    title: "Your keys, your control",
    description:
      "Confirm each payment with biometrics. Blink is non-custodial by design, so your keys never leave your phone — you stay in control.",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
}

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-neutral-200/80 p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl md:p-10 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black shadow-lg shadow-black/10 transition-transform duration-500 group-hover:scale-110">
          <Icon size={22} className="text-white" strokeWidth={1.5} />
        </span>
        <span
          className="text-4xl text-neutral-300 transition-colors duration-500 group-hover:text-black"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
          }}
        >
          {feature.index}
        </span>
      </div>

      <h3 className="mt-10 text-xl font-semibold tracking-tight text-black md:text-2xl">
        {feature.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
        {feature.description}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section
      id="features"
      className="relative z-10 bg-neutral-50 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`flex flex-col gap-8 transition-all duration-700 ease-out md:flex-row md:items-end md:justify-between ${
            shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <p className="eyebrow text-black/60">Why Blink</p>
            <h2 className="mt-6 max-w-2xl text-[2.5rem] font-medium leading-[1.08] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[72px]">
              Payments that flow with real life,{" "}
              <em
                className="not-italic text-neutral-400"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                }}
              >
                not against it
              </em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-black/60 md:text-base">
            No noise, no complicated systems. Just tap, confirm, settled — the
            way spending money should feel.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3 md:gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.index} feature={f} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
