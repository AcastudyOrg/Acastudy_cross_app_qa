import React from "react";
import { TouchableOpacity, View } from "react-native";

import { sidebarFooterStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarFooterStyle";
import { NAV_SCREEN_NAME, STRING } from "../../../constants/strings";
import GradientButtonComponent from "../Form/GradientButtonComponent";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { LinearGradient } from "expo-linear-gradient";
import { buttonComponentStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/buttonComponentStyle";
import CustomIcon from "../CustomIcon";
import { COLORS } from "../../../constants";

type SidebarFooterProps = {
    navigation: any,
    screenWidth: number,
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ navigation, screenWidth }) => {
    const isNarrowScreen = screenWidth <= 780;
    return (
        <View style={sidebarFooterStyles.sidebarBottomContainer}>
            {isNarrowScreen ?
                <TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}>
                    <LinearGradient
                        colors={[COLORS.darkPurple, COLORS.purple, COLORS.darkPurple]}
                        style={buttonComponentStyles.buttonContainer}>
                        <CustomIcon set="FontAwesome5" name="hands-helping" />
                    </LinearGradient>
                </TouchableOpacity>
                :
                <GradientButtonComponent
                    text={STRING.requestTutor}
                    onPress={() => navigation.navigate(NAV_SCREEN_NAME.RequestTutorScreen)}
                />}
        </View>
    );
};

export default SidebarFooter;
