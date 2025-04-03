
import React from 'react';

const StatsBanner = () => {
  return (
    <div className="w-full bg-black text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute w-full h-24 bg-white -top-12 left-0 rounded-b-[100%]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            500MM+ <span className="text-orange-500">Backed Projects</span> 🔥
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
