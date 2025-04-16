import React from 'react';
import { MapLocation } from '@/lib/types';
import { MapCategoryInfo } from '@/data/map-categories';

interface MapMarkerProps {
  location: MapLocation & { coordinates: { lat: number; lng: number } };
  categories: MapCategoryInfo[];
  isSelected: boolean;
  onClick: () => void;
  showLabel?: boolean;
}

export default function MapMarker({ 
  location, 
  categories, 
  isSelected, 
  onClick,
  showLabel = false
}: MapMarkerProps) {
  // Find the primary category for styling
  const primaryCategory = location.categories.length > 0 
    ? categories.find(c => c.id === location.categories[0]) 
    : null;
  
  const markerSize = isSelected ? 14 : 10;
  const markerColor = primaryCategory?.color || '#0A2342';
  
  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={{ 
        left: `${location.coordinates.lng}%`, 
        top: `${location.coordinates.lat}%`,
        zIndex: isSelected ? 10 : 1
      }}
      onClick={onClick}
    >
      {/* Marker */}
      <div 
        className={`rounded-full border-2 transition-all duration-200 ${
          isSelected ? 'border-white shadow-lg' : 'border-white/70 shadow-sm group-hover:border-white'
        }`}
        style={{ 
          backgroundColor: markerColor,
          width: `${markerSize}px`,
          height: `${markerSize}px`,
        }}
      />
      
      {/* Label */}
      {(showLabel || isSelected) && (
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs rounded-md transition-opacity ${
            isSelected 
              ? 'bg-navy text-white font-medium -top-8 opacity-100' 
              : 'bg-white/90 text-gray-800 -top-7 opacity-80 group-hover:opacity-100'
          }`}
        >
          {location.name}
        </div>
      )}
    </div>
  );
}
