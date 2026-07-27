"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Navbar from "./navbar";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4";

const IOS_URL = "https://testflight.apple.com/join/gNkuP7cP";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.fortichain.blink";

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

function PlayMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7l-.1.1zm13.2 13.5-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2h-.1zm-.1-6.9L13.5 11 4.4 1.9c.4-.4 1-.4 1.7 0l10.6 6.5zM4.4 22.1l9.1-9.1 3.2 3.2L6.1 22.1c-.7.4-1.3.4-1.7 0z"
      />
    </svg>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const openApps = () => {
    setMounted(true);
    // wait a frame so the entered state animates in from the initial state
    requestAnimationFrame(() => setVisible(true));
  };

  const closeApps = () => {
    setVisible(false);
    // keep the node mounted until the exit transition finishes
    setTimeout(() => setMounted(false), 300);
  };

  // close on Escape while the modal is mounted
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeApps();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mounted]);

  return (
    <section id="hero" className="relative mb-[-25px] h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-12 md:pb-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <h1 className="text-5xl font-normal leading-[1.1] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[96px]">
            Spend crypto
            <br />
            without{" "}
            <em
              className="not-italic"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
              }}
            >
              the friction
            </em>
          </h1>

          <p className="mt-6 max-w-[420px] text-sm font-medium text-white/80 md:text-base">
            Blink lets you spend crypto like cash and lets merchants settle
            instantly in local currency — over Bluetooth, no addresses.
          </p>

          {/* CTA bar */}
          <div className="mt-8 flex items-center rounded-xl bg-black/25 py-1 pl-6 pr-1 backdrop-blur-md">
            <p className="hidden text-sm font-medium text-white sm:block">
              No addresses. No off-ramps. Just tap, confirm, settled.
            </p>
            <p className="text-sm font-medium text-white sm:hidden">
              Just tap and settle.
            </p>
            <button
              type="button"
              onClick={openApps}
              className="ml-4 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Get the app
            </button>
          </div>
        </div>
      </div>

      {/* Download popup */}
      {mounted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Download Blink"
        >
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeApps}
          />

          <div
            className={`relative w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl border border-neutral-200 transition-all duration-300 ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            <button
              type="button"
              onClick={closeApps}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-black/60 transition hover:bg-black/10 hover:text-black"
            >
              <X size={18} />
            </button>

            <h3 className="text-2xl font-semibold tracking-tight text-black">
              Get Blink
            </h3>
            <p className="mx-auto mt-2 max-w-xs text-sm font-medium text-black/60">
              Download for your device and start paying in a blink.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-3.5 text-white transition hover:bg-neutral-800"
              >
                <AppleMark className="h-5 w-5" />
                <span className="text-sm font-medium">Download for iOS</span>
              </a>
              <a
                href={ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-neutral-100 border border-neutral-200 px-6 py-3.5 text-black transition hover:bg-neutral-200"
              >
                <PlayMark className="h-5 w-5" />
                <span className="text-sm font-medium">Get it on Google Play</span>
              </a>
            </div>

            <p className="mx-auto mt-5 max-w-xs text-[11px] leading-relaxed text-black/50">
              iOS users: after installing TestFlight, tap the iOS button again to
              install Blink.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
