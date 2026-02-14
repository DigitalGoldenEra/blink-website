import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

// Configure Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

// Configure Syne font for headings
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Blinks – Instant Crypto Payments with Tap-to-Pay (NFC) & Scan-to-Pay (QR)',
  description:
    'BLINKS is the all-in-one crypto payment app enabling instant real-world Tap-to-Pay (NFC) and Scan-to-Pay (QR) transactions with automatic local currency settlement.',
  keywords: [
    'crypto payments',
    'tap to pay crypto',
    'scan to pay crypto',
    'NFC crypto payments',
    'QR crypto payments',
    'instant crypto settlement',
    'real world crypto payments',
    'web3 payments',
    'crypto point of sale',
  ],
  openGraph: {
    title:
      'Blinks – Real-World Crypto Payments Made Simple',
    description:
      'Pay with crypto anywhere using NFC or QR and receive instant local currency settlement with BLINKS.',
    type: 'website',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className={inter.className}  >
          {children} <Analytics />
      </body>
    </html>
  );
}