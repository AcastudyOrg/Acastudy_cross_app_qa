import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import { STRING } from "../../../constants/strings";
import { COLORS, IMAGES } from "../../../constants";
import CustomIcon from "../../common/CustomIcon";
import { UserType } from "@/types/User/User";
import EditProfileModal from "@/components/common/EditTutorProfileModal";
import React, { useState } from "react";

interface TopProfileProps {
  user: UserType;
}

const TopProfileComponent: React.FC<TopProfileProps> = ({ user }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <View style={profileScreenStyles.topProfileContainer}>
      <Pressable onPress={() => setShowEditModal(true)} style={profileScreenStyles.topProfileImageContainer}>
        <Image
          source={user?.imageUrl ? { uri: user?.imageUrl } : IMAGES.userPlaceholder}
          style={profileScreenStyles.topProfileImage}
        />
        <View style={profileScreenStyles.topProfileTextNameContainer}>
          <Text style={profileScreenStyles.topProfileTextNameItem}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Text style={profileScreenStyles.topProfileTextNameItems}>
            {user?.address?.city}, {user?.address?.province}
          </Text>
          <Text style={profileScreenStyles.topProfileTextNameItems}>
            {STRING.userPostCode}
          </Text>
        </View>
      </Pressable>
      <TouchableOpacity style={profileScreenStyles.floatingButton} onPress={() => console.log("Settings")} >
        <CustomIcon set={"Feather"} name={"settings"} color={COLORS.white} />
      </TouchableOpacity>

      <EditProfileModal
        user={user}
        visible={showEditModal}
        onClose={() => setShowEditModal(false)}
      />

    </View>
  );
};

export default TopProfileComponent;
