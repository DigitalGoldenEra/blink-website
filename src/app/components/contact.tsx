"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function AppleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}



export default function DownloadSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
      id="download"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 border-t border-zinc-200 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div ref={contentRef}>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-black mt-4 mb-6">
            Get Blink Today
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-12">
            Experience the future of payments. Download the Blink app now to start accepting and spending crypto with ease.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://testflight.apple.com/join/gNkuP7cP"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-4 rounded-2xl bg-black px-8 py-5 text-left text-white transition-all hover:scale-[1.02] hover:bg-zinc-900 active:scale-100"
          >
            <AppleMark className="h-10 w-10 shrink-0 text-white" />
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                Download for iOS
              </span>
              <span className="text-xl font-semibold">TestFlight</span>
            </span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.fortichain.blink"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-4 rounded-2xl border border-zinc-200 bg-white px-8 py-5 text-left transition-all hover:scale-[1.02] hover:bg-zinc-50 active:scale-100"
          >
            <img src="https://cdn-icons-png.freepik.com/512/300/300218.png" alt="Google Play" className="h-10 w-10 shrink-0" />
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Get it on
              </span>
              <span className="text-xl font-semibold text-zinc-900">
                Google Play
              </span>
            </span>
          </a>
        </div>
        <p className="mt-8 text-xs text-zinc-500 font-medium max-w-sm mx-auto opacity-80">
          * iOS Users: After installing <b>TestFlight</b> from the App Store, click the iOS button above again to install the <b>Blink</b> app.
        </p>
      </div>
    </section>
  );
}
