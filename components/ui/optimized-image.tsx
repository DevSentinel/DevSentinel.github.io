'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  generateSrcSet, 
  getResponsiveSizes, 
  getImageDimensions, 
  getBlurredPlaceholder 
} from '@/lib/media-utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  type?: 'hero' | 'thumbnail' | 'gallery' | 'timeline' | 'map' | 'portrait';
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  quality?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onClick?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  type = 'thumbnail',
  className = '',
  priority = false,
  fill = false,
  sizes,
  width,
  height,
  quality = 85,
  objectFit = 'cover',
  objectPosition = 'center',
  onClick
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Get dimensions based on type if not explicitly provided
  const dimensions = getImageDimensions(type);
  const imageWidth = width || dimensions.width;
  const imageHeight = height || dimensions.height;
  
  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
  // Handle error
  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };
  
  // Determine responsive sizes if not provided
  const responsiveSizes = sizes || getResponsiveSizes(type === 'hero' ? 100 : 50);
  
  // Combine classes
  const imageClasses = `
    transition-opacity duration-500 
    ${isLoading ? 'opacity-0' : 'opacity-100'} 
    ${objectFit === 'cover' ? 'object-cover' : ''} 
    ${objectFit === 'contain' ? 'object-contain' : ''} 
    ${className}
  `.trim();
  
  // Placeholder for error state
  if (error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ 
          width: fill ? '100%' : imageWidth, 
          height: fill ? '100%' : imageHeight,
          aspectRatio: dimensions.aspectRatio
        }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }
  
  // Placeholder while loading
  const placeholder = (
    <div 
      className={`bg-gray-100 animate-pulse ${className}`}
      style={{ 
        width: fill ? '100%' : imageWidth, 
        height: fill ? '100%' : imageHeight,
        aspectRatio: dimensions.aspectRatio
      }}
    />
  );
  
  return (
    <div 
      className={`relative ${isLoading ? 'bg-gray-100' : ''}`}
      style={{ 
        width: fill ? '100%' : imageWidth, 
        height: fill ? '100%' : imageHeight,
        aspectRatio: dimensions.aspectRatio
      }}
      onClick={onClick}
    >
      {isLoading && placeholder}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : imageWidth}
        height={fill ? undefined : imageHeight}
        className={imageClasses}
        priority={priority}
        quality={quality}
        fill={fill}
        sizes={responsiveSizes}
        onLoadingComplete={handleLoadingComplete}
        onError={handleError}
        placeholder="blur"
        blurDataURL={getBlurredPlaceholder(src)}
        style={{ 
          objectFit, 
          objectPosition
        }}
      />
    </div>
  );
}
