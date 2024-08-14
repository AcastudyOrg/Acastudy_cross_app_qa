import * as React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

import { screenSize } from "../../../utils/config";

import { AppColor } from "../../constants/colors";
import { FONT, SIZE } from "../../constants";
import TopBarComponent from "../common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";
import { LoginMockUser } from "../../../mockData/LoginUser";
import { DEVICE_TYPE, STRING } from "../../constants/strings";
import SidebarNavComponent from "../common/SideBar/SidebarNavComponent";
import BottomBarComponent from "../common/BottomBar/BottomBarComponent";
import { privateScreenLayoutStyles } from "../../styles/componentsStyle/layoutStyle/privateScreenLayoutStyle";


const PrivateScreenLayout = ({ children }: { children: React.ReactNode }) => {

	//  we should listen to the changes of th size of the screen layout as we do with the topbar for responsiveness
  const size = screenSize();
  const user: User = LoginMockUser // TODO(Phillip): to pull data from the backend to assign to the user var
  return (
    <SafeAreaView style={privateScreenLayoutStyles.layoutContainer}>
      {size === DEVICE_TYPE.mobile ? (
        <View style={privateScreenLayoutStyles.topNavMobileContainer}>
          <View style={privateScreenLayoutStyles.sidebarMediaContainer}>
            <Text style={privateScreenLayoutStyles.sidebarMediaItem}> {STRING.appName} </Text>
          </View>
          <TopBarComponent renderRightSection={false} user={user} />
        </View>
      ) : (
        <>
          {size === DEVICE_TYPE.desktop || DEVICE_TYPE.tablet ? (
            <View style={privateScreenLayoutStyles.sidebarContainer}>
              <SidebarNavComponent/>
            </View>
          ) : null}
        </>
      )}

      <View style={privateScreenLayoutStyles.contentContainer}>
        {size === DEVICE_TYPE.desktop || (DEVICE_TYPE.tablet && size !== DEVICE_TYPE.mobile) ? (
          <View style={privateScreenLayoutStyles.topNavContainer}>
            <TopBarComponent user={user} />
            <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
          </View>
        ) : (
          <View style={privateScreenLayoutStyles.mainContent}>
            {children}
            <BottomBarComponent/>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PrivateScreenLayout;