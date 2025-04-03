
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-purple-900 via-blue-900 to-blue-800 py-32 px-4 md:px-8 md:py-40 min-h-screen flex items-center relative overflow-hidden">
      {/* Background particles/dots effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full"></div>
        <div className="absolute top-40 left-1/4 w-6 h-6 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column - Text content */}
        <div className="space-y-6 text-white">
          <p className="text-blue-200 uppercase tracking-wide text-sm font-medium">
            Web3 platform for democratized investments
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Unlock the unique <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">digital property</span> of your investments
          </h1>
          <p className="text-lg text-blue-100">
            Experience the revolutionary world of fractional real estate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-500/30 border-0">
              <span className="mr-2">🔥</span> Preventa Now - 50%
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400/10 bg-transparent">
              <span className="mr-2">📄</span> Litepaper
            </Button>
          </div>
        </div>
        
        {/* Right column - Image with decorative elements */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white/10 bg-gradient-to-br from-purple-900 to-blue-900 p-2">
            <img 
              src="/lovable-uploads/fd124595-76fa-4129-9643-663fa5c60894.png" 
              alt="3D House Model"
              className="w-full h-auto rounded-2xl" 
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
              Live
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
