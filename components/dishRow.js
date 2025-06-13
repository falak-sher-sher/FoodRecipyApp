import { View, Text, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemById } from '../slices/Cartslices';

export default function DishRow({item}) {
    const dispatch=useDispatch();
    const totalItems = useSelector(state=> selectCartItemById(state,item.id))
    const handleIncrease=()=>{
        dispatch(addToCart({...item}))
    }
    const handleDecrease=()=>{
        dispatch(removeFromCart({id: item.id}))
    }
  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
        <Image className='rounded-3xl w-40 h-40'source={item.image}/>
        <View className='flex flex-1 space-y-3'>
            <View className='pl-3'>
                <Text className='text-xl'>{item.name}</Text>
                <Text className='text-gray-700'>{item.description}</Text>

            </View>
            <View className='flex-row justify-btween pl-3 items-center'>
                <Text className='text-gray-700 text-lg font-bold'>
                    ${item.price}
                </Text>
                <View className='flex-row items-center mx-14'>
                    <TouchableOpacity 
                    onPress={handleDecrease}
                    disabled={!totalItems.length}
                    className='p-2 rounded-full'
                    style={{backgroundColor:'#f97316', }}
                    >
                        <Icon.Minus stroke={'white'} height={15} width={15} strokeWidth={3}/>

                    </TouchableOpacity>
                    <Text className='px-3 items-center '>{totalItems.length}</Text>
                    <TouchableOpacity
                    onPress={handleIncrease}
                    className='p-2 rounded-full '
                    style={{backgroundColor:'#f97316', }}
                    
                    >
                        <Icon.Plus stroke={'white'} height={15} width={15} strokeWidth={3}/>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
      
    </View>
  )
}