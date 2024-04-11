import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import InsightsScreen from './Screens/InsightsScreens';
import AuthWrapper from './Utilities/AuthWrapper';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Assign a different icon based on the route name
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'More Insights') {
            iconName = focused ? 'analytics-sharp' : 'analytics-outline';
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFCDB2', 
        tabBarInactiveTintColor: 'white', 
        tabBarStyle: { backgroundColor: 'black' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Search" options={{headerShown:false}}/*component={SearchScreen}*/>
        {() => (
            <AuthWrapper  screenName="Search">
              {SearchScreen}
            </AuthWrapper>
          )}
      </Tab.Screen>
      <Tab.Screen name="More Insights" /*component={InsightsScreen}*/>
        {() => (
            <AuthWrapper  screenName="Insights">
              {InsightsScreen}
            </AuthWrapper>
          )}
      </Tab.Screen>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
