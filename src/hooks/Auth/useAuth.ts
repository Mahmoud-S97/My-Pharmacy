import React, { useContext } from 'react';
import { AuthContext } from '@/store/context/AuthContext';
import { AuthContextType } from '@/store/context/AuthContext';

// Auth Context - Hook
export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('Error => useAuth must be used within the AuthProvider!');
  }
  return authContext;
};