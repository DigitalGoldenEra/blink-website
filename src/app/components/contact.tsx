"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

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
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 border-t border-zinc-200 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div ref={contentRef}>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-black mt-4 mb-6">
            How can we help you?
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-12">
            Questions about Bluetooth Tap-to-Pay, merchant settlement, or the
            blockchain stack? Reach out — our team will get back to you shortly.
          </p>
        </div>

        <div ref={ctaRef} className="max-w-xl mx-auto w-full">
          {submitted ? (
            <div className="flex flex-col items-center justify-center p-12 bg-zinc-50 rounded-3xl border border-zinc-100 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
              <p className="text-zinc-500 text-center">Thank you for reaching out. Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-5 text-left w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1.5 ml-1">Name</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="text-black w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-zinc-400 transition-all placeholder:text-zinc-400" placeholder="John Doe" required />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5 ml-1">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-black w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-zinc-400 transition-all placeholder:text-zinc-400" placeholder="john@example.com" required />
                </div>
              </div>
          <div>
            <div className="flex justify-between items-end mb-1.5 px-1">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Message</label>
              <span className={`text-xs transition-colors ${message.length >= 2000 ? 'text-red-500 font-medium' : 'text-zinc-400'}`}>
                {message.length}/2000
              </span>
            </div>
            <textarea 
              id="message" 
              rows={5} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={2000}
              className="text-black w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-zinc-400 transition-all resize-none placeholder:text-black" 
              placeholder="How can we help?" 
              required
            ></textarea>
          </div>
          <button type="submit" className="mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition-all duration-300 group shadow-md shadow-black/5 cursor-pointer">
            Send Message
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        )}
        </div>
      </div>
    </section>
  );
}
