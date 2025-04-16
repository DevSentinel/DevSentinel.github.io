import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

export default function SearchPage() {
  // Hero section for search
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[60vh] py-10">
      <section className="w-full max-w-4xl mb-12">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 flex flex-col items-center gap-4 animate-fadein-glow">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 tracking-tight drop-shadow-lg mb-2 text-center">Search</h1>
          <p className="text-lg md:text-xl text-blue-200 text-center max-w-2xl">Quickly search for Holocaust events, locations, resources, and more. Use filters to refine your results and discover new insights.</p>
        </div>
      </section>
      <form className="w-full max-w-xl mx-auto flex items-center gap-2 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white/80 text-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search (visual only)"
            disabled
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon size={22} />
          </span>
        </div>
      </form>
      <div className="text-blue-200 text-center opacity-50">Search is currently disabled. This is a visual placeholder only.</div>
    </main>
  );
}
