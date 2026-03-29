"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/** Canonical formResponse URL (works without signed-in /u/0 path). */
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScyuUx-J_HULT7MiqN1AbEYYHS6aFWjFlQ4F6eOzhW44itr8Q/formResponse";

const ENTRY_NAME = "entry.917906794";
const ENTRY_EMAIL = "entry.964792439";

/**
 * Bot/spam token from the live form HTML (`name="fbzx"`).
 * If submissions stop working after editing the form in Google, open the
 * form → View page source → copy the new `fbzx` value, or set
 * NEXT_PUBLIC_GOOGLE_FORM_FBZX in `.env.local`.
 */
const FBZX =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_FBZX ?? "-414413558023261921";

export default function WaitlistSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitToGoogle = async (name: string, email: string) => {
    const body = new URLSearchParams();
    body.set(ENTRY_NAME, name.trim());
    body.set(ENTRY_EMAIL, email.trim());
    body.set("fvv", "1");
    body.set("pageHistory", "0");
    body.set("fbzx", FBZX);
    body.set("partialResponse", `[null,null,"${FBZX}"]`);
    body.set("submissionTimestamp", "-1");

    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get(ENTRY_NAME) ?? "").trim();
    const email = String(fd.get(ENTRY_EMAIL) ?? "").trim();
    if (!name || !email) return;

    setSubmitting(true);
    try {
      await submitToGoogle(name, email);
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Could not send — check your connection and try again.");
    } finally {
      setSubmitting(false);
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
      id="waitlist"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 border-t border-zinc-200 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div ref={contentRef}>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-black mt-4 mb-6">
            Join the Blink waitlist
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-12">
            Be first to hear when merchant and payer apps open up in our launch
            markets — same product you read about above: Bluetooth handoff,
            stablecoin pay-in, local-currency settlement.
          </p>
        </div>

        <div ref={ctaRef} className="max-w-xl mx-auto w-full">
          {submitted ? (
            <div className="flex flex-col items-center justify-center p-12 bg-zinc-50 rounded-3xl border border-zinc-100 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                You&apos;re on the list
              </h3>
              <p className="text-zinc-500 text-center">
                Thanks — we&apos;ll reach out with early access and launch
                updates.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-5 text-left w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label
                    htmlFor="waitlist-name"
                    className="block text-sm font-medium text-zinc-700 mb-1.5 ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="waitlist-name"
                    name={ENTRY_NAME}
                    className="text-black w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-zinc-400 transition-all placeholder:text-zinc-400"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    disabled={submitting}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="waitlist-email"
                    className="block text-sm font-medium text-zinc-700 mb-1.5 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="waitlist-email"
                    name={ENTRY_EMAIL}
                    className="text-black w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-zinc-400 transition-all placeholder:text-zinc-400"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    disabled={submitting}
                  />
                </div>
              </div>
              {error ? (
                <p className="text-sm text-red-600 text-center" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition-all duration-300 group shadow-md shadow-black/5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Join waitlist"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-zinc-500 text-center -mt-1">
                Submissions go to our Google Form — we only ask for name and
                email.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
