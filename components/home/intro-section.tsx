'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className="intro-section">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Holocaust History Project
          </h1>
          
          <div className="memorial-divider"></div>
          
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Exploring the Holocaust with a focus on Canada&apos;s connections and perspectives
          </p>
          
          <a 
            href="#explore" 
            id="explore-button"
            className="btn btn-primary py-3 px-8 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore the Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
