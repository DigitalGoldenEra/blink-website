import { Mail, Plus } from "lucide-react";
import DriftLogo from "./drift-logo";

export default function AboutSection() {
  return (
    <section className="relative z-10 rounded-t-[25px] bg-[#F6E4CF] px-6 py-20 md:py-32">
      {/* Top area */}
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10">
        <p className="max-w-lg text-center text-base leading-relaxed text-[#321C04] md:text-lg">
          We build payment tools that move at the speed of a tap — so crypto
          feels like cash, and merchants settle in the money they already use.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:admin@useblinkapp.com"
            className="flex items-center gap-3 rounded-full bg-[#321C04] py-2 pl-2 pr-6 text-[#FFF9F2] transition-colors hover:bg-[#1F1003]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF9F2]">
              <Mail size={16} className="text-[#321C04]" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wide">
              Say hello
            </span>
          </a>

          <a
            href="#download"
            className="flex items-center gap-3 rounded-full bg-[#D9C4AA] py-2 pl-2 pr-6 text-[#321C04] transition-colors hover:bg-[#CEBA9E]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF9F2]">
              <Plus size={16} className="text-[#321C04]" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wide">
              Get the app
            </span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-20 flex max-w-6xl items-center gap-[2px]">
        <span className="h-2 w-2 rounded-full bg-[#D9C4AA]" />
        <span className="h-[2px] flex-1 bg-[#D9C4AA]" />
        <span className="h-2 w-2 rounded-full bg-[#D9C4AA]" />
      </div>

      {/* Bottom area */}
      <div className="mx-auto mt-20 flex max-w-6xl flex-col gap-12 md:flex-row md:gap-24">
        <div className="flex shrink-0 items-start gap-4">
          <DriftLogo size={40} fill="#321C04" />
          <span className="text-xs font-semibold uppercase leading-tight tracking-widest text-[#321C04]">
            Money
            <br />
            You Control
          </span>
        </div>

        <p className="text-2xl font-normal leading-[1.3] text-[#321C04] sm:text-3xl md:text-4xl lg:text-[42px]">
          We build the rails for real-world crypto payments. But, most
          importantly, we make spending your money feel effortless again using a
          software that carries the complexity of chains, addresses and
          settlement, so you can just tap, confirm, and go.
        </p>
      </div>
    </section>
  );
}
