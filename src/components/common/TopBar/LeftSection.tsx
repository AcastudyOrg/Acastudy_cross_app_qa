import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';

import { COLORS, IMAGES } from '../../../constants';
import { STRING } from '../../../constants/strings';
import { leftSectionStyles } from '../../../styles/componentsStyle/commonStyle/topBarStyle/leftSectionStyle';
import CustomIcon from '../CustomIcon';
import { useNavigation } from '@react-navigation/native';


type LeftSectionProps = {
	showAppName?: boolean;
	showSearchBar?: boolean;
	showBackButton?: boolean;
};


const LeftSection: React.FC<LeftSectionProps> = ({ showAppName, showSearchBar, showBackButton }) => {
	const navigation = useNavigation();
	return (
		<View style={leftSectionStyles.leftSection}>
			{showAppName && (
				<Image source={IMAGES.appLogo} style={leftSectionStyles.logoItem} />
			)}
			<View style={
				showBackButton ?
					leftSectionStyles.horizontalContainerBack
					: leftSectionStyles.horizontalContainer}>
				{showBackButton && (
					<TouchableOpacity onPress={() => navigation.goBack()} style={leftSectionStyles.backIconContainer}>
						<CustomIcon
							set={"Ionicons"}
							name={"chevron-back-outline"}
							size={30}
							color={COLORS.white}
						/>
					</TouchableOpacity>
				)}
				{showSearchBar && (
					<TextInput
						placeholder={STRING.searchPlaceholder}
						placeholderTextColor={COLORS.transparentWhite}
						style={leftSectionStyles.searchInput}
					/>
				)}
			</View>

		</View>
	);
}

export default LeftSection;
