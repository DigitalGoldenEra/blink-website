import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: "Platform Analytics",
  description:
    "Live, transparent Blink network statistics. Track total settlement volume in NGN and USD, active users, and transaction breakdown powered by Dune Analytics.",
  alternates: { canonical: "/dunes" },
  openGraph: {
    title: "Blink Platform Analytics | Live Stats",
    description:
      "Real-time Blink network data: settlement volumes, user counts, and transaction flow on Stellar, Solana & Base.",
    url: "https://useblinkapp.com/dunes",
    images: [{ url: "/blink-logo.png", alt: "Blink Analytics" }],
  },
  twitter: {
    card: "summary",
    title: "Blink Live Analytics",
    description:
      "Real-time settlement volumes and transaction data from the Blink network.",
    images: ["/blink-logo.png"],
  },
};

type StatsResponse = {
  ngnVolume: number;
  exchangeRate: number;
  usdEquivalent: number;
  totalUsers: number;
  stats: Record<string, number>;
};

async function getStats(): Promise<StatsResponse | null> {
  try {
    const res = await fetch('https://api.useblinkapp.com/api/stats', {
      headers: {
        'Origin': 'https://useblinkapp.com',
      },
      next: { revalidate: 60 }
    });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    return null;
  }
}

const DUNE_CHARTS = [
  {
    src: 'https://dune.com/embeds/7764385/11730137',
    label: 'Settlement Volume Over Time',
    description: 'Cumulative NGN settlement volume tracked on-chain',
  },
  {
    src: 'https://dune.com/embeds/7764315/11730069',
    label: 'Transaction Flow',
    description: 'Daily transaction count across all supported chains',
  },
  {
    src: 'https://dune.com/embeds/7764315/11730059',
    label: 'User Growth',
    description: 'Cumulative unique wallet addresses interacting with Blink',
  },
];

const BREAKDOWN_COLORS = [
  'from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400',
  'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400',
  'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
  'from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400',
  'from-rose-500/20 to-rose-500/5 border-rose-500/20 text-rose-400',
  'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
  'from-pink-500/20 to-pink-500/5 border-pink-500/20 text-pink-400',
  'from-orange-500/20 to-orange-500/5 border-orange-500/20 text-orange-400',
];

export default async function DunesPage() {
  const statsData = await getStats();
  const fetchedAt = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#0a0a0a]">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-grow flex-col items-center px-4 pb-24 pt-36 md:pt-44">

        {/* ── Header ─────────────────────────────────── */}
        <div className="mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
              Live Statistics
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-normal leading-[1.1] tracking-tight text-white md:text-6xl">
            Platform{' '}
            <em
              className="not-italic"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
            >
              analytics
            </em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
            Transparent, real-time insights into Blink&apos;s network activity and
            adoption. Powered by on-chain data via Dune Analytics.
          </p>
          {statsData && (
            <p className="mt-3 text-xs text-white/30">
              Last updated at {fetchedAt} · refreshes every 60 s
            </p>
          )}
        </div>

        {/* ── KPI Cards ─────────────────────────────── */}
        {statsData && (
          <div className="mb-8 w-full space-y-6">

            {/* Top 3 hero cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

              {/* NGN Volume */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/60 to-black p-6 shadow-lg transition-all duration-500 hover:border-violet-500/40 hover:shadow-violet-900/30 hover:shadow-2xl">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-xl bg-violet-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-violet-300">
                    NGN Volume
                  </span>
                  <span className="text-lg text-violet-400">₦</span>
                </div>
                <div className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  ₦{statsData.ngnVolume.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <p className="mt-2 text-xs text-white/35">Total settled in Naira</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-violet-500/40 to-transparent" />
              </div>

              {/* USD Volume */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950/60 to-black p-6 shadow-lg transition-all duration-500 hover:border-emerald-500/40 hover:shadow-emerald-900/30 hover:shadow-2xl">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-xl bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
                    USD Volume
                  </span>
                  <span className="text-lg text-emerald-400">$</span>
                </div>
                <div className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  ${statsData.usdEquivalent.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <p className="mt-2 text-xs text-white/35">USD equivalent settled</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-emerald-500/40 to-transparent" />
              </div>

              {/* Total Users */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/60 to-black p-6 shadow-lg transition-all duration-500 hover:border-blue-500/40 hover:shadow-blue-900/30 hover:shadow-2xl">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-xl bg-blue-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-blue-300">
                    Total Users
                  </span>
                  <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {statsData.totalUsers.toLocaleString()}
                </div>
                <p className="mt-2 text-xs text-white/35">Unique wallets on network</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500/40 to-transparent" />
              </div>
            </div>

            {/* Transaction Breakdown */}
            {Object.keys(statsData.stats).length > 0 && (
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black p-6 shadow-lg md:p-8">
                {/* subtle grid pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg,transparent,transparent 39px,white 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,white 40px)',
                  }}
                />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                      <svg className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-white">Transaction Breakdown</h2>
                      <p className="text-xs text-white/40">Detailed on-chain activity metrics</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {Object.entries(statsData.stats).map(([key, value], i) => {
                      const colorClass = BREAKDOWN_COLORS[i % BREAKDOWN_COLORS.length];
                      return (
                        <div
                          key={key}
                          className={`group flex flex-col gap-1.5 rounded-2xl border bg-gradient-to-br p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${colorClass}`}
                        >
                          <span className="text-[10px] font-semibold uppercase tracking-widest opacity-70">
                            {key.replace(/_/g, ' ')}
                          </span>
                          <span className="text-2xl font-bold text-white">
                            {Number(value).toLocaleString()}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Dune Chart Embeds ─────────────────────── */}
        <div className="w-full space-y-6">
          {DUNE_CHARTS.map((chart, i) => (
            <div
              key={chart.src}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black shadow-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
            >
              {/* Chart header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-xs font-bold text-white/60">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{chart.label}</p>
                    <p className="text-xs text-white/40">{chart.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-medium text-white/50">Live</span>
                </div>
              </div>
              {/* iframe */}
              <div className="h-[60vh] min-h-[400px] w-full">
                <iframe
                  src={chart.src}
                  className="h-full w-full border-none"
                  title={chart.label}
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Powered-by strip ──────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-xs text-white/25">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Powered by Dune Analytics · Data refreshes every 60 seconds
        </div>
      </main>

      <Footer />
    </div>
  );
}

