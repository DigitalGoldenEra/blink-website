import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import SmoothScroll from './components/smooth-scroll';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
});

const APP_NAME = "Blink";
const APP_DEFAULT_TITLE = "Blink – Crypto payments at the counter, settled in local currency";
const APP_TITLE_TEMPLATE = "%s - Blink";
const APP_DESCRIPTION =
  "Blink is a mobile app for merchants to accept real-world crypto payments via Bluetooth, with instant settlement in local currency. Built for emerging markets — spend USDC without tedious off-ramps; merchants avoid volatility.";

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
    'Bluetooth payments',
    'BLE',
    'USDC',
    'Stellar',
    'Solana',
    'Base',
    'Nigeria',
    'Kenya',
    'Ghana',
    'South Africa',
    'emerging markets',
    'stablecoins',
    'Web3',
    'fintech',
    'merchant settlement',
    'NGN',
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
        url: "/blink-logo.png", // Replace with a massive rich OG image.
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
    images: ["/blink-logo.png"], // Same OG image
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
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
