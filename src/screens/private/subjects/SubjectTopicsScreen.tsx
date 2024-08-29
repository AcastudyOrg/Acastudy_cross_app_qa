import React from "react";
import { View } from "react-native";

import { PrivateScreenLayout } from "../../../components";
import { TopicsHeader } from "../../../components/sections/subjects/TopicsHeader";
import { TopicsSection } from "../../../components/sections/subjects/TopicsSection";

const SubjectTopicsScreen = () => {
    return (
        <PrivateScreenLayout>
            <View>
                <TopicsHeader />
                <TopicsSection />
            </View>
        </PrivateScreenLayout>
    );
};

export default SubjectTopicsScreen;
