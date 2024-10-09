import React, { useState } from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { STRING } from '../../../constants/strings';
import { COLORS } from '../../../constants';
import { studentSubjectOfInterestStyles } from '../../../styles/componentsStyle/sectionsStyle/userProfile/studentSubjectOfInterestStyles';

interface StudentSubjectOfInterestProps {
    subjects: string[];
}

const StudentSubjectOfInterest: React.FC<StudentSubjectOfInterestProps> = ({ subjects }) => {
    const [subjectList, setSubjectList] = useState(subjects);
    const [newSubject, setNewSubject] = useState('');

    const handleAddSubject = () => {
        if (newSubject.trim() !== '') {
            setSubjectList([...subjectList, newSubject]);
            setNewSubject('');
            Keyboard.dismiss();
        }
    };

    const handleRemoveSubject = (indexToRemove: number) => {
        setSubjectList(subjectList.filter((_, index) => index !== indexToRemove));
    };

    return (
        <View style={studentSubjectOfInterestStyles.section}>
            <Text style={studentSubjectOfInterestStyles.sectionTitle}>{STRING.subjectOfInterest}</Text>

            <View style={studentSubjectOfInterestStyles.subjectsContainer}>
                {subjectList.map((subject, index) => (
                    <View key={index} style={studentSubjectOfInterestStyles.subjectTag}>
                        <Text style={studentSubjectOfInterestStyles.subjectText}>{subject}</Text>
                        <TouchableOpacity 
                            onPress={() => handleRemoveSubject(index)}
                            style={studentSubjectOfInterestStyles.removeButton}
                        >
                            <Text style={studentSubjectOfInterestStyles.removeButtonText}>×</Text>
                        </TouchableOpacity>
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