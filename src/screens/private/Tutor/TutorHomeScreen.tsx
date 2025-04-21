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

export interface Feedback {
	image: string;
	title: string;
	username: string;
	message: string;
	rating: number;
}

const TutorHomeScreen = () => {
	const amount = [500, 750, 1000, 1650, 750, 1800, 3000];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const totalHours = 21;
	const pendingRequests = 13;
	const acummulatedMoney = 2050;
	const overallRating = 3.6
	const feedbacks: Feedback[] = [
		{
			image: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Amazing Tutor",
			username: "John Doe",
			message: "Great tutor! Helped me a lot with my studies. I was studiing for my finals and he was very helpful with mathematics in my grade 12 year.",
			rating: 3.6,
		},
		{
			image: "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Not sertified",
			username: "Jane Smith",
			message: "The tutor seemed to be clue less as I am.",
			rating: 4,
		},
		{
			image: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Amazing Tutor",
			username: "John Doe",
			message: "Great tutor! Helped me a lot with my studies. I was studiing for my finals and he was very helpful with mathematics in my grade 12 year.",
			rating: 3.6,
		},
		{
			image: "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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