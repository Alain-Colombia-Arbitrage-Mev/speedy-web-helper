
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/contexts/ThemeContext";
import Navigation from "./header/Navigation";
import HeaderControls from "./header/HeaderControls";
import MobileMenu from "./header/MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { isDarkMode } = useTheme();

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
            <Navigation />
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          {!isMobile && <HeaderControls />}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'} rounded-md`}
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobile && isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
