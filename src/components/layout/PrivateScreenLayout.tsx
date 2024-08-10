import * as React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";

import { getImageSource, screenSize } from "../../../utils/config";

import Sidebar from "../../navigation/SidebarNavComponent";
import colors, { AppColor } from "../../constants/colors";
import BottomMobileNavigation from "../../navigation/BottomMobileNav";
import { COLORS, FONT, IMAGES, SIZE } from "../../constants";
import TopBarComponent from "../common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";
import { LoginMockUser } from "../../../mockData/LoginUser";
import { DEVICE_TYPE, STRING } from "../../constants/strings";


const PrivateScreenLayout = ({ children }: { children: React.ReactNode }) => {

	//  we should listen to the changes of th size of the screen layout as we do with the topbar for responsiveness
  const size = screenSize();
  const user: User = LoginMockUser // TODO(Phillip): to pull data from the backend to assign to the user var
  return (
    <SafeAreaView style={styles.layoutContainer}>
      {size === DEVICE_TYPE.mobile ? (
        <View style={styles.topNavMobileContainer}>
          <View style={styles.sidebarMediaContainer}>
            <Text style={styles.sidebarMediaItem}> {STRING.appName} </Text>
          </View>
          <TopBarComponent renderRightSection={false} user={user} />
        </View>
      ) : (
        <>
          {size === DEVICE_TYPE.desktop || DEVICE_TYPE.tablet ? (
            <View style={styles.sidebarContainer}>
              <Sidebar />
            </View>
          ) : null}
        </>
      )}

      <View style={styles.contentContainer}>
        {size === DEVICE_TYPE.desktop || (DEVICE_TYPE.tablet && size !== DEVICE_TYPE.mobile) ? (
          <View style={styles.topNavContainer}>
            <TopBarComponent user={user} />
            <View style={styles.mainContent}>{children}</View>
          </View>
        ) : (
          <View style={styles.mainContent}>
            {children}
            <BottomMobileNavigation />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: AppColor.darkBlue,
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
    backgroundColor: AppColor.darkBlue,
  },
  mainContent: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
  },
  sidebarMediaContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  sidebarMediaItem: {
    color: AppColor.white,
    fontFamily: FONT.interBold,
    fontSize: SIZE.xxl,
  },
});

export default PrivateScreenLayout;
