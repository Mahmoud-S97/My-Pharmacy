import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Local Storage - Hook
export const useLocalStorage = () => {

  const setItem = async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  const getItem = async <T>(key: string): Promise<T | null> => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  const removeItem = async (key: string) => {
    await AsyncStorage.removeItem(key);
  }

  return { setItem, getItem, removeItem };
}