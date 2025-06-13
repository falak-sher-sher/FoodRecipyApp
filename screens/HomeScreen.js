
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import * as Icon from "react-native-feather";
import {themeColor} from '../theme/index'
import Catagories from '../components/catagories'

import { SafeAreaView } from 'react-native-safe-area-context';
import { featured } from '../constants';
import FeatureRow from '../components/featuredRow';


export default function Home() {
  return (
    <SafeAreaView className="bg-white pt-2 ">
        <StatusBar barStyle="dark-content "/>
        {/* Search Bar */}
        <View className="flex-row items-center space-x-2 px-4 pb-2 shadow-4 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 shadow-md shadow-black-700">

                <Icon.Search height={25} width={25} stroke={"gray"} />
                <TextInput placeholder='Search here' className='ml-2 flex-1'/>
                <View className='flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300'>
                    <Icon.MapPin height={20} width={20} stroke={'gray'}/>
                    <Text className='text-gray-500'>New york city</Text>

                </View>
                
            </View>
            <View  style={{backgroundColor:themeColor.bgcolor(1)}}className='p-3 rounded-full'>
                <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke={'white'}/>
            </View>
           
        </View>
        <ScrollView
        
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:20
        }}
        >
        {/*catagories */}
        <Catagories/>
        {/* Featured section */}
        <View className='mt-5'>
        {
            [featured,featured,featured].map((item,index)=>{
                return (
                    <FeatureRow
                    key={index}
                    title={item.title}
                    description={item.discription}
                    restaurants={item.restaurants}
                    
                    />
                )
            })
        }
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}