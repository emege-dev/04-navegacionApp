import 'react-native-gesture-handler';
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigators/StackNavigator';
import { MenuLateralBasico } from './src/navigators/MenuLateralBasico';



const App = ( )=> 
{
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <MenuLateralBasico/>
    </NavigationContainer>
  )
}

export default App;
