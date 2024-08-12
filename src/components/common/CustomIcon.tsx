import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Ionicons, FontAwesome, Feather, Octicons, Fontisto,
    MaterialIcons, AntDesign, Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome5
} from "@expo/vector-icons";
import { AppColor } from '../../constants/colors';

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
};

/* For the documentation of the icons look at https://icons.expo.fyi/Index 😎
*/

const CustomIcon: React.FC<IconProps> = ({ set, name, size = 18, color = AppColor.white }) => {
    const Icon = iconMap[set];
    return (
        <View style={styles.iconContainer}>
            <Icon name={name as keyof typeof Icon.glyphMap} size={size} color={color} />
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomIcon;