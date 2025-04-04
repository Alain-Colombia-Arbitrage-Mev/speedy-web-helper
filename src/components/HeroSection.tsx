
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-32 px-4 md:px-8 md:py-40 min-h-screen flex items-center relative overflow-hidden`}>
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
          <p className={`text-pink-500 uppercase tracking-wide text-sm font-medium ${isDarkMode ? 'text-pink-400' : 'text-pink-500'}`}>
            {t('hero.subtitle')}
          </p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {t('hero.title').split('digital property').map((part, i) => 
              i === 0 ? part : <><span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">digital property</span>{part.substring('digital property'.length)}</>
            )}
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB] hover:to-[#FF8F77]/80 text-white shadow-lg shadow-pink-500/30 border-0">
              <span className="mr-2">🔥</span> {t('hero.presaleButton')}
            </Button>
            <Button size="lg" variant="outline" className={`border-2 border-[#FF56BB] text-[#FF56BB] hover:bg-pink-400/10 bg-transparent ${isDarkMode ? 'border-pink-400 text-pink-400' : ''}`}>
              <span className="mr-2">📄</span> {t('hero.litepaperButton')}
            </Button>
          </div>
        </div>
        
        {/* Right column - Image with decorative elements */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden relative z-10 p-2">
            <img 
              src="/lovable-uploads/2ca1133b-6cd8-42a2-ad78-e526b7d73a87.png" 
              alt="3D House Model"
              className="w-full h-auto rounded-2xl" 
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm flex items-center">
              <span className="w-2 h-2 rounded-full mr-2 animate-pulse"></span>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-[#FF56BB] to-red-500 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-[#FF56BB] to-red-500 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>
      </div>

      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#000" 
            fillOpacity="0.05"
            d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
          <path 
            fill="#0EA5E9" 
            fillOpacity="0.1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,69.3C1200,85,1320,107,1380,117.3L1440,128L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
