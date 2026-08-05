import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import SmoothScroll from './components/smooth-scroll';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const APP_NAME = "Blink";
const APP_DEFAULT_TITLE = "Blink – Crypto payments at the counter, settled in local currency";
const APP_TITLE_TEMPLATE = "%s | Blink";
const APP_DESCRIPTION =
  "Blink lets you pay with USDC via Bluetooth — no wallet addresses, no QR codes. Merchants receive instant settlement in local currency (NGN, KES, GHS). Built for emerging markets on Stellar, Solana & Base.";

const BASE_URL = "https://useblinkapp.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: APP_NAME,
  category: "finance",
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: [
    // Brand
    'Blink', 'Blink app', 'useblinkapp', 'Blink wallet',
    // Core value props
    'crypto payments', 'Bluetooth payments', 'BLE payments', 'tap to pay crypto',
    'stablecoin payments', 'USDC payments', 'offline crypto',
    // Chains
    'Stellar', 'Solana', 'Base', 'USDC', 'stablecoins', 'Web3',
    // Geographies
    'Nigeria', 'Kenya', 'Ghana', 'South Africa', 'Africa crypto',
    'emerging markets', 'emerging market payments',
    // Business
    'merchant settlement', 'local currency settlement', 'NGN', 'KES', 'GHS',
    'fintech Africa', 'DeFi payments', 'non-custodial wallet',
    // Technical
    'Bluetooth Low Energy', 'BLE', 'crypto POS', 'crypto checkout',
    'real-world crypto', 'instant settlement',
  ],
  authors: [{ name: "Blink App Team", url: BASE_URL }],
  creator: "Blink",
  publisher: "Blink Payments",
  formatDetection: { telephone: false },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    url: BASE_URL,
    locale: "en_US",
    images: [
      {
        url: "/blink-logo.png",
        width: 1200,
        height: 630,
        alt: "Blink – Real-world crypto payments via Bluetooth",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@useblinkapp",
    creator: "@useblinkapp",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/blink-logo.png",
        alt: "Blink – Crypto payments at the counter",
      },
    ],
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
    statusBarStyle: "black-translucent",
    title: APP_NAME,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/** JSON-LD structured data for the site */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP_NAME,
  url: BASE_URL,
  description: APP_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: BASE_URL,
  operatingSystem: "iOS, Android",
  applicationCategory: "FinanceApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "Blink Payments",
    url: BASE_URL,
    logo: `${BASE_URL}/blink-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "admin@useblinkapp.com",
      contactType: "customer support",
    },
    sameAs: [
      "https://x.com/useblinkapp",
      "https://www.linkedin.com/company/blink-wallet/",
      "https://www.instagram.com/useblinkapp/",
      "https://t.me/useblinkapp",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}

