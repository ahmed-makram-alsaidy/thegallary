import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, TranslationKey, Language } from '../constants/translations';

interface RTLContextType {
  isRTL: boolean;
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const RTLContext = createContext<RTLContextType | undefined>(undefined);

interface RTLProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export function RTLProvider({ children, defaultLanguage = 'en' }: RTLProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const isRTL = language === 'ar';

  // Apply RTL styles to document
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add/remove RTL class for additional styling
    if (isRTL) {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [isRTL, language]);

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const value: RTLContextType = {
    isRTL,
    language,
    toggleLanguage,
    setLanguage,
    t
  };

  return (
    <RTLContext.Provider value={value}>
      {children}
    </RTLContext.Provider>
  );
}

export function useRTL() {
  const context = useContext(RTLContext);
  if (context === undefined) {
    throw new Error('useRTL must be used within an RTLProvider');
  }
  return context;
}

// Optional: Hook for just translation without RTL logic
export function useTranslation() {
  const { t, language } = useRTL();
  return { t, language };
}