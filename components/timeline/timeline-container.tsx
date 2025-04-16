"use client";

import React from 'react';
// Removed unused import of ChevronLeft

import timelineEvents from '@/data/timeline-events';
import eventCategories from '@/data/categories';
import TimelineEvent from '@/components/timeline/timeline-event';
// Removed unused TimelineNavigation import to fix lint error.
import useTimeline from '@/hooks/use-timeline';

export default function TimelineContainer() {
  // Use timeline hook to manage events and navigation
  const {
    selectedEvent,
    minYear,
    maxYear,
    selectEvent,
    visibleEvents
  } = useTimeline({
    events: timelineEvents
  });

  return (
    <div className="timeline-container flex flex-col flex-1 justify-between">
      <div className="max-w-5xl w-full mx-auto flex flex-col">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-6xl md:text-7xl font-extrabold text-blue-900 drop-shadow-lg text-center mb-4 tracking-tight">
            Holocaust Timeline
          </h2>
          <div className="w-24 h-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 mb-6"></div>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mt-3">
            Explore major events of the Holocaust from {minYear} to {maxYear}. All events are displayed below in chronological order.
          </p>
        </div>
        <div className="timeline-grid mb-12 gap-y-8">
          {visibleEvents.map((event) => (
            <TimelineEvent
              key={event.id}
              event={event}
              categories={eventCategories}
              isSelected={selectedEvent?.id === event.id}
              onClick={() => selectEvent(event)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
