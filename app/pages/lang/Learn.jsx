import { View, Text,TextInput,TouchableOpacity,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Translate from './Translate'
import { Ionicons } from '@expo/vector-icons';


const Learn = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [text, setText] = useState('')

   { /*useEffect(() => {
      const textToTranslate = 'Hello, world';
      const targetLanguage = 'af'

      Translate(textToTranslate, targetLanguage)
      .then((transition) => {
        setText(transition);
      })
      .catch((error) => {
        console.error('Translation error:', error);
      });
    },[])*/}

  return (
    <View style={{flex:1,marginTop:40, marginHorizontal:20}}>
        <TouchableOpacity onPress={() => router.push('../Home')} style={{backgroundColor: '#12121220', padding:5, width:30, borderRadius:20}}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
             <View style={{position:'absolute',  right:10, bottom:100,backgroundColor: '#12121220', padding:5, }}>
                 <Image source={item.Flag} 
                 style={{width:wp(7), height:hp(3), justifyContent:'center',alignItems:'center',flexDirection:'row', }} />
             </View>
        <View style={{ position:'absolute',gap:15, bottom:'5%',left:'50%',flexDirection:'grid',alignItems:'center',}}>
            <TextInput
               style={{position:'absolute', bottom:10, backgroundColor:'#12121220',  width:wp(80), height: 45, paddingLeft:20, }}
               placeholder="say a word"
               onChangeText={newText => setText(newText)}
               value={text}
               keyboardType="text" 
            />
        </View>
    </View>
  )
}

export default Learn 