import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { TopNavigationProps } from "../../types";
import { COLORS, IMAGES } from "../../constants";

const AppTopNavigationComponent = ({
  authenticatedUser,
  companyLogo,
}: TopNavigationProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.appNavigationMainContainer}>
      {/*Router section*/}
      <View style={styles.appNavigatorRouterContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.appNavigatorRouterContent}
        >
          <Ionicons name="arrow-back-circle" size={28} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/*App Logo section*/}
      <View style={styles.appNavigatorLogoContainer}>
        {companyLogo && (
          <Image source={IMAGES.appLogo} style={styles.appNavigatorLogoItem} />
        )}
      </View>

      {/*User image section*/}
      <View style={styles.appNavigatorUserPictureContainer}>
        {authenticatedUser && (
          <Image
            source={IMAGES.user}
            style={styles.appNavigatorUserPictureItem}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appNavigationMainContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "auto",
  },
  appNavigatorRouterContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  appNavigatorRouterContent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  appNavigatorLogoContainer: {
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  appNavigatorLogoItem: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  appNavigatorUserPictureContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  appNavigatorUserPictureItem: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 50,
  },
});

export default AppTopNavigationComponent;
