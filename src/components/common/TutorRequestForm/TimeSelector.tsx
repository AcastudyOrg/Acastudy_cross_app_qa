import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Tutor } from '../../../types';
import { colors, spacing, typography } from '../../../styles/componentsStyle/commonStyle/requestATutorStyle/theme';


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
    if (!selectedTutor || !selectedDate) return [];
    return selectedTutor.availability.timeSlots[selectedDate] || [];
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
    marginVertical: spacing.md,
  },
  title: {
    ...typography.label,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  timeContainer: {
    paddingVertical: spacing.sm,
  },
  timeSlot: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginRight: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedTimeSlot: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  timeText: {
    ...typography.body,
    color: colors.text,
  },
  selectedTimeText: {
    color: colors.text,
    fontWeight: '600',
  },
  noTimesText: {
    ...typography.body,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
});