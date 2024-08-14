import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { WelcomeScreenRouteProp } from "../../types/router/navigation";
import { AppTopNavigationComponent } from "../../components";
import { welcomeScreenStyles } from "../../styles/screensStyle/privateStyle/welcomeScreenStyle";

const WelcomeScreen = () => {
  const route = useRoute<WelcomeScreenRouteProp>();
  const user = route.params.data;

  function renderNavigationSection() {
    return (
      <View style={welcomeScreenStyles.welcomeTopNavigationContainer}>
        <AppTopNavigationComponent
          backNavigation={false}
          authenticatedUser={true}
          companyLogo={true}
        />
      </View>
    );
  }

  function renderScreenContentList() {
    return <>{renderNavigationSection()}</>;
  }

  return (
    <SafeAreaView style={welcomeScreenStyles.welcomeMainContainer}>
      {renderScreenContentList()}
    </SafeAreaView>
  );
};

export default WelcomeScreen;
