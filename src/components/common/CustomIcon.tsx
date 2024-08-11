import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Ionicons, FontAwesome, Feather, Octicons, Fontisto,
    MaterialIcons, AntDesign, Entypo, EvilIcons, MaterialCommunityIcons
} from "@expo/vector-icons";
import { AppColor } from '../../constants/colors';

type IconSetName = keyof typeof iconMap;

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
};

const CustomIcon: React.FC<IconProps> = ({ set, name, size = 24, color = AppColor.white }) => {
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
