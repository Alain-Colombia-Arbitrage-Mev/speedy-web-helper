
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="w-full bg-white py-32 px-4 md:px-8 md:py-40 min-h-screen flex items-center relative overflow-hidden">
      {/* Background particles/dots effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="absolute top-40 left-1/4 w-6 h-6 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column - Text content */}
        <div className="space-y-6 text-gray-800">
          <p className="text-pink-500 uppercase tracking-wide text-sm font-medium">
            Web3 platform for democratized investments
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Unlock the unique <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">digital property</span> of your investments
          </h1>
          <p className="text-lg text-gray-600">
            Experience the revolutionary world of fractional real estate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB] hover:to-[#FF8F77]/80 text-white shadow-lg shadow-pink-500/30 border-0">
              <span className="mr-2">🔥</span> Preventa Now - 50%
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#FF56BB] text-[#FF56BB] hover:bg-pink-400/10 bg-transparent">
              <span className="mr-2">📄</span> Litepaper
            </Button>
          </div>
        </div>
        
        {/* Right column - Image with decorative elements */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-gray-100 bg-white p-2">
            <img 
              src="/lovable-uploads/2ca1133b-6cd8-42a2-ad78-e526b7d73a87.png" 
              alt="3D House Model"
              className="w-full h-auto rounded-2xl" 
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm flex items-center">
              <span className="w-2 h-2  rounded-full mr-2 animate-pulse"></span>
              <div className="flex items-center">
                <img src="/lovable-uploads/b8ec6c3b-b667-47e0-8c79-ac384ac9ef70.png" alt="Perperzon" className="h-5 w-5 mr-2" />
                Perperzon
              </div>
            </div>
          </div>
          
          {/* Decorative elements - red/pink blobs from reference image */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-[#FF56BB] to-red-500 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-[#FF56BB] to-red-500 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
