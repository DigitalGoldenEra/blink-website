"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wallet,
  Bluetooth,
  Radio,
  ArrowLeftRight,
  Landmark,
  Activity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Bluetooth,
    title: "Bluetooth Low Energy handoff",
    desc: "The merchant creates a payment request; our backend issues a short, time-bound code; the receiver broadcasts it over BLE so the payer can discover the right checkout with no manual address entry.",
  },
  {
    icon: Radio,
    title: "Nearby discovery",
    desc: "Payers tap “Find receiver” and scan BLE advertisements to pick up the handoff code, then fetch full payment details — receiver, amount, rails, pool addresses — from Blink.",
  },
  {
    icon: Wallet,
    title: "Multi-chain unified wallet",
    desc: "One identity with a consistent user ID and wallet surface across supported chains. Non-custodial: Blink never holds your private keys or funds.",
  },
  {
    icon: ArrowLeftRight,
    title: "Stellar, Solana & Base",
    desc: "Launch support on three networks with stablecoin focus (USDC) so spend amounts stay understandable while routing can use the best path.",
  },
  {
    icon: Landmark,
    title: "Settlement & liquidity",
    desc: "Merchants get automated path payments or liquidity-pool processing so balances settle in NGN or other local currency — not in volatile crypto.",
  },
  {
    icon: Activity,
    title: "Live updates & payouts",
    desc: "WebSockets keep both sides in sync as the payment clears. Sellers can withdraw local currency via bank transfer or virtual accounts when they’re ready.",
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
          Handoff, wallet, and settlement in one flow
        </h2>
        <p className="text-zinc-600 text-center text-lg max-w-2xl mx-auto mb-20">
          Core product pillars from the Blink architecture — Bluetooth-first
          discovery, one wallet identity across chains, and local-currency
          settlement behind the scenes.
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
