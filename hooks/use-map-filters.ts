import { useState, useCallback } from 'react';
import { LocationCategory, MapLocation } from '@/lib/types';

interface MapFiltersState {
  selectedCategories: LocationCategory[];
  selectedCountries: string[];
  startYear: number | null;
  endYear: number | null;
  showLabels: boolean;
}

interface UseMapFiltersProps {
  locations: MapLocation[];
}

export default function useMapFilters({ locations }: UseMapFiltersProps) {
  // Initialize filter state
  const [filters, setFilters] = useState<MapFiltersState>({
    selectedCategories: [],
    selectedCountries: [],
    startYear: null,
    endYear: null,
    showLabels: false
  });
  
  // Get unique countries from locations
  const countries = [...new Set(locations.map(location => location.country))].sort();
  
  // Toggle category selection
  const toggleCategory = useCallback((category: LocationCategory) => {
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
  
  // Toggle country selection
  const toggleCountry = useCallback((country: string) => {
    setFilters(prev => {
      const isSelected = prev.selectedCountries.includes(country);
      
      if (isSelected) {
        // Remove country
        return {
          ...prev,
          selectedCountries: prev.selectedCountries.filter(c => c !== country)
        };
      } else {
        // Add country
        return {
          ...prev,
          selectedCountries: [...prev.selectedCountries, country]
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
  
  // Toggle labels
  const toggleLabels = useCallback(() => {
    setFilters(prev => ({
      ...prev,
      showLabels: !prev.showLabels
    }));
  }, []);
  
  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilters({
      selectedCategories: [],
      selectedCountries: [],
      startYear: null,
      endYear: null,
      showLabels: false
    });
  }, []);
  
  // Apply filters to locations
  const filteredLocations = locations.filter(location => {
    // Filter by category if any are selected
    if (filters.selectedCategories.length > 0) {
      if (!location.categories.some(c => filters.selectedCategories.includes(c))) {
        return false;
      }
    }
    
    // Filter by country if any are selected
    if (filters.selectedCountries.length > 0) {
      if (!filters.selectedCountries.includes(location.country)) {
        return false;
      }
    }
    
    // Filter by time range (establishment year)
    if (filters.startYear !== null && location.yearEstablished) {
      if (location.yearEstablished < filters.startYear) {
        return false;
      }
    }
    
    if (filters.endYear !== null && location.yearEstablished) {
      if (location.yearEstablished > filters.endYear) {
        return false;
      }
    }
    
    return true;
  });
  
  return {
    filters,
    filteredLocations,
    countries,
    toggleCategory,
    toggleCountry,
    setTimeRange,
    toggleLabels,
    clearFilters
  };
}
