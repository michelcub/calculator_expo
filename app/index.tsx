import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {

  const {
    formula,
    number,
    prevNumber,
    buildNumber,
    resetCalculator,
    toggleSign,
    delLast,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    result
  } = useCalculator()


  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <ThemeText variant='h1' numberOfLines={1} adjustsFontSizeToFit>{formula}</ThemeText>

        {
          formula === prevNumber? (
            <ThemeText variant='h2'> </ThemeText>
          ): (
            <ThemeText variant='h2'>{prevNumber}</ThemeText>
          )
        }
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.row}>
        <CalculatorButton 
        label='C' 
        onPress={()=> resetCalculator()}
        blackText={true}
        color={Colors.lightGray}
        />
        <CalculatorButton 
        label='+/-' 
        onPress={()=> toggleSign()}
        blackText={true}
        color={Colors.lightGray}
        />
        <CalculatorButton 
        label='del' 
        onPress={()=> delLast()}
        blackText={true}
        color={Colors.lightGray}
        />
        <CalculatorButton 
        label='/' 
        onPress={()=> divideOperation()}
        color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton 
        label='7' 
        onPress={()=>buildNumber('7')}
        />
        <CalculatorButton 
        label='8' 
        onPress={()=>buildNumber('8')}
        />
        <CalculatorButton 
        label='9' 
        onPress={()=>buildNumber('9')}
        />
        <CalculatorButton 
        label='x' 
        onPress={()=> multiplyOperation()}
        color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton 
        label='4' 
        onPress={()=>buildNumber('4')}
        />
        <CalculatorButton 
        label='5' 
        onPress={()=>buildNumber('5')}
        />
        <CalculatorButton 
        label='6' 
        onPress={()=>buildNumber('6')}
        />
        <CalculatorButton 
        label='-' 
        onPress={()=> substractOperation()}
        color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton 
        label='1' 
        onPress={()=> buildNumber('1')}
        />
        <CalculatorButton 
        label='2' 
        onPress={()=> buildNumber('2')}
        />
        <CalculatorButton 
        label='3' 
        onPress={()=> buildNumber('3')}
        />
        <CalculatorButton 
        label='+' 
        onPress={()=> addOperation()}
        color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton 
        label='0' 
        dobleSize={true}
        onPress={()=>buildNumber('0')}
        />
        <CalculatorButton 
        label='.' 
        onPress={()=>buildNumber('.')}
        />
        <CalculatorButton 
        label='=' 
        onPress={()=> result()}
        color={Colors.orange}
        />
      </View>
    </View>
  )
}

export default CalculatorApp