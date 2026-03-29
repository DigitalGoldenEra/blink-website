"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        statRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "BLE", label: "Nearby, error-free handoff" },
    { value: "USDC", label: "Stablecoin-first spending" },
    { value: "NGN+", label: "Local settlement for merchants" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 border-t border-zinc-200 bg-zinc-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef}>
            <span className="text-zinc-500 font-medium text-sm uppercase tracking-widest">
              Why Blink
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
              Payments built for crypto-native spenders and real-world merchants
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              Today, turning crypto into everyday spending still means high fees,
              risky P2P off-ramps, and clunky wallet-address entry at checkout.
              Many merchants want modern payment options but fear volatility and
              don&apos;t want to run complex Web3 infrastructure.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              Blink is focused on{' '}
              <span className="text-black font-medium">
                Nigeria, Kenya, Ghana, and South Africa
              </span>{' '}
              first — making crypto utility feel as familiar as other digital
              payments: spend stablecoins directly, discover the counter over
              Bluetooth, and let sellers receive predictable balances in local
              currency.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Goals: faster adoption in local markets, direct spending without
              manual off-ramping, a volatility shield for merchants, and tap-to-find
              discovery that replaces stressful address copy-paste.
            </p>
          </div>

          <div ref={statRef} className="space-y-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline gap-4 border-b border-zinc-200 pb-6 last:border-0"
              >
                <span className="font-heading text-5xl md:text-6xl font-bold text-black">
                  {stat.value}
                </span>
                <span className="text-zinc-500 text-lg">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
