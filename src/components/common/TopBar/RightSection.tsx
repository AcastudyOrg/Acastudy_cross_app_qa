import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { User } from '../../../types/User/Student';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { rightSectionStyles } from '../../../styles/componentsStyle/commonStyle/topBarStyle/rightSectionStyle';


type RightSectionProps = {
	screenWidth: number;
	user?: User;
	navigation: any;
};

const RightSection: React.FC<RightSectionProps> = ({ screenWidth, user, navigation }) => (
	<View style={rightSectionStyles.rightSection}>
		{screenWidth >= 1086 && (
			<View style={rightSectionStyles.rightSectionbuttons}>
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}> {/* Todo(Phillip): Put correct screen name*/}
					<Text style={rightSectionStyles.linkText}> {STRING.becomeATutor} </Text>
				</TouchableOpacity>
				<Text style={rightSectionStyles.linkText}>|</Text>
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}>  {/* Todo(Phillip): Put correct screen name*/}
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

export default RightSection;
