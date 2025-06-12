
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, View } from 'react-native';


export default function Order() {
    const navigation=useNavigation();
    useEffect(()=>{
       setTimeout(()=>{
       // Delviery Screen
       navigation.navigate('Delivery')
       },3000)
    },[])
  return (
    <View className='flex-1 bg-white justify-center items-center '>
        <Image source={require('../assets/images/delivery-man.png')}
        className='h-[50%] w-[95%] '/>

    </View>
  );
}
