'use client';
import React from 'react';
import ResourceGrid from '@/components/education/resource-grid';
import educationalResources from '@/data/educational-resources';

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen w-full px-4 py-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center animate-fadein">

      <ResourceGrid 
        resources={educationalResources}
        title="Holocaust Educational Materials"
        description="Browse our collection of educational resources about the Holocaust, including books, articles, videos, and websites."
      />
    </main>
  );
}
