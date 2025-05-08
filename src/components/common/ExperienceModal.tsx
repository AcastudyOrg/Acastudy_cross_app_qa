// ExperienceModal.tsx
import { COLORS } from '@/constants';
import { Experience } from '@/types/User/User';
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

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
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>{experience ? 'Edit Experience' : 'Add Experience'}</Text>
                    <TextInput placeholder="Company" value={company} onChangeText={setCompany} style={styles.input} />
                    <TextInput placeholder="Period" value={period} onChangeText={setPeriod} style={styles.input} />
                    <TextInput placeholder="Position" value={position} onChangeText={setPosition} style={styles.input} />

                    <View style={styles.ctaButtons}>
                        <Pressable style={[styles.button, { backgroundColor: COLORS.purple }]} onPress={() => onSave({ company, period, position }, index)}>
                            <Text style={{ color: COLORS.white }}>Save</Text>
                        </Pressable>

                        {experience && onDelete && (
                            <Pressable style={[styles.button, { backgroundColor: COLORS.red }]} onPress={() => onDelete(index!)}>
                                <Text style={{ color: COLORS.white }}>Delete</Text>
                            </Pressable>
                        )}
                        
                    </View>
                    <Pressable style={styles.button} onPress={onClose}>
                        <Text style={{ color: COLORS.white }}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.transparent50percent,

    },
    modalContainer: {
        padding: 20,
        width: '90%',
        maxWidth: 380,
        backgroundColor: COLORS.darkBlue,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: COLORS.white,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingVertical: 5,
        color: COLORS.white,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: COLORS.transparent,
        borderRadius: 5,
        height: 40,
        padding: 10,
    },
    ctaButtons: {
        flexDirection: 'row',
        gap: 12,
        paddingBottom: 10,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: COLORS.lightGrayOpacity,
        padding: 12,
        borderRadius: 8,
    },
});

export default ExperienceModal;
