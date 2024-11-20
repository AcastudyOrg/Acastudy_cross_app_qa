import React from 'react';
import { View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { COLORS } from '../../constants';
import fontFamily from '../../constants/fontFamily';
import { TutorData } from '../../types/User/Tutor';
import { availablilityCalenderStyles } from '../../styles/componentsStyle/commonStyle/availabilityCalenderStyles';

interface AvailablilityCalenderProps {
  selectedDate?: string;
  onDateSelect: (date: string) => void;
  selectedTutor?: TutorData["bookedOutDates"];
  minDate?: string;
  maxDate?: string;
}

export const AvailablilityCalender: React.FC<AvailablilityCalenderProps> = ({
  selectedDate,
  onDateSelect,
  selectedTutor,
  minDate,
  maxDate,
}) => {
  const getMarkedDates = () => {
    const markedDates: { [date: string]: any } = {};
    const todayDate = new Date().toISOString().split('T')[0];

    if (selectedTutor) {
      const bookedOutDates = selectedTutor.dates;

      bookedOutDates.forEach((date: string) => {
        markedDates[date] = {
          disabled: true,
          disableTouchEvent: true,
          customStyles: {
            container: {
              backgroundColor: COLORS.darkGrayOpacity,
            },
            text: {
              color: COLORS.white50Percent,
            },
          },
        };
      });
    }

    // Mark the selected date
    if (selectedDate) {
      markedDates[selectedDate] = {
        selected: true,
        selectedColor: COLORS.purple,
        textColor: COLORS.white,
      };
    }

    markedDates[todayDate] = {
      customStyles: {
        container: {
          backgroundColor: COLORS.green,
        },
        text: {
          color: COLORS.white,
        },
      },
    };

    return markedDates;
  };

  return (
    <View style={availablilityCalenderStyles.container}>
      <Calendar
        current={selectedDate}
        minDate={minDate || new Date().toISOString().split('T')[0]}
        maxDate={maxDate}
        onDayPress={(day: DateData) => onDateSelect(day.dateString)}
        markedDates={getMarkedDates()}
        theme={{
          calendarBackground: COLORS.white10Percent,
          textSectionTitleColor: COLORS.white,
          selectedDayBackgroundColor: COLORS.green,
          selectedDayTextColor: COLORS.white,
          todayTextColor: COLORS.green,
          dayTextColor: COLORS.white,
          textDisabledColor: COLORS.darkGrayOpacity,
          dotColor: COLORS.purple,
          monthTextColor: COLORS.white,
          textMonthFontFamily: fontFamily.plusJakartaExtraBold,
          textDayHeaderFontFamily: fontFamily.plusJakartaExtraBold,
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
      />
    </View>
  );
};
