import React, { useState } from 'react';
import { Calendar, DateData } from 'react-native-calendars';
import { COLORS } from '../../constants';
import fontFamily from '../../constants/fontFamily';
import { isMobile } from '../../../utils/config';
import useScreenWidth from '../../hooks/useScreenWidth';
import { Modal, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { requestTutorStyles } from '../../styles/screensStyle/privateStyle/requestTutorStyle';

interface CustomCalendarProps {
	selectedDates?: string[];
	isClickable: boolean;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ selectedDates, isClickable }) => {

	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [selectedTime, setSelectedTime] = useState<string | null>(null);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const screenWidth = useScreenWidth();
	const isMobileWidth = isMobile(screenWidth);

	const markedDates = selectedDates?.reduce((acc, date, index, array) => {
		const prevDate = array[index - 1];
		const nextDate = array[index + 1];

		const currentDate = new Date(date).getTime();
		const prevDateTime = prevDate ? new Date(prevDate).getTime() : null;
		const nextDateTime = nextDate ? new Date(nextDate).getTime() : null;

		const oneDay = 24 * 60 * 60 * 1000;

		const isStartingDay = !prevDateTime || currentDate - prevDateTime !== oneDay;
		const isEndingDay = !nextDateTime || nextDateTime - currentDate !== oneDay;

		acc[date] = {
			color: COLORS.appearTransparentWhite,
			textColor: COLORS.white,
			startingDay: isStartingDay,
			endingDay: isEndingDay,
		};
		return acc;
	}, {} as { [key: string]: any });

	const handleDayPress = (day: DateData) => {
		console.log(isClickable);
		if (!isClickable) return;
	
		console.log(day.dateString);
		setSelectedDate(day.dateString);
		setIsModalVisible(true);
	  };
	
	  const availableTimes = Array.from({ length: 15 }, (_, i) => {
		const hour = i + 6;
		return `${hour < 10 ? `0${hour}` : hour}:00`;
	  });
	
	  const handleTimeSelect = (time: string) => {
		setSelectedTime(time);
		setIsModalVisible(false);
	  };
	

	return (
		<View>
			<Calendar
				onDayPress={handleDayPress}
				style={{ height: 350, width: isMobileWidth ? '100%' : 500 }}
				markedDates={markedDates}
				markingType={'period'}
				theme={{
					calendarBackground: COLORS.transparent,
					textSectionTitleColor: COLORS.white,
					selectedDayBackgroundColor: COLORS.green,
					selectedDayTextColor: COLORS.white,
					todayTextColor: COLORS.green,
					dayTextColor: COLORS.white,
					textDisabledColor: COLORS.darkGrayOpacity,
					monthTextColor: COLORS.white,
					textMonthFontWeight: 'bold',
					textMonthFontFamily: fontFamily.plusJakartaExtraBold,
				}}
			/>

			<Modal
				visible={isModalVisible}
				transparent={true}
				animationType="slide"
				onRequestClose={() => setIsModalVisible(false)}
			>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
				<View style={{ width: 300, height: 500, backgroundColor: COLORS.skyBlue, padding: 20, borderRadius: 10 }}>
					<Text style={{ marginBottom: 10, fontSize: 16, fontWeight: '600', color: COLORS.white }}>Select a time for {selectedDate}</Text>
					<FlatList
						data={availableTimes}
						keyExtractor={(item) => item}
						renderItem={({ item }) => (
							<TouchableOpacity onPress={() => handleTimeSelect(item)} style={{ padding: 10 }}>
							<Text style={{ color: COLORS.white }}>{item}</Text>
							</TouchableOpacity>
						)}
					/>
					<TouchableOpacity onPress={() => setIsModalVisible(false)}>
					<Text style={{ textAlign: 'center', marginTop: 10, color: COLORS.white }}>Close</Text>
					</TouchableOpacity>
				</View>
				</View>
			</Modal>

			{/* Display selected date and time */}
			{selectedDate && selectedTime && (
				<Text style={requestTutorStyles.availabilityLabel}>
				{selectedDate} | {selectedTime}
				</Text>
			)}
    	</View>

	);
}

export default CustomCalendar;