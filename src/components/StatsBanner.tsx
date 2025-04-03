
import React from 'react';

const StatsBanner = () => {
  return (
    <div className="w-full bg-black text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute w-full h-24 bg-white -top-12 left-0 rounded-b-[100%]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">500MM+</h2>
            <p className="text-orange-500">Backed Projects</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">10K+</h2>
            <p className="text-orange-500">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">20+</h2>
            <p className="text-orange-500">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
