"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How does paying over Bluetooth work?",
    a: "The merchant taps Request and Blink broadcasts a short, time-limited payment code over Bluetooth Low Energy. The payer taps Find receiver, connects, and confirms — no wallet addresses, no QR codes.",
  },
  {
    q: "Do I need to off-ramp to spend my crypto?",
    a: "No. You spend stablecoins directly at checkout. Blink routes the payment on-chain and the merchant receives local currency instantly, so no one waits on a bank transfer or a P2P trade.",
  },
  {
    q: "Is Blink custodial? Where are my keys?",
    a: "Blink is non-custodial. You confirm each payment with biometrics and your keys never leave your phone — you stay in control of every transaction.",
  },
  {
    q: "Which chains and tokens are supported?",
    a: "USDC on Stellar, Solana and Base, plus USDT on Tron — with more networks coming soon. Merchants never touch volatility; balances settle in local currency.",
  },
  {
    q: "Where is Blink available?",
    a: "We're starting in Nigeria, Kenya, Ghana and South Africa, where digital money is thriving but crypto checkout is still harder than it should be.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-10 bg-white border-b border-neutral-200 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="eyebrow text-black/60">Questions</p>
          <h2 className="mt-8 text-4xl font-normal leading-[1.1] tracking-tight text-black md:text-5xl lg:text-6xl">
            Good to{" "}
            <em
              className="not-italic"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
              }}
            >
              know
            </em>
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-200/80 shadow-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-black md:text-lg">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-black transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-600 md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
