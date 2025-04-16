'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Map, Info, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const navigationCards = [
  {
    title: 'Timeline',
    description: 'Explore key events of the Holocaust chronologically, with special attention to Canada\'s role and response.',
    icon: <Clock size={40} className="text-memorial-blue" />,
    href: '/timeline',
    color: 'border-t-memorial-blue',
  },
  {
    title: 'Sources',
    description: 'View the cited sources and references.',
    icon: <FileText size={40} className="text-memorial-navy" />,
    href: '/sources',
    color: 'border-t-memorial-navy',
  },
  {
    title: 'Resources',
    description: 'Access educational resources that are related to the Holocaust.',
    icon: <Info size={40} className="text-memorial-gold" />,
    href: '/resources',
    color: 'border-t-memorial-gold',
  },
];

export default function NavigationCards() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="navigation-section">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-memorial-navy">
            Explore the Project
          </h2>
          <div className="memorial-divider"></div>
        </motion.div>
        
        <motion.div 
          className="navigation-cards grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {navigationCards.map((card, index) => (
            <motion.div key={card.href} variants={item}>
              <Link 
                href={card.href}
                className={`navigation-card ${card.color} border-t-4 flex flex-col items-center text-center h-full
                  hover:transform hover:-translate-y-1`}
              >
                <div className="card-icon-container mb-5 p-4 bg-gray-50 rounded-full">
                  {card.icon}
                </div>
                <div className="navigation-card-content">
                  <h3 className="navigation-card-title text-2xl font-semibold mb-4 text-memorial-navy">{card.title}</h3>
                  <p className="navigation-card-description text-gray-700 leading-relaxed">{card.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
