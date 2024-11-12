import React, { useState } from 'react';
import { View, Text} from 'react-native';

import CustomTextAreaInput from '../../components/common/Form/CustomTextAreaInput';
import GradientButtonComponent from '../../components/common/Form/GradientButtonComponent';
import PrivateScreenLayout from '../../components/layout/PrivateScreenLayout';
import { requestTutorStyles } from '../../styles/screensStyle/privateStyle/requestTutorStyle';
import RequestTutorRowSection from './RequestTutorRowSection';
import { STRING } from '../../constants/strings';
import { isNotDesktop } from '../../../utils/config';
import useScreenWidth from '../../hooks/useScreenWidth';
import CustomCalendar from '../../components/common/CustomCalendar';
import { tutorData } from '../../../mockData/TutorData';

const RequestTutorScreen = () => {
	const [description, setDescription] = useState("");
	const screenWidth = useScreenWidth();
	const notDesktop = isNotDesktop(screenWidth);
	return (
		<PrivateScreenLayout showBackButton={true} showSearchBar={false}>
			<View style={[requestTutorStyles.container, { marginBottom: notDesktop ? "20%" : 20 }]}>
				<RequestTutorRowSection />
				<View style={requestTutorStyles.textAreaContainer}>
					<CustomTextAreaInput
						label={STRING.description}
						placeholder={STRING.descriptionHendler}
						value={description}
						onChange={setDescription}
					/>
				</View>
				<View style={requestTutorStyles.input}>
					<Text style={requestTutorStyles.availabilityLabel}>{STRING.selectDate}</Text>
					<View>
						<CustomCalendar selectedDates={tutorData.bookedDays} isClickable={true}/>
					</View>
            	</View>
				<View style={requestTutorStyles.requestTutorButton}>
					<GradientButtonComponent text={STRING.requestTutor} onPress={() => console.log("Pressed")} />
				</View>
			</View>
		</PrivateScreenLayout>
	);
};

export default RequestTutorScreen;
