import * as React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import { screenSize } from "../../../utils/config";
import { DEVICE_TYPE } from "../../constants/strings";
import { privateScreenLayoutStyles } from "../../styles/componentsStyle/layoutStyle/privateScreenLayoutStyle";
import OnboardingTopBar from "../common/TopBar/OnboardingTopBar";

const PublicScreenLayout = ({ children }: { children: React.ReactNode }) => {
  const size = screenSize();
  return (
    <SafeAreaView style={privateScreenLayoutStyles.layoutContainer}>
      {size === DEVICE_TYPE.desktop ||
      (DEVICE_TYPE.tablet && size !== DEVICE_TYPE.mobile) ? (
        <View style={privateScreenLayoutStyles.topNavContainer}>
          <OnboardingTopBar />
          <ScrollView
            style={privateScreenLayoutStyles.childrenScrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={privateScreenLayoutStyles.mainContent}>
              {children}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View style={privateScreenLayoutStyles.mobileScrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <OnboardingTopBar />
            <View style={privateScreenLayoutStyles.mainContent}>
              {children}
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default PublicScreenLayout;
