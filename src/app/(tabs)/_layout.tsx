import React from 'react';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {

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
