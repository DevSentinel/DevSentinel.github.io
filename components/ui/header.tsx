'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavMenu from '@/components/ui/nav-menu';
import SearchBar from '@/components/ui/search-bar';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`site-header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        {/* Desktop layout */}
        <div className="desktop-menu">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="site-branding"
          >
            <Link href="/" className="site-logo">
              <span className="site-title">
                Holocaust History Project
              </span>
              <span className="site-divider"></span>
            </Link>
            <p className="site-tagline">
              Exploring Canada's connections to the Holocaust
            </p>
          </motion.div>
          
          <motion.div 
            className="site-navigation"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SearchBar variant="header" placeholder="Search history..." />
            <NavMenu />
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="mobile-menu-container">
          <Link href="/" className="mobile-logo">
            Holocaust History
          </Link>
          
          <button 
            onClick={toggleMobileMenu}
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-search">
              <SearchBar variant="header" placeholder="Search history..." />
            </div>
            <NavMenu mobile={true} />
          </motion.div>
        )}
      </div>
    </header>
  );
}
