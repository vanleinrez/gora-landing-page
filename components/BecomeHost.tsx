import React, { useState } from 'react';
import { EarnMoneyIcon, VerifiedHostIcon, UnleashSpiritIcon, ShareCultureIcon } from './Icons';
import RegistrationModal from './RegistrationModal';

const benefits = [
  {
    icon: <EarnMoneyIcon />,
    title: 'Earn Money',
  },
  {
    icon: <VerifiedHostIcon />,
    title: 'Verified Rural Tour Host',
  },
  {
    icon: <UnleashSpiritIcon />,
    title: 'Unleash Local Tourist Spirit',
  },
  {
    icon: <ShareCultureIcon />,
    title: 'Share Your Local Culture',
  }
];

const BecomeHost: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <section id="become-host" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Sign up to become a host</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Gora is a community that embraces the value of host communities by empowering livelihood projects that will help improve their chosen travel experience attraction, promote local products and services, and boost sustainable local economies.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Become a host
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="text-blue-600 mb-3 inline-block">{benefit.icon}</div>
                    <h3 className="font-semibold text-gray-700">{benefit.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && <RegistrationModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default BecomeHost;
