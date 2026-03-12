'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { detectCurrencyFromBrowser } from '@/lib/currency';
import { CurrencyCode, DEFAULT_CURRENCY, isSupportedCurrency } from '@/lib/pricing';

const STORAGE_KEY = 'zaza:selected-currency';

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  hasHydrated: boolean;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>(DEFAULT_CURRENCY);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedCurrency = window.localStorage.getItem(STORAGE_KEY);

    if (storedCurrency && isSupportedCurrency(storedCurrency)) {
      setCurrency(storedCurrency);
    } else {
      setCurrency(detectCurrencyFromBrowser(window.navigator.languages));
    }

    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated || typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, currency);
  }, [currency, hasHydrated]);

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      hasHydrated,
    }),
    [currency, hasHydrated],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }

  return context;
}

