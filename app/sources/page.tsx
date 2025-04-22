import React from 'react';
import SourcesReferences from '@/components/about/sources-references';
import { sourceCategories, references } from '@/data/sources-references';

export default function SourcesPage() {
  return (
    <main className="relative min-h-screen w-full px-4 py-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center animate-fadein">
      <SourcesReferences 
        references={references}
        categories={sourceCategories}
        title="Sources & References"
        description="This page provides a list of all sources and references used in the creation of this Holocaust history educational resource. Information based on scholarly research and primary sources."
      />
    </main>
  );
}
