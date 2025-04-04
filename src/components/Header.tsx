
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Moon, Sun, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`w-full py-6 px-6 md:px-8 lg:px-12 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? "bg-gray-900 shadow-md" 
            : "bg-white shadow-md" 
          : isDarkMode 
            ? "bg-gray-900" 
            : "bg-white"
      } ${isDarkMode ? 'dark' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b8ec6c3b-b667-47e0-8c79-ac384ac9ef70.png" 
              alt="Perperzon Logo" 
              className="h-10 mr-2" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} font-semibold`}>
              {t('header.howItWorks')}
            </Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} font-semibold`}>
              {t('header.presaleDapp')}
            </Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} font-semibold`}>
              {t('header.tokenomics')}
            </Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} font-semibold`}>
              {t('header.presale')}
            </Link>
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          {!isMobile && (
            <>
              <div className="flex items-center space-x-4">
                <div className={`${isDarkMode ? 'bg-gray-700 text-[#FF56BB]' : 'bg-gray-200 text-[#FF56BB]'} rounded-full h-8 w-8 flex items-center justify-center`}>
                  <span>?</span>
                </div>
                <div className={`${isDarkMode ? 'bg-gray-700 text-[#FF56BB]' : 'bg-gray-200 text-[#FF56BB]'} rounded-full h-8 w-8 flex items-center justify-center`}>
                  <span>$</span>
                </div>
                
                {/* Language Selector */}
                <Popover>
                  <PopoverTrigger asChild>
                    <div className={`flex items-center cursor-pointer ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} border rounded-md px-3 py-1`}>
                      <Globe className="h-4 w-4 mr-1" />
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-[#FF56BB]'}`}>
                        {language === 'en' ? 'English' : 'Español'}
                      </span>
                      <ChevronDown className={`h-4 w-4 ml-1 ${isDarkMode ? 'text-gray-300' : 'text-[#FF56BB]'}`} />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className={`w-40 p-0 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="py-1">
                      <button
                        onClick={() => setLanguage('en')}
                        className={`w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} ${language === 'en' ? 'font-bold' : ''}`}
                      >
                        {t('header.english')}
                      </button>
                      <button
                        onClick={() => setLanguage('es')}
                        className={`w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} ${language === 'es' ? 'font-bold' : ''}`}
                      >
                        {t('header.spanish')}
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
                
                {/* Dark Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={toggleDarkMode}
                    className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
                  />
                  <div className="flex items-center space-x-1">
                    {isDarkMode ? (
                      <Moon className="h-4 w-4 text-gray-300" />
                    ) : (
                      <Sun className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90 text-white">
                  {t('header.connectWallet')}
                </Button>
              </div>
            </>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'} rounded-md`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className={`md:hidden fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 pt-20 px-6`}>
          {/* Add logo and close button at the top of the mobile menu */}
          <div className="flex items-center justify-between w-full absolute top-6 left-0 right-0 px-6">
            <div className="flex-1"></div>
            <div className="flex justify-center flex-1">
              <img 
                src="/lovable-uploads/b8ec6c3b-b667-47e0-8c79-ac384ac9ef70.png" 
                alt="Perperzon Logo" 
                className="h-12" 
              />
            </div>
            <div className="flex justify-end flex-1">
              <button 
                onClick={toggleMenu}
                className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-black hover:bg-gray-100'} rounded-full`}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 p-4">
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>
              {t('header.howItWorks')}
            </Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>
              {t('header.presaleDapp')}
            </Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>
              {t('header.stakingDapp')}
            </Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>
              {t('header.tokenomics')}
            </Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>
              {t('header.invest')}
            </Link>
            
            <div className="flex items-center space-x-4 mt-6">
              <Switch 
                checked={isDarkMode} 
                onCheckedChange={toggleDarkMode} 
                className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
              />
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {isDarkMode ? t('header.darkMode') : t('header.lightMode')}
              </span>
            </div>
            
            <div className="flex flex-col w-full space-y-4 mt-6">
              {/* Language Dropdown */}
              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={`w-full ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                      <Globe className="mr-2 h-4 w-4" />
                      {language === 'en' ? t('header.english') : t('header.spanish')}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className={`w-full p-0 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} ${language === 'en' ? 'font-bold' : ''}`}
                      >
                        {t('header.english')}
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('es');
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} ${language === 'es' ? 'font-bold' : ''}`}
                      >
                        {t('header.spanish')}
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Button className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90 text-white" onClick={() => setIsMenuOpen(false)}>
                {t('header.connectWallet')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
