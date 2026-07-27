"use client";

import Link from "next/link";
import DriftLogo from "./drift-logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#chains", label: "Chains" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <div className="absolute top-6 left-1/2 z-50 -translate-x-1/2">
      {/* Floating pill */}
      <div className="flex items-center gap-8 rounded-full bg-white px-5 py-2.5 shadow-lg">
        <Link
          href="/"
          className="flex items-center gap-1 text-lg font-bold tracking-tight text-black"
        >
          <DriftLogo size={28} fill="#000000" />
          Blink
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black/80 transition-colors hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-2">
          <a href="#download" className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800">
            Download app
          </a>
        </div>
      </div>
    </div>
  );
}
