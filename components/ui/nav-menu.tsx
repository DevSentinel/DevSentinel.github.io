import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/timeline', label: 'Timeline' },

  { href: '/resources', label: 'Resources' },
  { href: '/sources', label: 'Sources' },

];

interface NavMenuProps {
  mobile?: boolean;
}

export default function NavMenu({ mobile = false }: NavMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // If mobile prop is true, render links directly without dropdown
  if (mobile) {
    return (
      <nav className="mobile-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="main-nav">
      {/* Mobile menu button - only visible on desktop nav when screen is small */}
      <button 
        className="nav-toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation */}
      <ul className="desktop-nav">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Dropdown navigation - only appears when toggle is clicked */}
      {isMenuOpen && (
        <div className="nav-dropdown">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
