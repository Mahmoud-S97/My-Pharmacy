import React, { ComponentProps } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { cn } from '@/src/lib/nativeWindCss/cs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type InputFieldProps = {
  icon?: ComponentProps<typeof MaterialIcons>['name'],
  iconSize?: number,
  iconColor?: string,
  isPasswordField?: boolean,
  className?: string,
  textInputClassName?: string,
  secureTextEntry?: boolean,
  placeholderTextColor?: string,
  placeholder?: string,
  editable?: boolean,
  maxLength?: number,
  multiline?: boolean,
  scrollEnabled?: boolean,
  value?: string,
  onChangeText?: (value: any) => void,
  toggleShowPassword?: () => void
}

const MainInputField = ({ icon, iconSize, iconColor, isPasswordField, className, textInputClassName, secureTextEntry, placeholder, placeholderTextColor, editable, maxLength, multiline, scrollEnabled, value, onChangeText, toggleShowPassword }: InputFieldProps) => {

  return (
    <View className={cn('w-full h-[50px] bg-gray-50 rounded-full flex-row items-center py-2 px-4 border', className)}>
      <MaterialIcons name={icon} size={iconSize ?? 24} color={iconColor || '#444'} />
      <TextInput
        className={cn('flex items-center w-[90%] h-full ms-3 font-medium text-lg text-gray-900 bg-gray-50 rounded-full', textInputClassName)}
        placeholderTextColor={placeholderTextColor || '#555'}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength ?? 50}
        multiline={multiline ?? false}
        scrollEnabled={scrollEnabled ?? true}
      />
      {isPasswordField && (
        <TouchableOpacity activeOpacity={0.7} className='flex justify-center items-center absolute start-[95%] z-10' onPress={toggleShowPassword}>
          <FontAwesome5 name={!secureTextEntry ? 'eye' : 'eye-slash'} size={iconSize ?? 20} color={iconColor || '#444'} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default MainInputField;