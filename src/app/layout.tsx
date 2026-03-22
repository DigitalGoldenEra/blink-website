import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import SmoothScroll from './components/smooth-scroll';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Blink – Crypto payments for the real world | Stellar',
  description:
    'Blink is a native mobile app for real-world crypto payments: Bluetooth Tap-to-Pay and Scan-to-Pay (QR) on Stellar. Pay with crypto; merchants settle in USD or Naira.',
  keywords: [
    'Blink',
    'crypto payments',
    'Stellar',
    'Bluetooth payments',
    'QR payments',
    'stablecoins',
    'Web3',
    'fintech',
  ],
  openGraph: {
    title: 'Blink – Real-world crypto payments on Stellar',
    description:
      'Spend crypto in stores without cards or Big Tech wallets. Tap with Bluetooth, scan with QR, settle in seconds.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
