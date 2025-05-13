import React, { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, Button } from 'react-native';
import { Experience } from '../../../types/User/Tutor';
import CustomIcon from '../../common/CustomIcon';
import { tutorExperienceStyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorExperienceStyle';
import ExperienceModal from '@/components/common/ExperienceModal';
import { COLORS } from '@/constants';


interface ExperienceProps {
    experiences: Experience[];
    showExperiencePlaceholder?: boolean;
}

const TutorExperience: React.FC<ExperienceProps> = ({ experiences: initialExperiences, showExperiencePlaceholder = false }) => {
    const [experiences, setExperiences] = useState<Experience[]>(initialExperiences);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<Experience | undefined>();
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

    const handleEdit = (exp: Experience, index: number) => {
        setSelectedExperience(exp);
        setSelectedIndex(index);
        setModalVisible(true);
    };

    const handleAdd = () => {
        setSelectedExperience(undefined);
        setSelectedIndex(undefined);
        setModalVisible(true);
    };

    const handleSave = (exp: Experience, index?: number) => {
        if (index !== undefined) {
            const updated = [...experiences];
            updated[index] = exp;
            setExperiences(updated);
        } else {
            setExperiences([...experiences, exp]);
        }
        setModalVisible(false);
    };

    const handleDelete = (index: number) => {
        const updated = experiences.filter((_, i) => i !== index);
        setExperiences(updated);
        setModalVisible(false);
    };

    return (
        <View style={tutorExperienceStyles.section}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={tutorExperienceStyles.sectionTitle}>Experience</Text>
                <Pressable style={{ marginLeft: 10 }} onPress={handleAdd}>
                    <CustomIcon
                        set='Ionicons'
                        name='add-circle-outline'
                        size={35}
                        color={COLORS.white}
                    />
                </Pressable>
            </View>
            {experiences.map((exp: Experience, index: number) => (
                <Pressable
                    key={index}
                    style={tutorExperienceStyles.experienceItem}
                    onPress={() => handleEdit(exp, index)}
                >
                    <View style={tutorExperienceStyles.icon}>
                        <CustomIcon set='Ionicons' name='briefcase-outline' size={25} />
                    </View>
                    <View style={tutorExperienceStyles.description}>
                        <Text style={tutorExperienceStyles.companyName}>{exp.company}</Text>
                        <Text style={tutorExperienceStyles.period}>{exp.period}</Text>
                        <Text style={tutorExperienceStyles.position}>{exp.position}</Text>
                    </View>
                </Pressable>
            ))}
            {showExperiencePlaceholder && experiences.length === 0 && (
                <Text style={{ color: COLORS.white50Percent }}>No experience added yet.</Text>
            )}

            <ExperienceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={handleSave}
                onDelete={handleDelete}
                experience={selectedExperience}
                index={selectedIndex}
            />
        </View>
    );
};

export default TutorExperience;