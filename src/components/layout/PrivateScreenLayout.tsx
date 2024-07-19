import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import { screenSize } from "../../../utils/config";

import TopNav from "../../navigation/TopNav";
import Sidebar from "../../navigation/SidebarNavComponent";
import colors from "../../constants/colors";

const PrivateScreenLayout = ({ children }: { children: React.ReactNode }) => {
  const size = screenSize();

  return (
    <SafeAreaView style={styles.layoutContainer}>
      {size === "mobile" ? (
        <View style={styles.topNavMobileContainer}>
          <TopNav />
        </View>
      ) : (
        <>
          {size === "desktop" || "tablet" ? (
            <View style={styles.sidebarContainer}>
              <Sidebar />
            </View>
          ) : null}
        </>
      )}

      <View style={styles.contentContainer}>
        {size === "desktop" || ("tablet" && size !== "mobile") ? (
          <View style={styles.topNavContainer}>
            <TopNav />
            <View style={styles.mainContent}>{children}</View>
          </View>
        ) : (
          <View style={styles.mainContent}>{children}</View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  topNavContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "82%",
  },
  topNavMobileContainer: {
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
  sidebarContainer: {
    width:
      screenSize() === "desktop" || screenSize() === "tablet" ? "18%" : "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    zIndex: 10,
    backgroundColor: colors.darkBlue,
  },
  mainContent: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
  },
});

export default PrivateScreenLayout;
