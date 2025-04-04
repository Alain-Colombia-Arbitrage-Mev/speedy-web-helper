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
  },
  hero: {
    subtitle: 'Web3 platform for democratized investments',
    title: 'Unlock the unique digital property of your investments',
    description: 'Experience the revolutionary world of fractional real estate',
    presaleButton: 'Pre-sale Now - 50%',
    litepaperButton: 'Litepaper DRACMA',
  },
  stats: {
    backedProjects: 'Backed Projects',
    customers: 'Satisfied Customers',
    countries: 'Countries',
  },
  realEstate: {
    title: '500MM+ Backed Projects',
    subtitle: 'Web3 for Real Estate Using AI',
    finder: 'Intelligent Houses Finder® using:',
    tech1: 'Artificial Intelligence',
    tech2: 'Blockchain Technology',
    tech3: 'Smart Contracts',
    exploreButton: 'Explore Properties',
    fractionalTitle: 'Fractional Ownership',
    fractionalDesc1: 'Enables investors to acquire fractional square meters in high-quality properties,',
    fractionalDesc2: 'Making real estate investment accessible to a broader audience.',
    learnMoreButton: 'Learn More',
    lithiumMiningTitle: 'Chilean Lithium Mining',
    atacamaMining: 'Mining in Salar de Atacama',
    uyuniMining: 'Salar de Uyuni',
    miningTitle: 'Mining Title of 500 Hectares',
    miningPermits: 'Active lithium exploration and exploitation permits in operation',
    mineValue: 'Mine Value: $700,000,000 USD',
    exploreMiningButton: 'Explore Mining Investments',
  },
  fire: {
    hotOffer: 'Hot offer',
    title: 'Get exclusive access to our presale',
    description: 'Join our community and be part of the next generation of real estate investment. Limited slots available for early investors.',
    joinButton: 'Join Presale Now',
    totalRaised: 'Total Raised',
    presalePrice: 'Presale Price',
    launchPrice: 'Launch Price',
    roiPotential: 'ROI Potential',
    presaleProgress: 'Presale Progress',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
  },
  footer: {
    tagline: 'Democratizing real estate investments through blockchain technology',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    tokenomics: 'Tokenomics',
    roadmap: 'Roadmap',
    resources: 'Resources',
    whitepaper: 'Whitepaper',
    faq: 'FAQ',
    documentation: 'Documentation',
    developers: 'Developers',
    contact: 'Contact',
    address: '123 Blockchain Street, Crypto City, 10101',
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookies: 'Cookies',
  },
  notFound: {
    title: '404',
    description: 'Oops! Page not found',
    returnHome: 'Return to Home',
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
  },
  hero: {
    subtitle: 'Plataforma Web3 para inversiones democratizadas',
    title: 'Desbloquea la propiedad digital única de tus inversiones',
    description: 'Experimenta el mundo revolucionario de bienes raíces fraccionados',
    presaleButton: 'Preventa Ahora - 50%',
    litepaperButton: 'Documento DRACMA',
  },
  stats: {
    backedProjects: 'Proyectos Respaldados',
    customers: 'Clientes Satisfechos',
    countries: 'Países',
  },
  realEstate: {
    title: '500MM+ Proyectos Respaldados',
    subtitle: 'Web3 para Bienes Raíces con IA',
    finder: 'Buscador Inteligente de Casas® utilizando:',
    tech1: 'Inteligencia Artificial',
    tech2: 'Tecnología Blockchain',
    tech3: 'Contratos Inteligentes',
    exploreButton: 'Explorar Propiedades',
    fractionalTitle: 'Propiedad Fraccionada',
    fractionalDesc1: 'Permite a los inversores adquirir metros cuadrados fraccionados en propiedades de alta calidad,',
    fractionalDesc2: 'Haciendo que la inversión inmobiliaria sea accesible para un público más amplio.',
    learnMoreButton: 'Saber Más',
    lithiumMiningTitle: 'Minería de Litio Chileno',
    atacamaMining: 'Minería en Salar de Atacama', 
    uyuniMining: 'Salar de Uyuni',
    miningTitle: 'Título Minero de 500 Hectáreas',
    miningPermits: 'Permisos activos de exploración y explotación de litio en operación',
    mineValue: 'Valor de la Mina: $700,000,000 USD',
    exploreMiningButton: 'Explorar Inversiones Mineras',
  },
  fire: {
    hotOffer: 'Oferta Especial',
    title: 'Obtén acceso exclusivo a nuestra preventa',
    description: 'Únete a nuestra comunidad y sé parte de la próxima generación de inversión inmobiliaria. Cupos limitados para inversores iniciales.',
    joinButton: 'Unirse a la Preventa',
    totalRaised: 'Total Recaudado',
    presalePrice: 'Precio de Preventa',
    launchPrice: 'Precio de Lanzamiento',
    roiPotential: 'Potencial de ROI',
    presaleProgress: 'Progreso de Preventa',
    days: 'Días',
    hours: 'Horas',
    minutes: 'Minutos',
  },
  footer: {
    tagline: 'Democratizando las inversiones inmobiliarias mediante la tecnología blockchain',
    quickLinks: 'Enlaces Rápidos',
    home: 'Inicio',
    about: 'Nosotros',
    tokenomics: 'Tokenómica',
    roadmap: 'Hoja de Ruta',
    resources: 'Recursos',
    whitepaper: 'Papel Blanco',
    faq: 'Preguntas Frecuentes',
    documentation: 'Documentación',
    developers: 'Desarrolladores',
    contact: 'Contacto',
    address: 'Calle Blockchain 123, Ciudad Crypto, 10101',
    allRightsReserved: 'Todos los Derechos Reservados',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    cookies: 'Cookies',
  },
  notFound: {
    title: '404',
    description: '¡Ups! Página no encontrada',
    returnHome: 'Volver al Inicio',
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
    lng: 'en', // Set default language to English
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
