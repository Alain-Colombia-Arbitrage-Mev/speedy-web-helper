
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
        isScrolled ? "bg-white shadow-md" : "bg-white"
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
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] font-semibold">How it Works</Link>
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] font-semibold">Presale dapp</Link>
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] font-semibold">Tokenomics</Link>
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] font-semibold">Presale</Link>
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          {!isMobile && (
            <>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-200 text-[#FF56BB] rounded-full h-8 w-8 flex items-center justify-center">
                  <span>?</span>
                </div>
                <div className="bg-gray-200 text-[#FF56BB] rounded-full h-8 w-8 flex items-center justify-center">
                  <span>$</span>
                </div>
                <div className="flex items-center border border-gray-300 text-[#FF56BB] rounded-md px-3 py-1">
                  <span className="font-medium mr-1">English</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-6 bg-gray-300 rounded-full p-1 cursor-pointer">
                    <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-4"></div>
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
              className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20">
          <div className="flex flex-col items-center space-y-6 p-4">
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] text-xl" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] text-xl" onClick={() => setIsMenuOpen(false)}>Presale dapp</Link>
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] text-xl" onClick={() => setIsMenuOpen(false)}>Staking dapp</Link>
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] text-xl" onClick={() => setIsMenuOpen(false)}>Tokenomics</Link>
            <Link to="/" className="text-gray-700 hover:text-[#FF56BB] text-xl" onClick={() => setIsMenuOpen(false)}>Invest</Link>
            <div className="flex flex-col w-full space-y-4 mt-6">
              <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Language</Button>
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
