import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const techs = ['MONGODB', 'React-Native', 'Axios', 'CSS', 'NodeJS','ExpressJS'];

export default function ProjectTechStack() {
  return (
    <View style={styles.container}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {techs.map((tech, index) => (
        <TouchableOpacity key={index} style={styles.tab}>
          <Text style={styles.tabText}>{tech}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 10, 
      paddingLeft:Dimensions.get('window').width*0.022
    },
    scrollViewContainer: {
      paddingHorizontal: 10, 
    },
    tab: {
      backgroundColor: '#262626', 
      borderRadius: 20, 
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabText: {
      color: 'white',
      fontSize: 16,
    },
  });