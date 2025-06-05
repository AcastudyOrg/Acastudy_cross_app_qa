import React from "react";
import upcomingEventsData from '../../../../assets/data/home/upcomingEventsData.json';
import { PrivateScreenLayout } from "../../../components";
import { VIEW_MODE } from "@/constants/strings";
import EventsSection from "@/components/sections/home/EventsSection";
import { AvailablilityCalender } from "@/components/common/AvailablilityCalender";
import { View } from "react-native";
import { tutorHomeScreenStyle } from "@/styles/screensStyle/privateStyle/tutorHomeScreenStyle";
import TutorGeneratedMoneyChart from "@/components/sections/home/TutorGeneratedMoneyChart";
import { MetricBoard } from "@/components/sections/home/MetricBoard";
import FeedbackSection from "@/components/sections/home/FeedbackSection";
import { studentsFeedback } from "mockData/studentFeedbacks";
import { matricsData } from "mockData/matricsData";

export interface Feedback {
	image: string;
	title: string;
	username: string;
	message: string;
	rating: number;
}

const TutorHomeScreen = () => {
	// mock data
	const matricBoardData = matricsData
	const feedbacks: Feedback[] = studentsFeedback

	return (
		<PrivateScreenLayout >
			<EventsSection showButton upcomingEventsData={upcomingEventsData} viewMode={VIEW_MODE.tutorView} />
			<View style={tutorHomeScreenStyle.horizontalDevider}>
				<MetricBoard totalHours={matricBoardData.totalHours} pendingRequests={matricBoardData.pendingRequests} acummulatedMoney={matricBoardData.acummulatedMoney} />
				<TutorGeneratedMoneyChart totalAmount={matricBoardData.amount} months={matricBoardData.months} />
			</View>

			<View style={tutorHomeScreenStyle.horizontalDevider}>
				<AvailablilityCalender onDateSelect={() => { console.log("pressed") }} />
				<FeedbackSection overallRating={matricBoardData.overallRating} feedbacks={feedbacks} />
			</View>
		</PrivateScreenLayout>
	);
};

export default TutorHomeScreen;