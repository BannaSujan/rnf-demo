import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {useFonts} from 'expo-font'

export default function Banner() {

    let [fontsLoaded] = useFonts({
        'Roboto':require('../../assets/fonts/Roboto-Medium.ttf'),
      })
    
  return (
    <View style={styles.banner}>
        <Text style={{fontFamily:'Poppins',fontSize:25,textAlign:'center'}}>Crafting Excellence</Text>
        <Text style={{fontFamily:'Poppins-Light',fontSize:22,textAlign:'center'}}>Innovative, Expert, Reliable</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    banner:{
        flex:0.35,
        width:'95%',
        height:'95%',
        padding:20,
        marginLeft:30,
        marginRight:30,
        verticalAlign:'auto',
        backgroundColor:'#e8e8e8',
        borderRadius:10,
        alignSelf:'center',
        marginTop: 20,
        marginBottom:10,
        justifyContent:'center'
      }
})