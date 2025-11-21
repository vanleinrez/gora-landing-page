
import React from 'react';
import { LocationMapIcon, NavigateDirectionIcon, SosIcon, DirectMessagingIcon, VerifiedMembersIcon } from './Icons';

const features = [
  {
    icon: <LocationMapIcon />,
    title: 'Location Map',
    description: 'Search your destination easily with our location map feature.'
  },
  {
    icon: <NavigateDirectionIcon />,
    title: 'Navigate Direction',
    description: 'Get directions to your destination and see available routes.'
  },
  {
    icon: <SosIcon />,
    title: 'SOS Call for Help',
    description: 'SOS call for help coordination in case you get into any trouble.'
  },
  {
    icon: <DirectMessagingIcon />,
    title: 'Direct Messaging',
    description: 'Communicate with your host and fellow adventurers.'
  },
  {
    icon: <VerifiedMembersIcon />,
    title: 'Verified Members',
    description: 'Communicate with your verified local adventure host.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">App Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
