import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FONT, SIZE } from "../../../constants";
import { AppColor } from "../../../constants/colors";
import CustomIcon from "../CustomIcon";
import { NAV_SCREEN_NAME, STRING } from "../../../constants/strings";

type SidebarFooterProps = {
    screenWidth: number;
    navigation: any
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ screenWidth, navigation }) => {
    const isNarrowScreen = screenWidth <= 780;
    return (
        <TouchableOpacity style={styles.sidebarBottomContainer} onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}> {/* TODO(Team): Navigate to the correct screen*/}

            <LinearGradient
                colors={[AppColor.darkPurple, AppColor.purple, AppColor.darkPurple]}
                style={styles.sidebarBottomItemContainer}
            >
                {isNarrowScreen ? (
                    <CustomIcon set="FontAwesome5" name="hands-helping" />
                ) : (
                    <Text style={styles.sidebarBottomItem}> { STRING.requestTutor }</Text>
                )}
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    sidebarBottomContainer: {
        position: "absolute",
        bottom: 30,
        left: 20,
        zIndex: 1,
    },
    sidebarBottomItemContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: AppColor.gray,
    },
    sidebarBottomItem: {
        color: AppColor.white,
        fontFamily: FONT.interRegular,
        fontSize: SIZE.sm,
    },
});

export default SidebarFooter;
