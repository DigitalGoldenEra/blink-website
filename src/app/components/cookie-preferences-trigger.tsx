"use client";

import { SlidersHorizontal } from "lucide-react";

export default function CookiePreferencesTrigger({
  className = "inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800",
  label = "Manage Cookie Preferences",
}: {
  className?: string;
  label?: string;
}) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      <SlidersHorizontal className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
