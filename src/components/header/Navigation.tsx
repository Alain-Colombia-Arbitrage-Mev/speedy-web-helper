
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";

type NavigationProps = {
  isMobile?: boolean;
  onMobileItemClick?: () => void;
};

const Navigation = ({ isMobile = false, onMobileItemClick = () => {} }: NavigationProps) => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  const linkClass = `${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} ${
    isMobile ? 'text-xl py-3 block w-full text-center' : 'font-semibold'
  }`;

  return (
    <div className={isMobile ? "flex flex-col w-full space-y-4" : "flex items-center space-x-8"}>
      <Link to="/" className={linkClass} onClick={onMobileItemClick}>
        {t('header.howItWorks')}
      </Link>
      <Link to="/" className={linkClass} onClick={onMobileItemClick}>
        {t('header.presale')}
      </Link>
      <Link to="/projects" className={linkClass} onClick={onMobileItemClick}>
        {t('header.projects')}
      </Link>
      <Link to="/" className={linkClass} onClick={onMobileItemClick}>
        {t('header.tokenomics')}
      </Link>
      {isMobile && (
        <Link to="/" className={linkClass} onClick={onMobileItemClick}>
          {t('header.invest')}
        </Link>
      )}
    </div>
  );
};

export default Navigation;
