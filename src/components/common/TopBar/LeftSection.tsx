import React from 'react';
import { View, TextInput } from 'react-native';

import { AppColor } from '../../../constants/colors';
import { STRING } from '../../../constants/strings';
import { leftSectionStyles } from '../../../styles/componentsStyle/commonStyle/topBarStyle/leftSectionStyle';


const LeftSection: React.FC = () => (
	<View style={leftSectionStyles.leftSection}>
		<TextInput
			placeholder = {STRING.searchPlaceholder}
			placeholderTextColor = {AppColor.transparentWhite}
			style = {leftSectionStyles.searchInput}
		/>
	</View>
);

export default LeftSection;
