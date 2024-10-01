import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { topicsComponentStyles } from "../../../styles/componentsStyle/sectionsStyle/subjectsStyle/topicsComponentStyle";

type topicType = {
    item: {
        topic: string,
        levelOfStudy: string,
        tutors: number,
    }
}
export const TopicsComponent: React.FC<topicType> = ({ item }) => {
    return (
        <TouchableOpacity
            onPress={() => console.log(`Pressed: ${item.topic} | ${item.levelOfStudy}`)}
            style={topicsComponentStyles.topicsComponentContainer}>
            <Text style={topicsComponentStyles.topicsComponentTitle}>{item.topic}</Text>
            <View style={topicsComponentStyles.topicsComponentRow}>
                <Text style={topicsComponentStyles.topicsComponentText}>{item.levelOfStudy}</Text>
                <Text style={topicsComponentStyles.topicsComponentText}>{item.tutors}</Text>
            </View>
        </TouchableOpacity>
    );
}