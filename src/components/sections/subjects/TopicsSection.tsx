import React from "react";
import { View } from "react-native";

import { TopicsComponent } from "./TopicsComponent";
import SubjectTopics from "../../../../assets/data/subjects/SubjectTopics.json";
import { topicsSectiontyles } from "../../../styles/componentsStyle/sectionsStyle/subjectsStyle/topicsSectionStyle";

export const TopicsSection = () => {
    return (
        <View style={topicsSectiontyles.topicsSectionContainer}>
            {SubjectTopics.map((topic, index) => {
                if (index % 2 === 0)
                    return <View style={topicsSectiontyles.topicsSectionRow} key={index}>
                        <TopicsComponent item={topic} />
                        {index + 1 < SubjectTopics.length &&
                            <TopicsComponent item={SubjectTopics[index + 1]} />
                        }
                    </View>
            })}
        </View>
    );
}