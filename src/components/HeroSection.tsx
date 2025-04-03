
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - Text content */}
        <div className="space-y-6">
          <p className="text-gray-700 uppercase tracking-wide text-sm font-medium">
            Web3 platform for democratize investments
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Unlock the unique <span className="text-blue-600">digital property</span> of your investments
          </h1>
          <p className="text-lg text-gray-600">
            Experience the revolutionary world of fractional real estate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
              <span className="mr-2">🔥</span> Preventa Now - 50%
            </Button>
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
              <span className="mr-2">📄</span> Litepaper
            </Button>
          </div>
        </div>
        
        {/* Right column - Image with decorative elements */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl relative z-10 bg-black p-2">
            <img 
              src="/lovable-uploads/fd124595-76fa-4129-9643-663fa5c60894.png" 
              alt="3D House Model"
              className="w-full h-auto rounded-2xl" 
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              Pepperoni
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-red-500 rounded-full blur-xl opacity-30 -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-red-500 rounded-full blur-xl opacity-30 -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
