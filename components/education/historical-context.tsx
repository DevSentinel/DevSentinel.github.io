"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import type { HistoricalContext as HistoricalContextType } from '@/lib/types';

interface HistoricalContextProps {
  contextItems: HistoricalContextType[];
  onLocationClick?: (locationId: string) => void;
}

export default function HistoricalContext({ 
  contextItems,
  onLocationClick 
}: HistoricalContextProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(contextItems[0]?.id || null);
  
  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy mb-4">Historical Context</h2>
      
      {contextItems.map(item => {
        const isExpanded = expandedItem === item.id;
        
        return (
          <div 
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
          >
            {/* Header */}
            <div 
              className={`p-4 flex justify-between items-center cursor-pointer ${
                isExpanded ? 'bg-navy text-white' : 'hover:bg-gray-50'
              }`}
              onClick={() => toggleExpand(item.id)}
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className={`text-sm ${isExpanded ? 'text-gray-200' : 'text-gray-600'}`}>
                  {item.period}
                </p>
              </div>
              <button 
                className={`p-1 rounded-full ${
                  isExpanded 
                    ? 'hover:bg-white/20' 
                    : 'hover:bg-gray-200'
                }`}
                aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
              >
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            {/* Content (only shown when expanded) */}
            {isExpanded && (
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Description */}
                  <div className="md:col-span-2">
                    <p className="text-gray-700 mb-4">
                      {item.description}
                    </p>
                    
                    {/* Key events */}
                    {item.keyEvents && item.keyEvents.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Events</h4>
                        <div className="space-y-2">
                          {item.keyEvents.map((event, index: number) => (
                            <div 
                              key={index}
                              className="flex items-start gap-3"
                            >
                              <div className="bg-navy text-white text-xs font-bold px-2 py-1 rounded mt-0.5">
                                {event.year}
                              </div>
                              <p className="text-sm text-gray-700">{event.event}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Related locations */}
                    {item.relatedMapLocations && item.relatedMapLocations.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Related Locations</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.relatedMapLocations.map((locationId: string) => (
                            <button
                              key={locationId}
                              onClick={() => onLocationClick?.(locationId)}
                              className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 text-navy rounded-full hover:bg-gray-200 transition-colors"
                            >
                              <MapPin size={12} />
                              <span className="capitalize">{locationId.replace('-', ' ')}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Image */}
                  {item.imageUrl && (
                    <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
