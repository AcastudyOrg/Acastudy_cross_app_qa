import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TutorData } from '../../../types/User/Tutor';
import { timeSelectStyles } from '../../../styles/componentsStyle/commonStyle/RequestTutorStyles/timeSelectorStyles';
import { STRING } from '../../../constants/strings';


interface TimeSelectorProps {
  selectedDate: string;
  selectedTime: string;
  onTimeSelect: (time: string) => void;
  selectedTutor?: TutorData["bookedOutDates"];
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
      
        const bookedOutSlots = selectedTutor.bookedOutDatesTimeSlots[selectedDate] || [];
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
    <View style={timeSelectStyles.container}>
      <Text style={timeSelectStyles.title}>Available Time Slots</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={timeSelectStyles.timeContainer}
      >
        {timeSlots.map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              timeSelectStyles.timeSlot,
              selectedTime === time && timeSelectStyles.selectedTimeSlot,
            ]}
            onPress={() => onTimeSelect(time)}
          >
            <Text
              style={[
                timeSelectStyles.timeText,
                selectedTime === time && timeSelectStyles.selectedTimeText,
              ]}
            >
              {formatTime(time)}
            </Text>
          </TouchableOpacity>
        ))}
        {timeSlots.length === 0 && (
          <Text style={timeSelectStyles.noTimesText}>{STRING.noAvailableTimeSlots}</Text>
        )}
      </ScrollView>
    </View>
  );
};