import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import usersData from '../constants/mockdata';
import Axios from 'axios'

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // useEffect(()=>{
  //   Axios.get('')
  // })

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
          style={styles.input}
          placeholder="Search by first/last name"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView style={styles.resultsContainer}>
        {filteredUsers.map(user => (
          <View key={user.id} style={styles.card}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
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
  },
  resultsContainer: {
    width: '100%',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    height: 150,
    backgroundColor: '#57409D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 2,
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
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default SearchScreen;
