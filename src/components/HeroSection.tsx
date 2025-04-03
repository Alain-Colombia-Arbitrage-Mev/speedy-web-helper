
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - Text content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Unlock the unique <span className="text-blue-600">digital property</span> of your investments
          </h1>
          <p className="text-lg text-gray-600">
            Blockchain-based digital assets provide unprecedented investment opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Right column - Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-xl relative z-10">
            <img 
              src="/lovable-uploads/86ddf8da-9c01-4729-baaf-339dc91dfe01.png" 
              alt="Digital Property Investment"
              className="w-full h-auto" 
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 rounded-full blur-xl opacity-30 -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500 rounded-full blur-xl opacity-30 -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
