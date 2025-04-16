import React from 'react';
import TimelineContainer from '@/components/timeline/timeline-container';

export default function TimelinePage() {
  return (
    <main className="relative min-h-screen w-full px-4 py-12 bg-gradient-to-br from-[#0f172a] via-[#334155] to-[#1e293b] flex flex-col items-center animate-fadein">
      <section className="w-full max-w-5xl mb-12">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 flex flex-col items-center gap-4 animate-fadein-glow">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 tracking-tight drop-shadow-lg mb-2 text-center">Holocaust Timeline</h1>
          <p className="text-lg md:text-xl text-blue-200 text-center max-w-2xl">This timeline presents key events of the Holocaust and Canada's connection to this historical period. Click on events to learn more about them. You can zoom, scroll, and navigate through different time periods.</p>
        </div>
      </section>
      <TimelineContainer />
    </main>
  );
}
