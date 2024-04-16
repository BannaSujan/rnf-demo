import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Modal, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font'
import Banner from '../Components/HomeScreen/Banner';


const HomeScreen = () => {

  let [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
    'Poppins': require('../assets/fonts/Poppins-SemiBold.ttf'),
  })

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const Card = ({ title, onPress }) => (
    <TouchableOpacity onPress={() => onPress(title)}>
      <View style={styles.card}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#393939', fontFamily: 'Roboto' }}>{title}</Text>
        <Text style={{ fontSize: 18, color: '#202020', marginTop: 20, fontFamily: 'Roboto-Light' }}>
          Description!
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleCardPress = (title) => {
    setSelectedCard(title);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Banner />
      <View style={styles.myScrollView}>
        <Text style={styles.sectionTitle}>Planning and Execution</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <Card title="Phase 1" onPress={handleCardPress} />
          <Card title="Phase 2" onPress={handleCardPress} />
          <Card title="Phase 3" onPress={handleCardPress} />
        </ScrollView>
      </View>
      <View style={styles.techStack}>
        <Text style={{ textAlign: 'start', paddingLeft: (0.025 * Dimensions.get('window').width), fontSize: 24, fontFamily: 'Poppins' }}> Project TechStack</Text>

      </View>
      <View style={styles.pointView}>
        <View style={{ width: '40%', backgroundColor: '#f6f6f6', borderWidth: 2, borderRadius: 10 }}>
          <Text>differences</Text>
        </View>
        <View style={{ width: '40%', backgroundColor: 'red', borderWidth: 2, borderRadius: 10 }}>
          <Text style={styles.high_text}>Highlights</Text>
          <Text>Highlights1</Text>
        </View>
      </View>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 50,
    backgroundColor: '#f3f3f3'
  },
  techStack: {
    flex: 0.15,
    backgroundColor: "transparent"
  },
  scrollView: {
    marginBottom: 10,
  },
  myScrollView: {
    backgroundColor: '#dadada',
    borderRadius: 10,
    flex: 0.55,
    height: '100%',
    width: '95%',
    alignSelf: 'center'
  },
  pointView: {
    flex: 0.75,
    backgroundColor: '#d6d6d6',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20
  },
  card: {
    width: Dimensions.get('window').width - 150,
    height: '90%',
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
    color: '#393939',
    fontFamily: 'Poppins',
    textAlign: 'center'
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
    width: '100%',
    height: '100%'
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
  },
  high_text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
  }
});

export default HomeScreen;

