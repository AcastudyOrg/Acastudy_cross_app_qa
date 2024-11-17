import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { Tutor } from '../../../types';
import { colors } from '../../../styles/componentsStyle/commonStyle/requestATutorStyle/theme';
import { COLORS } from '../../../constants';


interface AvailablilityCalenderProps {
  selectedDate?: string;
  onDateSelect: (date: string) => void;
  selectedTutor?: Tutor;
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
  const getDisabledDates = () => {
    if (!selectedTutor) return {};

    const disabledDates: { [date: string]: any } = {};
    const today = new Date();
    const maxDateObj = maxDate ? new Date(maxDate) : new Date(today.setMonth(today.getMonth() + 3));

    let currentDate = new Date(minDate || today);

    while (currentDate <= maxDateObj) {
      const dateString = currentDate.toISOString().split('T')[0];
      if (!selectedTutor.availability.dates.includes(dateString)) {
        disabledDates[dateString] = {
          disabled: true,
          disableTouchEvent: true,
        };
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return disabledDates;
  };

  const markedDates = {
    ...getDisabledDates(),
    [selectedDate || '']: {
      selected: true,
      selectedColor: COLORS.purple,
    },
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={selectedDate}
        minDate={minDate || new Date().toISOString().split('T')[0]}
        maxDate={maxDate}
        onDayPress={(day: DateData) => onDateSelect(day.dateString)}
        markedDates={markedDates}
        theme={{
          backgroundColor: colors.background,
          calendarBackground: colors.surface,
          textSectionTitleColor: colors.textSecondary,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.text,
          todayTextColor: colors.primary,
          dayTextColor: colors.text,
          textDisabledColor: colors.disabled,
          dotColor: colors.primary,
          monthTextColor: colors.text,
          textDayFontFamily: 'System',
          textMonthFontFamily: 'System',
          textDayHeaderFontFamily: 'System',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});