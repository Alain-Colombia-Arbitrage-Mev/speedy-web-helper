
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import { Sheet, SheetContent } from "@/components/ui/sheet";
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

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className={`w-full max-w-[280px] pt-16 px-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} z-50`}
      >
        {/* Logo and close button */}
        <div className="flex items-center justify-between w-full absolute top-4 left-0 right-0 px-4">
          <div className="flex justify-center flex-1">
            <img 
              src={isDarkMode 
                ? "/lovable-uploads/203367a9-10e9-4c1b-8a90-bac684e7c854.png" 
                : "/lovable-uploads/bc49257a-a778-4541-b61f-827711c6164a.png"} 
              alt="Perperzon Logo" 
              className="h-8" 
            />
          </div>
          <div className="flex justify-end flex-1">
            <button 
              onClick={onClose}
              className={`p-1.5 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-black hover:bg-gray-100'} rounded-full`}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-col items-center space-y-4 mt-4">
          <div className="flex flex-col items-center w-full space-y-4">
            <Navigation isMobile={true} onMobileItemClick={onClose} />
          </div>
          
          <div className="flex items-center space-x-3 mt-4">
            <ThemeToggle />
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {isDarkMode ? t('header.darkMode') : t('header.lightMode')}
            </span>
          </div>
          
          <div className="flex flex-col w-full space-y-3 mt-4">
            {/* Language Dropdown */}
            <div className="flex justify-center">
              <LanguageSelector />
            </div>
            <div className="w-full">
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
