import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

export type RootStackParamList = {
    Home: undefined,
    Detail: any,
}
export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
          <Stack.Navigator>
      <Stack.Screen name="Home" 
      component={HomeScreen}
      options={{headerShown: false, animation: 'fade_from_bottom' ,presentation: 'transparentModal'}}
      />
      <Stack.Screen name="Detail"
       component={DetailScreen}
       options={{headerShown: false, animation: 'fade_from_bottom' , presentation: 'transparentModal'}}       />
    </Stack.Navigator>
  )
}

export default RootNavigator

