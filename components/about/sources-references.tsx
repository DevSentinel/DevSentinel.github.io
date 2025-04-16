"use client";
import React from 'react';
import SourcesCard from './sources-card';
import { Reference } from '@/data/sources-references';

interface SourcesReferencesProps {
  references: Reference[];
  categories: { id: string; name: string }[];
  title?: string;
  description?: string;
}

export default function SourcesReferences({ references, categories, title, description }: SourcesReferencesProps) {

  
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col gap-10 mt-24">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto mb-12 text-center mt-16">
        {title && (
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg mb-3 font-playfair">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mx-auto mb-2">
            {description}
          </p>
        )}
      </div>
      {/* References grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 py-12">
        {references.map(reference => (
          <div key={reference.id} className="animate-fadein-up w-full">
            <SourcesCard reference={reference} categories={categories} />
          </div>
        ))}
      </div>
    </div>
  );
}
