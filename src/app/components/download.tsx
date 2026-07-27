import DriftLogo from "./drift-logo";

function AppleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}

function PlayMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7l-.1.1zm13.2 13.5-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2h-.1zm-.1-6.9L13.5 11 4.4 1.9c.4-.4 1-.4 1.7 0l10.6 6.5zM4.4 22.1l9.1-9.1 3.2 3.2L6.1 22.1c-.7.4-1.3.4-1.7 0z"
      />
    </svg>
  );
}

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="relative z-10 bg-neutral-950 px-6 py-24 md:py-32 border-t border-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <DriftLogo size={48} fill="#ffffff" />
        <p className="mt-8 eyebrow text-white/60">Get Blink</p>

        <h2 className="mt-6 text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          Start paying
          <br />
          in a{" "}
          <em
            className="not-italic"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
            }}
          >
            blink
          </em>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Download the app and experience crypto payments that finally feel
          like cash — tap, confirm, settled.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://testflight.apple.com/join/gNkuP7cP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-black transition-colors hover:bg-neutral-200 sm:w-auto"
          >
            <AppleMark className="h-6 w-6" />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase tracking-wide text-black/60">
                Download for iOS
              </span>
              <span className="text-base font-medium">TestFlight</span>
            </span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.fortichain.blink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-neutral-900 border border-neutral-800 px-8 py-4 text-white transition-colors hover:bg-neutral-800 sm:w-auto"
          >
            <PlayMark className="h-6 w-6" />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase tracking-wide text-white/60">
                Get it on
              </span>
              <span className="text-base font-medium">Google Play</span>
            </span>
          </a>
        </div>

        <p className="mt-8 max-w-sm text-[11px] leading-relaxed text-white/50">
          * iOS users: after installing TestFlight, tap the iOS button again to
          install Blink.
        </p>
      </div>
    </section>
  );
}
