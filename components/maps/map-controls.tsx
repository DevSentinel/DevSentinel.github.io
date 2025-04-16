import React from 'react';
import { ZoomIn, ZoomOut, Home } from 'lucide-react';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  zoomLevel: number;
  maxZoom: number;
  minZoom: number;
}

export default function MapControls({
  onZoomIn,
  onZoomOut,
  onReset,
  zoomLevel,
  maxZoom,
  minZoom
}: MapControlsProps) {
  return (
    <div className="absolute right-4 top-4 flex flex-col gap-2 bg-white rounded-md shadow-md p-1 z-10">
      <button
        onClick={onZoomIn}
        disabled={zoomLevel >= maxZoom}
        className={`p-2 rounded-md ${
          zoomLevel >= maxZoom
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-navy hover:bg-gray-100'
        }`}
        aria-label="Zoom in"
      >
        <ZoomIn size={20} />
      </button>
      
      <button
        onClick={onZoomOut}
        disabled={zoomLevel <= minZoom}
        className={`p-2 rounded-md ${
          zoomLevel <= minZoom
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-navy hover:bg-gray-100'
        }`}
        aria-label="Zoom out"
      >
        <ZoomOut size={20} />
      </button>
      
      <div className="border-t border-gray-200 my-1" />
      
      <button
        onClick={onReset}
        className="p-2 rounded-md text-navy hover:bg-gray-100"
        aria-label="Reset view"
      >
        <Home size={20} />
      </button>
    </div>
  );
}
