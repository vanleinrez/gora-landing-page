import React from 'react';

const Hero: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    alert(`Thank you for subscribing, ${email}! We'll keep you updated.`);
    e.currentTarget.reset();
  };

  return (
    <section 
      id="hero"
      className="relative bg-cover bg-center text-white pt-48 pb-24"
      style={{ backgroundImage: "url('https://picsum.photos/1600/1000?image=1060')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Escape the City with Gora
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Sign up for our newsletter and be the first to know when we launch.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-full p-2 flex items-center max-w-md mx-auto md:mx-0 shadow-lg">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  required
                  className="w-full bg-transparent text-gray-700 focus:outline-none px-4"
                />
                <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap">
                  Get Early Access
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-[580px] bg-gray-800 rounded-[50px] border-[14px] border-gray-800 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-gray-800 rounded-b-xl"></div>
              <img 
                src="https://picsum.photos/id/1011/300/600"
                alt="App Screenshot" 
                className="w-full h-full object-cover rounded-[36px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
