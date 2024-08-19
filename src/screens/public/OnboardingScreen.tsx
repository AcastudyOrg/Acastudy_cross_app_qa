import React, {  } from "react";
import { View } from "react-native";

import { onboardingScreenStyles } from "../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";


const OnboardingScreen = () => {

  const user: User = {
    name: "",
    surname: "",
    profilePictureUrl: 0
  };


  return (
    <View style={onboardingScreenStyles.onboardingContainer}>
      <TopBarComponent
        renderRightSection={true}
        showAppName={true}
        showSearchBar={false}
        isLSignedIn={false}
        user={user}
        showBecomeATutorOnly={false}
      />
    </View>
  );
};

export default OnboardingScreen;
