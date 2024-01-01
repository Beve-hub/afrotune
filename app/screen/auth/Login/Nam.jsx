import {TextInput, View, Text,Image, Animated, StyleSheet, TouchableOpacity  } from 'react-native'
import React,{ useState, useEffect,useRef, } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import {Stack} from 'expo-router'
import { useRouter } from 'expo-router';

const Nam = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#121212'}}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
       <StatusBar style='light'/>

      <Text style={{position:'absolute', top:'10%',left:'45%',fontSize: 20, color:'white', fontWeight:'bold'}}>Log In</Text>

      <TextInput
          style={{position:'absolute', top:'20%',left:'10%',width:wp(80), height: 45, backgroundColor: '#DFDFDF', paddingLeft:20,  borderRadius: 2, paddingVertical:10 }}
          placeholder="Email Address"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"
        />

     <View style={{ position:'absolute',gap:15, bottom:'5%',left:'10%',flexDirection:'grid',alignItems:'center'}}>
        <TouchableOpacity onPress={() => router.push('../Login/Pas')}  style={{backgroundColor: '#DFDFDF', width:wp(80), flexDirection:'row', justifyContent:'center', alignItems:'center',padding:10,borderRadius:5,   }}>
        <Text style={{fontSize: 16,  }}>Next</Text>
        </TouchableOpacity>
        <View style={{ flexDirection:'row', gap:5}}>
            <Text style={{fontSize:15, color:'white', }}>Have an account?</Text>
            <TouchableOpacity onPress={() => router.push('../signup/Full')} >
                <Text style={{fontSize:15, color:'white', fontWeight:'bold'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
       </View>
    </View>
  )
}

export default Nam