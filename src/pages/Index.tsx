import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, ChevronDown, ShoppingCart, BarChart3, Coins } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Bar */}
      <div className="w-full bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">500MM+ <span className="text-orange-500">Backed Projects</span> 🔥</h2>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="w-full bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Web3 for Real Estate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Web3 for Real Estate Using AI</h2>
              <p className="text-gray-300">
                Intelligent solutions to analyze and guide investments in high-quality properties.
              </p>
              <p className="text-gray-300">
                More profitable investment opportunities for a broader audience.
              </p>
              <Button variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-black">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img src="/lovable-uploads/86ddf8da-9c01-4729-baaf-339dc91dfe01.png" alt="Real Estate Project" className="rounded-lg h-32 w-full object-cover" />
              <img src="/lovable-uploads/86ddf8da-9c01-4729-baaf-339dc91dfe01.png" alt="Real Estate Project" className="rounded-lg h-32 w-full object-cover" />
              <img src="/lovable-uploads/86ddf8da-9c01-4729-baaf-339dc91dfe01.png" alt="Real Estate Project" className="rounded-lg h-32 w-full object-cover" />
              <img src="/lovable-uploads/86ddf8da-9c01-4729-baaf-339dc91dfe01.png" alt="Real Estate Project" className="rounded-lg h-32 w-full object-cover" />
            </div>
          </div>
          
          {/* Blueprint Section */}
          <div className="flex justify-center">
            <img src="/lovable-uploads/86ddf8da-9c01-4729-baaf-339dc91dfe01.png" alt="Real Estate Blueprint" className="rounded-lg max-w-full md:max-w-lg h-auto" />
          </div>
          
          {/* Other Investment Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Lithium Mining" 
              icon={<Globe className="h-8 w-8 text-blue-500" />}
              description="Invest in sustainable lithium mining operations with blockchain transparency."
            />
            <FeatureCard 
              title="E-commerce - Economic Collaborative" 
              icon={<ShoppingCart className="h-8 w-8 text-blue-500" />}
              description="Join collaborative e-commerce platforms backed by digital assets."
            />
            <FeatureCard 
              title="Predicción de Mercados" 
              icon={<BarChart3 className="h-8 w-8 text-blue-500" />}
              description="AI-driven market prediction tools for better investment decisions."
            />
          </div>
          
          {/* Business Model */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Modelo de negocio</h2>
            <FeatureCard 
              title="Tokens duales" 
              icon={<Coins className="h-8 w-8 text-blue-500" />}
              description="Our dual token model provides both utility and governance rights."
              className="max-w-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to unlock the future of investments?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
