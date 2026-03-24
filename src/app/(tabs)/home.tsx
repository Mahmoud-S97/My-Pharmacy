import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import MainHeader from '@/components/layout/navigation/header/MainHeader';
import { useProfile } from '@/hooks/App/useProfile';
import Spinner from '@/components/ui/globals/Spinner';


const HomeScreen = () => {

  const { getUserProfileHandler, userData, isLoading, error } = useProfile();

  useEffect(() => {
    (async () => await getUserProfileHandler())();
  }, []);

  if (isLoading) return <Spinner />

  return (
    <View className='flex-1 bg-white'>
      <MainHeader logoText='My Pharmacy' screenName='Home' />
      <View className='flex-1 py-40 justify-center items-center'>
        {error ? (
          <Text className=' w-[90%] text-center text-red-500 text-xl font-bold'>{error}</Text>
        ) : (
          <Text className='text-3xl text-center font-bold'>Welcome <Text className='text-purple-500'>{`${userData?.firstName} ${userData?.lastName}`}</Text></Text>
        )}
      </View>
    </View>
  )
}

export default HomeScreen;