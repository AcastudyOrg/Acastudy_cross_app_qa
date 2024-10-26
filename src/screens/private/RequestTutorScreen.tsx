import React, { useState } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import filterLevelOfStudy from '../../../assets/data/subjects/filterLeveOfStudy.json';
import { DropDownComponent } from '../../components/common/Form/DropDownComponent';
import { tutorProfileStyles } from '../../styles/componentsStyle/commonStyle/tutorProfileStyle';
import CustomCalendar from '../../components/common/CustomCalendar';
import { tutorData } from '../../../mockData/TutorData';
import CourseData from '../../../assets/data/subjects/CourseData.json'
import CustomTextAreaInput from '../../components/common/Form/CustomTextAreaInput';
import GradientButtonComponent from '../../components/common/Form/GradientButtonComponent';
import PrivateScreenLayout from '../../components/layout/PrivateScreenLayout';
import { requestTutorStyles } from '../../styles/screensStyle/privateStyle/requestTutorStyle';
import availableTime from '../../../assets/data/subjects/availableTime.json';


const RequestTutorScreen = () => {

	const [levelOfStudy, setLevelOfStudy] = useState("");
	const [time, setTime] = useState("");
	const [description, setDescription] = useState("");
	const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
	const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
	const [selectedTutor, setSelectedTutor] = useState<number | null>(null);
	const [selectedBook, setSelectedBook] = useState<number | null>(null);
	const [selectedBookChapter, setSelectedBookChapter] = useState<number | null>(null);


	const coursesDropdownData = CourseData.courses.map((course) => ({
		label: course.title,
		value: course.id,
		topics: course.topics,
		tutors: course.tutors,
		books: course.books
	}));

	const timeDropdownData = availableTime.availableTimes.map((time) => ({
		time: time,
	}));

	const selectedCourseData = CourseData.courses.find(
		(course) => course.id === selectedCourse
	);

	const topicsDropdownData = selectedCourseData
		? selectedCourseData.topics.map((topic) => ({
			label: topic.name,
			value: topic.id
		}))

		: [];

	const tutorsDropdownData = selectedCourseData
		? selectedCourseData.tutors.map((tutor, index) => ({
			label: tutor,
			value: index
		}))
		: [];

	const booksDropdownData = selectedCourseData
		? selectedCourseData.books.map((book, index) => ({
			label: book.title,
			chapters: book.chapters,
			id: book.id
		}))
		: [];

	const selectedBookData = booksDropdownData.find(
		(book) => book.id === selectedBook
	);

	const chaptersDropdownData = selectedBookData
		? selectedBookData.chapters.map((chapter) => ({
			label: chapter.title,
			value: chapter.id,
		}))
		: [];


	return (

		<PrivateScreenLayout showBackButton={true} showSearchBar={false}>
			<ScrollView style={requestTutorStyles.container}>
				<View style={requestTutorStyles.dropDownContainer}>
					<View style={requestTutorStyles.Dropdown}>
						<DropDownComponent data={filterLevelOfStudy} label="Study level" placeholder="Level of study" value={levelOfStudy} onChange={setLevelOfStudy} />
						<DropDownComponent data={coursesDropdownData} label="Select Course" placeholder="Choose Course" value={selectedCourse} onChange={(value) => {
							setSelectedCourse(value.value);
							setSelectedTopic(0);
							setSelectedTutor(0);
						}} />
						<DropDownComponent data={topicsDropdownData} label="Topic" placeholder="Pick a Topic" value={selectedTopic} onChange={setSelectedTopic} disabled={!selectedCourse} />

					</View>
					<View style={requestTutorStyles.Dropdown}>
						<DropDownComponent data={booksDropdownData} label="Book" placeholder="Choose preferred book" value={selectedBook} onChange={setSelectedBook} disabled={!selectedCourse} />
						<DropDownComponent data={chaptersDropdownData} label="Chapter" placeholder="Select a chapter" value={selectedBookChapter} onChange={setSelectedBookChapter} disabled={!selectedBook} />
						<DropDownComponent data={tutorsDropdownData} label="Tutor" placeholder="Tutor" value={selectedTutor} onChange={setSelectedTutor} disabled={!selectedCourse} />
					</View>
				</View>
				<CustomTextAreaInput label="Description" placeholder='Describe that of which you are requesting a tutor for' value={description} onChange={setDescription} />

				<View style={requestTutorStyles.input}>
					<Text style={tutorProfileStyles.availability}>Select Date</Text>
					<View style={tutorProfileStyles.availabilityCalendar}>
						<CustomCalendar selectedDates={tutorData.bookedDays} />
					</View>
				</View>
				<View style={requestTutorStyles.input}>
					<DropDownComponent data={timeDropdownData} label="Time" placeholder="Time" value={time} onChange={setTime} />
				</View>

				<View>
					<GradientButtonComponent text="Request Tutor" onPress={() => console.log("Pressed")} />
				</View>
			</ScrollView>
		</PrivateScreenLayout>
	);
};

export default RequestTutorScreen;
