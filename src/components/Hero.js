import React from 'react';
import heroImage from '../images/home.jpg';

const HeroSection = () => {
  return (
    <div className="relative bg-transparent py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">
            Welcome to My Website. <br></br>This is the Hero Section
          </h1>
          <p className="text-gray-800 mb-8">
            Explore the amazing features of Material Tailwind and Gatsby
          </p>
          <button className="bg-white text-indigo-500 py-2 px-6 rounded-lg shadow-md">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};





export default HeroSection;
  
