import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Image, Pressable, ImageURISource, Alert } from 'react-native';
import { COLORS } from '../../constants';
import { editProfileModel } from '@/styles/componentsStyle/commonStyle/editProfileModel';
import { pickImage } from '@/helpers/helpers';

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
    const [imageInfo, setImage] = useState<any | null>(null);
    const [editedImage, setEditedImage] = useState<string | number | ImageURISource | ImageURISource[]>(imageUrl);

    const uploadImage = async () => {
        const image = await pickImage();
        if (image?.uri) {
            setEditedImage(image.uri);
            setImage(image)
            onSave(editedName, image.uri);
        }
        else {
            Alert.alert("Image Selection", `No image selected or image selection was canceled.`);
        }
    }

    const handleSave = () => {
        if (imageInfo) {
            const file = {
                name: "_profile-" + imageInfo?.fileName,
                uri: imageInfo.uri,
                type: imageInfo.mimeType,
            };
            const formData = new FormData();
            formData.append("file", file as any);
            console.log("Form Data: ", file);

            ///Call api to upload the image
            // Example: const { url } = await uploadProfileImage(formData);

            //Call api to update user profile
            // payload = { firstName: editedName, lastName: "", imageUrl: url };

            onSave(editedName, imageInfo.uri as string);
            onClose();
        }
    };

    return (
        <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
            <View style={editProfileModel.constainer}>
                <View style={editProfileModel.modelCantainer} >
                    <Text style={editProfileModel.title}>Edit Profile</Text>

                    <Pressable onPress={uploadImage} style={editProfileModel.imageTextContainer}>
                        <Image
                            source={typeof editedImage === 'number' ? editedImage : { uri: editedImage }}
                            style={editProfileModel.imageImage}
                        />
                        <Text style={editProfileModel.imageText}>Change Image</Text>
                    </Pressable>

                    <TextInput value={editedName} onChangeText={setEditedName} placeholder="Enter name" style={editProfileModel.input} />

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
