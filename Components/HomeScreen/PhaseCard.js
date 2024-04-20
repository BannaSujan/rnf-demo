import { View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'

export default function PhaseCard({ title, desc,val, onPress }) {

  const string_to_attach = (Dimensions.get('window').width > 500) ? desc : val
return (
    <TouchableOpacity onPress={() => onPress(title)}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={{ fontSize: 16, color: '#dddddd', marginTop: 20, fontFamily: 'Poppins-Light',textAlign:'justify' }}>
          {string_to_attach}
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
        padding:12,
        elevation: 3,
        shadowColor: "#171717",
        shadowOffset: {
          width: 6,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      cardTitle:{ 
        fontSize: 22,
         fontWeight: '700',
          color: '#57409D',
           fontFamily: 'Poppins-Medium'
      }
})