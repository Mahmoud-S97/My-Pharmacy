import { JSX } from 'react';
import { View, Text } from 'react-native';

type Props = {
  logoText?: string,
  screenName?: string
}

// Simple Header to show the screen's name
const MainHeader = ({ logoText, screenName }: Props): JSX.Element => {
  return (
    <View className='w-full flex flex-column gap-1 px-4 py-6 bg-purple-50 shadow'>
      <Text className='text-start text-3xl text-purple-500 font-bold'>{logoText}</Text>
      <Text className='text-start text-2xl text-black font-bold'>{screenName}</Text>
    </View>
  )
}

export default MainHeader;