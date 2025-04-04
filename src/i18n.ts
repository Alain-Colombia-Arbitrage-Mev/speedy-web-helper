
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  header: {
    howItWorks: 'How it Works',
    presaleDapp: 'Presale dapp',
    stakingDapp: 'Staking dapp',
    tokenomics: 'Tokenomics',
    presale: 'Presale',
    invest: 'Invest',
    language: 'Language',
    english: 'English',
    spanish: 'Spanish',
    connectWallet: 'Connect Wallet',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
  }
};

// Spanish translations
const esTranslations = {
  header: {
    howItWorks: 'Cómo Funciona',
    presaleDapp: 'Dapp de preventa',
    stakingDapp: 'Dapp de staking',
    tokenomics: 'Tokenómica',
    presale: 'Preventa',
    invest: 'Invertir',
    language: 'Idioma',
    english: 'Inglés',
    spanish: 'Español',
    connectWallet: 'Conectar Billetera',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
