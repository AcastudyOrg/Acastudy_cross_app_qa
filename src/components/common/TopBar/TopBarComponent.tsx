import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useScreenWidth from '../../../hooks/useScreenWidth';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { User } from '../../../types/User/Student';
import { AppColor } from '../../../constants/colors';
import { COLORS } from '../../../constants';

type TopBarProps = {
	renderLeftSection?: boolean;
	renderRightSection?: boolean;
	user?: User;
};

const TopBarComponent: React.FC<TopBarProps> = ({
	renderLeftSection = true,
	renderRightSection = true,
	user = null,
}) => {
	const navigation = useNavigation<any>();
	const screenWidth = useScreenWidth();

	return (
		<View>
			<View style={styles.topBar}>
				{renderLeftSection && <LeftSection />}
				{renderRightSection && user && (
					<RightSection screenWidth={screenWidth} user={user} navigation={navigation} />
				)}
			</View>
			<View style={styles.divider} />
		</View>
	);
};

const styles = StyleSheet.create({
	topBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 40,
		paddingBottom: 10,
		paddingTop: 20,
		backgroundColor: AppColor.transparent,
	},
	divider: {
		width: "92%",
		height: 0.5,
		backgroundColor: COLORS.white,
		alignSelf: "center",
		marginTop: 5,
		opacity: 0.2,
	},
});

export default TopBarComponent;
