import React, { JSX } from 'react';
import { View } from 'react-native';
import { ViewProps } from './types';
import { cn } from '@/lib/nativeWindCss/cn';

const ScreenView = ({ children, className }: ViewProps): JSX.Element => {

  return (
    <View className={cn('flex-1 bg-white', className)}>
      {children}
    </View>
  )
}

export default ScreenView;