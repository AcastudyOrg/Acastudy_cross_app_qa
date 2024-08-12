import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';

let { width, height } = Dimensions.get('window');

interface TutorBlockProps {
  imageSrc: ImageSourcePropType;
  tutorName: string;
  subject: string;
  rating: number;
}

const TutorBlock: React.FC<TutorBlockProps> = ({ imageSrc, tutorName, subject, rating }) => {
  return (
    <View style={styles.blockContainer}>
      <Image source={imageSrc} style={styles.image} />
      <Text style={styles.tutorName}>{tutorName}</Text>
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.rating}>Rating: {rating}/5</Text>
    </View>
  );
};

const containerWidth = width * .17;
const containerHeight = height * .3;
const styles = StyleSheet.create({
  blockContainer: {
    width: containerWidth,
    height: containerHeight,
    alignItems: 'center',
    margin: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
  image: {
    width: containerWidth * .41,
    height: containerWidth * .4,
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