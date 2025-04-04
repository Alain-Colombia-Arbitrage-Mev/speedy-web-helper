
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import RealEstateSection from "@/components/RealEstateSection";
import FireSection from "@/components/FireSection";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
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
