import { View, StyleSheet,Image,Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { featured } from '../constants';
import { themeColor } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SetRestaurant } from '../slices/Restaurantslices';
import { emptyCart } from '../slices/Cartslices';

export default function Delivery() {
    const restaurants = useSelector(state => state.restaurant.restaurants || []);
 // ✅ Prevents errors if data is missing
    const navigation=useNavigation();
    const dispatch = useDispatch();
    const cancelScreen=()=>{
      navigation.navigate('HomeScreem');
     dispatch(emptyCart());
    }

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: restaurants[0]?.lat || 0, // ✅ Uses first restaurant as map center
            longitude: restaurants[0]?.lng || 0,
            latitudeDelta: 0.03, // ✅ Adjusted zoom for visibility
            longitudeDelta: 0.03
          }}
          style={styles.map}
          mapType="standard"
        >
          {/* Adding Multiple Markers */}
          {restaurants.map((restaurant, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.lng,
              }}
              title={restaurant.name}
              description={restaurant.description}
              pinColor={themeColor.bgcolor(1)}
            />
          ))}
        </MapView>
        <View className='rounded-t-3xl mt-12 bg-white relative mb-20'>
            <View className='flex-row justify-between px-5 pt-10'>
                <View>
                    <Text className='text-lg text-gray-700 font-semibold'>Estimated Arrival</Text>
                    <Text className='text-3xl font-extrabold text-gray-700'>20-30 mintus</Text>
                    <Text className='mt-2 text-gray-700 font-semibold'>Your order is own way</Text>

                </View>
                <Image className='w-24 h-24 ml-8 ' source={require('../assets/images/delivery-man.png')}/>
            </View>
            <View
            className='p-2 flex-row justify-between items-center rounded-full my-5 mx-1 px-6 w-full mb-20'
            style={{backgroundColor:themeColor.bgcolor(0.8)}}>
                <View className='p-1 rounded-full'
                style={{backgroundColor: `rgba(255,255,255,0.4)`}}

                >
                    <Image className='h-16 w-16 rounded-full'source={require('../assets/images/delivery-man.png')}/>

                </View>
                <View className='flex-1 ml-3'>
                    <Text className='text-lg font-bold text-white'>
                        Falak Sher
                    </Text>
                    <Text className=' font-semibold text-white'>
                        Your rider
                    </Text>
                </View>
                <View className='flex-row items-center space-x-3 mr-3'>
                    <TouchableOpacity className='bg-white p-2 rounded-full mr-2'>
                        <Icon.Phone fill={themeColor.bgcolor(1)} stroke={themeColor.bgcolor(1)} strokeWidth={2}/>

                    </TouchableOpacity>
                    <TouchableOpacity className='bg-white p-2 rounded-full'
                    onPress={cancelScreen}
                    >
                        <Icon.X  stroke={'red'} strokeWidth={4}/>

                    </TouchableOpacity>
                </View>


            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  map: {
    width: '100%', // ✅ Ensures full-screen width
    height: 570, // ✅ Fixed height for visibility
  },
});
