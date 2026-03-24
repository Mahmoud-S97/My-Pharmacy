import React, { ReactNode } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { cn } from '@/lib/nativeWindCss/cn';

type MainButtonProps = {
  children?: ReactNode,
  title?: string,
  className?: string,
  textClassName?: string,
  disabled?: boolean,
  loading?: boolean,
  onPress?: () => void
}

const MainButton = ({ children, title, className, textClassName, disabled, loading, onPress }: MainButtonProps) => {

  const combinedClasses = disabled ? (className + ' bg-gray-400') : className;
  const combinedTextClasses = disabled ? (textClassName + ' text-gray-200') : textClassName;

  return (
    <TouchableOpacity activeOpacity={0.7} disabled={disabled} onPress={onPress} className={cn('w-full h-[60] items-center justify-center bg-black rounded-full shadow', combinedClasses)}>
      {children}
      {!loading && title && <Text className={cn('text-lg text-center font-bold text-gray-50', combinedTextClasses)}>{title}</Text>}
      {loading && <ActivityIndicator size='small' color={'white'} />}
    </TouchableOpacity>
  )
}

export default MainButton;