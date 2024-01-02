import { View, Text, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const Slide = () => {
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#121212',alignItem:'center',justifyContent:'center'}}>

      <View style={{ position:'absolute', top:80,left:'10%', borderRadius:20, flexDirection:'grid',padding:10,alignItem:'center', gap:10 }}>
        <FontAwesome name="user-circle-o" size={35} color="white" style={{ paddingLeft:10}}/>
        <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Believe</Text>
      </View>

      <TouchableOpacity style={{ position:'absolute', top:200,left:'10%', borderRadius:20, flexDirection:'row',padding:10,alignItem:'center', gap:10 }}>
       <AntDesign name="setting" size={20} color="white" />
        <Text style={{color:'white', fontSize:12,}}>Settings and Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ position:'absolute', top:240,left:'10%', borderRadius:20, flexDirection:'row',padding:10,alignItem:'center', gap:10 }}>
      <Feather name="help-circle" size={20} color="white" />
        <Text style={{color:'white', fontSize:12,}}>Help Center</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ position:'absolute', bottom:40,left:'10%', borderRadius:20, flexDirection:'row',padding:10,alignItem:'center', gap:10 }}>
        <AntDesign name="logout" size={20} color="white" />
        <Text style={{color:'white', fontSize:12,}}>Logout</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

export default Slide