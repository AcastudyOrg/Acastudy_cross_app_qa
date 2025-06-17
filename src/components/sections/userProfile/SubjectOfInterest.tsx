import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native';

import { studentSubjectOfInterestStyles } from '@/styles/componentsStyle/sectionsStyle/userProfile/studentSubjectOfInterestStyles';
import { detailsFormComponentStyles } from '@/styles/componentsStyle/sectionsStyle/userProfile/detailsFormComponentStyle';
import { STRING } from '@/constants/strings';
import { COLORS } from '@/constants';

interface SubjectOfInterestProps {
    subjects: string[];
    setSubjects: (subjects: string[]) => void;
    showSubjectOfInterestPlaceholder?: boolean;
}

const SubjectOfInterest: React.FC<SubjectOfInterestProps> = ({ subjects, setSubjects, showSubjectOfInterestPlaceholder = false }) => {
    const [newSubject, setNewSubject] = useState('');

    const handleAddSubject = () => {
        const trimmedSubject = newSubject.trim();
        if (trimmedSubject !== '') {
            const isDuplicate = subjects.some(
                (subject: string) => subject.toLowerCase() === trimmedSubject.toLowerCase()
            );
            if (!isDuplicate) {
                setSubjects([...subjects, trimmedSubject]);
                setNewSubject('');
                Keyboard.dismiss();
            } else {
                setNewSubject('');
                Keyboard.dismiss();
            }
        }
    };

    const handleRemoveSubject = (indexToRemove: number) => {
        setSubjects(subjects.filter((_, index) => index !== indexToRemove));
    };

    return (
        <View style={studentSubjectOfInterestStyles.section}>
            <View style={[detailsFormComponentStyles.personalInfoTitleContainer, { top: 15 }]}>
                <Text style={studentSubjectOfInterestStyles.sectionTitle}>{STRING.subjectOfInterest}</Text>
            </View>

            <View style={studentSubjectOfInterestStyles.subjectsContainer}>
                {subjects?.map((subject, index) => (
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
                {showSubjectOfInterestPlaceholder && subjects?.length === 0 && (
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: COLORS.white50Percent }}>No experience added yet.</Text>
                    </View>
                )}
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

export default SubjectOfInterest;