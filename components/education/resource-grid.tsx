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
           activeFilters.levels.length > 0 || 
           activeFilters.tags.length > 0 || 
           activeFilters.searchTerm !== '';
  }, [activeFilters]);
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col gap-10">
      {/* Header */}
      {(title || description) && (
        <div className="bg-white/90 shadow-xl p-8 rounded-2xl border border-blue-100 mb-10 flex flex-col items-center gap-6">
          {title && <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg text-center">{title}</h2>}
          {description && <p className="text-gray-700">{description}</p>}
        </div>
      )}
      
      {/* Filters */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-4 bg-white/40 backdrop-blur-lg shadow-xl rounded-2xl px-6 py-4 mb-4">

          {/* Search input */}
          <div className="flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search resources..."
              value={activeFilters.searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-full bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-blue-900 placeholder:text-blue-400 transition"
            />
          </div>
          
          {/* Filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
              hasActiveFilters 
                ? 'bg-navy text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            <Filter size={16} />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="bg-white text-navy rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {activeFilters.types.length + activeFilters.levels.length + activeFilters.tags.length}
              </span>
            )}
          </button>
          
          {/* Clear filters button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-600 hover:text-navy transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
        
        {/* Filter panel */}
        {showFilters && (
          <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Filter Resources</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close filters"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Resource Types */}
              <div>
                <h4 className="font-medium mb-2">Resource Type</h4>
                <div className="space-y-2">
                  {allTypes.map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.types.includes(type)}
                        onChange={() => toggleFilter('types', type)}
                        className="rounded text-navy focus:ring-navy"
                      />
                      <span className="capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Resource Levels */}
              {allLevels.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Level</h4>
                  <div className="space-y-2">
                    {allLevels.map(level => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.levels.includes(level)}
                          onChange={() => toggleFilter('levels', level)}
                          className="rounded text-navy focus:ring-navy"
                        />
                        <span className="capitalize">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Tags */}
              {allTags.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Topics</h4>
                  <div className="space-y-2">
                    {allTags.map(tag => (
                      <label key={tag} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.tags.includes(tag)}
                          onChange={() => toggleFilter('tags', tag)}
                          className="rounded text-navy focus:ring-navy"
                        />
                        <span>{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Active filters display */}
        {hasActiveFilters && (
          <div className="mt-3 flex flex-wrap gap-2">
            {activeFilters.types.map(type => (
              <div 
                key={type}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white bg-navy"
              >
                <span className="capitalize">{type}</span>
                <button
                  onClick={() => toggleFilter('types', type)}
                  className="hover:bg-white/20 rounded-full p-0.5"
                  aria-label={`Remove ${type} filter`}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
            
            {activeFilters.levels.map(level => (
              <div 
                key={level}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white bg-gray-600"
              >
                <span>{level}</span>
                <button
                  onClick={() => toggleFilter('levels', level)}
                  className="hover:bg-white/20 rounded-full p-0.5"
                  aria-label={`Remove ${level} filter`}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
            
            {activeFilters.tags.map(tag => (
              <div 
                key={tag}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white bg-gold"
              >
                <span>{tag}</span>
                <button
                  onClick={() => toggleFilter('tags', tag)}
                  className="hover:bg-white/20 rounded-full p-0.5"
                  aria-label={`Remove ${tag} filter`}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
            
            {activeFilters.searchTerm && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white bg-gray-500">
                <span>Search: {activeFilters.searchTerm}</span>
                <button
                  onClick={() => setActiveFilters(prev => ({ ...prev, searchTerm: '' }))}
                  className="hover:bg-white/20 rounded-full p-0.5"
                  aria-label="Clear search"
                >
                  <X size={12} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Resource grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredResources.map(resource => (
          <div key={resource.id} className="animate-fadein-up">
            <div className="bg-white/30 backdrop-blur-lg shadow-xl border-gradient rounded-3xl hover:scale-105 hover:shadow-blue-200/70 transition">
              <ResourceCard resource={resource} />
            </div>
          </div>
        ))}
      </div>
      {filteredResources.length === 0 && (
        <div className="p-8 text-center border border-gray-200 rounded-lg bg-gray-50">
          <p className="text-gray-600">No resources match your current filters.</p>
          <button
            onClick={clearFilters}
            className="mt-2 text-navy hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
