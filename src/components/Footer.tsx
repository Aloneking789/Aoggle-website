import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">Aoggle Homes</span>
            </Link>
            <p className="mt-4 text-gray-300">
              The ultimate app for home inspiration. Discover amazing ideas for your dream home through short videos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-primary-500 transition-colors">Features</Link></li>
              <li><a href="#download" className="text-gray-300 hover:text-primary-500 transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/delete-account" className="text-gray-300 hover:text-primary-500 transition-colors">Delete Account</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            <p className="text-gray-300">Download our app today!</p>
            <a href="#download" className="inline-block mt-2 bg-primary-500 hover:bg-primary-600 text-secondary-800 font-bold px-4 py-2 rounded-md transition-colors">
              Get Started
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aoggle Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;