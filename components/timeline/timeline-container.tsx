"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import timelineEvents from '@/data/timeline-events';
import eventCategories from '@/data/categories';
import TimelineEvent from '@/components/timeline/timeline-event';
import TimelineNavigation from '@/components/timeline/timeline-navigation';
import EventDetailPanel from '@/components/timeline/event-detail-panel';
import FilterControls from '@/components/timeline/filter-controls';
import { TimelineEvent as TimelineEventType } from '@/lib/types';
import useTimeline from '@/hooks/use-timeline';
import useTimelineFilters from '@/hooks/use-timeline-filters';
import { calculateEventPosition, findRelatedEvents } from '@/lib/timeline-utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function TimelineContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  // Set up filtering
  const {
    filters,
    filteredEvents,
    toggleCategory,
    setTimeRange,
    clearFilters,
    minYear: filterMinYear,
    maxYear: filterMaxYear
  } = useTimelineFilters({
    events: timelineEvents
  });
  console.log('DEBUG filteredEvents:', filteredEvents);
  
  // Use filtered events for the timeline
  const {
    currentYear,
    zoomLevel,
    selectedEvent,
    minYear,
    maxYear,
    navigateToYear,
    navigateToEvent,
    setZoomLevel,
    selectEvent,
    navigateNext,
    navigatePrevious,
    visibleEvents,
    startYear,
    endYear
  } = useTimeline({
    events: timelineEvents, // Bypass filters for debugging
    initialYear: 1939, // Default to start of WWII
    initialZoom: 1 // Decade view for wider window
  });
  
  // Handle mouse down for dragging - memoize to prevent re-creation on each render
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    e.preventDefault();
    setIsDragging(true);
    const currentOffsetLeft = containerRef.current.offsetLeft;
    setStartX(e.pageX - currentOffsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);
  
  // Handle mouse move for dragging - memoize to prevent re-creation on each render
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault(); // Prevent text selection during drag
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);
  
  // Handle mouse up to stop dragging - memoize to prevent re-creation on each render
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  // Handle mouse leave to stop dragging - memoize to prevent re-creation on each render
  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  // Handle touch start for mobile dragging - memoize to prevent re-creation on each render
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    const currentOffsetLeft = containerRef.current.offsetLeft;
    setStartX(e.touches[0].pageX - currentOffsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);
  
  // Handle touch move for mobile dragging - memoize to prevent re-creation on each render
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    // Only prevent default if we're handling the event
    if (isDragging) {
      e.preventDefault(); // Prevent scrolling during drag
    }
    
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);
  
  // Handle touch end to stop dragging - memoize to prevent re-creation on each render
  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  // Handle event click - memoize to prevent re-creation on each render
  const handleEventClick = useCallback((event: TimelineEventType) => {
    selectEvent(event);
    setShowDetailPanel(true);
  }, [selectEvent]);
  
  // Handle related event click - memoize to prevent re-creation on each render
  const handleRelatedEventClick = useCallback((eventId: string) => {
    navigateToEvent(eventId);
  }, [navigateToEvent]);
  
  // Handle close detail panel - memoize to prevent re-creation on each render
  const handleCloseDetailPanel = useCallback(() => {
    setShowDetailPanel(false);
  }, []);
  
  // Add wheel event listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const preventDefaultWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };
    
    container.addEventListener('wheel', preventDefaultWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', preventDefaultWheel);
    };
  }, []);
  
  // Toggle filters visibility for mobile
  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);
  
  // Calculate event positions
  const eventPositions = React.useMemo(() => {
    return visibleEvents.map(event => {
      const eventYear = new Date(event.date).getFullYear();
      const position = ((eventYear - minYear) / (maxYear - minYear)) * 100;
      return { event, position };
    });
  }, [visibleEvents, minYear, maxYear]);
  
  // DEBUG: Log important state for troubleshooting timeline event visibility
  console.log({
    currentYear,
    minYear,
    maxYear,
    zoomLevel,
    filters,
    filteredEvents,
    visibleEvents,
    timelineEventsCount: timelineEvents.length
  });

  return (
    <>
      <FilterControls 
        categories={eventCategories}
        selectedCategories={filters.selectedCategories}
        onCategoryToggle={toggleCategory}
        onClearFilters={clearFilters}
        minYear={filterMinYear}
        maxYear={filterMaxYear}
        startYear={filters.startYear}
        endYear={filters.endYear}
        onTimeRangeChange={setTimeRange}
      />
      
      {/* Navigation controls */}
      <div className="border-b border-gray-200 p-3">
        <TimelineNavigation 
          currentYear={currentYear}
          minYear={minYear}
          maxYear={maxYear}
          zoomLevel={zoomLevel}
          onYearChange={navigateToYear}
          onZoomChange={setZoomLevel}
          onNext={navigateNext}
          onPrevious={navigatePrevious}
        />
      </div>
      
      {/* Timeline display */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-start py-10 px-4 bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#fff] animate-fadein">
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 drop-shadow-lg tracking-tight">Timeline of the Holocaust</h2>
          <div className="mb-6">
            <TimelineNavigation 
              currentYear={currentYear}
              minYear={minYear}
              maxYear={maxYear}
              zoomLevel={zoomLevel}
              onYearChange={navigateToYear}
              onZoomChange={setZoomLevel}
              onNext={navigateNext}
              onPrevious={navigatePrevious}
            />
            {/* Timeline vertical line */}
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent rounded-full opacity-70 pointer-events-none" style={{ left: 44 }} />
            {/* Timeline horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 h-3 bg-gradient-to-r from-blue-200 via-blue-100 to-transparent rounded-full shadow-lg opacity-70 pointer-events-none" style={{transform: 'translateY(-50%)', zIndex: 1, filter: 'blur(0.5px)'}} />
            {/* Timeline events */}
            {visibleEvents.map((event, idx) => {
              const eventYear = new Date(event.date).getFullYear();
              const position = ((eventYear - minYear) / (maxYear - minYear)) * 100;
              return (
                <div
                  key={event.id}
                  className="absolute flex flex-col items-center group animate-fadein"
                  style={{
                    left: `calc(${position}% - 110px)`,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10 + idx,
                    minWidth: 220,
                  }}
                >
                  <div className="mb-2 w-1 h-8 bg-blue-300 rounded-full opacity-70" style={{boxShadow: '0 2px 8px 0 #60a5fa33'}} />
                  <TimelineEvent
                    event={event}
                    categories={eventCategories}
                    isSelected={selectedEvent?.id === event.id}
                    onClick={() => handleEventClick(event)}
                  />
                </div>
              );
            })}
            <style jsx>{`
              .animate-fadein {
                animation: fadein 0.7s cubic-bezier(0.23, 1, 0.32, 1);
              }
              @keyframes fadein {
                from { opacity: 0; transform: translateY(20px) scale(0.98); }
                to { opacity: 1; transform: translateY(0) scale(1); }
              }
            `}</style>
          </div>
        </div>
      </div>
      
      {/* Event detail panel */}
      {showDetailPanel && selectedEvent && (
        <div className="border-t border-gray-200 p-4">
          <EventDetailPanel 
            event={selectedEvent}
            categories={eventCategories}
            relatedEvents={findRelatedEvents(selectedEvent, filteredEvents)}
            onClose={handleCloseDetailPanel}
            onRelatedEventClick={handleRelatedEventClick}
          />
        </div>
      )}
    </>
  );
}
