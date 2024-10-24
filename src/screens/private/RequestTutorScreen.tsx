import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,  } from 'react-native';
import filterLevelOfStudy from '../../../assets/data/subjects/filterLeveOfStudy.json';
import filterTutorData from '../../../assets/data/subjects/filterTutorData.json';
import { DropDownComponent } from '../../components/common/Form/DropDownComponent';
import { tutorProfileStyles } from '../../styles/componentsStyle/commonStyle/tutorProfileStyle';
import CustomCalendar from '../../components/common/CustomCalendar';
import { tutorData } from '../../../mockData/TutorData';
import CourseData from '../../../assets/data/subjects/CourseData.json'
import CustomTextAreaInput from '../../components/common/Form/CustomTextAreaInput';
import GradientButtonComponent from '../../components/common/Form/GradientButtonComponent';
import PrivateScreenLayout from '../../components/layout/PrivateScreenLayout';


const RequestTutorScreen = () => {

    const [levelOfStudy, setLevelOfStudy] = useState("");
    const [tutor, setTutor] = useState("");

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
console.log(selectedBook)
    const chaptersDropdownData = selectedBookData
  ? selectedBookData.chapters.map((chapter) => ({
      label: chapter.title,
      value: chapter.id, 
    }))
  : [];


  return (

    <PrivateScreenLayout showBackButton={true} showSearchBar={false}>
      <View style={styles.Container}>
        <ScrollView>
            <View style={styles.dropDownContainer}>
                <View style={styles.Dropdown}>
                    <DropDownComponent data={filterLevelOfStudy} label="Study level" placeholder="Level of study" value={levelOfStudy} onChange={setLevelOfStudy} />
                    <DropDownComponent data={topicsDropdownData} label= "Topic" placeholder="Pick a Topic" value={selectedTopic} onChange={setSelectedTopic} disabled={!selectedCourse}/>
                    <DropDownComponent data={booksDropdownData} label="Book" placeholder="Choose preferred book" value={selectedBook} onChange={(value) => {
                          setSelectedBook(value.id);
                        }} disabled={!selectedCourse}/>
                </View>
                <View style={styles.Dropdown}>
                    <DropDownComponent data={coursesDropdownData} label="Select Course" placeholder="Choose Course" value={selectedCourse} onChange={(value) => {
                          setSelectedCourse(value.value);
                          setSelectedTopic(null);
                          setSelectedTutor(null);
                        }} />
                    <DropDownComponent data={tutorsDropdownData} label="Tutor" placeholder="Tutor" value={selectedTutor} onChange={setSelectedTutor} disabled={!selectedCourse} />
                    <DropDownComponent data={chaptersDropdownData} label="Chapter"  placeholder="Select a chapter" value={selectedBookChapter} onChange={setSelectedBookChapter}  disabled={!selectedBook}/>
                </View>
            </View>
            <View style={styles.input}>
              <CustomTextAreaInput label="Description" placeholder='Describe that of which you are requesting a tutor for' value={''} onChange={function (text: string): void {
            throw new Error('Function not implemented.'); 
            } }/>
          </View>

          <View style={styles.input}>
            <Text style={tutorProfileStyles.availability}>Select Date</Text>
            <View style={tutorProfileStyles.availabilityCalendar}>
              <CustomCalendar selectedDates={tutorData.bookedDays} />
            </View>
          </View>
          <View style={styles.input}>
            <DropDownComponent data={filterTutorData} label="Time" placeholder="Tutor" value={tutor} onChange={setTutor} />
          </View>

          <View>
            <GradientButtonComponent text="Request Tutor" onPress={() => console.log("Pressed")} />
          </View>
        </ScrollView>
      </View>
    </PrivateScreenLayout>
  );
};

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',

  },

  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 'auto',
    margin: 30,
  },
  Dropdown: {
    margin: 20,
    width: "45%",
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

});

export default RequestTutorScreen;
