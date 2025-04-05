
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import ConnectWalletButton from "../wallet/ConnectWalletButton";

const HeaderControls = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-4">
        {/* Question mark action button was removed */}
        <ActionIcon label="$" />
        
        {/* Language Selector */}
        <LanguageSelector />
        
        {/* Dark Mode Toggle */}
        <ThemeToggle />
        
        {/* Connect Wallet Button */}
        <ConnectWalletButton />
      </div>
    </div>
  );
};

// Small helper component for the action icons
const ActionIcon = ({ label }: { label: string }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`${isDarkMode ? 'bg-gray-700 text-[#FF56BB]' : 'bg-gray-200 text-[#FF56BB]'} rounded-full h-8 w-8 flex items-center justify-center`}>
      <span>{label}</span>
    </div>
  );
};

export default HeaderControls;
