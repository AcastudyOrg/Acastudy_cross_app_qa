import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {

  return (
    <View style={styles.container}>

        <Text style={styles.menuText}>Home</Text>

        <Text style={styles.menuText}>Study</Text>

        <Text style={styles.menuText}>Calls</Text>

        <Text style={styles.menuText}>Chats</Text>

        <Text style={styles.menuText}>Profile</Text>

        <Text style={styles.requestButtonText}>Request Tutor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 18,
  },
  requestButton: {
    marginTop: 'auto',
    padding: 15,
    backgroundColor: '#6200ea',
    borderRadius: 5,
    alignItems: 'center',
  },
  requestButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Sidebar;
