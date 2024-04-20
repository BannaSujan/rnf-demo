import React, { useState,useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Modal, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font'
import Banner from '../Components/HomeScreen/Banner';
import PhaseModal from '../Components/HomeScreen/PhaseModal';
import axios from 'axios';
import PhaseCard from '../Components/HomeScreen/PhaseCard';
import ProjectTechStack from '../Components/HomeScreen/ProjectTechStack';

const HomeScreen = () => {

  let [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
    'Poppins': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light':require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  })

  const highlights = ['User-Friendly Interface and Color Scheme',
   'Optimal Use of React Components',
   'Efficient Implementation of Hooks and State Management',
   'Responsive Layout Across Devices',
   'Intuitive Navigation Structure',
   'Sound API Integration'];

  const futureScope = [
    'Enhanced Unit Testing',
    'Robust User Authentication Measures',
    'Integration of Cutting-Edge UI/UX Design Trends',
    'Expansion to Additional Platforms and Devices',
    'Increased Customization Options for Users',
    'Strengthened API Security and Performance',
];

  const [isModalVisible, setModalVisible] = useState(false);

  const [selected, setSelected] = useState({
    phaseTitle: null,
    phaseTimeline: null,
    phaseDescription: null,
    phaseTasks: [],
    phaseActions: [],
    phaseValue: null,
  });
  
  const [phasesData, setPhasesData] = useState([]);
  
  const handleCardPress = (item) => {
    setSelected({
      phaseTitle: item.phaseTitle,
      phaseTimeline: item.phaseTimeline,
      phaseDescription: item.phaseDescription,
      phaseTasks: item.phaseTasks,
      phaseActions: item.phaseActions,
      phaseValue: item.phaseValue,
    });
    setModalVisible(true);
  };
  
  useEffect(() => {
    axios.get(`http://192.168.1.237:3005/api/phases`)
      .then(response => {
        setPhasesData(response.data);
      })
      .catch(err => console.log(err));
  }, []);
  
  const phasesCards = phasesData.map((item) => {
    return (
      
      <PhaseCard style={styles.card} title={item.phaseTitle} desc={item.phaseDescription} val={item.phaseValue} onPress={() => handleCardPress(item)} />
    );
  });

  return (
    <View style={styles.container}>
      <Banner />
      <View style={styles.myScrollView}>
        <Text style={styles.sectionTitle}>Planning and Execution</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {phasesCards}
        </ScrollView>
      </View>
      <View style={styles.techStack}>
        <Text style={{ marginTop:10,textAlign: 'start', paddingLeft: (0.025 * Dimensions.get('window').width), fontSize: 22, fontFamily: 'Poppins-Medium', color:'white' }}> Project TechStack</Text>
        <ProjectTechStack/>
      </View>
      <View style={styles.pointView}>
        <View style={{ width: '45%', backgroundColor: '#393939', borderWidth: 2, borderColor:'#555555', borderRadius: 10,  shadowColor: "#000", shadowOffset: { width: 6, height: 4, }, shadowOpacity: 0.2, shadowRadius: 4, overflow:'hidden'}}>
          <Text style={styles.high_text}>Highlights</Text>
          {highlights.map((highlight, index) => (
            <Text style={styles.container_text}>{highlight}</Text>
      ))}
          
        </View>
        <View style={{ width: '45%', backgroundColor: '#393939', borderWidth: 2, borderColor:'#555555', borderRadius: 10,  shadowColor: "#000", shadowOffset: { width: 6, height: 4, }, shadowOpacity: 0.2, shadowRadius: 4, overflow:'hidden'}}>
          <Text style={styles.high_text}>Future Scope</Text>
          {futureScope.map((scope, index) => (
            <Text style={styles.container_text}>{scope}</Text>
      ))}
        </View>
      </View>

      <PhaseModal 
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}
      phaseCard={selected}/>
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
    flex: 0.25,
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
    flex: 0.85,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20
  },
  sectionTitle: {
    fontSize: 22,
    marginLeft: 15,
    marginTop: 20,
    color: 'white',
    fontFamily: 'Poppins-Medium',
    textAlign: 'left'
  },
  
  high_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#969696',
    textAlign: 'left',
    paddingLeft: 12,
    paddingTop: 12,
    fontWeight: '700',
  },
  container_text:{
    fontFamily: 'Poppins-Light',
    fontSize:12,
    textAlign:'center',
    color:'#efefef',
    marginVertical:8
  }
});

export default HomeScreen;

