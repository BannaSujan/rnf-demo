import { View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'

export default function PhaseCard({ title, onPress }) {
return (
    <TouchableOpacity onPress={() => onPress(title)}>
      <View style={styles.card}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#57409D', fontFamily: 'Poppins-Medium' }}>{title}</Text>
        <Text style={{ fontSize: 12, color: 'white', marginTop: 20, fontFamily: 'Roboto-Light' }}>
          Description!
        </Text>
      </View>
    </TouchableOpacity>
  );
    
}


const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width - 150,
        height: '90%',
        alignItems: 'left',
        backgroundColor: '#2B1C59',
        margin: 10,
        borderRadius: 10,
        paddingTop: 12,
        paddingLeft: 12,
        elevation: 3,
        shadowColor: "#171717",
        shadowOffset: {
          width: 6,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }
})