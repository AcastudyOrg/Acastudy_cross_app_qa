import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AvailablilityCalender } from '../AvailablilityCalender';
import { TimeSelector } from './TimeSelector';
import * as DocumentPicker from 'expo-document-picker';
import { COLORS, SIZE } from '../../../constants';
import GradientButtonComponent from '../Form/GradientButtonComponent';
import { STRING } from '../../../constants/strings';
import fontFamily from '../../../constants/fontFamily';
import CustomTextAreaInput from '../Form/CustomTextAreaInput';
import { isPlatformIOSorAndroid } from '../../../../utils/config';
import { DropDownComponent } from '../Form/DropDownComponent';
import CustomIcon from '../CustomIcon';
import { tutorData } from '../../../../mockData/TutorData';
import { requuestTutorstyles } from '../../../styles/componentsStyle/commonStyle/RequestTutorStyles/requestTutorStyles';

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
    <ScrollView contentContainerStyle={requuestTutorstyles.container}>
      <Text style={requuestTutorstyles.subtitle}>
        Complete all required fields (*) to find your perfect tutor match
      </Text>


      <DropDownComponent
        label='Study Level'
        placeholder="Select study level"
        data={options.studyLevels}
        value={formData.studyLevel}
        onChange={(value) => handleInputChange('studyLevel', value)}
        required
        error={errors.studyLevel}
      />

      <DropDownComponent
        label="Course"
        placeholder="Select course"
        data={options.courses}
        value={formData.course}
        onChange={(value) => handleInputChange('course', value)}
        required
        error={errors.course}
        allowCustomValue
      />


      <DropDownComponent
        label="Chapter"
        placeholder="Select chapter"
        data={options.chapters}
        value={formData.chapter}
        onChange={(value) => handleInputChange('chapter', value)}
        allowCustomValue
      />


      <DropDownComponent
        label="Book"
        placeholder="Select book"
        data={options.books}
        value={formData.book}
        onChange={(value) => handleInputChange('book', value)}
        allowCustomValue
      />

      <DropDownComponent
        label="Preferred Tutor"
        placeholder="Select tutor"
        data={options.tutors}
        value={formData.tutor}
        onChange={(value) => handleInputChange('tutor', value)}
      />

      <AvailablilityCalender
        selectedDate={selectedDate}
        onDateSelect={(date) => setSelectedDate(date)}
        selectedTutor={tutorData.bookedOutDates || undefined} // pass in the tutor you have selected
        minDate={new Date().toISOString().split('T')[0]}
      />
      {errors.selectedDate && <Text style={requuestTutorstyles.errorText}>{errors.selectedDate}</Text>}

      <TimeSelector
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onTimeSelect={(time) => setSelectedTime(time)}
        selectedTutor={tutorData.bookedOutDates || undefined} // pass in the tutor you have selected
      />
      {errors.selectedTime && <Text style={requuestTutorstyles.errorText}>{errors.selectedTime}</Text>}

      <CustomTextAreaInput
        label={STRING.description}
        placeholder={STRING.descriptionHendler}
        value={formData.description}
        onChange={(value) => handleInputChange('description', value)}
        required
      />
      {errors.description && <Text style={requuestTutorstyles.errorText}>{errors.description}</Text>}

      <TouchableOpacity style={requuestTutorstyles.fileUpload} onPress={handleFileUpload}>
        <CustomIcon set={'MaterialIcons'} name={'upload-file'} size={24} color={COLORS.grayWhiteText} />
        <Text style={requuestTutorstyles.fileUploadText}>
          {formData.uploadedFile ? `Uploaded: ${formData.uploadedFile.output?.item(0)?.name}` : 'Upload a file (optional)'}
        </Text>
      </TouchableOpacity>

      <GradientButtonComponent text={STRING.requestTutor} onPress={() => handleSubmit()} />
    </ScrollView>
  );
};

export default TutorRequestForm;
