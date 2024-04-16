import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Modal, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font'
import Banner from '../Components/HomeScreen/Banner';


const HomeScreen = () => {

  let [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
    'Poppins': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  })

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const Card = ({ title, onPress }) => (
    <TouchableOpacity onPress={() => onPress(title)}>
      <View style={styles.card}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#57409D', fontFamily: 'Poppins-Medium' }}>{title}</Text>
        <Text style={{ fontSize: 12, color: 'white', marginTop: 20, fontFamily: 'Roboto-Light' }}>
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
          <Card title="Design" onPress={handleCardPress} />
          <Card title="Develop" onPress={handleCardPress} />
          <Card title="Deployment" onPress={handleCardPress} />
        </ScrollView>
      </View>
      <View style={styles.techStack}>
        <Text style={{ marginTop:10,textAlign: 'start', paddingLeft: (0.025 * Dimensions.get('window').width), fontSize: 22, fontFamily: 'Poppins-Medium', color:'white' }}> Project TechStack</Text>

      </View>
      <View style={styles.pointView}>
        <View style={{ width: '45%', backgroundColor: '#393939', borderWidth: 2, borderColor:'#555555', borderRadius: 10,  shadowColor: "#000", shadowOffset: { width: 6, height: 4, }, shadowOpacity: 0.2, shadowRadius: 4, }}>
          <Text style={styles.high_text}>Highlights</Text>
        </View>
        <View style={{ width: '45%', backgroundColor: '#393939', borderWidth: 2, borderColor:'#555555', borderRadius: 10,  shadowColor: "#000", shadowOffset: { width: 6, height: 4, }, shadowOpacity: 0.2, shadowRadius: 4,}}>
          <Text style={styles.high_text}>Future Scope</Text>

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
    backgroundColor: '#202020'
  },
  techStack: {
    flex: 0.15,
    backgroundColor: "transparent"
  },
  scrollView: {
    marginBottom: 10,
  },
  myScrollView: {
    backgroundColor: '#57409D',
    borderRadius: 10,
    borderColor: '#2B1C59',
    borderWidth: 3,
    flex: 0.55,
    height: '100%',
    width: '95%',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pointView: {
    flex: 0.75,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20
  },
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
  },
  sectionTitle: {
    fontSize: 22,
    marginLeft: 15,
    marginTop: 20,
    color: 'white',
    fontFamily: 'Poppins-Medium',
    textAlign: 'left'
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
    shadowColor: "#171717",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.2,
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
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#969696',
    textAlign: 'left',
    paddingLeft: 12,
    paddingTop: 12,
    fontWeight: '700',
  }
});

export default HomeScreen;

