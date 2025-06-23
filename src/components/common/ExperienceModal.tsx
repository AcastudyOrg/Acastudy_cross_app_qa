import { COLORS } from '@/constants';
import { experienceModelStyles } from '@/styles/componentsStyle/commonStyle/experienceModelStyles';
import { Experience } from '@/types/User/Tutor';
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';

interface ExpInput {
    company: string, period: string, position: string;
}
interface Props {
    loading?: boolean;
    loading_delete?: boolean;
    visible: boolean;
    onClose: () => void;
    onSave: (exp: ExpInput, index?: number) => void;
    onUpdate: (exp: ExpInput, index?: number) => void;
    onDelete?: (expId: string) => void;
    experience?: Experience;
    index?: number;
}

const ExperienceModal: React.FC<Props> = ({
    loading = false,
    loading_delete = false,
    visible,
    onClose,
    onSave,
    onUpdate,
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
                        <Pressable
                            style={[experienceModelStyles.button, { backgroundColor: COLORS.purple }]}
                            onPress={() => experience ? onUpdate({ company, period, position }, index)
                                : onSave({ company, period, position }, index)
                            }
                        >
                            {loading ?
                                <ActivityIndicator color={COLORS.white} size={"small"} /> :
                                <Text style={{ color: COLORS.white }}>Save</Text>}
                        </Pressable>

                        {experience && onDelete && (
                            <Pressable style={[experienceModelStyles.button, { backgroundColor: COLORS.red }]} onPress={() => { onDelete(experience?.id) }}>
                                {loading_delete ? <ActivityIndicator color={COLORS.white} size={"small"} /> :
                                    <Text style={{ color: COLORS.white }}>Delete</Text>}
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
