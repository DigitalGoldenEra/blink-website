"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Database, Globe } from "lucide-react";

export default function BlockchainsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children || [];
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Multi-Chain Ecosystem
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Blink launches with <span className="text-white font-semibold">Stellar</span>,{' '}
            <span className="text-white font-semibold">Solana</span>, and{' '}
            <span className="text-white font-semibold">Base</span> — unified under one
            wallet identity, with <span className="text-white font-semibold">USDC</span>{' '}
            as the primary spend asset for predictable value. More networks follow as
            liquidity and compliance expand.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Base */}
          <div className="relative group overflow-hidden rounded-3xl p-[1px] bg-gradient-to-b from-blue-500/50 to-transparent transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <div className="h-full bg-zinc-950/80 backdrop-blur-xl rounded-[23px] p-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Base</h3>
              <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                Next-gen Ethereum L2 built by Coinbase. Low fees, high security, and mass adoption ready.
              </p>
            </div>
          </div>

          {/* Stellar */}
          <div className="relative group overflow-hidden rounded-3xl p-[1px] bg-gradient-to-b from-indigo-500/50 to-transparent transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
            <div className="h-full bg-zinc-950/80 backdrop-blur-xl rounded-[23px] p-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                <Layers className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Stellar</h3>
              <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                The global standard for real-world crypto payments and instant fiat on/off ramps.
              </p>
            </div>
          </div>

          {/* Solana */}
          <div className="relative group overflow-hidden rounded-3xl p-[1px] bg-gradient-to-b from-emerald-500/50 to-transparent transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            <div className="h-full bg-zinc-950/80 backdrop-blur-xl rounded-[23px] p-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Solana</h3>
              <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                Unmatched transaction speed and throughput. Perfect for retail point-of-sale checkout experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm hover:bg-white/10 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            More networks integrating soon...
          </div>
        </div>
      </div>
    </section>
  );
}
