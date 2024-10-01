import React from 'react';
import { Calendar, DateData } from 'react-native-calendars';
import { COLORS } from '../../constants';
import fontFamily from '../../constants/fontFamily';
import { isMobile } from '../../../utils/config';
import useScreenWidth from '../../hooks/useScreenWidth';

interface CustomCalendarProps {
	selectedDates: string[];
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ selectedDates }) => {
	const screenWidth = useScreenWidth();
	const isMobileWidth = isMobile(screenWidth);

	const markedDates = selectedDates.reduce((acc, date, index, array) => {
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

	return (
		<Calendar
			onDayPress={(day: DateData) => { console.log('selected day', day); }}
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
	);
}

export default CustomCalendar;