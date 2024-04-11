import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text } from 'react-native';
import usersData from '../constants/mockdata';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

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
    paddingTop: 150,
  },
  header:{
    fontSize:30,
    fontWeight:'700',
    marginBottom:20
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  resultsContainer: {
    width: '100%',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default SearchScreen;
