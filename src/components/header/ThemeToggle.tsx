
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { t } = useTranslation();

  return (
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
  );
};

export default ThemeToggle;
