import React from "react";
import { View } from "react-native";

import { sidebarFooterStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarFooterStyle";
import { NAV_SCREEN_NAME, STRING } from "../../../constants/strings";
import ButtonComponent from "../Form/ButtonComponent";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

type SidebarFooterProps = {
    navigation: any,
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ navigation }) => {
    return (
        <View style={sidebarFooterStyles.sidebarBottomContainer}>
            <ButtonComponent
                text={STRING.requestTutor}
                onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)}
            />
        </View>
    );
};

export default SidebarFooter;
