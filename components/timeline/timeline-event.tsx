import React from 'react';
import { TimelineEvent as TimelineEventType } from '@/lib/types';
import { CategoryInfo } from '@/data/categories';

interface TimelineEventProps {
  event: TimelineEventType;
  categories: CategoryInfo[];
  isSelected: boolean;
  onClick: () => void;
}

export default function TimelineEvent({ 
  event, 
  categories, 
  isSelected, 
  onClick
}: TimelineEventProps) {
  // Find the primary category for styling
  const primaryCategory = event.categories.length > 0 
    ? categories.find(c => c.id === event.categories[0]) 
    : null;
  
  const eventDate = new Date(event.date);
  
  return (
    <div
      className={`relative navigation-card bg-white rounded-xl shadow-md border-t-4 p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 w-full mb-6 ${isSelected ? 'border-t-blue-400 ring-2 ring-blue-200' : ''}`}
      style={{ borderTopColor: primaryCategory?.color || '#6B7280' }}
      onClick={onClick}
    >
      {/* Glow animation for selected */}
      {isSelected && (
        <div className="absolute inset-0 rounded-xl pointer-events-none animate-glow border-2 border-blue-400 shadow-blue-200"></div>
      )}
      <div className="card-icon-container mb-5 flex items-center justify-center">
  <div
    className="flex flex-col items-center justify-center"
    style={{ position: 'relative' }}
  >
    <div
      className="flex flex-col items-center justify-center"
      style={{
        background: primaryCategory?.color || '#3B82F6',
        borderRadius: '1.5rem',
        minWidth: '70px',
        minHeight: '70px',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.15)',
        border: '2px solid #fff',
        padding: '10px 0',
        marginBottom: '0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <span
        style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '1px',
          textShadow: '0 2px 8px rgba(0,0,0,0.18)',
          lineHeight: 1,
        }}
      >
        {eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()}
      </span>
      <span
        style={{
          color: '#fff',
          fontWeight: 900,
          fontSize: '1.25rem',
          textShadow: '0 2px 8px rgba(0,0,0,0.18)',
          lineHeight: 1.2,
        }}
      >
        {eventDate.getFullYear()}
      </span>
    </div>
  </div>
</div>
      {/* Event content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold mb-3 text-memorial-navy text-center">{event.title}</h3>
        <p className="text-gray-700 leading-relaxed text-center px-4 mb-4">{event.description}</p>
      </div>
    </div>
  );
}
