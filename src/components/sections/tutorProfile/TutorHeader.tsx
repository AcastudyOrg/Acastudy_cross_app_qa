import React, { useState } from 'react';
import { View, Text, Image, ImageSourcePropType, Pressable } from 'react-native';
import { tutorHeaderStyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorsHeader';
import GradientButtonComponent from '../../common/Form/GradientButtonComponent';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants';
import CustomIcon from '../../common/CustomIcon';
import { isPlatformIOSorAndroid } from '../../../../utils/config';
import EditProfileModal from '@/components/common/EditTutorProfileModal';

interface TutorHeaderProps {
	name: string;
	rating: number;
	reviews: number;
	imageUrl: ImageSourcePropType | string;
	isEditeble?: boolean;
}

const TutorHeader: React.FC<TutorHeaderProps> = ({ name, rating, reviews, imageUrl, isEditeble = false }) => {
	const navigation = useNavigation<any>();
	const [showEditModal, setShowEditModal] = useState(false);
	const [tutorName, setTutorName] = useState(name);
	const [tutorImage, setTutorImage] = useState(imageUrl);

	const handleEditProfile = () => {
		setShowEditModal(true);
	};

	const handleSaveProfile = (updatedName: string, updatedImage: string) => {
		setTutorName(updatedName);
		setTutorImage(updatedImage);
	};

	return (
		<View style={tutorHeaderStyles.container}>
			<View style={tutorHeaderStyles.header}>
				<Image
					source={typeof tutorImage === 'number' ? tutorImage : { uri: tutorImage }}
					style={tutorHeaderStyles.profileImage}
				/>
				{isEditeble &&
					<Pressable style={tutorHeaderStyles.editorIcon} onPress={handleEditProfile}>
						<CustomIcon
							set='Entypo'
							name='edit'
							size={25}
							color={COLORS.white}
						/>
					</Pressable>
				}
				<View style={tutorHeaderStyles.tutorHeaderInfo}>
					<Text style={tutorHeaderStyles.name}>{tutorName}</Text>
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

			<EditProfileModal
				visible={showEditModal}
				onClose={() => setShowEditModal(false)}
				name={tutorName}
				imageUrl={tutorImage}
				onSave={handleSaveProfile}
			/>
		</View>
	);
};

export default TutorHeader;
