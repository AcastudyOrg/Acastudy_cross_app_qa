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
	showSearchBar?: boolean;
	showAppName?: boolean;
	renderRightSection?: boolean;
	user?: User;
};

const TopBarComponent: React.FC<TopBarProps> = ({
	renderLeftSection = true,
	showAppName = true,
	showSearchBar = true,
	renderRightSection = true,
	user = null,
}) => {
	const navigation = useNavigation<any>();
	const screenWidth = useScreenWidth();

	return (
		<View>
			<View style={topBarComponentStyles.topBar}>
				{renderLeftSection && 
				<LeftSection  showAppName={showAppName} showSearchBar={showSearchBar}/>
				}
				{renderRightSection && user && (
					<RightSection screenWidth={screenWidth} user={user} navigation={navigation} />
				)}
			</View>
			<View style={topBarComponentStyles.divider} />
		</View>
	);
};

export default TopBarComponent;
