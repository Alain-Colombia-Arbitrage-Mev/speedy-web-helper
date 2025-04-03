
import React from 'react';

const StatsBanner = () => {
  return (
    <div className="w-full bg-black text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute w-full h-24 bg-gradient-to-b from-blue-900 to-black -top-12 left-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">500MM+</h2>
            <p className="text-pink-500 font-medium">Backed Projects</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">10K+</h2>
            <p className="text-pink-500 font-medium">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">20+</h2>
            <p className="text-pink-500 font-medium">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
