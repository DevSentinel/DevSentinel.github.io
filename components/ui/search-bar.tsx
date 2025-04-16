"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import useSearch from '@/hooks/use-search';
import { SearchResultType } from '@/lib/search-utils';

interface SearchBarProps {
  variant?: 'header' | 'full';
  placeholder?: string;
  maxResults?: number;
}

export default function SearchBar({ 
  variant = 'header', 
  placeholder = 'Search...',
  maxResults = 5
}: SearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { 
    query, 
    results, 
    isSearching, 
    handleInputChange, 
    navigateToSearchPage,
    clearSearch
  } = useSearch();
  
  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        
        // Only collapse in header variant when empty
        if (variant === 'header' && query === '') {
          setIsExpanded(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [variant, query]);
  
  // Show results when typing
  useEffect(() => {
    if (query.trim() !== '') {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [query]);
  
  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);
  
  // Handle search expand
  const handleExpand = () => {
    setIsExpanded(true);
  };
  
  // Handle search submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigateToSearchPage();
      setShowResults(false);
    }
  };
  
  // Get result icon based on type
  const getResultIcon = (type: SearchResultType) => {
    switch (type) {
      case 'event':
        return <span className="result-tag event-tag">Event</span>;
      case 'location':
        return <span className="result-tag location-tag">Location</span>;
      case 'resource':
        return <span className="result-tag resource-tag">Resource</span>;
      case 'context':
        return <span className="result-tag context-tag">Context</span>;
      case 'reference':
        return <span className="result-tag reference-tag">Reference</span>;
      default:
        return null;
    }
  };
  
  // Truncate text to a certain length
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  
  // Render header variant
  if (variant === 'header') {
    return (
      <div ref={searchRef} className="search-container">
        <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? (
            <form onSubmit={handleSubmit} className="search-form">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="search-input"
              />
              <button 
                type="button"
                onClick={clearSearch}
                className={`search-clear-btn ${query ? 'visible' : 'hidden'}`}
              >
                <X size={16} />
              </button>
              <button 
                type="submit"
                className="search-submit-btn"
              >
                <Search size={16} />
              </button>
            </form>
          ) : (
            <button
              onClick={handleExpand}
              className="search-icon-btn"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          )}
        </div>
        
        {/* Search results dropdown */}
        {showResults && results.length > 0 && (
          <div className="search-results">
            <div className="search-results-container">
              <div className="search-results-header">
                <p className="search-results-count">
                  {isSearching ? 'Searching...' : `${results.length} results for "${query}"`}
                </p>
              </div>
              
              <ul className="search-results-list">
                {results.slice(0, maxResults).map(result => (
                  <li key={`${result.type}-${result.id}`} className="search-result-item">
                    <Link 
                      href={result.url}
                      className="search-result-link"
                      onClick={() => setShowResults(false)}
                    >
                      <div className="search-result-content">
                        <div className="search-result-text">
                          <h4 className="search-result-title">{truncateText(result.title, 50)}</h4>
                          <p className="search-result-description">
                            {truncateText(result.description, 100)}
                          </p>
                        </div>
                        <div className="search-result-type">
                          {getResultIcon(result.type)}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {results.length > maxResults && (
                <div className="search-results-footer">
                  <Link 
                    href={`/search?q=${encodeURIComponent(query)}`}
                    className="search-view-all"
                    onClick={() => setShowResults(false)}
                  >
                    <span>View all {results.length} results</span>
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // Render full variant
  return (
    <div ref={searchRef} className="full-search-container">
      <form onSubmit={handleSubmit} className="full-search-form">
        <div className="full-search-input-container">
          <div className="search-icon">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="full-search-input"
          />
          {query && (
            <button 
              type="button"
              onClick={clearSearch}
              className="full-search-clear-btn"
            >
              <X size={20} className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        <button 
          type="submit"
          className="full-search-submit-btn"
        >
          Search
        </button>
      </form>
      
      {/* Search results dropdown */}
      {showResults && results.length > 0 && (
        <div className="full-search-results">
          <div className="full-search-results-container">
            <div className="full-search-results-header">
              <p className="full-search-results-count">
                {isSearching ? 'Searching...' : `${results.length} results for "${query}"`}
              </p>
            </div>
            
            <ul className="full-search-results-list">
              {results.slice(0, maxResults).map(result => (
                <li key={`${result.type}-${result.id}`} className="full-search-result-item">
                  <Link 
                    href={result.url}
                    className="full-search-result-link"
                    onClick={() => setShowResults(false)}
                  >
                    <div className="full-search-result-content">
                      <div className="full-search-result-text">
                        <h4 className="full-search-result-title">{truncateText(result.title, 50)}</h4>
                        <p className="full-search-result-description">
                          {truncateText(result.description, 100)}
                        </p>
                      </div>
                      <div className="full-search-result-type">
                        {getResultIcon(result.type)}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            
            {results.length > maxResults && (
              <div className="full-search-results-footer">
                <Link 
                  href={`/search?q=${encodeURIComponent(query)}`}
                  className="full-search-view-all"
                  onClick={() => setShowResults(false)}
                >
                  <span>View all {results.length} results</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
