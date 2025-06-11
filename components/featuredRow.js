import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColor } from '../theme'
import RestaurantCart from './restaurantCart'

export default function FeatureRow({name,description,restaurants}) {
  return (
    <View className='mt-4'
    
    >
     <View className='flex-row justify-between item-center px-4'>
        <View >
            <Text className='font-bold font-lg '>{name}</Text>
            <Text className='text-gray-500 text-xs mt-2'>{description}</Text>
        </View>
        <TouchableOpacity>
            <Text className='font-semibold mt-2' style={{color:themeColor.text}}>See all</Text>
        </TouchableOpacity>
     </View>
     {/* Restaurant section */}
     <View className='flex-row justify-center space-x-2'>
     <ScrollView
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{
        paddingHorizontal:15
     }}>
        {
            restaurants.map((restaurants,index)=>{
                return (
                    <RestaurantCart
                    item={restaurants}
                    key={index}
                    />
                )
            })
        }
        {
            restaurants.map((restaurants,index)=>{
                return (
                    <RestaurantCart
                    item={restaurants}
                    key={index}
                    />
                )
            })
        }
     </ScrollView>
     </View>
    </View>
  )
}