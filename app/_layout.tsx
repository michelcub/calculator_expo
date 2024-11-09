import { Platform, View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import {useFonts} from 'expo-font'
import { globalStyles } from '@/styles/global-styles'

import * as NavigationBar from 'expo-navigation-bar'

const isAndroid = Platform.OS === 'android'
// esto es para darle color a la barra de navegacin cuando el bg no es blanco
isAndroid? NavigationBar.setBackgroundColorAsync('black'): null

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  
  if(!loaded){
    return null
  }
  

  return (
    <View style={globalStyles.background}>
      <Slot/>
    </View>
  )
}

export default RootLayout