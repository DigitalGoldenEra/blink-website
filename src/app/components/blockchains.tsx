"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, Link, Cpu } from "lucide-react";

const chains = [
  {
    name: "Base",
    logo: "/logos/images.png",
    detail: "Next-gen Ethereum L2 built by Coinbase. Experience institutional-grade security with fraction-of-a-cent fees.",
    feature: "Ethereum L2",
    accent: "bg-blue-50",
  },
  {
    name: "Stellar",
    logo: "/logos/images(2).png",
    detail: "The global standard for real-world asset tokenization and instant fiat-to-crypto on-ramps.",
    feature: "Global Payments",
    accent: "bg-indigo-50",
  },
  {
    name: "Solana",
    logo: "/logos/solana.png",
    detail: "High-performance blockchain with sub-second finality. Built for the next billion users and massive retail scale.",
    feature: "High Speed",
    accent: "bg-emerald-50",
  },
  {
    name: "USDT (TRC20)",
    logo: "/logos/usdt.png",
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

      gsap.to(".coming-soon-blink", {
        opacity: 0.3,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
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
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-6 md:mb-10">
                      <img src={chain.logo} alt={chain.name} className="w-full h-full object-contain" />
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
              
              <div className="blockchain-card w-full p-12 rounded-2xl md:rounded-3xl border border-dashed border-zinc-300 bg-zinc-100/50 backdrop-blur-sm flex flex-col items-center justify-center text-center group transition-all duration-500 hover:bg-zinc-100/80">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-zinc-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
                  <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center relative">
                    <div className="w-4 h-4 rounded-full bg-black animate-ping" />
                    <div className="w-4 h-4 rounded-full bg-black absolute" />
                  </div>
                </div>
                <h3 className="coming-soon-blink text-black font-bold text-2xl md:text-3xl tracking-tight mb-3">
                  More Blockchains
                </h3>
                <p className="text-zinc-500 font-medium text-lg md:text-xl">
                  Coming Soon
                </p>
              </div>
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
