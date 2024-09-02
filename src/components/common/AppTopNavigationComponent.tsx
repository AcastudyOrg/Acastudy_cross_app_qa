import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { TopNavigationProps } from "../../types";
import { appTopNavigationComponentStyles } from "../../styles/componentsStyle/commonStyle/appTopNavigationComponentStyle";
import { COLORS, IMAGES } from "../../constants";

const AppTopNavigationComponent = ({
  backNavigation,
  authenticatedUser,
  companyLogo,
}: TopNavigationProps) => {
  const navigation = useNavigation();

  return (
    <View style={appTopNavigationComponentStyles.appNavigationMainContainer}>
      <View style={appTopNavigationComponentStyles.appNavigatorRouterContainer}>
        {backNavigation && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={appTopNavigationComponentStyles.appNavigatorRouterContent}
          >
            <Ionicons name="arrow-back-circle" size={28} color={COLORS.white} />
          </TouchableOpacity>
        )}
      </View>

      <View style={appTopNavigationComponentStyles.appNavigatorLogoContainer}>
        {companyLogo && (
          <Image source={IMAGES.appLogo} style={appTopNavigationComponentStyles.appNavigatorLogoItem} />
        )}
      </View>

      <View style={appTopNavigationComponentStyles.appNavigatorUserPictureContainer}>
        {authenticatedUser && (
          <Image
            source={IMAGES.userPlaceholder}
            style={appTopNavigationComponentStyles.appNavigatorUserPictureItem}
          />
        )}
      </View>
    </View>
  );
};

export default AppTopNavigationComponent;
