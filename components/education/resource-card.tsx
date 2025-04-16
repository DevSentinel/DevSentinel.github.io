"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, BookOpen, Video, FileText, Globe } from 'lucide-react';
import { EducationalResource } from '@/lib/types';

interface ResourceCardProps {
  resource: EducationalResource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  // Determine the icon based on resource type
  const getResourceIcon = () => {
    switch (resource.type) {
      case 'article':
        return <FileText size={18} />;
      case 'book':
        return <BookOpen size={18} />;
      case 'video':
        return <Video size={18} />;
      case 'website':
        return <Globe size={18} />;
      default:
        return <FileText size={24} />;
    }
  };
  
  return (
    <div className={`
      relative flex flex-col items-center justify-start h-full bg-white rounded-xl shadow-md border-t-4 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 animate-fadein-up
      ${resource.type === 'book' ? 'border-t-blue-400' :
        resource.type === 'video' ? 'border-t-purple-400' :
        resource.type === 'article' ? 'border-t-yellow-400' :
        resource.type === 'website' ? 'border-t-teal-400' :
        'border-t-blue-200'}
    `}>
      {/* Icon */}
      <div className="flex items-center justify-center mt-6 mb-4 w-16 h-16 rounded-full bg-blue-50">
        {getResourceIcon()}
      </div>
      
      {/* Resource image */}
      <div className="relative h-40 w-full">
        {resource.imageUrl ? (
          <Image
            src={resource.imageUrl}
            alt={resource.title}
            fill
            className="object-cover"
            onError={(e) => {
              // Hide the broken image and show fallback
              (e.currentTarget as HTMLImageElement).style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}
        {/* Fallback icon for missing/broken image */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-blue-50 text-blue-300"
          style={{ display: resource.imageUrl ? 'none' : 'flex' }}
        >
          {getResourceIcon()}
        </div>
      </div>
      
      {/* Resource content */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 text-navy shadow">
              {getResourceIcon()}
            </span>
            <span className="text-xs font-medium text-gray-600 uppercase">
              {resource.type}
            </span>
          </div>
          
          {resource.level && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
              {resource.level}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-navy mb-2">{resource.title}</h3>
        
        {resource.author && (
          <p className="text-sm text-gray-600 mb-2">
            By {resource.author}
            {resource.year && ` (${resource.year})`}
          </p>
        )}
        
        <p className="text-sm text-gray-700 mb-4 flex-grow">
          {resource.description}
        </p>
        
        <div className="mt-auto">
          {/* Tags */}
          {resource.tags && resource.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {resource.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex gap-2">
            {resource.url && (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 bg-navy text-white rounded-md text-sm hover:bg-navy-dark transition-colors"
              >
                <span>View Resource</span>
                <ExternalLink size={14} />
              </a>
            )}
            
            {resource.localPath && (
              <Link
                href={resource.localPath}
                className="flex items-center gap-1 px-3 py-1.5 border border-navy text-navy rounded-md text-sm hover:bg-navy/5 transition-colors"
              >
                <span>Learn More</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
