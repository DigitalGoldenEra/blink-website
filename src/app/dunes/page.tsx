import type { Metadata } from 'next';
import Navbar from '../components/navbar';

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

export default async function DunesPage() {
  const statsData = await getStats();

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col">
      {/* Container for Navbar to keep it centered and spaced similarly to home */}
      <div className="w-full pt-4 px-4">
        <Navbar />
      </div>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col items-center">
        {/* Header / Info Section */}
        <div className="text-center mb-12 max-w-3xl">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-sm font-medium text-black">
            Live Statistics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-heading tracking-tight">
            Platform Analytics
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 font-medium">
            Transparent, real-time insights into Blink's network activity and adoption.
            Track settlement volumes and transaction flow powered by Dune Analytics.
          </p>
        </div>

        {/* Live Stats Grid */}
        {statsData && (
          <div className="w-full mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Stat Cards */}
              <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all">
                <div className="text-sm font-medium text-zinc-500 mb-2">Total Volume (NGN)</div>
                <div className="text-3xl font-bold text-black">
                  ₦{statsData.ngnVolume.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all">
                <div className="text-sm font-medium text-zinc-500 mb-2">Total Volume (USD)</div>
                <div className="text-3xl font-bold text-black">
                  ${statsData.usdEquivalent.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all">
                <div className="text-sm font-medium text-zinc-500 mb-2">Total Users</div>
                <div className="text-3xl font-bold text-black">
                  {statsData.totalUsers.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all">
              <div className="text-lg font-bold text-black mb-6">Transaction Breakdown</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                {Object.entries(statsData.stats).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                      {key.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xl font-bold text-black">
                      {Number(value).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Iframe Container */}
        <div className="w-full h-[75vh] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-black/5 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] mb-10">
          <iframe
            src="https://dune.com/embeds/7764315/11730069?darkMode=false"
            className="w-full h-full border-none bg-white"
            title="Dune Analytics Stats"
            allowFullScreen
          />
        </div>
        <div className="w-full h-[75vh] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-black/5 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
          <iframe src="https://dune.com/embeds/7764315/11730059?darkMode=false" className="w-full h-full border-none bg-white"
            title="Dune Analytics Stats"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}
