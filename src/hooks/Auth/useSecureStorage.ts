import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export const UseSecureStorage = () => {

  const saveDataToSecureStorage = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  }

  const getDataFromSecureStorage = async (key: string) => {
    const securedData = await SecureStore.getItemAsync(key);
    return securedData;
  }

  const deleteDataFromSecureStorage = async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  }

  return { saveDataSecurely: saveDataToSecureStorage, getDataSecurely: getDataFromSecureStorage, deleteDataSecurely: deleteDataFromSecureStorage };
}