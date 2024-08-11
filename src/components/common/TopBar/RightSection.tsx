import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { User } from '../../../types/User/Student';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { AppColor } from '../../../constants/colors';

type RightSectionProps = {
	screenWidth: number;
	user?: User;
	navigation: any;
};

const RightSection: React.FC<RightSectionProps> = ({ screenWidth, user, navigation }) => (
	<View style={styles.rightSection}>
		{screenWidth >= 1074 && (
			<View style={styles.rightSectionbuttons}>
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}> {/* Todo(Phillip): Put correct screen name*/}
					<Text style={styles.linkText}> {STRING.becomeATutor} </Text>
				</TouchableOpacity>
				<Text style={styles.linkText}>|</Text>
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}>  {/* Todo(Phillip): Put correct screen name*/}
					<Text style={styles.linkText}> {STRING.logout} </Text>
				</TouchableOpacity>
			</View>
		)}
		{user && (
			<View style={styles.profile}>
				<Text style={styles.profileName}>{user.name} {user.surname}</Text>
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.ProfileScreen)}>
					<Image
						source={user.profilePictureUrl}
						style={styles.profilePicture}
					/>
				</TouchableOpacity>
			</View>
		)}
	</View>
);

const styles = StyleSheet.create({
	rightSection: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexShrink: 1,
		flexWrap: 'wrap'
	},
	rightSectionbuttons: {
		flexDirection: 'row',
		marginRight: 40,
	},
	linkText: {
		paddingBottom: 2,
		color: AppColor.white,
		fontWeight: 'bold',
		marginHorizontal: 10,
	},
	profile: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	profileName: {
		color: AppColor.white,
		marginRight: 10,
	},
	profilePicture: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
});

export default RightSection;
