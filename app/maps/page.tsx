import React from 'react';
import MapsClient from '@/components/maps/maps-client';

export default function MapsPage() {
  return (
    <main className="relative min-h-screen w-full px-4 py-12 bg-gradient-to-br from-[#0f172a] via-[#334155] to-[#1e293b] flex flex-col items-center animate-fadein">
      <section className="w-full max-w-4xl mb-12">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 flex flex-col items-center gap-4 animate-fadein-glow">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 tracking-tight drop-shadow-lg mb-2 text-center">Maps & Historical Context</h1>
          <p className="text-lg md:text-xl text-blue-200 text-center max-w-2xl">Explore key locations in Europe and Canada related to the Holocaust through our interactive map. Click on markers to learn more about each location and its historical significance.</p>
        </div>
      </section>
      <section className="w-full max-w-4xl">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 animate-fadein-glow">
          <MapsClient />
        </div>
      </section>
    </main>
  );
}
