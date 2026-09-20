import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type DocShellProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  maxWidth?: string;
  containerClassName?: string;
};

/** Shared shell for long-form and legal documentation pages. */
export default function DocShell({
  eyebrow,
  title,
  intro,
  children,
  maxWidth = "max-w-6xl",
  containerClassName = "bg-white border border-neutral-200 shadow-sm p-6",
}: DocShellProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header with floating pill navbar */}
      <header className="relative">
        <Navbar />
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-32 text-center md:pb-16 md:pt-40">
          {eyebrow && (
            <p className="eyebrow text-black/60">{eyebrow}</p>
          )}
          <h1 className="mt-4 text-4xl font-normal leading-[1.1] tracking-tight text-black md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <div className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              {intro}
            </div>
          )}
        </div>
      </header>

      <main className="px-4 sm:px-6 pb-24">
        <div className={`mx-auto ${maxWidth} rounded-3xl ${containerClassName}`}>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
