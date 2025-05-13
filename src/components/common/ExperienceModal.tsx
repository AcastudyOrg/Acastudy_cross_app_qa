import { COLORS } from '@/constants';
import { experienceModelStyles } from '@/styles/componentsStyle/commonStyle/experienceModelStyles';
import { Experience } from '@/types/User/User';
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Pressable } from 'react-native';

interface Props {
    visible: boolean;
    onClose: () => void;
    onSave: (exp: Experience, index?: number) => void;
    onDelete?: (index: number) => void;
    experience?: Experience;
    index?: number;
}

const ExperienceModal: React.FC<Props> = ({
    visible,
    onClose,
    onSave,
    onDelete,
    experience,
    index,
}) => {
    const [company, setCompany] = useState('');
    const [period, setPeriod] = useState('');
    const [position, setPosition] = useState('');

    useEffect(() => {
        if (experience) {
            setCompany(experience.company);
            setPeriod(experience.period);
            setPosition(experience.position);
        } else {
            setCompany('');
            setPeriod('');
            setPosition('');
        }
    }, [experience]);

    return (
        <Modal visible={visible} animationType="fade" transparent>
            <View style={experienceModelStyles.container}>
                <View style={experienceModelStyles.modalContainer}>
                    <Text style={experienceModelStyles.title}>{experience ? 'Edit Experience' : 'Add Experience'}</Text>
                    <TextInput placeholder="Company" value={company} onChangeText={setCompany} style={experienceModelStyles.input} />
                    <TextInput placeholder="Period" value={period} onChangeText={setPeriod} style={experienceModelStyles.input} />
                    <TextInput placeholder="Position" value={position} onChangeText={setPosition} style={experienceModelStyles.input} />

                    <View style={experienceModelStyles.ctaButtons}>
                        <Pressable style={[experienceModelStyles.button, { backgroundColor: COLORS.purple }]} onPress={() => onSave({ company, period, position }, index)}>
                            <Text style={{ color: COLORS.white }}>Save</Text>
                        </Pressable>

                        {experience && onDelete && (
                            <Pressable style={[experienceModelStyles.button, { backgroundColor: COLORS.red }]} onPress={() => onDelete(index!)}>
                                <Text style={{ color: COLORS.white }}>Delete</Text>
                            </Pressable>
                        )}

                    </View>
                    <Pressable style={experienceModelStyles.button} onPress={onClose}>
                        <Text style={{ color: COLORS.white }}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default ExperienceModal;
