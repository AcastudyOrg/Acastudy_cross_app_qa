import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { STRING } from '@/constants/strings';
import { COLORS } from '@/constants';
import CustomIcon from '@/components/common/CustomIcon';
import { studentSubjectOfInterestStyles } from '@/styles/componentsStyle/sectionsStyle/userProfile/studentSubjectOfInterestStyles';
import { detailsFormComponentStyles } from '@/styles/componentsStyle/sectionsStyle/userProfile/detailsFormComponentStyle';
import { updateUserMutation } from "@/graphql/api/auth";
import { useMutation } from '@apollo/client';

interface StudentSubjectOfInterestProps {
    subjects: string[];
}

const StudentSubjectOfInterest: React.FC<StudentSubjectOfInterestProps> = ({ subjects }) => {
    const [interests, setSubjectList] = useState(subjects);
    const [newSubject, setNewSubject] = useState('');
    const [isEdited, setIsEdited] = useState(false);
    const [iconColor, setIconColor] = useState<string>(COLORS.grayWhiteText40persent);

    const [updateUser, { loading }] = useMutation(updateUserMutation);

    useEffect(() => {
        const subjectListStr = JSON.stringify(interests);
        const subjectsStr = JSON.stringify(subjects);
        if (subjectListStr !== subjectsStr) {
            setIconColor(COLORS.purple);
            setIsEdited(true);
        } else {
            setIconColor(COLORS.grayWhiteText40persent);
            setIsEdited(false);
        }
    }, [interests, subjects]);

    const handleAddSubject = () => {
        const trimmedSubject = newSubject.trim();
        if (trimmedSubject !== '') {
            const isDuplicate = interests.some(
                subject => subject.toLowerCase() === trimmedSubject.toLowerCase()
            );

            if (!isDuplicate) {
                setSubjectList([...interests, trimmedSubject]);
                setNewSubject('');
                Keyboard.dismiss();
            } else {
                setNewSubject('');
                Keyboard.dismiss();
            }
        }
    };

    const handleRemoveSubject = (indexToRemove: number) => {
        setSubjectList(interests.filter((_, index) => index !== indexToRemove));
    };

    const onSubjectOfInterestSave = async () => {
        const payload = {
            id: "67be4da84c0d37709fe1ce43",
            updateUserInput: { interests }
        }


        await updateUser({ variables: payload }).then((res) => {
            if (res.data.updateUser.status === 200) {
                setIconColor(COLORS.grayWhiteText40persent);
                setIsEdited(false);
            }
            else throw res.data.updateUser;
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <View style={studentSubjectOfInterestStyles.section}>
            <View style={detailsFormComponentStyles.personalInfoTitleContainer}>
                <Text style={studentSubjectOfInterestStyles.sectionTitle}>{STRING.subjectOfInterest}</Text>
                <TouchableOpacity disabled={!isEdited} style={detailsFormComponentStyles.personalInfoSaveButton} onPress={onSubjectOfInterestSave} >
                    <CustomIcon set={"Feather"} name={"save"} size={25} color={iconColor} />
                </TouchableOpacity>
            </View>

            <View style={studentSubjectOfInterestStyles.subjectsContainer}>
                {interests.map((subject, index) => (
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