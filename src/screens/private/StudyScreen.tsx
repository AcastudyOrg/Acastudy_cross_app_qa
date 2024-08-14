import React from "react";
import { View } from "react-native";

import { ComingSoonComponent, PrivateScreenLayout } from "../../components";
import { studyScreenStyles } from "../../styles/screensStyle/privateStyle/studyScreenStyle";

const StudyScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={studyScreenStyles.homeMainContainer}>
        <ComingSoonComponent/>
      </View>
    </PrivateScreenLayout>
  );
};

export default StudyScreen;
