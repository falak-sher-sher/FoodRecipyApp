import { View, Text, TouchableOpacity,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { featured } from '../constants';
import { themeColor } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SetRestaurant } from '../slices/Restaurantslices';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/Cartslices';

export default function CartScreen() {
    const DeliveryFee=2;

  
  const navigation=useNavigation();
  const restaurants= useSelector(SetRestaurant);
  const cartItem=useSelector(selectCartItems);
  const itemTotal=useSelector(selectCartTotal);
  const [groupedItems,setGroupedItems] =useState({})
  const dispatch = useDispatch();

  useEffect(()=>{
   const items = cartItem.reduce((group,item)=>{
    if(group[item.id]){
        group[item.id].push(item);
    }else{
        group[item.id] = [item];
    }return group;
   },{})
   setGroupedItems(items);
  },[cartItem])
  return (
    <View className='bg-white flex-1'>
        {/* BackButton */}
        <View className='relative py-4 shadow-sm'>
         <TouchableOpacity 
         onPress={()=> navigation.goBack()}
         style={{backgroundColor:themeColor.bgcolor(1)}}
         className='absolute z-10 rounded-full p-2 shadow top-5 left-2'
         >
            <Icon.ArrowLeft strokeWidth={3} stroke={'white'}/>
         </TouchableOpacity>
         <View>
            <Text className='text-center font-bold text-xl'>Your cart</Text>
            <Text className='text-center text-gray-500'>{restaurants.name}</Text>

         </View>
        </View>
        {/* Delivery time */}
        <View
        style={{backgroundColor:themeColor.bgcolor(0.5)}}
        className='flex-row items-center px-4 py-1 '
        >
            <Image className=' rounded-full shadow-sm'
            style={{height:45, width:40}}
            source={require('../assets/images/deliveryguy.jpg')}
            />
            <Text className='flex-1 pl-4'>Delivery in 20-30 minutes</Text>
            <TouchableOpacity>
                <Text className='font-bold' style={{color:themeColor.text}}>
                    Change
                </Text>
            </TouchableOpacity>
        </View>
        {/* Dishes */}
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:50
        }}
        className='bg-white pt-5'
        >
            {
                Object.entries(groupedItems).map(([key,items])=>{
                   let dish = items[0];
                    return(

                        <View 
                        key={key}
                        className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'

                        >
                            <Text className='font-bold mr-2' style={{color:themeColor.text}}>
                                {items.length} x
                            </Text>
                            <Image className='h-14 w-14 rounded-full mr-2 ' source={dish.image}/>
                            <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                            <Text className='font-semibold text-base mr-2'>${dish.price}</Text>
                            <TouchableOpacity
                            onPress={()=> dispatch(removeFromCart({id: dish.id}))}
                            className='p-1 rounded-full'
                            style={{backgroundColor:themeColor.bgcolor(1)}}
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>

                            </TouchableOpacity>


                        </View>
                    )
                })
            }

        </ScrollView>
        {/* totals */}
        <View style={{backgroundColor:themeColor.bgcolor(0.2)}} className='p-6 px-8 rounded-t-3xl space-y-4'>
            <View className='flex-row justify-between'>
                <Text className='test-gray-700'>Subtotal</Text>
                <Text className='test-gray-700'>${itemTotal}</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='test-gray-700'>DeliveryFee</Text>
                <Text className='test-gray-700'>${DeliveryFee}</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='test-gray-700 font-extrabold'>Order Total</Text>
                <Text className='test-gray-700 font-extrabold'>${DeliveryFee+itemTotal}</Text>
            </View>
            <View className='mt-2'>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Order')}
                style={{backgroundColor:themeColor.bgcolor(1)}}
                className='p-4 rounded-full'
                >
                    <Text className='text-white text-center font-bold text-lg'>Place Order</Text>

                </TouchableOpacity>
            </View>
        </View>
      
    </View>
  );
}
