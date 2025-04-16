"use client";

import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import { Reference } from "@/data/sources-references";

interface SourcesCardProps {
  reference: Reference;
  categories: { id: string; name: string }[];
}

function getSourceCardColor(reference: Reference) {
  // Assign a color based on the first category, or default to memorial-navy
  const cat = reference.categories[0];
  switch (cat) {
    case 'primary':
      return 'border-t-memorial-gold';
    case 'secondary':
      return 'border-t-memorial-blue';
    case 'academic':
      return 'border-t-memorial-navy';
    case 'memorial':
      return 'border-t-teal-400';
    case 'canadian':
      return 'border-t-memorial-blue';
    case 'digital':
      return 'border-t-memorial-navy';
    default:
      return 'border-t-memorial-navy';
  }
}

export default function SourcesCard({ reference, categories }: SourcesCardProps) {
  return (
    <div
      className={`navigation-card bg-white rounded-xl shadow-md border-t-4 p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${getSourceCardColor(reference)}`}
    >
      <div className="card-icon-container mb-5 p-4 bg-gray-50 rounded-full mx-auto flex items-center justify-center">
        <FileText size={18} />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-memorial-navy text-center">{reference.title}</h3>
      {reference.author && (
        <p className="text-sm text-gray-500 text-center mb-2">
          By {reference.author}{reference.year ? ` (${reference.year})` : ''}
        </p>
      )}
      <p className="text-gray-700 leading-relaxed text-center px-4 mb-4">{reference.description}</p>
      {reference.url && (
        <div className="flex justify-center mb-2">
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-gold flex items-center gap-1 text-sm"
          >
            <span>Visit</span>
            <ExternalLink size={14} />
          </a>
        </div>
      )}

      {/* Citation */}
      <div className="pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-500 font-mono text-center">
          {reference.citation}
        </p>
      </div>
    </div>
  );
}
