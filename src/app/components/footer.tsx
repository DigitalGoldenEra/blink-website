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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: XIcon, href: "https://x.com/useblinkapp", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/useblinkapp/", label: "Instagram" },
    { icon: Send, href: "https://t.me/useblinkapp", label: "Telegram" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-zinc-950 py-12 md:py-20 px-6 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/blink-logo.png" alt="Blink Logo" className="w-10 rounded-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-heading text-3xl font-bold text-white tracking-tight">
              Blink
            </span>
          </Link>

          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-blue-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm font-light">
          <p>© {currentYear} Blink. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://useblinkapp.substack.com/p/crypto-works-until-you-try-to-spend?r=7bclo4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">How to use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
