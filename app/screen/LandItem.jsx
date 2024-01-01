import { View, Text,Image, Animated, StyleSheet, TouchableOpacity  } from 'react-native'
import React,{ useState, useEffect,useRef, } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import {Stack} from 'expo-router'
import { useRouter } from 'expo-router';

const LandItem = () => {
  const router = useRouter();
  return (
    <View>
         <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
       <StatusBar style='light'/>
      <Image source={require('../../assets/images/img2.png')}  style={{width:'100%',height:'100%',resizeMode: 'cover'}}/>
     
      <View style={{ position:'absolute', top:100,left:'35%', backgroundColor:'white', borderRadius:20, flexDirection:'row',padding:10  }}>
      <Text style={{fontSize:18, color:'#121212', fontWeight:'bold'}}>Afri-Tone</Text>
      <Image source={require('../../assets/images/logo.png')} style={{width:wp(5), height:hp(3)}}/>
      </View>

      <View style={{ position:'absolute', top:'45%',left:'25%',flexDirection:'row', gap:5 }}>
       <Text style={{fontSize:30, color:'white', }}>Learn</Text>
       <Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>Language</Text>
       </View>

       <View style={{ position:'absolute', top:'52%',left:'13%',alignItem:'center',}}>
       <Text style={{ width:wp(80), textAlign: 'center',fontSize:16, color:'white'}}>Afri-tone is a great way to learn the africa languages and culture, whether you’re going on vacation,taking a businesstrip, or just looking to improve your language skills
        .</Text>
       </View>

       

       <View style={{ position:'absolute',gap:15, bottom:'10%',left:'20%',flexDirection:'grid',alignItems:'center'}}>
        <TouchableOpacity onPress={() => router.push('./auth/Login/Nam')}  style={{backgroundColor:'#055AFF', width:wp(60), flexDirection:'row', justifyContent:'center', alignItems:'center',padding:10,borderRadius:20,   }}>
        <Text style={{fontSize: 20, color:'white', fontWeight:'bold'}}>Get Started</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default LandItem