import * as React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-paper';
import TopNav from '../../navigation/TopNav';

const subjects = [
  { name: 'Math', image: 'https://via.placeholder.com/150' },
  { name: 'Science', image: 'https://via.placeholder.com/150' },
  { name: 'History', image: 'https://via.placeholder.com/150' },
  { name: 'Art', image: 'https://via.placeholder.com/150' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView contentContainerStyle={styles.grid}>
        {subjects.map(subject => (
          <View key={subject.name} style={styles.cardContainer}>
            <Card>
              <Card.Cover source={{ uri: subject.image }} />
              <Card.Content>
                <Text>{subject.name}</Text>
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  cardContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    marginBottom: 10,
  },
});

export default HomeScreen;

