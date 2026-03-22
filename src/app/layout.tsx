import type { Metadata, Viewport } from 'next';
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

const APP_NAME = "Blink";
const APP_DEFAULT_TITLE = "Blink – Crypto Payments for the Real World";
const APP_TITLE_TEMPLATE = "%s - Blink";
const APP_DESCRIPTION = "Blink is a native mobile app for real-world crypto payments: Bluetooth Tap-to-Pay and Scan-to-Pay (QR) on blockchain. Pay with crypto; merchants settle in fiat.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'Blink',
    'crypto payments',
    'Blockchain',
    'Stellar',
    'Solana',
    'Base',
    'Bluetooth payments',
    'QR payments',
    'stablecoins',
    'Web3',
    'fintech',
    'point of sale',
    'merchant settlement'
  ],
  authors: [{ name: "Blink App Team", url: "https://useblinkapp.com/" }],
  creator: "Blink",
  publisher: "Blink Payments",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://useblinkapp.com/"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    url: "https://useblinkapp.com/",
    locale: "en_US",
    images: [
      {
        url: "/logo.svg", // Replace with a massive rich OG image.
        width: 1200,
        height: 630,
        alt: "Blink – Real-world crypto payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@useblinkapp", 
    creator: "@useblinkapp",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: ["/logo.svg"], // Same OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
