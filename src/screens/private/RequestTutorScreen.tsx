import React from 'react';
import { View } from 'react-native';

import PrivateScreenLayout from '../../components/layout/PrivateScreenLayout';
import { isNotDesktop } from '../../../utils/config';
import useScreenWidth from '../../hooks/useScreenWidth';
import TutorRequestForm from '../../components/common/TutorRequestForm/TutorRequestForm';
import { STRING } from '../../constants/strings';

const RequestTutorScreen = () => {
	const screenWidth = useScreenWidth();
	const notDesktop = isNotDesktop(screenWidth);
	return (
		<PrivateScreenLayout
			showBackButton={true}
			showTitle={true}
			shouldScroll={false}
			title={STRING.requestTutor}
			showSearchBar={false}
		>
			<View >
				<TutorRequestForm />
			</View>
		</PrivateScreenLayout>
	);
};

export default RequestTutorScreen;
