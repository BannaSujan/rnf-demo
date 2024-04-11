import { Text,TouchableOpacity,Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit';
import React from 'react'


const languageData = usersData.reduce((acc, user) => {
    acc[user.language] = (acc[user.language] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(languageData).map(key => ({
    name: key,
    population: languageData[key],
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));


  
  export default function LanguageDist() {
    return (
        <TouchableOpacity>
        <Text style={{fontSize:20}}>Language Distribution</Text>
        <PieChart
          data={pieChartData}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 1,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </TouchableOpacity>
    )
  }