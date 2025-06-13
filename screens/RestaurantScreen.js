import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native';
import * as Icon from "react-native-feather";
import { ArrowLeft } from 'react-native-feather';
import { themeColor } from '../theme';
import DishRow from '../components/dishRow';
import CartIcone from '../components/cartIcone';
import { useDispatch } from 'react-redux';
import { SetRestaurant } from '../slices/Restaurantslices';

export default function Restaurant() {
  const navigation=useNavigation();
  const {params}=useRoute();
  let item= params;
  const dispatch = useDispatch();
  //console.log('restaurants' ,item)
  useEffect(()=>{
  if(item && item.id){
    dispatch(SetRestaurant({...item}))
  }
  },[])
  return (
    <View>
      <CartIcone/>
      <StatusBar style='light'/>
      <ScrollView>
        <View className='relative'>
          <Image className='w-full h-72'
          source={item.image}
          
          />
        <TouchableOpacity
        onPress={()=> navigation.goBack()}
        className='absolute top-14 left-4 bg-gray-50  p-2 rounded-full shadow'>
         <Icon.ArrowLeft color='#f97316' height={20} width={20} strokeWidth={2.3}/>
        </TouchableOpacity>

        </View>
        <View style={{
           borderTopLeftRadius:40, borderTopRightRadius:40

        }}
        className='bg-white  pt-6 mt-0'
        >
          <View className='mx-5'>
            <Text className='text-3xl font-bold'>{item.name}</Text>
            <View className='flex-row space-x-2 my-1 '>
              <View className='flex-row items-center space-x-1 p-2'>
                <Image source={require('../assets/images/stars.jpg')}
                className='h-4 w-4'
                />
                <Text className='text-xs'>
                  <Text className='text-green-700 pl-2'>{item.stars}</Text>
                  <Text className='text-gray-700 pl-2'>({item.reviews} review) .</Text>
                  <Text className='text-bold text-base  '>{item.catogory}</Text>

                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <Icon.MapPin className='ml-2' color='gray' width={15} height={15}/>
                <Text className='text-gray-700 text-xs pl-2'>Nearby . {item.address}</Text>

              </View>
            </View>
            <Text className='text-gray-500 mt-2'>{item.description}</Text>
          </View>

        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
          
          {/* dishes */}
          {
            item.dishes.map((dish,index)=> <DishRow item={{...dish}} key={index}/>)
          }
        </View>

      </ScrollView>
    </View>
  )
}