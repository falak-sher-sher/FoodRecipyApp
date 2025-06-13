import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/Cartslices';

export default function CartIcone() {
    const navigation=useNavigation();
    const cartItem=useSelector(selectCartItems);
    const itemTotal = useSelector(selectCartTotal);
    if(!cartItem.length) return;
  return (
    <View className='absolute bottom-9 w-full z-50'>
        <TouchableOpacity
       onPress={()=> navigation.navigate('CartScreen')}

        style={{
             backgroundColor:"#f97316"

        }}
        className='flex-row justify-between items-center mx-5 rounded-full p-4 py-7 shadow-lg'

        >
            <View className='p-2 px-4 rounded-full ' style={{backgroundColor: `rgba(255,255,255,0.3)`}}>
                <Text className ='font-extrabold text-white text-lg'>
                   {cartItem.length}
                </Text>
            </View>
            <Text className='flex-1 text-center font-extrabold text-white text-lg'>
                View Cart
            </Text>
            <Text className='font-extrabold text-white text-lg'>
                ${itemTotal}
            </Text>

        </TouchableOpacity>
      
    </View>
  )
}