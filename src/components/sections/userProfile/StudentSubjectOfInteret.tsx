
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';
import { STRING } from '../../../constants/strings';
import { COLORS, FONT } from '../../../constants';
import { isMobile } from '../../../../utils/config';
import useScreenWidth from '../../../hooks/useScreenWidth';

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


const studentSubjectOfInterestStyles = StyleSheet.create({
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: FONT.plusJakartaBold,
        color: '#ffffff',
        marginBottom: 10,
    },
    searchInput: {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 10,
		paddingHorizontal: 15,
		color: COLORS.white,
		fontFamily: FONT.plusJakartaRegular,
		height: 40,
		width: "50%",
        
	},
    subjectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    subjectTag: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
    },
    subjectText: {
        color: '#001F3F',
        fontSize: 14,
        fontFamily: FONT.plusJakartaBold,
    },
});



export default StudentSubjectOfInterest;
