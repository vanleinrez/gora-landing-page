
import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/500?image=119" 
              alt="Travelers looking at a map"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2 bg-blue-600 text-white p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <h3 className="text-xl font-semibold mb-6 text-blue-200">Hello there, Discovering Hidden Rural Treasures</h3>
            <p className="text-blue-100 leading-relaxed">
              It started in 2020 when a group of friends decided to convert their hobby into a business. Disappointed by the lack of authentic local experiences in mainstream tourism, they started Gora. Our mission is to connect adventurous travelers with local guides who offer genuine, unforgettable rural experiences. From there, a startup team with a solid design and development background created an app to help travelers create experimental journeys and to simultaneously promote what's best for sustainable local tourism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
