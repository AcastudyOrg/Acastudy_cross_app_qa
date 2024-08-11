import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface blockProps {imageSrc: ImageSourcePropType, subjectName: string };

const SubjectBlock:React.FC<blockProps>  = ({ imageSrc, subjectName}) => {
  return (
    <View style={styles.blockContainer}>
      <Image source={imageSrc} style={styles.image} />
      <Text style={styles.subjectName}>{subjectName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blockContainer: {
    //flexBasis: '20%',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
  image: {
    width: 220,
    height: 220,
    margin: 10,
    borderRadius: 10,
  },
  subjectName: {
    textAlign: 'center',
    color: '#D9DEF6',
  },
});

export default SubjectBlock;