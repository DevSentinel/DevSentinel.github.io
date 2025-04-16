import React from 'react';
import SourcesReferences from '@/components/about/sources-references';
import { sourceCategories, references } from '@/data/sources-references';

export default function SourcesPage() {
  return (
    <main className="relative min-h-screen w-full px-4 py-12 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] flex flex-col items-center animate-fadein">
      <section className="w-full max-w-4xl mb-12">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 flex flex-col items-center gap-4 animate-fadein-glow">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 tracking-tight drop-shadow-lg mb-2 text-center">Sources & References</h1>
          <p className="text-lg md:text-xl text-blue-200 text-center max-w-2xl">This page provides a comprehensive list of all sources and references used in the creation of this Holocaust history educational resource. We are committed to historical accuracy and providing reliable information based on scholarly research and primary sources.</p>
        </div>
      </section>
      
      <SourcesReferences 
        references={references}
        categories={sourceCategories}
      />
    </main>
  );
}
