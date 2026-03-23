import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import MainButton from '@/src/components/ui/globals/buttons/MainButton';

const IntroScreen = () => {

    return (
        <View className='flex-1 bg-white'>
            <View className='flex-1 px-6 py-2 bg-white justify-center items-center'>
              <Text className='text-5xl font-bold mb-20 text-center'>Welcome Back!</Text>
              <View className='w-full h-[30%] flex flex-column gap-8 justify-center items-center'>
                <MainButton title='Login' onPress={() => router.replace('/login')} />
                <MainButton title='Sign Up' onPress={() => router.replace('/sign-up')} className='bg-white border' textClassName='text-gray-900' />
              </View>
            </View>
        </View>
    )
}

export default IntroScreen;