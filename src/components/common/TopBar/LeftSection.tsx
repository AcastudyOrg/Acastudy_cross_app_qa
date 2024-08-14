import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AppColor } from '../../../constants/colors';
import { STRING } from '../../../constants/strings';
import { FONT } from '../../../constants';

const LeftSection: React.FC = () => (
	<View style={styles.leftSection}>
		<TextInput
			placeholder = {STRING.searchPlaceholder}
			placeholderTextColor = {AppColor.transparentWhite}
			style = {styles.searchInput}
		/>
	</View>
);

const styles = StyleSheet.create({
	leftSection: {
		flex: 1,
		maxWidth: '100%',
		flexShrink: 1,
	},
	searchInput: {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 10,
		paddingHorizontal: 15,
		color: AppColor.white,
		fontFamily: FONT.plusJakartaRegular,
		height: 40,
		maxWidth: '100%',
		minWidth: '10%',
	},
});

export default LeftSection;
