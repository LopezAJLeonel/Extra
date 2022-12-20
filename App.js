import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTab } from './src/BottomTab'
import { DrawerNavigation } from './src/DrawerNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab/>
      <DrawerNavigation/>
    </NavigationContainer>
  )
}

export default App
