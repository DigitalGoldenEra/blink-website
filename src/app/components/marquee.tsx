"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  "Nigeria",
  "Kenya",
  "Ghana",
  "South Africa",
  "USDC",
  "USDT",
  "Bluetooth checkout",
  "Instant settlement",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const width = track.scrollWidth / 2;
      gsap.to(track, { x: -width, duration: 26, ease: "none", repeat: -1 });
    }, trackRef);
    return () => ctx.revert();
  }, []);

  const loop = [...items, ...items];

  return (
    <div className="relative z-10 overflow-hidden bg-neutral-900 border-y border-neutral-800 py-8">
      <div
        ref={trackRef}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className="text-2xl tracking-tight text-white/80 md:text-3xl"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
              }}
            >
              {item}
            </span>
            <span className="text-neutral-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
