import type { Metadata } from 'next';
import Navbar from '../components/navbar';

export const metadata: Metadata = {
  title: 'Dune Stats',
  description: 'Blink statistics on Dune Analytics',
};

export default function DunesPage() {
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

        {/* Iframe Container */}
        <div className="w-full h-[75vh] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-black/5 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] mb-10">
          <iframe
            src="https://dune.com/embeds/7567423/11519256?darkMode=false"
            className="w-full h-full border-none bg-white"
            title="Dune Analytics Stats"
            allowFullScreen
          />
        </div>
        <div className="w-full h-[75vh] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-black/5 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
          <iframe src="https://dune.com/embeds/7567423/11519295?darkMode=false" className="w-full h-full border-none bg-white"
            title="Dune Analytics Stats"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}
