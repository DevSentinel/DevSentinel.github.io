"use client";

import React, { useState, useRef, useEffect } from 'react';
import mapLocations from '@/data/map-locations';
import mapCategories from '@/data/map-categories';
import MapMarker from '@/components/maps/map-marker';
import MapControls from '@/components/maps/map-controls';
import LocationDetail from '@/components/maps/location-detail';
import MapFilterControls from '@/components/maps/map-filter-controls';
import { MapLocation } from '@/lib/types';
import useMapFilters from '@/hooks/use-map-filters';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Default map view settings
const DEFAULT_VIEW = {
  centerLat: 50,
  centerLng: 15,
  zoom: 1
};

// Convert geographic coordinates to screen coordinates
const geoToScreenCoords = (lat: number, lng: number) => {
  return {
    lat,
    lng
  };
};

interface MapContainerProps {
  selectedLocationId?: string | null;
}

export default function MapContainer({ selectedLocationId }: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [view, setView] = useState(DEFAULT_VIEW);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Set up filtering
  const {
    filters,
    filteredLocations,
    toggleCategory,
    toggleCountry,
    countries,
    setTimeRange,
    toggleLabels,
    clearFilters
  } = useMapFilters({
    locations: mapLocations
  });
  
  // Effect to select location from URL param
  useEffect(() => {
    if (selectedLocationId) {
      const location = mapLocations.find(loc => loc.id === selectedLocationId);
      if (location) {
        setSelectedLocation(location);
        
        // Center map on selected location
        setView(prev => ({
          centerLat: location.coordinates.lat,
          centerLng: location.coordinates.lng,
          zoom: 2
        }));
      }
    }
  }, [selectedLocationId]);
  
  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };
  
  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    setStartX(e.clientX);
    setStartY(e.clientY);
    
    setView(prev => ({
      ...prev,
      centerLng: prev.centerLng - (dx * 0.1) / prev.zoom,
      centerLat: prev.centerLat + (dy * 0.1) / prev.zoom
    }));
  };
  
  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Handle mouse leave to stop dragging
  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  
  // Handle touch start for mobile dragging
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };
  
  // Handle touch move for mobile dragging
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    
    setView(prev => ({
      ...prev,
      centerLng: prev.centerLng - (dx * 0.1) / prev.zoom,
      centerLat: prev.centerLat + (dy * 0.1) / prev.zoom
    }));
  };
  
  // Handle touch end to stop dragging
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  // Handle zoom in
  const handleZoomIn = () => {
    setView(prev => ({
      ...prev,
      zoom: Math.min(prev.zoom + 0.5, 3)
    }));
  };
  
  // Handle zoom out
  const handleZoomOut = () => {
    setView(prev => ({
      ...prev,
      zoom: Math.max(prev.zoom - 0.5, 0.5)
    }));
  };
  
  // Handle reset view
  const handleResetView = () => {
    setView(DEFAULT_VIEW);
  };
  
  // Handle location click
  const handleLocationClick = (location: MapLocation) => {
    setSelectedLocation(location);
  };
  
  // Handle close location detail
  const handleCloseLocationDetail = () => {
    setSelectedLocation(null);
  };
  
  // Toggle filters visibility for mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Mobile filters toggle */}
      <div className="md:hidden p-3 border-b border-gray-200">
        <button 
          onClick={toggleFilters}
          className="w-full flex items-center justify-between bg-gray-100 p-2 rounded"
        >
          <span className="font-medium">Map Filters</span>
          {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {/* Filters - hidden by default on mobile */}
      <div className={`border-b border-gray-200 ${showFilters ? 'block' : 'hidden md:block'}`}>
        <div className="p-4">
          <MapFilterControls 
            categories={mapCategories}
            selectedCategories={filters.selectedCategories}
            onCategoryToggle={toggleCategory}
            countries={countries}
            selectedCountries={filters.selectedCountries}
            onCountryToggle={toggleCountry}
            onClearFilters={clearFilters}
            showLabels={filters.showLabels}
            onToggleLabels={toggleLabels}
            startYear={filters.startYear}
            endYear={filters.endYear}
            onTimeRangeChange={setTimeRange}
          />
        </div>
      </div>
      
      <div className="relative h-[300px] md:h-[600px] bg-gray-100 overflow-hidden">
        {/* Map background */}
        <div 
          ref={mapRef}
          className="absolute inset-0 bg-[#e8f4f8] overflow-hidden"
          style={{ 
            transform: `scale(${view.zoom}) translate(${(50 - view.centerLng) / view.zoom}%, ${(50 - view.centerLat) / view.zoom}%)`,
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Map image or SVG would go here */}
          <div className="absolute inset-0 bg-[url('/map-background.svg')] bg-no-repeat bg-cover opacity-70" />
          
          {/* Country borders would be here */}
          
          {/* Location markers */}
          {filteredLocations.map(location => {
            const coords = geoToScreenCoords(location.coordinates.lat, location.coordinates.lng);
            
            return (
              <MapMarker 
                key={location.id}
                location={{ ...location, coordinates: coords }}
                categories={mapCategories}
                isSelected={selectedLocation?.id === location.id}
                onClick={() => handleLocationClick(location)}
                showLabel={filters.showLabels}
              />
            );
          })}
        </div>
        
        {/* Map controls */}
        <div className="absolute bottom-4 right-4 z-10">
          <MapControls 
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onReset={handleResetView}
            zoomLevel={view.zoom}
            maxZoom={3}
            minZoom={0.5}
          />
        </div>
      </div>
      
      {/* Location detail panel */}
      {selectedLocation && (
        <div className="border-t border-gray-200 max-h-[50vh] md:max-h-none overflow-y-auto">
          <LocationDetail 
            location={selectedLocation}
            categories={mapCategories}
            onClose={handleCloseLocationDetail}
          />
        </div>
      )}
    </div>
  );
}
