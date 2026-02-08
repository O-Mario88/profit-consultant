
import React, { createContext, useContext, useState, useEffect } from 'react';
import { LocaleProfile, RegionCode, LanguageCode, CurrencyCode } from '../types';
import { detectRegionProfile, getTranslation, calculatePPPPrice, formatCurrency } from '../services/localization';

interface LocalizationContextType {
  locale: LocaleProfile;
  setRegion: (region: RegionCode) => void;
  setLanguage: (lang: LanguageCode) => void;
  setCurrency: (curr: CurrencyCode) => void;
  t: (key: string) => string;
  price: (amountUSD: number) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to US/Global initially
  const [locale, setLocale] = useState<LocaleProfile>(detectRegionProfile('US'));

  // Allow manual override simulation
  const setRegion = (region: RegionCode) => {
    const newProfile = detectRegionProfile(region);
    setLocale(newProfile);
  };

  const setLanguage = (lang: LanguageCode) => {
    setLocale(prev => ({ ...prev, language: lang }));
  };

  const setCurrency = (curr: CurrencyCode) => {
    setLocale(prev => ({ ...prev, currency: curr }));
  };

  // Helper Wrappers
  const t = (key: string) => getTranslation(locale.language, key);
  
  const price = (amountUSD: number) => {
    // Automatically apply PPP discount based on current tier
    return calculatePPPPrice(amountUSD, locale.pricingTier, locale.currency);
  };

  return (
    <LocalizationContext.Provider value={{ locale, setRegion, setLanguage, setCurrency, t, price }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
