import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type DocShellProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
};

/** Shared cream/cocoa shell for the static long-form pages. */
export default function DocShell({
  eyebrow,
  title,
  intro,
  children,
}: DocShellProps) {
  return (
    <div className="min-h-screen bg-[#F6E4CF]">
      {/* Header with floating pill navbar */}
      <header className="relative">
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-36 text-center md:pb-20 md:pt-44">
          {eyebrow && (
            <p className="eyebrow text-[#321C04]/60">{eyebrow}</p>
          )}
          <h1 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-[#321C04] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#321C04]/70 md:text-lg">
              {intro}
            </p>
          )}
        </div>
      </header>

      <main className="px-6 pb-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#FFF9F2] p-8 md:p-12 lg:p-14">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
