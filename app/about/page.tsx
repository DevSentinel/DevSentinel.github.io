import React, { Suspense } from 'react';
import ClientAboutContent from './client-about-content';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full px-4 py-12 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] flex flex-col items-center animate-fadein">
      <section className="w-full max-w-4xl mb-12">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 flex flex-col items-center gap-4 animate-fadein-glow">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 tracking-tight drop-shadow-lg mb-2 text-center">About This Project</h1>
          <p className="text-lg md:text-xl text-blue-200 text-center max-w-2xl">Discover the story and mission behind this Holocaust education resource. Our project blends rigorous research with a modern, interactive experience, designed to engage and inform a new generation of learners.</p>
        </div>
      </section>
      <Suspense fallback={<div className="text-center py-12 text-blue-100">Loading...</div>}>
        <ClientAboutContent />
      </Suspense>
    </main>
  );
}
