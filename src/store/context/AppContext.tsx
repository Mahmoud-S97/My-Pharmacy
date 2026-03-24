import React, { useState, useEffect, createContext, useContext } from 'react';
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorageKeys';
import { useSecureStorage } from '@/hooks/Auth/useSecureStorage';
import { useLocalStorage } from '@/hooks/Storage/useLocalStorage';

export type AppContextType = {
  isFirstTime: boolean | null,
  setFirstTimeDone: () => Promise<void>
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

  const { getItem, setItem } = useLocalStorage();

  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);

  useEffect(() => {
    // Loading some user data when app starts
    const loadData = async () => {
      const onboarding = await getItem<boolean>(LOCAL_STORAGE_KEYS.IS_FIRST_TIME);
      setIsFirstTime(onboarding ?? true);
    }

    loadData();
  }, []);

  const setFirstTimeDone = async (): Promise<void> => {
    await setItem(LOCAL_STORAGE_KEYS.IS_FIRST_TIME, false);
    setIsFirstTime(false);
  }

  return <AppContext.Provider value={{ isFirstTime, setFirstTimeDone }}>{children}</AppContext.Provider>;
};