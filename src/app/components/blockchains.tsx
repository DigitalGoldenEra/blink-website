"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Database, Globe, Coins, Shield, Zap, Link, Cpu } from "lucide-react";

const chains = [
  {
    name: "Base",
    icon: Database,
    detail: "Next-gen Ethereum L2 built by Coinbase. Experience institutional-grade security with fraction-of-a-cent fees.",
    feature: "Ethereum L2",
    accent: "bg-blue-50",
  },
  {
    name: "Stellar",
    icon: Layers,
    detail: "The global standard for real-world asset tokenization and instant fiat-to-crypto on-ramps.",
    feature: "Global Payments",
    accent: "bg-indigo-50",
  },
  {
    name: "Solana",
    icon: Globe,
    detail: "High-performance blockchain with sub-second finality. Built for the next billion users and massive retail scale.",
    feature: "High Speed",
    accent: "bg-emerald-50",
  },
  {
    name: "USDT (TRC20)",
    icon: Coins,
    detail: "Native support for the world's most liquid stablecoin on the Tron network, ensuring reliable cross-border transfers.",
    feature: "Liquid Stable",
    accent: "bg-red-50",
  },
];

export default function BlockchainsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Pinning only on desktop
      const cards = gsap.utils.toArray(".blockchain-card");
      cards.forEach((card: any) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 120px",
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: "bottom bottom",
        });
      });

      gsap.fromTo(
        mockupRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-zinc-50 text-black py-10 md:py-32 lg:py-48 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          <div className="relative">
            <div className="mb-16 lg:mb-32">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                Multi-Chain Ecosystem
              </h2>
              <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed">
                Blink support with USDT, Stellar, Solana, and Base
              </p>
            </div>

            {/* Mobile Mockup */}
            <div className="block lg:hidden mb-20">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-[80px]" />
                <img
                  src="/frame-1.svg"
                  alt="Blink Interface"
                  className="relative w-full drop-shadow-xl"
                />
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:gap-[20vh] pb-20 lg:pb-[40vh]">
              {chains.map((chain, i) => (
                <div
                  key={chain.name}
                  className="blockchain-card w-full p-8 md:p-10 rounded-2xl md:rounded-3xl border border-zinc-200 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl ${chain.accent} flex items-center justify-center mb-6 md:mb-10`}>
                      <chain.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5px] text-zinc-900" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6">
                      {chain.feature}
                    </div>
                    <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">
                      {chain.name}
                    </h3>
                    <p className="text-zinc-500 text-base md:text-xl leading-relaxed font-light">
                      {chain.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Mockup */}
          <div className="hidden lg:block sticky top-32 h-[80vh] flex items-center justify-center">
            <div
              ref={mockupRef}
              className="relative w-full max-w-md"
            >
              <img
                src="/frame-1.svg"
                alt="Blink Interface"
                className="relative w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
