import React from "react";
import { View } from "react-native";

import { ComingSoonComponent, PrivateScreenLayout } from "../../components";
import { profileScreenStyles } from "../../styles/screensStyle/privateStyle/profileScreenStyle";

const ProfileScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={profileScreenStyles.homeMainContainer}>
        <ComingSoonComponent />
      </View>
    </PrivateScreenLayout>
  );
};

export default ProfileScreen;
