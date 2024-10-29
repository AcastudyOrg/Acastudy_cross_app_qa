import React, { useState } from 'react';
import { View, ScrollView, } from 'react-native';

import CustomTextAreaInput from '../../components/common/Form/CustomTextAreaInput';
import GradientButtonComponent from '../../components/common/Form/GradientButtonComponent';
import PrivateScreenLayout from '../../components/layout/PrivateScreenLayout';
import { requestTutorStyles } from '../../styles/screensStyle/privateStyle/requestTutorStyle';
import RequestTutorDateTimeComponent from './RequestTutorDateTimeComponent';
import RequestTutorRowSection from './RequestTutorRowSection';
import { STRING } from '../../constants/strings';

const RequestTutorScreen = () => {
	const [description, setDescription] = useState("");
	return (
		<PrivateScreenLayout showBackButton={true} showSearchBar={false}>
			<ScrollView style={requestTutorStyles.container}>
				<RequestTutorRowSection />
				<View style={requestTutorStyles.textAreaContainer}>
					<CustomTextAreaInput
						label={STRING.description}
						placeholder={STRING.descriptionHendler}
						value={description}
						onChange={setDescription}
					/>
				</View>
				<RequestTutorDateTimeComponent />
				<View style={requestTutorStyles.requestTutorButton}>
					<GradientButtonComponent text={STRING.requestTutor} onPress={() => console.log("Pressed")} />
				</View>
			</ScrollView>
		</PrivateScreenLayout>
	);
};

export default RequestTutorScreen;
