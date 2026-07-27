import Link from "next/link";
import DriftLogo from "./drift-logo";

const footerLinks = [
  {
    label: "How to use",
    href: "https://useblinkapp.substack.com/p/blink-is-live-the-future-of-crypto?r=7bclo4",
    external: true,
  },
  { label: "Docs", href: "/doc" },
  { label: "Dunes", href: "/dunes" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Delete account", href: "/delete-account" },
];

const socials = [
  { label: "X", href: "https://x.com/useblinkapp" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/blink-wallet/" },
  { label: "Instagram", href: "https://www.instagram.com/useblinkapp/" },
  { label: "Telegram", href: "https://t.me/useblinkapp" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black border-t border-neutral-900 px-6 pt-24 pb-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-3">
        <Link href="#hero" className="flex items-center gap-4">
          <DriftLogo size={44} fill="#ffffff" />
          <span className="text-4xl font-semibold tracking-tight text-white">
            Blink
          </span>
        </Link>

        <nav className="flex flex-col gap-4">
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <p className="text-3xl font-normal leading-[1.2] tracking-tight text-white md:text-4xl lg:text-right">
          Money you{" "}
          <em
            className="not-italic"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
            }}
          >
            control
          </em>
        </p>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row">
        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-white/60 transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/50">© {currentYear} Blink Labs</p>
      </div>
    </footer>
  );
}
