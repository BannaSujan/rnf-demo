
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser'
import InsightsScreen from '../Screens/InsightsScreens';
import SearchScreen from '../Screens/SearchScreen';

const AuthContext = React.createContext(null);
WebBrowser.maybeCompleteAuthSession();

// This function initializes Google authentication
const useGoogleAuthentication = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    webClientId:'967662297559-ihp1ksa1argvp5igr9bl01vo32lcb3hg.apps.googleusercontent.com',
    iosClientId:'967662297559-v57ns5b4hiqkd510kpapi8gf78phso44.apps.googleusercontent.com',
    androidClientId:'967662297559-pclf8996218fmos9l4cbqtj4is80t9ao.apps.googleusercontent.com'
});

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      // Here you would typically verify the ID token and extract user details
      // For this example, we're just logging to the console
      console.log('Authentication successful:', id_token);
    }
  }, [response]);

  return [promptAsync, response];
};

// This component wraps around the screens that require authentication
export default AuthWrapper = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [promptAsync, response] = useGoogleAuthentication();

  useEffect(() => {
    if (response?.type === 'success') {
      setIsAuthenticated(true);
    }
  }, [response]);

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You must sign in to access this page</Text>
        <Button title="Sign In with Google" onPress={() => promptAsync()} />
      </View>
    );
  }

  if(props.screenName === "Insights"){

    return (
      <AuthContext.Provider value={{ isAuthenticated }}>
        <InsightsScreen/>
      </AuthContext.Provider>
    );
  }
  else if(props.screenName === "Search"){

    return (
      <AuthContext.Provider value={{ isAuthenticated }}>
        <SearchScreen/>
      </AuthContext.Provider>
    );
  }
};


