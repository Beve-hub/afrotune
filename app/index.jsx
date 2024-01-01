import { View, Text,Image } from 'react-native'
import React,{ useState, useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import {Stack} from 'expo-router'
import { useRouter } from 'expo-router';


const index = () => {

 const router = useRouter();
 const [isLoading, setIsLoading] = useState(true)

 useEffect(() => {
    const startTimer = setTimeout(() => {
        router.push('./screen/Onboard');
    }, 3000);

    return () => clearTimeout(startTimer)
 })

  return (
    
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

        <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
       <StatusBar style='light'/>
       <Image source={require('../assets/images/logo.png')} style={{width:wp(25), height:hp(15)}}/>
      <Text style={{fontSize:30, fontWeight:'bold', marginVertical:20}}>Afri-Tone</Text>

      <Text style={{fontSize:15, color:'#12121260', position:'absolute', bottom:50  }}>@learn africa language</Text>
    </View>
  )
}

export default index