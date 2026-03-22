"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Send } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        linksRef.current?.children || [],
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: XIcon, href: "https://x.com/useblinkapp", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/useblinkapp/", label: "Instagram" },
    { icon: Send, href: "https://t.me/useblinkapp", label: "Telegram" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full border-t border-zinc-200 bg-zinc-50 py-12 md:py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <Link href="/">
            <span className="font-heading text-2xl font-bold text-black tracking-tight">
              Blink
            </span>
          </Link>

          <div
            ref={linksRef}
            className="flex flex-wrap justify-center gap-8 text-zinc-600 font-medium"
          >
            <Link href="#features" className="hover:text-black transition-colors">
              Features
            </Link>
            <Link href="#about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link href="#how-it-works" className="hover:text-black transition-colors">
              How it works
            </Link>
            <Link href="#use-cases" className="hover:text-black transition-colors">
              Who it&apos;s for
            </Link>
            <Link href="#contact" className="hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-600 hover:border-black hover:text-black transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 text-center text-zinc-500 text-sm">
          © {currentYear} Blink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
