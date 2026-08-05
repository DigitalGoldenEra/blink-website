import Image from "next/image";

type DriftLogoProps = {
  size?: number;
  className?: string;
  /** Animation variant.
   *  - "default"   : spin-in + float + hover pop (light backgrounds)
   *  - "dark"      : spin-in + float + glow pulse + hover pop (dark backgrounds, logo inverted to white)
   *  - "inline"    : spin-in + hover pop only, no float (navbar)
   *  - "inline-dark" : inline on dark backgrounds (logo inverted)
   *  - "none"      : no animation
   */
  variant?: "default" | "dark" | "inline" | "inline-dark" | "none";
};

/** Render the new Blink logo image with eye-catching animations. */
export default function DriftLogo({
  size = 40,
  className,
  variant = "default",
}: DriftLogoProps) {
  const animClass =
    variant === "dark"
      ? "logo-animate-on-dark"
      : variant === "inline"
      ? "logo-animate-inline"
      : variant === "inline-dark"
      ? "logo-animate-inline"
      : variant === "none"
      ? ""
      : "logo-animate";

  // Invert the black logo to white for dark backgrounds
  const invertStyle =
    variant === "dark" || variant === "inline-dark"
      ? { filter: "invert(1)" }
      : undefined;

  return (
    <Image
      src="/blink-logo.png"
      alt="Blink Logo"
      width={size}
      height={size}
      className={[animClass, className].filter(Boolean).join(" ")}
      style={invertStyle}
      priority
    />
  );
}
