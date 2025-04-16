import React from 'react';
import { X } from 'lucide-react';
import { MapLocation } from '@/lib/types';
import { MapCategoryInfo } from '@/data/map-categories';
import LocationMedia from '@/components/maps/location-media';

interface LocationDetailProps {
  location: MapLocation;
  categories: MapCategoryInfo[];
  onClose: () => void;
  relatedLocations?: MapLocation[];
  onRelatedLocationClick?: (locationId: string) => void;
}

export default function LocationDetail({
  location,
  categories,
  onClose,
  relatedLocations = [],
  onRelatedLocationClick
}: LocationDetailProps) {
  // Find the primary category for styling
  const primaryCategory = location.categories.length > 0 
    ? categories.find(c => c.id === location.categories[0]) 
    : null;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 max-w-3xl mx-auto">
      {/* Header */}
      <div 
        className="p-4 flex justify-between items-start"
        style={{ 
          backgroundColor: primaryCategory?.color || '#0A2342',
          color: 'white'
        }}
      >
        <div>
          <h2 className="text-xl font-bold">{location.name}</h2>
          <p className="text-sm opacity-90">{location.country}</p>
        </div>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close panel"
        >
          <X size={20} />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {location.categories.map(categoryId => {
            const category = categories.find(c => c.id === categoryId);
            return category ? (
              <span 
                key={categoryId}
                className="px-2 py-1 text-xs rounded-full text-white"
                style={{ backgroundColor: category.color }}
              >
                {category.label}
              </span>
            ) : null;
          })}
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Description */}
          <div className="md:col-span-2">
            <p className="text-gray-800 mb-4">
              {location.longDescription || location.description}
            </p>
            
            {/* Establishment info */}
            {(location.yearEstablished || location.yearClosed) && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-600 mb-1">Timeline</h3>
                <p className="text-gray-800">
                  {location.yearEstablished && `Established: ${location.yearEstablished}`}
                  {location.yearEstablished && location.yearClosed && ' - '}
                  {location.yearClosed && `Closed: ${location.yearClosed}`}
                </p>
              </div>
            )}
            
            {/* Related locations */}
            {relatedLocations.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Related Locations</h3>
                <ul className="space-y-2">
                  {relatedLocations.map(relatedLocation => (
                    <li key={relatedLocation.id}>
                      <button
                        onClick={() => onRelatedLocationClick?.(relatedLocation.id)}
                        className="text-navy hover:text-gold transition-colors text-left"
                      >
                        <span className="font-medium">{relatedLocation.name}</span>
                        <span className="text-sm text-gray-500 ml-2">
                          ({relatedLocation.country})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Sources */}
            {location.sources && location.sources.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Sources</h3>
                <ul className="space-y-2 text-sm">
                  {location.sources.map((source, index) => (
                    <li key={index} className="border-l-2 border-gray-300 pl-3 py-1">
                      <div className="font-medium">{source.title}</div>
                      {source.author && (
                        <div className="text-gray-600">
                          {source.author}
                          {source.year && `, ${source.year}`}
                        </div>
                      )}
                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy hover:text-gold transition-colors"
                        >
                          View source
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Media */}
          <div>
            {location.media && location.media.length > 0 && (
              <LocationMedia media={location.media} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
