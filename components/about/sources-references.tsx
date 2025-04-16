"use client";
import React, { useState } from 'react';
import { ExternalLink, Search, X } from 'lucide-react';
import { Reference } from '@/data/sources-references';

interface SourcesReferencesProps {
  references: Reference[];
  categories: { id: string; name: string }[];
}

export default function SourcesReferences({ references, categories }: SourcesReferencesProps) {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Toggle category filter
  const toggleCategory = (categoryId: string) => {
    setActiveCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setActiveCategories([]);
    setSearchTerm('');
  };
  
  // Filter references based on active categories and search term
  const filteredReferences = references.filter(reference => {
    // Filter by categories
    if (activeCategories.length > 0) {
      if (!reference.categories.some(category => activeCategories.includes(category))) {
        return false;
      }
    }
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const titleMatch = reference.title.toLowerCase().includes(searchLower);
      const authorMatch = reference.author?.toLowerCase().includes(searchLower) || false;
      const descriptionMatch = reference.description?.toLowerCase().includes(searchLower) || false;
      
      if (!titleMatch && !authorMatch && !descriptionMatch) {
        return false;
      }
    }
    
    return true;
  });
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy mb-4">Sources & References</h2>
      
      <p className="text-gray-700">
        This project draws on a wide range of historical sources, academic research, and educational materials.
        Below is a comprehensive list of references used in creating this educational resource.
      </p>
      
      {/* Search and filter controls */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search references..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X size={18} className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        
        {/* Category filters */}
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">Filter by category:</div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeCategories.includes(category.id)
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
            
            {(activeCategories.length > 0 || searchTerm) && (
              <button
                onClick={clearFilters}
                className="px-3 py-1 text-sm rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* References list */}
      <div className="space-y-4 mt-6">
        {filteredReferences.length > 0 ? (
          filteredReferences.map(reference => (
            <div 
              key={reference.id}
              className="border border-gray-200 rounded-lg p-4 bg-white"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-navy">{reference.title}</h3>
                {reference.url && (
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-gold flex items-center gap-1 text-sm"
                  >
                    <span>Visit</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              
              {(reference.author || reference.year) && (
                <p className="text-sm text-gray-600 mt-1">
                  {reference.author && <span>{reference.author}</span>}
                  {reference.author && reference.year && <span>, </span>}
                  {reference.year && <span>{reference.year}</span>}
                  {reference.publication && <span> ({reference.publication})</span>}
                </p>
              )}
              
              {reference.description && (
                <p className="text-sm text-gray-700 mt-2">{reference.description}</p>
              )}
              
              <div className="flex flex-wrap gap-1 mt-3">
                {reference.categories.map(categoryId => {
                  const category = categories.find(c => c.id === categoryId);
                  return category ? (
                    <span 
                      key={categoryId}
                      className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full"
                    >
                      {category.name}
                    </span>
                  ) : null;
                })}
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-mono">
                  {reference.citation}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600">No references match your current filters.</p>
            <button
              onClick={clearFilters}
              className="mt-2 text-navy hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
