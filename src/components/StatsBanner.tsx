
import React from 'react';

const StatsBanner = () => {
  return (
    <div className="w-full bg-white text-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">500MM+</h2>
            <p className="text-[#FF56BB] font-medium">Backed Projects</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">10K+</h2>
            <p className="text-[#FF56BB] font-medium">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">20+</h2>
            <p className="text-[#FF56BB] font-medium">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
