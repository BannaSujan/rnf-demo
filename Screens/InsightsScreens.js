import React from 'react';
import { View, Text, Dimensions, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart, BarChart,LineChart } from 'react-native-chart-kit';
import usersData from '../constants/mockdata';
import LanguageDist from '../Components/LanguageDist';

const InsightsScreen = () => {
  

  // Process data for Version Distribution (Bar Chart)
  // Version Distribution (Bar Chart) with range categorization
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
    <ScrollView>
      <LanguageDist/>

      <View>
  <Text>Version Distribution by Range</Text>
  <BarChart
    data={versionDistributionData}
    width={Dimensions.get('window').width - 16}
    height={220}
    yAxisLabel=""
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    }}
    verticalLabelRotation={30}
  />
</View>

<View style={{margin:'10'}}>
  <Text>Bio Word Count</Text>
  <BarChart
    data={bioWordCountData}
    width={Dimensions.get('window').width - 16}
    height={220}
    yAxisLabel=""
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    }}
    verticalLabelRotation={30}
  />
</View>

<View>
  <Text>Language vs. Version</Text>
  <LineChart
    data={languageVersionChartData}
    width={Dimensions.get('window').width - 16}
    height={220}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    }}
  />
</View>
    </ScrollView>
  );
};
export default InsightsScreen;
