import { useState, useCallback, useEffect, useMemo } from 'react';
import { TimelineEvent } from '@/lib/types';
import { getVisibleTimeRange } from '@/lib/timeline-utils';

interface UseTimelineProps {
  events: TimelineEvent[];
  initialYear?: number;
  initialZoom?: number;
}

interface TimelineState {
  currentYear: number;
  zoomLevel: number;
  selectedEvent: TimelineEvent | null;
  minYear: number;
  maxYear: number;
  visibleEvents: TimelineEvent[];
}

export default function useTimeline({
  events
}: UseTimelineProps) {
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  // Get min and max years from events
  const minYear = sortedEvents.length > 0 
    ? new Date(sortedEvents[0].date).getFullYear() 
    : 1933; // Default to start of Nazi regime
  
  const maxYear = sortedEvents.length > 0 
    ? new Date(sortedEvents[sortedEvents.length - 1].date).getFullYear() 
    : 1945; // Default to end of WWII
  
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  
  // Select an event
  const selectEvent = useCallback((event: TimelineEvent | null) => {
    setSelectedEvent(event);
  }, []);

  return {
    selectedEvent,
    minYear,
    maxYear,
    selectEvent,
    visibleEvents: sortedEvents
  };

}
