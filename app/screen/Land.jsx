import { View, Text,Image, Animated, StyleSheet  } from 'react-native'
import React,{ useState, useEffect,useRef, } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import {Stack} from 'expo-router'
import { useRouter } from 'expo-router';

const Land = () => {
    const router = useRouter();
    const translateY = useRef(new Animated.Value(-hp(100))).current;

    useEffect(() => {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {
            router.push('./LandItem');
        }); // Don't forget to call start() to begin the animation
      }, []);
    
  return (
    <View style={{flex:1}}>
        <Stack.Screen
    options={{
      headerShown: false,
    }}
  />
   <StatusBar style='light'/>
   
        <Animated.View  style={ { transform: [{ translateY }] }}>
        
        <Image source={require('../../assets/images/img2.png')}  style={{width:'100%',height:'100%',resizeMode: 'cover'}}/>
        
        </Animated.View>
        
      
    </View>
  )
}





  
export default Land