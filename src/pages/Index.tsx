
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import RealEstateSection from "@/components/RealEstateSection";
import FireSection from "@/components/FireSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Banner */}
      <StatsBanner />
      
      {/* Real Estate Section */}
      <RealEstateSection />
      
      {/* Fire Section */}
      <FireSection />
    </div>
  );
};

export default Index;
