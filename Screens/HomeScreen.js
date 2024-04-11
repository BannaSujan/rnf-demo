import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Modal, TouchableOpacity,Dimensions,Image } from 'react-native';
import {useFonts} from 'expo-font'


const HomeScreen = () => {

  let [fontsLoaded] = useFonts({
    'Roboto':require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Light':require('../assets/fonts/Roboto-Light.ttf'),
    'Poppins':require('../assets/fonts/Poppins-SemiBold.ttf'),
  })

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // A simple card component
  const Card = ({ title, onPress }) => (
    <TouchableOpacity onPress={() => onPress(title)}>
      <View style={styles.card}>
        <Text style={{ fontSize: 22, fontWeight: '700',color:'#393939',fontFamily:'Roboto' }}>{title}</Text>
        <Text style={{ fontSize: 18, color: '#202020', marginTop: 20,fontFamily:'Roboto-Light' }}>
          Description!!!Description!!!Description!!!Description!!!Description!!!Description!!!Description!!!Description!!!
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleCardPress = (title) => {
    setSelectedCard(title);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Text style={{fontFamily:'Roboto',fontSize:24,flex:0.6}}>Hi, welcome to my react native app</Text>
      </View>
      <View style={{backgroundColor:'#dadada', borderRadius:'10'}}>
      <Text style={styles.sectionTitle}>Highlights</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <Card title="Highlight 1" onPress={handleCardPress} />
        <Card title="Highlight 2" onPress={handleCardPress} />
        <Card title="Highlight 3" onPress={handleCardPress} />
      </ScrollView>
      </View>

      <Text style={styles.sectionTitle}>Planning</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <Card title="Plan 1" onPress={handleCardPress} />
        <Card title="Plan 2" onPress={handleCardPress} />
        <Card title="Plan 3" onPress={handleCardPress} />
      </ScrollView>

      <Text style={styles.sectionTitle}>Scope for improvement</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <Card title="Activity 1" onPress={handleCardPress} />
        <Card title="Activity 2" onPress={handleCardPress} />
        <Card title="Activity 3" onPress={handleCardPress} />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedCard}</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor:'#f3f3f3'
  },
  banner:{
    flex:1,
    flexDirection:'row',
    height:'20%',
    width:'100%'
  },
  scrollView: {
    marginBottom: 10,
  },
  card: {
    width: 250,
    height: 170,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    paddingTop: 20,
    elevation: 3,
    shadowColor: "#484848",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20,
    color:'#393939',
    fontFamily:'Poppins'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#00FD95",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'100%',
    height:'100%'
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default HomeScreen;

