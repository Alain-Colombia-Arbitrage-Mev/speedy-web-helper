
import React from 'react';
import { Button } from "@/components/ui/button";

const RealEstateSection = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Web3 for Real Estate Using AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/lovable-uploads/fd124595-76fa-4129-9643-663fa5c60894.png" alt="Luxury house with pool" className="rounded-lg h-48 w-full object-cover" />
            <img src="/lovable-uploads/fd124595-76fa-4129-9643-663fa5c60894.png" alt="Modern house at night" className="rounded-lg h-48 w-full object-cover" />
            <img src="/lovable-uploads/fd124595-76fa-4129-9643-663fa5c60894.png" alt="House with garden" className="rounded-lg h-48 w-full object-cover" />
            <div className="rounded-lg h-48 w-full bg-gray-800 p-4 relative">
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-black font-bold">Go</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-2">Savannakhet/Laos</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-gray-700 rounded p-1 text-center">
                      <div>312K+</div>
                      <div>Renters</div>
                    </div>
                    <div className="bg-gray-700 rounded p-1 text-center">
                      <div>83%</div>
                      <div>Occupancy</div>
                    </div>
                    <div className="bg-gray-700 rounded p-1 text-center">
                      <div>500G$</div>
                      <div>Avg Daily Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-right">
            <h3 className="text-2xl font-bold">Intelligent Houses Finder® using:</h3>
            <h3 className="text-2xl font-bold">AI, Blockchain</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSection;
