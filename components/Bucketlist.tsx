
import React from 'react';

const bucketlistItems = [
  {
    title: 'Backpack Adventures',
    imageUrl: 'https://picsum.photos/400/500?image=1043'
  },
  {
    title: 'Local Gastronomy',
    imageUrl: 'https://picsum.photos/400/500?image=1080'
  },
  {
    title: 'Cultural Immersion',
    imageUrl: 'https://picsum.photos/400/500?image=20'
  },
  {
    title: 'Scenic Treks',
    imageUrl: 'https://picsum.photos/400/500?image=1050'
  }
];

const Bucketlist: React.FC = () => {
  return (
    <section id="bucketlist" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Bucketlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bucketlistItems.map((item, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
              <img src={item.imageUrl} alt={item.title} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-blue-600/80 text-white text-center py-3 rounded-md">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bucketlist;
