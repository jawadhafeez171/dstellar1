"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '@/lib/translations';

export type Language = 'en' | 'es' | 'zh' | 'de' | 'fr' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  tData: <T>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('dstellar-lang') as Language;
    if (saved && ['en', 'es', 'zh', 'de', 'fr', 'ja'].includes(saved)) {
      setLanguageState(saved);
      document.documentElement.setAttribute('lang', saved);
    } else {
      document.documentElement.setAttribute('lang', 'en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('dstellar-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  };

  // Helper to translate UI static text
  const t = (key: string): any => {
    const dict = TRANSLATIONS[language];
    const defaultDict = TRANSLATIONS['en'];
    return (dict as any)[key] !== undefined ? (dict as any)[key] : (defaultDict as any)[key];
  };

  // Helper to translate structured dynamic data
  const tData = <T,>(key: string): T => {
    const dict = TRANSLATIONS[language];
    const defaultDict = TRANSLATIONS['en'];
    return ((dict as any)[key] !== undefined ? (dict as any)[key] : (defaultDict as any)[key]) as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
