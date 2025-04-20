import React, { ReactNode } from "react";
import upcomingEventsData from '../../../../assets/data/home/upcomingEventsData.json';
import { PrivateScreenLayout } from "../../../components";
import { VIEW_MODE } from "@/constants/strings";
import EventsSection from "@/components/sections/home/EventsSection";
import { AvailablilityCalender } from "@/components/common/AvailablilityCalender";
import { View, Text, Pressable } from "react-native";
import { tutorHomeScreenStyle } from "@/styles/screensStyle/privateStyle/tutorHomeScreenStyle";
import TutorGeneratedMoneyChart from "@/components/sections/home/TutorGeneratedMoneyChart";
import CustomIcon from "@/components/common/CustomIcon";
import { COLORS } from "@/constants";
import fontFamily from "@/constants/fontFamily";


const TutorHomeScreen = () => {

	const amount = [500, 750, 1000, 1650, 750, 1800, 3000];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	return (
		<PrivateScreenLayout viewMode={VIEW_MODE.tutorView}>
			<EventsSection showButton upcomingEventsData={upcomingEventsData} />
			<View style={tutorHomeScreenStyle.horizontalDevider}>
				<AvailablilityCalender onDateSelect={function (date: string): void { console.log("pressed") }} />
				<TutorGeneratedMoneyChart totalAmount={amount} months={months} />
			</View>

			<View style={tutorHomeScreenStyle.horizontalDevider}>
				<AvailablilityCalender onDateSelect={function (date: string): void { console.log("pressed") }} />

				<View style={[tutorHomeScreenStyle.verticalDevider, { flex: 1, padding: 0 }]}>
					<View style={[tutorHomeScreenStyle.horizontalDevider, { flex: 1, padding: 0 }]}>
						<MetricCard
							label="Total Hours"
							value={84}
							icon={<CustomIcon set="AntDesign" name="clockcircle" size={50} color={COLORS.grayWhiteText} />}
						/>

						<MetricCard
							label="Panding Requests"
							value={13}
							icon={<CustomIcon set="MaterialIcons" name="live-help" size={50} color={COLORS.fullRed} />}
						/>
					</View>

					<MetricCard
							label="Acummulated Money This Month"
							value={"R 2050"}
							icon={<CustomIcon set="FontAwesome6" name="money-bill-trend-up" size={50} color={COLORS.lightGreen} />}
						/>
				</View>
				
			
			</View>

		</PrivateScreenLayout>
	);
};


interface MetricCardProps {
	label: string;
	value: string | number;
	icon: ReactNode;
	onPress?: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({
	label,
	value,
	icon,
	onPress = () => { },
}) => {
	return (
		<Pressable onPress={onPress} style={{ flex: 1, backgroundColor: COLORS.white10Percent, borderRadius: 10, padding: 10, width: '100%' }}>
			<Text style={{ color: COLORS.gray60, fontSize: 24, fontFamily: fontFamily.plusJakartaBold }}>{label}</Text>
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
				{icon}
				<Text style={{ color: COLORS.lightGray, fontSize: 64, fontFamily: fontFamily.plusJakartaBold, marginStart: "10%" }}>{value}</Text>
			</View>
		</Pressable>

	);
};

export default TutorHomeScreen;