import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, FONT, SIZE } from "../../../constants";
import CustomIcon from "../CustomIcon";
import { navTabs } from "../../../navigation/navLinks";
import { AppColor } from "../../../constants/colors";



type SidebarLinksProps = {
    screenWidth: number;
};

const SidebarLinks: React.FC<SidebarLinksProps> = ({ screenWidth }) => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.sidebarLinksContainer}>
            {navTabs.map((item, i) => {
                const isActive = route.name === item.link;
                return (
                    <TouchableOpacity
                        key={i}
                        onPress={() => navigation.navigate(item.link as never)}
                        style={styles.sidebarLinksItemsContainer}
                    >
                        <View style={styles.sidebarLinksIconItem}>
                            <CustomIcon
                                set={item.icon.set}
                                name={item.icon.name}
                                color={isActive ? AppColor.purple : AppColor.white}
                            />
                        </View>
                        {screenWidth >= 650 && (
                            <Text style={[styles.sidebarLinksItems, { color: isActive ? AppColor.purple : AppColor.white },]} >
                                {item.name}
                            </Text>
                        )}

                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    sidebarLinksContainer: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 20,
        flexDirection: "column",
    },
    sidebarLinksItemsContainer: {
        paddingVertical: 15,
        flexDirection: "row",
        gap: 15,
    },
    sidebarLinksIconItem: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    sidebarLinksItems: {
        color: AppColor.white,
        fontFamily: FONT.plusJakartaRegular,
        fontSize: SIZE.m,
    },
});

export default SidebarLinks;
