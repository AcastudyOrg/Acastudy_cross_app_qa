import React from "react";
import upcomingEventsData from '../../../../assets/data/home/upcomingEventsData.json';
import { PrivateScreenLayout } from "../../../components";
import { VIEW_MODE } from "@/constants/strings";
import EventsSection from "@/components/sections/home/EventsSection";
import { AvailablilityCalender } from "@/components/common/AvailablilityCalender";
import { View, } from "react-native";
import { tutorHomeScreenStyle } from "@/styles/screensStyle/privateStyle/tutorHomeScreenStyle";
import TutorGeneratedMoneyChart from "@/components/sections/home/TutorGeneratedMoneyChart";


const TutorHomeScreen = () => {

	const amount = [500, 750, 1000, 1650, 750, 1800, 3000, 0, 0, 0, 0, 0];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	return (
		<PrivateScreenLayout viewMode={VIEW_MODE.tutorView}>
			<EventsSection showButton upcomingEventsData={upcomingEventsData} />
			<View style={tutorHomeScreenStyle.horizontalDevider}>
				<AvailablilityCalender onDateSelect={ function (date: string): void { console.log("pressed") } } />
				<TutorGeneratedMoneyChart totalAmount={amount} months={months}/>
			</View>

			<View style={tutorHomeScreenStyle.horizontalDevider}>
				<TutorGeneratedMoneyChart totalAmount={amount} months={months}/>
				<View style={tutorHomeScreenStyle.verticalDevider}>

				</View>
			</View>

		</PrivateScreenLayout>
	);
};

export default TutorHomeScreen;