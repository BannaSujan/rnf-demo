import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import {  BarChart } from 'react-native-chart-kit';
import usersData from '../constants/mockdata';

export default function VersionDistributionDist() {


  // Bio Word Count (Bar Chart)
  const stopwords = ['the', 'and', 'a', 'to', 'of', 'in', 'i', 'is', 'that', 'on', 'for', 'with', 'as', 'this', 'it', 'are', 'was', 'but', 'be', 'at', 'by', 'from', 'an', 'or', 'not', 'such', 'into', 'than', 'itself', 'all', 'other', 'has', 'its', 'if', 'more', 'him', 'no', 'nor', 'do', 'then', 'so', 'can', 'did', 'their', 'these'];

  // Count the occurrences of each non-stopword in all bios
  const wordFrequencies = usersData.reduce((acc, user) => {
    user.bio.toLowerCase().replace(/[\W_]+/g, ' ').split(' ').forEach(word => {
      if (!stopwords.includes(word) && word) {
        acc[word] = (acc[word] || 0) + 1;
      }
    });
    return acc;
  }, {});
  
  // Sort the words by frequency and take the top ten
  const topTenWords = Object.entries(wordFrequencies).sort((a, b) => b[1] - a[1]).slice(0, 10);
  
  // Prepare the data for the chart
  const bioWordCountData = {
    labels: topTenWords.map(word => word[0]), // Word text
    datasets: [{
      data: topTenWords.map(word => word[1]), // Word frequency
    }],
  };

  return (
    <View style={{alignSelf:'center',marginBottom:20}}>
        <Text style={{fontSize:20, fontFamily:'Poppins',color:'white'}}>Top words used in Bio</Text>
        <View style={{borderRadius: 20,  overflow: 'hidden',backgroundColor: '#2B1C59'}}>

            <BarChart
            data={bioWordCountData}
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
            strokeWidth: 2 
            }}
            backgroundColor="#2B1C59"  
            verticalLabelRotation={20}
        />
        </View>
      </View>

  )
}