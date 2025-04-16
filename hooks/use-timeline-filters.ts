import { useState, useCallback } from 'react';
import { EventCategory, TimelineEvent } from '@/lib/types';
import { filterEventsByCategories } from '@/lib/timeline-utils';

interface TimelineFiltersState {
  selectedCategories: EventCategory[];
  startYear: number | null;
  endYear: number | null;
}

interface UseTimelineFiltersProps {
  events: TimelineEvent[];
  minYear?: number;
  maxYear?: number;
}

export default function useTimelineFilters({
  events,
  minYear: initialMinYear,
  maxYear: initialMaxYear
}: UseTimelineFiltersProps) {
  // Determine min and max years from events if not provided
  const minYear = initialMinYear || (events.length > 0 
    ? Math.min(...events.map(e => new Date(e.date).getFullYear()))
    : 1933);
  
  const maxYear = initialMaxYear || (events.length > 0 
    ? Math.max(...events.map(e => {
      if (e.endDate) {
        return Math.max(
          new Date(e.date).getFullYear(),
          new Date(e.endDate).getFullYear()
        );
      }
      return new Date(e.date).getFullYear();
    }))
    : 1945);
  
  // Initialize filter state
  const [filters, setFilters] = useState<TimelineFiltersState>({
    selectedCategories: [],
    startYear: null,
    endYear: null
  });
  
  // Toggle category selection
  const toggleCategory = useCallback((category: EventCategory) => {
    setFilters(prev => {
      const isSelected = prev.selectedCategories.includes(category);
      
      if (isSelected) {
        // Remove category
        return {
          ...prev,
          selectedCategories: prev.selectedCategories.filter(c => c !== category)
        };
      } else {
        // Add category
        return {
          ...prev,
          selectedCategories: [...prev.selectedCategories, category]
        };
      }
    });
  }, []);
  
  // Set time range
  const setTimeRange = useCallback((start: number | null, end: number | null) => {
    setFilters(prev => ({
      ...prev,
      startYear: start,
      endYear: end
    }));
  }, []);
  
  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilters({
      selectedCategories: [],
      startYear: null,
      endYear: null
    });
  }, []);
  
  // Apply filters to events
  const filteredEvents = events.filter(event => {
    // Filter by category if any are selected
    if (filters.selectedCategories.length > 0) {
      if (!event.categories.some(c => filters.selectedCategories.includes(c))) {
        return false;
      }
    }
    
    // Filter by time range
    const eventYear = new Date(event.date).getFullYear();
    const eventEndYear = event.endDate 
      ? new Date(event.endDate).getFullYear() 
      : eventYear;
    
    if (filters.startYear !== null && eventEndYear < filters.startYear) {
      return false;
    }
    
    if (filters.endYear !== null && eventYear > filters.endYear) {
      return false;
    }
    
    return true;
  });
  
  return {
    filters,
    filteredEvents,
    toggleCategory,
    setTimeRange,
    clearFilters,
    minYear,
    maxYear
  };
}
