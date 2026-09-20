import type { Metadata } from "next";
import DocShell from "../components/doc-shell";
import {
  Cookie,
  ShieldCheck,
  List,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import CookiePreferencesTrigger from "../components/cookie-preferences-trigger";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Review Blink's Cookie Policy governing cookies, tracking technologies, and consent mechanisms under GAID Article 19, NDPA 2023, and GDPR.",
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    title: "Blink Cookie Policy",
    description:
      "Learn how Blink uses strictly necessary and optional cookies, and manage your cookie preferences.",
    url: "https://useblinkapp.com/cookie-policy",
    images: [{ url: "/blink-logo.png", alt: "Blink Cookie Policy" }],
  },
};

const cookieSections = [
  { id: "c1", num: "C1", title: "What Are Cookies" },
  { id: "c2", num: "C2", title: "Types of Cookies We Use" },
  { id: "c3", num: "C3", title: "GAID Legal Basis" },
  { id: "c4", num: "C4", title: "Cookie Banner & Choices" },
  { id: "c5", num: "C5", title: "Third-Party Cookies" },
  { id: "c6", num: "C6", title: "Browser & OS Controls" },
  { id: "c7", num: "C7", title: "Policy Updates" },
  { id: "c8", num: "C8", title: "Contact Us" },
];

