import { JSX } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Spinner = (): JSX.Element => {
  return (
    <View className='w-full h-full flex justify-center items-center absolute z-[999] bg-gray-500/50'>
      <View className='w-36 h-36 flex flex-column gap-4 justify-center items-center bg-gray-800/50 rounded-lg'>
        <ActivityIndicator color={'purple'} size='large' />
        <Text className='text-center text-gray-100 font-bold italic'>Loading...</Text>
      </View>
    </View>
  )
}

export default Spinner;