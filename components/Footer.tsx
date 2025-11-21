
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Gora</h3>
            <p className="text-gray-400">Discover new destination and adventure.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><YoutubeIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Get Started</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#bucketlist" className="hover:text-white">Bucketlist</a></li>
              <li><a href="#our-story" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Useful Pages</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Tours</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4 text-center text-gray-500">
          <p>GORA © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
