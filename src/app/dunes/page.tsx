import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'Dune Stats',
  description: 'Blink statistics on Dune Analytics',
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

const cardClass =
  "rounded-3xl bg-[#FFF9F2] p-6 transition-colors hover:bg-white";

export default async function DunesPage() {
  const statsData = await getStats();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#F6E4CF]">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-grow flex-col items-center px-4 pb-20 pt-36 md:pt-44">
        {/* Header */}
        <div className="mb-14 max-w-3xl text-center">
          <p className="eyebrow text-[#321C04]/60">Live Statistics</p>
          <h1 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-[#321C04] md:text-6xl">
            Platform <span className="serif-italic">analytics</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#321C04]/70 md:text-lg">
            Transparent, real-time insights into Blink&apos;s network activity and
            adoption. Track settlement volumes and transaction flow powered by Dune
            Analytics.
          </p>
        </div>

        {/* Live Stats */}
        {statsData && (
          <div className="mb-12 w-full">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className={cardClass}>
                <div className="mb-2 text-sm font-medium text-[#321C04]/55">
                  Total Volume (NGN)
                </div>
                <div className="text-3xl font-semibold text-[#321C04]">
                  ₦
                  {statsData.ngnVolume.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
              <div className={cardClass}>
                <div className="mb-2 text-sm font-medium text-[#321C04]/55">
                  Total Volume (USD)
                </div>
                <div className="text-3xl font-semibold text-[#321C04]">
                  $
                  {statsData.usdEquivalent.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
              <div className={cardClass}>
                <div className="mb-2 text-sm font-medium text-[#321C04]/55">
                  Total Users
                </div>
                <div className="text-3xl font-semibold text-[#321C04]">
                  {statsData.totalUsers.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#FFF9F2] p-6 md:p-8">
              <div className="mb-6 text-lg font-semibold text-[#321C04]">
                Transaction Breakdown
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
                {Object.entries(statsData.stats).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#321C04]/45">
                      {key.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xl font-semibold text-[#321C04]">
                      {Number(value).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Dune embeds */}
        {[
          'https://dune.com/embeds/7764385/11730137',
          'https://dune.com/embeds/7764315/11730069',
          'https://dune.com/embeds/7764315/11730059',
        ].map((src) => (
          <div
            key={src}
            className="mb-8 h-[75vh] w-full overflow-hidden rounded-3xl bg-[#FFF9F2]"
          >
            <iframe
              src={src}
              className="h-full w-full border-none"
              title="Dune Analytics Stats"
              allowFullScreen
            />
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
