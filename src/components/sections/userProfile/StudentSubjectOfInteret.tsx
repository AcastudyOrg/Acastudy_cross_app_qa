import React, { useState } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { STRING } from '../../../constants/strings';
import { COLORS } from '../../../constants';
import { studentSubjectOfInterestStyles } from '../../../styles/componentsStyle/sectionsStyle/userProfile/studentSubjectOfInterestStyles';

interface StudentSubjectOfInterestProps {
    subjects: string[];
}

const StudentSubjectOfInterest: React.FC<StudentSubjectOfInterestProps> = ({ subjects }) => {
    const [subjectList, setSubjectList] = useState(subjects);  // State to manage subjects
    const [newSubject, setNewSubject] = useState('');          // State for new subject from search bar

    const handleAddSubject = () => {
        if (newSubject.trim() !== '') {
            setSubjectList([...subjectList, newSubject]);  // Add the new subject to the list
            setNewSubject('');                            // Reset the input field
            Keyboard.dismiss();                           // Dismiss the keyboard
        }
    };

    return (
        <View style={studentSubjectOfInterestStyles.section}>
            <Text style={studentSubjectOfInterestStyles.sectionTitle}>{STRING.subjectOfInterest}</Text>

            <View style={studentSubjectOfInterestStyles.subjectsContainer}>
                {subjectList.map((subject, index) => (
                    <View key={index} style={studentSubjectOfInterestStyles.subjectTag}>
                        <Text style={studentSubjectOfInterestStyles.subjectText}>{subject}</Text>
                    </View>
                ))}
            </View>

            <TextInput
                style={studentSubjectOfInterestStyles.searchInput}
                placeholder={STRING.searchPlaceholder}
                placeholderTextColor={COLORS.transparentWhite}
                value={newSubject}
                onChangeText={setNewSubject}
                onSubmitEditing={handleAddSubject}
                returnKeyType="done"
            />
        </View>
    );
};

export default StudentSubjectOfInterest;
