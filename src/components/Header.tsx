
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || 
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const isMobile = useIsMobile();

  // Initial setup of dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
      }`}
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
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} font-semibold`}>How it Works</Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} font-semibold`}>Presale dapp</Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} font-semibold`}>Tokenomics</Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} font-semibold`}>Presale</Link>
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
                <div className={`flex items-center ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} border rounded-md px-3 py-1`}>
                  <span className={`font-medium mr-1 ${isDarkMode ? 'text-gray-300' : 'text-[#FF56BB]'}`}>English</span>
                  <ChevronDown className={`h-4 w-4 ${isDarkMode ? 'text-gray-300' : 'text-[#FF56BB]'}`} />
                </div>
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
                  Connect Wallet
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
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>How it Works</Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>Presale dapp</Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>Staking dapp</Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>Tokenomics</Link>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} text-xl`} onClick={() => setIsMenuOpen(false)}>Invest</Link>
            
            <div className="flex items-center space-x-4 mt-6">
              <Switch 
                checked={isDarkMode} 
                onCheckedChange={toggleDarkMode} 
                className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
              />
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>
            
            <div className="flex flex-col w-full space-y-4 mt-6">
              <Button variant="outline" className={`w-full ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`} onClick={() => setIsMenuOpen(false)}>Language</Button>
              <Button className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90 text-white" onClick={() => setIsMenuOpen(false)}>
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