export default function CookiePolicyPage() {
  return (
    <DocShell
      eyebrow="Cookie Policy"
      title={
        <>
          Cookie <span className="serif-italic">Policy</span>
        </>
      }
      intro={
        <>
          <span className="font-semibold text-black">
            BLINK LABS COOKIE POLICY (Part C of Privacy Policy)
          </span>
          <br />
          <span className="text-xs text-neutral-500 mt-1 inline-block">
            Effective Date: 27th September, 2026 &bull; Last Updated: 14th September, 2026
          </span>
        </>
      }
      maxWidth="max-w-7xl"
    >
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
        {/* ── Left Sticky Column: Navigation Sidebar ── */}
        <aside className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-5 space-y-4 max-h-[calc(100vh-9rem)] overflow-y-auto">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
              <List className="h-4 w-4 text-black" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-black/80">
                Table of Contents
              </h2>
            </div>

            <nav className="space-y-1">
              {cookieSections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-medium text-black/70 hover:text-black hover:bg-neutral-200/70 transition-colors"
                >
                  <span className="truncate pr-2">
                    <span className="text-neutral-400 font-normal mr-1.5">{item.num}.</span>
                    {item.title}
                  </span>
                  <ChevronRight className="h-3 w-3 text-neutral-400 group-hover:text-black shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-neutral-200 space-y-2">
              <CookiePreferencesTrigger
                label="Cookie Settings"
                className="w-full justify-center text-center inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
              />
            </div>
          </div>
        </aside>

        {/* ── Right Column: Content ── */}
        <div className="flex-1 min-w-0 space-y-10">
          {/* Preference Control Box */}
          <div className="rounded-2xl bg-neutral-100 p-5 sm:p-7 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-black/60 block mb-1">Consent Preferences</span>
              <h2 className="text-lg sm:text-xl font-bold text-black">Manage Your Cookie Settings</h2>
              <p className="text-xs text-neutral-600 mt-0.5 max-w-md">
                In compliance with GAID Article 19, non-essential cookies require your explicit consent. You can update your choices at any time.
              </p>
            </div>
            <CookiePreferencesTrigger label="Configure" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800" />
          </div>

          {/* C1 */}
          <section id="c1" className="scroll-mt-28 space-y-3">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                C1. What Are Cookies
              </h2>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              Cookies are small text files placed on your device when you visit our website or use our App. Similar technologies include local storage, SDKs, pixels, and mobile device identifiers (collectively, &ldquo;Cookies&rdquo; for purposes of this Cookie Policy). Cookies allow the Platform to recognise your device, remember your preferences, and collect information about how you use the Platform.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* C2 */}
          <section id="c2" className="scroll-mt-28 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                C2. Types of Cookies We Use
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-black font-semibold">Strictly Necessary</strong>
                  <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Always Active</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Enable core functions such as security, login sessions, load balancing, and fraud prevention. The Platform cannot function properly without these. Consent is not required — these are exempt where strictly necessary for security, stability, or accessibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-black font-semibold">Functional</strong>
                  <span className="bg-neutral-200 text-neutral-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Consent Required</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Remember your preferences (for example language or display settings) to enhance your experience. Consent required.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-black font-semibold">Analytics / Performance</strong>
                  <span className="bg-neutral-200 text-neutral-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Consent Required</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Help us understand how Users interact with the Platform so we can improve it (for example page views, feature usage, crash reporting). Consent required.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-black font-semibold">Marketing / Advertising</strong>
                  <span className="bg-neutral-200 text-neutral-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Consent Required</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Used to deliver relevant marketing communications and measure their effectiveness, where you have opted in to marketing. Consent required.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* C3 */}
          <section id="c3" className="scroll-mt-28 space-y-3">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                C3. Our Legal Basis for Using Cookies
              </h2>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              In accordance with Article 19 of the GAID, we obtain your prior, freely given, specific, and informed opt-in consent before placing any Cookie on your device other than Cookies that are strictly necessary for the security, stability, or accessibility of the Platform. We do not use pre-ticked boxes or imply consent from continued browsing. Where you are located in the EU/EEA, we apply equivalent consent standards required under the GDPR and applicable e-privacy laws.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* C4 */}
          <section id="c4" className="scroll-mt-28 space-y-3">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                C4. The Cookie Banner and Your Choices
              </h2>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              When you first visit the website or open the App, you will be shown a clear and visible cookie banner explaining what Cookies we use, why, who deploys them (including any third parties), and how you can accept, reject, or customize your preferences. You will not be required to scroll or search to find the cookie banner, and non-essential Cookies will not be set until you provide consent.
            </p>
            <p className="text-sm text-black/80 leading-relaxed">
              You may withdraw or change your consent at any time through the cookie preference centre available on the Platform, or through your browser or device settings. Withdrawing consent will not affect the lawfulness of any processing carried out before withdrawal. We keep a record of the consent choices you make, including the date and scope of consent, in order to demonstrate compliance with applicable law.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* C5 */}
          <section id="c5" className="scroll-mt-28 space-y-3">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                C5. Third-Party Cookies
              </h2>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              Some Cookies on the Platform may be set by third-party service providers, such as analytics providers, fraud-prevention vendors, and (where applicable) marketing platforms. These third parties may combine information collected via Cookies with other information they hold. We require such third parties to process this data only in accordance with our instructions and applicable data protection law.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* C6 */}
          <section id="c6" className="scroll-mt-28 space-y-3">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                C6. How to Control Cookies Through Your Browser or Device
              </h2>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              In addition to the controls provided on the Platform, most web browsers and mobile operating systems allow you to manage or block Cookies through their settings. Please note that blocking strictly necessary Cookies may affect the availability or functionality of certain features of the Platform. Bluetooth permissions are controlled through your device operating-system settings.
            </p>
          </section>

          <hr className="border-neutral-200" />

          {/* C7 & C8 */}
          <section id="c7" className="scroll-mt-28 space-y-3">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                C7. Changes to This Cookie Policy
              </h2>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in the Cookies and similar technologies we use, or to comply with changes in applicable law. Material changes will be notified through the Platform, and, where required, we will seek renewed consent.
            </p>
          </section>

          <hr className="border-neutral-200" />

          <section id="c8" className="scroll-mt-28 space-y-3">
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                C8. Contact Us
              </h2>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              For questions about this Cookie Policy, please contact our Data Protection Officer at <a href="mailto:infodesk@useblinkapp.com" className="text-black font-semibold underline">infodesk@useblinkapp.com</a> or view our full <Link href="/privacy" className="text-black font-semibold underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </div>
    </DocShell>
  );
}
