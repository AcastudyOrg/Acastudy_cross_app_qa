import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import CustomIcon from "../CustomIcon";
import { navTabs } from "../../../navigation/navLinks";
import { sidebarLinksStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarLinksStyle";
import { AppColor } from "../../../constants/colors";



type SidebarLinksProps = {
    screenWidth: number;
};

const SidebarLinks: React.FC<SidebarLinksProps> = ({ screenWidth }) => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={sidebarLinksStyles.sidebarLinksContainer}>
            {navTabs.map((item, i) => {
                const isActive = route.name === item.link;
                return (
                    <TouchableOpacity
                        key={i}
                        onPress={() => navigation.navigate(item.link as never)}
                        style={sidebarLinksStyles.sidebarLinksItemsContainer}
                    >
                        <View style={sidebarLinksStyles.sidebarLinksIconItem}>
                            <CustomIcon
                                set={item.icon.set}
                                name={item.icon.name}
                                color={isActive ? AppColor.purple : AppColor.white}
                            />
                        </View>
                        {screenWidth >= 650 && (
                            <Text style={[sidebarLinksStyles.sidebarLinksItems, { color: isActive ? AppColor.purple : AppColor.white },]} >
                                {item.name}
                            </Text>
                        )}

                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default SidebarLinks;
