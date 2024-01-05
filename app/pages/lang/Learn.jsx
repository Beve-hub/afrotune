import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter} from  'expo-router'

const Learn = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [text, setText] = useState()

    useEffect(() => {
      fetch
    },[])

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center',}}>
      
      <Text>Learn</Text>

    </View>
  )
}

export default Learn 