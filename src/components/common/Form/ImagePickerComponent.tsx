import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { ImagePickerComponentProps } from "../../../types";
import { imagePickerComponentStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/imagePickerComponentStyle";
import { COLORS, IMAGES } from "../../../constants";

const ImagePickerComponent = ({ onImagePicked }: ImagePickerComponentProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      onImagePicked(result.assets[0].uri);
    }
  };

  return (
    <View style={imagePickerComponentStyles.imagePickerMainContainer}>
      <TouchableOpacity
        onPress={pickImage}
        style={imagePickerComponentStyles.imagePickerContentContainer}
      >
        <Image
          source={
            selectedImage ? { uri: selectedImage } : IMAGES.userPlaceholder
          }
          style={
            selectedImage ? imagePickerComponentStyles.imagePickedItem : imagePickerComponentStyles.imagePickerItem
          }
        />
        <MaterialCommunityIcons
          name="camera-account"
          size={28}
          color={COLORS.white}
          style={imagePickerComponentStyles.imageIconItem}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;
