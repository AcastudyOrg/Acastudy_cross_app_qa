import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useScreenWidth from '../../../hooks/useScreenWidth';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { User } from '../../../types/User/Student';
import { topBarComponentStyles } from '../../../styles/componentsStyle/commonStyle/topBarStyle/topBarComponentStyle';

type TopBarProps = {
	showSearchBar?: boolean;
	showAppName?: boolean;
	renderRightSection?: boolean;
	isLSignedIn?: boolean;
	showBecomeATutorOnly?: boolean;
	showBackButton?: boolean;
	user?: User;
};
/*
TopBarComponent
	param: renderLeftSection: boolean -> renders the left side of the top bar, (showAppName: boolean and/or showSearchBar: boolean)
		   renderRightSection: boolean -> renders the right side of the top bar, ( isLSignedIn: boolean, showBecomeATutorOnly: boolean)
										if showBecomeATutorOnly then dont render sign in and signup button
		   

*/
const TopBarComponent: React.FC<TopBarProps> = ({
	showAppName = false,
	showSearchBar = true,
	renderRightSection = true,
	isLSignedIn = true,
	showBecomeATutorOnly = true,
	showBackButton = false,
	user = null,
}) => {
	const navigation = useNavigation<any>();
	const screenWidth = useScreenWidth();

	return (
		<View>
			<View style={topBarComponentStyles.topBar}>
				<LeftSection
					showAppName={showAppName}
					showSearchBar={showSearchBar}
					showBackButton={showBackButton}
				/>
				{renderRightSection && user && (
					<RightSection
						screenWidth={screenWidth}
						user={user}
						navigation={navigation}
						isLSignedIn={isLSignedIn}
						showBecomeATutorOnly={showBecomeATutorOnly}
					/>
				)}
			</View>
			<View style={topBarComponentStyles.divider} />
		</View>
	);
};

export default TopBarComponent;
