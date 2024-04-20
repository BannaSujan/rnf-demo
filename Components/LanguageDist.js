import { Text,TouchableOpacity,Dimensions,View } from 'react-native'
import { PieChart } from 'react-native-chart-kit';
import React from 'react'
import usersData from '../constants/mockdata';


const languageData = usersData.reduce((acc, user) => {
    acc[user.language] = (acc[user.language] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(languageData).map(key => {
    
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  
    return {
      name: key,
      population: languageData[key],
      color: color,
      legendFontColor: 'white',
      legendFontSize: 15
    };
  });


  
  export default function LanguageDist() {
    return (
        <View style={{borderRadius:10,alignSelf:'center',marginBottom:20}}>
        <Text style={{fontSize:20,fontFamily:'Poppins',color:'white'}}>Language Distribution</Text>
        <View style={{borderRadius: 20,  overflow: 'hidden',backgroundColor: '#2B1C59'}}>
          <PieChart
            data={pieChartData}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              color: (opacity = 1) => `rgba(255, 255,255, ${opacity})`,
              strokeWidth: 2,
            }}
            accessor="population"
            backgroundColor="#2B1C59"
            absolute
          />
        </View>
      </View>
    )
  }