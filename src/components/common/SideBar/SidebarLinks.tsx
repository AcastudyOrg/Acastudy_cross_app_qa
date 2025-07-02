import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import CustomIcon from "../CustomIcon";
import { navStudentTabs, navTutorTabs } from "../../../navigation/navLinks";
import { sidebarLinksStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarLinksStyle";
import { COLORS } from "../../../constants";
import { VIEW_MODE } from "@/constants/strings";

type SidebarLinksProps = {
    screenWidth: number;
    viewMode?: string;
};

const SidebarLinks: React.FC<SidebarLinksProps> = ({ screenWidth, viewMode }) => {
    const navigation = useNavigation<any>();
    const route = useRoute();
    
    // choose which navigations links to use based on the view mode
    const isStudent = VIEW_MODE.studentView === viewMode
    const navTabs = isStudent ? navStudentTabs : navTutorTabs

    return (
        <View style={sidebarLinksStyles.sidebarLinksContainer}>
            {navTabs.map((item, i) => {
                const isActive = route.name === item.link;
                return (
                    <TouchableOpacity
                        key={i}
                        onPress={() => navigation.navigate(item.link)}
                        style={sidebarLinksStyles.sidebarLinksItemsContainer}
                    >
                        <View style={sidebarLinksStyles.sidebarLinksIconItem}>
                            <CustomIcon
                                set={item.icon.set}
                                name={item.icon.name}
                                color={isActive ? COLORS.purple : COLORS.white}
                            />
                        </View>
                        {screenWidth >= 650 && (
                            <Text style={[sidebarLinksStyles.sidebarLinksItems, { color: isActive ? COLORS.purple : COLORS.white },]} >
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
