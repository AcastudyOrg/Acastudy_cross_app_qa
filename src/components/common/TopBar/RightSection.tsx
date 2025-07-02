import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { NAV_SCREEN_NAME, STRING, VIEW_MODE } from '@/constants/strings';
import { rightSectionStyles } from '@/styles/componentsStyle/commonStyle/topBarStyle/rightSectionStyle';
import { updateAuthStorage } from "@/navigation";
import { UserType } from '@/types/User/User';
import { IMAGES } from '@/constants';
import WarningModal from '../models/WarningModel';
import { useGetUser } from '@/graphql/hooks/user';


type RightSectionProps = {
	screenWidth: number;
	navigation: any;
	isLSignedIn?: boolean;
	viewMode?: string;
	showBecomeATutorOnly?: boolean;
};

const RightSection: React.FC<RightSectionProps> = ({
	screenWidth,
	navigation,
	isLSignedIn,
	viewMode,
	showBecomeATutorOnly }) => {
	const { user } = useGetUser();
	return (
		<>
			{isLSignedIn ? (
				<SignedInContent screenWidth={screenWidth} navigation={navigation} user={user} viewMode={viewMode} />
			) : (
				<SignedOutContent screenWidth={screenWidth} navigation={navigation} showBecomeATutorOnly={showBecomeATutorOnly} />
			)}
		</>
	);
}

type SignedInContentProps = {
	screenWidth: number;
	user?: UserType;
	navigation: any;
	viewMode?: string;
};

const SignedInContent: React.FC<SignedInContentProps> = ({ screenWidth, user, navigation, viewMode }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const handleLogout = async () => {
		await updateAuthStorage('token');
		await updateAuthStorage('refreshToken');
		await updateAuthStorage('userId');
		await updateAuthStorage('role');
		setModalVisible(false);
	};

	return (
		<View style={rightSectionStyles.rightSection}>
			{screenWidth >= 1086 && (
				<View style={rightSectionStyles.rightSectionbuttons}>
					{viewMode === VIEW_MODE.studentView && (

						<>
							<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.OnboardingScreen)}>
								<Text style={rightSectionStyles.linkText}> {STRING.becomeATutor} </Text>
							</TouchableOpacity>

							<Text style={rightSectionStyles.linkText}>|</Text>
						</>
					)}

					<TouchableOpacity onPress={() => setModalVisible(true)}>
						<Text style={rightSectionStyles.linkText}> {STRING.logout} </Text>
					</TouchableOpacity>
				</View>
			)}
			{user && (
				<View style={rightSectionStyles.profile}>
					<Text style={rightSectionStyles.profileName}>{user.firstName} {user.lastName}</Text>
					<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.ProfileScreen)}>
						<Image
							source={user?.imageUrl ? { uri: user?.imageUrl } : IMAGES.userPlaceholder}
							style={rightSectionStyles.profilePicture}
						/>
					</TouchableOpacity>
				</View>
			)}

			<WarningModal
				heading={STRING.logout}
				description={STRING.logoutDescription}
				onPositive={handleLogout}
				positiveText="Logout"
				onNegative={() => setModalVisible(false)}
				negativeText="Cancel"
				visible={modalVisible}
			/>
		</View>
	);
}

type SignedOutContentProps = {
	screenWidth: number
	navigation: any;
	showBecomeATutorOnly?: boolean;
};

const SignedOutContent: React.FC<SignedOutContentProps> = ({ screenWidth, navigation, showBecomeATutorOnly = false }) => (
	<View style={rightSectionStyles.rightSection}>
		{screenWidth >= 705 && (
			<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.SignUpScreen, { role: 'TUTOR' })}>
				<Text style={rightSectionStyles.linkText}>{STRING.becomeATutor}</Text>
			</TouchableOpacity>
		)}

		{!showBecomeATutorOnly && (
			<>
				{screenWidth >= 705 && (
					<Text style={rightSectionStyles.linkText}>|</Text>
				)}
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.SignInScreen)}>
					<Text style={rightSectionStyles.linkText}>{STRING.signIn}</Text>
				</TouchableOpacity>

				<Text style={rightSectionStyles.linkText}>|</Text>

				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.SignUpScreen)}>
					<Text style={rightSectionStyles.linkText}>{STRING.signUp}</Text>
				</TouchableOpacity>
			</>
		)}
	</View>

);

export default RightSection;
