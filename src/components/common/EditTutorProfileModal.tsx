import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Image, Pressable, ImageURISource, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../../constants';

interface EditProfileModalProps {
    visible: boolean;
    onClose: () => void;
    name: string;
    imageUrl: string | number | ImageURISource | ImageURISource[];
    onSave: (updatedName: string, updatedImage: string) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
    visible,
    onClose,
    name,
    imageUrl,
    onSave,
}) => {
    const [editedName, setEditedName] = useState(name);
    const [editedImage, setEditedImage] = useState<string | number | ImageURISource | ImageURISource[]>(imageUrl);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });

        if (!result.canceled && result.assets?.[0].uri) {
            setEditedImage(result.assets[0].uri);
        }
    };

    const handleSave = () => {
        onSave(editedName, editedImage as string);
        onClose();
    };

    return (
        <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
            <View style={styles.constainer}>
                <View style={styles.modelCantainer} >
                    <Text style={styles.title}>Edit Profile</Text>

                    <Pressable onPress={pickImage} style={styles.imageTextContainer}>
                        <Image
                            source={typeof editedImage === 'number' ? editedImage : { uri: editedImage }}
                            style={styles.imageImage}
                        />
                        <Text style={styles.imageText}>Change Image</Text>
                    </Pressable>

                    <TextInput value={editedName} onChangeText={setEditedName} placeholder="Enter name" style={styles.input}/>

                    <View style={styles.buttonsContainer}>
                        <Pressable onPress={handleSave} style={styles.button}>
                            <Text style={styles.buttonText}>Update</Text>
                        </Pressable>

                        <Pressable onPress={onClose} style={[styles.button, { backgroundColor: COLORS.lightGrayOpacity }]}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.transparent50percent,
    },
    modelCantainer: {
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
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    imageTextContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageText: {
        color: COLORS.purple,
        marginBottom: 15
    },
    imageImage: {
        width: 100, height: 100, borderRadius: 50, marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.transparent,
        backgroundColor: COLORS.lightGrayOpacity,
        borderRadius: 8,
        width: '100%',
        padding: 10,
        marginBottom: 20,
        color: COLORS.white,
    },
    buttonsContainer: {
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
        backgroundColor: COLORS.purple,
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: 'bold'
    }
});

export default EditProfileModal;
