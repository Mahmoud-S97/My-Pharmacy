import React from 'react';
import { View, Text } from 'react-native';
import MainHeader from '@/components/layout/navigation/header/MainHeader';


const ExploreScreen = () => {
  return (
    <View className='flex-1 bg-white'>
      <MainHeader logoText='My Pharmacy' screenName='Explore' />
      <View className='flex-1 py-40 justify-center items-center'>
        <Text className='text-3xl text-center font-bold'>Welcome <Text className='text-purple-500'>User!</Text></Text>
      </View>
    </View>
  )
}

export default ExploreScreen;