import React from 'react';
import { View, Text, Dimensions, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import LanguageDist from '../Components/LanguageDist';
import BioWordCountDist from '../Components/BioWordCountDist';
import VersionDistributionDist from '../Components/VersionDistributionDist'
import LanguageVersionChartDist from '../Components/LanguageVersionChartDist';

const InsightsScreen = () => {
  
  return (
    <ScrollView style={styles.container}>
      <LanguageDist />
      <BioWordCountDist />
      <VersionDistributionDist />
      <LanguageVersionChartDist />
    </ScrollView>
  );
};
export default InsightsScreen;

const styles=StyleSheet.create({
  container:{
    alignContent:'center',
    flex:2,
    backgroundColor:'#202020',
    paddingHorizontal:20,
    paddingTop:80
  }
})
