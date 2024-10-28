import React, { useState } from 'react';
import { View } from 'react-native';

import filterLevelOfStudy from '../../../assets/data/subjects/filterLeveOfStudy.json';
import { DropDownComponent } from '../../components/common/Form/DropDownComponent';
import { requestTutorStyles } from '../../styles/screensStyle/privateStyle/requestTutorStyle';
import CourseData from '../../../assets/data/subjects/CourseData.json'
import { STRING } from '../../constants/strings';
import {
    booksDropdownDataFn,
    chaptersDropdownDataFn,
    coursesDropdownDataFn,
    topicsDropdownDataFn,
    tutorsDropdownDataFn
} from '../../../utils/requestTutorHelper';
import { bookType, courseType } from '../../types/RequestTutor/requestTutorTypes';

const RequestTutorRowSection = () => {
    const [levelOfStudy, setLevelOfStudy] = useState("");
    const [selectedBook, setSelectedBook] = useState<bookType | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
    const [selectedTutor, setSelectedTutor] = useState<number | null>(null);
    const [selectedCourse, setSelectedCourse] = useState<courseType | null>(null);
    const [selectedBookChapter, setSelectedBookChapter] = useState<number | null>(null);

    const coursesDropdownData = coursesDropdownDataFn(CourseData);
    const selectedCourseData = coursesDropdownData.find((course) => course.value === selectedCourse?.value);
    const topicsDropdownData = topicsDropdownDataFn(selectedCourseData?.topics ?? []);
    
    const booksDropdownData = booksDropdownDataFn(selectedCourseData?.books ?? []);
    const selectedBookData = selectedCourseData?.books?.find((book) => book.id === selectedBook?.id);

    const chaptersDropdownData = chaptersDropdownDataFn(selectedBookData?.chapters ?? []);
    const tutorsDropdownData = tutorsDropdownDataFn(selectedCourseData?.tutors ?? []);

    return (
        <View style={requestTutorStyles.dropDownContainer}>
            <View style={requestTutorStyles.Dropdown}>
                <DropDownComponent data={filterLevelOfStudy} label={STRING.levelOfStudy} placeholder={STRING.levelOfStudy} value={levelOfStudy} onChange={setLevelOfStudy} />
                <DropDownComponent data={coursesDropdownData} label={STRING.selectCourse} placeholder={STRING.selectCourse} value={selectedCourse} onChange={setSelectedCourse} />
                <DropDownComponent data={topicsDropdownData} label={STRING.topic} placeholder={STRING.topic} value={selectedTopic} onChange={setSelectedTopic} />
            </View>
            <View style={requestTutorStyles.Dropdown}>
                <DropDownComponent data={booksDropdownData} label={STRING.book} placeholder={STRING.book} value={selectedBook} onChange={setSelectedBook} />
                <DropDownComponent data={chaptersDropdownData} label={STRING.chapter} placeholder={STRING.chapter} value={selectedBookChapter} onChange={setSelectedBookChapter} />
                <DropDownComponent data={tutorsDropdownData} label={STRING.tutor} placeholder={STRING.tutor} value={selectedTutor} onChange={setSelectedTutor} />
            </View>
        </View>
    );
};

export default RequestTutorRowSection;
