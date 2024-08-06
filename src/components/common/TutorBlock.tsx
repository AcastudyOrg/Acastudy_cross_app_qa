import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface TutorBlockProps {
  imageSrc: string;
  tutorName: string;
  subject: string;
  rating: number;
}

const TutorBlock: React.FC<TutorBlockProps> = ({ imageSrc, tutorName, subject, rating }) => {
  return (
    <View style={styles.blockContainer}>
      <Image source={{ uri: imageSrc }} style={styles.image} />
      <Text style={styles.tutorName}>{tutorName}</Text>
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.rating}>Rating: {rating}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blockContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    // width: '45%', 
    // alignItems: 'center',
    // margin: 10,
    // padding: 10,
    // backgroundColor: 'rgba(255,255,255, 0.2)',
    // borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
    margin: 10,
    borderRadius: 10,
  },
  tutorName: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 2,
  },
  subject: {
    fontSize: 14,
    color: '#D9DEF6',
    marginVertical: 2,
  },
  rating: {
    fontSize: 14,
    color: '#888',
    marginVertical: 2,
  },
});

export default TutorBlock;