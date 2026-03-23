import React from 'react';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

// import { HapticTab } from '@/components/haptic-tab';
// import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Colors } from '../../constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
    initialRouteName='home'
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        headerShown: false,
        // tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <View />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <View />,
        }}
      />
    </Tabs>
  );
}
