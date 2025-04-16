import React from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface TimelineNavigationProps {
  currentYear: number;
  minYear: number;
  maxYear: number;
  zoomLevel: number;
  onYearChange: (year: number) => void;
  onZoomChange: (zoom: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function TimelineNavigation({
  currentYear,
  minYear,
  maxYear,
  zoomLevel,
  onYearChange,
  onZoomChange,
  onNext,
  onPrevious
}: TimelineNavigationProps) {
  
  const handlePrevYear = () => {
    onPrevious();
  };
  
  const handleNextYear = () => {
    onNext();
  };
  
  const handleZoomIn = () => {
    onZoomChange(zoomLevel + 1);
  };
  
  const handleZoomOut = () => {
    onZoomChange(zoomLevel - 1);
  };
  
  const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(e.target.value, 10);
    if (!isNaN(year) && year >= minYear && year <= maxYear) {
      onYearChange(year);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      <div className="text-lg font-semibold text-navy">
        Holocaust Timeline: {minYear} - {maxYear}
      </div>
      
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 1}
            className={`p-2 rounded-l-md ${
              zoomLevel <= 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-navy text-white hover:bg-navy-light'
            }`}
            aria-label="Zoom out"
          >
            <ZoomOut size={16} />
          </button>
          <div className="px-3 py-2 bg-gray-100 text-sm">
            {zoomLevel === 1 ? 'Decade' : 
             zoomLevel === 2 ? '5 Years' : 
             zoomLevel === 3 ? 'Year' : 'Month'}
          </div>
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 4}
            className={`p-2 rounded-r-md ${
              zoomLevel >= 4 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-navy text-white hover:bg-navy-light'
            }`}
            aria-label="Zoom in"
          >
            <ZoomIn size={16} />
          </button>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={handlePrevYear}
            disabled={currentYear <= minYear}
            className={`p-2 rounded-l-md ${
              currentYear <= minYear 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-navy text-white hover:bg-navy-light'
            }`}
            aria-label="Previous year"
          >
            <ChevronLeft size={16} />
          </button>
          <input
            type="number"
            value={currentYear}
            min={minYear}
            max={maxYear}
            onChange={handleYearInputChange}
            className="w-20 px-2 py-2 bg-gray-100 font-medium text-center border-none"
          />
          <button
            onClick={handleNextYear}
            disabled={currentYear >= maxYear}
            className={`p-2 rounded-r-md ${
              currentYear >= maxYear 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-navy text-white hover:bg-navy-light'
            }`}
            aria-label="Next year"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
