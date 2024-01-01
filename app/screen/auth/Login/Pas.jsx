import {TextInput, View, Text,Image, Animated, StyleSheet, TouchableOpacity,Modal,ActivityIndicator   } from 'react-native'
import React,{ useState, useEffect,useRef, } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import {Stack} from 'expo-router'
import { useRouter } from 'expo-router';

const Pas = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  

  const startTimer = () => {
    const processingTimer = setTimeout(() => {
      // set delay to timer for payment
      setIsLoading(false);
      router.push('../../../pages/Home');
    }, 3000);

    // clear the timer if the component is unmounted before the timeout
    return () => clearTimeout(processingTimer);
  };

  const openModal = () => {
    setModal(true);
    startTimer();
}

const closeModal = () => {
    setModal(false);
}


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
          placeholder="Password"
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"
        />

     <View style={{ position:'absolute',gap:15, bottom:'5%',left:'10%',flexDirection:'grid',alignItems:'center'}}>
        <TouchableOpacity onPress={openModal} style={{backgroundColor: '#DFDFDF', width:wp(80), flexDirection:'row', justifyContent:'center', alignItems:'center',padding:10,borderRadius:5,   }}>
        <Text style={{fontSize: 16,  }}>Next</Text>
        </TouchableOpacity>
       </View>


       <Modal 
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(closeModal);
          }}>
           
            <View
             style={{
              flex:1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#12121290'
             }}
            >

            <View style={{  backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 20, width: wp(200), alignSelf: 'center',height: wp(200) }}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
              <ActivityIndicator size="large" color='#121212'/>
              </View>
            
            </View>
            
            </View>
       
       
      </Modal>
    </View>
  )
}

export default Pas