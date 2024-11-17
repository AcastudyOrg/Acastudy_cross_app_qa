import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { STRING } from "../../constants/strings";
import upcomingEventsData from '../../../assets/data/home/upcomingEventsData.json'
import profileHistoryTableData from "../../../assets/data/profile/profileHistoryTableData.json";
import { profileScreenStyles } from "../../styles/screensStyle/privateStyle/profileScreenStyle";

import { PrivateScreenLayout } from "../../components";
import UpcomingSessionComponent from "../../components/sections/userProfile/UpcomingSessionComponent";
import ReviewPastMeetingsComponent from "../../components/sections/userProfile/ReviewPastMeetingsComponent";
import TopProfileComponent from "../../components/sections/userProfile/TopProfileComponent";
import PersonalInformationComponent from "../../components/sections/userProfile/PersonalInformationComponent";
import StudentSubjectOfInterest from "../../components/sections/userProfile/StudentSubjectOfInteret";
import { LoginMockUser } from "../../../mockData/LoginUser";
import { isPlatformIOSorAndroid } from "../../../utils/config";
import MeetingPopUpModel from "../../components/common/MeetingPopupModel/MeetingPopUpModel";


interface UpcomingEvent {

	id: number;
	thumbnail: string;
	title: string;
	tutor: string;
	datetime: string;
	category: string;
	description: string;

}
const StudentProfileScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedItem, setSelectedItem] = useState<UpcomingEvent | null>(null);

	const controlModal = () => {
		setModalVisible(!modalVisible);
		if (modalVisible) {
			setSelectedItem(null);
		}
	};

	const handleSessionPress = (item: UpcomingEvent) => {
		setSelectedItem(item);
		setModalVisible(true);
	};

	return (
		<PrivateScreenLayout showTopBar={false} mobileShowAppLogo={false}>
			<View style={profileScreenStyles.homeMainContainer}>
				<TopProfileComponent />
				<PersonalInformationComponent />
				<StudentSubjectOfInterest subjects={LoginMockUser.subjects ?? []} />

				<View style={profileScreenStyles.titleTextItemContainer}>
					<Text style={profileScreenStyles.titleTextItem}>
						{STRING.upcomingScreenTitle}
					</Text>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={profileScreenStyles.upcomingItemContainer}
					>
						{upcomingEventsData.map((item) => (
							<View key={item.id}>
								<UpcomingSessionComponent
									item={item}
									onPress={() => handleSessionPress(item)}
								/>
							</View>
						))}
					</ScrollView>
				</View>

				{/* Conditionally show the "Review Past Meetings" section */}
				{!isPlatformIOSorAndroid() && (
					<View style={profileScreenStyles.titleTextItemContainer}>
						<Text style={profileScreenStyles.titleTextItem}>
							{STRING.reviewPastMeetingTitle}
						</Text>
						<ReviewPastMeetingsComponent
							data={profileHistoryTableData.tableData}
						/>
					</View>
				)}
			</View>

			{selectedItem && (
				<MeetingPopUpModel
					visible={modalVisible}
					controlModal={controlModal}
					item={selectedItem}
				/>
			)}
		</PrivateScreenLayout>
	);
};

export default StudentProfileScreen;
