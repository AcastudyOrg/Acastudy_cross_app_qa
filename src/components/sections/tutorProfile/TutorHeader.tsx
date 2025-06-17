import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { tutorHeaderStyles } from '@/styles/componentsStyle/sectionsStyle/tutorsProfile/tutorsHeader';
import GradientButtonComponent from '@/components/common/Form/GradientButtonComponent';
import { NAV_SCREEN_NAME, STRING } from '@/constants/strings';
import { COLORS } from '@/constants';
import CustomIcon from '@/components/common/CustomIcon';

import { isPlatformIOSorAndroid } from '@/../utils/config';
import EditProfileModal from '@/components/common/EditTutorProfileModal';
import { UserType } from '@/types/User/User';
import { imageSource } from '@/helpers/helpers';

interface TutorHeaderProps {
	user: UserType
	rating: number;
	reviews: number;
	isEditeble?: boolean;
}

const TutorHeader: React.FC<TutorHeaderProps> = ({ user, rating, reviews, isEditeble = false }) => {
	const navigation = useNavigation<any>();
	const [showEditModal, setShowEditModal] = useState(false);

	const handleEditProfile = () => {
		setShowEditModal(true);
	};
	return (
		<View style={tutorHeaderStyles.container}>
			<View style={tutorHeaderStyles.header}>
				<Image
					source={imageSource(user?.imageUrl)}
					style={tutorHeaderStyles.profileImage}
				/>
				{isEditeble &&
					<Pressable style={tutorHeaderStyles.editorIcon} onPress={handleEditProfile}>
						<CustomIcon
							set='Entypo'
							name='edit'
							size={16}
							color={COLORS.white}
						/>
					</Pressable>
				}
				<View style={tutorHeaderStyles.tutorHeaderInfo}>
					<Text style={tutorHeaderStyles.name}>{user?.firstName +" "+ user?.lastName}</Text>
					<Text style={tutorHeaderStyles.rating}>{rating} • {reviews} reviews</Text>
				</View>
			</View>

			{!isPlatformIOSorAndroid() ?
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
				user={user}
			/>
		</View>
	);
};

export default TutorHeader;
