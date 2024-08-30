import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { User } from '../../../types/User/Student';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { rightSectionStyles } from '../../../styles/componentsStyle/commonStyle/topBarStyle/rightSectionStyle';


type RightSectionProps = {
	screenWidth: number;
	user?: User;
	navigation: any;
	isLSignedIn?: boolean;
	showBecomeATutorOnly?: boolean;
};

const RightSection: React.FC<RightSectionProps> = ({
	screenWidth,
	user,
	navigation,
	isLSignedIn,
	showBecomeATutorOnly }) => (
	<>
		{isLSignedIn ? (
			<SignedInContent screenWidth={screenWidth} navigation={navigation} user={user} />
		) : (
			<SignedOutContent screenWidth={screenWidth} navigation={navigation} showBecomeATutorOnly={showBecomeATutorOnly} />
		)}
	</>
);

type SignedInContentProps = {
	screenWidth: number;
	user?: User;
	navigation: any;
};

const SignedInContent: React.FC<SignedInContentProps> = ({ screenWidth, user, navigation }) => (
	<View style={rightSectionStyles.rightSection}>
		{screenWidth >= 1086 && (
			<View style={rightSectionStyles.rightSectionbuttons}>
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}>
					<Text style={rightSectionStyles.linkText}> {STRING.becomeATutor} </Text>
				</TouchableOpacity>

				<Text style={rightSectionStyles.linkText}>|</Text>

				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}>
					<Text style={rightSectionStyles.linkText}> {STRING.logout} </Text>
				</TouchableOpacity>
			</View>
		)}
		{user && (
			<View style={rightSectionStyles.profile}>
				<Text style={rightSectionStyles.profileName}>{user.name} {user.surname}</Text>
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.ProfileScreen)}>
					<Image
						source={user.profilePictureUrl}
						style={rightSectionStyles.profilePicture}
					/>
				</TouchableOpacity>
			</View>
		)}
	</View>
);

type SignedOutContentProps = {
	screenWidth: number
	navigation: any;
	showBecomeATutorOnly?: boolean;
};

const SignedOutContent: React.FC<SignedOutContentProps> = ({ screenWidth, navigation, showBecomeATutorOnly = false }) => (
	<View style={rightSectionStyles.rightSection}>
		{screenWidth >= 705 && (
			<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}>
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
