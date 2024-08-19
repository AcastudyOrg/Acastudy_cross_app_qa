import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { AppColor } from '../../../constants/colors';
import { STRING } from '../../../constants/strings';
import { leftSectionStyles } from '../../../styles/componentsStyle/commonStyle/topBarStyle/leftSectionStyle';


type LeftSectionProps = {
	showAppName?: boolean;
	showSearchBar?: boolean;
};


const LeftSection: React.FC<LeftSectionProps> = ({ showAppName = false, showSearchBar = false }) => (
	
	<View style={leftSectionStyles.leftSection}>
		{showAppName && (
				<Text style={leftSectionStyles.appName}> {STRING.appName} </Text>
		)}
		{showSearchBar && (
			<TextInput
				placeholder={STRING.searchPlaceholder}
				placeholderTextColor={AppColor.transparentWhite}
				style={leftSectionStyles.searchInput}
			/>
		)}

	</View>
);

export default LeftSection;
