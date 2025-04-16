import React from 'react';
import Image from 'next/image';

interface ProjectInfoProps {
  title: string;
  description: string;
  mission: string;
  goals: string[];
}

export default function ProjectInfo({ 
  title, 
  description, 
  mission, 
  goals 
}: ProjectInfoProps) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-navy mb-4">About the Project</h2>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-navy mb-3">Our Mission</h3>
          <p className="text-gray-700">{mission}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-navy mb-4">Project Goals</h3>
        <ul className="space-y-2">
          {goals.map((goal, index) => (
            <li key={index} className="flex items-start">
              <span className="text-navy font-bold mr-2">•</span>
              <span className="text-gray-700">{goal}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image
          src="/images/about/project-banner.jpg"
          alt="Holocaust History Project"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6">
            <h2 className="text-white text-2xl font-bold">{title}</h2>
            <p className="text-white/90 text-sm mt-2">
              Preserving memory. Educating for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
