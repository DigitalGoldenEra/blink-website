"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "The payer",
    category: "Crypto-native & underbanked",
    desc: "Spend USDC and other supported stablecoins at local shops without cashing out to a bank first. Skip high friction: gas surprises, slow confirmations, and triple-checking long wallet addresses.",
  },
  {
    title: "The merchant",
    category: "SMEs & retailers",
    desc: "Accept modern payment flows, reach crypto-holding customers, and see predictable NGN or local-currency balances — without running nodes or absorbing token volatility.",
  },
  {
    title: "Emerging markets first",
    category: "Where we start",
    desc: "Initial GTM targets Nigeria, Kenya, Ghana, and South Africa — places where digital money is thriving but crypto checkout is still harder than it should be.",
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const cards = gridRef.current?.children || [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
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
      id="use-cases"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 border-t border-zinc-200 bg-zinc-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-heading text-4xl md:text-5xl font-bold text-black text-center mb-6"
        >
          Who Blink is for
        </h2>
        <p className="text-zinc-600 text-center mb-20 max-w-2xl mx-auto">
          Two sides of the same checkout: payers who want direct stablecoin
          spending, and merchants who want modern rails with local settlement.
        </p>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 min-h-[280px] flex flex-col justify-between hover:border-zinc-400 transition-all duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-500 text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
