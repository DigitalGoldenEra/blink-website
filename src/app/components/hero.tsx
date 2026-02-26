"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split headline into words for stagger animation
      const headline = headlineRef.current;
      if (headline) {
        const words = headline.innerHTML.split(" ");
        headline.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`)
          .join(" ");
      }

      const wordSpans = headlineRef.current?.querySelectorAll("span > span") || [];
      gsap.to(wordSpans, {
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.fromTo(
        sublineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: "power2.out" }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, delay: 1.1, ease: "power2.inOut" }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.3, ease: "power2.out" }
      );

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 2,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto text-center py-30 lg:pt-50">
        <h1
          ref={headlineRef}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[1.1] tracking-tight"
        >
          Build What Matters
        </h1>

        <p
          ref={sublineRef}
          className="mt-2 text-xl md:text-2xl text-black max-w-2xl mx-auto font-light"
        >
          We craft exceptional software that transforms ideas into powerful
          digital products.
        </p>

        <div ref={ctaRef} className="mt-12 flex gap-4 justify-center">
          <a href="#contact">
            <button className="group px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition-all duration-300 flex items-center gap-2 text-xs lg:text-sm">
              Start Your Project
            </button>
          </a>
          <a href="#services">
            <button className="px-8 py-4 rounded-full border border-black text-black hover:border-black hover:text-black transition-all duration-300 font-medium text-xs lg:text-sm">
              Explore Services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
