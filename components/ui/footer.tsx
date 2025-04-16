'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Background pattern overlay removed to eliminate gray area */}
      {/* <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div> */}
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="text-xl font-semibold mb-4 font-playfair border-b-2 border-memorial-gold pb-2 inline-block">
              Holocaust History Project
            </h3>
            <p className="text-gray-300 leading-relaxed">
              An educational resource exploring the Holocaust with a focus on Canada&apos;s connections and perspectives.
            </p>
            <div className="footer-social mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-memorial-gold transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-memorial-gold transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-memorial-gold transition-colors" aria-label="External Link">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="text-xl font-semibold mb-4 font-playfair border-b-2 border-memorial-gold pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/timeline" className="text-gray-300 hover:text-memorial-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-memorial-gold rounded-full mr-2 link-dot"></span>
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/sources" className="text-gray-300 hover:text-memorial-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-memorial-gold rounded-full mr-2 link-dot"></span>
                  Sources & References
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-memorial-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-memorial-gold rounded-full mr-2 link-dot"></span>
                  Educational Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-about">
            <h3 className="text-xl font-semibold mb-4 font-playfair border-b-2 border-memorial-gold pb-2 inline-block">
              About This Project
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              This educational website aims to document the Holocaust and explore Canada&apos;s connections to this historical period.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Website made by Vihas &amp; Chandr
            </p>
          </div>
        </div>
        
        <div className="footer-bottom border-t border-gray-700/50 mt-10 pt-6 text-center">
          <p className="copyright text-gray-400">
            {currentYear} Holocaust History Project
          </p>
        </div>
      </div>
    </footer>
  );
}
