import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';

import { COLORS, IMAGES } from '../../../constants';
import { STRING } from '../../../constants/strings';
import { leftSectionStyles } from '../../../styles/componentsStyle/commonStyle/topBarStyle/leftSectionStyle';


type LeftSectionProps = {
	showAppName?: boolean;
	showSearchBar?: boolean;
};


const LeftSection: React.FC<LeftSectionProps> = ({ showAppName, showSearchBar }) => (
	<View style={leftSectionStyles.leftSection}>
		{showAppName && (
			<Image source={IMAGES.appLogo} style={leftSectionStyles.logoItem} />
		)}
		{showSearchBar && (
			<TextInput
				placeholder={STRING.searchPlaceholder}
				placeholderTextColor={COLORS.transparentWhite}
				style={leftSectionStyles.searchInput}
			/>
		)}

	</View>
);

export default LeftSection;
