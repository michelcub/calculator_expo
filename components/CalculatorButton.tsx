import { View, Text, Pressable } from 'react-native'
import React from 'react'
import * as Haptics from 'expo-haptics';

import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';

interface Props{
    label: string;
    color?: string;
    blackText?: boolean,
    dobleSize?: boolean;
    onPress: ()=> void;
}

const CalculatorButton = ({label, color=Colors.darkGray, blackText=false, dobleSize=false, onPress}: Props) => {
  return (
    <Pressable 
    style={({pressed})=>({
      ...globalStyles.button, 
      backgroundColor: color, 
      opacity: pressed? 0.8 : 1,
      width: dobleSize? 180 : 80
    })}
    onPress={()=>{
      // para dar feedback cuando se pulsa crea una pequena vibracion
      Haptics.selectionAsync()
      onPress()

    }}
    
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