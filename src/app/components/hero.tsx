"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type StoreTip = "apple" | "google" | null;

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

function GooglePlayMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5z" />
      <path fill="#FBBC04" d="M16.81 15.12L6.05 21.34 14.54 12.85l2.27 2.27z" />
      <path fill="#34A853" d="M3.84 2.15C4.05 2.05 4.29 2 4.54 2c.31 0 .61.1.86.27l9.75 5.64L14.54 12 3.84 2.15z" />
      <path fill="#4285F4" d="M20.16 10.81c.49.38.79.96.79 1.59s-.3 1.21-.79 1.59l-3.27 1.7-2.58-2.58 2.58-2.58 3.27 1.7z" />
    </svg>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const storeRowRef = useRef<HTMLDivElement>(null);
  const [openStoreTip, setOpenStoreTip] = useState<StoreTip>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split each headline line into words (do not split full innerHTML — that breaks <br> and tags)
      const headline = headlineRef.current;
      if (headline) {
        const lines = headline.querySelectorAll(".hero-headline-line");
        lines.forEach((lineEl) => {
          const text = lineEl.textContent?.trim() ?? "";
          const words = text.split(/\s+/).filter(Boolean);
          lineEl.innerHTML = words
            .map(
              (word) =>
                `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`
            )
            .join(" ");
        });
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
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.3, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      if (
        openStoreTip &&
        storeRowRef.current &&
        !storeRowRef.current.contains(e.target as Node)
      ) {
        setOpenStoreTip(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenStoreTip(null);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openStoreTip]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden min-h-[85vh] md:min-h-screen px-4">
      <div className="max-w-5xl mx-auto text-center py-24 md:py-32 lg:pt-10">
        <h1
          ref={headlineRef}
          className="font-heading flex flex-col items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black"
        >
          <span className="hero-headline-line block">Pay with crypto.</span>
          <span className="hero-headline-line block -mt-6">Live in the real world.</span>
        </h1>

        <p
          ref={sublineRef}
          className="mt-2 text-xl md:text-2xl text-black max-w-3xl mx-auto font-light"
        >
          Blink lets merchants accept real-world crypto payments over Bluetooth
          and get instant settlement in their local currency. You can also spend your crypto like cash
        </p>

        <div
          ref={ctaRef}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <a
            href="#waitlist"
            className="items-center justify-center rounded-xl bg-black px-10 py-3 text-xl text-white font-heading cursor-pointer transition"
          >
            JOIN THE WAITLIST
          </a>
          {/* <div
            ref={storeRowRef}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <div className="relative">
              <button
                type="button"
                aria-expanded={openStoreTip === "apple"}
                aria-describedby={
                  openStoreTip === "apple" ? "hero-tip-apple" : undefined
                }
                onClick={() =>
                  setOpenStoreTip((s) => (s === "apple" ? null : "apple"))
                }
                className="flex items-center gap-2.5 rounded-xl border border-zinc-300 bg-black px-4 py-2.5 text-left text-white shadow-sm transition hover:bg-zinc-900"
              >
                <AppleMark className="h-7 w-7 shrink-0 text-white" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </button>
              {openStoreTip === "apple" && (
                <div
                  id="hero-tip-apple"
                  role="tooltip"
                  className="absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white shadow-lg"
                >
                  Coming soon
                  <span className="absolute left-1/2 top-full -mt-px -translate-x-1/2 border-[6px] border-transparent border-t-zinc-900" />
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-expanded={openStoreTip === "google"}
                aria-describedby={
                  openStoreTip === "google" ? "hero-tip-google" : undefined
                }
                onClick={() =>
                  setOpenStoreTip((s) => (s === "google" ? null : "google"))
                }
                className="flex items-center gap-2.5 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-left shadow-sm transition hover:bg-zinc-50"
              >
                <GooglePlayMark className="h-7 w-7 shrink-0" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                    Get it on
                  </span>
                  <span className="text-sm font-semibold text-zinc-900">
                    Google Play
                  </span>
                </span>
              </button>
              {openStoreTip === "google" && (
                <div
                  id="hero-tip-google"
                  role="tooltip"
                  className="absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white shadow-lg"
                >
                  Coming soon
                  <span className="absolute left-1/2 top-full -mt-px -translate-x-1/2 border-[6px] border-transparent border-t-zinc-900" />
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
