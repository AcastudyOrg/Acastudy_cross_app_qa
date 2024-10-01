import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { tutorHeaderStyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorsHeader';
import GradientButtonComponent from '../../common/Form/GradientButtonComponent';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { useNavigation } from '@react-navigation/native';

interface TutorHeaderProps {
  name: string;
  rating: number;
  reviews: number;
  imageUrl: ImageSourcePropType;
}

const TutorHeader: React.FC<TutorHeaderProps> = ({ name, rating, reviews, imageUrl }) => (
  <View style={tutorHeaderStyles.container}>
    <View style={tutorHeaderStyles.header}>
      <Image source={imageUrl} style={tutorHeaderStyles.profileImage} />
      <View style={tutorHeaderStyles.tutorHeaderInfo}>
        <Text style={tutorHeaderStyles.name}>{name}</Text>
        <Text style={tutorHeaderStyles.rating}>{rating} • {reviews} reviews</Text>
      </View>
    </View>
    <View style={tutorHeaderStyles.requestButton}>
      <GradientButtonComponent
        text={STRING.requestTutor}
        onPress={() => { }}
      />
    </View>
  </View>
);

export default TutorHeader;