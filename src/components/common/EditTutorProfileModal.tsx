import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Image, Pressable, ImageURISource } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../../constants';
import { editProfileModel } from '@/styles/componentsStyle/commonStyle/editProfileModel';

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
            <View style={editProfileModel.constainer}>
                <View style={editProfileModel.modelCantainer} >
                    <Text style={editProfileModel.title}>Edit Profile</Text>

                    <Pressable onPress={pickImage} style={editProfileModel.imageTextContainer}>
                        <Image
                            source={typeof editedImage === 'number' ? editedImage : { uri: editedImage }}
                            style={editProfileModel.imageImage}
                        />
                        <Text style={editProfileModel.imageText}>Change Image</Text>
                    </Pressable>

                    <TextInput value={editedName} onChangeText={setEditedName} placeholder="Enter name" style={editProfileModel.input}/>

                    <View style={editProfileModel.buttonsContainer}>
                        <Pressable onPress={handleSave} style={editProfileModel.button}>
                            <Text style={editProfileModel.buttonText}>Update</Text>
                        </Pressable>

                        <Pressable onPress={onClose} style={[editProfileModel.button, { backgroundColor: COLORS.lightGrayOpacity }]}>
                            <Text style={editProfileModel.buttonText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EditProfileModal;
