import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
}

interface CreditsProps {
  team: TeamMember[];
  acknowledgements: string[];
  contactEmail: string;
}

export default function Credits({ team, acknowledgements, contactEmail }: CreditsProps) {
  return (
    <div className="space-y-10">
      {/* Team Section */}
      <div>
        <h2 className="text-2xl font-bold text-navy mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              {member.imageUrl ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-5xl font-light">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
              
              <div className="p-4">
                <h3 className="font-semibold text-navy">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                {member.bio && (
                  <p className="text-sm text-gray-700">{member.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Acknowledgements Section */}
      <div>
        <h2 className="text-2xl font-bold text-navy mb-4">Acknowledgements</h2>
        <p className="text-gray-700 mb-4">
          We would like to express our gratitude to the following organizations and individuals
          for their support and contributions to this project:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <ul className="space-y-2">
            {acknowledgements.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold font-bold mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Contact Section */}
      <div>
        <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-2">
          For inquiries, feedback, or to contribute to this project, please contact us at:
        </p>
        <a 
          href={`mailto:${contactEmail}`}
          className="text-navy hover:text-gold transition-colors font-medium"
        >
          {contactEmail}
        </a>
        
        <div className="mt-6 p-4 bg-navy/5 rounded-lg border border-navy/10">
          <p className="text-sm text-gray-600">
            We welcome feedback, corrections, and additional information that could enhance
            this educational resource. If you have personal stories, photographs, or documents
            related to the Holocaust that you would like to share, please reach out to us.
          </p>
        </div>
      </div>
    </div>
  );
}
