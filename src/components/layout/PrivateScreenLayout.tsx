import * as React from "react";
import { View, SafeAreaView, Text, Image, ScrollView } from "react-native";

import { screenSize } from "../../../utils/config";
import TopBarComponent from "../common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";
import { LoginMockUser } from "../../../mockData/LoginUser";
import { DEVICE_TYPE, STRING } from "../../constants/strings";
import SidebarNavComponent from "../common/SideBar/SidebarNavComponent";
import BottomBarComponent from "../common/BottomBar/BottomBarComponent";
import { privateScreenLayoutStyles } from "../../styles/componentsStyle/layoutStyle/privateScreenLayoutStyle";
import { IMAGES } from "../../constants";
import { sidebarHeaderStyles } from "../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarHeaderStyle";


const PrivateScreenLayout = ({ children }: { children: React.ReactNode }) => {
  const size = screenSize();
  const user: User = LoginMockUser;
  return (
    <SafeAreaView style={privateScreenLayoutStyles.layoutContainer}>
      {size === DEVICE_TYPE.mobile ? (
        <View style={privateScreenLayoutStyles.topNavMobileContainer}>
          <View style={privateScreenLayoutStyles.sidebarMediaContainer}>
            <Image
              source={IMAGES.appLogo}
              alt="coming-soon-image"
              style={privateScreenLayoutStyles.logoMobileImage}
            />
          </View>
          <TopBarComponent renderRightSection={false} user={user} />
        </View>
      ) : (
        <>
          {size === DEVICE_TYPE.desktop || DEVICE_TYPE.tablet ? (
            <View style={privateScreenLayoutStyles.sidebarContainer}>
              <SidebarNavComponent />
            </View>
          ) : null}
        </>
      )}

      <View style={privateScreenLayoutStyles.contentContainer}>
        {size === DEVICE_TYPE.desktop || (DEVICE_TYPE.tablet && size !== DEVICE_TYPE.mobile) ? (
          <View style={privateScreenLayoutStyles.topNavContainer}>
            <TopBarComponent user={user} />
            <ScrollView
              style={privateScreenLayoutStyles.childrenScrollView}
              showsVerticalScrollIndicator={false}>
              <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
            </ScrollView>
          </View>
        ) : (
          <View style={privateScreenLayoutStyles.mobileScrollViewContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={privateScreenLayoutStyles.mainContent}>
                {children}
              </View>
            </ScrollView>
            <BottomBarComponent />
          </View>
        )}
      </View>
    </SafeAreaView >
  );
};

export default PrivateScreenLayout;