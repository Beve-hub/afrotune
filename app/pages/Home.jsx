import { View, Text,Image, FlatList,Button, TouchableOpacity,DrawerLayoutAndroid, } from 'react-native'
import React,{ useState, useEffect,useRef, } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { data } from '../../components/Countries';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Home = () => {
  const router = useRouter();
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  

  const navigationView = () => (
    <View style={{flex:1, backgroundColor:'#121212',alignItem:'center',justifyContent:'center'}}>

      <View style={{ position:'absolute', top:80,left:'10%', borderRadius:20, flexDirection:'grid',padding:10,alignItem:'center', gap:10 }}>
        <FontAwesome name="user-circle-o" size={35} color="white" style={{ paddingLeft:10}}/>
        <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Believe</Text>
      </View>

      <TouchableOpacity onPress={() => router.push("./Settings")} style={{ position:'absolute', top:200,left:'10%', borderRadius:20, flexDirection:'row',padding:10,alignItem:'center', gap:10 }}>
       <AntDesign name="setting" size={20} color="white" />
        <Text style={{color:'white', fontSize:12,}}>Settings and Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("./Help")} style={{ position:'absolute', top:240,left:'10%', borderRadius:20, flexDirection:'row',padding:10,alignItem:'center', gap:10 }}>
      <Feather name="help-circle" size={20} color="white" />
        <Text style={{color:'white', fontSize:12,}}>Help Center</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("../screen/auth/Login/Nam")} style={{ position:'absolute', bottom:40,left:'10%', borderRadius:20, flexDirection:'row',padding:10,alignItem:'center', gap:10 }}>
        <AntDesign name="logout" size={20} color="white" />
        <Text style={{color:'white', fontSize:12,}}>Logout</Text>
      </TouchableOpacity>


    </View>
  );

  return (
    <DrawerLayoutAndroid
     ref={drawer}
    drawerWidth={250}
    drawerPosition={drawerPosition}
    renderNavigationView={navigationView} >


      <StatusBar style='dark'/>
      <View style={{flexDirection:'row', marginTop:50,justifyContent:'space-between',marginHorizontal:40}}>
      <TouchableOpacity onPress={() => drawer.current.openDrawer()}  style={{ }}>
      <Entypo name="menu" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("./Notification")} >
      <Ionicons name="notifications" size={30} color="black" />
      </TouchableOpacity>
    </View>


      <Text style={{marginTop:30,marginBottom:10, fontSize:20, fontWeight:'bold',marginHorizontal:40}}>Select a language to Learn</Text>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item=> item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50,paddingTop:20,}}
        columnWrapperStyle={{
          marginVertical: 5
        }}
        renderItem={({item,index})=> <BodyPartCard router={router} index={index} item={item}/>}
      />
    </DrawerLayoutAndroid>
    
  )
}

export default Home


const BodyPartCard = ({item,index,router}) => {
  return (
    <View style={{}}>
      <TouchableOpacity onPress={() => router.push({pathname: '../pages/lang/Learn', params: item})} style={{width:wp(40), height:hp(25),gap:10, padding:20,marginHorizontal:15,marginVertical:10,backgroundColor:'white',borderRadius:20, }} >
        <Text>{item.name}</Text>
        <Image source={item.Flag} 
          style={{width:wp(30), height:hp(10),justifyContent:'center',alignItems:'center',marginTop:15,}}
        />
      </TouchableOpacity>
    </View>
  )
}