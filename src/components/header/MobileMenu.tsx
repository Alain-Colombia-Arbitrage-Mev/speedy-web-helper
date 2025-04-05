
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import ConnectWalletButton from "../wallet/ConnectWalletButton";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className={`md:hidden fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 pt-20 px-6`}>
      {/* Add logo and close button at the top of the mobile menu */}
      <div className="flex items-center justify-between w-full absolute top-6 left-0 right-0 px-6">
        <div className="flex-1"></div>
        <div className="flex justify-center flex-1">
          <img 
            src={isDarkMode 
              ? "/lovable-uploads/203367a9-10e9-4c1b-8a90-bac684e7c854.png" 
              : "/lovable-uploads/bc49257a-a778-4541-b61f-827711c6164a.png"} 
            alt="Perperzon Logo" 
            className="h-12" 
          />
        </div>
        <div className="flex justify-end flex-1">
          <button 
            onClick={onClose}
            className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-black hover:bg-gray-100'} rounded-full`}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 p-4">
        <Navigation isMobile={true} onMobileItemClick={onClose} />
        
        <div className="flex items-center space-x-4 mt-6">
          <ThemeToggle />
          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {isDarkMode ? t('header.darkMode') : t('header.lightMode')}
          </span>
        </div>
        
        <div className="flex flex-col w-full space-y-4 mt-6">
          {/* Language Dropdown */}
          <div className="flex justify-center">
            <LanguageSelector />
          </div>
          <div className="w-full">
            <ConnectWalletButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
