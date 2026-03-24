import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import MainButton from '@/components/ui/globals/buttons/MainButton';
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorageKeys';
import { useApp } from '@/hooks/App/useApp';

const IntroScreen = () => {

  const { setFirstTimeDone } = useApp();

  const navigationHandler = async (targetedScreen: string): Promise<void> => {
    await setFirstTimeDone();
    if (targetedScreen === 'login') {
      router.replace('/login');
    } else {
      router.replace('/sign-up');
    }
  }

  return (
    <View className='flex-1 bg-white'>
      <View className='flex-1 px-6 py-2 bg-white justify-center items-center'>
        <Text className='text-5xl font-bold mb-20 text-center'>Welcome Back!</Text>
        <View className='w-full h-[30%] flex flex-column gap-8 justify-center items-center'>
          <MainButton title='Login' onPress={() => navigationHandler('login')} />
          <MainButton title='Sign Up' onPress={() => navigationHandler('sign-up')} className='bg-white border' textClassName='text-gray-900' />
        </View>
      </View>
    </View>
  )
}

export default IntroScreen;