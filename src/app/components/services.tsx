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
    title: "Tap to Pay with Bluetooth",
    desc: "Just hold your phone near the checkout. Blink connects automatically using Bluetooth, no copying messy wallet addresses.",
  },
  {
    icon: Radio,
    title: "Instant Connection",
    desc: "Open the app and instantly find the merchant. Blink securely gets the payment details so you know exactly who and what you are paying.",
  },
  {
    icon: Wallet,
    title: "One Wallet, Every Network",
    desc: "Manage all your crypto in one secure, unified account. You maintain full control over your private keys—we never hold your funds.",
  },
  {
    icon: ArrowLeftRight,
    title: "Built for Stablecoins",
    desc: "Pay seamlessly using fast networks like Stellar, Solana, and Base. We focus on USDC so your everyday purchases stay completely predictable.",
  },
  {
    icon: Landmark,
    title: "Local Currency Settlement",
    desc: "Merchants don't need to worry about crypto volatility. They get paid securely and instantly in their local fiat currency.",
  },
  {
    icon: Activity,
    title: "Real-time Updates",
    desc: "You can see your payment clear in real-time. Merchants can then smoothly withdraw their money directly to their local bank account.",
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
          Everything you need in one tap
        </h2>
        <p className="text-zinc-600 text-center text-lg max-w-2xl mx-auto mb-20">
          We've handled the complicated crypto infrastructure behind the scenes so you don't have to. Enjoy seamless Bluetooth payments, a unified wallet, and instant local payouts.
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
