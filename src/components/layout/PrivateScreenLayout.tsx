import * as React from "react";
import { View, SafeAreaView, Image, ScrollView } from "react-native";

import TopBarComponent from "../common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";
import { IMAGES } from "../../constants";
import { LoginMockUser } from "../../../mockData/LoginUser";
import SidebarNavComponent from "../common/SideBar/SidebarNavComponent";
import BottomBarComponent from "../common/BottomBar/BottomBarComponent";
import { isMobile, isNotMobile } from "../../../utils/config";
import { privateScreenLayoutStyles } from "../../styles/componentsStyle/layoutStyle/privateScreenLayoutStyle";
import useScreenWidth from "../../hooks/useScreenWidth";

interface privatePropType {
  children: React.ReactNode;
  title?: string;
  shouldScroll?: boolean;
  showTitle?: boolean;
  showTopBar?: boolean;
  showBackButton?: boolean;
  showAppName?: boolean;
  showSearchBar?: boolean;
}

const PrivateScreenLayout: React.FC<privatePropType> = ({
  children,
  title,
  shouldScroll = true,
  showTitle = false,
  showTopBar = true,
  showBackButton = false,
  showAppName = false,
  showSearchBar = true
}) => {
  const screenWidth = useScreenWidth();
  const isNotMobileWidth = isNotMobile(screenWidth);
  const isMobileWidth = isMobile(screenWidth);

  const user: User = LoginMockUser;
  return (
    <SafeAreaView style={[privateScreenLayoutStyles.layoutContainer,
    { flexDirection: isMobileWidth ? "column" : "row" }]}>
      {isMobileWidth ? (
        <View style={privateScreenLayoutStyles.topNavMobileContainer}>
          <View style={privateScreenLayoutStyles.sidebarMediaContainer}>
            <Image
              source={IMAGES.appLogo}
              alt="coming-soon-image"
              style={privateScreenLayoutStyles.logoMobileImage}
            />
          </View>
          {showTopBar && <TopBarComponent renderRightSection={false} user={user} />}
        </View>
      ) : (
        <>
          {isNotMobileWidth ? (
            <View style={[privateScreenLayoutStyles.sidebarContainer, { width: isNotMobileWidth ? "18%" : "0%" }]}>
              <SidebarNavComponent />
            </View>
          ) : null}
        </>
      )}

      <View style={[privateScreenLayoutStyles.contentContainer, { marginLeft: isMobileWidth ? 0 : "18%" }]}>
        {isNotMobileWidth ? (
          <View style={privateScreenLayoutStyles.topNavContainer}>
            {showTopBar && <TopBarComponent
              user={user}
              title={title}
              showTitle={showTitle}
              showBackButton={showBackButton}
              showAppName={showAppName}
              showSearchBar={showSearchBar}
            />}
            {shouldScroll ? <ScrollView
              style={privateScreenLayoutStyles.childrenScrollView}
              showsVerticalScrollIndicator={false}>
              <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
            </ScrollView> :
              <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
            }
          </View>
        ) : (
          <View style={privateScreenLayoutStyles.mobileScrollViewContainer}>
            {shouldScroll ? <ScrollView showsVerticalScrollIndicator={false}>
              <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
            </ScrollView> :
              <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
            }
            <BottomBarComponent />
          </View>
        )}
      </View>
    </SafeAreaView >
  );
};

export default PrivateScreenLayout;