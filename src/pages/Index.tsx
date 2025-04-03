
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import RealEstateSection from "@/components/RealEstateSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Banner */}
      <StatsBanner />
      
      {/* Real Estate Section */}
      <RealEstateSection />
    </div>
  );
};

export default Index;
