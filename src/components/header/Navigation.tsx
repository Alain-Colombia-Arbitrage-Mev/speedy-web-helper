
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

  const linkClass = `${isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]'} ${isMobile ? 'text-xl' : 'font-semibold'}`;

  return (
    <>
      <Link to="/" className={linkClass} onClick={onMobileItemClick}>
        {t('header.howItWorks')}
      </Link>
      <Link to="/" className={linkClass} onClick={onMobileItemClick}>
        {t('header.presaleDapp')}
      </Link>
      <Link to="/" className={linkClass} onClick={onMobileItemClick}>
        {isMobile ? t('header.stakingDapp') : t('header.tokenomics')}
      </Link>
      <Link to="/" className={linkClass} onClick={onMobileItemClick}>
        {isMobile ? t('header.tokenomics') : t('header.presale')}
      </Link>
      {isMobile && (
        <Link to="/" className={linkClass} onClick={onMobileItemClick}>
          {t('header.invest')}
        </Link>
      )}
    </>
  );
};

export default Navigation;
