"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cookie,
  X,
  SlidersHorizontal,
  Lock,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
};

const CONSENT_KEY = "blink_cookie_consent_v1";
const CURRENT_POLICY_VERSION = "2026-09-27";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) {
        setVisible(true);
      } else {
        const parsed: CookiePreferences = JSON.parse(stored);
        if (parsed.version !== CURRENT_POLICY_VERSION) {
          setVisible(true);
        } else {
          setPreferences({
            functional: !!parsed.functional,
            analytics: !!parsed.analytics,
            marketing: !!parsed.marketing,
          });
        }
      }
    } catch {
      setVisible(true);
    }

    const handleOpenPreferences = () => {
      setShowPreferences(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  const saveConsent = (prefs: { functional: boolean; analytics: boolean; marketing: boolean }) => {
    const consentRecord: CookiePreferences = {
      necessary: true,
      functional: prefs.functional,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      timestamp: new Date().toISOString(),
      version: CURRENT_POLICY_VERSION,
    };

    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consentRecord));
    } catch (e) {
      console.error("Unable to save cookie preferences", e);
    }

    setPreferences(prefs);
    setVisible(false);
    setShowPreferences(false);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("blink-cookie-consent-updated", {
          detail: consentRecord,
        })
      );
    }
  };

  const handleAcceptAll = () => {
    saveConsent({ functional: true, analytics: true, marketing: true });
  };

  const handleRejectNonEssential = () => {
    saveConsent({ functional: false, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  if (!mounted) return null;

  return (
    <>
      {/* ── Compact Floating Pill / Card (Bottom-Right on Desktop, Bottom on Mobile) ── */}
      {visible && !showPreferences && (
        <aside
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm w-auto animate-fade-in-down transition-all duration-300"
        >
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl text-white">
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Cookie className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                    Cookie Choices
                  </span>
                </div>
                <span className="text-[10px] font-medium text-white/50 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                  GAID &bull; GDPR
                </span>
              </div>

              {/* Body text */}
              <p className="text-xs leading-relaxed text-white/70">
                We use strictly necessary cookies for platform security. Optional cookies require your consent under GAID Article 19.
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 text-[11px] text-white/60">
                <Link
                  href="/cookie-policy"
                  className="underline hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
                <span>&bull;</span>
                <Link
                  href="/privacy"
                  className="underline hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <span>&bull;</span>
                <button
                  type="button"
                  onClick={() => setShowPreferences(true)}
                  className="underline hover:text-white transition-colors"
                >
                  Preferences
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="flex-1 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs font-medium text-white/90 transition hover:bg-neutral-800 hover:text-white"
                >
                  Reject
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-black transition hover:bg-neutral-200"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* ── Granular Preferences Modal ───────────────────────────────── */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-fade-in-down"
        >
          <div className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-neutral-950 text-white shadow-2xl border border-neutral-800">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white">
                  <SlidersHorizontal className="h-4 w-4" />
                </div>
                <div>
                  <h2
                    id="cookie-preferences-title"
                    className="text-base font-bold text-white"
                  >
                    Cookie Preferences
                  </h2>
                  <p className="text-[11px] text-white/60">
                    GAID Article 19 &amp; GDPR Opt-In Control
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-900 hover:text-white transition"
                aria-label="Close preferences modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Categories */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3.5 text-xs">
              <p className="text-white/70 leading-relaxed">
                Choose which categories of cookies you permit. Strictly necessary cookies cannot be disabled as they are required for security and core app functionality.
              </p>

              {/* 1. Strictly Necessary */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="h-3.5 w-3.5 text-white" />
                    <span className="font-semibold text-white">Strictly Necessary</span>
                  </div>
                  <span className="rounded-full bg-white/10 text-white px-2 py-0.5 text-[10px] font-semibold">
                    Always Active
                  </span>
                </div>
                <p className="text-white/60 leading-relaxed text-[11px]">
                  Required for core platform security, authentication, stability, and fraud prevention. Exempt from consent under GAID Article 19.
                </p>
              </div>

              {/* 2. Functional */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-3.5 space-y-1.5 hover:border-neutral-700 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">Functional Cookies</span>
                    <p className="text-[11px] text-white/50">Language, display, and regional preferences</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({ ...preferences, functional: e.target.checked })
                      }
                      className="peer sr-only"
                    />
                    <div className="h-5 w-9 rounded-full bg-neutral-800 border border-neutral-700 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:after:w-4 after:rounded-full after:bg-neutral-400 after:transition-all peer-checked:bg-white peer-checked:border-white peer-checked:after:bg-black peer-checked:after:translate-x-4 peer-focus:outline-none" />
                  </label>
                </div>
              </div>

              {/* 3. Analytics / Performance */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-3.5 space-y-1.5 hover:border-neutral-700 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">Analytics &amp; Performance</span>
                    <p className="text-[11px] text-white/50">Anonymized telemetry and error reporting</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="peer sr-only"
                    />
                    <div className="h-5 w-9 rounded-full bg-neutral-800 border border-neutral-700 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:after:w-4 after:rounded-full after:bg-neutral-400 after:transition-all peer-checked:bg-white peer-checked:border-white peer-checked:after:bg-black peer-checked:after:translate-x-4 peer-focus:outline-none" />
                  </label>
                </div>
              </div>

              {/* 4. Marketing */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-3.5 space-y-1.5 hover:border-neutral-700 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">Marketing &amp; Communications</span>
                    <p className="text-[11px] text-white/50">Updates, product notices, and campaign reach</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="peer sr-only"
                    />
                    <div className="h-5 w-9 rounded-full bg-neutral-800 border border-neutral-700 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:after:w-4 after:rounded-full after:bg-neutral-400 after:transition-all peer-checked:bg-white peer-checked:border-white peer-checked:after:bg-black peer-checked:after:translate-x-4 peer-focus:outline-none" />
                  </label>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-900/40 px-5 py-3.5">
              <Link
                href="/cookie-policy"
                onClick={() => setShowPreferences(false)}
                className="text-[11px] text-white/60 underline hover:text-white"
              >
                Full Policy
              </Link>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="rounded-full border border-neutral-700 bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-800"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-neutral-200"
                >
                  Save Choices
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
