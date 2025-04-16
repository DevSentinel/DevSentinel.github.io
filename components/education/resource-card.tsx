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
      navigation-card bg-white rounded-xl shadow-md border-t-4 p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1
      ${resource.type === 'book' ? 'border-t-memorial-blue' :
        resource.type === 'video' ? 'border-t-memorial-navy' :
        resource.type === 'article' ? 'border-t-memorial-gold' :
        resource.type === 'website' ? 'border-t-teal-400' :
        'border-t-memorial-blue'}
    `}>
      <div className="card-icon-container mb-5 p-4 bg-gray-50 rounded-full mx-auto flex items-center justify-center">
        {getResourceIcon()}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-memorial-navy text-center">{resource.title}</h3>
      {resource.author && (
        <p className="text-sm text-gray-500 text-center mb-2">
          By {resource.author}{resource.year ? ` (${resource.year})` : ''}
        </p>
      )}
      <p className="text-gray-700 leading-relaxed text-center px-4 mb-4">{resource.description}</p>
    </div>
  );
}
