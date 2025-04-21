import React from "react";
import upcomingEventsData from '../../../../assets/data/home/upcomingEventsData.json';
import { PrivateScreenLayout } from "../../../components";
import { VIEW_MODE } from "@/constants/strings";
import EventsSection from "@/components/sections/home/EventsSection";
import { AvailablilityCalender } from "@/components/common/AvailablilityCalender";
import { View, Text, ScrollView } from "react-native";
import { tutorHomeScreenStyle } from "@/styles/screensStyle/privateStyle/tutorHomeScreenStyle";
import TutorGeneratedMoneyChart from "@/components/sections/home/TutorGeneratedMoneyChart";
import { MetricBoard } from "@/components/sections/home/MetricBoard";
import fontFamily from "@/constants/fontFamily";
import { COLORS } from "@/constants";
import { ReviewIcons } from "@/components/common/ReviewIcons";
import FeedbackSection from "@/components/sections/home/FeedbackSection";


const TutorHomeScreen = () => {

	// mock data for the chart
	const amount = [500, 750, 1000, 1650, 750, 1800, 3000];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const totalHours = 21;
	const pendingRequests = 13;
	const acummulatedMoney = 2050;
	const overallRating = 3.6
	const feedbacks = [
		{
			image: "https://example.com/image1.jpg",
			title: "Amazing Tutor",
			username: "John Doe",
			message: "Great tutor! Helped me a lot with my studies.",
			rating: 3.6,
		},
		{
			image: "https://example.com/image1.jpg",
			title: "Not sertified",
			username: "Jane Smith",
			message: "The tutor seemed to be clue less as I am.",
			rating: 4,
		},
	]

	return (
		<PrivateScreenLayout viewMode={VIEW_MODE.tutorView}>
			<EventsSection showButton upcomingEventsData={upcomingEventsData} />
			<View style={tutorHomeScreenStyle.horizontalDevider}>
				<MetricBoard totalHours={totalHours} pendingRequests={pendingRequests} acummulatedMoney={acummulatedMoney} />
				<TutorGeneratedMoneyChart totalAmount={amount} months={months} />
			</View>

			<View style={tutorHomeScreenStyle.horizontalDevider}>
				<AvailablilityCalender onDateSelect={() => { console.log("pressed") }} />
				<FeedbackSection overallRating={overallRating} feedbacks={feedbacks} />
			</View>
		</PrivateScreenLayout>
	);
};

export default TutorHomeScreen;