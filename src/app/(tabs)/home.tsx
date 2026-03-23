import React from 'react';
import { View, Text } from 'react-native';


const HomeScreen = () => {
  return (
    <View className='flex-1 bg-white'>
      <View className='w-full flex flex-column gap-1 px-4 py-6 bg-purple-50 shadow'>
        <Text className='text-start text-3xl text-purple-500 font-bold'>My Pharmacy</Text>
        <Text className='text-start text-2xl text-black font-bold'>Home</Text>
      </View>
      <View className='flex-1 py-40 justify-center items-center'>
        <Text className='text-3xl text-center font-bold'>Welcome <Text className='text-purple-500'>User!</Text></Text>
      </View>
    </View>
  )
}

export default HomeScreen;