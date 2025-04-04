
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 90,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a fixed start date (January 15, 2025)
    const startDate = new Date("2025-01-15T00:00:00");
    
    // Calculate end date as exactly 90 days from the start date
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 90);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        // Timer expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      }
      
      // Calculate remaining time
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
      return true;
    };
    
    // Initial calculation
    const shouldContinue = calculateTimeLeft();
    if (!shouldContinue) return;
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="flex justify-start space-x-4 mt-6">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-white bg-[#1c1d21] py-3 px-4 rounded-lg border border-gray-700 min-w-[80px] text-center">
          {timeLeft.days}
        </div>
        <span className="mt-2 text-gray-400">{t('fire.days')}</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-white bg-[#1c1d21] py-3 px-4 rounded-lg border border-gray-700 min-w-[80px] text-center">
          {timeLeft.hours}
        </div>
        <span className="mt-2 text-gray-400">{t('fire.hours')}</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-white bg-[#1c1d21] py-3 px-4 rounded-lg border border-gray-700 min-w-[80px] text-center">
          {timeLeft.minutes}
        </div>
        <span className="mt-2 text-gray-400">{t('fire.minutes')}</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-white bg-[#1c1d21] py-3 px-4 rounded-lg border border-gray-700 min-w-[80px] text-center">
          {timeLeft.seconds}
        </div>
        <span className="mt-2 text-gray-400">{t('fire.seconds')}</span>
      </div>
    </div>
  );
};

const FireSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full bg-[#141518] text-white py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left column - Fire content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/2be46ee9-76e5-46d6-9525-bf467f04849c.png" 
                alt="Fire emoji" 
                className="h-12 w-12"
              />
              <p className="text-[#FF56BB] uppercase tracking-wide text-sm font-medium">{t('fire.hotOffer')}</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t('fire.title').split('exclusive access').map((part, i) => 
                i === 0 ? part : <><span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">exclusive access</span>{part.substring('exclusive access'.length)}</>
              )}
            </h2>
            
            <p className="text-gray-400 text-lg">
              {t('fire.description')}
            </p>
            
            {/* Countdown Timer */}
            <CountdownTimer />
            
            <div className="pt-6 flex justify-start">
              <Button size="lg" className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB] hover:to-[#FF8F77]/80 text-white shadow-lg shadow-[#FF56BB]/20 border-0">
                <Flame className="w-5 h-5 mr-2" /> {t('fire.joinButton')}
              </Button>
            </div>
          </div>
          
          {/* Right column - Stats and offer */}
          <div className="bg-[#1c1d21] p-6 rounded-xl border border-gray-800 relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-[#FF56BB] to-red-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-400">{t('fire.totalRaised')}</span>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">$3.5M+</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-400">{t('fire.presalePrice')}</span>
                <span className="text-2xl font-bold">$0.25</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span className="text-gray-400">{t('fire.launchPrice')}</span>
                <span className="text-2xl font-bold">$0.50</span>
              </div>
              
              <div className="flex justify-between items-center pb-4">
                <span className="text-gray-400">{t('fire.roiPotential')}</span>
                <span className="text-2xl font-bold text-green-500">+100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background dots/particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-40 left-1/4 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default FireSection;
