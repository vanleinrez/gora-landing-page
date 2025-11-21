
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Bucketlist from './components/Bucketlist';
import OurStory from './components/OurStory';
import BecomeHost from './components/BecomeHost';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Bucketlist />
        <OurStory />
        <BecomeHost />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
