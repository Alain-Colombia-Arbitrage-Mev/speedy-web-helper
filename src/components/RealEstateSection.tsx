
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

const RealEstateSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#141518] text-white py-16 px-4 md:px-8 font-clash">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="flex items-center justify-center gap-3">
            <div className="flex items-center space-x-3">
            </div>
            <span className="text-white">{t('realEstate.title')}</span>
            <img 
              src="/lovable-uploads/2be46ee9-76e5-46d6-9525-bf467f04849c.png" 
              alt="Fire emoji" 
              className="h-12 w-12"
            />
          </span>
          <p className="text-white mt-2 text-[22px] font-normal">{t('realEstate.subtitle')}</p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Single featured image */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-10 z-0"></div>
            
            <img 
              src="/lovable-uploads/7df78f14-c84f-42d5-bd8d-a02986ff690e.png" 
              alt="Futuristic luxury house with pool" 
              className="rounded-lg w-full object-cover border-2 border-gray-700 shadow-lg shadow-blue-500/10" 
            />
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">{t('realEstate.finder')}</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <span className="text-xl">{t('realEstate.tech1')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <span className="text-xl">{t('realEstate.tech2')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <span className="text-xl">{t('realEstate.tech3')}</span>
              </div>
            </div>
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB] hover:to-[#FF8F77]/90 text-white shadow-lg shadow-pink-500/20">
                {t('realEstate.exploreButton')}
              </Button>
            </div>
          </div>
        </div>

        {/* New Property Sharing Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://i.imgur.com/Er4NeR7.gif" 
              alt="Property sharing grid" 
              className="w-full rounded-lg"
            />
          </div>
          <div className="space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold">{t('realEstate.fractionalTitle')}</h3>
            <p className="text-xl leading-relaxed">
              {t('realEstate.fractionalDesc1')}
            </p>
            <p className="text-xl leading-relaxed">
              {t('realEstate.fractionalDesc2')}
            </p>
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB] hover:to-[#FF8F77]/90 text-white shadow-lg shadow-pink-500/20">
                {t('realEstate.learnMoreButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSection;
