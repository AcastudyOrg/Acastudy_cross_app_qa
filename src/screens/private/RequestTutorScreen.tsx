import React, { useState } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import filterLevelOfStudy from '../../../assets/data/subjects/filterLeveOfStudy.json';
import { DropDownComponent } from '../../components/common/Form/DropDownComponent';
import CustomCalendar from '../../components/common/CustomCalendar';
import { tutorData } from '../../../mockData/TutorData';
import CourseData from '../../../assets/data/subjects/CourseData.json'
import CustomTextAreaInput from '../../components/common/Form/CustomTextAreaInput';
import GradientButtonComponent from '../../components/common/Form/GradientButtonComponent';
import PrivateScreenLayout from '../../components/layout/PrivateScreenLayout';
import { requestTutorStyles } from '../../styles/screensStyle/privateStyle/requestTutorStyle';
import availableTime from '../../../assets/data/subjects/availableTime.json';
import { STRING } from '../../constants/strings';
import { isPlatformAndroid, isPlatformOS } from '../../../utils/config';


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
						<DropDownComponent data={filterLevelOfStudy} label={STRING.levelOfStudy} placeholder={STRING.levelOfStudy} value={levelOfStudy} onChange={setLevelOfStudy} />
						<DropDownComponent data={coursesDropdownData} label={STRING.selectCourse} placeholder={STRING.selectCourse} value={selectedCourse} onChange={(value) => {
							setSelectedCourse(value.value);
							setSelectedTopic(0);
							setSelectedTutor(0);
						}} />
						<DropDownComponent data={topicsDropdownData} label={STRING.topic} placeholder={STRING.topic} value={selectedTopic} onChange={setSelectedTopic} disabled={!selectedCourse} />

					</View>
					<View style={requestTutorStyles.Dropdown}>
						<DropDownComponent data={booksDropdownData} label={STRING.book} placeholder={STRING.book} value={selectedBook} onChange={setSelectedBook} disabled={!selectedCourse} />
						<DropDownComponent data={chaptersDropdownData} label={STRING.chapter} placeholder={STRING.chapter} value={selectedBookChapter} onChange={setSelectedBookChapter} disabled={!selectedBook} />
						<DropDownComponent data={tutorsDropdownData} label={STRING.tutor} placeholder={STRING.tutor} value={selectedTutor} onChange={setSelectedTutor} disabled={!selectedCourse} />
					</View>
				</View>
				<CustomTextAreaInput label={STRING.description} placeholder={STRING.descriptionHendler} value={description} onChange={setDescription} />

				<View style={requestTutorStyles.dropDownContainer}>



					<View style={requestTutorStyles.Dropdown}>
						<DropDownComponent data={timeDropdownData} label={STRING.time} placeholder={STRING.time} value={time} onChange={setTime} />

						{!(isPlatformOS() || isPlatformAndroid()) &&
							<View style={requestTutorStyles.requestTutorButton}>
								<GradientButtonComponent text={STRING.requestTutor} onPress={() => console.log("Pressed")} />
							</View>
						}
					</View>



					<View style={requestTutorStyles.input}>
						<Text style={requestTutorStyles.availabilityLabel}>Select Date</Text>
						<View style={requestTutorStyles.availabilityCalendar}>
							<CustomCalendar selectedDates={tutorData.bookedDays} />
						</View>
					</View>



				</View>
				{(isPlatformOS() || isPlatformAndroid()) &&
					<View style={requestTutorStyles.requestTutorButton}>
						<GradientButtonComponent text={STRING.requestTutor} onPress={() => console.log("Pressed")} />
					</View>
				}

			</ScrollView>
		</PrivateScreenLayout>
	);
};

export default RequestTutorScreen;
