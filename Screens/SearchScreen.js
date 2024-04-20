import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import axios from 'axios'

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [usersData,setUsersData] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.1.237:3005/api/users`)
      .then(response => {
        setUsersData(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const matchedUsers = searchQuery ? usersData.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];
    setFilteredUsers(matchedUsers);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.header}>Search Users</Text>
        <TextInput
          style={[styles.input, { color: 'white', fontSize: 16, padding: 10 }]} 
          placeholder="Search by First/Last name"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView style={styles.resultsContainer}>
        {filteredUsers.map(user => (
          <View key={user.id} style={styles.card}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
            <View style={{flexDirection:'row',width:'70%',justifyContent:'space-evenly',marginTop:15}}>
                <Text style={{color:'#2B1C59'}}>Language: {user.language}</Text>
                <Text style={{color:'#2B1C59'}}>Version: {user.version}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Dimensions.get('window').height*0.15,
    backgroundColor:'#202020'
  },
  header:{
    fontSize:30,
    fontWeight:'700',
    fontFamily: 'Poppins',
    marginBottom:20,
    color:'#ffffff'
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderColor:'white'
    
  },
  input: {
    width: '80%',
    backgroundColor: '#393939',
    padding: 10,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#555555',
    borderRadius: 20,
    color:'white',
    fontFamily:'Poppins-Medium'
  },
  resultsContainer: {
    width: '100%',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    backgroundColor: '#57409D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 2,
    padding:10,
    borderColor: '#2B1C59',
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: 'white',
    backgroundColor: '#2B1C59',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 20,
  },
  bio: {
    color: 'white',
    fontSize: 13,
    textAlign: 'justify',
    marginTop: 5,
  },
});

export default SearchScreen;
