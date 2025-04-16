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
  visibleEvents: TimelineEvent[];
  minYear: number;
  maxYear: number;
}

export default function useTimeline({
  events,
  initialYear,
  initialZoom = 1
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
  
  // Set initial year to middle of range if not provided
  const defaultYear = initialYear || Math.floor((minYear + maxYear) / 2);
  
  const [state, setState] = useState<TimelineState>({
    currentYear: defaultYear,
    zoomLevel: initialZoom,
    selectedEvent: null,
    visibleEvents: [],
    minYear,
    maxYear
  });
  
  // Calculate visible events when dependencies change
  const { startYear, endYear, visibleEvents } = useMemo(() => {
    const { startYear, endYear } = getVisibleTimeRange(
      state.currentYear, 
      state.zoomLevel, 
      minYear, 
      maxYear
    );
    let filtered = sortedEvents.filter(event => {
      const trimmedDate = event.date.trim();
      const eventYear = Number(trimmedDate.slice(0, 4));
      const sYear = Number(startYear);
      const eYear = Number(endYear);
      return eventYear >= sYear && eventYear <= eYear;
    });
    // If no events are visible, expand the window to include the closest event
    if (filtered.length === 0 && sortedEvents.length > 0) {
      const currentYear = state.currentYear;
      let closestEvent = sortedEvents[0];
      let minDiff = Math.abs(Number(closestEvent.date.slice(0, 4)) - currentYear);
      for (const event of sortedEvents) {
        const eventYear = Number(event.date.slice(0, 4));
        const diff = Math.abs(eventYear - currentYear);
        if (diff < minDiff) {
          minDiff = diff;
          closestEvent = event;
        }
      }
      const closestYear = Number(closestEvent.date.slice(0, 4));
      filtered = sortedEvents.filter(event => Number(event.date.slice(0, 4)) === closestYear);
    }
    return { startYear, endYear, visibleEvents: filtered };
  }, [state.currentYear, state.zoomLevel, minYear, maxYear, sortedEvents]);

  
  // Navigate to a specific year
  const navigateToYear = useCallback((year: number) => {
    const boundedYear = Math.min(Math.max(year, minYear), maxYear);
    setState(prev => ({
      ...prev,
      currentYear: boundedYear
    }));
  }, [minYear, maxYear]);
  
  // Navigate to a specific event
  const navigateToEvent = useCallback((eventId: string) => {
    const event = sortedEvents.find(e => e.id === eventId);
    if (event) {
      const eventYear = new Date(event.date).getFullYear();
      setState(prev => ({
        ...prev,
        currentYear: eventYear,
        selectedEvent: event
      }));
    }
  }, [sortedEvents]);
  
  // Change zoom level
  const setZoomLevel = useCallback((zoom: number) => {
    // Zoom levels: 1 (decade view), 2 (5-year view), 3 (year view), 4 (month view)
    const boundedZoom = Math.min(Math.max(zoom, 1), 4);
    setState(prev => ({
      ...prev,
      zoomLevel: boundedZoom
    }));
  }, []);
  
  // Select an event
  const selectEvent = useCallback((event: TimelineEvent | null) => {
    setState(prev => ({
      ...prev,
      selectedEvent: event
    }));
  }, []);
  
  // Navigate to next time period
  const navigateNext = useCallback(() => {
    const { startYear, endYear } = getVisibleTimeRange(
      state.currentYear, 
      state.zoomLevel, 
      minYear, 
      maxYear
    );
    const step = endYear - startYear;
    const nextYear = state.currentYear + Math.max(1, Math.floor(step / 2));
    navigateToYear(nextYear);
  }, [state.currentYear, state.zoomLevel, minYear, maxYear, navigateToYear]);
  
  // Navigate to previous time period
  const navigatePrevious = useCallback(() => {
    const { startYear, endYear } = getVisibleTimeRange(
      state.currentYear, 
      state.zoomLevel, 
      minYear, 
      maxYear
    );
    const step = endYear - startYear;
    const prevYear = state.currentYear - Math.max(1, Math.floor(step / 2));
    navigateToYear(prevYear);
  }, [state.currentYear, state.zoomLevel, minYear, maxYear, navigateToYear]);
  
  return {
    ...state,
    startYear,
    endYear,
    visibleEvents,
    navigateToYear,
    navigateToEvent,
    setZoomLevel,
    selectEvent,
    navigateNext,
    navigatePrevious
  };
}
