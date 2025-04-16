// Type definitions for the Holocaust History Project

// Timeline Event Types
export type EventCategory = 
  | 'holocaust' 
  | 'ww2' 
  | 'canada-policy' 
  | 'canada-response' 
  | 'post-war' 
  | 'survivor-stories';

export interface TimelineEvent {
  id: string;
  title: string;
  date: string; // ISO format date string (YYYY-MM-DD)
  endDate?: string; // Optional end date for events that span a period
  description: string;
  longDescription?: string; // More detailed description for the event detail panel
  categories: EventCategory[];
  location?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  sources?: Source[];
  media?: Media[];
  relatedEvents?: string[]; // Array of related event IDs
}

// Map Location Types
export type LocationCategory = 
  | 'concentration-camp' 
  | 'death-camp' 
  | 'ghetto' 
  | 'memorial' 
  | 'museum' 
  | 'refugee-center' 
  | 'canadian-connection';

export interface MapLocation {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  categories: LocationCategory[];
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
  yearEstablished?: number;
  yearClosed?: number;
  sources?: Source[];
  media?: Media[];
  relatedLocations?: string[]; // Array of related location IDs
  relatedEvents?: string[]; // Array of related event IDs
}

// Common Types
export interface Source {
  title: string;
  author?: string;
  publication?: string;
  year?: number;
  url?: string;
  accessDate?: string; // ISO format date string
  citation: string;
}

export interface Media {
  id: string;
  type: 'image' | 'video' | 'audio' | 'document';
  title: string;
  description?: string;
  caption?: string;
  url: string;
  thumbnailUrl?: string;
  credit?: string;
  source?: string;
  sourceUrl?: string;
}

// Educational Resources Types
export interface EducationalResource {
  id: string;
  title: string;
  type: 'book' | 'article' | 'video' | 'website' | 'document';
  author?: string;
  year?: number;
  description: string;
  level?: string; // e.g., 'Beginner', 'Intermediate', 'Advanced'
  imageUrl?: string;
  tags?: string[];
  url?: string; // External URL
  localPath?: string; // Internal app path
}

// Historical Context Types
export interface HistoricalContext {
  id: string;
  title: string;
  period: string; // e.g., '1933-1939'
  description: string;
  keyEvents?: Array<{
    year: number;
    event: string;
  }>;
  imageUrl?: string;
  relatedMapLocations?: string[]; // Array of location IDs
  relatedTimelineEvents?: string[]; // Array of event IDs
}
