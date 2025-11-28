import 'react-native-gesture-handler'; // Isso deve ser o primeiro import para garantir o funcionamento do Gesture Handler
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from "./screens/HomeScreen";
import DescontoScreen from './screens/DescontoScreen';
import CarroScreen from './screens/CarroScreen';


const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}  />
        <Stack.Screen name='Desconto' component={DescontoScreen} />
        <Stack.Screen name='Carros' component={CarroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}