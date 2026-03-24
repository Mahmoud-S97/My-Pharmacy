import React from 'react';
import { Redirect, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from '@/hooks/Auth/useAuth';
import Spinner from '@/components/ui/globals/Spinner';

export default function TabLayout() {

  const { isLoggedIn } = useAuth();

  // App-Redirecting second guard
  if (!isLoggedIn) return <Redirect href='/(auth)/login' />

  return (
    <Tabs
      initialRouteName='home'
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        headerShown: false
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <FontAwesome name='home' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => <FontAwesome name='globe' color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
