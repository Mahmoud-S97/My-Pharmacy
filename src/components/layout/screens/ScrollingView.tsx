import React, { JSX } from 'react';
import { ScrollView } from 'react-native';
import { ScrollingViewProps } from './types';
import { cn } from '@/lib/nativeWindCss/cn';

const ScrollingView = ({ children, className, horizontal = false, showsHorizontalScrollIndicator = false, showsVerticalScrollIndicator = false }: ScrollingViewProps): JSX.Element => {

  return (
    <ScrollView className={cn('flex-1 grow-1 bg-white', className)} contentContainerClassName='grow' horizontal={horizontal} showsHorizontalScrollIndicator={showsHorizontalScrollIndicator} showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
      {children}
    </ScrollView>
  )
}

export default ScrollingView;