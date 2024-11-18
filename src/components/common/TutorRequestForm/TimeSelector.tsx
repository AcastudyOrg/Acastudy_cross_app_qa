import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Tutor } from '../../../types';
import { COLORS } from '../../../constants';


interface TimeSelectorProps {
  selectedDate: string;
  selectedTime: string;
  onTimeSelect: (time: string) => void;
  selectedTutor?: Tutor;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedDate,
  selectedTime,
  onTimeSelect,
  selectedTutor,
}) => {
    const getAvailableTimeSlots = () => {
        const fullDaySlots = Array.from({ length: 24 }, (_, i) => 
          `${i.toString().padStart(2, '0')}:00`
        );
      
        if (!selectedTutor || !selectedDate) {
          return fullDaySlots;
        }
      
        const bookedOutSlots = selectedTutor.bookedOutDates?.bookedOutDatesTimeSlots[selectedDate] || [];
        return fullDaySlots.filter(slot => !bookedOutSlots.includes(slot));
      };      

  const timeSlots = getAvailableTimeSlots();

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Time Slots</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.timeContainer}
      >
        {timeSlots.map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeSlot,
              selectedTime === time && styles.selectedTimeSlot,
            ]}
            onPress={() => onTimeSelect(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.selectedTimeText,
              ]}
            >
              {formatTime(time)}
            </Text>
          </TouchableOpacity>
        ))}
        {timeSlots.length === 0 && (
          <Text style={styles.noTimesText}>
            No available time slots for selected date
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.white,
    marginBottom: 8,
  },
  timeContainer: {
    paddingVertical: 8,
  },
  timeSlot: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.lightGrayOpacity,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  selectedTimeSlot: {
    backgroundColor: COLORS.purple,
    borderColor: COLORS.purple,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.white,
  },
  selectedTimeText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  noTimesText: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.darkGrayOpacity,
    fontStyle: 'italic',
  },
});