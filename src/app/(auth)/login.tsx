import React, { JSX, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import { router } from 'expo-router';
import MainButton from '@/components/ui/globals/buttons/MainButton';
import MainInputField from '@/components/ui/globals/inputFields/MainInputField';
import { useAuth } from '@/hooks/Auth/useAuth';
import { ENV } from '../../../config/env';
import { API_ENDPOINTS } from '@/constants/api/apiEndPoints';

const LoginScreen = (): JSX.Element => {

  const { login } = useAuth();

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setUserNameHandler = (value: string): void => setUserName(value);
  const setPasswordHandler = (value: string): void => setPassword(value)

  const toggleShowPassword = () => {
    setShowPassword(prevValue => !prevValue);
  }

  const loginHandler = async (): Promise<void> => {
    // Login
  }

  return (
    <KeyboardAvoidingView className='flex-1' behavior='padding'>
      <ScrollView className='flex-1' contentContainerClassName='grow'>
        <View className='flex-1 bg-white'>
          <View className='flex-1 px-6 py-2 bg-white justify-center items-center'>
            <Text className='text-5xl font-bold mb-20 text-center'>Login!</Text>
            <View className='w-full h-auto flex flex-column gap-8 justify-center items-center'>
              <MainInputField placeholder='Username' icon='account-circle' value={userName} onChangeText={setUserNameHandler} />
              <MainInputField placeholder='Password' icon='lock' secureTextEntry={!showPassword} isPasswordField={true} value={password} onChangeText={setPasswordHandler} toggleShowPassword={toggleShowPassword} />
              <MainButton title='Login' onPress={loginHandler} />
              <TouchableOpacity activeOpacity={0.7} className='flex-row items-center justify-center' onPress={() => router.navigate('/sign-up')}>
                <Text className='text-lg me-2 text-gray-500'>Don't have an account?</Text>
                <Text className='text-xl text-gray-800 font-[600]'>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;