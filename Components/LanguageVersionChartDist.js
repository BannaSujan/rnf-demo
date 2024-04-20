import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import {  LineChart } from 'react-native-chart-kit';
import usersData from '../constants/mockdata';

export default function LanguageVersionChartDist() {

    // Language vs. Version (Line Chart for demonstration, not an ideal representation for scatter plot)
const languageVersionData = usersData.map(user => ({
    language: user.language,
    version: user.version,
  }));
  // Group by language and average versions (for simplicity)
  const languageVersionAverage = languageVersionData.reduce((acc, { language, version }) => {
    if (!acc[language]) {
      acc[language] = { total: 0, count: 0 };
    }
    acc[language].total += version;
    acc[language].count += 1;
    return acc;
  }, {});
  const languageVersionChartData = {
    labels: Object.keys(languageVersionAverage),
    datasets: [
      {
        data: Object.values(languageVersionAverage).map(({ total, count }) => (total / count).toFixed(2)),
      },
    ],
  };

  return (
    <View style={{alignSelf:'center', marginBottom:100}}>
        <Text style={{fontSize:20, fontFamily:'Poppins',color:'white'}}>Language vs. Version</Text>
        <View style={{borderRadius: 20,  overflow: 'hidden',backgroundColor: '#2B1C59'}}>

        <LineChart
    data={languageVersionChartData}
    width={Dimensions.get('window').width - 16}
    height={Dimensions.get('window').height * 0.25}
    yAxisLabel=""
    chartConfig={{
        backgroundColor: '#2B1C59',
        backgroundGradientFrom: '#2B1C59',
        backgroundGradientTo: '#2B1C59',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        labelFontFamily: 'Poppins',
    }}
    backgroundColor="#2B1C59"
    verticalLabelRotation={20}
/>
        </View>
      </View>
  )
}