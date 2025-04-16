import timelineEvents from '@/data/timeline-events';

import educationalResources from '@/data/educational-resources';

import { references } from '@/data/sources-references';
import { TimelineEvent, EducationalResource } from '@/lib/types';
import { Reference } from '@/data/sources-references';

// Define search result types
export type SearchResultType = 'event' | 'resource' | 'reference';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: SearchResultType;
  url: string;
  date?: string;
  year?: number;
  categories?: string[];
  tags?: string[];
  score: number;
}

// Function to search across all content
export function searchAllContent(query: string): SearchResult[] {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const normalizedQuery = query.toLowerCase().trim();
  const words = normalizedQuery.split(/\s+/).filter(word => word.length > 2);
  
  if (words.length === 0) {
    return [];
  }
  
  // Search in each content type
  const eventResults = searchTimelineEvents(normalizedQuery, words);
  const resourceResults = searchEducationalResources(normalizedQuery, words);
  const referenceResults = searchReferences(normalizedQuery, words);
  
  // Combine and sort results by score
  return [...eventResults, ...resourceResults, ...referenceResults]
    .sort((a, b) => b.score - a.score)
    .slice(0, 50); // Limit to 50 results
}

// Search in timeline events
function searchTimelineEvents(query: string, queryWords: string[]): SearchResult[] {
  return timelineEvents
    .map(event => {
      const score = calculateScore(event, queryWords);
      
      if (score > 0) {
        return {
          id: event.id,
          title: event.title,
          description: event.description,
          type: 'event' as const,
          url: `/timeline?event=${event.id}`,
          date: event.date,
          categories: event.categories,
          score
        } as SearchResult;
      }
      
      return null;
    })
    .filter((result): result is SearchResult => result !== null);
}

// Search in educational resources
function searchEducationalResources(query: string, queryWords: string[]): SearchResult[] {
  return educationalResources
    .map(resource => {
      const score = calculateScore(resource, queryWords);
      
      if (score > 0) {
        return {
          id: resource.id,
          title: resource.title,
          description: resource.description,
          type: 'resource' as const,
          url: `/resources?resource=${resource.id}`,
          year: resource.year,
          tags: resource.tags,
          score
        } as SearchResult;
      }
      
      return null;
    })
    .filter((result): result is SearchResult => result !== null);
}

// Search in references
function searchReferences(query: string, queryWords: string[]): SearchResult[] {
  return references
    .map(reference => {
      const score = calculateScore(reference, queryWords);
      
      if (score > 0) {
        return {
          id: reference.id,
          title: reference.title,
          description: reference.description || '',
          type: 'reference' as const,
          url: `/sources?reference=${reference.id}`,
          year: reference.year,
          categories: reference.categories,
          score
        } as SearchResult;
      }
      
      return null;
    })
    .filter((result): result is SearchResult => result !== null);
}

// Calculate search score based on matches
function calculateScore(item: TimelineEvent | EducationalResource | Reference, queryWords: string[]): number {
  let score = 0;
  
  // Convert item to a standardized format for searching
  const searchableItem: Record<string, any> = {
    ...item,
    // Handle different naming conventions
    title: 'title' in item ? item.title : ('name' in item ? (item as any).name : ''),
  };
  
  // Search in title/name (highest weight)
  const title = searchableItem.title?.toLowerCase() || '';
  queryWords.forEach(word => {
    if (title.includes(word)) {
      score += 10;
      
      // Exact title match gets higher score
      if (title === word) {
        score += 50;
      }
    }
  });
  
  // Search in description (medium weight)
  const description = searchableItem.description?.toLowerCase() || '';
  queryWords.forEach(word => {
    if (description.includes(word)) {
      score += 5;
    }
  });
  
  // Search in long description if available (lower weight)
  const longDescription = searchableItem.longDescription?.toLowerCase() || '';
  queryWords.forEach(word => {
    if (longDescription.includes(word)) {
      score += 3;
    }
  });
  
  // Search in author if available
  const author = searchableItem.author?.toLowerCase() || '';
  queryWords.forEach(word => {
    if (author.includes(word)) {
      score += 8;
    }
  });
  
  // Search in categories/tags if available
  const categories = [
    ...(searchableItem.categories || []),
    ...(searchableItem.tags || [])
  ].map(cat => typeof cat === 'string' ? cat.toLowerCase() : '');
  
  queryWords.forEach(word => {
    if (categories.some(cat => cat.includes(word))) {
      score += 7;
    }
  });
  
  // Search in country if available (for locations)
  const country = searchableItem.country?.toLowerCase() || '';
  queryWords.forEach(word => {
    if (country.includes(word)) {
      score += 6;
    }
  });
  
  return score;
}
