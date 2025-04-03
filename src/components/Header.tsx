
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-blue-500 mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-900">Dracma</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Real Estate</Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Lithium Mining</Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">E-commerce</Link>
              </div>
            </div>
            <Link to="/" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600">Company</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600">Team</Link>
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          {!isMobile && (
            <>
              <Button variant="ghost" className="text-gray-700">Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
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
            <Link to="/" className="text-gray-800 hover:text-blue-600 text-xl" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/" className="text-gray-800 hover:text-blue-600 text-xl" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/" className="text-gray-800 hover:text-blue-600 text-xl" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/" className="text-gray-800 hover:text-blue-600 text-xl" onClick={() => setIsMenuOpen(false)}>Company</Link>
            <Link to="/" className="text-gray-800 hover:text-blue-600 text-xl" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <div className="flex flex-col w-full space-y-4 mt-6">
              <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>Sign In</Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
