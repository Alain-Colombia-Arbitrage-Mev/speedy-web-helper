
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  // Set default language to English 'en'
  const [language, setLanguageState] = useState('en');

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  useEffect(() => {
    // Initialize with stored language preference or default to English
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      setLanguageState(storedLang);
    } else {
      // If no language is stored, set English as default
      i18n.changeLanguage('en');
      localStorage.setItem('i18nextLng', 'en');
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
