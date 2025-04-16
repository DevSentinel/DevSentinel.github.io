import React, { useState } from 'react';
import { Source } from '@/lib/types';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface EventSourcesProps {
  sources: Source[];
}

export default function EventSources({ sources }: EventSourcesProps) {
  const [expanded, setExpanded] = useState(false);
  
  if (!sources.length) {
    return null;
  }
  
  // Display only the first source when collapsed
  const displayedSources = expanded ? sources : sources.slice(0, 1);
  
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-600 mb-2">Sources</h3>
      
      <ul className="space-y-3 text-sm">
        {displayedSources.map((source, index) => (
          <li key={index} className="border-l-2 border-gray-300 pl-3 py-1">
            <div className="font-medium">{source.title}</div>
            
            {source.author && (
              <div className="text-gray-600">
                {source.author}
                {source.year && `, ${source.year}`}
              </div>
            )}
            
            {source.publication && (
              <div className="text-gray-600 italic">{source.publication}</div>
            )}
            
            {source.url && (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-navy hover:text-gold transition-colors mt-1 text-xs"
              >
                <ExternalLink size={12} className="mr-1" />
                View source
              </a>
            )}
          </li>
        ))}
      </ul>
      
      {/* Show toggle button if there are more than one source */}
      {sources.length > 1 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-navy hover:text-gold transition-colors mt-2 text-xs"
        >
          {expanded ? (
            <>
              <ChevronUp size={12} className="mr-1" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown size={12} className="mr-1" />
              Show all {sources.length} sources
            </>
          )}
        </button>
      )}
    </div>
  );
}
