import React from "react";
import { Text } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";

interface ComponentType {
    value: string;
}

const TextReviewComponent: React.FC<ComponentType> = ({ value }) => {
    return (
        <Text style={[profileScreenStyles.cell, profileScreenStyles.tableText]}>
            {value}
        </Text>
    );
}

export default TextReviewComponent;