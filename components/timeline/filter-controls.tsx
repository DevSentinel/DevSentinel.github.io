import React, { useState } from 'react';
import { EventCategory } from '@/lib/types';
import { CategoryInfo } from '@/data/categories';
import { Filter, X } from 'lucide-react';

interface FilterControlsProps {
  categories: CategoryInfo[];
  selectedCategories: EventCategory[];
  onCategoryToggle: (category: EventCategory) => void;
  onClearFilters: () => void;
  minYear: number;
  maxYear: number;
  startYear: number | null;
  endYear: number | null;
  onTimeRangeChange: (start: number | null, end: number | null) => void;
}

export default function FilterControls({
  categories,
  selectedCategories,
  onCategoryToggle,
  onClearFilters,
  minYear,
  maxYear,
  startYear,
  endYear,
  onTimeRangeChange
}: FilterControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempStartYear, setTempStartYear] = useState<string>(startYear?.toString() || '');
  const [tempEndYear, setTempEndYear] = useState<string>(endYear?.toString() || '');
  
  const hasActiveFilters = selectedCategories.length > 0 || startYear !== null || endYear !== null;
  
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  const handleApplyTimeRange = () => {
    const start = tempStartYear ? parseInt(tempStartYear, 10) : null;
    const end = tempEndYear ? parseInt(tempEndYear, 10) : null;
    
    // Validate years are within range and start <= end
    if (start !== null && (start < minYear || start > maxYear)) {
      return;
    }
    
    if (end !== null && (end < minYear || end > maxYear)) {
      return;
    }
    
    if (start !== null && end !== null && start > end) {
      return;
    }
    
    onTimeRangeChange(start, end);
  };
  
  const handleClearTimeRange = () => {
    setTempStartYear('');
    setTempEndYear('');
    onTimeRangeChange(null, null);
  };
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <button
          onClick={handleToggleOpen}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
            hasActiveFilters 
              ? 'bg-navy text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          <Filter size={16} />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="bg-white text-navy rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {selectedCategories.length + (startYear !== null ? 1 : 0) + (endYear !== null ? 1 : 0)}
            </span>
          )}
        </button>
        
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-gray-600 hover:text-navy transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>
      
      {isOpen && (
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filter Timeline Events</h3>
            <button
              onClick={handleToggleOpen}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close filters"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category filters */}
            <div>
              <h4 className="text-sm font-medium mb-2">Event Categories</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <label 
                    key={category.id} 
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => onCategoryToggle(category.id)}
                      className="rounded border-gray-300 text-navy focus:ring-navy"
                    />
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span>{category.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Time range filters */}
            <div>
              <h4 className="text-sm font-medium mb-2">Time Range</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">From Year</label>
                    <input
                      type="number"
                      min={minYear}
                      max={maxYear}
                      value={tempStartYear}
                      onChange={(e) => setTempStartYear(e.target.value)}
                      placeholder={minYear.toString()}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">To Year</label>
                    <input
                      type="number"
                      min={minYear}
                      max={maxYear}
                      value={tempEndYear}
                      onChange={(e) => setTempEndYear(e.target.value)}
                      placeholder={maxYear.toString()}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={handleApplyTimeRange}
                    className="px-3 py-1.5 bg-navy text-white text-sm rounded-md hover:bg-navy-light transition-colors"
                  >
                    Apply Range
                  </button>
                  <button
                    onClick={handleClearTimeRange}
                    className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Clear Range
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedCategories.map(categoryId => {
            const category = categories.find(c => c.id === categoryId);
            return category ? (
              <div 
                key={categoryId}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white"
                style={{ backgroundColor: category.color }}
              >
                <span>{category.label}</span>
                <button
                  onClick={() => onCategoryToggle(categoryId)}
                  className="hover:bg-white/20 rounded-full p-0.5"
                  aria-label={`Remove ${category.label} filter`}
                >
                  <X size={12} />
                </button>
              </div>
            ) : null;
          })}
          
          {(startYear !== null || endYear !== null) && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white bg-navy">
              <span>
                {startYear !== null ? startYear : minYear} - {endYear !== null ? endYear : maxYear}
              </span>
              <button
                onClick={handleClearTimeRange}
                className="hover:bg-white/20 rounded-full p-0.5"
                aria-label="Remove time range filter"
              >
                <X size={12} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
