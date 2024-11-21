import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AvailablilityCalender } from '../AvailablilityCalender';
import { TimeSelector } from './TimeSelector';
import * as DocumentPicker from 'expo-document-picker';
import { COLORS } from '../../../constants';
import GradientButtonComponent from '../Form/GradientButtonComponent';
import { STRING } from '../../../constants/strings';
import CustomTextAreaInput from '../Form/CustomTextAreaInput';
import { isNotDesktop } from '../../../../utils/config';
import { DropDownComponent } from '../Form/DropDownComponent';
import CustomIcon from '../CustomIcon';
import { tutorData } from '../../../../mockData/TutorData';
import { requuestTutorstyles } from '../../../styles/componentsStyle/commonStyle/RequestTutorStyles/requestTutorStyles';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { handleFileUpload, handleInputChange, validateForm } from '../../../../utils/requestTutorFormHelper';

interface FormData {
	studyLevel: string;
	course: string;
	book: string;
	tutor: string;
	chapter: string;
	topics: string
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
		topics: ["Machine learning", "optimization", "Counting principle"]
	};


	const [selectedDate, setSelectedDate] = useState<string>('');
	const [selectedTime, setSelectedTime] = useState<string>('');
	const [errors, setErrors] = useState<{ [key in keyof FormData | 'selectedDate' | 'selectedTime']?: string }>({});
	const [formData, setFormData] = useState<FormData>({
		studyLevel: '',
		course: '',
		book: '',
		tutor: '',
		chapter: '',
		topics: '',
		preferredDate: '',
		preferredTime: '',
		description: '',
		uploadedFile: null,
	});

	const screenWidth = useScreenWidth();
	const notDesktop = isNotDesktop(screenWidth);

	const handleSubmit = () => {
		if (validateForm(formData, setErrors)) {
			console.log('Form submitted:', { ...formData, selectedDate, selectedTime });
		}
	};

	return (
		<ScrollView contentContainerStyle={requuestTutorstyles.container}>
			<Text style={requuestTutorstyles.subtitle}>
				{STRING.requiredFieldHeader}
			</Text>

			<View style={{ flexDirection: notDesktop ? 'column' : 'row', justifyContent: notDesktop ? 'center' : 'space-between', }}>

				<View style={{ width: notDesktop ? "100%" : "50%", paddingEnd: 10 }}>
					<DropDownComponent label='Study Level' placeholder="Select study level" data={options.studyLevels} value={formData.studyLevel} onChange={(value) => handleInputChange('studyLevel', value, setFormData, errors, setErrors)} required error={errors.studyLevel} />
					<DropDownComponent label="Course" placeholder="Select course" data={options.courses} value={formData.course} onChange={(value) => handleInputChange('course', value, setFormData, errors, setErrors)} required error={errors.course} allowCustomValue />
					<DropDownComponent label="Chapter" placeholder="Select chapter" data={options.chapters} value={formData.chapter} onChange={(value) => handleInputChange('chapter', value, setFormData, errors, setErrors)} allowCustomValue />
				</View>

				<View style={{ width: notDesktop ? "100%" : "50%", paddingStart: 10 }}>
					<DropDownComponent label="Topic" placeholder="Enter a topic" data={options.topics} value={formData.topics} onChange={(value) => handleInputChange('topics', value, setFormData, errors, setErrors)} required allowCustomValue />
					<DropDownComponent label="Book" placeholder="Select book" data={options.books} value={formData.book} onChange={(value) => handleInputChange('book', value, setFormData, errors, setErrors)} allowCustomValue />
					<DropDownComponent label="Preferred Tutor" placeholder="Select tutor" data={options.tutors} value={formData.tutor} onChange={(value) => handleInputChange('tutor', value, setFormData, errors, setErrors)} />
				</View>
			</View>

			<CustomTextAreaInput label={STRING.description} placeholder={STRING.descriptionHendler} value={formData.description} onChange={(value) => handleInputChange('description', value, setFormData, errors, setErrors)} required />
			{errors.description && <Text style={requuestTutorstyles.errorText}>{errors.description}</Text>}

			<TouchableOpacity style={requuestTutorstyles.fileUpload} onPress={() => handleFileUpload(setFormData, formData)}>
				<CustomIcon set={'MaterialIcons'} name={'upload-file'} size={24} color={COLORS.grayWhiteText} />
				<Text style={requuestTutorstyles.fileUploadText}>
					{formData.uploadedFile ? `Uploaded: ${formData.uploadedFile.output?.item(0)?.name}` : 'Upload a file (optional)'}
				</Text>
			</TouchableOpacity>

			<TimeSelector
				selectedDate={selectedDate}
				selectedTime={selectedTime}
				onTimeSelect={(time) => setSelectedTime(time)}
				selectedTutor={tutorData.bookedOutDates || undefined} // pass in the tutor you have selected
			/>
			{errors.selectedTime && <Text style={requuestTutorstyles.errorText}>{errors.selectedTime}</Text>}

			<AvailablilityCalender
				selectedDate={selectedDate}
				onDateSelect={(date) => setSelectedDate(date)}
				selectedTutor={tutorData.bookedOutDates || undefined} // pass in the tutor you have selected
				minDate={new Date().toISOString().split('T')[0]}
			/>
			{errors.selectedDate && <Text style={requuestTutorstyles.errorText}>{errors.selectedDate}</Text>}

			<View style={requuestTutorstyles.submitButton}>
			<GradientButtonComponent text={STRING.requestTutor} onPress={() => handleSubmit()} />
			</View>
			
		</ScrollView>
	);
};

export default TutorRequestForm;
