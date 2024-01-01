import { View, Text,Image, Animated, StyleSheet  } from 'react-native'
import React,{ useState, useEffect,useRef, } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import {Stack} from 'expo-router'
import { useRouter } from 'expo-router';


const Zoom = () => {
    const router = useRouter();
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(scale, {
            toValue:2,
            duration:3000,
            useNativeDriver: false,
        }).start(() => {
            router.push('./Land');
        })
    })
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

    <Stack.Screen
    options={{
      headerShown: false,
    }}
  />
   <StatusBar style='light'/>
   <Animated.View style={{ transform: [{ scale }] }}>
   <Image source={require('../../assets/images/img.png')} />
   </Animated.View>
   

</View>
  )
}

export default Zoom