"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DollarSign, Bluetooth, ShieldCheck, Landmark } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: DollarSign,
    title: "Amount & request",
    desc: "The merchant enters the amount in crypto (or your supported fiat). The Blink app emits a Bluetooth payment request or QR with amount and payment details.",
  },
  {
    icon: Bluetooth,
    title: "Connect & confirm",
    desc: "The payer pairs over Bluetooth (in-store) or scans the QR. The transaction is reviewed and signed locally on the phone — no shared custody.",
  },
  {
    icon: ShieldCheck,
    title: "Settle onchain",
    desc: "Blink submits the signed transaction to blockchain. Path payments handle conversion across assets when needed; confirmation targets under five seconds.",
  },
  {
    icon: Landmark,
    title: "Merchant fiat balance",
    desc: "Merchants receive Fiat instantly (T+0 balance updates).",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
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

      const stepEls = stepsRef.current?.children || [];
      gsap.fromTo(
        stepEls,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 border-t border-zinc-200 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-heading text-4xl md:text-5xl font-bold text-black text-center mb-6"
        >
          How a payment flows
        </h2>
        <p className="text-zinc-600 text-center max-w-xl mx-auto mb-20">
          Bluetooth for fast in-person retail; QR for everywhere else.
        </p>

        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-black" />
                </div>
                <span className="text-zinc-500 text-sm font-medium mb-2">
                  Step {i + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+3.5rem)] w-[calc(100%-3.5rem)] h-px bg-zinc-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
