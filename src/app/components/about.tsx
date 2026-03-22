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
    { value: "<5s", label: "Target confirmation time" },
    { value: "T+0", label: "Merchant balance updates" },
   
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
              Crypto is global — spending it shouldn&apos;t require Big Tech
              wallets or banks
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              Today&apos;s digital payments run on closed rails: cards,
              intermediaries, and platforms that exclude billions without reliable
              banking access. Even when you hold crypto, everyday commerce often
              means cashing out first — and verifying long wallet addresses is a
              pain at the counter.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Blink lets people pay with crypto in the real world via Bluetooth
              and QR, while merchants receive instant
              fiat settlement — powered by blockchain.
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
