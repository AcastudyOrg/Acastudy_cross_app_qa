import React from 'react';
import { View } from 'react-native';
import {
    Ionicons, FontAwesome, Feather, Octicons, Fontisto,
    MaterialIcons, AntDesign, Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome5, FontAwesome6
} from "@expo/vector-icons";

import { customIconStyle } from '../../styles/componentsStyle/commonStyle/customIconStyle';
import { COLORS } from '../../constants';

export type IconSetName = keyof typeof iconMap;

type IconProps = {
    set: IconSetName;
    name: string;
    size?: number;
    color?: string;
};

const iconMap = {
    Ionicons,
    FontAwesome,
    Feather,
    Octicons,
    Fontisto,
    MaterialIcons,
    AntDesign,
    Entypo,
    EvilIcons,
    MaterialCommunityIcons,
    FontAwesome5, 
    FontAwesome6,
};

/* For the documentation of the icons look at https://icons.expo.fyi/Index 😎
*/

const CustomIcon: React.FC<IconProps> = ({ set, name, size = 18, color = COLORS.white }) => {
    const Icon = iconMap[set];
    return (
        <View style={customIconStyle.iconContainer}>
            <Icon name={name as keyof typeof Icon.glyphMap} size={size} color={color} />
        </View>
    );
};

export default CustomIcon;
