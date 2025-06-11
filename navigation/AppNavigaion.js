import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
 import { View, Text } from 'react-native'
 import React from 'react'
import Restaurant from '../screens/RestaurantScreen'
import Home from '../screens/HomeScreen';


 
 export default function AppNavigation() {
   return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{
        headerShown:false
       }}>
    <Stack.Screen name='HomeScreem' component={Home}/>
    <Stack.Screen name='RestaurantScreen' component={Restaurant}/>
    </Stack.Navigator>
    </NavigationContainer>
   )
 }