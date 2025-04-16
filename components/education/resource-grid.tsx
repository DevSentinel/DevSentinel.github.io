"use client";

import React, { useState, useCallback, useMemo } from 'react';
import ResourceCard from '@/components/education/resource-card';
import { EducationalResource } from '@/lib/types';
import { Filter, X } from 'lucide-react';

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
  const [activeFilters, setActiveFilters] = useState<{
    types: string[];
    levels: string[];
    tags: string[];
    searchTerm: string;
  }>({
    types: [],
    levels: [],
    tags: [],
    searchTerm: '',
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  // Extract all unique resource types
  const allTypes = useMemo(() => {
    return [...new Set(resources.map(resource => resource.type))];
  }, [resources]);
  
  // Extract all unique resource levels
  const allLevels = useMemo(() => {
    return [...new Set(
      resources
        .filter(resource => resource.level)
        .map(resource => resource.level as string)
    )];
  }, [resources]);
  
  // Extract all unique tags
  const allTags = useMemo(() => {
    return [...new Set(
      resources
        .flatMap(resource => resource.tags || [])
    )];
  }, [resources]);
  
  // Toggle filter for type, level, or tag
  const toggleFilter = useCallback((filterType: 'types' | 'levels' | 'tags', value: string) => {
    setActiveFilters(prev => {
      const isActive = prev[filterType].includes(value);
      
      if (isActive) {
        // Remove the filter
        return {
          ...prev,
          [filterType]: prev[filterType].filter(item => item !== value)
        };
      } else {
        // Add the filter
        return {
          ...prev,
          [filterType]: [...prev[filterType], value]
        };
      }
    });
  }, []);
  
  // Clear all filters
  const clearFilters = useCallback(() => {
    setActiveFilters({
      types: [],
      levels: [],
      tags: [],
      searchTerm: '',
    });
  }, []);
  
  // Handle search input
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveFilters(prev => ({
      ...prev,
      searchTerm: e.target.value
    }));
  }, []);
  
  // Apply filters to resources
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      // Filter by type
      if (activeFilters.types.length > 0 && !activeFilters.types.includes(resource.type)) {
        return false;
      }
      
      // Filter by level
      if (activeFilters.levels.length > 0 && resource.level && !activeFilters.levels.includes(resource.level)) {
        return false;
      }
      
      // Filter by tags
      if (activeFilters.tags.length > 0 && (!resource.tags || !resource.tags.some(tag => activeFilters.tags.includes(tag)))) {
        return false;
      }
      
      // Filter by search term
      if (activeFilters.searchTerm) {
        const searchTerm = activeFilters.searchTerm.toLowerCase();
        const matchesTitle = resource.title.toLowerCase().includes(searchTerm);
        const matchesDescription = resource.description.toLowerCase().includes(searchTerm);
        const matchesAuthor = resource.author?.toLowerCase().includes(searchTerm) || false;
        
        if (!matchesTitle && !matchesDescription && !matchesAuthor) {
          return false;
        }
      }
      
      return true;
    });
  }, [resources, activeFilters]);
  const hasActiveFilters = useMemo(() => {
    return activeFilters.types.length > 0 || 
           activeFilters.tags.length > 0;
  }, [activeFilters]);
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
