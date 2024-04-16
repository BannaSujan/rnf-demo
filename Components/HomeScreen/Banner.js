import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {useFonts} from 'expo-font'

export default function Banner() {

    let [fontsLoaded] = useFonts({
        'Roboto':require('../../assets/fonts/Roboto-Medium.ttf'),
      })
    
  return (
    <View style={styles.banner}>
        <Text style={{width:'50%',textAlign:'center'}}>Banna Sujan</Text>
        <Text 
        style={{
          fontFamily:'Roboto',
          fontSize:24,
          width:'50%',
          textAlign:'center'}}
          >Hi, Welcome to my react native app</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    banner:{
        flex:0.55,
        flexDirection:'row',
        width:'95%',
        height:'95%',
        padding:20,
        marginLeft:30,
        marginRight:30,
        verticalAlign:'auto',
        backgroundColor:'#e8e8e8',
        borderRadius:30,
        alignSelf:'center',
        marginBottom:20,
        justifyContent:'center'
      }
})