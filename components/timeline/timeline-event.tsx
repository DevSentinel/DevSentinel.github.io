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
  const formattedDate = eventDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  
  return (
    <div
      className={`relative overflow-hidden w-[220px] p-4 rounded-xl shadow-xl backdrop-blur-md bg-white/50 border-l-8 transition-all duration-300 cursor-pointer 
        ${isSelected ? 'border-blue-400 ring-2 ring-blue-300 shadow-blue-200 animate-glow' : `border-[${primaryCategory?.color || '#6B7280'}] hover:scale-105 hover:shadow-2xl`}
        group animate-fadein`}
      style={{
        borderLeftColor: primaryCategory?.color || '#6B7280',
        fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
        minHeight: 160,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
      }}
      onClick={onClick}
    >
      {/* Decorative blurred circle */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-300 opacity-30 rounded-full blur-2xl z-0"></div>
      <div className="relative z-10 flex flex-col gap-2">
        {/* Date marker */}
        <div className="flex items-center mb-2 gap-2">
          <div
            className="w-12 h-12 rounded-lg flex flex-col items-center justify-center text-white font-bold shadow-md"
            style={{
              background: primaryCategory?.color || '#3B82F6',
              boxShadow: '0 2px 12px 0 rgba(59,130,246,0.15)',
              fontSize: 15,
              letterSpacing: 1,
            }}
          >
            <span className="text-xs font-semibold opacity-80">
              {eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()}
            </span>
            <span className="text-base font-bold leading-none">{eventDate.getFullYear()}</span>
          </div>
        </div>
        {/* Event content */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors duration-200">
            {event.title}
          </h3>
          <p className="text-[13px] text-gray-700 opacity-90 line-clamp-3">
            {event.description}
          </p>
        </div>
      </div>
      {/* Glow animation for selected */}
      {isSelected && (
        <div className="absolute inset-0 rounded-xl pointer-events-none animate-glow border-2 border-blue-400 shadow-blue-200"></div>
      )}
      <style jsx>{`
        .animate-fadein {
          animation: fadein 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-glow {
          box-shadow: 0 0 16px 2px #60a5fa55, 0 2px 24px 0 #60a5fa22;
        }
      `}</style>
    </div>
  );
}
