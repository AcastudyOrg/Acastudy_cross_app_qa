import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AppColor } from "../../../constants/colors";
import CustomIcon from "../CustomIcon";
import { sidebarFooterStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarFooterStyle";
import { NAV_SCREEN_NAME, STRING } from "../../../constants/strings";

type SidebarFooterProps = {
    screenWidth: number;
    navigation: any
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ screenWidth, navigation }) => {
    const isNarrowScreen = screenWidth <= 780;
    return (
        <TouchableOpacity style={sidebarFooterStyles.sidebarBottomContainer} onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}>
            <LinearGradient
                colors={[AppColor.darkPurple, AppColor.purple, AppColor.darkPurple]}
                style={sidebarFooterStyles.sidebarBottomItemContainer}
            >
                {isNarrowScreen ? (
                    <CustomIcon set="FontAwesome5" name="hands-helping" />
                ) : (
                    <Text style={sidebarFooterStyles.sidebarBottomItem}> { STRING.requestTutor }</Text>
                )}
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default SidebarFooter;
