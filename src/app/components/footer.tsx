"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Twitter } from "lucide-react";

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
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full border-t border-zinc-200 bg-zinc-50 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <Link href="/">
            <span className="font-heading text-2xl font-bold text-black tracking-tight">
              Fortichain
            </span>
          </Link>

          <div
            ref={linksRef}
            className="flex flex-wrap justify-center gap-8 text-zinc-600 font-medium"
          >
            <Link href="#services" className="hover:text-black transition-colors">
              Services
            </Link>
            <Link href="#about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link href="#process" className="hover:text-black transition-colors">
              Process
            </Link>
            <Link href="#work" className="hover:text-black transition-colors">
              Work
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
          © {currentYear} Fortichain. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
