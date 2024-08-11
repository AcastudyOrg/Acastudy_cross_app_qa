import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FONT, SIZE } from "../../../constants";
import { AppColor } from "../../../constants/colors";

const SidebarFooter = () => {
    return (
        <View style={styles.sidebarBottomContainer}>
            <LinearGradient
                colors={[AppColor.purple, AppColor.lightGray, AppColor.purple]}
                style={styles.sidebarBottomItemContainer}
            >
                <Text style={styles.sidebarBottomItem}>Request tutor</Text>
            </LinearGradient>
        </View>
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
