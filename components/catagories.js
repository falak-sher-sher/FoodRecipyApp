import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { catagories } from '../constants'

export default function Catagories() {
    const [activityCategory,setactivityCategory]=useState(null);
  return (
    <View className='mt-4'>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{
            paddingHorizontal: 10
            
        }}
        >
            {
            
            catagories.map((catagory,index)=>{
                let isActive = catagory.id==activityCategory;
                let bntClass=isActive? 'bg-gray-600':'bg-gray-200';
                let txtClass=isActive? 'font-semibold text-gray-800' : 'text-gray-500';
                return(
               <View key={index} className='flex justify-center items-center mr-6 '>
                <TouchableOpacity 
                onPress={()=>setactivityCategory(catagory.id)}
                className={`p-1 rounded-full shadow bg-gray-200  ${bntClass}`}>
                    <Image style={{height:45, width:45}} 
                    source={catagory.image}
                    className='rounded-full'
                    />
                    

                </TouchableOpacity>
                <Text className={`text-sm mr-3  ${txtClass}` }>{catagory.name}</Text>


               </View>

                )
            })
            
            }

        </ScrollView>
     
    </View>
  )
}