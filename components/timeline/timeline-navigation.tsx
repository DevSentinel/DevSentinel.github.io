import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface TimelineNavigationProps {
  currentYear: number;
  minYear: number;
  maxYear: number;
  onYearChange: (year: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function TimelineNavigation({
  currentYear,
  minYear,
  maxYear,
  onYearChange,
  onNext,
  onPrevious
}: TimelineNavigationProps) {
  const [inputYear, setInputYear] = useState(currentYear.toString());
  
  const handleYearSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const year = parseInt(inputYear);
    if (!isNaN(year) && year >= minYear && year <= maxYear) {
      onYearChange(year);
    } else {
      // Reset to current year if invalid
      setInputYear(currentYear.toString());
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onPrevious}
          className="inline-flex items-center justify-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          aria-label="Previous period"
        >
          <ChevronLeft size={20} />
        </button>
        <form onSubmit={handleYearSubmit} className="flex items-center">
          <input
            type="text"
            value={inputYear}
            onChange={(e) => setInputYear(e.target.value)}
            className="block w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-xl text-center font-bold"
            aria-label="Current year"
          />
        </form>
        <button
          onClick={onNext}
          className="inline-flex items-center justify-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          aria-label="Next period"
        >
          <span className="rotate-180 inline-block"><ChevronLeft size={20} /></span>
        </button>
      </div>
    </div>
  );
}
