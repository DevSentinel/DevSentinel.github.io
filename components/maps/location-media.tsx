import React, { useState } from 'react';
import { Media } from '@/lib/types';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

interface LocationMediaProps {
  media: Media[];
}

export default function LocationMedia({ media }: LocationMediaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = media[currentIndex];
  
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };
  
  if (!media.length) {
    return null;
  }
  
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">Media</h3>
      
      <div className="relative rounded-lg overflow-hidden bg-gray-100">
        {/* Media content */}
        {currentMedia.type === 'image' ? (
          <div className="aspect-video relative">
            <OptimizedImage
              src={currentMedia.url}
              alt={currentMedia.caption || currentMedia.title}
              type="map"
              fill={true}
              objectFit="cover"
              priority={currentIndex === 0}
            />
          </div>
        ) : currentMedia.type === 'video' ? (
          <div className="aspect-video">
            <iframe
              src={currentMedia.url}
              title={currentMedia.caption || currentMedia.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        ) : null}
        
        {/* Navigation arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full"
              aria-label="Previous media"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full"
              aria-label="Next media"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
        
        {/* Media counter */}
        {media.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {currentIndex + 1} / {media.length}
          </div>
        )}
      </div>
      
      {/* Caption and source */}
      <div className="text-sm">
        <h4 className="font-medium">{currentMedia.title}</h4>
        
        {currentMedia.description && (
          <p className="text-gray-600 mt-1">{currentMedia.description}</p>
        )}
        
        {currentMedia.caption && (
          <p className="text-gray-700 italic mt-1">{currentMedia.caption}</p>
        )}
        
        {currentMedia.credit && (
          <p className="text-xs text-gray-500 mt-1">Credit: {currentMedia.credit}</p>
        )}
        
        {currentMedia.source && (
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <span>Source: {currentMedia.source}</span>
            {currentMedia.sourceUrl && (
              <a
                href={currentMedia.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-navy hover:text-gold inline-flex items-center"
              >
                <ExternalLink size={12} className="mr-1" />
                View Source
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
