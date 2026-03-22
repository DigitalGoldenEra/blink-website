"use client";

export default function Doc() {
  return (
    <div className="min-h-screen bg-white px-6 py-24 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl font-bold text-black mb-4">Blink</h1>
      <p className="text-zinc-600 leading-relaxed mb-6">
        Product documentation for the Blink mobile app (Stellar-based crypto
        payments, Bluetooth Tap-to-Pay, and QR Scan-to-Pay) will live here.
      </p>
      <a href="/" className="text-black font-medium underline underline-offset-4">
        Back to home
      </a>
    </div>
  );
}