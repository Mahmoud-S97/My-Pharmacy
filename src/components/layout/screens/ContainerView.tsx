import React, { JSX } from 'react';
import { View } from 'react-native';
import { ViewProps } from './types';
import { cn } from '@/lib/nativeWindCss/cn';

const ContainerView = ({ children, className }: ViewProps): JSX.Element => {

  return (
    <View className={cn('flex-1 px-6 py-2 bg-white justify-center items-center', className)}>
      {children}
    </View>
  )
}

export default ContainerView;