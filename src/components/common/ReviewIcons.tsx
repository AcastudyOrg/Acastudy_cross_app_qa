import React from "react";
import { View } from "react-native";
import { COLORS } from "@/constants";
import CustomIcon from "@/components/common/CustomIcon";
import { Float } from "react-native/Libraries/Types/CodegenTypes";


interface ReviewIconsProps {
	review?: Float
	iconSize?: number
	iconColor?: string
}

export const ReviewIcons: React.FC<ReviewIconsProps> = ({ review = 5.0, iconSize = 12, iconColor = COLORS.gold }) => {
    const maxReviewCount = 5;
    const first = Math.floor(review);
    const remainder = review - first;

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {Array(maxReviewCount).fill(undefined).map((_, index) => {
                let iconComponent;

                if (index < first) {
                    iconComponent =
                        <CustomIcon set="FontAwesome" name="star" size={iconSize} color={iconColor} />
                } else if (index === first && remainder > 0) {
                    iconComponent =
                        <CustomIcon set="FontAwesome" name="star-half-empty" size={iconSize} color={iconColor} />
                } else {
                    iconComponent =
                        <CustomIcon set="FontAwesome" name="star-o" size={iconSize} color={iconColor} />
                }

                return (
                    <View key={index} style={{ margin: 5 }}>
                        {iconComponent}
                    </View>
                );
            })}
        </View>
    );
}