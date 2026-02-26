"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 border-t border-zinc-200 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div ref={contentRef}>
          <span className="text-zinc-500 font-medium text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-black mt-4 mb-6">
            Ready to build something great?
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-12">
            Tell us about your project. We&apos;ll get back within 24 hours
            with ideas and next steps.
          </p>
        </div>

        <a
          ref={ctaRef}
          href="mailto:hello@fortichain.com"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition-all duration-300 group"
        >
          <Mail className="w-5 h-5" />
          hello@fortichain.com
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
