"use client";

import React from 'react';
import ResourceCard from '@/components/education/resource-card';
import { EducationalResource } from '@/lib/types';


interface ResourceGridProps {
  resources: EducationalResource[];
  title?: string;
  description?: string;
}

export default function ResourceGrid({ 
  resources,
  title = "Educational Resources",
  description
}: ResourceGridProps) {
  // Filters are disabled; render all resources directly
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col gap-10 mt-24">
      {/* Header */}
      {(title || description) && (
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
      )}
      
      {/* Resource grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
        {resources.map(resource => (
          <div key={resource.id} className="animate-fadein-up py-12">
            <div className="bg-white/30 backdrop-blur-lg shadow-xl border-gradient rounded-3xl hover:scale-105 hover:shadow-blue-200/70 transition">
              <ResourceCard resource={resource} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
