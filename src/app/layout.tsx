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
  title: 'Fortichain – Software Development Agency | Build What Matters',
  description:
    'Fortichain is a software development agency that builds modern, scalable digital products. Web apps, mobile apps, and custom software solutions.',
  keywords: [
    'software development agency',
    'web development',
    'mobile app development',
    'custom software',
    'digital products',
    'Fortichain',
  ],
  openGraph: {
    title: 'Fortichain – Software Development Agency',
    description: 'We build modern, scalable digital products that drive growth.',
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
