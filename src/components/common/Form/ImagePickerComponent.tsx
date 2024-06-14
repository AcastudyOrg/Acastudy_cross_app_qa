import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { ImagePickerComponentProps } from "../../../types";
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
    <View style={styles.imagePickerMainContainer}>
      <TouchableOpacity
        onPress={pickImage}
        style={styles.imagePickerContentContainer}
      >
        <Image
          source={
            selectedImage ? { uri: selectedImage } : IMAGES.userPlaceholder
          }
          style={
            selectedImage ? styles.imagePickedItem : styles.imagePickerItem
          }
        />
        <MaterialCommunityIcons
          name="camera-account"
          size={28}
          color={COLORS.white}
          style={styles.imageIconItem}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePickerMainContainer: {
    width: "100%",
  },
  imagePickerContentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagePickerItem: {
    width: 130,
    height: 130,
    borderRadius: 0,
    resizeMode: "cover",
  },
  imagePickedItem: {
    width: 130,
    height: 130,
    borderRadius: 70,
    resizeMode: "cover",
  },
  imageIconItem: {
    position: "absolute",
    bottom: 0,
    right: 140,
  },
});

export default ImagePickerComponent;
