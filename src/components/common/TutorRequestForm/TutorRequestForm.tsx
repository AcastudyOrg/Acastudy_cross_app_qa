import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import GenericDropdown from './GenericDropdown';
import { CustomCalendar } from './CustomCalendar';
import { TimeSelector } from './TimeSelector';
import * as DocumentPicker from 'expo-document-picker';
import { Tutor } from '../../../types';
import { colors, typography, spacing } from '../../../styles/componentsStyle/commonStyle/requestATutorStyle/theme';

interface FormData {
  studyLevel: string;
  course: string;
  description: string;
  uploadedFile: DocumentPicker.DocumentPickerResult | null;
}

const TutorRequestForm = () => {
    
  const [formData, setFormData] = useState<FormData>({
    studyLevel: '',
    course: '',
    description: '',
    uploadedFile: null,
  });

  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [errors, setErrors] = useState<{ [key in keyof FormData | 'selectedDate' | 'selectedTime']?: string }>({});

  const tutors: Tutor[] = [
    { id: '1', name: 'John Doe', availability: { dates: ['2024-11-20'], timeSlots: { '2024-11-20': ['10:00', '14:00'] } } },
    { id: '2', name: 'Jane Smith', availability: { dates: ['2024-11-21'], timeSlots: { '2024-11-21': ['12:00', '15:00'] } } },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleTutorSelect = (tutorName: string) => {
    const tutor = tutors.find((t) => t.name === tutorName) || null;
    setSelectedTutor(tutor); 
  };

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
      if (result.output?.length === 0) {
        setFormData((prev) => ({ ...prev, uploadedFile: result }));
      }
    } catch (error) {
      console.error('File upload failed:', error);
    }
  };

  const validateForm = () => {
    const newErrors: { [key in keyof FormData | 'selectedDate' | 'selectedTime']?: string } = {};

    if (!formData.studyLevel) newErrors.studyLevel = 'This field is required';
    if (!formData.course) newErrors.course = 'This field is required';
    if (!selectedDate) newErrors.selectedDate = 'Please select a date';
    if (!selectedTime) newErrors.selectedTime = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted:', { ...formData, selectedDate, selectedTime, selectedTutor });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Request a Tutor</Text>

      <GenericDropdown
        label="Study Level *"
        placeholder="Select study level"
        options={['Undergraduate', 'Postgraduate', 'PhD']}
        value={formData.studyLevel}
        onSelect={(value) => handleInputChange('studyLevel', value)}
        required
        error={errors.studyLevel}
      />

      <GenericDropdown
        label="Course *"
        placeholder="Select course"
        options={['Mathematics', 'Physics']}
        value={formData.course}
        onSelect={(value) => handleInputChange('course', value)}
        required
        error={errors.course}
      />

      <GenericDropdown
        label="Preferred Tutor"
        placeholder="Select tutor"
        options={tutors.map((t) => t.name)}
        value={selectedTutor?.name || ''}
        onSelect={handleTutorSelect}
      />

      <CustomCalendar
        selectedDate={selectedDate}
        onDateSelect={(date) => setSelectedDate(date)}
        selectedTutor={selectedTutor || undefined}
        minDate={new Date().toISOString().split('T')[0]}
      />
      {errors.selectedDate && <Text style={styles.errorText}>{errors.selectedDate}</Text>}

      <TimeSelector
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onTimeSelect={(time) => setSelectedTime(time)}
        selectedTutor={selectedTutor || undefined}
      />
      {errors.selectedTime && <Text style={styles.errorText}>{errors.selectedTime}</Text>}

      {/* <TextInput
        style={[styles.textArea, errors.description && styles.errorInput]}
        placeholder="Description"
        value={formData.description}
        onChangeText={(value) => handleInputChange('description', value)}
        multiline
      /> */}

      <TouchableOpacity style={styles.fileUpload} onPress={handleFileUpload}>
        <Text style={styles.fileUploadText}>
          {formData.uploadedFile ? `Uploaded: ${formData.uploadedFile.output?.length}` : 'Upload a file (optional)'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.label,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  textArea: {
    height: 100,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  fileUpload: {
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  fileUploadText: {
    color: colors.textSecondary,
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: colors.text,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: spacing.sm,
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default TutorRequestForm;
