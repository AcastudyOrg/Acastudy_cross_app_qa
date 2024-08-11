import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { links } from "../../../../assets/data/navigationLinks";
import { COLORS, FONT, SIZE } from "../../../constants";

const SidebarLinks = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.sidebarLinksContainer}>
            {links.map((item, i) => {
                const isActive = route.name === item.link;
                return (
                    <TouchableOpacity
                        key={i}
                        onPress={() => navigation.navigate(item.link as never)}
                        style={styles.sidebarLinksItemsContainer}
                    >
                        <Image source={item.icon} style={styles.sidebarLinksIconItem} />
                        <Text
                            style={[
                                styles.sidebarLinksItems,
                                { color: isActive ? COLORS.purple : COLORS.white },
                            ]}
                        >
                            {item.name}
                        </Text>
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
        color: COLORS.white,
        fontFamily: FONT.interRegular,
        fontSize: SIZE.m,
    },
});

export default SidebarLinks;
