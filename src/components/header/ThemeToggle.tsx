
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { t } = useTranslation();

  return (
    <motion.div 
      className="flex items-center space-x-2" 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
        className={`${
          isDarkMode 
            ? 'bg-blue-600 border-blue-400' 
            : 'bg-amber-400 border-amber-300'
        }`}
      />
      <div className="flex items-center space-x-1">
        {isDarkMode ? (
          <Moon className="h-4 w-4 text-blue-300" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
        <span className="text-xs hidden md:inline-block text-gray-400">
          {isDarkMode ? t('header.darkMode') : t('header.lightMode')}
        </span>
      </div>
    </motion.div>
  );
};

export default ThemeToggle;
