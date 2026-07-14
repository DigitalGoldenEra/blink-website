"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#chains", label: "Chains" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-6 left-1/2 z-50 -translate-x-1/2">
      {/* Floating pill */}
      <div className="flex items-center gap-6 rounded-full bg-white px-5 py-2.5 shadow-lg">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-black"
          onClick={() => setIsOpen(false)}
        >
          Blink.
        </Link>

        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          className="relative flex h-5 w-6 flex-col items-center justify-center"
        >
          <span
            className="absolute h-[2px] w-6 bg-black transition-all duration-300"
            style={{
              transitionTimingFunction: "cubic-bezier(0.77,0,0.175,1)",
              transform: isOpen ? "rotate(45deg)" : "translateY(-4px)",
            }}
          />
          <span
            className="absolute h-[2px] w-6 bg-black transition-all duration-300"
            style={{
              transitionTimingFunction: "cubic-bezier(0.77,0,0.175,1)",
              transform: isOpen ? "rotate(-45deg)" : "translateY(4px)",
            }}
          />
        </button>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute left-1/2 mt-3 w-56 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-lg transition-all duration-300 ${isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-black/80 transition-colors hover:bg-black/5 hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
