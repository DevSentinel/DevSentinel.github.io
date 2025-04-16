'use client';
import React from 'react';
import ResourceGrid from '@/components/education/resource-grid';
import educationalResources from '@/data/educational-resources';

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen w-full px-4 py-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center animate-fadein">
      <section className="w-full max-w-4xl mb-12">
        <div className="rounded-2xl bg-white/90 shadow-xl p-8 border border-blue-100 flex flex-col items-center gap-4 animate-fadein-glow">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg mb-2 text-center">Educational Resources</h1>
          <p className="text-lg md:text-xl text-blue-900 text-center max-w-2xl">Explore our curated collection of books, articles, videos, and websites about the Holocaust, with a special focus on Canadian connections. Use the filters to find resources that match your interests and learning level.</p>
        </div>
      </section>
      
      <ResourceGrid 
        resources={educationalResources}
        title="Holocaust Educational Materials"
        description="Browse our collection of educational resources about the Holocaust, including books, articles, videos, and websites."
      />
    </main>
  );
}
