import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
 import { View, Text } from 'react-native'
 import React from 'react'
import Restaurant from '../screens/RestaurantScreen'
import Home from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import Order from '../screens/OrderPrepairingScreen';
import Delivery from '../screens/DeliveryScreen';
console.log(CartScreen);


 
 export default function AppNavigation() {
   return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{
        headerShown:false
       }}>
    <Stack.Screen name='HomeScreem' component={Home}/>
    <Stack.Screen name='RestaurantScreen' component={Restaurant}/>
   <Stack.Screen name='CartScreen' options={{presentation:'modal'}} component={CartScreen}/>
   <Stack.Screen name='Order' options={{presentation:'fullScreenModal'}} component={Order}/>
   <Stack.Screen name='Delivery' options={{presentation:'fullScreenModal'}} component={Delivery}/>
    </Stack.Navigator>
    </NavigationContainer>
   )
 }