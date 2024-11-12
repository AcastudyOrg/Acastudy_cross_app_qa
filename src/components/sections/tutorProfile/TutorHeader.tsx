import React from 'react';
import { View, Text, Image, ImageSourcePropType, Pressable } from 'react-native';
import { tutorHeaderStyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorsHeader';
import GradientButtonComponent from '../../common/Form/GradientButtonComponent';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants';
import CustomIcon from '../../common/CustomIcon';
import { isPlatformIOSorAndroid } from '../../../../utils/config';

interface TutorHeaderProps {
	name: string;
	rating: number;
	reviews: number;
	imageUrl: ImageSourcePropType | string;
}

const TutorHeader: React.FC<TutorHeaderProps> = ({ name, rating, reviews, imageUrl }) => {
	const navigation = useNavigation<any>();

	return (
		<View style={tutorHeaderStyles.container}>
			<View style={tutorHeaderStyles.header}>
				<Image
					source={typeof (imageUrl) === "number" ? imageUrl : { uri: imageUrl }}
					style={tutorHeaderStyles.profileImage}
				/>
				<View style={tutorHeaderStyles.tutorHeaderInfo}>
					<Text style={tutorHeaderStyles.name}>{name}</Text>
					<Text style={tutorHeaderStyles.rating}>{rating} • {reviews} reviews</Text>
				</View>
			</View>
			{!isPlatformIOSorAndroid ?
				<View style={tutorHeaderStyles.requestButton}>
					<GradientButtonComponent
						text={STRING.requestTutor}
						onPress={() => navigation.navigate(NAV_SCREEN_NAME.RequestTutorScreen)}
					/>
				</View>
				:
				<Pressable onPress={() => navigation.navigate(NAV_SCREEN_NAME.RequestTutorScreen)} style={tutorHeaderStyles.requestButtonMobileStyle}>
					<CustomIcon set={'MaterialIcons'} name={'waving-hand'} size={24} color={COLORS.purple} />
				</Pressable>
			}

		</View>
	);

}

export default TutorHeader;