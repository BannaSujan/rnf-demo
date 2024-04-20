import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import {  BarChart } from 'react-native-chart-kit';
import usersData from '../constants/mockdata';

export default function BioWordCountDist() {

const versionRanges = {};
usersData.forEach(user => {
  const range = `${Math.floor(user.version)}-${Math.floor(user.version) + 1}`;
  versionRanges[range] = (versionRanges[range] || 0) + 1;
});

const versionDistributionData = {
  labels: Object.keys(versionRanges),
  datasets: [{
    data: Object.values(versionRanges),
  }],
};

  return (
    <View style={{alignSelf:'center',marginBottom:20}}>
        <Text style={{fontSize:20, fontFamily:'Poppins',color:'white'}}>Version Distribution by Range</Text>
        <View style={{borderRadius: 20,  overflow: 'hidden',backgroundColor: '#2B1C59'}}>

            <BarChart
            data={versionDistributionData}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisLabel=""
            chartConfig={{
            backgroundColor: '#2B1C59',  
            backgroundGradientFrom: '#2B1C59',  
            backgroundGradientTo: '#2B1C59', 
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,  
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,  
            strokeWidth: 2 
            }}
            backgroundColor="#2B1C59"  
            verticalLabelRotation={0}
        />
        </View>
      </View>
  )
}