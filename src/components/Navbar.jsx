import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { title: "Home", path: "#/" },
    { title: "About", path: "#/about" },
    { title: "Events", path: "#/events" },
    { title: "Improvements", path: "#/improvements" },
    { title: "Gallery", path: "#/gallery" },
    { title: "Sponsors", path: "#/sponsors" },
    { title: "Donate", path: "#/donate" },
];

const contactFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeO5mCFDN9jz2fQSstcohgzUcsKrfD50sejbOm2GEYqs6McRA/viewform';

export const Navbar = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ path, title }) => (
    <a
      href={path}
      onClick={() => setIsOpen(false)}
      className={`block md:inline-block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPath === path
          ? 'text-white bg-primary'
          : 'text-gray-800 hover:bg-secondary hover:text-white'
      }`}
    >
      {title}
    </a>
  );

  return (
    <nav className="bg-gray-100 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#/" className="text-white font-bold text-xl flex items-center">
              <img 
              src="/images/misc/dig_logo.png" 
              alt="DIG Logo" 
              className="h-8 w-auto mr-2"
            />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => <NavLink key={link.title} {...link} />)}
              <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <NavLink key={link.title} {...link} />)}
            <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className="block text-gray-800 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};