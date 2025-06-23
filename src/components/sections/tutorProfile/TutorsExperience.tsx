import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Experience } from '@/types/User/Tutor';
import { UserType } from '@/types/User/User';
import { useTutorExperienceViewModel } from '@/viewmodels/useTutorExperienceViewModel';
import CustomIcon from '../../common/CustomIcon';
import ExperienceModal from '@/components/common/ExperienceModal';
import { tutorExperienceStyles } from '@/styles/componentsStyle/sectionsStyle/tutorsProfile/tutorExperienceStyle';
import { COLORS } from '@/constants';

interface ExperienceProps {
    user: UserType;
    experiences: Experience[];
    showExperiencePlaceholder?: boolean;
}

const TutorExperience: React.FC<ExperienceProps> = ({
    user,
    showExperiencePlaceholder = false
}) => {
    const {
        experiences,
        modalVisible,
        selectedExperience,
        selectedIndex,
        handleAdd,
        handleEdit,
        handleSave,
        handleUpdate,
        handleDelete,
        closeModal,
        loading_add,
        loading_delete,
    } = useTutorExperienceViewModel(user);

    return (
        <View style={tutorExperienceStyles.section}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={tutorExperienceStyles.sectionTitle}>Experience</Text>
                <Pressable style={{ left: 10, alignSelf: "center" }} onPress={handleAdd}>
                    <CustomIcon
                        set="Ionicons"
                        name="add-circle-outline"
                        size={25}
                        color={COLORS.white}
                    />
                </Pressable>
            </View>

            {experiences?.map((exp, index) => (
                <Pressable
                    key={index}
                    style={tutorExperienceStyles.experienceItem}
                    onPress={() => handleEdit(exp, index)}
                >
                    <View style={tutorExperienceStyles.icon}>
                        <CustomIcon set="Ionicons" name="briefcase-outline" size={25} />
                    </View>
                    <View style={tutorExperienceStyles.description}>
                        <Text style={tutorExperienceStyles.companyName}>{exp?.company}</Text>
                        <Text style={tutorExperienceStyles.period}>{exp?.period}</Text>
                        <Text style={tutorExperienceStyles.position}>{exp?.position}</Text>
                    </View>
                </Pressable>
            ))}

            {showExperiencePlaceholder && experiences?.length === 0 && (
                <Text style={{ color: COLORS.white50Percent }}>No experience added yet.</Text>
            )}

            <ExperienceModal
                loading={loading_add}
                loading_delete={loading_delete}
                visible={modalVisible}
                onClose={closeModal}
                onSave={handleSave}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                experience={selectedExperience}
                index={selectedIndex}
            />
        </View>
    );
};

export default TutorExperience;
