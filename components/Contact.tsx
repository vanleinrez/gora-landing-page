
import React from 'react';
import { EmailIcon, PhoneIcon, LocationIcon } from './Icons';

const contactInfo = [
  {
    icon: <EmailIcon />,
    title: 'Drop a line',
    subtitle: 'Mail Us',
    detail: 'support@gora.app'
  },
  {
    icon: <PhoneIcon />,
    title: '24/7 Service',
    subtitle: 'Call Us',
    detail: '+0000 0000 0000'
  },
  {
    icon: <LocationIcon />,
    title: 'Location',
    subtitle: 'Visit Us',
    detail: 'Philippines'
  }
];

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 text-center flex flex-col items-center">
              <div className="bg-orange-100 text-orange-500 rounded-full p-4 mb-4 inline-flex">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{info.title}</h3>
              <p className="text-gray-500 mb-2">{info.subtitle}</p>
              <p className="text-blue-600 font-semibold">{info.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
