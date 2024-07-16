import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const TopNav = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={onChangeSearch}
      />
      <Text style={styles.date}>{new Date().toLocaleString()}</Text>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6200ea',
    padding: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    width: '30%',
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    color: 'white',
    marginLeft: 10,
  },
});

export default TopNav;
