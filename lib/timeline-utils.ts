import { TimelineEvent, EventCategory } from '@/lib/types';

/**
 * Calculate the visible time range based on current year and zoom level
 */
// Always use a 3-year window for the timeline
export function getVisibleTimeRange(
  currentYear: number,
  _zoomLevel: number, // ignored
  minYear: number,
  maxYear: number
): { startYear: number; endYear: number } {
  const yearRange = 3;
  // Snap to the start of a 3-year window (e.g., 1939, 1942, 1945, ...)
  const offset = (currentYear - minYear) % yearRange;
  let startYear = currentYear - offset;
  let endYear = startYear + yearRange - 1;
  if (endYear > maxYear) {
    endYear = maxYear;
    startYear = Math.max(minYear, endYear - yearRange + 1);
  }
  return { startYear, endYear };
}

/**
 * Calculate the position of an event on the timeline
 */
export function calculateEventPosition(
  event: TimelineEvent,
  minYear: number,
  maxYear: number
): number {
  const eventDate = new Date(event.date);
  const eventYear = eventDate.getFullYear();
  const eventMonth = eventDate.getMonth();
  
  // Calculate position based on year and month
  const yearPosition = (eventYear - minYear) / (maxYear - minYear);
  const monthOffset = eventMonth / 12 / (maxYear - minYear);
  
  return Math.min(1, Math.max(0, yearPosition + monthOffset)) * 100;
}

/**
 * Group events by year
 */
export function groupEventsByYear(events: TimelineEvent[]): Record<number, TimelineEvent[]> {
  return events.reduce((acc, event) => {
    const year = new Date(event.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as Record<number, TimelineEvent[]>);
}

/**
 * Filter events by categories
 */
export function filterEventsByCategories(
  events: TimelineEvent[],
  selectedCategories: EventCategory[]
): TimelineEvent[] {
  if (selectedCategories.length === 0) {
    return events;
  }
  
  return events.filter(event => 
    event.categories.some(category => selectedCategories.includes(category))
  );
}

/**
 * Find related events for a given event
 */
export function findRelatedEvents(
  event: TimelineEvent,
  allEvents: TimelineEvent[]
): TimelineEvent[] {
  if (!event.relatedEvents || event.relatedEvents.length === 0) {
    return [];
  }
  
  return allEvents.filter(e => event.relatedEvents?.includes(e.id));
}

/**
 * Format a date for display
 */
export function formatEventDate(date: string, includeDay: boolean = true): string {
  const eventDate = new Date(date);
  
  if (isNaN(eventDate.getTime())) {
    return 'Unknown date';
  }
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  };
  
  if (includeDay) {
    options.day = 'numeric';
  }
  
  return eventDate.toLocaleDateString('en-US', options);
}
