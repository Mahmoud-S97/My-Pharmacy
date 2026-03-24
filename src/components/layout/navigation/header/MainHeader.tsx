import { useAuth } from '@/hooks/Auth/useAuth';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { JSX } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Props = {
  logoText?: string,
  screenName?: string
}

// Simple Header to show the screen's name
const MainHeader = ({ logoText, screenName }: Props): JSX.Element => {

  const { logout } = useAuth();

  return (
    <View className='w-full flex flex-row items-center justify-between px-4 py-6 bg-purple-50 shadow'>
      <View className='flex flex-column gap-2'>
        <Text className='text-start text-3xl text-purple-500 font-bold'>{logoText}</Text>
        <Text className='text-start text-2xl text-black font-bold'>{screenName}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} className='w-12 h-12 flex justify-center items-center' onPress={logout}>
        <FontAwesome name='power-off' size={24} color={'#444'} />
      </TouchableOpacity>
    </View>
  )
}

export default MainHeader;