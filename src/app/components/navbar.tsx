"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const leftLinksRef = useRef<HTMLDivElement>(null);
  const rightLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: "power2.out" },
    );
    const leftLinks = leftLinksRef.current?.querySelectorAll("a");
    const rightLinks = rightLinksRef.current?.querySelectorAll("a, button");
    gsap.fromTo(
      leftLinks || [],
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.3,
        ease: "power2.out",
      },
    );
    gsap.fromTo(
      rightLinks || [],
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.4,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="max-w-5xl mx-auto backdrop-blur-sm bg-white/20 rounded-md sticky top-5 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" ref={logoRef}>
          <span className="font-heading text-2xl font-bold text-black tracking-tight">
            Fortichain
          </span>
        </Link>

        <div
          ref={leftLinksRef}
          className="hidden md:flex items-center gap-8 text-zinc-600 font-medium"
        >
          <Link
            href="#services"
            className="hover:text-black transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="hover:text-black transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#process"
            className="hover:text-black transition-colors duration-300"
          >
            Process
          </Link>
          <Link
            href="#work"
            className="hover:text-black transition-colors duration-300"
          >
            Work
          </Link>
        </div>

        <div
          ref={rightLinksRef}
          className="hidden md:flex items-center gap-8 text-zinc-600 font-medium"
        >
          <a href="#contact">
            <button className="px-5 py-2 rounded-md bg-black text-white border border-black hover:bg-zinc-800 transition-all duration-300 font-medium">
              Start a Project
            </button>
          </a>
        </div>

        <button
          className="md:hidden text-zinc-600 hover:text-black transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-zinc-600 font-medium border-t border-zinc-200 pt-4">
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#process" onClick={() => setIsOpen(false)}>
            Process
          </Link>
          <Link href="#work" onClick={() => setIsOpen(false)}>
            Work
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
