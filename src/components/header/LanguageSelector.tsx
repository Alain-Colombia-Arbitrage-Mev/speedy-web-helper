
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  return (
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
  );
};

export default LanguageSelector;
