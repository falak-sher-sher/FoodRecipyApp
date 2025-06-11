import { View, Text, TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColor } from '../theme';

export default function RestaurantCart({item}) {
 
  return (
   <TouchableWithoutFeedback 
  style={{

         shadowColor: themeColor.bgcolor(0.2),
         shadowRadius:7

  }}
   >
    
    <View className='mr-6 bg-white rounded-3xl shadow-lg mb-5 pt-2'
    style={{
          shadowColor: themeColor.bgcolor(0.8),
          shadowRadius:7

    }}
    >
        <Image
        className='h-36 w-60 rounded-t-3xl' 
        source={item.image}
        
        />
        <View className='px-3 pb-4 space-y-2'>
            <Text className='text-lg font-bold pt-2'>{item.name}</Text>
            <View className='flex-row items-center space-x-2'>
                <Image className='h-4 w-4'
                source={require('../assets/images/stars.jpg')}
                />
                <Text className='text-xs'>
                    <Text className='text-green-700'>{item.stars}</Text>
                    <Text className='text-gray-700'>
                        ({item.reviews} reviews) .
                        <Text className='font-semibold'>{item.catagory}</Text>
                    </Text>
                </Text>
            </View>
            <View className='flex-row items-center space-x-1 '>
                <Icon.MapPin height={15} width={15} color='gray'/>
                <Text className='text-gray-700 text-xs pl-1'>Nearby. {item.address}</Text>
            </View>
        </View>
    </View>
   </TouchableWithoutFeedback>
  )
}