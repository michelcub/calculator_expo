import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';

interface Props{
    label: string;
    color?: string;
    blackText?: boolean,
    onPress: ()=> void;
}

const CalculatorButton = ({label, color=Colors.darkGray, blackText=false, onPress}: Props) => {
  return (
    <Pressable 
    style={{...globalStyles.button, backgroundColor: color}}
    onPress={onPress}
    >
        <Text 
        style={{
          ...globalStyles.buttonText,
          color: blackText? 'black': 'white',
          }}>
            {label}</Text>
    </Pressable>
  )
}

export default CalculatorButton