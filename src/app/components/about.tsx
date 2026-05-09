"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, Globe } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Floating background animation
      gsap.to(".bg-glow", {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Heading reveal with line-by-line stagger
      gsap.fromTo(
        ".reveal-text",
        { opacity: 0, y: 50, skewY: 5 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Grid cards reveal with a bounce-back effect
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { 
            opacity: 0, 
            y: 60, 
            rotateX: -15,
            transformPerspective: 1000 
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bentoItems = [
    {
      title: "The Friction",
      desc: "Today, turning crypto into everyday spending still means high fees, risky P2P off-ramps, and clunky wallet-address entry at checkout.",
      icon: Zap,
      className: "md:col-span-2 md:row-span-1 bg-zinc-900 text-white",
      iconColor: "text-blue-400",
    },
    {
      title: "Regional Focus",
      desc: "Blink is focused on Nigeria, Kenya, Ghana, and South Africa first making crypto utility feel as familiar as other digital spending.",
      icon: Globe,
      className: "md:col-span-1 md:row-span-2 bg-blue-50 text-blue-950 border-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Security First",
      desc: "Self-custody means you are in control. No central point of failure, no compromise on safety.",
      icon: Shield,
      className: "md:col-span-1 md:row-span-1 bg-white border-zinc-100",
      iconColor: "text-zinc-900",
    },
    {
      title: "Modern Checkout",
      desc: "Spend stablecoins directly, discover the counter over Bluetooth, and let sellers receive predictable balances in local currency.",
      icon: Zap,
      className: "md:col-span-1 md:row-span-1 bg-zinc-50 border-zinc-200",
      iconColor: "text-zinc-600",
    },
  ];

  return (
    <section
      id="whyblink"
      ref={sectionRef}
      className="relative py-24 md:py-48 px-6 bg-white overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div className="bg-glow absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mb-24 md:mb-32">
          <span className="reveal-text text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-8 block">
            The Vision
          </span>
          <h2 className="reveal-text font-heading text-4xl md:text-7xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
            Payments built for <br />
            <span className="text-zinc-400">crypto-native spenders <br className="hidden md:block" /> and real-world merchants</span>
          </h2>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto md:auto-rows-[350px]"
        >
          {bentoItems.map((item, i) => (
            <div
              key={item.title}
              className={`group relative p-8 md:p-10 rounded-[2.5rem] border overflow-hidden flex flex-col justify-between transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-3 ${item.className}`}
              style={{ perspective: "1000px" }}
            >
              {/* Animated Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.className.includes('bg-zinc-900') ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <item.icon className={`w-6 h-6 md:w-8 md:h-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight transition-colors duration-500 group-hover:text-blue-500">
                  {item.title}
                </h3>
                <p className={`text-base md:text-lg font-light leading-relaxed transition-all duration-500 ${item.className.includes('bg-zinc-900') ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-blue-900/70 group-hover:text-blue-900'}`}>
                  {item.desc}
                </p>
              </div>

              {/* Subtle hover icon background */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-all duration-700 group-hover:scale-150 group-hover:-rotate-12">
                <item.icon className="w-32 h-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
