import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import { router } from 'expo-router';
import MainButton from '@/components/ui/globals/buttons/MainButton';
import MainInputField from '@/components/ui/globals/inputFields/MainInputField';
import ScrollingView from '@/components/layout/screens/ScrollingView';
import ContainerView from '@/components/layout/screens/ContainerView';

const SginUpScreen = () => {

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const setUserNameHandler = (value: string): void => setUserName(value);
  const setPasswordHandler = (value: string): void => setPassword(value)
  const setConfirmPasswordHandler = (value: string): void => setConfirmPassword(value);

  const toggleShowPassword = () => {
    setShowPassword(prevValue => !prevValue);
  }

  const signUpHandler = (): void => {
    // Sign Up
  }

  return (
    <KeyboardAvoidingView className='flex-1' behavior='padding'>
      <ScrollingView>
        <ContainerView>
          <Text className='text-5xl font-bold mb-20 text-center'>Sign Up!</Text>
          <View className='w-full h-auto flex flex-column gap-8 justify-center items-center'>
            <MainInputField placeholder='Username' icon='account-circle' value={userName} onChangeText={setUserNameHandler} />
            <MainInputField placeholder='Password' icon='lock' secureTextEntry={!showPassword} isPasswordField={true} value={password} onChangeText={setPasswordHandler} toggleShowPassword={toggleShowPassword} />
            <MainInputField placeholder='Confirm Password' icon='lock' secureTextEntry={!showPassword} isPasswordField={true} value={confirmPassword} onChangeText={setConfirmPasswordHandler} toggleShowPassword={toggleShowPassword} />
            <MainButton title='Sign Up' onPress={signUpHandler} />
            <TouchableOpacity activeOpacity={0.7} className='flex-row items-center justify-center' onPress={() => router.navigate('/login')}>
              <Text className='text-lg me-2 text-gray-500'>Have an account?</Text>
              <Text className='text-xl text-gray-800 font-[600]'>Login</Text>
            </TouchableOpacity>
          </View>
        </ContainerView>
      </ScrollingView>
    </KeyboardAvoidingView>
  )
}

export default SginUpScreen;