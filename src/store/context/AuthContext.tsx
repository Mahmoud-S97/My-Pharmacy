import React, { useState, useEffect, createContext, useContext } from 'react';
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorageKeys';
import { UseSecureStorage } from '@/hooks/Auth/useSecureStorage';

export type AuthContextType = {
  authToken: string | null,
  isLoggedIn: boolean,
  isLoading: boolean,
  login: (token: string) => Promise<void>,
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const { saveDataSecurely, getDataSecurely, deleteDataSecurely } = UseSecureStorage();

  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Loading the Auth-Token when app starts
    const loadTokenHandler = async () => {
      const authToken = await getDataSecurely(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
      if (authToken) {
        setAuthToken(authToken);
        setIsLoggedIn(!!authToken);
      }
      setIsLoading(false);
    }

    loadTokenHandler();
  }, []);

  const login = async (token: string): Promise<void> => {
    await saveDataSecurely(LOCAL_STORAGE_KEYS.AUTH_TOKEN, token);
    setAuthToken(token);
    setIsLoggedIn(!!token);
  };

  const logout = async (): Promise<void> => {
    await deleteDataSecurely(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    setAuthToken(null);
    setIsLoggedIn(false);
  };

  const value: AuthContextType = {
    authToken,
    isLoggedIn,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};