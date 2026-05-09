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
    desc: "Merchants don't need to worry about crypto volatility. They get paid securely and instantly in their local fiat currency. Seamless and fast",
  },
  {
    icon: Activity,
    title: "Real-time Updates",
    desc: "You can see your payment clear in real-time. Merchants can then smoothly withdraw their money directly to their local bank account.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Horizontal Scroll for Desktop
        const totalWidth = horizontalRef.current?.scrollWidth || 0;
        const windowWidth = window.innerWidth;
        const xTranslate = -(totalWidth - windowWidth + 100);

        const horizontalScroll = gsap.to(horizontalRef.current, {
          x: xTranslate,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        // Individual card animations
        const cards = gsap.utils.toArray(".service-card");
        cards.forEach((card: any) => {
          gsap.fromTo(
            card.querySelector(".icon-box"),
            { scale: 0.9, opacity: 0.8 },
            {
              scale: 1.1,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalScroll,
                start: "left center",
                end: "right center",
                scrub: true,
              },
            }
          );
        });
      });

      // Simple reveal for title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="relative min-h-screen bg-zinc-950 overflow-hidden py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Title Section - Relative to keep it above the cards */}
      <div
        ref={titleRef}
        className="relative z-10 mb-20 lg:mb-32 max-w-7xl mx-auto"
      >
        <div className="text-center lg:mt-[1rem]">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Everything you need <br />
            <span className="text-zinc-500 font-light italic">in one tap.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            We've handled the complicated crypto infrastructure behind the scenes so you don't have to. Enjoy seamless payments and unified control.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden lg:overflow-visible">
        <div
          ref={horizontalRef}
          className="flex flex-col lg:flex-row gap-8 px-6 lg:px-[10vw] lg:w-max items-start"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card group relative w-full lg:w-[400px] xl:w-[450px] p-8 lg:p-12 rounded-[2rem] border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between "
            >
              <div className="icon-box w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-zinc-800 flex items-center justify-center mb-10 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all duration-500">
                <service.icon className="w-8 h-8 lg:w-10 lg:h-10 text-zinc-400 group-hover:text-blue-400" />
              </div>

              <div>
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-base lg:text-lg font-light">
                  {service.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
