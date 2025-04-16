import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search as SearchIcon, X } from 'lucide-react';
import { SearchResultType } from '@/lib/search-utils';
import useSearch from '@/hooks/use-search';

export default function SearchPage() {
  const searchParams = useSearchParams();
  
  // Hero section for search
  const hero = (
    <section className="w-full max-w-4xl mb-12">
      <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 flex flex-col items-center gap-4 animate-fadein-glow">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 tracking-tight drop-shadow-lg mb-2 text-center">Search</h1>
        <p className="text-lg md:text-xl text-blue-200 text-center max-w-2xl">Quickly search for Holocaust events, locations, resources, and more. Use filters to refine your results and discover new insights.</p>
      </div>
    </section>
  );
  
  const initialQuery = searchParams.get('q') || '';
  
  const {
    query,
    results,
    isSearching,
    selectedFilters,
    handleInputChange,
    toggleFilter,
    clearFilters,
    navigateToSearchPage,
    clearSearch
  } = useSearch({ initialQuery });
  
  // Calculate result counts by type
  const resultCounts = {
    total: results.length,
    event: results.filter(r => r.type === 'event').length,
    location: results.filter(r => r.type === 'location').length,
    resource: results.filter(r => r.type === 'resource').length,
    context: results.filter(r => r.type === 'context').length,
    reference: results.filter(r => r.type === 'reference').length,
  };
  
  // Get filtered results
  const filteredResults = selectedFilters.length > 0
    ? results.filter(result => selectedFilters.includes(result.type))
    : results;
  
  // Format date for display
  const formatDate = (dateString?: string, year?: number) => {
    if (dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } else if (year) {
      return year.toString();
    }
    return '';
  };
  
  // Get icon and color for result type
  const getTypeInfo = (type: SearchResultType) => {
    switch (type) {
      case 'event':
        return { label: 'Timeline Event', color: 'bg-blue-100 text-blue-800' };
      case 'location':
        return { label: 'Map Location', color: 'bg-green-100 text-green-800' };
      case 'resource':
        return { label: 'Educational Resource', color: 'bg-purple-100 text-purple-800' };
      case 'context':
        return { label: 'Historical Context', color: 'bg-amber-100 text-amber-800' };
      case 'reference':
        return { label: 'Reference', color: 'bg-gray-100 text-gray-800' };
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateToSearchPage();
  };
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-navy">Search</h1>
      
      {/* Search form */}
      <div className="mb-8 max-w-3xl">
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search for events, locations, resources..."
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
            />
            {query && (
              <button 
                type="button"
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X size={20} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          <button 
            type="submit"
            className="bg-navy text-white px-4 py-3 rounded-r-md hover:bg-navy-dark transition-colors"
          >
            Search
          </button>
        </form>
      </div>
      
      {query ? (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4 mb-4 sticky top-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Filter Results</h3>
                {selectedFilters.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-navy hover:text-blue-700"
                  >
                    Clear all
                  </button>
                )}
              </div>
              
              <div className="space-y-2">
                <div 
                  className={`flex justify-between items-center p-2 rounded cursor-pointer ${
                    selectedFilters.length === 0 ? 'bg-navy text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => clearFilters()}
                >
                  <span>All results</span>
                  <span className="text-sm">{resultCounts.total}</span>
                </div>
                
                {['event', 'location', 'resource', 'context', 'reference'].map((type) => {
                  const count = resultCounts[type as keyof typeof resultCounts];
                  if (count === 0) return null;
                  
                  const { label } = getTypeInfo(type as SearchResultType);
                  const isSelected = selectedFilters.includes(type as SearchResultType);
                  
                  return (
                    <div 
                      key={type}
                      className={`flex justify-between items-center p-2 rounded cursor-pointer ${
                        isSelected ? 'bg-navy text-white' : 'hover:bg-gray-100'
                      }`}
                      onClick={() => toggleFilter(type as SearchResultType)}
                    >
                      <span>{label}s</span>
                      <span className="text-sm">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="flex-grow">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                {isSearching ? (
                  'Searching...'
                ) : (
                  <>
                    {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} for <span className="text-navy">"{query}"</span>
                  </>
                )}
              </h2>
            </div>
            
            {filteredResults.length > 0 ? (
              <div className="space-y-4">
                {filteredResults.map((result) => {
                  const { label, color } = getTypeInfo(result.type);
                  const date = formatDate(result.date, result.year);
                  
                  return (
                    <Link
                      key={`${result.type}-${result.id}`}
                      href={result.url}
                      className="block bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg text-navy">{result.title}</h3>
                          {date && (
                            <div className="text-sm text-gray-500 mt-1">
                              {date}
                            </div>
                          )}
                          <p className="text-gray-600 mt-2">{result.description}</p>
                          
                          {result.categories && result.categories.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {result.categories.map((category, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <span className={`ml-3 px-2 py-1 rounded text-xs whitespace-nowrap ${color}`}>
                          {label}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                {isSearching ? (
                  <p>Searching...</p>
                ) : (
                  <>
                    <h3 className="text-lg font-medium mb-2">No results found</h3>
                    <p className="text-gray-600 mb-4">
                      We couldn't find any matches for "{query}".
                    </p>
                    <p className="text-gray-600">
                      Try different keywords or check for spelling errors.
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Search our Holocaust history resources</h2>
          <p className="text-gray-600 mb-6">
            Search for historical events, locations, educational resources, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Timeline Events</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Map Locations</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Educational Resources</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full">Historical Context</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">References</span>
          </div>
        </div>
      )}
    </main>
  );
}
