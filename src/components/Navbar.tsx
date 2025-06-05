import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Safety Standards', path: '/safety-standards' },
    { name: 'Delete Account', path: '/delete-account' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Home className="h-6 w-6 sm:h-8 sm:w-8 text-primary-500" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-secondary-800">Aoggle Homes</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-primary-600 text-sm lg:text-base ${
                  location.pathname === link.path 
                    ? 'text-primary-500 font-medium' 
                    : 'text-secondary-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="#download" 
              className="bg-accent-500 hover:bg-accent-500/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors text-sm lg:text-base"
            >
              Download
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-secondary-800 p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-primary-600 px-2 py-1 rounded-md ${
                    location.pathname === link.path 
                      ? 'text-primary-500 font-medium bg-primary-50' 
                      : 'text-secondary-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#download" 
                className="bg-accent-500 hover:bg-accent-500/90 text-white px-4 py-2 rounded-md transition-colors text-center"
              >
                Download
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;