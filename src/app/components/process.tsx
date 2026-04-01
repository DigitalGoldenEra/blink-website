"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DollarSign,
  Currency,
  Radio,
  Smartphone,
  Fingerprint,
  ShieldCheck,
  BellRing,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Currency,
    title: "Merchant requests payment",
    desc: "The merchant enters amount and currency in Blink and taps “Request payment”.",
  },
  {
    icon: Radio,
    title: "Handoff code & BLE",
    desc: "Blink returns a short, time-sensitive code; the merchant device broadcasts it over Bluetooth Low Energy.",
  },
  {
    icon: Smartphone,
    title: "Payer finds & loads details",
    desc: "The payer taps “Find receiver”, scans BLE ads for the code, and pulls receiver info, amount, rails, and pool addresses from Blink.",
  },
  {
    icon: Fingerprint,
    title: "Swipe + biometric confirm",
    desc: "The payer reviews everything on-device and authorizes with swipe and biometrics — keys stay non-custodial.",
  },
  {
    icon: ShieldCheck,
    title: "Rail & on-chain processing",
    desc: "Blink routes the transaction through the selected rail (local currency path or on-chain USDC) with liquidity and path payments as needed.",
  },
  {
    icon: BellRing,
    title: "Realtime completion",
    desc: "WebSockets push updates to both parties so payer and merchant see success the moment the system completes.",
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
          How a Bluetooth payment works
        </h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-20">
          End-to-end flow from “request payment” to instant updates — built for
          in-person retail without typing wallet addresses.
        </p>

        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
