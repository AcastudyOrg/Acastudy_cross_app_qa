import * as React from "react";
import { View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";

import TopBarComponent from "../common/TopBar/TopBarComponent";
import { COLORS, IMAGES } from "../../constants";
import SidebarNavComponent from "../common/SideBar/SidebarNavComponent";
import BottomBarComponent from "../common/BottomBar/BottomBarComponent";
import { isMobile, isNotMobile } from "../../../utils/config";
import { privateScreenLayoutStyles } from "../../styles/componentsStyle/layoutStyle/privateScreenLayoutStyle";
import useScreenWidth from "../../hooks/useScreenWidth";
import CustomIcon from "../common/CustomIcon";
import { NAV_SCREEN_NAME, VIEW_MODE } from "../../constants/strings";
import { useNavigation } from "@react-navigation/native";
import { useGetUser } from "@/graphql/hooks/user";
import { UserType } from "@/types/User/User";
import useGetRole from "@/hooks/useGetRole";


interface MobileTopNavProps {
  user: UserType;
  showTopBar: boolean;
  viewMode?: string;
}

interface SidebarProps {
  isNotMobileWidth: boolean;
  viewMode?: string;
}

interface PrivatePropType {
  children: React.ReactNode;
  title?: string;
  shouldScroll?: boolean;
  showTitle?: boolean;
  showTopBar?: boolean;
  showBackButton?: boolean;
  showAppName?: boolean;
  showSearchBar?: boolean;
  mobileShowAppLogo?: boolean;
}

const MobileTopNav: React.FC<MobileTopNavProps> = ({ user, showTopBar, viewMode }) => {
  return (
    
    <View style={privateScreenLayoutStyles.topNavMobileContainer}>
      <View style={privateScreenLayoutStyles.sidebarMediaContainer}>
        <Image
          source={IMAGES.appLogo}
          alt="app_logo"
          style={privateScreenLayoutStyles.logoMobileImage}
        />
      </View>
      {showTopBar && <TopBarComponent renderRightSection={false} user={user} viewMode={viewMode}/>}
    </View>
  );
};


const Sidebar: React.FC<SidebarProps> = ({ isNotMobileWidth, viewMode }) => {
  return (
    <View
      style={[
        privateScreenLayoutStyles.sidebarContainer,
        { width: isNotMobileWidth ? "18%" : "0%" },
      ]}
    >
      <SidebarNavComponent viewMode={viewMode} />
    </View>
  );
};

const FloatingRequestButton: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={privateScreenLayoutStyles.floatingRequestButton}
      onPress={() => navigation.navigate(NAV_SCREEN_NAME.RequestTutorScreen)}
    >
      <CustomIcon set={"MaterialIcons"} name={"waving-hand"} size={24} color={COLORS.purple} />
    </TouchableOpacity>
  );
};


const PrivateScreenLayout: React.FC<PrivatePropType> = ({
  children,
  title,
  shouldScroll = true,
  showTitle = false,
  showTopBar = true,
  showBackButton = false,
  showAppName = false,
  showSearchBar = true,
  mobileShowAppLogo = true,
}) => {
  const screenWidth = useScreenWidth();
  const isNotMobileWidth = isNotMobile(screenWidth);
  const isMobileWidth = isMobile(screenWidth);
  const { user } = useGetUser();
  const viewMode = useGetRole() || ""

  console.log("PrivateScreenLayout user", viewMode);
  return (
    <SafeAreaView style={[ privateScreenLayoutStyles.layoutContainer,{ flexDirection: isMobileWidth ? "column" : "row" }]}>
      {isMobileWidth ? (
        mobileShowAppLogo && <MobileTopNav user={user} showTopBar={showTopBar} viewMode={viewMode}/>
      ) : (
        isNotMobileWidth && <Sidebar isNotMobileWidth={isNotMobileWidth} viewMode={viewMode}/>
      )}

      <View
        style={[ privateScreenLayoutStyles.contentContainer, { marginLeft: isMobileWidth ? 0 : "18%" }]}>
        {isNotMobileWidth ? ( 
          <View style={privateScreenLayoutStyles.topNavContainer}>
            {showTopBar && (
              <TopBarComponent
                user={user}
                title={title}
                showTitle={showTitle}
                showBackButton={showBackButton}
                showAppName={showAppName}
                showSearchBar={showSearchBar}
                viewMode={viewMode}
              />
            )}
            {shouldScroll ? (
              <ScrollView style={privateScreenLayoutStyles.childrenScrollView} showsVerticalScrollIndicator={false} >
                <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
              </ScrollView>
            ) : (
              <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
            )}
          </View>
        ) : (
          <View style={privateScreenLayoutStyles.mobileScrollViewContainer}>
            {shouldScroll ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
              </ScrollView>
            ) : (
              <View style={privateScreenLayoutStyles.mainContent}>{children}</View>
            )}

            { VIEW_MODE.studentView === viewMode && (
                <FloatingRequestButton />
            )}
            <BottomBarComponent viewMode={viewMode}/>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PrivateScreenLayout;