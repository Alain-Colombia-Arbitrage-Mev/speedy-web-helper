
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
    isMobile ? 'text-base py-2 block w-full text-center' : 'font-semibold'
  } transition-colors duration-200`;

  return (
    <div className={isMobile ? "flex flex-col w-full space-y-2" : "flex items-center space-x-6"}>
      <Link to="/" className={linkClass} onClick={onMobileItemClick}>
        {t('header.howItWorks')}
      </Link>
      <a 
        href="https://preventa-dracma.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={linkClass} 
        onClick={onMobileItemClick}
      >
        {t('header.presale')}
      </a>
      <Link to="/projects" className={linkClass} onClick={onMobileItemClick}>
        {t('header.projects')}
      </Link>
      <Link to="/submit-project" className={linkClass} onClick={onMobileItemClick}>
        Enviar Proyecto
      </Link>
      <Link to="/tokenomics" className={linkClass} onClick={onMobileItemClick}>
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
