
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
      className={`w-full py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className={`${isScrolled || isMobile ? "text-cyan-500" : "text-white"} mr-2`}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.9 15.2C32.5 13.4 32 10.7 29.9 9.7C27.8 8.7 25.4 10.2 24.9 12.5C24.6 13.9 25.2 15.3 26.2 16.2C25.5 16.9 24.7 17.5 23.8 18C21.7 15.5 18.3 14.2 14.8 15C10.3 16 7 19.8 6.6 24.4C6.2 28.7 8.3 32.8 11.9 35C16.2 37.7 22 37.2 25.7 33.8C29.5 30.3 30.4 24.4 27.8 20.1C28.9 18.6 30.1 17.1 31.5 15.7C31.3 15.5 31.1 15.4 30.9 15.2Z" fill="currentColor"/>
                <path d="M20.3 8.2C22.4 8.2 24.1 6.5 24.1 4.4C24.1 2.3 22.4 0.6 20.3 0.6C18.2 0.6 16.5 2.3 16.5 4.4C16.5 6.5 18.2 8.2 20.3 8.2Z" fill="currentColor"/>
              </svg>
            </div>
            <span className={`font-bold text-xl ${isScrolled || isMobile ? "text-gray-900" : "text-white"}`}>Dracma</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-600 font-semibold`}>How it Works</Link>
            <Link to="/" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-600 font-semibold`}>Preventa dapp</Link>
            <Link to="/" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-600 font-semibold`}>Staking dapp</Link>
            <Link to="/" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-600 font-semibold`}>Tokenomics</Link>
            <Link to="/" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-600 font-semibold`}>Invest</Link>
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          {!isMobile && (
            <>
              <div className="flex items-center space-x-4">
                <div className={`${isScrolled ? "bg-gray-200 text-gray-500" : "bg-white/20 text-white"} rounded-full h-8 w-8 flex items-center justify-center`}>
                  <span>?</span>
                </div>
                <div className={`${isScrolled ? "bg-gray-200 text-gray-500" : "bg-white/20 text-white"} rounded-full h-8 w-8 flex items-center justify-center`}>
                  <span>$</span>
                </div>
                <div className={`flex items-center ${isScrolled ? "border-gray-300 text-blue-600" : "border-white/40 text-white"} border rounded-md px-3 py-1`}>
                  <span className="font-medium mr-1">English</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-6 bg-gray-300 rounded-full p-1 cursor-pointer">
                    <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-4"></div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0">
                  Connect Wallet
                </Button>
              </div>
            </>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className={`p-2 ${isScrolled ? "text-gray-700" : "text-white"} rounded-md hover:bg-gray-100/10`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-50 pt-20">
          <div className="flex flex-col items-center space-y-6 p-4">
            <Link to="/" className="text-white hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
            <Link to="/" className="text-white hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)}>Preventa dapp</Link>
            <Link to="/" className="text-white hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)}>Staking dapp</Link>
            <Link to="/" className="text-white hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)}>Tokenomics</Link>
            <Link to="/" className="text-white hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)}>Invest</Link>
            <div className="flex flex-col w-full space-y-4 mt-6">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Language</Button>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0" onClick={() => setIsMenuOpen(false)}>
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
