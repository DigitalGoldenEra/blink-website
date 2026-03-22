"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wallet,
  Bluetooth,
  QrCode,
  ArrowLeftRight,
  Fingerprint,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Wallet,
    title: "Non-custodial wallet",
    desc: "Hold stablecoins in a wallet you control — no bank card, no Apple Pay or Google Pay required.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth Tap-to-Pay",
    desc: "Pay in person by connecting over Bluetooth: fast retail checkout without copying wallet addresses.",
  },
  {
    icon: QrCode,
    title: "Scan-to-Pay (QR)",
    desc: "Dynamic or static QR codes, plus SEP-0007-compatible deep links for payment.",
  },
  {
    icon: ArrowLeftRight,
    title: "Path payments & FX",
    desc: "Automatic conversion across crypto assets so you spend in crypto while rails optimize the path.",
  },
  {
    icon: Fingerprint,
    title: "Biometric security",
    desc: "Protect account locally  with biometrics — your keys stay on your device.",
  },
  {
    icon: Zap,
    title: "Sub-5s confirmation",
    desc: "Transactions confirm in seconds onchain — quick enough for real-world queues and counters.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = cardsRef.current?.children || [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 border-t border-zinc-200 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6"
        >
          Everything you need to spend and settle
        </h2>
        <p className="text-zinc-600 text-center text-lg max-w-2xl mx-auto mb-20">
          Built on Blockchain : open infrastructure, programmable money, and
          settlement that keeps merchants out of volatility.
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:border-zinc-400 hover:bg-white transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-200 flex items-center justify-center mb-6 group-hover:bg-zinc-300 transition-colors">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
