import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import GenericDropdown from './GenericDropdown';
import { AvailablilityCalender } from './CustomCalendar';
import { TimeSelector } from './TimeSelector';
import * as DocumentPicker from 'expo-document-picker';
import { Tutor } from '../../../types';
import { COLORS, SIZE } from '../../../constants';
import GradientButtonComponent from '../Form/GradientButtonComponent';
import { STRING } from '../../../constants/strings';
import fontFamily from '../../../constants/fontFamily';
import CustomTextAreaInput from '../Form/CustomTextAreaInput';
import { isPlatformIOSorAndroid } from '../../../../utils/config';

interface FormData {
    studyLevel: string;
    course: string;
    book: string;
    tutor: string;
    chapter: string;
    preferredDate: string;
    preferredTime: string;
    description: string;
    uploadedFile: DocumentPicker.DocumentPickerResult | null;
  }

const TutorRequestForm = () => {

    const options = {
        studyLevels: ['Undergraduate', 'Postgraduate', 'PhD'],
        courses: ['Mathematics', 'Physics', 'Chemistry'],
        books: ['Calculus I', 'Physics Fundamentals'],
        tutors: ['John Doe', 'Jane Smith', 'Alan Turing'],
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
      };
    
      const tutors: Tutor[] = [
        { id: '1', name: 'John Doe', availability: { dates: ['2024-11-20', '2024-11-21', '2024-11-22', '2024-11-23'], timeSlots: { '2024-11-20': ['10:00', '14:00'], '2024-11-21': ['10:00', '14:00'], '2024-11-23': ['10:00', '10:00', '10:00', '14:00', '10:00'], '2024-11-24': ['10:00', '14:00'] } } },
        { id: '2', name: 'Jane Smith', availability: { dates: ['2024-11-21'], timeSlots: { '2024-11-21': ['12:00', '15:00'] } } },
      ];

      
      const [formData, setFormData] = useState<FormData>({
        studyLevel: '',
        course: '',
        book: '',
        tutor: '',
        chapter: '',
        preferredDate: '',
        preferredTime: '',
        description: '',
        uploadedFile: null,
      });
    
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [errors, setErrors] = useState<{ [key in keyof FormData | 'selectedDate' | 'selectedTime']?: string }>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (result.output?.length !== 0) {
        setFormData((prev) => ({
          ...prev,
          uploadedFile: result,
        }));
      }
    } catch (error) {
      console.error('File upload failed:', error);
    }
  };

  const validateForm = () => {
    const newErrors: { [key in keyof FormData]?: string } = {};
    const requiredFields: (keyof FormData)[] = [
      'studyLevel',
      'course',
      'preferredDate',
      'preferredTime',
      'description',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted:', { ...formData, selectedDate, selectedTime });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>
        Complete all required fields (*) to find your perfect tutor match
      </Text>

      <GenericDropdown
        label="Study Level"
        placeholder="Select study level"
        options={options.studyLevels}
        value={formData.studyLevel}
        onSelect={(value) => handleInputChange('studyLevel', value)}
        required
        error={errors.studyLevel}
      />

    <GenericDropdown
        label="Course"
        placeholder="Select course"
        options={options.courses}
        value={formData.course}
        onSelect={(value) => handleInputChange('course', value)}
        required
        error={errors.course}
      />

    <GenericDropdown
        label="Chapter"
        placeholder="Select chapter"
        options={options.chapters}
        value={formData.chapter}
        onSelect={(value) => handleInputChange('chapter', value)}
      />

    <GenericDropdown
        label="Book"
        placeholder="Select book"
        options={options.books}
        value={formData.book}
        onSelect={(value) => handleInputChange('book', value)}
      />

      <GenericDropdown
        label="Preferred Tutor"
        placeholder="Select tutor"
        options={options.tutors}
        value={formData.tutor}
        onSelect={(value) => handleInputChange('tutor', value)}
      />

      <AvailablilityCalender
        selectedDate={selectedDate}
        onDateSelect={(date) => setSelectedDate(date)}
        selectedTutor={tutors[0] || undefined}
        minDate={new Date().toISOString().split('T')[0]}
      />
      {errors.selectedDate && <Text style={styles.errorText}>{errors.selectedDate}</Text>}

      <TimeSelector
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onTimeSelect={(time) => setSelectedTime(time)}
        selectedTutor={tutors[0] || undefined}
      />
      {errors.selectedTime && <Text style={styles.errorText}>{errors.selectedTime}</Text>}

        <CustomTextAreaInput
            label={STRING.description}
            placeholder={STRING.descriptionHendler}
            value={formData.description}
            onChange={(value) => handleInputChange('description', value)}
        />

      <TouchableOpacity style={styles.fileUpload} onPress={handleFileUpload}>
        <Text style={styles.fileUploadText}>
          {formData.uploadedFile ? `Uploaded: ${formData.uploadedFile.output?.item(0)?.name}` : 'Upload a file (optional)'}
        </Text>
      </TouchableOpacity>

      <View style={styles.submitButton}>
		<GradientButtonComponent text={STRING.requestTutor} onPress={() => handleSubmit()} />
	</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.transparent,
    marginHorizontal: isPlatformIOSorAndroid() ? 15 : 30
  },
  subtitle: {
    fontSize: SIZE.xl,
    textAlign: 'center',
    paddingVertical: 16,
    color: COLORS.white,
    fontFamily: fontFamily.plusJakartaExtraBold,
    marginTop: 10,
  },
  textArea: {
    height: 100,
    borderWidth: 1,
    borderColor: COLORS.transparent,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  fileUpload: {
    padding: 16,
    backgroundColor: COLORS.white10Percent,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  fileUploadText: {
    color: COLORS.white10Percent,
  },
  submitButton: {
    backgroundColor: COLORS.transparent,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default TutorRequestForm;
