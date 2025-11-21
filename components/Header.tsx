import React, { useState } from 'react';
import { GoraLogo } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // Height of the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" onClick={handleNavClick} className="text-2xl font-bold text-gray-800">
          <GoraLogo />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#hero" onClick={handleNavClick} className="text-orange-500 font-semibold">Get Started</a>
          <a href="#features" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#bucketlist" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600">Bucketlist</a>
          <a href="#our-story" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600">About Us</a>
        </nav>

        <div className="hidden md:block">
          <a href="#become-host" onClick={handleNavClick} className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Become a Host</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <a href="#hero" onClick={handleNavClick} className="block px-6 py-2 text-orange-500 font-semibold">Get Started</a>
          <a href="#features" onClick={handleNavClick} className="block px-6 py-2 text-gray-600 hover:text-blue-600">Features</a>
          <a href="#bucketlist" onClick={handleNavClick} className="block px-6 py-2 text-gray-600 hover:text-blue-600">Bucketlist</a>
          <a href="#our-story" onClick={handleNavClick} className="block px-6 py-2 text-gray-600 hover:text-blue-600">About Us</a>
          <div className="px-6 mt-2">
            <a href="#become-host" onClick={handleNavClick} className="w-full text-center block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Become a Host</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
