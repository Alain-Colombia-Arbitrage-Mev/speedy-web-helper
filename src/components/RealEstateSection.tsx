
import React from 'react';
import { Button } from "@/components/ui/button";

const RealEstateSection = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">Web3</span> for Real Estate Using AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-10 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10 z-0"></div>
            
            <img src="/lovable-uploads/fd124595-76fa-4129-9643-663fa5c60894.png" alt="Luxury house with pool" className="rounded-lg h-48 w-full object-cover border-2 border-white/10" />
            <img src="/lovable-uploads/fd124595-76fa-4129-9643-663fa5c60894.png" alt="Modern house at night" className="rounded-lg h-48 w-full object-cover border-2 border-white/10" />
            <img src="/lovable-uploads/fd124595-76fa-4129-9643-663fa5c60894.png" alt="House with garden" className="rounded-lg h-48 w-full object-cover border-2 border-white/10" />
            <div className="rounded-lg h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 p-4 relative border-2 border-white/10">
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-black font-bold">→</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-2">Savannakhet/Laos</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-gray-700/70 backdrop-blur-sm rounded p-1 text-center">
                      <div className="font-bold text-pink-500">312K+</div>
                      <div>Renters</div>
                    </div>
                    <div className="bg-gray-700/70 backdrop-blur-sm rounded p-1 text-center">
                      <div className="font-bold text-pink-500">83%</div>
                      <div>Occupancy</div>
                    </div>
                    <div className="bg-gray-700/70 backdrop-blur-sm rounded p-1 text-center">
                      <div className="font-bold text-pink-500">500G$</div>
                      <div>Avg Daily Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">Intelligent Houses Finder® using:</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <span className="text-xl">Artificial Intelligence</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <span className="text-xl">Blockchain Technology</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <span className="text-xl">Smart Contracts</span>
              </div>
            </div>
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-500/20">
                Explore Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSection;
