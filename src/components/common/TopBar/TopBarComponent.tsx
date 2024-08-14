import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useScreenWidth from '../../../hooks/useScreenWidth';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { User } from '../../../types/User/Student';
import { topBarComponentStyles } from '../../../styles/componentsStyle/commonStyle/topBarStyle/topBarComponentStyle';

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
			<View style={topBarComponentStyles.topBar}>
				{renderLeftSection && <LeftSection />}
				{renderRightSection && user && (
					<RightSection screenWidth={screenWidth} user={user} navigation={navigation} />
				)}
			</View>
			<View style={topBarComponentStyles.divider} />
		</View>
	);
};

export default TopBarComponent;
