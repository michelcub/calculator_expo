import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <ThemeText variant='h1'>50 x 50</ThemeText>
        <ThemeText variant='h2'>250</ThemeText>
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.row}>
        <CalculatorButton 
        label='C' 
        onPress={()=> console.log('press')}
        blackText={true}
        color={Colors.lightGray}
        />
        <CalculatorButton 
        label='+/-' 
        onPress={()=> console.log('press')}
        blackText={true}
        color={Colors.lightGray}
        />
        <CalculatorButton 
        label='del' 
        onPress={()=> console.log('press')}
        blackText={true}
        color={Colors.lightGray}
        />
        <CalculatorButton 
        label='/' 
        onPress={()=> console.log('press')}
        color={Colors.orange}
        />
      </View>
    </View>
  )
}

export default CalculatorApp