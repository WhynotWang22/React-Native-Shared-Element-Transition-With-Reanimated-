import { StatusBar, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navitation/RootNavigator'

const App = () => {
  return (
   <NavigationContainer>
    
          <StatusBar barStyle="light-content" backgroundColor="black" />
   <RootNavigator/> 
   </NavigationContainer>
  )
}

export default App

