import React from 'react';
import { X } from 'lucide-react';
import { TimelineEvent } from '@/lib/types';
import { CategoryInfo } from '@/data/categories';
import EventMedia from '@/components/timeline/event-media';
import EventSources from '@/components/timeline/event-sources';
import { formatEventDate } from '@/lib/timeline-utils';

interface EventDetailPanelProps {
  event: TimelineEvent;
  categories: CategoryInfo[];
  onClose: () => void;
  relatedEvents?: TimelineEvent[];
  onRelatedEventClick?: (eventId: string) => void;
}

export default function EventDetailPanel({
  event,
  categories,
  onClose,
  relatedEvents = [],
  onRelatedEventClick
}: EventDetailPanelProps) {
  // Find the primary category for styling
  const primaryCategory = event.categories.length > 0 
    ? categories.find(c => c.id === event.categories[0]) 
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
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-sm opacity-90">
            {formatEventDate(event.date)}
            {event.endDate && ` - ${formatEventDate(event.endDate)}`}
          </p>
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
          {event.categories.map(categoryId => {
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
              {event.longDescription || event.description}
            </p>
            
            {/* Location */}
            {event.location && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-600 mb-1">Location</h3>
                <p className="text-gray-800">{event.location}</p>
              </div>
            )}
            
            {/* Related events */}
            {relatedEvents.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Related Events</h3>
                <ul className="space-y-2">
                  {relatedEvents.map(relatedEvent => (
                    <li key={relatedEvent.id}>
                      <button
                        onClick={() => onRelatedEventClick?.(relatedEvent.id)}
                        className="text-navy hover:text-gold transition-colors text-left"
                      >
                        <span className="font-medium">{relatedEvent.title}</span>
                        <span className="text-sm text-gray-500 ml-2">
                          ({formatEventDate(relatedEvent.date, false)})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Media and sources */}
          <div>
            {/* Media */}
            {event.media && event.media.length > 0 && (
              <div className="mb-6">
                <EventMedia media={event.media} />
              </div>
            )}
            
            {/* Sources */}
            {event.sources && event.sources.length > 0 && (
              <EventSources sources={event.sources} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
