import React, { useState } from 'react';
import { CloseIcon } from './Icons';

interface RegistrationModalProps {
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    // Mock API call
    setTimeout(() => {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log('Host Registration Data:', data);
      setFormState('success');
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
          aria-label="Close registration form"
        >
          <CloseIcon />
        </button>

        {formState === 'success' ? (
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">Your registration has been received. We're excited to have you join the Gora community! We'll be in touch soon.</p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Become a Host</h2>
            <p className="text-gray-600 mb-8">Fill out the form below for early access to our hosting platform.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="fullName" id="fullName" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Your Location (City, Country)</label>
              <input type="text" name="location" id="location" required placeholder="e.g., Baguio City, Philippines" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div className="mb-6">
              <label className="block text-base font-medium text-gray-800 mb-3">What type of hosting experience would you like to offer?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Backpack Adventures', 'Local Gastronomy Tours', 'Cultural Immersion', 'Scenic Treks & Hikes', 'Agri-tourism / Farm Stays'].map(item => (
                  <div key={item} className="flex items-center">
                    <input id={item.replace(/\s+/g, '')} name="hostingType" type="checkbox" value={item} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor={item.replace(/\s+/g, '')} className="ml-3 text-sm text-gray-700">{item}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-1">Other / Tell us more about your idea</label>
              <textarea name="other" id="other" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div className="mb-8">
              <div className="flex items-center">
                <input id="newsletter" name="newsletter" type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">I'd also like to receive the Gora newsletter for updates.</label>
              </div>
            </div>

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {formState === 'submitting' ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
