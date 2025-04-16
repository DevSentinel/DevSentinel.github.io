"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { searchAllContent, SearchResult, SearchResultType } from '@/lib/search-utils';

interface UseSearchProps {
  initialQuery?: string;
  debounceMs?: number;
}

export default function useSearch({ initialQuery = '', debounceMs = 300 }: UseSearchProps = {}) {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SearchResultType[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get search query from URL if available
  useEffect(() => {
    const urlQuery = searchParams.get('q');
    if (urlQuery && urlQuery !== query) {
      setQuery(urlQuery);
    }
  }, [searchParams]); 
  
  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceMs);
    
    return () => clearTimeout(timer);
  }, [query, debounceMs]);
  
  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setResults([]);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    
    const performSearch = async () => {
      try {
        const searchResults = searchAllContent(debouncedQuery);
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    };
    
    performSearch();
  }, [debouncedQuery]);
  
  // Filter results by type
  const filteredResults = useCallback(() => {
    if (selectedFilters.length === 0) {
      return results;
    }
    
    return results.filter(result => selectedFilters.includes(result.type));
  }, [results, selectedFilters]);
  
  // Handle input change
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);
  
  // Clear search
  const clearSearch = useCallback(() => {
    setQuery('');
    setDebouncedQuery('');
    setResults([]);
    setSelectedFilters([]);
  }, []);
  
  // Toggle filter
  const toggleFilter = useCallback((type: SearchResultType) => {
    setSelectedFilters(prev => {
      if (prev.includes(type)) {
        return prev.filter(t => t !== type);
      } else {
        return [...prev, type];
      }
    });
  }, []);
  
  // Navigate to search page
  const navigateToSearchPage = useCallback(() => {
    if (query.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  }, [query, router]);
  
  return {
    query,
    results,
    filteredResults: filteredResults(),
    isSearching,
    selectedFilters,
    handleInputChange,
    clearSearch,
    toggleFilter,
    navigateToSearchPage
  };
}
