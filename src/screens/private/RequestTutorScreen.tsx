import React, { useState } from 'react';
import { View} from 'react-native';

import PrivateScreenLayout from '../../components/layout/PrivateScreenLayout';
import { isNotDesktop } from '../../../utils/config';
import useScreenWidth from '../../hooks/useScreenWidth';
import TutorRequestForm from '../../components/common/TutorRequestForm/TutorRequestForm';

const RequestTutorScreen = () => {
	const [description, setDescription] = useState("");
	const screenWidth = useScreenWidth();
	const notDesktop = isNotDesktop(screenWidth);
	return (
		<PrivateScreenLayout showBackButton={true} showSearchBar={false}>
			<View >
				{/* <RequestTutorRowSection />
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
				</View> */}
				<TutorRequestForm />
			</View>
		</PrivateScreenLayout>
	);
};

export default RequestTutorScreen;
