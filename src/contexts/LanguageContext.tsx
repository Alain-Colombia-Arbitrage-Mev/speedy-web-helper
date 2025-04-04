
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(localStorage.getItem('i18nextLng') || 'en');

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  useEffect(() => {
    // Initialize with stored language preference
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      setLanguageState(storedLang);
    }
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
